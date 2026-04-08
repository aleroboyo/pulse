export type Event = {
  id: string
  title: string
  description?: string
  date: string
  time: string
  location: string
  category: string
  price: number | 'Free'
  createdBy?: string
  image?: string
  badge?: string
}

export const events: Event[] = [
  {
    id: 'e1',
    title: 'Midnight Frequencies Vol. 4',
    date: 'Fri 11 Apr',
    time: '10pm',
    location: 'Victoria Island',
    category: 'Music',
    price: 5000,
    badge: 'Selling Out Fast',
    image: '/Midnight Frequencies Vol. 4.png'
  },
  {
    id: 'e2',
    title: 'Afrobeats x Live Band Night',
    date: 'Sat 12 Apr',
    time: '8pm',
    location: 'Lekki',
    category: 'Music',
    price: 8500,
    image: '/Afrobeats x Live Band Night.png'
  },
  {
    id: 'e3',
    title: 'Rooftop Sundowner — April Edition',
    date: 'Sat 12 Apr',
    time: '7pm',
    location: 'Ikoyi',
    category: 'Nightlife',
    price: 'Free',
    badge: 'Free',
    image: '/Rooftop Sundowner.png'
  },
  {
    id: 'e4',
    title: 'Comedy Nite with Woli Agba',
    date: 'Sun 13 Apr',
    time: '6pm',
    location: 'Eko Hotel, VI',
    category: 'Comedy',
    price: 12000,
    image: '/Comedy Nite with Woli Agba.png'
  },
  {
    id: 'e5',
    title: 'Tech & Chill — Builders Meetup',
    date: 'Wed 16 Apr',
    time: '5pm',
    location: 'Yaba, Lagos',
    category: 'Tech',
    price: 'Free',
    badge: 'Free',
    image: '/Tech & Chill — Builders Meetup.png'
  },
  {
    id: 'e6',
    title: 'Lagos Jazz & Soul Evening',
    date: 'Fri 18 Apr',
    time: '7:30pm',
    location: 'Balmoral, VI',
    category: 'Music',
    price: 15000,
    badge: 'Tonight',
    image: '/Lagos Jazz _ Soul.png'
  }
]