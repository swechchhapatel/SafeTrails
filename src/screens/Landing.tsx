import { useNavigate } from 'react-router-dom'

export default function Landing(){
  const navigate = useNavigate()
  return (
    <div className="landing">
      <div className="landing-content">
        <div className="logo" style={{width:56,height:56}}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h1 style={{margin:0}}>SafeTrails</h1>
        <div className="tagline">Your Journey. Our Watch.</div>
        <button className="btn btn-primary start-cta" onClick={()=>navigate('/map')}>Start Trip</button>
      </div>
    </div>
  )
}


