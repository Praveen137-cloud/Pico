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

  const audioRef = useRef(new Audio());

  useEffect(() => {
    api.get('/api/subjects')
      .then(res => {
        const subj = res.data.find(s => s._id === subjectId);
        const sec = subj?.sections.find(s => s._id === sectionId);
        const uni = sec?.units.find(u => u._id === unitId);
        setUnit(uni);
        if (uni?.lessons[0]) {
          playTTS(uni.lessons[0].questionText);
          if (uni.lessons[0].type === 'code_fill_in') {
            setUserCode(uni.lessons[0].codeSnippet);
          }
        }
      })
      .catch(err => console.error(err));
  }, [subjectId, sectionId, unitId]);

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
      setSelectedKey(null);
      setSelectedValue(null);
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
    if (isCorrect) playSuccess();
    else {
      playError();
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const checkAnswer = () => {
    const currentLesson = unit.lessons[currentLessonIndex];
    if (currentLesson.type === 'multiple_choice') {
      if (currentLesson.correctAnswer === selectedOption) {
        setFeedback('correct');
        playSound(true);
      } else {
        setFeedback('wrong');
        playSound(false);
      }
    } else if (currentLesson.type === 'programming_board') {
      const answers = currentLesson.correctAnswer.split('|');
      const isAllCorrect = answers.every((ans, idx) => (boardAnswers[idx] || '').trim() === ans.trim());
      if (isAllCorrect) {
        setFeedback('correct');
        playSound(true);
        setIsImpact(true);
        setTimeout(() => setIsImpact(false), 500);
      } else {
        setFeedback('wrong');
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

  const { setUser, setSubjects } = useContext(AuthContext);

  const handleNext = async () => {
    if (currentLessonIndex + 1 < unit.lessons.length) {
      setCurrentLessonIndex(prev => prev + 1);
    } else {
      // Completed unit! Call API to unlock next lesson and update XP
      try {
        const res = await api.post('/api/unlock', { subjectId, sectionId, unitId });
        if (res.data.success) {
          // Update global state immediately
          setUser(res.data.user);
          // Also fetch updated subjects to refresh 'isCompleted' flags
          const subjRes = await api.get('/api/subjects');
          setSubjects(subjRes.data);
        }
      } catch (err) {
        console.error('Unlock error:', err);
      }
      navigate(`/celebration`, { state: { subjectId, sectionId, xpGained: unit.xp || 20 } });
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
    <div style={styles.page} className={isImpact ? 'animate-shake' : ''}>
      <header style={styles.header}>
        <button style={styles.closeBtn} onClick={() => navigate(-1)}>✕</button>
        <div style={styles.progressBarWrapper}>
          <div style={{...styles.progressBarFill, width: `${(currentLessonIndex / unit.lessons.length) * 100}%`}}></div>
        </div>
        <button
          onClick={() => { setMuted(m => !m); window.speechSynthesis.cancel(); }}
          style={{ background: 'none', border: 'none', color: muted ? '#EF4444' : 'var(--text-muted)', fontSize: 18, cursor: 'pointer', padding: '4px 8px' }}
          title={muted ? 'Unmute TTS' : 'Mute TTS'}
        >{muted ? '🔇' : '🔊'}</button>
      </header>

      <div style={styles.content}>
        <h2 style={styles.unitTitle}>{unit.title}</h2>
        <div style={styles.mascotArea}>
          <span style={styles.mascot}>🦜</span>
          <div style={styles.speechBubble} className={shake ? 'animate-shake' : ''}>
            <TypingEffect text={picoMsg || currentLesson.questionText} />
          </div>
          {feedback === 'wrong' && currentLesson.explanation && !picoMsg && (
            <div style={styles.explanationBox}>
              <span style={{marginRight: 8}}>💡</span>
              {currentLesson.explanation}
            </div>
          )}
          
          {/* New Tiered Hint System */}
          {(currentLesson.type === 'code_fill_in' || currentLesson.type === 'programming_board') && (
            <div style={{ width: '100%', maxWidth: 600 }}>
              <TieredHint 
                hints={[currentLesson.hint, currentLesson.explanation]} 
                codeSnippet={currentLesson.correctAnswer} 
              />
            </div>
          )}

          {!picoMsg && currentLesson.hint && currentLesson.type !== 'code_fill_in' && currentLesson.type !== 'programming_board' && (
            <div style={{ width: '100%', maxWidth: 600 }}>
              {showHint
                ? <div style={{ backgroundColor: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: 8, padding: '10px 14px', color: '#FBBF24', fontSize: 13, fontStyle: 'italic' }}>💡 {currentLesson.hint}</div>
                : <button onClick={() => setShowHint(true)} style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', color: '#FBBF24', borderRadius: 8, padding: '6px 14px', cursor: 'pointer', fontSize: 12, fontWeight: 700 }}>💡 Show Hint</button>
              }
            </div>
          )}
        </div>

        {currentLesson.type === 'teaching' && (
          <div style={styles.teachingContainer}>
            {currentLesson.codeSnippet && (
              <pre style={styles.codeSnippet}>{currentLesson.codeSnippet}</pre>
            )}
            <button style={styles.btnPrimary} onClick={handleNext}>Got it, Continue →</button>
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
            <h3 style={{color: '#1DD28B', margin: 0}}>Correct! 🎉</h3>
            <button style={{...styles.btnPrimary, width: 'auto', backgroundColor: '#1DD28B', padding: '12px 32px', borderRadius: '12px', border: 'none', fontWeight: 700}} onClick={handleNext}>Next</button>
          </div>
        )}

        {feedback === 'wrong' && (
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px', width: '100%'}}>
            <h3 style={{color: '#EC4899', margin: 0}}>Not quite... 🤔</h3>
            <div style={{backgroundColor: '#EC489922', padding: '12px', borderRadius: '8px', border: '1px solid #EC4899'}}>
              <span style={{color: '#EC4899', fontWeight: 'bold'}}>Correct Answer: </span>
              <span style={{color: '#fff', fontFamily: 'monospace'}}>{currentLesson.correctAnswer}</span>
            </div>
            {currentLesson.explanation && (
              <div style={{backgroundColor: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.4)', borderRadius: 8, padding: '10px 14px', color: '#93C5FD', fontSize: 13}}>
                📘 {currentLesson.explanation}
              </div>
            )}
            <button style={{...styles.btnPrimary, width: '100%', backgroundColor: 'var(--divider)', color: '#fff', padding: '12px 32px', borderRadius: '12px', border: 'none', fontWeight: 700}} onClick={handleNext}>Got it, Next</button>
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
  boardInput: { backgroundColor: 'transparent', border: 'none', borderBottom: '2px solid var(--theme-primary)', color: '#FFD700', width: '100px', fontSize: '18px', textAlign: 'center', outline: 'none', margin: '0 8px', fontWeight: 900 }
};

export default Lesson;
