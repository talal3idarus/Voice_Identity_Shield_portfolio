import React, { useEffect, useState, useCallback } from 'react'

const slidesContent = [
  {
    title: 'Voice Identity Shield',
    subtitle: 'What it does',
    points: [
      'Verifies if two voice clips are the same person',
      'Flags likely deepfakes with anti‑spoof signals',
      'Shows clear verdict, score, and explainable visuals'
    ]
  },
  {
    title: 'Competitors & Differentiators',
    subtitle: 'Where we stand out (high level)',
    points: [
      'Explainability: We show per‑feature Δ tables and leading shifts; many tools output only a score.',
      'Security: HTTPS/TLS in transit + AES‑256‑GCM at rest with envelope encryption; clear retention policy.',
      'Anti‑spoof: Phase/Residual and Vocoder‑artefact checks integrated with similarity for stronger fraud resistance.',
      'Traceability: Backend ordering preserved and audited events for reviews/tuning.',
      'Practical UX: Presentation Mode, dashboard previews, and grouped features for non‑technical reviewers.'
    ]
  },
  {
    title: 'Competitive Landscape',
    subtitle: 'Top two to reference in the pitch',
    points: [
      'ID R&D: Voice verification + anti‑spoofing; strong voice‑clone detection; widely deployed with banks; clean APIs.',
      'Phonexia: Deepfake Detection Engine (~99% lab accuracy); on‑prem/real‑time; government/enterprise adoption; robust in noise.',
      'Positioning: Both align closely with our dual‑pipeline (verification + anti‑spoof), making them ideal benchmarks.'
    ]
  },
  {
    title: 'Our Advantage vs ID R&D & Phonexia',
    subtitle: 'Differentiators to emphasize',
    points: [
      'Explainability-by-default: On‑screen per‑feature Δ and leading shifts (reviewer friendly).',
      'Privacy‑first storage model: AES‑256‑GCM with envelope encryption, minimal metadata, configurable retention.',
      'Operational transparency: Backend ordering preserved, audit events, and threshold tuning workflow.',
      'Presentation‑ready UX: Built‑in Presentation Mode and dashboard previews for stakeholder demos.',
      'Modular ML: Pluggable embeddings/anti‑spoof backends to track market SOTA rapidly.'
    ]
  },
  {
    title: 'End‑to‑End Flow',
    subtitle: 'In order (Client → Server → ML)',
    points: [
      '[Client] Enroll: record/upload reference (3–5 s) → upload over TLS',
      '[Server+ML] Preprocess → extract embedding + 57‑feature bundle → encrypt and store',
      '[Client] Verify: record/upload probe → upload over TLS',
      '[Server+ML] Preprocess → extract probe features → decrypt reference in memory',
      '[ML] Similarity (cosine/L2) + per‑feature Δ = probe − reference + anti‑spoof',
      '[Server] Thresholds → Verdict: Match / No Match (/ Suspicious)',
      '[Client] Render results: verdict, score, charts, 57‑feature tables'
    ]
  },
  {
    title: 'What you see on screen',
    subtitle: 'Outputs & visuals',
    points: [
      'Verdict + Similarity score (higher = closer match)',
      'Embedding delta preview with leading shifts',
      'Extracted Feature Bundle (57): Probe, Reference, Δ (backend order)',
      'Small Δ across groups → consistent voice; large/consistent Δ → different/manipulated'
    ]
  },
  {
    title: 'Security & Privacy',
    subtitle: 'Plain language',
    points: [
      'In transit: HTTPS/TLS (HSTS)',
      'At rest: AES‑256‑GCM with unique IV; envelope encryption (KEK); rotation',
      'Least‑privilege access; short‑lived session/JWT (HttpOnly, Secure, SameSite)',
      'Data minimization: store embeddings/features, not raw audio (by default)'
    ]
  },
  {
    title: 'Demo Tips',
    subtitle: 'For competition day',
    points: [
      'Quiet room/headset mic; 3–5 s clips',
      'Show Enroll → Verify → Verdict + score → Charts → 57‑feature tables',
      'Optionally run a synthetic/impostor clip to show anti‑spoof behavior'
    ]
  }
]

const Indicator = ({ index, active, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(index)}
    aria-label={`Go to slide ${index + 1}`}
    className={`w-2.5 h-2.5 rounded-full transition-all ${active ? 'bg-primary scale-110' : 'bg-border/60 hover:bg-border'}`}
  />
)

const PresentationModal = ({ open, onClose }) => {
  const [idx, setIdx] = useState(0)

  const total = slidesContent.length
  const goNext = useCallback(() => setIdx(prev => Math.min(prev + 1, total - 1)), [total])
  const goPrev = useCallback(() => setIdx(prev => Math.max(prev - 1, 0)), [])
  const goTo = useCallback((i) => setIdx(Math.max(0, Math.min(i, total - 1))), [total])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, goNext, goPrev])

  if (!open) return null

  const slide = slidesContent[idx]

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-[min(1100px,92vw)] h-[min(680px,86vh)] bg-dark/95 border border-border/40 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/30 bg-dark/70">
          <div className="text-sm text-text-secondary">
            Slide {idx + 1} / {total}
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <Indicator key={i} index={i} active={i === idx} onClick={goTo} />
            ))}
          </div>
          <button
            type="button"
            className="px-3 py-1.5 rounded-lg border border-border/40 text-text-secondary hover:text-text-primary hover:border-border transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {/* Slide body */}
        <div className="p-10 h-[calc(100%-64px)] flex flex-col">
          <div className="flex-1 overflow-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-text-primary mb-2">
              {slide.title}
            </h2>
            <p className="text-text-secondary/80 mb-6">{slide.subtitle}</p>

            <ul className="space-y-3 text-text-secondary leading-relaxed text-base">
              {slide.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              disabled={idx === 0}
              onClick={goPrev}
              className={`px-4 py-2 rounded-xl border transition ${
                idx === 0
                  ? 'border-border/30 text-text-secondary/50 cursor-not-allowed'
                  : 'border-border/50 text-text-secondary hover:text-text-primary hover:border-border'
              }`}
            >
              ← Previous
            </button>
            <div className="text-xs text-text-secondary/70">Tip: Use ← → arrows or Esc</div>
            <button
              type="button"
              onClick={idx === total - 1 ? onClose : goNext}
              className="px-4 py-2 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 transition"
            >
              {idx === total - 1 ? 'Done' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PresentationModal


