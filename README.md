# Voice Identity Shield

> A full-stack voice biometric authentication system with deepfake detection capabilities

[![Portfolio Project](https://img.shields.io/badge/Portfolio-Project-blue)](https://github.com)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)](https://www.typescriptlang.org/)

---

## 📋 Overview

**Voice Identity Shield** is a comprehensive voice biometric authentication platform designed to protect against AI-generated voice deepfakes. The system implements advanced feature extraction, encryption, and verification pipelines to ensure secure and reliable speaker authentication.

### Key Highlights

- 🎯 **57-Dimensional Biometric Feature Extraction** - Comprehensive voice analysis across spectral, temporal, and prosodic dimensions
- 🔒 **AES-256-GCM Encryption** - End-to-end encryption for voiceprint storage and transmission
- 🛡️ **Anti-Spoof Detection** - Multi-layer verification with deepfake detection capabilities
- 📊 **Real-time Analytics** - Comprehensive dashboard with verification history and feature visualization
- 🎨 **Modern UI/UX** - Responsive design with smooth animations and intuitive interface

---

## ✨ Features

### Core Capabilities

- **Voice Enrollment** - Secure voiceprint creation with encrypted storage
- **Real-time Verification** - Instant speaker authentication with anti-spoof checks
- **Feature Extraction** - 57-dimensional biometric analysis including:
  - Spectral Intelligence (MFCCs, tonal centroids, spectral contrast)
  - Temporal Micro-Patterns (jitter, shimmer, voice breaks)
  - Prosodic Cadence (speaking rate, pitch range, emotional dynamics)
  - Phase & Residual Profiling (vocoder artifact detection)
  - Neural Embedding Proxies (Wav2Vec2, HuBERT, ECAPA embeddings)

### Security Features

- Client-side encryption before transmission
- AES-256-GCM encryption with envelope encryption
- Integrity hashes and per-recording keys
- Audit logging and verification history
- HTTPS/TLS secure transmission

### User Experience

- Interactive presentation mode for project walkthrough
- Responsive design for all devices
- Smooth animations and transitions
- Real-time visualization of biometric features
- Explainable authentication results

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI framework
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **React Router** - Navigation

### Backend (Referenced)
- **FastAPI** - Python web framework
- **FFmpeg** - Audio preprocessing
- **NumPy/SciPy** - Signal processing
- **Machine Learning Models** - ECAPA-TDNN, Anti-spoof detection

### Security & Storage
- **AES-256-GCM** - Encryption
- **Firebase** - Backend services
- **JWT** - Authentication tokens

---

## 📁 Project Structure

```
voice-identity-shield-portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ErrorBoundary.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageTransition.jsx
│   │   └── PresentationModal.jsx
│   ├── pages/
│   │   └── Home.jsx         # Main landing page
│   ├── assets/              # Images and media
│   ├── styles/              # Global styles
│   └── main.jsx            # Entry point
├── public/                  # Static assets
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/voice-identity-shield-portfolio.git
   cd voice-identity-shield-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

---

## 📸 Project Sections

The portfolio landing page includes:

1. **Hero Section** - Project overview and key highlights
2. **About the Project** - Problem statement and solution approach
3. **System Architecture** - Four-stage authentication pipeline
4. **Core Capabilities** - Key features and functionality
5. **57-Dimensional Feature Matrix** - Detailed biometric analysis categories
6. **Verification Pipeline** - Step-by-step verification process
7. **Embedding Visualization** - Interactive feature comparison charts
8. **Presentation Mode** - Interactive project walkthrough

---

## 🎯 Key Implementations

### Biometric Feature Extraction
- 57-dimensional feature vector extraction
- Real-time audio processing
- Feature comparison and delta analysis
- Leading shift detection for explainability

### Security Architecture
- Client-side encryption implementation
- Secure voiceprint vault design
- Multi-layer verification system
- Anti-spoof heuristics and feature drift penalties

### User Interface
- Responsive design with mobile-first approach
- Smooth page transitions and animations
- Interactive data visualizations
- Presentation mode for demonstrations

---

## 📊 Technical Details

### Feature Categories

1. **Spectral Intelligence** - Harmonic analysis and frequency domain features
2. **Temporal Micro-Patterns** - Time-domain variations and natural voice characteristics
3. **Prosodic Cadence** - Speaking patterns, rhythm, and emotional dynamics
4. **Phase & Residual Profiling** - Artifact detection for synthetic audio
5. **Vocoder Artifact Radar** - Detection of synthesis tool signatures
6. **Neural Embedding Proxies** - Statistical projections of deep learning embeddings
7. **Global Signal Statistics** - Overall voiceprint characteristics

### Verification Process

1. **57-D Feature Vector Extraction** - Real-time feature extraction
2. **Encrypted Voiceprint Vault** - Secure storage with AES-256-GCM
3. **Multi-Layer Verification** - Cosine similarity + anti-spoof scoring
4. **Explainable Analytics** - Detailed results with feature deltas

---

## 🌐 Deployment

This project can be deployed to any static hosting service:

- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with continuous integration
- **GitHub Pages** - Free hosting for static sites
- **AWS S3 + CloudFront** - Enterprise-grade hosting

### Deployment Steps

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting service
3. Configure routing for single-page application (SPA)

---

## 📝 Notes

- This is a **portfolio project** showcasing a voice biometric authentication system
- The frontend is fully functional and ready for deployment
- Backend implementation details are referenced but not included in this repository
- All sensitive information and API keys should be kept secure

---

## 👥 Team

**University of Technology and Applied Sciences – Muscat**

- **SHARIFA YOUSUF SULAIMAN AL KHARUSI** - [16S21235@utas.edu.om](mailto:16S21235@utas.edu.om)
- **TALAL AHMED HUSSEIN AL-AIDARUS** - [16S19144@utas.edu.om](mailto:16S19144@utas.edu.om)

**Specializations:** Cybersecurity | AI | Web Development | Voice Biometrics


---

## 🙏 Acknowledgments

- Research based on ASVspoof 2021 challenge and related academic papers
- Inspired by industry solutions from ID R&D and Phonexia
- Built with modern web technologies and best practices


