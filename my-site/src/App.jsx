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

const accountabilityModes = [
  {
    id: 'low',
    title: 'Low accountability',
    description: 'Check-ins happen at the beginning and end of your session for a gentle structure boost.',
  },
  {
    id: 'mild',
    title: 'Mild accountability',
    description: 'A check-in arrives once every hour so you can reset without breaking your workflow too often.',
  },
  {
    id: 'intense',
    title: 'Intense accountability',
    description: 'A check-in arrives every 30 minutes for focused momentum and stronger follow-through.',
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
    { id: 'A1', type: 'window-natural', price: 20 },
    { id: 'A2', type: 'window-dim', price: 18 },
    { id: 'A3', type: 'booth-natural', price: 19 },
    { id: 'A4', type: 'booth-dim', price: 17 },
    { id: 'A5', type: 'occupied', price: 17 },
    { id: 'A6', type: 'window-booth-natural', price: 22 },
  ],
  [
    { id: 'B1', type: 'window-booth-dim', price: 20 },
    { id: 'B2', type: 'occupied', price: 18 },
    { id: 'B3', type: 'window-natural', price: 20 },
    { id: 'B4', type: 'booth-natural', price: 19 },
    { id: 'B5', type: 'window-dim', price: 18 },
    { id: 'B6', type: 'booth-dim', price: 17 },
  ],
  [
    { id: 'C1', type: 'window-booth-natural', price: 22 },
    { id: 'C2', type: 'window-booth-dim', price: 20 },
    { id: 'C3', type: 'window-natural', price: 20 },
    { id: 'C4', type: 'occupied', price: 18 },
    { id: 'C5', type: 'booth-natural', price: 19 },
    { id: 'C6', type: 'window-dim', price: 18 },
  ],
]

const tableTypeLabels = {
  'window-natural': 'Window seating + natural light',
  'window-dim': 'Window seating + dim light',
  'booth-natural': 'Booth seating + natural light',
  'booth-dim': 'Booth seating + dim light',
  'window-booth-natural': 'Window booth + natural light',
  'window-booth-dim': 'Window booth + dim light',
  occupied: 'Unavailable',
}

const tableTypeDescriptions = {
  'window-natural': 'Bright and airy, best for people who like sunlight and an open seat by the window.',
  'window-dim': 'A window-side spot with softer lighting for calmer, lower-stimulation work sessions.',
  'booth-natural': 'A more tucked-in booth with natural light, great for longer sessions with some privacy.',
  'booth-dim': 'A cozy booth with low lighting for quiet work, reading, or reflective planning.',
  'window-booth-natural': 'The most premium option: booth comfort, window seating, and full natural light.',
  'window-booth-dim': 'Booth comfort by the window with softer lighting for an extra grounded atmosphere.',
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
                  Dempsey Cafe blends soft hospitality with gentle structure. Reserve a table, settle into a beautiful
                  workspace, and let the room make it easier to show up for the work you keep meaning to start.
                </p>
                <div className="hero-actions">
                  <button type="button" className="primary-button" onClick={() => navigateTo('reserve')}>
                    Reserve a table
                  </button>
                  <button type="button" className="secondary-button" onClick={() => navigateTo('about')}>
                    Meet the cafe
                  </button>
                </div>
              </div>

              <aside className="welcome-panel">
                <p className="panel-kicker">How it works</p>
                <h2>Your focus ritual, simplified</h2>
                <div className="welcome-steps">
                  <article>
                    <strong>1. Pick your seat</strong>
                    <p>Choose a quiet nook, focus desk, or shared table that matches the kind of session you need.</p>
                  </article>
                  <article>
                    <strong>2. Reserve your block</strong>
                    <p>Pay to hold the space so your work time feels real, protected, and easier to honor.</p>
                  </article>
                  <article>
                    <strong>3. Arrive and reset</strong>
                    <p>Order something grounding, sit down with intention, and work beside people doing the same.</p>
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
                  <p className="panel-kicker">The vibe</p>
                  <h2>More supportive than a coffee shop, softer than a coworking space.</h2>
                  <p>
                    We designed Dempsey Cafe for students, founders, creatives, and anyone trying to build steadier
                    habits in a room that feels warm instead of high-pressure.
                  </p>
                </div>
                <img src={heroImg} alt="Illustration representing a calm cafe atmosphere" />
              </article>

              <div className="hero-stats" aria-label="Cafe highlights">
                <article>
                  <strong>42</strong>
                  <span>purpose-built seats</span>
                </article>
                <article>
                  <strong>4</strong>
                  <span>simple steps to book and settle in</span>
                </article>
                <article>
                  <strong>Daily</strong>
                  <span>space for deep work, planning, and reset time</span>
                </article>
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
            <div className="menu-note">
              <strong>Unlimited house drinks included</strong>
              <p>Tea, coffee, and hot chocolate are unlimited with your reservation, so guests can settle in without watching the clock between refills.</p>
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
                  <span><i className="legend-dot window-natural"></i>Window + natural light</span>
                  <span><i className="legend-dot window-dim"></i>Window + dim light</span>
                  <span><i className="legend-dot booth-natural"></i>Booth + natural light</span>
                  <span><i className="legend-dot booth-dim"></i>Booth + dim light</span>
                  <span><i className="legend-dot window-booth-natural"></i>Window booth + natural light</span>
                  <span><i className="legend-dot window-booth-dim"></i>Window booth + dim light</span>
                  <span><i className="legend-dot occupied"></i>Unavailable</span>
                </div>
                <div className="seat-guide">
                  {Object.entries(tableTypeLabels)
                    .filter(([type]) => type !== 'occupied')
                    .map(([type, label]) => (
                      <article key={type} className="seat-guide-card">
                        <div className={`seat-swatch type-${type}`}></div>
                        <h3>{label}</h3>
                        <p>{tableTypeDescriptions[type]}</p>
                      </article>
                    ))}
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
                      {tableTypeLabels[selectedTableData.type]} for your next session. {tableTypeDescriptions[selectedTableData.type]}
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
                                <strong>{mode.title}</strong>
                                <span>{mode.description}</span>
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
                    <p className="confirmation-meta">
                      Goal: {bookingDetails.goal || 'No goal entered.'} Mode: {accountabilityModes.find((mode) => mode.id === bookingDetails.mode)?.title}.
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
