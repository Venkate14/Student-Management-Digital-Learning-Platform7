// ...existing code...
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import pdfs from './pdfsDate';

export default function PdfViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pdf = pdfs.find((p) => p.id === id);

  if (!pdf) {
    return (
      <div className="container p-5">
        <h4>PDF not found</h4>
        <button className="btn btn-secondary mt-3" onClick={() => navigate('/pdfs')}>Back to library</button>
      </div>
    );
  }

  return (
    <div className="container-fluid" style={{ minHeight: '100vh' }}>
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <div>
          <h5 className="mb-0">{pdf.title}</h5>
          <small className="text-muted">{pdf.author}</small>
        </div>
        <div>
          <button className="btn btn-outline-secondary me-2" onClick={() => navigate('/pdfs')}>Back</button>
          <button className="btn btn-outline-danger" onClick={() => navigate('/home')}>Logout</button>
        </div>
      </div>

      <div className="row g-4 p-3">
        {/* Left Column: Details */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold mb-3">About this Resource</h4>
              <p className="text-secondary">{pdf.description || "No description available."}</p>

              <h6 className="fw-bold mt-4 mb-3">Topics Covered</h6>
              <div className="d-flex flex-wrap gap-2">
                {pdf.topics && pdf.topics.length > 0 ? (
                  pdf.topics.map((topic, index) => (
                    <span key={index} className="badge bg-light text-primary border border-primary-subtle rounded-pill px-3 py-2">
                      {topic}
                    </span>
                  ))
                ) : (
                  <span className="text-muted">No specific topics listed.</span>
                )}
              </div>

              <div className="mt-5 pt-3 border-top">
                <small className="text-muted d-block mb-1">Author / Publisher</small>
                <strong>{pdf.author}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: PDF Content */}
        <div className="col-md-8">
          {pdf.type === 'free' && pdf.url ? (
            <div className="card shadow-sm h-100" style={{ minHeight: '80vh' }}>
              <div className="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
                <span className="fw-bold">📄 Preview Mode</span>
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(pdf.title + " filetype:pdf")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  Find PDF on Google 🔎
                </a>
              </div>
              <iframe
                title={pdf.title}
                src={pdf.url}
                className="w-100 h-100"
                style={{ minHeight: '80vh', border: 'none' }}
              />
            </div>
          ) : (
            <div className="card p-5 text-center shadow-sm" style={{ minHeight: '60vh', justifyContent: 'center' }}>
              <div className="display-1 mb-3">🔒</div>
              <h2 className="mb-3">Premium Content</h2>
              <p className="lead mb-4">Unlock full access to <strong>{pdf.title}</strong> to view this document.</p>
              <div className="d-flex justify-content-center align-items-baseline gap-2 mb-4">
                <span className="h3 text-primary mb-0">₹{pdf.price}</span>
                <span className="text-muted text-decoration-line-through">₹{(pdf.price * 1.5).toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-success px-5">Buy Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// ...existing code...