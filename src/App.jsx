import './index.css'
import React from 'react'

const h = React.createElement

export default function App() {
      return h('div', { className: 'app' },
                   h('header', { className: 'hero' },
                           h('h1', null, 'Nkosipendule Bespoke'),
                           h('p', { className: 'tagline' }, 'Tailor-made Suits & Custom Design'),
                           h('p', { className: 'subtitle' }, 'Crafting unique bespoke clothing blending precision, personalisation and cultural expression.'),
                           h('a', { href: '#consultation', className: 'cta' }, 'Book a Consultation')
                         ),
                   h('section', { className: 'services' },
                           h('h2', null, 'Our Services'),
                           h('div', { className: 'grid' },
                                     h('div', { className: 'card' }, h('h3', null, 'Bespoke Suits'), h('p', null, 'Fully custom-tailored suits crafted to your exact measurements.')),
                                     h('div', { className: 'card' }, h('h3', null, 'Custom Design'), h('p', null, 'Unique designs blending modern style with cultural heritage.')),
                                     h('div', { className: 'card' }, h('h3', null, 'Alterations'), h('p', null, 'Expert tailoring adjustments for the perfect fit.'))
                                   )
                         ),
                   h('section', { className: 'process' },
                           h('h2', null, 'Our Process'),
                           h('ol', { className: 'timeline' },
                                     h('li', null, h('strong', null, 'Consultation'), ' - We discuss your vision and style.'),
                                     h('li', null, h('strong', null, 'Measurement'), ' - Precise measurements for a perfect fit.'),
                                     h('li', null, h('strong', null, 'Crafting'), ' - Skilled tailoring of your garment.'),
                                     h('li', null, h('strong', null, 'Fitting'), ' - Final adjustments to perfection.')
                                   )
                         ),
                   h('section', { className: 'testimonials' },
                           h('h2', null, 'What Clients Say'),
                           h('blockquote', null, 'Exceptional craftsmanship and attention to detail. - A. Mbeki'),
                           h('blockquote', null, 'The perfect blend of tradition and modern style. - T. Nkosi')
                         ),
                   h('section', { id: 'consultation', className: 'consultation' },
                           h('h2', null, 'Book a Consultation'),
                           h('p', null, 'Get in touch to start your bespoke journey.'),
                           h('a', { href: 'mailto:info@nkosipendule.co.za', className: 'cta' }, 'Contact Us')
                         ),
                   h('footer', null, h('p', null, '2026 Nkosipendule Bespoke. Cape Town, South Africa.'))
                 )
}
