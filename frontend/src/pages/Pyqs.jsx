import React, { useState, useEffect, useRef, useContext } from 'react';
import Editor from '@monaco-editor/react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';
import { Award, Zap, BookOpen, Code, Terminal, CheckCircle } from 'lucide-react';
import PreLoader from '../components/PreLoader';

const TAGS = ['All', 'Arrays', 'Strings', 'Math', 'Sorting', 'Recursion', 'Two Pointers'];
const DIFFICULTIES = ['All', 'Easy', 'Medium', 'Hard'];
const DIFF_COLOR = { Easy: '#10B981', Medium: '#F59E0B', Hard: '#EF4444' };
const LANGUAGE_LABELS = { c: '🔵 C', python: '🟡 Python', java: '🟠 Java' };

const getStorageKey = (id, lang) => `pico_code_${id}_${lang}`;
const saveCode = (id, lang, code) => { try { localStorage.setItem(getStorageKey(id, lang), code); } catch {} };
const loadCode = (id, lang, fallback) => { try { const s = localStorage.getItem(getStorageKey(id, lang)); return s !== null ? s : fallback; } catch { return fallback; } };

const Pyqs = () => {
  const { user } = useContext(AuthContext);
  const [allProblems, setAllProblems] = useState([]);
  const [activeTag, setActiveTag] = useState('All');
  const [activeDiff, setActiveDiff] = useState('All');
  const [activeProblem, setActiveProblem] = useState(null);
  const [language, setLanguage] = useState(user?.preferredLanguage || 'python');
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Fetch only Zoho PYQ problems
    api.get('/api/problems')
      .then(res => {
        const pyqs = res.data.filter(p => p.tag === 'Zoho PYQ');
        setAllProblems(pyqs);
        if (pyqs.length > 0) {
          const first = pyqs[0];
          setActiveProblem(first);
          setCode(loadCode(first._id, language, first.templates[language]?.starterCode || ''));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProblems = allProblems.filter(p =>
    (activeTag === 'All' || p.tag === activeTag) &&
    (activeDiff === 'All' || p.difficulty === activeDiff)
  );

  const solvedIds = new Set((user?.submissions || []).filter(s => s.status === 'SUCCESS').map(s => String(s.problemId)));

  const selectProblem = (prob) => {
    if (activeProblem) saveCode(activeProblem._id, language, code);
    setActiveProblem(prob);
    setCode(loadCode(prob._id, language, prob.templates[language]?.starterCode || ''));
    setResult(null);
    setShowHint(false);
  };

  const switchLanguage = (lang) => {
    if (activeProblem) saveCode(activeProblem._id, language, code);
    setLanguage(lang);
    if (activeProblem) setCode(loadCode(activeProblem._id, lang, activeProblem.templates[lang]?.starterCode || ''));
  };

  const handleCodeChange = (val) => {
    const newCode = val || '';
    setCode(newCode);
    if (activeProblem) saveCode(activeProblem._id, language, newCode);
  };

  const runCode = async () => {
    if (!activeProblem) return;
    setIsRunning(true);
    setResult({ status: 'RUNNING', output: '⚙️ Processing target logic...' });
    try {
      const res = await api.post('/api/execute', { problemId: activeProblem._id, code, language });
      setResult(res.data);
    } catch (err) {
      setResult({ status: 'ERROR', output: err.response?.data?.error || 'Execution failed.' });
    }
    setIsRunning(false);
  };

  if (loading) return <PreLoader />;

  const statusColors = { SUCCESS: '#10B981', WRONG_ANSWER: '#F59E0B', COMPILE_ERROR: '#EF4444', ERROR: '#EF4444', RUNNING: '#3B82F6' };
  const statusColor = result ? (statusColors[result.status] || '#aaa') : '#aaa';
  const pyqSolvedCount = allProblems.filter(p => solvedIds.has(String(p._id))).length;
  const totalPyqs = allProblems.length;
  const completionPercent = totalPyqs > 0 ? Math.round((pyqSolvedCount / totalPyqs) * 100) : 0;

  return (
    <div style={styles.page}>
      {/* PYQ Header */}
      <div style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Award size={32} color="#FBBF24" />
          <div>
            <h1 style={styles.title}>Zoho PYQ Archive</h1>
            <p style={styles.subtitle}>OFFICIAL RECRUITMENT QUESTIONS (2024-2025)</p>
          </div>
        </div>
        <div style={styles.progressCircle}>
          <div style={{ fontSize: 20, fontWeight: 900, color: '#FBBF24' }}>{completionPercent}%</div>
          <div style={{ fontSize: 9, color: '#aaa' }}>CRACKED</div>
        </div>
      </div>

      <div style={styles.statsStrip}>
         <div style={styles.statItem}>
            <Zap size={14} color="#FBBF24" />
            <span>{pyqSolvedCount} PROBLEMS SOLVED</span>
         </div>
         <div style={styles.statItem}>
            <CheckCircle size={14} color="#10B981" />
            <span>ELITE READY STATUS: {completionPercent > 80 ? 'HIGH' : 'PENDING'}</span>
         </div>
      </div>

      {/* Problem Selection Row */}
      <div style={styles.selectorScroll}>
        {allProblems.map(prob => {
          const solved = solvedIds.has(String(prob._id));
          const isActive = activeProblem?._id === prob._id;
          return (
            <button key={prob._id} onClick={() => selectProblem(prob)} style={{
              ...styles.probBadge,
              backgroundColor: isActive ? 'rgba(251, 191, 36, 0.15)' : solved ? 'rgba(16,185,129,0.05)' : 'rgba(255,255,255,0.02)',
              borderColor: isActive ? '#FBBF24' : solved ? '#10B981' : 'rgba(255,255,255,0.1)',
              color: isActive ? '#FBBF24' : solved ? '#10B981' : '#aaa'
            }}>
              {solved ? '✓' : '•'} {prob.title}
            </button>
          );
        })}
      </div>

      {activeProblem && (
        <div style={styles.mainLayout}>
          {/* Left Column: Description */}
          <div style={styles.descSection}>
            <div style={styles.descHeader}>
              <div style={styles.difficultyBadge(activeProblem.difficulty)}>
                {activeProblem.difficulty}
              </div>
              <div style={styles.tagBadge}>2024-25 RECENT</div>
            </div>
            <h2 style={styles.problemTitle}>{activeProblem.title}</h2>
            <p style={styles.problemText}>{activeProblem.desc}</p>
            
            <div style={styles.hintsSection}>
              <span style={{ fontSize: 11, fontWeight: 900, color: '#FBBF24', letterSpacing: 1 }}>ANALYSIS HINTS</span>
              {activeProblem.hints.map((h, i) => (
                <div key={i} style={styles.hintLine}>💡 {h}</div>
              ))}
            </div>
          </div>

          {/* Right Column: Code & Execution */}
          <div style={styles.codeSection}>
            <div style={styles.toolbar}>
              <div style={{ display: 'flex', gap: 6 }}>
                {Object.keys(LANGUAGE_LABELS).map(lang => (
                  <button key={lang} onClick={() => switchLanguage(lang)} style={{
                    ...styles.langBtn,
                    background: language === lang ? 'rgba(255,255,255,0.1)' : 'transparent',
                    borderColor: language === lang ? '#FBBF24' : 'rgba(255,255,255,0.1)',
                    color: language === lang ? '#fff' : '#888'
                  }}>
                    {LANGUAGE_LABELS[lang]}
                  </button>
                ))}
              </div>
              <button 
                style={{ ...styles.runBtn, opacity: isRunning ? 0.7 : 1 }} 
                onClick={runCode} 
                disabled={isRunning}
              >
                {isRunning ? 'EXECUTING...' : 'RUN SOLUTION'} <Terminal size={14} style={{ marginLeft: 6 }} />
              </button>
            </div>

            <div style={styles.editorBox}>
              <Editor
                height="300px"
                language={language === 'c' ? 'c' : language}
                value={code}
                onChange={handleCodeChange}
                theme="vs-dark"
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  padding: { top: 12 }
                }}
              />
            </div>

            {result && (
              <div style={{ ...styles.resultPanel, borderColor: statusColor }}>
                 <div style={{ color: statusColor, fontWeight: 900, fontSize: 13, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                    {result.status === 'SUCCESS' ? <CheckCircle size={16}/> : <Zap size={16}/>}
                    {result.status === 'SUCCESS' ? 'MISSION ACCOMPLISHED' : 'FAILURE DETECTED'}
                 </div>
                 <pre style={styles.outputBox}>
                    {result.output || result.error || 'No output recorded.'}
                 </pre>
                 {result.results && result.results.map((r, i) => (
                    <div key={i} style={styles.testLine(r.passed)}>
                       <span style={{ fontWeight: 800 }}>TEST CASE {i+1}:</span> {r.passed ? 'VERIFIED' : 'ABORTED'}
                    </div>
                 ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{ height: 100 }} />
    </div>
  );
};

const styles = {
  page: { 
    padding: '24px', 
    backgroundColor: 'var(--bg-dark)', 
    minHeight: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: 16 
  },
  header: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.02)',
    padding: '20px',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.05)'
  },
  title: { color: '#fff', fontSize: '24px', fontWeight: '900', margin: 0, letterSpacing: 1 },
  subtitle: { color: 'var(--text-muted)', fontSize: '10px', fontWeight: '800', margin: '4px 0 0', letterSpacing: 2 },
  progressCircle: { textAlign: 'center', border: '2px solid rgba(251, 191, 36, 0.3)', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  statsStrip: { display: 'flex', gap: 20, padding: '0 8px' },
  statItem: { display: 'flex', alignItems: 'center', gap: 8, color: '#aaa', fontSize: '11px', fontWeight: '800', letterSpacing: 0.5 },
  selectorScroll: { display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: '8px', scrollbarWidth: 'none' },
  probBadge: { whiteSpace: 'nowrap', padding: '10px 18px', borderRadius: '12px', border: '1px solid', fontSize: '12px', fontWeight: '800', cursor: 'pointer', transition: 'all 0.2s' },
  mainLayout: { display: 'flex', gap: 20, flexWrap: 'wrap' },
  descSection: { flex: 1, minWidth: '350px', backgroundColor: 'var(--bg-card)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: 16 },
  descHeader: { display: 'flex', gap: 8 },
  difficultyBadge: (diff) => ({ backgroundColor: 'rgba(0,0,0,0.3)', border: `1px solid ${DIFF_COLOR[diff]}`, color: DIFF_COLOR[diff], fontSize: '10px', fontWeight: '900', padding: '4px 10px', borderRadius: '20px' }),
  tagBadge: { backgroundColor: '#FBBF24', color: '#000', fontSize: '10px', fontWeight: '900', padding: '4px 10px', borderRadius: '20px' },
  problemTitle: { color: '#fff', fontSize: '20px', fontWeight: '900', margin: 0 },
  problemText: { color: '#E2E8F0', fontSize: '14px', lineHeight: '1.6', margin: 0 },
  hintsSection: { marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 },
  hintLine: { color: '#FBBF24', fontSize: '13px', fontStyle: 'italic', padding: '10px', backgroundColor: 'rgba(251, 191, 36, 0.05)', borderRadius: '8px' },
  codeSection: { flex: 1.5, minWidth: '400px', display: 'flex', flexDirection: 'column', gap: 12 },
  toolbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  langBtn: { padding: '8px 16px', borderRadius: '8px', border: '1px solid', fontSize: '12px', cursor: 'pointer', fontWeight: '700' },
  runBtn: { backgroundColor: '#FBBF24', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '900', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center' },
  editorBox: { border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#1E1E1E' },
  resultPanel: { backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid', borderRadius: '12px', padding: '16px' },
  outputBox: { backgroundColor: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px', fontSize: '12px', color: '#aaa', whiteSpace: 'pre-wrap', fontFamily: 'monospace', margin: '0 0 12px' },
  testLine: (passed) => ({ color: passed ? '#10B981' : '#EF4444', fontSize: '11px', fontWeight: '700', padding: '4px 0' })
};

export default Pyqs;
