export class ExamMonitor {
    constructor() {
      this.examSessions = new Map();
    }
  
    startMonitoring(studentId, examId, onViolation) {
      const sessionId = `${studentId}-${examId}`;
      
      if (this.examSessions.has(sessionId)) {
        return;
      }
  
      const session = {
        studentId,
        examId,
        violations: 0,
        timer: null,
        lastActivity: Date.now(),
      };
  
      // Check for tab/window changes
      const handleVisibilityChange = () => {
        if (document.visibilityState !== 'visible') {
          session.violations++;
          onViolation('TAB_CHANGE', session.violations);
        }
      };
  
      // Check for copy/paste attempts
      const handleCopyPaste = (e) => {
        e.preventDefault();
        session.violations++;
        onViolation('COPY_PASTE', session.violations);
      };
  
      // Check for context menu (right-click)
      const handleContextMenu = (e) => {
        e.preventDefault();
        session.violations++;
        onViolation('RIGHT_CLICK', session.violations);
      };
  
      // Check for keyboard shortcuts
      const handleKeyDown = (e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          session.violations++;
          onViolation('KEYBOARD_SHORTCUT', session.violations);
        }
      };
  
      // Add event listeners
      document.addEventListener('visibilitychange', handleVisibilityChange);
      document.addEventListener('copy', handleCopyPaste);
      document.addEventListener('cut', handleCopyPaste);
      document.addEventListener('paste', handleCopyPaste);
      document.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('keydown', handleKeyDown);
  
      // Auto-submit if too many violations
      session.timer = setInterval(() => {
        if (session.violations >= 3) {
          onViolation('AUTO_SUBMIT', session.violations);
          this.endMonitoring(studentId, examId);
        }
      }, 1000);
  
      this.examSessions.set(sessionId, {
        ...session,
        cleanup: () => {
          clearInterval(session.timer);
          document.removeEventListener('visibilitychange', handleVisibilityChange);
          document.removeEventListener('copy', handleCopyPaste);
          document.removeEventListener('cut', handleCopyPaste);
          document.removeEventListener('paste', handleCopyPaste);
          document.removeEventListener('contextmenu', handleContextMenu);
          document.removeEventListener('keydown', handleKeyDown);
        }
      });
    }
  
    endMonitoring(studentId, examId) {
      const sessionId = `${studentId}-${examId}`;
      const session = this.examSessions.get(sessionId);
      
      if (session) {
        session.cleanup();
        this.examSessions.delete(sessionId);
      }
    }
  }
  
  export const examMonitor = new ExamMonitor();