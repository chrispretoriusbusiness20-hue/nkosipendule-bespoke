import './index.css'

export default function App() {
    return (
          <div className="app">
                <header className="hero">
                        <h1>Nkosipendule Bespoke</h1>h1>
                        <p className="tagline">Tailor-made Suits & Custom Design</p>p>
                        <p className="subtitle">Crafting unique bespoke clothing blending precision, personalisation and cultural expression.</p>p>
                        <a href="#consultation" className="cta">Book a Consultation</a>a>
                </header>header>
                <section className="services">
                        <h2>Our Services</h2>h2>
                        <div className="grid">
                                  <div className="card"><h3>Bespoke Suits</h3>h3><p>Fully custom-tailored suits crafted to your exact measurements.</p>p></div>div>
                                  <div className="card"><h3>Custom Design</h3>h3><p>Unique designs blending modern style with cultural heritage.</p>p></div>div>
                                  <div className="card"><h3>Alterations</h3>h3><p>Expert tailoring adjustments for the perfect fit.</p>p></div>div>
                        </div>div>
                </section>section>
                <section className="process">
                        <h2>Our Process</h2>h2>
                        <ol className="timeline">
                                  <li><strong>Consultation</strong>strong> - We discuss your vision and style.</li>li>
                                  <li><strong>Measurement</strong>strong> - Precise measurements for a perfect fit.</li>li>
                                  <li><strong>Crafting</strong>strong> - Skilled tailoring of your garment.</li>li>
                                  <li><strong>Fitting</strong>strong> - Final adjustments to perfection.</li>li>
                        </ol>ol>
                </section>section>
                <section className="testimonials">
                        <h2>What Clients Say</h2>h2>
                        <blockquote>"Exceptional craftsmanship and attention to detail." - A. Mbeki</blockquote>blockquote>
                        <blockquote>"The perfect blend of tradition and modern style." - T. Nkosi</blockquote>blockquote>
                </section>section>
                <section id="consultation" className="consultation">
                        <h2>Book a Consultation</h2>h2>
                        <p>Get in touch to start your bespoke journey.</p>p>
                        <a href="mailto:info@nkosipendule.co.za" className="cta">Contact Us</a>a>
                </section>section>
                <footer>
                        <p>&copy; 2026 Nkosipendule Bespoke. Cape Town, South Africa.</p>p>
                </footer>footer>
          </div>div>
        )
}</div>
