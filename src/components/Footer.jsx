import halfLogo from '../assets/hafl_no_background.png'

const Footer = () => {
  return (
    <footer className="bg-dark/80 border-t border-border/50 mt-auto backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src={halfLogo} 
              alt="Voice Identity Shield Logo" 
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-text-secondary text-sm leading-relaxed">
              Protecting your voice identity from AI impersonation attacks using advanced biometric authentication.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="/" className="hover:text-primary transition-colors rounded-lg px-2 py-1 inline-block hover:bg-primary/5">Home</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold text-text-primary mb-4">Team & Contact</h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              University of Technology and Applied Sciences – Muscat
            </p>
            <ul className="mt-2 space-y-1 text-sm text-text-secondary">
              <li>
                SHARIFA YOUSUF SULAIMAN AL KHARUSI —{' '}
                <a className="text-primary hover:underline" href="mailto:16S21235@utas.edu.om">16S21235@utas.edu.om</a>
              </li>
              <li>
                TALAL AHMED HUSSEIN AL-AIDARUS —{' '}
                <a className="text-primary hover:underline" href="mailto:16S19144@utas.edu.om">16S19144@utas.edu.om</a>
              </li>
            </ul>
            <p className="text-text-secondary text-sm mt-3 leading-relaxed">
              Cybersecurity | AI | Web Development | Voice Biometrics
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-text-secondary text-sm">
          <p>© 2025 Voice Identity Shield. AES‑256‑GCM encrypted voiceprints • HTTPS/TLS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

