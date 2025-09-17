import { FormEvent, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAppStore } from '../store'

export default function Login(){
  const navigate = useNavigate()
  const { isAuthenticated, login } = useAppStore()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [loading,setLoading]=useState(false)

  if(isAuthenticated){
    return <Navigate to="/map" replace />
  }

  const onSubmit = async (e:FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    setTimeout(()=>{
      login(name || 'Traveler')
      navigate('/map', { replace:true })
    }, 600)
  }

  return (
    <div className="landing" style={{minHeight:'100vh'}}>
      <div className="landing-content" style={{gap:14}}>
        <div className="logo" style={{width:56,height:56}}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h2 style={{margin:0}}>Welcome to SafeTrails</h2>
        <form onSubmit={onSubmit} className="card" style={{padding:16,display:'grid',gap:12,width:'min(520px,90vw)'}}>
          <label style={{display:'grid',gap:6}}>
            <span>Name</span>
            <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" style={{padding:'12px 14px',borderRadius:12,border:'1px solid rgba(255,255,255,.14)',background:'rgba(255,255,255,.06)',color:'white'}}/>
          </label>
          <label style={{display:'grid',gap:6}}>
            <span>Email</span>
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" style={{padding:'12px 14px',borderRadius:12,border:'1px solid rgba(255,255,255,.14)',background:'rgba(255,255,255,.06)',color:'white'}}/>
          </label>
          <button className="btn btn-primary" disabled={loading}>{loading? 'Signing in...' : 'Continue'}</button>
        </form>
        <button className="btn btn-outline" onClick={()=>navigate('/map')}>Continue as Guest</button>
      </div>
    </div>
  )
}


