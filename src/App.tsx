import { useMemo, useState } from "react";
import katex from "katex";
import {
  AlertTriangle,
  BarChart3,
  Bookmark,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Circle,
  Eye,
  FileText,
  GraduationCap,
  Languages,
  ListChecks,
  Menu,
  Moon,
  Search,
  Send,
  Target,
  X
} from "lucide-react";
import { formulas, modules, practiceQuestions, sourceMaterials, type Formula, type PracticeQuestion } from "./content";

type TabKey = "notes" | "points" | "practice" | "pitfalls" | "sources";
type Grade = "correct" | "partial" | "wrong";

const tabLabels: Record<TabKey, string> = {
  notes: "学习笔记",
  points: "讲义要点",
  practice: "例题解析",
  pitfalls: "常见错误",
  sources: "材料覆盖"
};

function MathBlock({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, {
    displayMode: true,
    throwOnError: false,
    strict: false
  });
  return <div className="math-block" dangerouslySetInnerHTML={{ __html: html }} />;
}

function formulaTone(formula: Formula) {
  return `formula-card ${formula.tone}`;
}

function includesText(text: string, query: string) {
  return text.toLowerCase().includes(query.toLowerCase());
}

export function App() {
  const [selectedModuleId, setSelectedModuleId] = useState(modules[3].id);
  const [activeTab, setActiveTab] = useState<TabKey>("notes");
  const [query, setQuery] = useState("");
  const [englishOn, setEnglishOn] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [reviewed, setReviewed] = useState<Set<string>>(() => new Set(["foundations", "futures-hedging"]));
  const [openAnswers, setOpenAnswers] = useState<Set<string>>(() => new Set());
  const [grades, setGrades] = useState<Record<Grade, number>>({ correct: 6, partial: 2, wrong: 3 });

  const selectedModule = modules.find((module) => module.id === selectedModuleId) ?? modules[0];

  const moduleFormulas = formulas.filter((formula) => selectedModule.formulaIds.includes(formula.id));
  const moduleQuestions = practiceQuestions.filter((question) => question.moduleId === selectedModule.id);
  const activeQuestion = moduleQuestions[0] ?? practiceQuestions.find((question) => question.moduleId === "forward-pricing") ?? practiceQuestions[0];

  const searchResults = useMemo(() => {
    const q = query.trim();
    if (!q) return { modules: [], questions: [], formulas: [] };
    return {
      modules: modules.filter((module) =>
        [module.titleZh, module.titleEn, module.overviewZh, module.overviewEn, module.examPhrases.join(" ")]
          .some((text) => includesText(text, q))
      ),
      questions: practiceQuestions.filter((question) =>
        [question.titleZh, question.titleEn, question.promptZh, question.promptEn, question.source]
          .some((text) => includesText(text, q))
      ),
      formulas: formulas.filter((formula) =>
        [formula.titleZh, formula.titleEn, formula.noteZh, formula.noteEn, formula.tex]
          .some((text) => includesText(text, q))
      )
    };
  }, [query]);

  const reviewedCount = reviewed.size;
  const lectureTotal = modules.reduce((sum, module) => sum + module.lectureCount, 0);
  const assignmentTotal = 4;
  const assignmentCovered = new Set(practiceQuestions.map((question) => question.source.match(/Assignment \d/)?.[0]).filter(Boolean)).size;
  const totalGrades = grades.correct + grades.partial + grades.wrong + 9;
  const accuracy = Math.round((grades.correct / Math.max(1, grades.correct + grades.partial + grades.wrong)) * 100);

  const toggleReviewed = () => {
    setReviewed((current) => {
      const next = new Set(current);
      if (next.has(selectedModule.id)) next.delete(selectedModule.id);
      else next.add(selectedModule.id);
      return next;
    });
  };

  const toggleAnswer = (questionId: string) => {
    setOpenAnswers((current) => {
      const next = new Set(current);
      if (next.has(questionId)) next.delete(questionId);
      else next.add(questionId);
      return next;
    });
  };

  const markGrade = (grade: Grade) => {
    setGrades((current) => ({ ...current, [grade]: current[grade] + 1 }));
  };

  const selectModule = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setActiveTab("notes");
    setMobileNavOpen(false);
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileNavOpen ? "open" : ""}`}>
        <div className="sidebar-head">
          <div className="brand">
            <BookOpen size={19} />
            <span>衍生品定价</span>
          </div>
          <button className="icon-button mobile-close" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation">
            <X size={18} />
          </button>
        </div>

        <div className="sidebar-section-title">课程大纲</div>
        <nav className="module-list">
          {modules.map((module) => {
            const isSelected = module.id === selectedModule.id;
            const isDone = reviewed.has(module.id);
            return (
              <button
                key={module.id}
                className={`module-item ${isSelected ? "selected" : ""}`}
                onClick={() => selectModule(module.id)}
              >
                <span className="module-status">{isDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}</span>
                <span className="module-copy">
                  <strong>{module.number}. {module.titleZh}</strong>
                  <small>{module.titleEn}</small>
                </span>
                <span className="module-count">{module.assignmentCount}/{Math.max(1, module.lectureCount + module.assignmentCount)}</span>
              </button>
            );
          })}
        </nav>

        <div className="study-card">
          <div className="study-card-title">
            <span>学习统计</span>
            <BarChart3 size={17} />
          </div>
          <div className="progress-row">
            <span>总进度</span>
            <strong>{Math.round((reviewedCount / modules.length) * 100)}%</strong>
          </div>
          <div className="progress-track">
            <div style={{ width: `${(reviewedCount / modules.length) * 100}%` }} />
          </div>
          <div className="metric-grid">
            <span>已读模块</span>
            <strong>{reviewedCount} / {modules.length}</strong>
            <span>覆盖材料</span>
            <strong>{sourceMaterials.length}</strong>
            <span>练习正确率</span>
            <strong>{accuracy}%</strong>
          </div>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <button className="icon-button nav-toggle" onClick={() => setMobileNavOpen(true)} aria-label="Open navigation">
            <Menu size={20} />
          </button>
          <div className="course-name">
            <GraduationCap size={18} />
            <span>Derivatives Pricing Review</span>
          </div>
          <div className="search-wrap">
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索知识点、公式、题目..."
            />
            <kbd>Ctrl /</kbd>
          </div>
          <a className="pdf-link" href={`${import.meta.env.BASE_URL}derivatives-pricing-review.pdf`} target="_blank" rel="noreferrer">
            <FileText size={16} />
            PDF
          </a>
          <button className={`lang-toggle ${englishOn ? "active" : ""}`} onClick={() => setEnglishOn((value) => !value)}>
            <Languages size={16} />
            {englishOn ? "EN" : "中"}
          </button>
          <button className="icon-button" aria-label="Theme placeholder">
            <Moon size={18} />
          </button>
        </header>

        <section className="content-grid">
          <article className="main-panel">
            <div className="progress-overview">
              <div className="progress-line">
                <span>Lecture 讲义</span>
                <div className="dot-line">
                  {Array.from({ length: lectureTotal }).map((_, index) => (
                    <span key={index} className={index < reviewedCount + 3 ? "dot done" : "dot"}>{index + 1}</span>
                  ))}
                </div>
                <strong>{lectureTotal} / {lectureTotal}</strong>
              </div>
              <div className="progress-line">
                <span>Assignment 作业</span>
                <div className="dot-line">
                  {Array.from({ length: assignmentTotal }).map((_, index) => (
                    <span key={index} className={index < assignmentCovered ? "dot assignment done" : "dot assignment"}>{index + 1}</span>
                  ))}
                </div>
                <strong>{assignmentCovered} / {assignmentTotal}</strong>
              </div>
            </div>

            {query.trim() && (
              <div className="search-results">
                <div>
                  <strong>搜索结果</strong>
                  <span>{searchResults.modules.length} modules / {searchResults.questions.length} questions / {searchResults.formulas.length} formulas</span>
                </div>
                <div className="result-chips">
                  {searchResults.modules.slice(0, 4).map((module) => (
                    <button key={module.id} onClick={() => selectModule(module.id)}>{module.titleZh}</button>
                  ))}
                  {searchResults.questions.slice(0, 4).map((question) => (
                    <button key={question.id} onClick={() => selectModule(question.moduleId)}>{question.source}</button>
                  ))}
                </div>
              </div>
            )}

            <div className="module-header">
              <div>
                <div className="source-line">{selectedModule.sources.join(" · ")}</div>
                <h1>{selectedModule.number}. {selectedModule.titleZh} / {selectedModule.titleEn}</h1>
              </div>
              <button className={`bookmark-action ${reviewed.has(selectedModule.id) ? "done" : ""}`} onClick={toggleReviewed}>
                <Bookmark size={18} />
                {reviewed.has(selectedModule.id) ? "已复习" : "标记复习"}
              </button>
            </div>

            <div className="tab-strip">
              {(Object.keys(tabLabels) as TabKey[]).map((tab) => (
                <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
                  {tabLabels[tab]}
                </button>
              ))}
            </div>

            {activeTab === "notes" && (
              <section className="study-section">
                <div className="intuition-card">
                  <strong>直观理解 / Intuition</strong>
                  <p>{selectedModule.overviewZh}</p>
                  {englishOn && <p className="english-copy">{selectedModule.overviewEn}</p>}
                </div>
                <h2>小白版学习顺序</h2>
                <div className="note-list">
                  {selectedModule.beginnerNotes.map((note) => (
                    <div className="note-row" key={note}>
                      <Target size={17} />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
                {moduleFormulas.length > 0 && (
                  <>
                    <h2>核心公式</h2>
                    <div className="formula-grid-inline">
                      {moduleFormulas.map((formula) => (
                        <div key={formula.id} className={formulaTone(formula)}>
                          <div className="formula-title">
                            <span>{formula.titleZh}</span>
                            <small>{formula.titleEn}</small>
                          </div>
                          <MathBlock tex={formula.tex} />
                          <p>{formula.noteZh}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </section>
            )}

            {activeTab === "points" && (
              <section className="study-section">
                <h2>讲义要点 / Lecture Notes</h2>
                <ul className="point-list">
                  {selectedModule.keyPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <h2>考试英文关键词</h2>
                <div className="phrase-list">
                  {selectedModule.examPhrases.map((phrase) => <span key={phrase}>{phrase}</span>)}
                </div>
              </section>
            )}

            {activeTab === "practice" && (
              <section className="study-section">
                <h2>Assignment-based Practice</h2>
                <div className="question-stack">
                  {moduleQuestions.map((question) => (
                    <QuestionCard
                      key={question.id}
                      question={question}
                      englishOn={englishOn}
                      isOpen={openAnswers.has(question.id)}
                      onToggle={() => toggleAnswer(question.id)}
                      onGrade={markGrade}
                    />
                  ))}
                  {moduleQuestions.length === 0 && (
                    <div className="empty-state">这个模块主要是概念框架，没有单独 assignment 计算题。</div>
                  )}
                </div>
              </section>
            )}

            {activeTab === "pitfalls" && (
              <section className="study-section">
                <h2>常见错误 / Common Mistakes</h2>
                <div className="warning-list">
                  {selectedModule.pitfalls.map((pitfall) => (
                    <div className="warning-row" key={pitfall}>
                      <AlertTriangle size={17} />
                      <span>{pitfall}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === "sources" && (
              <section className="study-section">
                <h2>已读取材料覆盖</h2>
                <div className="source-grid">
                  {sourceMaterials.map((source) => (
                    <div key={source} className="source-item">
                      <CheckCircle2 size={16} />
                      <span>{source}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className="right-panel">
            <div className="panel-tabs">
              <button className="active">公式速查</button>
              <button onClick={() => setActiveTab("practice")}>随手练习</button>
            </div>

            <section className="right-section">
              <h2>核心公式 / Key Formulas</h2>
              <div className="right-formulas">
                {(moduleFormulas.length ? moduleFormulas : formulas.slice(0, 4)).map((formula) => (
                  <div key={formula.id} className={formulaTone(formula)}>
                    <div className="formula-title">
                      <span>{formula.titleZh}</span>
                      <Bookmark size={16} />
                    </div>
                    <MathBlock tex={formula.tex} />
                    <p>{formula.noteZh}</p>
                    {englishOn && <p className="english-copy">{formula.noteEn}</p>}
                  </div>
                ))}
              </div>
            </section>

            <section className="quick-practice">
              <div className="quick-title">
                <h2>随手练习 / Quick Practice</h2>
                <span>{activeQuestion.source}</span>
              </div>
              <QuestionCard
                question={activeQuestion}
                englishOn={englishOn}
                compact
                isOpen={openAnswers.has(activeQuestion.id)}
                onToggle={() => toggleAnswer(activeQuestion.id)}
                onGrade={markGrade}
              />
              <div className="grade-summary">
                <div className="grade-card correct"><strong>{grades.correct}</strong><span>正确</span></div>
                <div className="grade-card partial"><strong>{grades.partial}</strong><span>部分正确</span></div>
                <div className="grade-card wrong"><strong>{grades.wrong}</strong><span>错误</span></div>
                <div className="grade-card"><strong>{totalGrades}</strong><span>总练习</span></div>
              </div>
            </section>
          </aside>
        </section>
      </main>
    </div>
  );
}

function QuestionCard({
  question,
  englishOn,
  isOpen,
  compact = false,
  onToggle,
  onGrade
}: {
  question: PracticeQuestion;
  englishOn: boolean;
  isOpen: boolean;
  compact?: boolean;
  onToggle: () => void;
  onGrade: (grade: Grade) => void;
}) {
  return (
    <div className={`question-card ${compact ? "compact" : ""}`}>
      <div className="question-meta">
        <span>{question.source}</span>
        <span>{question.difficulty}</span>
      </div>
      <h3>{question.titleZh}</h3>
      {englishOn && <small>{question.titleEn}</small>}
      <p>{question.promptZh}</p>
      {englishOn && <p className="english-copy">{question.promptEn}</p>}
      {question.options && (
        <div className="option-grid">
          {question.options.map((option) => <span key={option}>{option}</span>)}
        </div>
      )}
      <div className="question-actions">
        <button onClick={onToggle}>
          <Eye size={16} />
          {isOpen ? "隐藏答案" : "查看答案"}
        </button>
        <button onClick={() => onGrade("correct")}>
          <CheckCircle2 size={16} />
          记为正确
        </button>
        <button onClick={() => onGrade("partial")}>
          <ListChecks size={16} />
          部分正确
        </button>
        <button onClick={() => onGrade("wrong")}>
          <Send size={16} />
          还不会
        </button>
      </div>
      {isOpen && (
        <div className="answer-box">
          <strong>详细解析</strong>
          <p>{question.answerZh}</p>
          {englishOn && <p className="english-copy">{question.answerEn}</p>}
          {question.formulaIds.length > 0 && (
            <div className="related-formulas">
              {question.formulaIds.map((id) => {
                const formula = formulas.find((item) => item.id === id);
                if (!formula) return null;
                return (
                  <span key={id}>
                    {formula.titleZh}
                    <ChevronRight size={14} />
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
