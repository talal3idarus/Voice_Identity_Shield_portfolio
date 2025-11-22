import { useLocation } from 'react-router-dom'
import { useMemo, useState, useEffect } from 'react'
import PresentationModal from '../components/PresentationModal'
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from 'recharts'
import { motion } from 'framer-motion'
import fullLogo from '../assets/Full_no_background.png'
// Icons as SVG components
const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const Lock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const BarChart3 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const SpectrumIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 18v-6m4 6V6m4 12v-9m4 9v-3m4 3V9" />
  </svg>
)

const TemporalIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 8c3 6 5-6 8 0s5-6 8 0" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16c3 6 5-6 8 0s5-6 8 0" />
  </svg>
)

const ProsodyIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 19c2-8 4-12 8-12s6 4 8 12" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 13c1.5-1.5 2.5-2 4-2s2.5.5 4 2" />
  </svg>
)

const PhaseIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 5c5.523 0 10 3.134 10 7s-4.477 7-10 7S2 15.866 2 12c0-2.36 1.658-4.456 4.18-5.726" />
    <circle cx="12" cy="12" r="3" strokeWidth={1.8} stroke="currentColor" fill="none" />
  </svg>
)

const ArtifactIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l8 4v6c0 3.866-2.686 7.227-6.438 8.46a2.001 2.001 0 01-3.124 0C6.686 20.227 4 16.866 4 13V7l8-4z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 14l2-2 2 2m-2-2v3" />
  </svg>
)

const EmbeddingIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="7" cy="7" r="3" strokeWidth={1.8} stroke="currentColor" />
    <circle cx="17" cy="7" r="3" strokeWidth={1.8} stroke="currentColor" />
    <circle cx="12" cy="17" r="3" strokeWidth={1.8} stroke="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.5 9.5l-2 5M14.5 9.5l2 5M9.5 5L12 6.5 14.5 5" />
  </svg>
)

const StatsIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 19h16M6 16l3-7 4 5 3-4 2 6" />
    <circle cx="9" cy="9" r="1.2" fill="currentColor" />
    <circle cx="13" cy="14" r="1.2" fill="currentColor" />
    <circle cx="16" cy="10" r="1.2" fill="currentColor" />
  </svg>
)

const VectorIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 6h14M5 12h10M5 18h6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12l2-2 2 2m0 0l-2 2-2-2" />
  </svg>
)

const VaultIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.8} stroke="currentColor" />
    <circle cx="12" cy="12" r="3" strokeWidth={1.8} stroke="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v3l2 2" />
  </svg>
)

const LayersIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4l8 4-8 4-8-4 8-4z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 12l8 4 8-4M4 16l8 4 8-4" />
  </svg>
)

const InsightsIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" strokeWidth={1.8} stroke="currentColor" />
  </svg>
)

const accentStyles = {
  primary: {
    border: 'border-primary/40',
    text: 'text-primary',
    glow: 'from-primary/25 via-primary/10 to-transparent',
  },
  accent: {
    border: 'border-accent/40',
    text: 'text-accent',
    glow: 'from-accent/25 via-accent/10 to-transparent',
  },
  warning: {
    border: 'border-warning/40',
    text: 'text-warning',
    glow: 'from-warning/25 via-warning/10 to-transparent',
  },
  error: {
    border: 'border-error/40',
    text: 'text-error',
    glow: 'from-error/25 via-error/10 to-transparent',
  },
  success: {
    border: 'border-success/40',
    text: 'text-success',
    glow: 'from-success/25 via-success/10 to-transparent',
  },
}

const featureCategories = [
  {
    title: 'Spectral Intelligence',
    accent: 'primary',
    icon: <SpectrumIcon className="w-6 h-6" />,
    description:
      'MFCCs, tonal centroids, spectral contrast, roll-off, and entropy capture the harmonic DNA of your voice.',
  },
  {
    title: 'Temporal Micro-Patterns',
    accent: 'accent',
    icon: <TemporalIcon className="w-6 h-6" />,
    description:
      'Jitter, shimmer, voice breaks, and modulation energy measure the natural micro-variations deepfakes struggle to mimic.',
  },
  {
    title: 'Prosodic Cadence',
    accent: 'warning',
    icon: <ProsodyIcon className="w-6 h-6" />,
    description:
      'Speaking rate, pause duration, pitch range, and emotional dynamics encode your unique delivery style.',
  },
  {
    title: 'Phase & Residual Profiling',
    accent: 'success',
    icon: <PhaseIcon className="w-6 h-6" />,
    description:
      'Instantaneous phase, group delay, and residual distortion expose vocoder and synthesis artifacts.',
  },
  {
    title: 'Vocoder Artifact Radar',
    accent: 'error',
    icon: <ArtifactIcon className="w-6 h-6" />,
    description:
      'Noise-floor signatures, aliasing energy, bitrate glitches, and smoothness checks flag synthetic smoothing.',
  },
  {
    title: 'Neural Embedding Proxies',
    accent: 'primary',
    icon: <EmbeddingIcon className="w-6 h-6" />,
    description:
      'Statistical projections of Wav2Vec2, HuBERT, Whisper, ECAPA, VGGish, and OpenL3 embeddings reinforce biometric certainty.',
  },
  {
    title: 'Global Signal Statistics',
    accent: 'accent',
    icon: <StatsIcon className="w-6 h-6" />,
    description:
      'Moments, energy derivatives, and pitch-energy entropy summarise every utterance into a tamper-evident voiceprint.',
  },
]

const verificationLayers = [
  {
    step: '01',
    title: '57-D Feature Vector',
    icon: <VectorIcon className="w-6 h-6" />,
    copy:
      'Our FastAPI microservice extracts a 57-dimensional feature vector in real time, preserving the exact order and values for every enrollment and verification.',
  },
  {
    step: '02',
    title: 'Encrypted Voiceprint Vault',
    icon: <VaultIcon className="w-6 h-6" />,
    copy:
      'Voiceprints and feature vectors are encrypted with AES-256-GCM before leaving your device, then stored with integrity hashes and per-recording keys.',
  },
  {
    step: '03',
    title: 'Multi-Layer Verification',
    icon: <LayersIcon className="w-6 h-6" />,
    copy:
      'Cosine similarity runs alongside anti-spoof scoring. Feature drift penalties downgrade suspicious attempts even when a match score looks high.',
  },
  {
    step: '04',
    title: 'Explainable Analytics',
    icon: <InsightsIcon className="w-6 h-6" />,
    copy:
      'Every verification returns the fused score, anti-spoof risk, and the top feature deltas so you can see exactly where synthetic attempts failed.',
  },
]

const MOCK_EMBEDDING_TEMPLATE = [
  0.32, 0.18, -0.12, 0.04, -0.28, 0.21, 0.09, -0.05,
  -0.14, 0.27, 0.33, -0.09, 0.06, -0.18, 0.12, 0.24,
  -0.31, 0.08, 0.19, -0.04, 0.28, -0.22, -0.11, 0.17,
  0.05, -0.07, 0.15, 0.29, -0.26, 0.1, 0.04, -0.12,
  0.22, -0.18, 0.07, 0.03, -0.24, 0.31, -0.16, 0.09,
  0.13, -0.05, 0.21, 0.18, -0.27, 0.06, 0.11, -0.08,
  0.24, -0.19, 0.02, 0.17, -0.14, 0.29, -0.07, 0.05,
  0.16, -0.09, 0.12, 0.27, -0.23, 0.1, -0.03, 0.08,
]

const Home = () => {
  const location = useLocation()
  const [showPresentation, setShowPresentation] = useState(false)

  const referenceEmbedding = useMemo(
    () => MOCK_EMBEDDING_TEMPLATE.map((value) => value * 140),
    []
  )

  const probeEmbedding = useMemo(
    () =>
      referenceEmbedding.map((value, idx) => {
        const oscillationA = Math.sin((idx + 4) / 4) * 12
        const oscillationB = Math.cos((idx + 1) / 6) * 8
        return value + oscillationA + oscillationB
      }),
    [referenceEmbedding]
  )

  const embeddingPreviewData = useMemo(() => {
    const length = Math.min(64, referenceEmbedding.length, probeEmbedding.length)
    return Array.from({ length }, (_, idx) => {
      const reference = referenceEmbedding[idx]
      const probe = probeEmbedding[idx]
      return {
        index: idx + 1,
        reference,
        probe,
        delta: probe - reference
      }
    })
  }, [referenceEmbedding, probeEmbedding])
 

  const chartTooltipStyle = useMemo(
    () => ({
      backgroundColor: 'rgba(15, 23, 42, 0.92)',
      borderRadius: 12,
      border: '1px solid rgba(148, 163, 184, 0.25)',
      color: '#e2e8f0',
      fontSize: 12,
      backdropFilter: 'blur(12px)'
    }),
    []
  )

  const handleProtectedAction = (path) => {
    // Portfolio mode: buttons are for display only
    // In a full implementation, these would navigate to the respective pages
  }

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Voice Biometric Authentication',
      description: 'Generate unique encrypted voice signatures using advanced audio feature extraction.',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'AES-256 Encryption',
      description: 'Your voice data is encrypted client-side before storage, ensuring maximum security.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Verification',
      description: 'Instantly verify voice authenticity and detect potential deepfake attacks.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics Dashboard',
      description: 'Track verification history and monitor your voice identity protection.',
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Enroll Your Voice',
      description: 'Record a 5-10 second voice sample to create your unique voiceprint.',
    },
    {
      number: '02',
      title: 'Feature Extraction',
      description: 'Advanced algorithms extract biometric features from your voice.',
    },
    {
      number: '03',
      title: 'Encrypted Storage',
      description: 'Your voiceprint is encrypted and securely stored.',
    },
    {
      number: '04',
      title: 'Verify & Protect',
      description: 'Compare new recordings against your voiceprint to detect impersonation.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-dark via-bg to-dark pt-24 pb-40"
      >
        {/* Organic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.12, 0.22, 0.12],
              x: [0, -40, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent rounded-full blur-3xl"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Main heading with more personality */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold mb-8 leading-tight"
            >
              <span className="block mb-2 text-primary">
                Voice Identity Shield
              </span>
              <span className="block text-text-primary">
                Voice Biometric Defense
              </span>
              <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl text-text-secondary font-normal">
                57-D embeddings, AES-256-GCM storage, and full audit trails to stop AI impostors.
              </span>
            </motion.h1>

            {/* Subtitle with better spacing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Our backend-first stack already delivers enrollment, FFmpeg preprocessing, encrypted voiceprint vaulting,
              score fusion, risk analytics, and audit logging — with ECAPA embeddings and anti-spoof models ready to drop in.
            </motion.p>

            {/* CTA Buttons with better styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <button
                onClick={() => handleProtectedAction('/enroll')}
                className="group relative px-10 py-5 gradient-primary rounded-2xl font-semibold text-dark glow-hover transition-all shadow-soft-lg overflow-hidden cursor-default"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </button>
              <button
                onClick={() => handleProtectedAction('/verify')}
                className="group px-10 py-5 bg-card/60 backdrop-blur-md border-2 border-primary/40 rounded-2xl font-semibold text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 shadow-soft cursor-default"
              >
                <span className="flex items-center gap-2">
                  Verify Voice
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => setShowPresentation(true)}
                className="group px-10 py-5 bg-card/60 backdrop-blur-md border-2 border-accent/40 rounded-2xl font-semibold text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300 shadow-soft"
              >
                <span className="flex items-center gap-2">
                  Presentation Mode
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 11h8M8 15h8M4 19h16" />
                  </svg>
                </span>
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-text-secondary text-sm"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Backend-only Firebase architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span>57-feature biometric voiceprint</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AES-256-GCM voiceprint vault</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Evaluation Metrics section removed per request */}
      {/* Problem Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative py-24 bg-gradient-to-b from-bg via-card/30 to-bg overflow-hidden"
      >
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-error/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-warning/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-error/10 border border-error/20 rounded-full text-error text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Security Alert
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-text-primary mb-6 leading-tight">
              Why we built a
              <br />
              <span className="text-primary">voice-first security stack</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              Fraud teams now weaponise cloned voices in less than five minutes. A stolen voicemail or Zoom clip is
              enough to bypass legacy “voice match” checks. Voice Identity Shield counters this with encrypted
              voiceprints, 57-dimensional biometric analytics, and an auditable verification pipeline that already ships
              in our backend.
            </p>
            
            {/* Stats Cards with better design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { value: '57', label: 'biometric features extracted per enrollment', color: 'primary', icon: '🧬' },
                { value: '85%', label: 'backend completion (Phases 1‑3)', color: 'success', icon: '🛠️' },
                { value: '40%', label: 'ML integration tracked (embedding + anti-spoof)', color: 'warning', icon: '🔬' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-full"
                >
                  <div className={`card-soft h-full p-8 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300 border-2 ${
                    stat.color === 'error' ? 'border-transparent hover:border-error/30' :
                    stat.color === 'warning' ? 'border-transparent hover:border-warning/30' :
                    'border-transparent hover:border-primary/30'
                  }`}>
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className={`text-5xl font-heading font-bold mb-3 group-hover:scale-110 transition-transform duration-300 ${
                      stat.color === 'error' ? 'text-error' :
                      stat.color === 'warning' ? 'text-warning' :
                      'text-primary'
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-text-secondary text-sm leading-relaxed">
                      {stat.label}
                    </div>
                    {/* Decorative element */}
                    <div className={`absolute top-4 right-4 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      stat.color === 'error' ? 'bg-error/5' :
                      stat.color === 'warning' ? 'bg-warning/5' :
                      'bg-primary/5'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Research Highlights */}
            <div className="mt-12 text-left card-soft rounded-3xl p-8 border border-primary/30 shadow-soft-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                Research Highlights
              </h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>
                  Built a dual‑pipeline for <span className="text-text-primary">speaker verification</span> and <span className="text-text-primary">deepfake detection</span> (phase/residual + vocoder artefacts).
                </li>
                <li>
                  Implemented <span className="text-text-primary">57‑feature bundle</span> with per‑feature Δ explanations and leading shift analytics for reviewer trust.
                </li>
                <li>
                  Designed a <span className="text-text-primary">privacy‑first storage model</span> (AES‑256‑GCM with envelope encryption, in‑memory decrypt) and retention controls.
                </li>
                <li>
                  Evaluated pipeline robustness on varied mic/room conditions and synthetic samples to tune thresholds.
                </li>
                <li>
                  Documented end‑to‑end runbooks, partner guide, and presentation mode to support deployments and audits.
                </li>
              </ul>

              {/* Select references (concise) */}
              <div className="mt-6">
                <h4 className="text-md font-semibold text-text-primary mb-2">Select references</h4>
                <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
                  <li>ASVspoof 2021 challenge (Kinnunen et&nbsp;al., 2022) – RawNet2 spoof detection.</li>
                  <li>Multi‑modal deepfake detection (Tak et&nbsp;al., 2023, arXiv) – audio‑visual cues.</li>
                  <li>Speaker Verification in the Wild (Stafylakis et&nbsp;al., 2021) – robust SV review.</li>
                  <li>Adversarial attacks on SV (Xin Wang et&nbsp;al., 2023, Interspeech) – threat model.</li>
                  <li>AI Now: Deepfakes & society (2022) and Carlini et&nbsp;al., 2023 (USENIX) – privacy risks.</li>
                  <li>Streaming VAD (Google, 2023, arXiv); Cross‑language voice conversion (Farrús et&nbsp;al., 2022).</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative py-24 bg-gradient-to-b from-bg to-card/20 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Simple Process
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-text-primary mb-6 leading-tight">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our platform uses advanced biometric analysis and encryption to protect your voice identity 
              in just a few simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-transparent z-0" 
                    style={{ width: 'calc(100% - 2rem)', left: 'calc(100% - 1rem)' }} />
                )}
                
                <div className="card-soft rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 shadow-soft hover:shadow-soft-lg relative z-10 h-full">
                  {/* Step number with gradient background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl" />
                    <div className="relative text-5xl font-heading font-bold text-primary">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Decorative arrow on hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-6 right-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative py-24 bg-gradient-to-b from-card/30 via-card/50 to-bg overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Powerful Features
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-text-primary mb-6 leading-tight">
              Key <span className="text-primary">Features</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to protect your voice identity with enterprise-grade security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="card-soft rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 shadow-soft hover:shadow-soft-lg h-full">
                  {/* Icon with animated background */}
                  <div className="relative mb-6 inline-block">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-colors" />
                      <div className="relative text-primary p-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                        {feature.icon}
                      </div>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Biometric Feature Matrix */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="relative py-24 bg-gradient-to-b from-bg via-card/20 to-bg overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-24 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 112 0v1h3a1 1 0 010 2h-1v3a1 1 0 01-2 0V6h-2v3a1 1 0 11-2 0V6H9v3a1 1 0 01-2 0V6H6v3a1 1 0 01-2 0V6H3a1 1 0 010-2h3V3a1 1 0 012 0v1h2V3z" />
              </svg>
              57-D Biometric Matrix
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-text-primary leading-tight mb-6">
              Every enrollment extracts{' '}
              <span className="text-primary">seven pillars</span> of voice intelligence
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              From spectral fingerprints to prosodic cadence, the platform analyses the same 57 features
              documented in our technical runbook. These values are stored encrypted, compared during every
              verification, and surfaced in the dashboard for transparency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featureCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative"
              >
                <div className="card-soft rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300 h-full shadow-soft hover:shadow-soft-lg">
                  {(() => {
                    const tone = accentStyles[category.accent] || accentStyles.primary
                    return (
                      <div className="flex items-center gap-3 mb-5">
                        <div className="relative">
                          <div className={`absolute inset-0 rounded-2xl blur-xl bg-gradient-to-br ${tone.glow}`} />
                          <div className={`relative p-3 rounded-2xl border ${tone.border} bg-dark/60 ${tone.text}`}>
                            {category.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary">
                          {category.title}
                        </h3>
                      </div>
                    )
                  })()}
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Verification Deep Dive */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="relative py-24 bg-gradient-to-b from-card/40 via-card/60 to-bg overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-primary/15 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-1/4 left-1/4 w-[380px] h-[380px] bg-accent/15 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 border border-warning/20 rounded-full text-warning text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Verification Stack
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-text-primary leading-tight mb-6">
              What happens when you{' '}
              <span className="text-primary">Verify Your Voice</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              Every login attempt goes through layered biometric checks. If a deepfake slips past a single
              score, feature drift penalties and anti-spoof heuristics still catch it before access is granted.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {verificationLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-soft rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300 shadow-soft hover:shadow-soft-lg relative overflow-hidden"
              >
                <div className="absolute top-6 right-6 text-5xl font-heading font-bold text-primary/20">
                  {layer.step}
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent rounded-2xl blur-xl" />
                    <div className="relative p-3 rounded-2xl border border-primary/40 bg-dark/60 text-primary">
                      {layer.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-text-primary">
                  {layer.title}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {layer.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Embedding Preview */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="relative py-20 bg-gradient-to-b from-bg via-card/10 to-bg overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h10M4 18h6" />
              </svg>
              Embedding Preview (Mock Data)
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-text-primary leading-tight mb-6">
              See the first 64 dimensions of a voice embedding
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              Each bar represents one dimension of the ECAPA-TDNN embedding. In production, these values come from
              the live FastAPI microservice; here we visualise mock data to show how the vector is presented.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto card-soft border border-border/40 rounded-3xl p-8 shadow-soft-lg backdrop-blur">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">Embedding Vector Preview</h3>
              <p className="text-xs text-text-secondary/70">
                Comparison between a mock reference signature and a simulated probe attempt. Δ shows the difference.
              </p>
              </div>

            <div className="flex items-center gap-3 text-xs text-text-secondary/70 bg-dark/50 border border-border/40 rounded-2xl px-4 py-2">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-primary/60" />
                Reference
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-violet-400/80" />
                Probe
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-orange-400/80" />
                Δ (Probe - Ref)
              </span>
            </div>
            </div>

            <div className="h-72 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={embeddingPreviewData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" />
                  <XAxis
                    dataKey="index"
                    stroke="#94a3b8"
                    tick={{ fontSize: 10 }}
                    tickLine={false}
                    axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    tick={{ fontSize: 10 }}
                    tickLine={false}
                    axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                    domain={[-70, 70]}
                  />
                  <Tooltip
                    contentStyle={chartTooltipStyle}
                    formatter={(value, name) => [
                      Number.isFinite(value) ? Number(value).toFixed(2) : '—',
                      name
                    ]}
                    labelFormatter={(label) => `Dimension ${label}`}
                  />
                  <Legend wrapperStyle={{ paddingTop: 8 }} />
                  <Line
                    type="monotone"
                    dataKey="reference"
                    name="Reference"
                    stroke="#38bdf8"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="probe"
                    name="Probe"
                    stroke="#c084fc"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="delta"
                    name="Δ (Probe - Ref)"
                    stroke="#f97316"
                    strokeWidth={1.5}
                    dot={false}
                    strokeDasharray="4 4"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-[11px] text-text-secondary/70">
              Visual comparison of embedding magnitudes between your current sample (mock probe) and a stored voiceprint (mock reference).
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative py-24 bg-gradient-to-br from-bg via-card/20 to-dark overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.18, 0.08],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="card-soft border-2 border-primary/30 rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto glow-effect shadow-soft-lg relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Started Today
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-text-primary mb-6 leading-tight">
                Ready to Protect Your
                <br />
                <span className="text-primary">Voice Identity?</span>
              </h2>
              <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Start by enrolling your voice and creating your unique encrypted voiceprint. 
                It only takes a few seconds to get started.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => handleProtectedAction('/enroll')}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 gradient-primary rounded-2xl font-semibold text-dark glow-hover transition-all shadow-soft-lg overflow-hidden cursor-default"
                >
                  <span className="relative z-10">Enroll Your Voice Now</span>
                  <motion.svg
                    className="w-5 h-5 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </button>
              </motion.div>

              {/* Trust message */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 text-text-secondary text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free to use • No credit card required • 100% secure
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {showPresentation && (
        <PresentationModal open={showPresentation} onClose={() => setShowPresentation(false)} />
      )}

      {useEffect(() => {
        if (location.hash === '#present') {
          setShowPresentation(true)
        }
      }, [location.hash])}
    </div>
  )
}

export default Home

