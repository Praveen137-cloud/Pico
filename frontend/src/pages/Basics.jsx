import React, { useState, useEffect, useRef, useContext } from 'react';
import Editor from '@monaco-editor/react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';

const TAGS = ['All', 'Arrays', 'Strings', 'Math', 'Sorting', 'Recursion', 'Two Pointers', 'Zoho Elite'];
const DIFFICULTIES = ['All', 'Easy', 'Medium', 'Hard'];
const DIFF_COLOR = { Easy: '#10B981', Medium: '#F59E0B', Hard: '#EF4444' };
const LANGUAGE_LABELS = { c: '🔵 C', python: '🟡 Python', java: '🟠 Java' };

const getStorageKey = (id, lang) => `pico_code_${id}_${lang}`;
const saveCode = (id, lang, code) => { try { localStorage.setItem(getStorageKey(id, lang), code); } catch {} };
const loadCode = (id, lang, fallback) => { try { const s = localStorage.getItem(getStorageKey(id, lang)); return s !== null ? s : fallback; } catch { return fallback; } };

const Basics = () => {
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
  const editorRef = useRef(null);

  // Fetch ALL problems once; filter client-side for snappy UX
  useEffect(() => {
    api.get('/api/problems')
      .then(res => {
        setAllProblems(res.data);
        if (res.data.length > 0) {
          const first = res.data[0];
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
    setResult({ status: 'RUNNING', output: '⚙️ Compiling and running in sandbox...' });
    try {
      const res = await api.post('/api/execute', { problemId: activeProblem._id, code, language });
      setResult(res.data);
    } catch (err) {
      setResult({ status: 'ERROR', output: err.response?.data?.error || 'Execution error.' });
    }
    setIsRunning(false);
    setTimeout(() => document.getElementById('result-panel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
  };

  if (loading) return <div style={styles.page}><p style={{ color: '#aaa', textAlign: 'center', marginTop: 40 }}>Loading problems...</p></div>;
  if (allProblems.length === 0) return <div style={styles.page}><p style={{ color: '#aaa', padding: 24 }}>No problems found. Run seed_problems.js</p></div>;

  const statusColors = { SUCCESS: '#10B981', WRONG_ANSWER: '#F59E0B', COMPILE_ERROR: '#EF4444', ERROR: '#EF4444', RUNNING: '#3B82F6' };
  const statusColor = result ? (statusColors[result.status] || '#aaa') : '#aaa';
  const hints = activeProblem?.hints || [];
  
  const solvedPercentage = Math.round((solvedIds.size / 40) * 100);

  return (
    <div style={styles.page}>
      {/* Zoho 40 Mastery Bar */}
      <div style={styles.masteryContainer}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ color: '#FBBF24', fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1 }}>🏆 Zoho Elite 40 Mastery</span>
          <span style={{ color: '#aaa', fontSize: 13, fontWeight: 700 }}>{solvedIds.size} / 40 Cracked</span>
        </div>
        <div style={styles.masteryBarBg}>
          <div style={{ ...styles.masteryBarFill, width: `${solvedPercentage}%` }} />
        </div>
        {solvedPercentage === 100 && <p style={{ color: '#FBBF24', fontSize: 11, marginTop: 6, textAlign: 'center', fontWeight: 'bold' }}>✨ You are officially Zoho Round 2 Ready! ✨</p>}
      </div>

      {/* Tag Filter */}
      <div style={styles.filterRow}>
        {TAGS.map(tag => (
          <button key={tag} onClick={() => setActiveTag(tag)} style={{
            ...styles.filterBtn,
            backgroundColor: activeTag === tag ? (tag === 'Zoho Elite' ? '#FBBF24' : 'var(--theme-primary)') : 'var(--bg-card)',
            color: activeTag === tag ? '#000' : (tag === 'Zoho Elite' ? '#FBBF24' : '#aaa'),
            border: `1px solid ${activeTag === tag ? (tag === 'Zoho Elite' ? '#FBBF24' : 'var(--theme-primary)') : (tag === 'Zoho Elite' ? '#FBBF2444' : 'var(--divider)')}`,
            fontWeight: activeTag === tag ? 900 : 400,
            boxShadow: tag === 'Zoho Elite' ? '0 0 10px rgba(251, 191, 36, 0.2)' : 'none'
          }}>{tag === 'Zoho Elite' ? '🏆 Zoho Elite' : tag}</button>
        ))}
      </div>

      {/* Difficulty Filter */}
      <div style={{ display: 'flex', gap: 8 }}>
        {DIFFICULTIES.map(d => (
          <button key={d} onClick={() => setActiveDiff(d)} style={{
            ...styles.filterBtn,
            backgroundColor: activeDiff === d ? (DIFF_COLOR[d] || 'var(--theme-secondary)') : 'var(--bg-card)',
            color: activeDiff === d ? '#000' : (DIFF_COLOR[d] || '#aaa'),
            border: `1px solid ${activeDiff === d ? (DIFF_COLOR[d] || 'var(--divider)') : 'var(--divider)'}`,
            fontWeight: activeDiff === d ? 900 : 400
          }}>{d}</button>
        ))}
        <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: 11, alignSelf: 'center' }}>
          {filteredProblems.length} problem{filteredProblems.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Problem Selector */}
      <div style={styles.problemNav}>
        {filteredProblems.length === 0
          ? <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>No problems match this filter.</span>
          : filteredProblems.map(prob => {
              const solved = solvedIds.has(String(prob._id));
              const isActive = activeProblem?._id === prob._id;
              return (
                <button key={prob._id} onClick={() => selectProblem(prob)} style={{
                  ...styles.probBtn,
                  borderColor: isActive ? 'var(--theme-primary)' : solved ? '#10B98155' : 'var(--divider)',
                  color: isActive ? 'var(--theme-primary)' : '#E2E8F0',
                  backgroundColor: solved ? 'rgba(16,185,129,0.07)' : 'var(--bg-card)'
                }}>
                  {solved && <span style={{ marginRight: 4 }}>✅</span>}
                  {prob.tag === 'Zoho Elite' && <span style={{ marginRight: 6 }}>👑</span>}
                  {prob.title}
                  <span style={{ fontSize: 9, marginLeft: 6, color: prob.tag === 'Zoho Elite' ? '#FBBF24' : DIFF_COLOR[prob.difficulty] }}>
                    {prob.tag === 'Zoho Elite' ? '[ROUND 2]' : `[${prob.difficulty}]`}
                  </span>
                </button>
              );
            })
        }
      </div>

      {activeProblem && (
        <>
          {/* Problem Description */}
          <div style={styles.descBox}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
              <div>
                <strong style={{ color: activeProblem.tag === 'Zoho Elite' ? '#FBBF24' : 'var(--theme-primary)', fontSize: 15 }}>{activeProblem.title}</strong>
                <span style={{ marginLeft: 10, fontSize: 11, color: DIFF_COLOR[activeProblem.difficulty], fontWeight: 700, textTransform: 'uppercase' }}>{activeProblem.difficulty}</span>
                <span style={{ 
                  marginLeft: 8, 
                  fontSize: 10, 
                  color: activeProblem.tag === 'Zoho Elite' ? '#000' : 'var(--text-muted)', 
                  backgroundColor: activeProblem.tag === 'Zoho Elite' ? '#FBBF24' : 'transparent',
                  border: `1px solid ${activeProblem.tag === 'Zoho Elite' ? '#FBBF24' : 'var(--divider)'}`, 
                  padding: '2px 8px', 
                  borderRadius: 10,
                  fontWeight: activeProblem.tag === 'Zoho Elite' ? 900 : 400
                }}>{activeProblem.tag}</span>
              </div>
              {hints.length > 0 && (
                <button onClick={() => setShowHint(h => !h)} style={styles.hintBtn}>
                  💡 {showHint ? 'Hide Hint' : 'Hint'}
                </button>
              )}
            </div>
            <p style={{ margin: '8px 0 0', color: '#E2E8F0', fontSize: 14 }}>{activeProblem.desc}</p>
            {showHint && hints.map((h, i) => (
              <div key={i} style={styles.hintBox}>💡 {h}</div>
            ))}
            <p style={{ marginTop: 8, color: 'var(--text-muted)', fontSize: 12 }}>
              💡 Write only the function body — the test runner is injected automatically.
            </p>
          </div>

          {/* Toolbar */}
          <div style={styles.toolbar}>
            <div style={styles.langRow}>
              <span style={{ color: 'var(--text-muted)', fontSize: 11, fontWeight: 700, marginRight: 8 }}>LANG:</span>
              {Object.keys(LANGUAGE_LABELS).map(lang => (
                <button key={lang} onClick={() => switchLanguage(lang)} style={{
                  ...styles.langBtn,
                  borderColor: language === lang ? 'var(--theme-primary)' : 'var(--divider)',
                  color: language === lang ? 'var(--theme-primary)' : '#aaa',
                  fontWeight: language === lang ? 900 : 400
                }}>{LANGUAGE_LABELS[lang]}</button>
              ))}
            </div>
            <button style={{ ...styles.runBtn, opacity: isRunning ? 0.7 : 1 }} onClick={runCode} disabled={isRunning}>
              {isRunning ? '⚙️ Running...' : '💥 SUBMIT'}
            </button>
          </div>

          {/* Monaco Editor */}
          <div style={styles.editorContainer}>
            <div style={styles.editorHeader}>
              <span style={styles.sectionLabel}>YOUR CODE</span>
              <span style={{ color: '#3B82F6', fontSize: 11 }}>✔ Auto-saved</span>
            </div>
            <Editor
              height="220px"
              language={language === 'c' ? 'c' : language}
              value={code}
              onChange={handleCodeChange}
              theme="vs-dark"
              options={{ fontSize: 14, fontFamily: '"Fira Code", "JetBrains Mono", monospace', minimap: { enabled: false }, scrollBeyondLastLine: false, lineNumbers: 'on', padding: { top: 12, bottom: 12 }, tabSize: 4, automaticLayout: true }}
            />
          </div>

          {/* Result Panel */}
          {result && (
            <div id="result-panel" style={{ ...styles.resultPanel, borderColor: statusColor }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ color: statusColor, fontWeight: 900, fontSize: 15 }}>
                  {result.status === 'SUCCESS' && '✅ ALL TESTS PASSED'}
                  {result.status === 'WRONG_ANSWER' && '❌ WRONG ANSWER'}
                  {result.status === 'COMPILE_ERROR' && '🔴 COMPILE ERROR'}
                  {result.status === 'ERROR' && '🔴 ERROR'}
                  {result.status === 'RUNNING' && '⚙️ RUNNING...'}
                </span>
                {result.totalTests && (
                  <span style={{ color: '#aaa', fontSize: 12, fontFamily: 'monospace' }}>
                    {result.testsPassed}/{result.totalTests} tests
                  </span>
                )}
              </div>
              {(result.error || result.output) && (
                <pre style={{ color: statusColor, fontFamily: 'monospace', fontSize: 13, margin: '0 0 12px', whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.3)', padding: 12, borderRadius: 6 }}>
                  {result.error || result.output}
                </pre>
              )}
              {result.status === 'COMPILE_ERROR' && (
                <p style={{ color: '#F59E0B', fontSize: 12, margin: 0 }}>
                  ↑ Fix the error, then click SUBMIT again. <strong>Your code is safe in the editor.</strong>
                </p>
              )}
              {result.results && result.results.map((r, i) => (
                <div key={i} style={{ marginTop: 8, padding: '8px 12px', borderRadius: 6, backgroundColor: r.passed ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', border: `1px solid ${r.passed ? '#10B981' : '#EF4444'}` }}>
                  <span style={{ color: r.passed ? '#10B981' : '#EF4444', fontWeight: 700, fontSize: 12 }}>
                    Test {i + 1}: {r.passed ? 'PASSED ✓' : 'FAILED ✗'}
                  </span>
                  {!r.passed && (
                    <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#aaa', marginTop: 4 }}>
                      <div>Expected: <span style={{ color: '#10B981' }}>{r.expected}</span></div>
                      <div>Received: <span style={{ color: '#EF4444' }}>{r.received || '(nothing)'}</span></div>
                      {r.stderr && <div style={{ color: '#F59E0B', marginTop: 4 }}>Runtime: {r.stderr}</div>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <div style={{ height: 60 }} />
    </div>
  );
};

const styles = {
  page: { padding: '16px', display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--bg-dark)', overflowY: 'auto', gap: 14 },
  masteryContainer: { 
    backgroundColor: 'rgba(251, 191, 36, 0.05)', 
    border: '1px solid rgba(251, 191, 36, 0.3)', 
    padding: '16px', 
    borderRadius: '12px',
    marginBottom: '8px'
  },
  masteryBarBg: { height: '10px', backgroundColor: '#1F2937', borderRadius: '5px', overflow: 'hidden' },
  masteryBarFill: { height: '100%', backgroundColor: '#FBBF24', boxShadow: '0 0 15px rgba(251, 191, 36, 0.6)', transition: 'width 0.8s cubic-bezier(0.65, 0, 0.35, 1)' },
  filterRow: { display: 'flex', gap: 6, flexWrap: 'wrap' },
  filterBtn: { padding: '5px 10px', borderRadius: 20, cursor: 'pointer', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, transition: 'all 0.15s', whiteSpace: 'nowrap' },
  problemNav: { display: 'flex', overflowX: 'auto', gap: '8px', paddingBottom: '4px', scrollbarWidth: 'none', flexShrink: 0, flexWrap: 'wrap' },
  probBtn: { whiteSpace: 'nowrap', backgroundColor: 'var(--bg-card)', border: '2px solid', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: '800', textTransform: 'uppercase', fontSize: 10, transition: 'all 0.2s' },
  descBox: { backgroundColor: 'var(--bg-card)', borderLeft: '4px solid var(--theme-primary)', padding: '12px 16px', borderRadius: '4px' },
  hintBtn: { backgroundColor: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)', color: '#FBBF24', borderRadius: 8, padding: '5px 12px', cursor: 'pointer', fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0 },
  hintBox: { marginTop: 10, backgroundColor: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: 8, padding: '10px 14px', color: '#FBBF24', fontSize: 13, fontStyle: 'italic' },
  toolbar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 },
  langRow: { display: 'flex', alignItems: 'center', gap: 6 },
  langBtn: { backgroundColor: 'transparent', border: '2px solid', padding: '5px 12px', borderRadius: '20px', cursor: 'pointer', fontSize: 12, transition: 'all 0.2s', fontFamily: 'inherit' },
  runBtn: { background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))', color: '#000', padding: '10px 20px', borderRadius: '4px', border: 'none', fontWeight: '900', cursor: 'pointer', letterSpacing: 2, fontSize: 13 },
  editorContainer: { backgroundColor: '#10131C', border: '2px solid var(--divider)', borderRadius: '4px', display: 'flex', flexDirection: 'column' },
  editorHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderBottom: '1px solid var(--divider)' },
  sectionLabel: { color: 'var(--text-muted)', fontSize: '11px', fontWeight: '700', letterSpacing: '1px' },
  resultPanel: { backgroundColor: '#0A0A10', border: '2px solid', borderRadius: '8px', padding: '16px' }
};

export default Basics;
