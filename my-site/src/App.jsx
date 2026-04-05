import { startTransition, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const pages = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'about', label: 'About Us' },
  { id: 'history', label: 'Our Story' },
  { id: 'menu', label: 'Menu' },
  { id: 'reserve', label: 'Reserve' },
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

const timeline = [
  {
    year: '2018',
    title: 'The Idea Took Shape',
    description:
      'What started as a few weekend accountability circles became a vision for a cafe where focused work and calm conversation could live together.',
  },
  {
    year: '2021',
    title: 'A Community Prototype',
    description:
      'We tested themed study nights, tea-and-planning sessions, and table booking experiments to learn how people like to work in shared spaces.',
  },
  {
    year: '2024',
    title: 'The Cafe Identity',
    description:
      'Lavender, greenery, and low-distraction design came together into a brand that feels steady, supportive, and restorative.',
  },
  {
    year: 'Today',
    title: 'Built for Better Habits',
    description:
      'Dempsey Cafe now blends specialty drinks, nourishing food, and structured seating so guests can reserve focus time with intention.',
  },
]

const accountabilityStats = [
  {
    value: '20-25%',
    label: 'of adults are often estimated to struggle with chronic procrastination.',
  },
  {
    value: 'Up to 70%',
    label: 'of college students self-identify as procrastinators in research summaries.',
  },
  {
    value: 'Better follow-through',
    label: 'happens when people have structure, deadlines, and accountability built into the environment.',
  },
]

const menuSections = [
  {
    title: 'Signature Drinks',
    items: [
      { name: 'Lavender Matcha Cloud', price: '$7', note: 'Ceremonial matcha, oat milk, lavender cream' },
      { name: 'Rosemary Honey Latte', price: '$6.50', note: 'Espresso, rosemary syrup, wildflower honey' },
      { name: 'Deep Focus Cold Brew', price: '$5.75', note: 'Cold brew, cardamom foam, cocoa dust' },
      { name: 'Greenhouse Tonic', price: '$6', note: 'Cucumber, mint, lime, sparkling botanical tonic' },
    ],
  },
  {
    title: 'Tea and Reset',
    items: [
      { name: 'Calm Window Tea Pot', price: '$8', note: 'Lavender, chamomile, lemon balm' },
      { name: 'Jasmine Clarity Tea', price: '$5.50', note: 'Fragrant jasmine green tea' },
      { name: 'Golden Pause Latte', price: '$6.25', note: 'Turmeric, ginger, maple, steamed milk' },
      { name: 'Minted Citrus Spritz', price: '$5', note: 'Mint, orange, soda, crushed ice' },
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
    { id: 'A1', type: 'solo', price: 12 },
    { id: 'A2', type: 'solo', price: 12 },
    { id: 'A3', type: 'focus', price: 14 },
    { id: 'A4', type: 'focus', price: 14 },
    { id: 'A5', type: 'occupied', price: 14 },
    { id: 'A6', type: 'duo', price: 20 },
  ],
  [
    { id: 'B1', type: 'solo', price: 12 },
    { id: 'B2', type: 'occupied', price: 12 },
    { id: 'B3', type: 'focus', price: 14 },
    { id: 'B4', type: 'focus', price: 14 },
    { id: 'B5', type: 'duo', price: 20 },
    { id: 'B6', type: 'duo', price: 20 },
  ],
  [
    { id: 'C1', type: 'window', price: 16 },
    { id: 'C2', type: 'window', price: 16 },
    { id: 'C3', type: 'focus', price: 14 },
    { id: 'C4', type: 'occupied', price: 14 },
    { id: 'C5', type: 'duo', price: 20 },
    { id: 'C6', type: 'community', price: 18 },
  ],
]

const tableTypeLabels = {
  solo: 'Solo nook',
  focus: 'Focus desk',
  duo: 'Duo table',
  window: 'Window seat',
  community: 'Community table',
  occupied: 'Unavailable',
}

function App() {
  const [activePage, setActivePage] = useState('welcome')
  const [selectedTable, setSelectedTable] = useState(null)
  const [reservationStep, setReservationStep] = useState('select')
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    slot: '2:00 PM - 4:00 PM',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    zip: '',
  })

  const selectedTableData = reservationRows
    .flat()
    .find((table) => table.id === selectedTable)

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
            <div className="hero-copy">
              <p className="section-kicker">Welcome page</p>
              <h1>The accountability cafe for focused work and softer days.</h1>
              <p className="lead">
                Dempsey Cafe is designed for people who want structure without pressure. Come in for a planning session,
                reserve a table for your next deep-work block, and stay for the drinks that make routines feel grounding.
              </p>
              <div className="hero-actions">
                <button type="button" className="primary-button" onClick={() => navigateTo('reserve')}>
                  Reserve a table
                </button>
                <button type="button" className="secondary-button" onClick={() => navigateTo('menu')}>
                  Explore the menu
                </button>
              </div>
              <div className="hero-stats" aria-label="Cafe highlights">
                <article>
                  <strong>42</strong>
                  <span>purpose-built seats</span>
                </article>
                <article>
                  <strong>5</strong>
                  <span>pages for your full story</span>
                </article>
                <article>
                  <strong>100%</strong>
                  <span>calm, intentional atmosphere</span>
                </article>
              </div>
            </div>

            <div className="hero-visual">
              <div className="focus-card">
                <p>Today&apos;s rhythm</p>
                <h2>Choose a seat. Choose a goal. Let the room hold you to it.</h2>
                <img src={heroImg} alt="Illustration representing a calm cafe atmosphere" />
              </div>
              <div className="mini-panel">
                <span>Best for</span>
                <strong>Students, makers, writers, founders, and anyone rebuilding consistency.</strong>
              </div>
            </div>
          </section>
        )}

        {activePage === 'about' && (
          <section className="page">
            <div className="page-heading">
              <p className="section-kicker">About us</p>
              <h1>We built a cafe that feels like a supportive study partner.</h1>
              <p className="lead">
                Our concept blends specialty coffee, restorative design, and reservation-based seating so every guest can
                work, meet, or reflect with a little more intention.
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
              <p className="section-kicker">Company history</p>
              <h1>Our story started with a simple question: what if productivity felt kind?</h1>
            </div>
            <section className="stats-band">
              {accountabilityStats.map((stat) => (
                <article key={stat.value} className="stat-card">
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </article>
              ))}
            </section>
            <div className="story-note">
              <h2>Why accountability matters here</h2>
              <p>
                Procrastination is rarely about laziness. It usually shows up when people feel overwhelmed, isolated, or
                unsure where to begin. We created Dempsey Cafe to counter that spiral with visible momentum: reserved work
                blocks, other focused people in the room, and a setting that makes starting feel easier.
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

        {activePage === 'menu' && (
          <section className="page">
            <div className="page-heading">
              <p className="section-kicker">Cafe menu</p>
              <h1>Comforting drinks and clean, nourishing food for long focus sessions.</h1>
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
          </section>
        )}

        {activePage === 'reserve' && (
          <section className="page reserve-page">
            <div className="page-heading">
              <p className="section-kicker">Reserve a table</p>
              <h1>Choose your seat like a theatre booking, then pay to lock it in.</h1>
              <p className="lead">
                This mock flow lets guests pick a table type, enter their details, and complete a reservation payment.
              </p>
            </div>

            <div className="reserve-layout">
              <div className="reserve-map-card">
                <div className="screen-banner">Tea bar and check-in counter</div>
                <div className="legend" aria-label="Reservation legend">
                  <span><i className="legend-dot solo"></i>Solo nook</span>
                  <span><i className="legend-dot focus"></i>Focus desk</span>
                  <span><i className="legend-dot duo"></i>Duo table</span>
                  <span><i className="legend-dot occupied"></i>Unavailable</span>
                </div>
                <div className="table-map" role="grid" aria-label="Reservation table map">
                  {reservationRows.map((row, rowIndex) => (
                    <div key={`row-${rowIndex}`} className="table-row" role="row">
                      {row.map((table) => {
                        const isSelected = selectedTable === table.id
                        const className = [
                          'table-seat',
                          `type-${table.type}`,
                          isSelected ? 'selected' : '',
                        ]
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
                    <p>Select any available seat to see pricing, choose a time block, and move into the payment step.</p>
                  </div>
                )}

                {selectedTableData && reservationStep !== 'confirmed' && (
                  <div className="booking-card">
                    <h2>{selectedTableData.id} reserved for focus</h2>
                    <p>
                      {tableTypeLabels[selectedTableData.type]} for your next session. Reservation fees help us hold space
                      and maintain the quiet-work environment.
                    </p>

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

                        {reservationStep === 'details' && (
                          <button type="submit" className="primary-button">
                            Continue to payment
                          </button>
                        )}
                      </form>
                    )}

                    {reservationStep === 'payment' && (
                      <form className="payment-box booking-form" onSubmit={(event) => {
                        event.preventDefault()
                        confirmReservation()
                      }}>
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
                    <button type="button" className="secondary-button" onClick={resetReservation}>
                      Book another table
                    </button>
                  </div>
                )}
              </aside>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
