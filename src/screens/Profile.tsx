import { useNavigate } from 'react-router-dom'

export default function Profile(){
  const navigate = useNavigate()
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <div className="backbar">
        <button className="hamburger" onClick={()=>navigate('/map')} aria-label="Back to map">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <strong>Digital ID</strong>
      </div>
      <div style={{padding:16,display:'grid',gap:16}}>
        <div className="card id-card">
          <div style={{display:'flex',gap:14,alignItems:'center'}}>
            <div style={{width:72,height:72,borderRadius:16,background:'rgba(255,255,255,.08)'}}></div>
            <div>
              <div style={{fontWeight:700,fontFamily:'Montserrat'}}>Traveler Name</div>
              <div className="chip">Digital Tourist ID: ST-2025-1842</div>
            </div>
          </div>
          <div className="list">
            <div style={{fontWeight:600}}>Trip Itinerary</div>
            <div className="card" style={{padding:12}}>
              • Day 1: India Gate, Delhi
            </div>
            <div className="card" style={{padding:12}}>
              • Day 2: Qutub Minar, Delhi
            </div>
            <div className="card" style={{padding:12}}>
              • Day 3: Red Fort, Delhi
            </div>
          </div>
          <div className="list">
            <div style={{fontWeight:600}}>Emergency Contacts</div>
            <div className="card" style={{padding:12,display:'flex',justifyContent:'space-between'}}>
              <span>Local Police</span>
              <a className="btn btn-outline" href="tel:112">Call 112</a>
            </div>
            <div className="card" style={{padding:12,display:'flex',justifyContent:'space-between'}}>
              <span>Guide - Priya</span>
              <a className="btn btn-outline" href="tel:+911234567890">Call</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


