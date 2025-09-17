import { Link, useNavigate } from 'react-router-dom'
import { useAppStore } from '../store'

export default function SosConfirm(){
  const navigate = useNavigate()
  const last = useAppStore(s=>s.lastLocation)
  const snapshotUrl = last ? `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+ff0000(${last.lng},${last.lat})/${last.lng},${last.lat},14,0/400x220?access_token=pk.eyJ1Ijoic2FmZXRyYWlscyIsImEiOiJja2ZrZ3Z3MDAwMDBqcG9wN2h6cHRyN2E4In0.fake` : undefined
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <div className="backbar">
        <button className="hamburger" onClick={()=>navigate(-1)} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <strong>SOS Status</strong>
      </div>
      <div style={{padding:16,display:'grid',gap:16,placeItems:'center'}}>
        <div className="card" style={{padding:20,textAlign:'center',maxWidth:560,width:'100%'}}>
          <div className="logo" style={{background:'var(--green)',margin:'0 auto 12px'}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <h2 style={{marginTop:0}}>Alert Sent to Authorities & Emergency Contacts</h2>
          <p style={{marginTop:0,color:'var(--muted)'}}>We are tracking your location and help is on the way.</p>
          {last && (
            <div className="card" style={{overflow:'hidden',borderRadius:14,margin:'12px auto',maxWidth:420}}>
              {snapshotUrl ? <img src={snapshotUrl} alt="Map snapshot" style={{display:'block',width:'100%',height:'auto'}}/> : <div style={{padding:16}}>Last location: {last.lat.toFixed(4)}, {last.lng.toFixed(4)}</div>}
            </div>
          )}
          <div style={{display:'grid',gap:10,marginTop:8}}>
            <Link to="/map" className="btn btn-primary">Stay on Map</Link>
            <a className="btn btn-outline" href="tel:112">Call Help</a>
          </div>
        </div>
      </div>
    </div>
  )
}


