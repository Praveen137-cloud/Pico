import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import api from '../api';

const LANGUAGES = [
  { id: 'python',     label: '🟡 Python',     monacoId: 'python',     version: '3.10.0', starter: 'nums = [1, 2, 3, 4, 5]\nprint(nums)\nprint(len(nums))\n' },
  { id: 'javascript', label: '🟢 JavaScript',  monacoId: 'javascript', version: '18.15.0', starter: 'const arr = [1, 2, 3, 4, 5];\nconsole.log(arr);\nconsole.log(arr.length);\n' },
  { id: 'c',          label: '🔵 C',           monacoId: 'c',          version: '10.2.0',  starter: '#include <stdio.h>\n\nint main() {\n    printf("Hello from C!\\n");\n    return 0;\n}\n' },
  { id: 'java',       label: '🟠 Java',        monacoId: 'java',       version: '15.0.2',  starter: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from Java!");\n    }\n}\n' },
];

const CodePlayground = () => {
  const [activeLang, setActiveLang] = useState(LANGUAGES[0]);
  const [codes, setCodes] = useState(
    Object.fromEntries(LANGUAGES.map(l => [l.id, l.starter]))
  );
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState('idle'); // idle | running | success | error
  const [isRunning, setIsRunning] = useState(false);
  const [isMockMode, setIsMockMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 mins
  const timerRef = useRef(null);
  const editorRef = useRef(null);

  const handleEditorMount = (editor) => {
    editorRef.current = editor;
  };

  const handleCodeChange = (val) => {
    setCodes(prev => ({ ...prev, [activeLang.id]: val || '' }));
  };

  const switchLang = (lang) => {
    setActiveLang(lang);
    setOutput('');
    setStatus('idle');
  };

  const startMock = () => {
    setIsMockMode(true);
    setTimeLeft(1200);
    setOutput('⏱️ Mock Interview Started! You have 20 minutes to solve a Zoho classic.');
  };

  React.useEffect(() => {
    if (isMockMode && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsMockMode(false);
      setOutput('❌ TIME UP! In a real Zoho interview, this would be the end of the round.');
    }
    return () => clearInterval(timerRef.current);
  }, [isMockMode, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Free-play runner: for playground, use a simplified direct execution approach
  // We use the same /api/execute endpoint but with a special "playground" problemId
  const runCode = async () => {
    setIsRunning(true);
    setStatus('running');
    setOutput('⚙️ Executing...');
    try {
      // For the free playground, we run the code directly without test cases
      // We'll submit to a lightweight /api/run endpoint
      const res = await api.post('/api/run', {
        code: codes[activeLang.id],
        language: activeLang.id
      });
      setOutput(res.data.output || res.data.stderr || '(no output)');
      setStatus(res.data.stderr || res.data.code !== 0 ? 'error' : 'success');
    } catch (err) {
      setOutput(err.response?.data?.error || 'Execution service error. Is the backend running?');
      setStatus('error');
    }
    setIsRunning(false);
  };

  const statusColor = { idle: '#aaa', running: '#3B82F6', success: '#10B981', error: '#EF4444' }[status];

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>Code Playground ⚡</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 12, margin: 0 }}>Free-form sandbox — run anything</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {isMockMode ? (
            <div style={{ ...styles.timer, color: timeLeft < 300 ? '#EF4444' : '#10B981' }}>
              ⏱️ {formatTime(timeLeft)}
            </div>
          ) : (
            <button style={styles.mockBtn} onClick={startMock}>
              🏆 START MOCK
            </button>
          )}
          <button
            style={{ ...styles.runBtn, opacity: isRunning ? 0.7 : 1 }}
            onClick={runCode}
            disabled={isRunning}
          >
            {isRunning ? '⚙️ Running...' : '▶ RUN'}
          </button>
        </div>
      </div>

      {/* Language Tabs */}
      <div style={styles.langTabs}>
        {LANGUAGES.map(lang => (
          <button
            key={lang.id}
            onClick={() => switchLang(lang)}
            style={{
              ...styles.langTab,
              borderBottom: activeLang.id === lang.id ? '3px solid var(--theme-primary)' : '3px solid transparent',
              color: activeLang.id === lang.id ? 'var(--theme-primary)' : 'var(--text-muted)',
              fontWeight: activeLang.id === lang.id ? 900 : 400
            }}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {/* Monaco Editor */}
      <div style={styles.editorWrapper}>
        <Editor
          height="100%"
          language={activeLang.monacoId}
          value={codes[activeLang.id]}
          onChange={handleCodeChange}
          onMount={handleEditorMount}
          theme="vs-dark"
          options={{
            fontSize: 14,
            fontFamily: '"Fira Code", "JetBrains Mono", "Cascadia Code", monospace',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
            roundedSelection: true,
            padding: { top: 16, bottom: 16 },
            tabSize: activeLang.id === 'python' ? 4 : 4,
            automaticLayout: true,
            bracketPairColorization: { enabled: true },
            formatOnPaste: true,
            suggestOnTriggerCharacters: true,
            wordWrap: 'on',
            renderLineHighlight: 'all',
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
          }}
        />
      </div>

      {/* Output Terminal */}
      <div style={styles.outputSection}>
        <div style={styles.outputHeader}>
          <span style={{ color: 'var(--text-muted)', fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>OUTPUT</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {status !== 'idle' && (
              <span style={{ color: statusColor, fontSize: 11, fontWeight: 700,textTransform: 'uppercase' }}>
                {status === 'running' ? '⚙ Running' : status === 'success' ? '✓ Success' : '✗ Error'}
              </span>
            )}
            {output && (
              <button
                onClick={() => { setOutput(''); setStatus('idle'); }}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 12 }}
              >
                ✕ Clear
              </button>
            )}
          </div>
        </div>
        <pre style={{ ...styles.outputPre, color: statusColor === '#aaa' ? '#E2E8F0' : statusColor }}>
          {output || <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>Output will appear here after running...</span>}
        </pre>
      </div>
    </div>
  );
};

const styles = {
  page: { display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--bg-dark)', overflow: 'hidden' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', borderBottom: '1px solid var(--divider)', flexShrink: 0 },
  title: { color: '#fff', fontSize: '18px', fontWeight: '900', margin: 0 },
  runBtn: { background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))', color: '#000', border: 'none', padding: '10px 22px', borderRadius: '6px', fontWeight: '900', cursor: 'pointer', fontSize: 13, letterSpacing: 1, transition: 'all 0.2s' },
  mockBtn: { backgroundColor: 'transparent', border: '1px solid #FF4444', color: '#FF4444', padding: '10px 16px', borderRadius: '6px', fontWeight: '900', cursor: 'pointer', fontSize: 11, letterSpacing: 1 },
  timer: { fontSize: '20px', fontWeight: '900', fontFamily: 'monospace', textShadow: '0 0 10px rgba(0,0,0,0.5)' },
  langTabs: { display: 'flex', borderBottom: '1px solid var(--divider)', flexShrink: 0, overflowX: 'auto' },
  langTab: { padding: '10px 16px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, whiteSpace: 'nowrap', transition: 'all 0.2s', fontFamily: 'inherit' },
  editorWrapper: { flex: 1, borderBottom: '1px solid var(--divider)', minHeight: 0 },
  outputSection: { height: '28%', display: 'flex', flexDirection: 'column', flexShrink: 0, backgroundColor: '#0A0A10' },
  outputHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderBottom: '1px solid var(--divider)' },
  outputPre: { margin: 0, padding: '12px 16px', fontFamily: '"Fira Code", "JetBrains Mono", monospace', fontSize: 13, whiteSpace: 'pre-wrap', overflowY: 'auto', flex: 1, lineHeight: 1.6 }
};

export default CodePlayground;
