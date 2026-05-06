import { useState } from "react";
import "./App.css";
import questions from "./data/questions";
import { generateDoc } from "./utils/generateDoc";
import { generatePpt } from "./utils/generatePpt";

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIds, setSelectedIds] = useState(new Set());

  const allQuestions = [
    ...questions.applicationBased.map((q) => ({ ...q, type: "application" })),
    ...questions.diagramBased.map((q) => ({ ...q, type: "diagram" })),
    ...questions.conceptual.map((q) => ({ ...q, type: "conceptual" })),
  ];

  const getFilteredQuestions = () => {
    switch (activeTab) {
      case "application":
        return allQuestions.filter((q) => q.type === "application");
      case "diagram":
        return allQuestions.filter((q) => q.type === "diagram");
      case "conceptual":
        return allQuestions.filter((q) => q.type === "conceptual");
      default:
        return allQuestions;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case "application":
        return "Application Based";
      case "diagram":
        return "Diagram Based";
      case "conceptual":
        return "Conceptual";
      default:
        return "";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "application":
        return "tag-green";
      case "diagram":
        return "tag-blue";
      case "conceptual":
        return "tag-purple";
      default:
        return "";
    }
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

  const handleDownloadPpt = () => {
    const selected = getSelectedQuestions();
    if (selected.length === 0) {
      alert("Please select at least one question to download.");
      return;
    }
    generatePpt(selected);
  };

  const filtered = getFilteredQuestions();
  const allFilteredSelected = filtered.length > 0 && filtered.every((q) => selectedIds.has(q.id));

  return (
    <div className="app">
      {/* Hero Header */}
      <header className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">CLASS 8 / 9 / 10</div>
          <h1 className="hero-title">
            Biology
            <br />
            <span className="hero-title-accent">Question Bank</span>
          </h1>
          <p className="hero-subtitle">
            50 Carefully Curated Questions &mdash; Application Based, Diagram
            Based &amp; Conceptual
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Application</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Diagram</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">41</span>
              <span className="stat-label">Conceptual</span>
            </div>
          </div>
        </div>
      </header>

      {/* Download Bar */}
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="btn-icon"
              >
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="btn-icon"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              PPT
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="filter-section">
        <div className="filter-tabs">
          <button
            className={`filter-tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All <span className="tab-count">50</span>
          </button>
          <button
            className={`filter-tab ${activeTab === "application" ? "active" : ""}`}
            onClick={() => setActiveTab("application")}
          >
            Application <span className="tab-count">4</span>
          </button>
          <button
            className={`filter-tab ${activeTab === "diagram" ? "active" : ""}`}
            onClick={() => setActiveTab("diagram")}
          >
            Diagram <span className="tab-count">5</span>
          </button>
          <button
            className={`filter-tab ${activeTab === "conceptual" ? "active" : ""}`}
            onClick={() => setActiveTab("conceptual")}
          >
            Conceptual <span className="tab-count">41</span>
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
              Clear Selection ({selectedIds.size})
            </button>
          )}
        </div>
      </section>

      {/* Questions List */}
      <main className="questions-section">
        <div className="questions-grid">
          {filtered.map((q, idx) => (
            <div
              key={q.id}
              className={`question-card ${selectedIds.has(q.id) ? "selected" : ""}`}
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
                  <div className="card-footer">
                    <span className="topic-label">{q.topic}</span>
                    {q.diagramHint && (
                      <span className="diagram-hint">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="hint-icon"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21,15 16,10 5,21" />
                        </svg>
                        {q.diagramHint}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Biology Question Bank &mdash; For Class 8, 9 &amp; 10 Students</p>
          <p className="footer-sub">
            50 Questions | Select &amp; Download in DOC or PPT
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
