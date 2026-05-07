import React, { useState } from "react";
import "./App.css";
import questions from "./data/questions";
import { generateDoc } from "./utils/generateDoc";
import { generatePpt } from "./utils/generatePpt";
import diagramByHint, { getDiagramComponent } from "./components/Diagrams";

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const allQuestions = [
    ...questions.diagramBased.map((q) => ({ ...q, type: "diagram" })),
    ...questions.objective.map((q) => ({ ...q, type: "objective" })),
  ];

  const getFilteredQuestions = () => {
    switch (activeTab) {
      case "humanHealth":
        return allQuestions.filter((q) => q.topic === "Human Health and Disease");
      case "biotech":
        return allQuestions.filter((q) => q.topic === "Biotechnology");
      case "plantGrowth":
        return allQuestions.filter((q) => q.topic === "Plant Growth and Development");
      case "photosynthesis":
        return allQuestions.filter((q) => q.topic === "Photosynthesis");
      case "sexualRepro":
        return allQuestions.filter((q) => q.topic === "Sexual Reproduction in Flowering Plants");
      case "humanRepro":
        return allQuestions.filter((q) => q.topic === "Human Reproduction");
      default:
        return allQuestions;
    }
  };

  const getTypeLabel = (type) => {
    return "Diagram Based";
  };

  const getTypeColor = (type) => {
    return "tag-blue";
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const selectAll = () => {
    const filtered = getFilteredQuestions();
    const allSelected = filtered.every((q) => selectedIds.has(q.id));
    if (allSelected) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        filtered.forEach((q) => next.delete(q.id));
        return next;
      });
    } else {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        filtered.forEach((q) => next.add(q.id));
        return next;
      });
    }
  };

  const clearSelection = () => {
    setSelectedIds(new Set());
  };

  const handleAnswerSelect = (questionId, optionIndex) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const getSelectedQuestions = () => {
    return allQuestions.filter((q) => selectedIds.has(q.id));
  };

  const handleDownloadDoc = () => {
    const selected = getSelectedQuestions();
    if (selected.length === 0) {
      alert("Please select at least one question to download.");
      return;
    }
    generateDoc(selected);
  };

  const handleDownloadPpt = async () => {
    const selected = getSelectedQuestions();
    if (selected.length === 0) {
      alert("Please select at least one question to download.");
      return;
    }
    await generatePpt(selected);
  };

  const getScore = () => {
    let correct = 0;
    let attempted = 0;
    allQuestions.forEach((q) => {
      if (userAnswers[q.id] !== undefined) {
        attempted++;
        if (userAnswers[q.id] === q.answer) {
          correct++;
        }
      }
    });
    return { correct, attempted, total: allQuestions.length };
  };

  const filtered = getFilteredQuestions();
  const allFilteredSelected =
    filtered.length > 0 && filtered.every((q) => selectedIds.has(q.id));
  const score = getScore();

  return (
    <div className="app">
      {/* Hero Header */}
      <header className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">CLASS 11 / 12</div>
          <h1 className="hero-title">
            Biology
            <br />
            <span className="hero-title-accent">Diagram-Based MCQs</span>
          </h1>
          <p className="hero-subtitle">
            30 Hard-Level Diagram Questions &mdash; 6 Topics
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Topics</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">30</span>
              <span className="stat-label">Questions</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">Hard</span>
              <span className="stat-label">Level</span>
            </div>
          </div>
        </div>
      </header>

      {/* Download & Score Bar */}
      <section className="download-bar">
        <div className="download-bar-inner">
          <div className="download-info">
            <svg
              className="download-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <div className="download-text">
              <span className="download-label">Download selected questions</span>
              <span className="download-count">
                {selectedIds.size} question{selectedIds.size !== 1 ? "s" : ""} selected
              </span>
            </div>
          </div>
          <div className="download-buttons">
            <button
              className={`btn btn-doc ${selectedIds.size === 0 ? "btn-disabled" : ""}`}
              onClick={handleDownloadDoc}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              DOC
            </button>
            <button
              className={`btn btn-ppt ${selectedIds.size === 0 ? "btn-disabled" : ""}`}
              onClick={handleDownloadPpt}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              PPT
            </button>
          </div>
        </div>
      </section>

      {/* Score Card */}
      {score.attempted > 0 && (
        <section className="score-section">
          <div className="score-card">
            <div className="score-info">
              <span className="score-label">Your Score:</span>
              <span className="score-value">{score.correct}/{score.attempted}</span>
              <span className="score-detail">({score.total - score.attempted} remaining)</span>
            </div>
            <div className="score-actions">
              <button
                className={`btn-show-results ${showResults ? "active" : ""}`}
                onClick={() => setShowResults(!showResults)}
              >
                {showResults ? "Hide Answers" : "Show Answers"}
              </button>
              <button
                className="btn-reset"
                onClick={() => { setUserAnswers({}); setShowResults(false); }}
              >
                Reset
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="filter-section">
        <div className="filter-tabs">
          <button
            className={`filter-tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All <span className="tab-count">{allQuestions.length}</span>
          </button>
          <button
            className={`filter-tab ${activeTab === "humanHealth" ? "active" : ""}`}
            onClick={() => setActiveTab("humanHealth")}
          >
            Human Health <span className="tab-count">5</span>
          </button>
          <button
            className={`filter-tab ${activeTab === "biotech" ? "active" : ""}`}
            onClick={() => setActiveTab("biotech")}
          >
            Biotechnology <span className="tab-count">5</span>
          </button>
          <button
            className={`filter-tab ${activeTab === "plantGrowth" ? "active" : ""}`}
            onClick={() => setActiveTab("plantGrowth")}
          >
            Plant Growth <span className="tab-count">5</span>
          </button>
          <button
            className={`filter-tab ${activeTab === "photosynthesis" ? "active" : ""}`}
            onClick={() => setActiveTab("photosynthesis")}
          >
            Photosynthesis <span className="tab-count">5</span>
          </button>
          <button
            className={`filter-tab ${activeTab === "sexualRepro" ? "active" : ""}`}
            onClick={() => setActiveTab("sexualRepro")}
          >
            Sexual Repro. <span className="tab-count">5</span>
          </button>
          <button
            className={`filter-tab ${activeTab === "humanRepro" ? "active" : ""}`}
            onClick={() => setActiveTab("humanRepro")}
          >
            Human Repro. <span className="tab-count">5</span>
          </button>
        </div>
      </section>

      {/* Selection Controls */}
      <section className="selection-controls">
        <div className="selection-controls-inner">
          <label className="select-all-checkbox" onClick={selectAll}>
            <div className={`custom-checkbox ${allFilteredSelected ? "checked" : ""}`}>
              {allFilteredSelected && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
              )}
            </div>
            <span>Select All ({filtered.length})</span>
          </label>
          {selectedIds.size > 0 && (
            <button className="clear-btn" onClick={clearSelection}>
              Clear ({selectedIds.size})
            </button>
          )}
        </div>
      </section>

      {/* Questions List */}
      <main className="questions-section">
        <div className="questions-grid">
          {filtered.map((q, idx) => {
            const userAnswer = userAnswers[q.id];
            const isCorrect = userAnswer === q.answer;
            const isAnswered = userAnswer !== undefined;

            return (
              <div
                key={q.id}
                className={`question-card ${selectedIds.has(q.id) ? "selected" : ""} ${showResults && isAnswered ? (isCorrect ? "correct" : "incorrect") : ""}`}
              >
                <div className="card-checkbox-area" onClick={() => toggleSelect(q.id)}>
                  <div className={`custom-checkbox ${selectedIds.has(q.id) ? "checked" : ""}`}>
                    {selectedIds.has(q.id) && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <div className="card-number">
                      <span>{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="card-meta">
                      <span className={`type-tag ${getTypeColor(q.type)}`}>
                        {getTypeLabel(q.type)}
                      </span>
                      <span className="class-tag">Class {q.class}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="question-text">{q.question}</p>
                    {q.diagramHint && getDiagramComponent(q.diagramHint) && (
                      <div className="diagram-container">
                        {React.createElement(getDiagramComponent(q.diagramHint))}
                      </div>
                    )}
                    {q.diagramHint && (
                      <div className="diagram-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hint-icon">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21,15 16,10 5,21" />
                        </svg>
                        {q.diagramHint}
                      </div>
                    )}
                    <div className="options-grid">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userAnswer === optIdx;
                        const isCorrectOption = q.answer === optIdx;
                        let optionClass = "option";
                        if (isAnswered && isSelected && isCorrect) optionClass += " option-correct";
                        if (isAnswered && isSelected && !isCorrect) optionClass += " option-wrong";
                        if (isAnswered && isCorrectOption && !isSelected) optionClass += " option-correct";
                        if (isSelected) optionClass += " option-selected";

                        return (
                          <label
                            key={optIdx}
                            className={optionClass}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!isAnswered) handleAnswerSelect(q.id, optIdx);
                            }}
                          >
                            <div className="option-radio">
                              {isSelected && <div className="option-radio-dot"></div>}
                            </div>
                            <span className="option-letter">{String.fromCharCode(65 + optIdx)}.</span>
                            <span className="option-text">{opt}</span>
                            {isAnswered && isCorrectOption && (
                              <span className="option-correct-label">✓ Correct Answer</span>
                            )}
                            {isAnswered && isSelected && !isCorrect && (
                              <span className="option-wrong-label">✗ Wrong</span>
                            )}
                          </label>
                        );
                      })}
                    </div>
                    {/* Show correct answer and explanation in green box after answering */}
                    {isAnswered && (
                      <div className="answer-explanation-green">
                        <div className="answer-green-header">
                          <span className="answer-green-icon">✓</span>
                          <span className="answer-green-title">Correct Answer</span>
                        </div>
                        <p className="answer-green-text">
                          <strong>{String.fromCharCode(65 + q.answer)}.</strong> {q.options[q.answer]}
                        </p>
                        {q.explanation && (
                          <div className="answer-green-explanation">
                            <span className="explanation-label">Explanation:</span>
                            <p className="explanation-content">{q.explanation}</p>
                          </div>
                        )}
                        {!isCorrect && (
                          <p className="your-answer-note">
                            Your answer: <span className="your-wrong-answer">{String.fromCharCode(65 + userAnswer)}. {q.options[userAnswer]}</span>
                          </p>
                        )}
                      </div>
                    )}
                    <div className="card-footer">
                      <span className="topic-label">{q.topic}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Biology Diagram-Based MCQs &mdash; Class 11 &amp; 12</p>
          <p className="footer-sub">
            30 Questions | Select &amp; Download in DOC or PPT
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
