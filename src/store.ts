import { create } from 'zustand'

type AppState = {
  drawerOpen: boolean
  shareWithFamily: boolean
  language: 'en' | 'hi' | 'bn'
  lastLocation?: { lat: number; lng: number }
  setDrawer: (open: boolean) => void
  setShare: (share: boolean) => void
  setLanguage: (lang: 'en' | 'hi' | 'bn') => void
  setLastLocation: (lat: number, lng: number) => void
}

export const useAppStore = create<AppState>((set) => ({
  drawerOpen: false,
  shareWithFamily: true,
  language: 'en',
  setDrawer: (open) => set({ drawerOpen: open }),
  setShare: (share) => set({ shareWithFamily: share }),
  setLanguage: (language) => set({ language }),
  setLastLocation: (lat, lng) => set({ lastLocation: { lat, lng } }),
}))


