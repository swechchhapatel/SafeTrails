import { useAppStore } from '../store'
import { Link, useNavigate } from 'react-router-dom'

export default function Drawer() {
  const navigate = useNavigate()
  const { drawerOpen, setDrawer, shareWithFamily, setShare, language, setLanguage, isAuthenticated, userName, logout } = useAppStore()
  return (
    <div className={`drawer ${drawerOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div className="brand"><div className="logo"/>{isAuthenticated ? <strong>Hello, {userName}</strong> : <strong>Menu</strong>}</div>
        <button className="hamburger" onClick={() => setDrawer(false)} aria-label="Close menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </button>
      </div>

      <div className="toggle">
        <span>Share Location with Family</span>
        <input type="checkbox" checked={shareWithFamily} onChange={(e)=>setShare(e.target.checked)} />
      </div>

      <div className="toggle" style={{gap:12}}>
        <span>Language</span>
        <select value={language} onChange={(e)=>setLanguage(e.target.value as any)} style={{background:'transparent',color:'white',border:'1px solid rgba(255,255,255,.12)',padding:'8px 10px',borderRadius:10}}>
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="bn">বাংলা</option>
        </select>
      </div>

      <Link to="/profile" onClick={()=>setDrawer(false)} className="toggle">Digital ID / My Profile</Link>
      {isAuthenticated ? (
        <button className="btn btn-outline" onClick={()=>{ logout(); setDrawer(false); navigate('/login') }}>Logout</button>
      ) : (
        <button className="btn btn-primary" onClick={()=>{ setDrawer(false); navigate('/login') }}>Login</button>
      )}
      <a className="toggle" href="#about">About SafeTrails</a>
      <a className="toggle" href="#help">Help</a>

      <div style={{marginTop:'auto'}} className="chip">
        <span style={{width:8,height:8,background:'var(--green)',borderRadius:999}} />
        <span>Safe and connected</span>
      </div>
    </div>
  )
}


