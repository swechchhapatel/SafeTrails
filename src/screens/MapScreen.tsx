import { MapContainer, TileLayer, Marker, Polygon, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useEffect, useMemo, useState } from 'react'
import TopBar from '../components/TopBar'
import Drawer from '../components/Drawer'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../store'

const blueIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
})

function Geolocate({ onPos }:{ onPos:(lat:number,lng:number)=>void }){
  const map = useMap()
  useEffect(()=>{
    if(!navigator.geolocation) return
    const watchId = navigator.geolocation.watchPosition((pos)=>{
      const { latitude: lat, longitude: lng } = pos.coords
      onPos(lat,lng)
      map.setView([lat,lng], 15)
    })
    return ()=> navigator.geolocation.clearWatch(watchId)
  },[map,onPos])
  return null
}

// Simple polygon near Delhi for demo
const riskPolygon: [number, number][] = [
  [28.627, 77.205], [28.634, 77.22], [28.625, 77.235], [28.613, 77.225], [28.617, 77.208]
]

function pointInPolygon(point:[number,number], polygon:[number,number][]) {
  const [x, y] = point
  let inside = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0], yi = polygon[i][1]
    const xj = polygon[j][0], yj = polygon[j][1]
    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    if (intersect) inside = !inside
  }
  return inside
}

export default function MapScreen(){
  const navigate = useNavigate()
  const setLastLocation = useAppStore(s=>s.setLastLocation)
  const [pos,setPos]=useState<[number,number]>([28.6139,77.209])
  const [inRisk,setInRisk]=useState(false)
  const polygon = useMemo(()=>riskPolygon,[ ])

  useEffect(()=>{ setInRisk(pointInPolygon(pos, polygon)) },[pos,polygon])

  return (
    <div className="map-wrap">
      <TopBar/>
      <Drawer/>
      <div className={`alert-banner ${inRisk? '' : 'alert-hidden'}`}>
        ⚠️ You are entering a high-risk zone. Stay alert.
      </div>
      <MapContainer center={pos} zoom={14} style={{height:'100%',width:'100%'}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap"/>
        <Geolocate onPos={(lat,lng)=>{ setPos([lat,lng]); setLastLocation(lat,lng) }} />
        <Marker position={pos} icon={blueIcon} />
        <Polygon positions={polygon} pathOptions={{ color:'#EF4444', fillColor:'#EF4444', fillOpacity:0.25 }} />
      </MapContainer>
      <div className="sos-btn">
        <button className="btn btn-danger" style={{width:'100%',padding:18,fontSize:18}} onClick={()=>navigate('/sos')}>SOS - Send Alert</button>
      </div>
    </div>
  )
}


