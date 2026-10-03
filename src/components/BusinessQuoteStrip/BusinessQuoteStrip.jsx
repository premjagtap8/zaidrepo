import React from "react";
import { Link } from "react-router-dom";
import { Building2, ChevronRight } from "lucide-react";

import "./BusinessQuoteStrip.css";

// =====================================================
// BUSINESS QUOTE STRIP
//
// Small mobile-only strip shown under the hero.
// Hidden on desktop (see BusinessQuoteStrip.css).
// It is only a link, so it does not touch any logic.
// =====================================================

const BusinessQuoteStrip = () => {
  return (
    <section className="bq-strip" aria-label="Business quote">

      <div className="bq-icon">
        <Building2 size={22} strokeWidth={2} />
      </div>

      <div className="bq-text">
        <p className="bq-title">Business buyer?</p>
        <p className="bq-sub">Bulk orders, custom pricing</p>
      </div>

      <Link to="/corporate" className="bq-btn">
        <span>Request Quote</span>
        <ChevronRight size={16} strokeWidth={2.5} />
      </Link>

    </section>
  );
};

export default BusinessQuoteStrip;
