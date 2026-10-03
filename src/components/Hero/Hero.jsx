import React from "react";
import {
  Award,
  ArrowRight,
  CreditCard,
  Laptop,
  Receipt,
  ShieldCheck,
  Clock,
  Star,
  Truck,
  Wrench,
} from "lucide-react";

import bgImage from "../../assets/images/blank1.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  // Feature tag: the first three classes are the ORIGINAL desktop classes.
  // Everything starting with max-sm: only exists on phones (under 640px),
  // so desktop cannot be affected by it.
  const tagClass =
    "flex items-center gap-1.5 max-sm:shrink-0 max-sm:whitespace-nowrap max-sm:rounded-full max-sm:border max-sm:border-white/15 max-sm:bg-black/30 max-sm:px-3 max-sm:py-1.5";

  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}

      {/* MOBILE: shorter hero (min-h-[300px]); sm and up keep the original sizes */}
      <section className="relative h-auto min-h-[300px] sm:min-h-[500px] lg:h-[520px] flex flex-col justify-between bg-[#060b11]">

        {/* Background photo positioned to frame laptop in middle */}
        <img
          src={bgImage}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover object-center lg:object-[35%_center]"
        />

        {/* Gradient overlays tuned for high visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 flex flex-col justify-center">

          {/* ================= HERO CONTENT ================= */}

          <div className="grid items-center gap-8 lg:grid-cols-12 my-auto max-sm:grid-cols-1">

            {/* LEFT COLUMN: Text Copy */}
            <div className="lg:col-span-7 z-10 max-w-xl max-sm:min-w-0">

              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-300/90 mb-2 sm:mb-3">
                YOUR TRUSTED PARTNER FOR
              </p>

              <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold leading-[1.2] text-white tracking-normal">
                Laptops. Rentals. Repairs.
                <span className="mt-1 block text-emerald-400 font-extrabold">
                  All Under One Roof.
                </span>
              </h1>

              {/* Description: shown on all sizes. max-sm: only tightens the top margin on phones */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-300 max-w-lg max-sm:mt-3">
                Buy new & certified refurbished laptops, rent for short or long term, or get expert repairs with warranty.
              </p>

              {/* Action Buttons */}
              <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 max-sm:gap-2">
                <button
                  onClick={() => navigate("/shop")}
                  className="flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 max-sm:px-3 text-xs font-bold text-black transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98]"
                >
                  Shop Laptops
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => navigate("/rental")}
                  className="flex h-10 items-center justify-center rounded-xl border border-white/25 bg-black/20 px-5 max-sm:px-3 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-[0.98]"
                >
                  Rent Now
                </button>

                {/* Shown on all sizes (was hidden on mobile before) */}
                <button
                  onClick={() => navigate("/repair")}
                  className="flex h-10 items-center justify-center rounded-xl bg-white px-5 max-sm:px-3 text-xs font-semibold text-gray-900 transition-all hover:bg-gray-100 active:scale-[0.98]"
                >
                  Book a Repair
                </button>
              </div>

              {/* Feature Tags
                  MOBILE: one swipeable row of chips.
                  sm and up: the original wrapping row of plain tags. */}
              <div
                className="flex mt-7 flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium text-gray-300/90 max-sm:mt-4 max-sm:gap-x-2"
                style={{ scrollbarWidth: "none" }}
              >
                <div className={tagClass}>
                  <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                  100% Genuine Products
                </div>
                <div className={tagClass}>
                  <Award size={15} className="text-emerald-400 shrink-0" />
                  1 Year Warranty
                </div>
                <div className={tagClass}>
                  <CreditCard size={15} className="text-emerald-400 shrink-0" />
                  EMI Available
                </div>
                <div className={tagClass}>
                  <Receipt size={15} className="text-emerald-400 shrink-0" />
                  GST Invoice
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS BAR =================
          MOBILE: normal flow, swipeable horizontal strip.
          sm and up: original overlapping white bar. */}
      <section className="relative z-30 mt-3 mb-2 sm:mt-0 sm:mb-0 sm:-translate-y-1/2 sm:-mb-12">
        <div className="mx-auto max-w-[1550px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white shadow-md sm:shadow-2xl overflow-hidden">
            <div
              className="flex overflow-x-auto sm:grid sm:overflow-visible sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
              style={{ scrollbarWidth: "none" }}
            >

              {/* Years */}
              <div className="flex shrink-0 min-w-[170px] sm:min-w-0 items-center gap-3 border-r border-gray-100 sm:border-r-0 sm:border-b py-3 px-4 sm:py-5 sm:px-5 lg:border-b-0 lg:border-r">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-xl font-bold text-gray-900 leading-tight">15+</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Years in Business</p>
                </div>
              </div>

              {/* Laptops Sold */}
              <div className="flex shrink-0 min-w-[170px] sm:min-w-0 items-center gap-3 border-r border-gray-100 sm:border-r-0 sm:border-b py-3 px-4 sm:py-5 sm:px-5 lg:border-b-0 lg:border-r">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 shrink-0">
                  <Laptop size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-xl font-bold text-gray-900 leading-tight">50,000+</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Laptops Sold</p>
                </div>
              </div>

              {/* Repairs */}
              <div className="flex shrink-0 min-w-[170px] sm:min-w-0 items-center gap-3 border-r border-gray-100 sm:border-r-0 sm:border-b py-3 px-4 sm:py-5 sm:px-5 md:border-b-0 lg:border-r">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 shrink-0">
                  <Wrench size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-xl font-bold text-gray-900 leading-tight">18,000+</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Repairs Completed</p>
                </div>
              </div>

              {/* Rentals */}
              <div className="flex shrink-0 min-w-[170px] sm:min-w-0 items-center gap-3 border-r border-gray-100 sm:border-r-0 sm:border-b py-3 px-4 sm:py-5 sm:px-5 lg:border-b-0 lg:border-r">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-xl font-bold text-gray-900 leading-tight">3,000+</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Laptops on Rent</p>
                </div>
              </div>

              {/* Ratings */}
              <div className="flex shrink-0 min-w-[170px] sm:min-w-0 items-center gap-3 border-r border-gray-100 sm:border-r-0 sm:border-b py-3 px-4 sm:py-5 sm:px-5 lg:border-b-0 lg:border-r">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 shrink-0">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-xl font-bold text-gray-900 leading-tight">4.9/5</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Google Ratings</p>
                </div>
              </div>

              {/* Pickup */}
              <div className="flex shrink-0 min-w-[170px] sm:min-w-0 items-center gap-3 py-3 px-4 sm:py-5 sm:px-5">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 shrink-0">
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">Pickup & Drop</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Available Across City</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
