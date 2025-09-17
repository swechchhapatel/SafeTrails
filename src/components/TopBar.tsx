import { useAppStore } from '../store'
import { Link } from 'react-router-dom'

export default function TopBar() {
  const setDrawer = useAppStore((s) => s.setDrawer)
  return (
    <div className="topbar">
      <Link to="/" className="brand">
        <div className="logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <span>SafeTrails</span>
      </Link>
      <button className="hamburger" onClick={() => setDrawer(true)} aria-label="Open menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  )
}


