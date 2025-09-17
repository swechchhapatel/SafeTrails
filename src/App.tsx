import { Route, Routes, useLocation } from 'react-router-dom'
import Landing from './screens/Landing'
import MapScreen from './screens/MapScreen'
import SosConfirm from './screens/SosConfirm'
import Profile from './screens/Profile'

export default function App() {
  const location = useLocation()
  return (
    <div className="app-root">
      <Routes location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/sos" element={<SosConfirm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}


