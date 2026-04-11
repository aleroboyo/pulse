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
    description: 'The fourth edition of Lagos\'s most immersive electronic music experience. Expect deep house, techno, and afro-electronic sets from some of the continent\'s most exciting DJs. Doors open at 9pm — but the real energy starts at midnight.',
    date: 'Fri 11 Apr',
    time: '10pm',
    location: 'Victoria Island',
    category: 'Music',
    price: 5000,
    badge: 'Selling Out Fast',
    image: '/Midnight Frequencies Vol. 4.png',
    createdBy: 'Olu Babajide'
  },
  {
    id: 'e2',
    title: 'Afrobeats x Live Band Night',
    description: 'A full live band experience celebrating the best of Afrobeats, Afro-soul, and highlife. Featuring rotating guest performers and an open dance floor. Come ready to move — this one always sells out early.',
    date: 'Sat 12 Apr',
    time: '8pm',
    location: 'Lekki',
    category: 'Music',
    price: 8500,
    image: '/Afrobeats x Live Band Night.png',
    createdBy: 'Funmi Adelekun'
  },
  {
    id: 'e3',
    title: 'Rooftop Sundowner — April Edition',
    description: 'Watch the Lagos sunset from one of Ikoyi\'s most iconic rooftops. Free entry, craft cocktails, light bites, and a curated playlist to ease you into the weekend. No dress code — just good vibes.',
    date: 'Sat 12 Apr',
    time: '7pm',
    location: 'Ikoyi',
    category: 'Nightlife',
    price: 'Free',
    badge: 'Free',
    image: '/Rooftop Sundowner.png',
    createdBy: 'Obi Cubana'
  },
  {
    id: 'e4',
    title: 'Comedy Nite with Woli Agba',
    description: 'An unforgettable night of laughter headlined by Woli Agba, with sets from some of Nigeria\'s hottest up-and-coming comedians. Dinner and drinks available. Bring the whole crew — this one is for everyone.',
    date: 'Sun 13 Apr',
    time: '6pm',
    location: 'Eko Hotel, VI',
    category: 'Comedy',
    price: 12000,
    image: '/Comedy Nite with Woli Agba.png',
    createdBy: 'Anthony Greg'
  },
  {
    id: 'e5',
    title: 'Tech & Chill — Builders Meetup',
    description: 'A laid-back evening for founders, developers, designers, and anyone building something. Pitch your idea, find collaborators, or just show up and connect. Free drinks for the first 30 people through the door.',
    date: 'Wed 16 Apr',
    time: '5pm',
    location: 'Yaba, Lagos',
    category: 'Tech',
    price: 'Free',
    badge: 'Free',
    image: '/Tech & Chill — Builders Meetup.png',
    createdBy: '3 Seconds'
  },
  {
    id: 'e6',
    title: 'Lagos Jazz & Soul Evening',
    description: 'An intimate evening of live jazz and soul music at the iconic Balmoral. Featuring a full ensemble, velvet lighting, and a carefully curated dinner menu. Dress smart — this is a night to remember.',
    date: 'Fri 18 Apr',
    time: '7:30pm',
    location: 'Balmoral, VI',
    category: 'Music',
    price: 15000,
    badge: 'Tonight',
    image: '/Lagos Jazz _ Soul.png',
    createdBy: 'Sergents'
  }
]