import { useState } from 'react';
import { Icon } from './Icon.jsx';
import { faqs as defaultFaqs, site } from '../data/content.js';

export default function FaqSection({ faqs: customFaqs, title }) {
  const list = customFaqs || defaultFaqs;
  const [open, setOpen] = useState(0);

  return (
    <section className="sec">
      <div className="wrap">
        <div className="faq-grid">
          <div className="faq-head">
            <div className="eyebrow">FAQ</div>
            <h2 className="h2" style={{ marginTop: 8 }}>
              {title || 'Wat klanten vaak vragen.'}
            </h2>
            <p style={{ color: 'var(--ink-2)', marginTop: 12, fontSize: 14 }}>
              Antwoord er niet tussen? Bel <b>{site.phone}</b> — we helpen u graag.
            </p>
          </div>
          <div className="faq-list">
            {list.map((f, i) => (
              <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
                <button type="button" className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span>{f.q}</span>
                  <span className="plus"><Icon.Plus style={{ width: 14, height: 14 }} /></span>
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
