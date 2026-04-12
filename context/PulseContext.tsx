'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { events as hardcodedEvents, Event } from '@/data/events'

type User = {
  id: string
  name: string
  email: string
  password: string
}

type PulseStore = {
  user: User | null
  accounts: User[]
  userEvents: Event[]
  bookings: Record<string, string[]>
}

type PulseContextType = {
  user: User | null
  login: (email: string, password: string) => { success: boolean; message: string }
  signup: (name: string, email: string, password: string) => { success: boolean; message: string }
  logout: () => void
  allEvents: Event[]
  addEvent: (event: Event) => { success: boolean; message: string }  // ← fix return type
  bookTicket: (eventId: string) => void
  isBooked: (eventId: string) => boolean
  myTickets: Event[]
}

const defaultStore: PulseStore = {
  user: null,
  accounts: [],
  userEvents: [],
  bookings: {}
}

const loadFromStorage = (): PulseStore => {
  if (typeof window === 'undefined') return defaultStore
  try {
    const stored = localStorage.getItem('pulse')
    return stored ? JSON.parse(stored) : defaultStore
  } catch {
    return defaultStore
  }
}

const PulseContext = createContext<PulseContextType | null>(null)

export const PulseProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => loadFromStorage().user)
  const [accounts, setAccounts] = useState<User[]>(() => loadFromStorage().accounts)
  const [userEvents, setUserEvents] = useState<Event[]>(() => loadFromStorage().userEvents)
  const [bookings, setBookings] = useState<Record<string, string[]>>(() => loadFromStorage().bookings)

  useEffect(() => {
    localStorage.setItem('pulse', JSON.stringify({ user, accounts, userEvents, bookings }))
  }, [user, accounts, userEvents, bookings])

  const signup = (name: string, email: string, password: string) => {
    const exists = accounts.find(a => a.email === email)
    if (exists) return { success: false, message: 'An account with this email already exists' }
    const newUser: User = { id: crypto.randomUUID(), name, email, password }
    setAccounts(prev => [...prev, newUser])
    setUser(newUser)
    return { success: true, message: 'Account created!' }
  }

  const login = (email: string, password: string) => {
    const found = accounts.find(a => a.email === email && a.password === password)
    if (!found) return { success: false, message: 'Incorrect email or password' }
    setUser(found)
    return { success: true, message: 'Welcome back!' }
  }

  const logout = () => setUser(null)

  const addEvent = (event: Event) => {
  setUserEvents(prev => [...prev, event])
  return { success: true, message: 'Event created!' }
}

  const bookTicket = (eventId: string) => {
    if (!user) return
    setBookings(prev => ({
      ...prev,
      [user.id]: [...(prev[user.id] ?? []), eventId]
    }))
  }

  const isBooked = (eventId: string) => {
    if (!user) return false
    return (bookings[user.id] ?? []).includes(eventId)
  }

  const myTickets = [...hardcodedEvents, ...userEvents].filter(e =>
    (bookings[user?.id ?? ''] ?? []).includes(e.id)
  )

  return (
    <PulseContext.Provider value={{
      user, login, signup, logout,
      allEvents: [...hardcodedEvents, ...userEvents],
      addEvent, bookTicket, isBooked, myTickets
    }}>
      {children}
    </PulseContext.Provider>
  )
}

export const usePulse = () => {
  const ctx = useContext(PulseContext)
  if (!ctx) throw new Error('usePulse must be used inside PulseProvider')
  return ctx
}