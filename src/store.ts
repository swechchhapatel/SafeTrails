import { create } from 'zustand'

type AppState = {
  drawerOpen: boolean
  shareWithFamily: boolean
  language: 'en' | 'hi' | 'bn'
  lastLocation?: { lat: number; lng: number }
  isAuthenticated: boolean
  userName?: string
  setDrawer: (open: boolean) => void
  setShare: (share: boolean) => void
  setLanguage: (lang: 'en' | 'hi' | 'bn') => void
  setLastLocation: (lat: number, lng: number) => void
  login: (name: string) => void
  logout: () => void
}

export const useAppStore = create<AppState>((set) => ({
  drawerOpen: false,
  shareWithFamily: true,
  language: 'en',
  isAuthenticated: false,
  setDrawer: (open) => set({ drawerOpen: open }),
  setShare: (share) => set({ shareWithFamily: share }),
  setLanguage: (language) => set({ language }),
  setLastLocation: (lat, lng) => set({ lastLocation: { lat, lng } }),
  login: (name) => set({ isAuthenticated: true, userName: name }),
  logout: () => set({ isAuthenticated: false, userName: undefined }),
}))


