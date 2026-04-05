import { startTransition, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const pages = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'about', label: 'About Us' },
  { id: 'history', label: 'Our Story' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'menu', label: 'Menu' },
  { id: 'reserve', label: 'Reserve' },
  { id: 'hiring', label: 'Hiring' },
]

const aboutPillars = [
  {
    title: 'Focused Energy',
    description:
      'We design the room for gentle accountability with quiet corners, timer-friendly tables, and a respectful work rhythm.',
  },
  {
    title: 'Warm Hospitality',
    description:
      'Guests can drop in for deep work, study sessions, coworking dates, or mindful breaks without losing the comfort of a neighborhood cafe.',
  },
  {
    title: 'Intentional Community',
    description:
      'Every seat is built to support routine, reflection, and the small rituals that help people show up for themselves.',
  },
]

const teamMembers = [
  'Elsa Jimenez-Mendez',
  'Erika Guzman Mendoza',
  'Aditi Dewangan',
  'Chloe',
  'Brooke',
]

const welcomeGallery = [
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warm cafe interior with tables and natural light',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    alt: 'Coffee and cafe counter scene',
  },
  {
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80',
    alt: 'Calm cafe table setup for working and studying',
  },
]

const timeline = [
  {
    year: 'Research',
    title: 'Validation with students and young adults',
    description:
      'We surveyed and interviewed 30 university students and young adults to understand procrastination, cafe habits, and interest in accountability-based study spaces.',
  },
  {
    year: 'Traction',
    title: 'Clear demand for productive cafe spaces',
    description:
      '75.9% rated their procrastination frequency at a 4 or 5 on a 5-point scale, around 85% already use cafes to socialize or study, and 69% said they would be willing to pay for an accountability study space.',
  },
  {
    year: 'Prototype',
    title: 'Designing the customer experience',
    description:
      'We built a mock website and reservation system to show how guests would reserve seats, set goals, select accountability modes, and access workshops, tutoring, and rewards.',
  },
  {
    year: 'Next',
    title: 'Refining the full cafe model',
    description:
      'The current prototype helps us test pricing, room use, membership value, workshop demand, and the overall service model before launch.',
  },
]

const accountabilityStats = [
  {
    value: '75.9%',
    label: 'rated their procrastination frequency as a 4 or 5 on a 5-point scale.',
  },
  {
    value: '85%',
    label: 'already go to cafes intending to socialize, study, or work.',
  },
  {
    value: '69%',
    label: 'said they would be inclined to pay for an accountability study space.',
  },
]

const pricingPlans = [
  {
    title: 'Hourly Pass',
    price: '$5',
    description: 'Great for shorter sessions, quick resets, or one class block of focused study time.',
  },
  {
    title: 'Day Pass',
    price: '$20',
    description: 'Best for guests staying four hours or more, with complimentary access to our coffee and tea station.',
  },
  {
    title: 'Monthly Membership',
    price: '$150',
    description: 'Breaks even after about 8 visits and is designed for students who study with us around twice per week.',
  },
]

const missionSystems = [
  {
    title: 'Mission',
    description:
      'We exist to make productivity feel warmer, kinder, and more sustainable by pairing a calm cafe environment with real accountability support.',
  },
  {
    title: 'Rewards',
    description:
      'Guests earn website points when they complete goals during their session, and physical punch cards reward loyalty on our signature drinks with the 11th drink on us.',
  },
  {
    title: 'Structure',
    description:
      'Reservations ask guests to choose a seat, set a goal, and select an accountability mode so the entire experience supports follow-through instead of passive studying.',
  },
  {
    title: 'Commitment',
    description:
      'To reinforce accountability, guests who do not accomplish their stated goal may receive a $2 penalty, while workshop late-cancel policies help protect shared space and instructor time.',
  },
]

const membershipPerks = [
  'Complimentary coffee and tea station access',
  'Free tutor and workshop access for monthly members',
  'Reserve study rooms and conference spaces',
  'Goal-based points earned through the website',
  'Physical punch cards for unique drinks',
]

const accountabilityModes = [
  {
    id: 'low',
    title: 'Low accountability',
    description: 'Check-ins happen at the beginning and end of your stay.',
  },
  {
    id: 'mild',
    title: 'Mild accountability',
    description: 'Check-ins happen every 45 minutes for steady support.',
  },
  {
    id: 'intense',
    title: 'Intense accountability',
    description: 'Check-ins happen every 30 minutes for stronger momentum.',
  },
]

const workshopOptions = [
  {
    title: 'Thursday Skill Workshops',
    time: 'Thursdays at 7:00 PM',
    price: '$17 for 60-90 min',
    description:
      'Short-form workshops focused on productivity, planning, study systems, and practical academic support. Includes one signature drink.',
  },
  {
    title: 'Extended Intensive Workshops',
    time: 'Selected Thursdays at 7:00 PM',
    price: '$25 for 120-150 min',
    description:
      'Longer guided sessions for deeper academic skill-building, project planning, and accountability practice. Includes one signature drink.',
  },
]

const tutorSubjects = [
  'Reading',
  'History',
  'Math',
  'Science',
]

const hiringRoles = [
  {
    title: 'Barista',
    pay: '$21.30/hour',
    description:
      'Supports drinks, table resets, customer flow, and the welcoming atmosphere of the cafe. Two baristas are on the clock at all times.',
  },
  {
    title: 'Accountability Staff',
    pay: '$26.30/hour',
    description:
      'Guides guest check-ins, helps customers stay on track, and keeps the cafe energetic and approachable. Associate degree or higher preferred.',
  },
  {
    title: 'Subcontracted Tutor',
    pay: '$25/hour',
    description:
      'Provides tutoring support in reading, history, math, or science during scheduled tutoring blocks.',
  },
  {
    title: 'Workshop Facilitator',
    pay: '$25/hour',
    description:
      'Leads structured workshops that support productivity, learning, and student confidence.',
  },
]

const menuSections = [
  {
    title: 'Signature Drinks',
    items: [
      { name: 'Lavender Matcha Cloud', price: '$7', note: 'Ceremonial matcha, oat milk, lavender cream' },
      { name: 'Rosemary Honey Latte', price: '$7.50', note: 'Espresso, rosemary syrup, wildflower honey' },
      { name: 'Deep Focus Cold Brew', price: '$7', note: 'Cold brew, cardamom foam, cocoa dust' },
      { name: 'Greenhouse Tonic', price: '$6', note: 'Cucumber, mint, lime, sparkling botanical tonic' },
    ],
  },
  {
    title: 'Tea and Reset',
    items: [
      { name: 'Calm Window Tea Pot', price: '$8', note: 'Lavender, chamomile, lemon balm' },
      { name: 'Jasmine Clarity Tea', price: '$5.50', note: 'Fragrant jasmine green tea' },
      { name: 'Golden Pause Latte', price: '$6.25', note: 'Turmeric, ginger, maple, steamed milk' },
      { name: 'House Hot Chocolate', price: '$6.50', note: 'Rich cocoa with warm spice and whipped cream' },
    ],
  },
  {
    title: 'Cafe Kitchen',
    items: [
      { name: 'Accountability Toast', price: '$9.50', note: 'Whipped ricotta, herbs, greens, sourdough' },
      { name: 'Garden Pesto Melt', price: '$12', note: 'Mozzarella, pesto, tomato, focaccia' },
      { name: 'Focus Bowl', price: '$13.50', note: 'Rice, greens, egg, avocado, sesame dressing' },
      { name: 'Notebook Cookie', price: '$4.25', note: 'Brown butter cookie with sea salt' },
    ],
  },
]

const reservationRows = [
  [
    { id: 'A1', type: 'window-booth-natural', price: 22 },
    { id: 'A2', type: 'booth-dim', price: 17 },
    { id: 'A3', type: 'lounge-natural', price: 19 },
    { id: 'A4', type: 'table-dim', price: 16 },
    { id: 'A5', type: 'occupied', price: 16 },
    { id: 'A6', type: 'window-booth-natural', price: 22 },
  ],
  [
    { id: 'B1', type: 'booth-dim', price: 17 },
    { id: 'B2', type: 'occupied', price: 16 },
    { id: 'B3', type: 'lounge-natural', price: 19 },
    { id: 'B4', type: 'table-dim', price: 16 },
    { id: 'B5', type: 'window-booth-natural', price: 22 },
    { id: 'B6', type: 'booth-dim', price: 17 },
  ],
  [
    { id: 'C1', type: 'lounge-natural', price: 19 },
    { id: 'C2', type: 'table-dim', price: 16 },
    { id: 'C3', type: 'window-booth-natural', price: 22 },
    { id: 'C4', type: 'occupied', price: 16 },
    { id: 'C5', type: 'booth-dim', price: 17 },
    { id: 'C6', type: 'lounge-natural', price: 19 },
  ],
]

const tableTypeLabels = {
  'window-booth-natural': 'Window booth + natural lighting',
  'booth-dim': 'Booth seating + dim lighting',
  'lounge-natural': 'Lounge seats + natural lighting',
  'table-dim': 'Table seating + dim lighting',
  occupied: 'Unavailable',
}

const tableTypeDescriptions = {
  'window-booth-natural': 'Booth comfort by the window with bright natural light for long, focused sessions.',
  'booth-dim': 'A quieter booth with softer lighting for calm, low-stimulation work.',
  'lounge-natural': 'Relaxed lounge seating with daylight, ideal for reading, planning, or gentle work.',
  'table-dim': 'A classic cafe table with softer lighting for structured work without the glare.',
}

function App() {
  const [activePage, setActivePage] = useState('welcome')
  const [selectedTable, setSelectedTable] = useState(null)
  const [reservationStep, setReservationStep] = useState('select')
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    slot: '2:00 PM - 4:00 PM',
    goal: '',
    mode: 'mild',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    zip: '',
  })
  const [workshopSignup, setWorkshopSignup] = useState({
    name: '',
    email: '',
    session: 'Thursday Skill Workshops',
  })
  const [workshopSubmitted, setWorkshopSubmitted] = useState(false)

  const selectedTableData = reservationRows.flat().find((table) => table.id === selectedTable)
  const reservationFee = selectedTableData?.price ?? 0
  const serviceFee = selectedTableData ? 2 : 0
  const totalFee = reservationFee + serviceFee

  const navigateTo = (pageId) => {
    startTransition(() => {
      setActivePage(pageId)
    })
  }

  const chooseTable = (table) => {
    if (table.type === 'occupied') {
      return
    }

    setSelectedTable(table.id)
    setReservationStep('details')
  }

  const handleBookingChange = (event) => {
    const { name, value } = event.target
    setBookingDetails((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleWorkshopChange = (event) => {
    const { name, value } = event.target
    setWorkshopSignup((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleWorkshopSubmit = (event) => {
    event.preventDefault()
    setWorkshopSubmitted(true)
  }

  const handleReservationSubmit = (event) => {
    event.preventDefault()

    if (!selectedTableData) {
      return
    }

    setReservationStep('payment')
  }

  const confirmReservation = () => {
    setReservationStep('confirmed')
  }

  const resetReservation = () => {
    setSelectedTable(null)
    setReservationStep('select')
    setBookingDetails({
      name: '',
      email: '',
      slot: '2:00 PM - 4:00 PM',
      goal: '',
      mode: 'mild',
      cardName: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
      zip: '',
    })
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Dempsey Cafe</p>
          <p className="brand-tag">Lavender calm, green focus, and a room full of gentle accountability.</p>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          {pages.map((page) => (
            <button
              key={page.id}
              type="button"
              className={activePage === page.id ? 'nav-pill active' : 'nav-pill'}
              onClick={() => navigateTo(page.id)}
            >
              {page.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="page-frame">
        {activePage === 'welcome' && (
          <section className="page page-welcome">
            <div className="welcome-intro">
              <div className="hero-copy">
                <p className="section-kicker">Welcome page</p>
                <h1>A calm cafe built to help you begin, stay focused, and follow through.</h1>
                <p className="lead">
                  Dempsey Cafe blends soft hospitality with gentle structure. We are open daily from 9:00 AM to 12:00 AM
                  and built for students and young adults who want a productive place to study, reset, and be held
                  accountable.
                </p>
                <div className="hero-actions">
                  <button type="button" className="primary-button" onClick={() => navigateTo('reserve')}>
                    Reserve a table
                  </button>
                  <button type="button" className="secondary-button" onClick={() => navigateTo('workshops')}>
                    Explore workshops
                  </button>
                </div>
              </div>

              <aside className="welcome-panel">
                <p className="panel-kicker">Open hours</p>
                <h2>Daily from 9:00 AM to Midnight</h2>
                <div className="welcome-steps">
                  <article>
                    <strong>$5 hourly pass</strong>
                    <p>Perfect for shorter visits, quick resets, and one-block study sessions.</p>
                  </article>
                  <article>
                    <strong>$20 day pass</strong>
                    <p>Best for stays of four hours or more, with access to our complimentary coffee and tea station.</p>
                  </article>
                  <article>
                    <strong>$150 monthly membership</strong>
                    <p>Breaks even after about eight visits and includes tutor access, workshops, and room reservation perks.</p>
                  </article>
                </div>
              </aside>
            </div>

            <section className="welcome-gallery" aria-label="Cafe atmosphere photos">
              {welcomeGallery.map((photo, index) => (
                <article
                  key={photo.src}
                  className={index === 0 ? 'gallery-card gallery-card large' : 'gallery-card'}
                >
                  <img src={photo.src} alt={photo.alt} />
                </article>
              ))}
            </section>

            <div className="welcome-feature-band">
              <article className="welcome-story-card">
                <div>
                  <p className="panel-kicker">The system</p>
                  <h2>Study space, accountability service, rewards, and workshops in one experience.</h2>
                  <p>
                    Guests can reserve seating, choose accountability modes, set session goals, reserve study rooms, and
                    access workshops and tutoring. Monthly members also receive added value built for repeat weekly use.
                  </p>
                </div>
                <img src={heroImg} alt="Illustration representing a calm cafe atmosphere" />
              </article>

              <div className="hero-stats" aria-label="Cafe highlights">
                <article>
                  <strong>4</strong>
                  <span>study rooms with capacity for 6 each and flexible walls for a 24-person conference setup</span>
                </article>
                <article>
                  <strong>2</strong>
                  <span>Zoom pods available first come, first served</span>
                </article>
                <article>
                  <strong>Free</strong>
                  <span>complimentary coffee and tea station with longer pass options and memberships</span>
                </article>
              </div>
            </div>

            <div className="split-grid">
              <section className="pricing-grid">
                {pricingPlans.map((plan) => (
                  <article key={plan.title} className="menu-card">
                    <p className="panel-kicker">{plan.price}</p>
                    <h2>{plan.title}</h2>
                    <p>{plan.description}</p>
                  </article>
                ))}
              </section>
              <article className="menu-card">
                <p className="panel-kicker">Membership perks</p>
                <h2>Built for repeat weekly use</h2>
                <ul className="perks-list">
                  {membershipPerks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        )}

        {activePage === 'about' && (
          <section className="page">
            <div className="page-heading">
              <p className="section-kicker">About us</p>
              <h1>We built a cafe that feels like a supportive study partner.</h1>
              <p className="lead">
                Our concept blends specialty coffee, restorative design, structured accountability, tutoring, and
                workshop programming so every guest can work, meet goals, and feel supported.
              </p>
            </div>
            <div className="pillar-grid">
              {aboutPillars.map((pillar) => (
                <article key={pillar.title} className="info-card">
                  <h2>{pillar.title}</h2>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
            <section className="team-section">
              <div className="page-heading compact">
                <p className="section-kicker">Our team</p>
                <h2>The people shaping the space</h2>
              </div>
              <div className="team-grid">
                {teamMembers.map((member) => (
                  <article key={member} className="team-card">
                    <h3>{member}</h3>
                    <p>Building a cafe experience that makes consistency feel welcoming.</p>
                  </article>
                ))}
              </div>
            </section>
          </section>
        )}

        {activePage === 'history' && (
          <section className="page">
            <div className="page-heading">
              <p className="section-kicker">Our story</p>
              <h1>Our mission is to turn cafe time into productive, accountable time.</h1>
              <p className="lead">
                We created Dempsey Cafe for students and young adults who struggle with procrastination and want a study
                space that is warm, motivating, and structured.
              </p>
            </div>
            <section className="stats-band">
              {accountabilityStats.map((stat) => (
                <article key={stat.value} className="stat-card">
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </article>
              ))}
            </section>
            <section className="systems-grid">
              {missionSystems.map((item) => (
                <article key={item.title} className="info-card">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </article>
              ))}
            </section>
            <div className="story-note">
              <h2>Punch cards and accountability rewards</h2>
              <p>
                Our system is designed around motivation psychology. Guests can earn website points for completing goals
                during their stay, while physical punch cards reward repeat purchases of our unique drinks, with the 11th
                drink free. Together, the rewards system and accountability check-ins help make consistency feel tangible.
              </p>
            </div>
            <div className="timeline">
              {timeline.map((item) => (
                <article key={item.year} className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activePage === 'workshops' && (
          <section className="page">
            <div className="page-heading">
              <p className="section-kicker">Workshops</p>
              <h1>Guided sessions that help students study smarter and stay consistent.</h1>
              <p className="lead">
                Our workshops are designed for students who want structure, practical tools, and a supportive community.
                Walk-ins are welcome when space permits, but reservations are encouraged through the website.
              </p>
            </div>
            <div className="workshop-grid">
              {workshopOptions.map((workshop) => (
                <article key={workshop.title} className="menu-card">
                  <p className="panel-kicker">{workshop.time}</p>
                  <h2>{workshop.title}</h2>
                  <p>{workshop.description}</p>
                  <p className="selection-note">{workshop.price}</p>
                </article>
              ))}
              <article className="menu-card">
                <p className="panel-kicker">Policies</p>
                <h2>Workshop reservation details</h2>
                <p>
                  Guests who arrive more than 15 minutes late lose their reserved spot. After 3 cancellations, the 4th
                  cancellation results in a $5 charge.
                </p>
                <p className="selection-note">Each workshop reservation includes one signature drink that is lower-cost to produce.</p>
              </article>
            </div>
            <div className="split-grid">
              <article className="menu-card">
                <p className="panel-kicker">Tutoring support</p>
                <h2>Tuesdays from 4:00 PM to 8:00 PM</h2>
                <p>
                  Tutors are available back-to-back in reading, history, math, and science. Non-members pay $5 hourly,
                  while monthly members receive tutoring access at no additional cost.
                </p>
                <p className="selection-note">Subjects: {tutorSubjects.join(', ')}</p>
              </article>
              <article className="booking-card">
                <p className="panel-kicker">Sign up</p>
                <h2>Reserve a workshop spot</h2>
                <form className="booking-form" onSubmit={handleWorkshopSubmit}>
                  <label>
                    Full name
                    <input name="name" value={workshopSignup.name} onChange={handleWorkshopChange} required />
                  </label>
                  <label>
                    Email
                    <input name="email" type="email" value={workshopSignup.email} onChange={handleWorkshopChange} required />
                  </label>
                  <label>
                    Workshop option
                    <select name="session" value={workshopSignup.session} onChange={handleWorkshopChange}>
                      <option>Thursday Skill Workshops</option>
                      <option>Extended Intensive Workshops</option>
                    </select>
                  </label>
                  <button type="submit" className="primary-button">Sign up for workshop</button>
                </form>
                {workshopSubmitted && (
                  <p className="selection-note">Your workshop interest has been recorded in this prototype flow.</p>
                )}
              </article>
            </div>
          </section>
        )}

        {activePage === 'menu' && (
          <section className="page">
            <div className="page-heading">
              <p className="section-kicker">Cafe menu</p>
              <h1>Comforting drinks and clean, nourishing food for long focus sessions.</h1>
            </div>
            <div className="menu-note">
              <strong>Unlimited house drinks included</strong>
              <p>
                Tea, coffee, and hot chocolate are unlimited with qualifying reservations and membership-style visits, so
                guests can settle in without watching the clock between refills.
              </p>
            </div>
            <div className="menu-grid">
              {menuSections.map((section) => (
                <section key={section.title} className="menu-card">
                  <h2>{section.title}</h2>
                  <div className="menu-items">
                    {section.items.map((item) => (
                      <article key={item.name} className="menu-item">
                        <div>
                          <h3>{item.name}</h3>
                          <p>{item.note}</p>
                        </div>
                        <strong>{item.price}</strong>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            <div className="split-grid top-gap">
              <article className="menu-card">
                <p className="panel-kicker">Online ordering</p>
                <h2>Built into the website experience</h2>
                <p>
                  Customers will be able to browse the menu and order online as part of the full cafe system, whether they
                  are reserving accountability service or planning a study visit in advance.
                </p>
              </article>
              <article className="menu-card">
                <p className="panel-kicker">Cafe details</p>
                <h2>Designed to feel memorable</h2>
                <p>
                  The physical cafe will include composable to-go cups, unique dine-in mugs and plates, hanging
                  motivational quotes, and a light green, lavender, brown, and plant-filled interior aesthetic.
                </p>
              </article>
            </div>
          </section>
        )}

        {activePage === 'reserve' && (
          <section className="page reserve-page">
            <div className="page-heading">
              <p className="section-kicker">Reserve a table</p>
              <h1>Choose your space, set your goal, and reserve accountability support.</h1>
              <p className="lead">
                Guests can reserve accountability service, seating, and study space through the website. Study rooms seat
                6 each and can combine into a 24-person conference room.
              </p>
            </div>

            <div className="reserve-layout">
              <div className="reserve-map-card">
                <div className="screen-banner">Tea bar, check-in counter, and complimentary coffee station</div>
                <div className="legend" aria-label="Reservation legend">
                  <span><i className="legend-dot window-booth-natural"></i>Window booth + natural lighting</span>
                  <span><i className="legend-dot booth-dim"></i>Booth seating + dim lighting</span>
                  <span><i className="legend-dot lounge-natural"></i>Lounge seats + natural lighting</span>
                  <span><i className="legend-dot table-dim"></i>Table seating + dim lighting</span>
                  <span><i className="legend-dot occupied"></i>Unavailable</span>
                </div>
                <div className="table-map" role="grid" aria-label="Reservation table map">
                  {reservationRows.map((row, rowIndex) => (
                    <div key={`row-${rowIndex}`} className="table-row" role="row">
                      {row.map((table) => {
                        const isSelected = selectedTable === table.id
                        const className = ['table-seat', `type-${table.type}`, isSelected ? 'selected' : '']
                          .filter(Boolean)
                          .join(' ')

                        return (
                          <button
                            key={table.id}
                            type="button"
                            role="gridcell"
                            className={className}
                            onClick={() => chooseTable(table)}
                            disabled={table.type === 'occupied'}
                            aria-pressed={isSelected}
                          >
                            <span>{table.id}</span>
                            <small>${table.price}</small>
                          </button>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <aside className="booking-panel">
                <div className="booking-status">
                  <span className={reservationStep === 'select' ? 'step active' : 'step'}>1. Select</span>
                  <span className={reservationStep === 'details' ? 'step active' : 'step'}>2. Details</span>
                  <span className={reservationStep === 'payment' ? 'step active' : 'step'}>3. Pay</span>
                  <span className={reservationStep === 'confirmed' ? 'step active' : 'step'}>4. Confirmed</span>
                </div>

                {!selectedTableData && (
                  <div className="booking-card">
                    <h2>Pick a table to begin</h2>
                    <p>Select any available seat to see pricing, choose your goals, and move into the payment step.</p>
                  </div>
                )}

                {selectedTableData && reservationStep !== 'confirmed' && (
                  <div className="booking-card">
                    <h2>{selectedTableData.id} reserved for focus</h2>
                    <p>{tableTypeLabels[selectedTableData.type]} for your next session.</p>
                    <p className="selection-note">More information: {tableTypeDescriptions[selectedTableData.type]}</p>

                    <div className="price-summary">
                      <div>
                        <span>Seat fee</span>
                        <strong>${reservationFee}</strong>
                      </div>
                      <div>
                        <span>Service fee</span>
                        <strong>${serviceFee}</strong>
                      </div>
                      <div className="total">
                        <span>Total due</span>
                        <strong>${totalFee}</strong>
                      </div>
                    </div>

                    {(reservationStep === 'details' || reservationStep === 'payment') && (
                      <form className="booking-form" onSubmit={handleReservationSubmit}>
                        <label>
                          Full name
                          <input
                            name="name"
                            value={bookingDetails.name}
                            onChange={handleBookingChange}
                            placeholder="Jordan Rivera"
                            required
                          />
                        </label>
                        <label>
                          Email
                          <input
                            name="email"
                            type="email"
                            value={bookingDetails.email}
                            onChange={handleBookingChange}
                            placeholder="jordan@example.com"
                            required
                          />
                        </label>
                        <label>
                          Reservation slot
                          <select name="slot" value={bookingDetails.slot} onChange={handleBookingChange}>
                            <option>9:00 AM - 11:00 AM</option>
                            <option>12:00 PM - 2:00 PM</option>
                            <option>2:00 PM - 4:00 PM</option>
                            <option>5:00 PM - 7:00 PM</option>
                          </select>
                        </label>
                        <label>
                          Session goal
                          <textarea
                            name="goal"
                            value={bookingDetails.goal}
                            onChange={handleBookingChange}
                            placeholder="Finish my chemistry notes, draft two scholarship essays, and stay off my phone."
                            rows="3"
                            required
                          />
                        </label>
                        <fieldset className="mode-fieldset">
                          <legend>Accountability mode</legend>
                          <p className="field-help">Choose how often you want check-ins during your session.</p>
                          <div className="mode-options">
                            {accountabilityModes.map((mode) => (
                              <label key={mode.id} className={bookingDetails.mode === mode.id ? 'mode-option active' : 'mode-option'}>
                                <input
                                  type="radio"
                                  name="mode"
                                  value={mode.id}
                                  checked={bookingDetails.mode === mode.id}
                                  onChange={handleBookingChange}
                                />
                                <div>
                                  <strong>{mode.title}</strong>
                                  <span>{mode.description}</span>
                                </div>
                              </label>
                            ))}
                          </div>
                        </fieldset>

                        {reservationStep === 'details' && (
                          <button type="submit" className="primary-button">
                            Continue to payment
                          </button>
                        )}
                      </form>
                    )}

                    {reservationStep === 'payment' && (
                      <form
                        className="payment-box booking-form"
                        onSubmit={(event) => {
                          event.preventDefault()
                          confirmReservation()
                        }}
                      >
                        <p>Payment details</p>
                        <h3>Secure your reservation</h3>
                        <label>
                          Name on card
                          <input
                            name="cardName"
                            value={bookingDetails.cardName}
                            onChange={handleBookingChange}
                            placeholder="Jordan Rivera"
                            required
                          />
                        </label>
                        <label>
                          Card number
                          <input
                            name="cardNumber"
                            inputMode="numeric"
                            value={bookingDetails.cardNumber}
                            onChange={handleBookingChange}
                            placeholder="4242 4242 4242 4242"
                            required
                          />
                        </label>
                        <div className="payment-row">
                          <label>
                            Expiry
                            <input
                              name="expiry"
                              value={bookingDetails.expiry}
                              onChange={handleBookingChange}
                              placeholder="08/28"
                              required
                            />
                          </label>
                          <label>
                            CVC
                            <input
                              name="cvc"
                              inputMode="numeric"
                              value={bookingDetails.cvc}
                              onChange={handleBookingChange}
                              placeholder="314"
                              required
                            />
                          </label>
                        </div>
                        <label>
                          Billing ZIP code
                          <input
                            name="zip"
                            inputMode="numeric"
                            value={bookingDetails.zip}
                            onChange={handleBookingChange}
                            placeholder="94107"
                            required
                          />
                        </label>
                        <button type="submit" className="primary-button">
                          Pay ${totalFee} and confirm
                        </button>
                      </form>
                    )}
                  </div>
                )}

                {reservationStep === 'confirmed' && selectedTableData && (
                  <div className="booking-card success-card">
                    <h2>Reservation confirmed</h2>
                    <p>
                      {bookingDetails.name || 'Your'} seat at {selectedTableData.id} is booked for {bookingDetails.slot}.
                      A confirmation can be sent to {bookingDetails.email || 'your inbox'}.
                    </p>
                    <p className="confirmation-meta">
                      Goal: {bookingDetails.goal || 'No goal entered.'} Mode:{' '}
                      {accountabilityModes.find((mode) => mode.id === bookingDetails.mode)?.title}.
                    </p>
                    <button type="button" className="secondary-button" onClick={resetReservation}>
                      Book another table
                    </button>
                  </div>
                )}
              </aside>
            </div>
          </section>
        )}

        {activePage === 'hiring' && (
          <section className="page">
            <div className="page-heading">
              <p className="section-kicker">Hiring</p>
              <h1>We are building a team that is energetic, warm, and student-centered.</h1>
              <p className="lead">
                We are looking for people who can help make Dempsey Cafe both a beautiful hospitality space and a real
                accountability system for students and young adults.
              </p>
            </div>
            <div className="workshop-grid">
              {hiringRoles.map((role) => (
                <article key={role.title} className="menu-card">
                  <p className="panel-kicker">{role.pay}</p>
                  <h2>{role.title}</h2>
                  <p>{role.description}</p>
                </article>
              ))}
            </div>
            <div className="split-grid top-gap">
              <article className="menu-card">
                <p className="panel-kicker">What we value</p>
                <h2>Approachable people with strong service energy</h2>
                <p>
                  Accountability staff should be energetic, approachable, and comfortable encouraging customers through
                  their goals. We are especially looking for candidates who understand both hospitality and student needs.
                </p>
              </article>
              <article className="menu-card">
                <p className="panel-kicker">Future expansion</p>
                <h2>Rooms, events, and larger group support</h2>
                <p>
                  As we refine pricing for conference room rentals and full-space use, we expect hiring needs to grow in
                  tutoring, workshops, and event support roles as well.
                </p>
              </article>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
