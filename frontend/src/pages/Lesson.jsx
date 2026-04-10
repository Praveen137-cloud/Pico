import React, { useState, useEffect, useRef, useContext } from 'react';
import api from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { AudioContext } from '../App';
import TypingEffect from '../components/TypingEffect';
import TieredHint from '../components/TieredHint';
import _Editor from 'react-simple-code-editor';
const Editor = _Editor.default || _Editor;
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/themes/prism-twilight.css';
import './Lesson.css';

const correctSfx = 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3';
const wrongSfx = 'https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3';

const Lesson = () => {
  const { subjectId, sectionId, unitId } = useParams();
  const navigate = useNavigate();

  const [unit, setUnit] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isImpact, setIsImpact] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [muted, setMuted] = useState(false);
  const [shake, setShake] = useState(false);

  // For code running questions
  const [userCode, setUserCode] = useState('');
  const [codeOutput, setCodeOutput] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  
  // For match_following
  const [matchPairs, setMatchPairs] = useState(null); // {keys, values}
  const [selectedKey, setSelectedKey] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  // For programming_board
  const [boardAnswers, setBoardAnswers] = useState({}); // { index: value }
  const [lastTestResult, setLastTestResult] = useState(null); // { expected, actual }

  // Core Gamification State
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isSpeedBonus, setIsSpeedBonus] = useState(false);
  const [showXpBurst, setShowXpBurst] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [aiHint, setAiHint] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const audioRef = useRef(new Audio());

  // Timer logic for Speed Bonus
  useEffect(() => {
    if (!unit || feedback || isGameOver) return;
    
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, feedback, unit, isGameOver]);

  // Reset timer on question change
  useEffect(() => {
    setTimeLeft(15);
    setIsSpeedBonus(false);
  }, [currentLessonIndex]);

  // 1. Fetch Lessons for Unit
  useEffect(() => {
    api.get(`/api/curriculum/units/${unitId}/lessons`)
      .then(res => {
        setUnit({ lessons: res.data });
        if (res.data[0]) {
          if (res.data[0].type === 'code_fill_in') {
            setUserCode(res.data[0].codeSnippet);
          }
        }
      })
      .catch(err => console.error(err));
  }, [unitId]);

  useEffect(() => {
    if (unit && currentLessonIndex < unit.lessons.length) {
      const lesson = unit.lessons[currentLessonIndex];
      if (!muted) playTTS(lesson.questionText);
      if (lesson.type === 'code_fill_in') {
        setUserCode(lesson.codeSnippet);
        setCodeOutput('');
      }
      if (lesson.type === 'match_following') {
        // Shuffle the values independently from keys
        const keys = lesson.pairs.map(p => p.key);
        const values = lesson.pairs.map(p => p.value).sort(() => Math.random() - 0.5);
        setMatchPairs({ keys, values });
      }
      if (lesson.type === 'programming_board') {
        setBoardAnswers({});
      }
      setSelectedOption(null);
      setFeedback(null);
      setShowHint(false);
      setLastTestResult(null);
      setSelectedKey(null);
      setSelectedValue(null);
      setAiHint(null);
    }
  }, [currentLessonIndex, unit]);

  const playTTS = (text) => {
    if (!text || muted) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const { playSuccess, playError, playFanfare } = useContext(AudioContext);

  const playSound = (isCorrect) => {
    if (isCorrect) {
      playSuccess();
      setCombo(prev => prev + 1);
      setShowXpBurst(true);
      setTimeout(() => setShowXpBurst(false), 800);
      if (timeLeft > 10) setIsSpeedBonus(true);
    } else {
      playError();
      setCombo(0);
      setLives(prev => {
        const next = prev - 1;
        if (next <= 0) setIsGameOver(true);
        return next;
      });
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const getSuccessMsg = () => {
    const msgs = ["SYSTEM BREACHED", "ACCESS GRANTED", "DATA SYNCED", "CRITICAL HIT"];
    return msgs[Math.floor(Math.random() * msgs.length)];
  };

  const getErrorMsg = () => {
    const msgs = ["SHIELDS DOWN", "LOGICAL MISALIGNMENT", "BRUTE FORCE FAILED"];
    return msgs[Math.floor(Math.random() * msgs.length)];
  };

  const checkAnswer = () => {
    if (currentLesson.type === 'multiple_choice') {
      if (currentLesson.correctAnswer === selectedOption) {
        setFeedback('correct');
        playSound(true);
      } else {
        setFeedback('wrong');
        playSound(false);
      }
    } else if (currentLesson.type === 'programming_board') {
      // STRICT validation: no case folding or trimming
      const answers = Object.values(boardAnswers);
      const expected = currentLesson.correctAnswer.split(',');
      
      let isCorrect = true;
      let firstMismatch = null;

      if (expected.length !== answers.length) {
        isCorrect = false;
        firstMismatch = { expected: expected[0], actual: answers[0] || "[MISSING]" };
      } else {
        for(let i=0; i<expected.length; i++) {
          if (expected[i] !== answers[i]) { 
            isCorrect = false; 
            firstMismatch = { expected: expected[i], actual: answers[i] || "[EMPTY]" };
            break; 
          }
        }
      }

      if (isCorrect) {
        setFeedback('correct');
        setLastTestResult(null);
        playSound(true);
      } else {
        setFeedback('wrong');
        setLastTestResult(firstMismatch);
        playSound(false);
      }
    }
  };

  const handleMatch = (type, item) => {
    if (!matchPairs) return;
    const currentLesson = unit.lessons[currentLessonIndex];
    let newKey = selectedKey;
    let newValue = selectedValue;

    if (type === 'key') newKey = item;
    else newValue = item;

    if (newKey && newValue) {
      const pair = currentLesson.pairs.find(p => p.key === newKey && p.value === newValue);
      if (pair) {
        // Match! Remove from available
        setMatchPairs(prev => ({
          keys: prev.keys.filter(k => k !== newKey),
          values: prev.values.filter(v => v !== newValue)
        }));
        setSelectedKey(null);
        setSelectedValue(null);
        
        // If all matched
        if (matchPairs.keys.length === 1) {
          setFeedback('correct');
          playSound(true);
        }
      } else {
        playSound(false);
        setSelectedKey(null);
        setSelectedValue(null);
      }
    } else {
      if (type === 'key') setSelectedKey(item);
      else setSelectedValue(item);
    }
  };

  const [picoMsg, setPicoMsg] = useState('');

  const executeAndCheckCode = async () => {
    const currentLesson = unit.lessons[currentLessonIndex];
    setIsCompiling(true);
    setPicoMsg('');
    try {
      const res = await api.post('/api/execute', {
        problemId: currentLesson.problemId || '000000000000000000000000', // Handle dummy or real IDs
        code: userCode,
        language: currentLesson.language
      });
      
      if (res.data.picoMsg) setPicoMsg(res.data.picoMsg);

      const out = res.data.output || res.data.stderr;
      setCodeOutput(out);
      
      if (res.data.status === 'SUCCESS') {
        setFeedback('correct');
        playSound(true);
      } else {
        setFeedback('wrong');
        playSound(false);
      }
    } catch (err) {
      setCodeOutput('Error executing code');
      setFeedback('wrong');
      playSound(false);
    }
    setIsCompiling(false);
  };

  const getAiHint = async () => {
    setIsAiLoading(true);
    try {
      const currentLesson = unit.lessons[currentLessonIndex];
      const res = await api.post('/api/ai/hint', {
        problemTitle: unit.title,
        problemDesc: currentLesson.questionText,
        userCode: userCode,
        lastError: lastTestResult ? `Expected ${lastTestResult.expected}, but got ${lastTestResult.actual}` : (codeOutput || null),
        currentLesson: currentLesson
      });
      setAiHint(res.data.hint);
    } catch (err) {
      setAiHint("🦜 Pico: 'My logic buffers are a bit scrambled! Just focus on the basics.'");
    }
    setIsAiLoading(false);
  };

  const { setUser, setSubjects } = useContext(AuthContext);

  const handleNext = async () => {
    if (currentLessonIndex + 1 < unit.lessons.length) {
      setCurrentLessonIndex(prev => prev + 1);
    } else {
      // Completed unit! Call API to mark progress if needed
      navigate(`/celebration`, { state: { subjectId, sectionId, xpGained: 50 } });
    }
  };

  if (!unit) return <div style={{padding: 24, color: '#fff'}}>Loading lesson...</div>;
  if (unit.lessons.length === 0) {
    return (
      <div style={styles.page}>
        <header style={styles.header}>
          <button style={styles.closeBtn} onClick={() => navigate(-1)}>✕</button>
        </header>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, textAlign: 'center'}}>
          <div style={{fontSize: 64, marginBottom: 24}}>🚧</div>
          <h2 style={{color: '#fff', marginBottom: 12}}>Coming Soon!</h2>
          <p style={{color: 'var(--text-muted)'}}>We are actively cooking up advanced coaching lessons for this unit. Check back later!</p>
          <button style={{...styles.btnPrimary, maxWidth: 300, marginTop: 32}} onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }

  const currentLesson = unit.lessons[currentLessonIndex];

  return (
    <div style={styles.page} className={shake ? 'animate-shake' : ''}>
      {/* Gamification Overlays */}
      {showXpBurst && <div className="xp-burst">+10 XP</div>}
      {shake && <div className="impact-flash" />}
      
      {isGameOver && (
        <div className="failure-screen">
          <div style={{fontSize: 80, marginBottom: 24}}>💀</div>
          <h1 style={{color: '#fff', fontWeight: 900, letterSpacing: 2}}>SYSTEM COLLAPSE</h1>
          <p style={{color: 'var(--text-muted)', marginBottom: 40}}>The elite firewall has detected your misalignment. Re-syncing is required.</p>
          <button style={styles.btnPrimary} onClick={() => window.location.reload()}>RE-SYNC CORE</button>
        </div>
      )}

      <header style={styles.header}>
        <button style={styles.closeBtn} onClick={() => navigate(-1)}>✕</button>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '8px', flex: 1}}>
          <div style={{display: 'flex', gap: '4px'}}>
             {[1,2,3].map(h => (
               <span key={h} className={`heart-icon ${lives < h ? 'broken' : ''}`}>
                 {lives < h ? '🖤' : '❤️'}
               </span>
             ))}
          </div>
          <div className="battle-bar">
            <div className="battle-bar-fill" style={{width: `${(currentLessonIndex / unit.lessons.length) * 100}%`}}></div>
          </div>
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          {combo > 1 && <div className="combo-badge">🔥 x{combo}</div>}
          {isSpeedBonus && <div className="speed-badge">⚡ SPEED</div>}
          <div style={{color: 'var(--theme-primary)', fontWeight: 900, fontSize: 13}}>{timeLeft}s</div>
        </div>

        <button
          onClick={() => { setMuted(m => !m); window.speechSynthesis.cancel(); }}
          style={{ background: 'none', border: 'none', color: muted ? '#EF4444' : 'var(--text-muted)', fontSize: 18, cursor: 'pointer', padding: '4px 8px' }}
        >{muted ? '🔇' : '🔊'}</button>
      </header>

      <div style={styles.content}>
        <h2 style={styles.unitTitle}>{unit.title}</h2>
        {currentLesson.type !== 'teaching' && (
          <div style={styles.mascotArea}>
            <div style={styles.speechBubble}>
              <TypingEffect text={currentLesson.questionText} />
              <button 
                className="tts-btn-mini"
                onClick={() => playTTS(currentLesson.questionText)}
                title="Pico Read Aloud"
              >
                🔊 Read Aloud
              </button>
            </div>
            {feedback === 'wrong' && currentLesson.explanation && (
              <div style={styles.explanationBox}>
                <span style={{marginRight: 8}}>📖</span>
                {currentLesson.explanation}
              </div>
            )}
            {aiHint && (
              <div style={styles.aiHintBox}>
                <div style={styles.aiHintLabel}>PICO'S SECRET HINT 🦜</div>
                <TypingEffect text={aiHint} />
              </div>
            )}
          </div>
        )}

        {currentLesson.type === 'teaching' && (
          <div style={styles.technicalArticle}>
            <div className="article-header">
              <span className="article-badge">TECHNICAL BRIEF</span>
              <button 
                className="read-aloud-banner"
                onClick={() => playTTS(currentLesson.questionText)}
              >
                🔊 READ ALOUD
              </button>
            </div>
            
            <div className="article-body">
              <TypingEffect text={currentLesson.questionText} />
            </div>

            {currentLesson.codeSnippet && (
              <div className="article-code-preview">
                <div style={styles.codeHeader}>Upcoming Protocol Challenge</div>
                <pre style={styles.codeSnippet}>{currentLesson.codeSnippet}</pre>
                <div className="code-hint">💡 Study this logic! It forms the core of your next task.</div>
              </div>
            )}
            
            <button style={{...styles.btnPrimary, marginTop: 40}} onClick={handleNext}>CONCENT ACKNOWLEDGED & SYNCED →</button>
          </div>
        )}

        {currentLesson.type === 'multiple_choice' && (
          <div style={styles.optionsContainer}>
            {currentLesson.options.map(opt => (
              <button 
                key={opt}
                style={{
                  ...styles.optionBtn, 
                  borderColor: selectedOption === opt ? 'var(--theme-primary)' : 'var(--divider)',
                  backgroundColor: selectedOption === opt ? '#1DD28B22' : 'var(--bg-card)'
                }}
                onClick={() => setSelectedOption(opt)}
                disabled={feedback === 'correct'}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {currentLesson.type === 'match_following' && matchPairs && (
          <div style={styles.matchGrid}>
             <div style={styles.matchCol}>
                {matchPairs.keys?.map(key => (
                  <button 
                    key={key} 
                    style={{...styles.matchBtn, borderColor: selectedKey === key ? 'var(--theme-primary)' : 'var(--divider)'}}
                    onClick={() => handleMatch('key', key)}
                  >
                    {key}
                  </button>
                ))}
             </div>
             <div style={styles.matchCol}>
                {matchPairs.values?.map(val => (
                  <button 
                    key={val} 
                    style={{...styles.matchBtn, borderColor: selectedValue === val ? 'var(--theme-primary)' : 'var(--divider)'}}
                    onClick={() => handleMatch('value', val)}
                  >
                    {val}
                  </button>
                ))}
             </div>
          </div>
        )}

        {currentLesson.type === 'programming_board' && (
          <div style={styles.boardContainer}>
             <div style={styles.boardCode}>
               {currentLesson.codeSnippet.split('___').map((part, idx, arr) => (
                 <React.Fragment key={idx}>
                   <span>{part}</span>
                   {idx < arr.length - 1 && (
                     <input 
                       style={styles.boardInput}
                       value={boardAnswers[idx] || ''}
                       onChange={(e) => setBoardAnswers({...boardAnswers, [idx]: e.target.value})}
                       placeholder="..."
                     />
                   )}
                 </React.Fragment>
               ))}
             </div>
             {!feedback && (
               <button style={{...styles.btnPrimary, marginTop: 24}} onClick={checkAnswer}>Verify Board</button>
             )}
          </div>
        )}

        {currentLesson.type === 'code_fill_in' && (
          <div style={styles.codeFillContainer}>
            <div style={styles.editorContainer}>
              <Editor
                value={userCode}
                onValueChange={code => setUserCode(code)}
                highlight={code => languages.c ? highlight(code || '', languages.c, 'c') : code || ''}
                padding={16}
                disabled={feedback === 'correct'}
                style={{
                  fontFamily: '"Fira Code", "JetBrains Mono", monospace',
                  fontSize: 14,
                  backgroundColor: '#10131C',
                  color: '#E2E8F0',
                  minHeight: '200px'
                }}
              />
            </div>
            {codeOutput && (
              <div style={styles.outputBox}>{codeOutput}</div>
            )}
          </div>
        )}
      </div>

      <div style={{
        ...styles.footer, 
        borderColor: feedback === 'correct' ? '#1DD28B' : feedback === 'wrong' ? '#EC4899' : 'var(--divider)',
        boxShadow: feedback === 'correct' ? '0 -10px 40px rgba(29, 210, 139, 0.3)' : feedback === 'wrong' ? '0 -10px 40px rgba(236, 72, 153, 0.2)' : 'none',
        transition: 'all 0.4s ease'
      }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: feedback ? 12 : 0 }}>
          {!feedback && !aiHint && (
            <button 
              style={styles.btnSecondary} 
              onClick={getAiHint} 
              disabled={isAiLoading}
            >
              {isAiLoading ? 'CONSULTING PICO...' : '💡 ASK PICO FOR A HINT'}
            </button>
          )}
        </div>

        {/* Footer actions depending on state and type */}
        {!feedback && (currentLesson.type === 'multiple_choice') && (
          <button style={{...styles.btnPrimary, opacity: selectedOption ? 1 : 0.5}} onClick={checkAnswer} disabled={!selectedOption}>
            Check
          </button>
        )}
        
        {!feedback && (currentLesson.type === 'code_fill_in') && (
          <button style={styles.btnPrimary} onClick={executeAndCheckCode} disabled={isCompiling}>
            {isCompiling ? 'Running...' : 'Run & Check'}
          </button>
        )}

        {feedback === 'correct' && (
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <h3 style={{color: '#1DD28B', margin: 0, fontSize: '14px', fontWeight: 900}}>{getSuccessMsg()}</h3>
            <button style={{...styles.btnPrimary, width: 'auto', backgroundColor: '#1DD28B', padding: '12px 32px', borderRadius: '12px', border: 'none', fontWeight: 900}} onClick={handleNext}>NEXT PHASE</button>
          </div>
        )}

        {feedback === 'wrong' && (
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px', width: '100%'}}>
            <h3 style={{color: '#EC4899', margin: 0, fontSize: '14px', fontWeight: 900}}>{getErrorMsg()}</h3>
            
            {lastTestResult && (
              <div className="protocol-evaluation-report">
                <div className="report-header">PROTOCOL EVALUATION REPORT</div>
                <div className="report-row">
                  <span className="report-label">EXPECTED CODE:</span>
                  <span className="report-value expected">{lastTestResult.expected}</span>
                </div>
                <div className="report-row">
                  <span className="report-label">ACTUAL INPUT:</span>
                  <span className="report-value actual">{lastTestResult.actual}</span>
                </div>
                <div className="report-hint">MISALIGNMENT DETECTED. ENSURE EXACT SYNTAX.</div>
              </div>
            )}

            {!lastTestResult && (
              <div style={{backgroundColor: '#EC489922', padding: '12px', borderRadius: '8px', border: '1px solid #EC4899'}}>
                <span style={{color: '#EC4899', fontWeight: '900', fontSize: 10}}>EXPECTED ANALYSIS: </span>
                <span style={{color: '#fff', fontFamily: 'monospace', fontSize: 13}}>{currentLesson.correctAnswer}</span>
              </div>
            )}
            <button style={{...styles.btnPrimary, width: '100%', backgroundColor: 'var(--divider)', color: '#fff', padding: '12px 32px', borderRadius: '12px', border: 'none', fontWeight: 900, marginTop: 8}} onClick={handleNext}>SYNC & CONTINUE</button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: { display: 'flex', flexDirection: 'column', height: '100dvh', backgroundColor: 'var(--bg-dark)' },
  header: { display: 'flex', alignItems: 'center', padding: '16px', gap: '16px' },
  closeBtn: { background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' },
  progressBarWrapper: { flex: 1, height: '12px', backgroundColor: '#2D3748', borderRadius: '6px', overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: 'var(--theme-primary)', transition: 'width 0.3s ease' },
  content: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', overflowY: 'auto' },
  unitTitle: { color: '#E2E8F0', fontSize: '18px', fontWeight: 'bold', marginBottom: '24px' },
  mascotArea: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginBottom: '32px', width: '100%', maxWidth: '600px' },
  mascot: { fontSize: '64px' },
  speechBubble: { backgroundColor: '#10131C', border: '1px solid var(--theme-primary)', padding: '16px 24px', borderRadius: '16px', color: '#fff', fontSize: '18px', fontWeight: '500', width: '100%', textAlign: 'center' },
  optionsContainer: { width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '12px' },
  optionBtn: { padding: '16px', borderRadius: '12px', border: '2px solid', color: '#E2E8F0', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' },
  teachingContainer: { width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '24px' },
  codeSnippet: { backgroundColor: '#10131C', padding: '16px', borderRadius: '12px', color: '#3B82F6', fontFamily: 'monospace', fontSize: '14px', whiteSpace: 'pre-wrap' },
  btnPrimary: { backgroundColor: 'var(--theme-primary)', color: '#0F172A', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '16px', cursor: 'pointer', width: '100%' },
  codeFillContainer: { width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 },
  editorContainer: { flex: 1, backgroundColor: '#10131C', border: '2px solid var(--divider)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8)' },
  outputBox: { backgroundColor: '#000', color: 'var(--theme-primary)', padding: '12px', borderRadius: '8px', fontFamily: 'monospace' },
  footer: { padding: '16px 24px', backgroundColor: 'var(--bg-dark)', borderTop: '2px solid' },
  
  // New Styles
  matchGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%', maxWidth: '600px' },
  matchCol: { display: 'flex', flexDirection: 'column', gap: '12px' },
  matchBtn: { padding: '14px', borderRadius: '12px', border: '2px solid var(--divider)', backgroundColor: 'var(--bg-card)', color: '#fff', fontWeight: '600', cursor: 'pointer', transition: '0.2s', fontSize: 14 },
  boardContainer: { width: '100%', maxWidth: '700px', backgroundColor: '#10131C', padding: '24px', borderRadius: '16px', border: '1px solid var(--divider)' },
  boardCode: { fontFamily: 'monospace', fontSize: '18px', lineHeight: '2', color: '#3B82F6', whiteSpace: 'pre-wrap' },
  boardInput: { backgroundColor: 'transparent', border: 'none', borderBottom: '2px solid var(--theme-primary)', color: '#FFD700', width: '100px', fontSize: '18px', textAlign: 'center', outline: 'none', margin: '0 8px', fontWeight: 900 },
  btnSecondary: { backgroundColor: 'transparent', border: '2px solid var(--theme-primary)', color: 'var(--theme-primary)', padding: '12px 20px', borderRadius: '12px', fontWeight: '900', fontSize: '12px', cursor: 'pointer', flex: 1, letterSpacing: 1 },
  aiHintBox: { backgroundColor: '#1E293B', border: '1px solid #3B82F6', padding: '16px', borderRadius: '12px', color: '#E2E8F0', fontSize: '15px', width: '100%', marginTop: '16px', textAlign: 'left', position: 'relative', overflow: 'hidden' },
  aiHintLabel: { color: '#3B82F6', fontSize: '10px', fontWeight: '900', marginBottom: '8px', letterSpacing: 1.5 }
};

export default Lesson;
