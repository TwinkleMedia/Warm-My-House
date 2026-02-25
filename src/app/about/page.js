'use client';

import Cta from '@/components/Cta'
import Nav from '@/components/Nav'
import React from 'react'
import { motion } from 'framer-motion';
import { Award, Clock, ShieldCheck, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from "react";

/* ─── DATA ────────────────────────────────────────── */
const milestones = [
    {
        year: "2010", title: "The Beginning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        side: "left", tag: "Founded",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16 }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
    },
    {
        year: "2014", title: "First Milestone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        side: "right", tag: "Growth",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16 }}><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a6 6 0 0 1 12 0v2" /></svg>,
    },
    {
        year: "2017", title: "Major Expansion",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        side: "left", tag: "Expansion",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16 }}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    },
    {
        year: "2020", title: "Global Reach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        side: "right", tag: "Milestone",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16 }}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
    },
    {
        year: "2024", title: "The Future",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        side: "left", tag: "Future",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16 }}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    },
];

const whyCards = [
    { icon: <ShieldCheck className="w-7 h-7" />, title: "Certified &\nExperienced Engineer", desc: "Gas Safe registered with 15+ years of hands-on expertise across residential and commercial properties.", badge: "Gas Safe Registered" },
    { icon: <Award className="w-7 h-7" />, title: "Top Quality\nService", desc: "We use only premium parts and materials, backed by our full satisfaction guarantee on every job.", badge: "Satisfaction Guaranteed" },
    { icon: <Wrench className="w-7 h-7" />, title: "Comprehensive\nSolutions", desc: "From boiler installs to full central heating — one trusted team for all your heating & plumbing needs.", badge: "All-in-One Service" },
    { icon: <Clock className="w-7 h-7" />, title: "Fast &\nReliable", desc: "Same-day emergency call-outs available. We respect your time and always arrive when we say we will.", badge: "Same Day Response" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

/* ─── SECTION LABEL ───────────────────────────────── */
function SectionLabel({ text }) {
    return (
        <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-7" style={{ background: "#EF4423" }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#EF4423" }}>{text}</span>
            <div className="h-px w-7" style={{ background: "#EF4423" }} />
        </div>
    );
}

/* ─── STORY CARD ──────────────────────────────────── */
function StoryCard({ item, hovered }) {
    return (
        <div className="relative overflow-hidden rounded-2xl p-5 h-full"
            style={{
                background: hovered ? "linear-gradient(135deg,#EF4423,#a33a00)" : "white",
                boxShadow: hovered ? "0 24px 56px -10px rgba(232,100,10,0.45), 0 0 0 1px rgba(232,100,10,0.1)" : "0 4px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)",
                transform: hovered ? "scale(1.03) translateY(-4px)" : "scale(1) translateY(0)",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}>
            <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
                style={{ background: hovered ? "rgba(255,255,255,0.07)" : "rgba(232,100,10,0.05)", transition: "background 0.4s" }} />

            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: hovered ? "rgba(255,255,255,0.18)" : "rgba(232,100,10,0.1)", color: hovered ? "white" : "#EF4423", border: hovered ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgba(232,100,10,0.2)", transition: "all 0.4s" }}>
                    {item.year}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md"
                    style={{ background: hovered ? "rgba(255,255,255,0.12)" : "#FFF4EC", color: hovered ? "rgba(255,255,255,0.7)" : "#b05010", transition: "all 0.4s" }}>
                    {item.tag}
                </span>
            </div>

            <div className="w-8 h-0.5 rounded-full mb-3"
                style={{ background: hovered ? "rgba(255,255,255,0.45)" : "#EF4423", transition: "background 0.4s" }} />

            <h3 className="font-bold text-base mb-2 leading-snug"
                style={{ color: hovered ? "white" : "#1a0a00", fontFamily: "'Georgia',serif", transition: "color 0.4s" }}>
                {item.title}
            </h3>
            <p className="text-sm leading-relaxed mb-4"
                style={{ color: hovered ? "rgba(255,255,255,0.78)" : "#7a6a60", transition: "color 0.4s" }}>
                {item.description}
            </p>
            <div className="flex items-center gap-1 text-xs font-semibold"
                style={{ color: hovered ? "rgba(255,255,255,0.75)" : "#EF4423", transition: "color 0.4s" }}>
                <span>Learn more</span>
                <svg style={{ width: 12, height: 12, transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.3s" }}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
}

/* ─── TIMELINE DOT (reusable) ─────────────────────── */
function TimelineDot({ visible, index, icon, size }) {
    const pad = size === 48 ? 6 : 5;
    return (
        <div className="relative flex items-center justify-center flex-shrink-0"
            style={{ width: size, height: size }}>
            <div className="absolute inset-0 rounded-full"
                style={{ background: "rgba(239,68,35,0.12)", transform: visible ? "scale(1)" : "scale(0)", transition: `transform 0.5s ease ${index * 100 + 220}ms` }} />
            <div className="absolute rounded-full flex items-center justify-center"
                style={{ inset: pad, background: visible ? "linear-gradient(135deg,#EF4423,#c04a00)" : "white", border: "2px solid #EF4423", boxShadow: visible ? "0 4px 16px rgba(239,68,35,0.45)" : "none", color: "white", transition: `background 0.5s ease ${index * 100 + 170}ms, box-shadow 0.5s ease ${index * 100 + 170}ms` }}>
                <div style={{ opacity: visible ? 1 : 0, transition: `opacity 0.4s ease ${index * 100 + 360}ms` }}>{icon}</div>
            </div>
        </div>
    );
}

/* ─── TIMELINE ITEM — FULLY RESPONSIVE ───────────── */
function TimelineItem({ item, index }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    const isLeft = item.side === "left";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref}>

            {/* ══════ MOBILE layout ══════
                Left rail line sits at x=20px (left-5).
                Dot (40px wide) is centered on that line.
                Card fills the rest with pl-4 gap.
            ══════════════════════════════ */}
            <div className="flex md:hidden items-start gap-4 mb-8 w-full"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(28px)",
                    transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
                }}>
                {/* dot — its center aligns with the left-5 rail */}
                <div className="flex-shrink-0" style={{ paddingTop: 2 }}>
                    <TimelineDot visible={visible} index={index} icon={item.icon} size={40} />
                </div>
                {/* card */}
                <div className="flex-1 min-w-0"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <StoryCard item={item} hovered={hovered} />
                </div>
            </div>

            {/* ══════ DESKTOP layout ══════
                Alternating left / right with center dot.
            ══════════════════════════════ */}
            <div className="hidden md:flex items-center w-full mb-10">

                {/* LEFT slot */}
                <div className="w-5/12 flex justify-end pr-8">
                    {isLeft ? (
                        <div className="w-full max-w-xs"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-40px)", transition: `opacity 0.65s ease ${index * 100}ms, transform 0.65s ease ${index * 100}ms` }}>
                            <StoryCard item={item} hovered={hovered} />
                        </div>
                    ) : (
                        <div className="h-px w-3/4 self-center"
                            style={{ background: "linear-gradient(to left,rgba(239,68,35,0.2),transparent)", opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${index * 100 + 300}ms` }} />
                    )}
                </div>

                {/* CENTER dot */}
                <div className="w-2/12 flex justify-center z-10 flex-shrink-0">
                    <TimelineDot visible={visible} index={index} icon={item.icon} size={48} />
                </div>

                {/* RIGHT slot */}
                <div className="w-5/12 flex justify-start pl-8">
                    {!isLeft ? (
                        <div className="w-full max-w-xs"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(40px)", transition: `opacity 0.65s ease ${index * 100}ms, transform 0.65s ease ${index * 100}ms` }}>
                            <StoryCard item={item} hovered={hovered} />
                        </div>
                    ) : (
                        <div className="h-px w-3/4 self-center"
                            style={{ background: "linear-gradient(to right,rgba(239,68,35,0.2),transparent)", opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${index * 100 + 300}ms` }} />
                    )}
                </div>

            </div>
        </div>
    );
}

/* ─── WHY CARD ────────────────────────────────────── */
function WhyCard({ card, index }) {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div variants={cardVariants}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            className="relative overflow-hidden rounded-2xl p-6 flex flex-col cursor-default"
            style={{ background: hovered ? "linear-gradient(135deg,#EF4423,#a33a00)" : "white", boxShadow: hovered ? "0 24px 56px -10px rgba(232,100,10,0.45)" : "0 4px 24px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.05)", transform: hovered ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)", transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: hovered ? "rgba(255,255,255,0.25)" : "linear-gradient(90deg,#EF4423,transparent)" }} />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full pointer-events-none" style={{ background: hovered ? "rgba(255,255,255,0.07)" : "rgba(232,100,10,0.05)", transition: "background 0.4s" }} />
            <div className="absolute -top-2 -right-1 text-7xl font-black select-none leading-none" style={{ color: hovered ? "rgba(255,255,255,0.06)" : "rgba(232,100,10,0.06)", fontFamily: "'Georgia',serif" }}>0{index + 1}</div>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: hovered ? "rgba(255,255,255,0.15)" : "rgba(232,100,10,0.09)", color: hovered ? "white" : "#EF4423", transition: "all 0.4s" }}>{card.icon}</div>
            <div className="w-8 h-0.5 rounded-full mb-3" style={{ background: hovered ? "rgba(255,255,255,0.4)" : "#EF4423", transition: "background 0.4s" }} />
            <h3 className="font-bold text-base leading-snug mb-2 whitespace-pre-line" style={{ fontFamily: "'Georgia',serif", color: hovered ? "white" : "#1a0a00", transition: "color 0.4s" }}>{card.title}</h3>
            <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: hovered ? "rgba(255,255,255,0.78)" : "#7a6a60", transition: "color 0.4s" }}>{card.desc}</p>
            <span className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: hovered ? "rgba(255,255,255,0.15)" : "rgba(232,100,10,0.09)", color: hovered ? "white" : "#EF4423", border: hovered ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(232,100,10,0.2)", transition: "all 0.4s" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: hovered ? "white" : "#EF4423" }} />
                {card.badge}
            </span>
        </motion.div>
    );
}

/* ─── MV CARD ─────────────────────────────────────── */
function MvCard({ title, text }) {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div variants={cardVariants}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            className="relative overflow-hidden rounded-2xl p-8 cursor-default"
            style={{ background: hovered ? "linear-gradient(135deg,#EF4423,#a33a00)" : "rgba(255,255,255,0.04)", border: `1px solid ${hovered ? "transparent" : "rgba(232,100,10,0.2)"}`, boxShadow: hovered ? "0 24px 56px rgba(232,100,10,0.35)" : "0 4px 24px rgba(0,0,0,0.2)", transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)", transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full pointer-events-none" style={{ background: hovered ? "rgba(255,255,255,0.06)" : "rgba(232,100,10,0.06)", transition: "background 0.4s" }} />
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: hovered ? "rgba(255,255,255,0.15)" : "rgba(232,100,10,0.12)", transition: "background 0.4s" }}>
                {title === "Our Mission"
                    ? <svg viewBox="0 0 24 24" fill="none" stroke={hovered ? "white" : "#EF4423"} strokeWidth="1.8" style={{ width: 22, height: 22 }}><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                    : <svg viewBox="0 0 24 24" fill="none" stroke={hovered ? "white" : "#EF4423"} strokeWidth="1.8" style={{ width: 22, height: 22 }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>}
            </div>
            <div className="w-8 h-0.5 rounded-full mb-4" style={{ background: hovered ? "rgba(255,255,255,0.4)" : "#EF4423", transition: "background 0.4s" }} />
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Georgia',serif", color: hovered ? "white" : "#EF4423", transition: "color 0.4s" }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: hovered ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.55)", transition: "color 0.4s" }}>{text}</p>
        </motion.div>
    );
}

/* ─── PAGE ────────────────────────────────────────── */
export default function About() {
    const timelineRef = useRef(null);
    const titleRef = useRef(null);
    const [fillHeight, setFillHeight] = useState(0);
    const [titleVisible, setTitleVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;
            const rect = timelineRef.current.getBoundingClientRect();
            const total = timelineRef.current.offsetHeight;
            const scrolled = window.innerHeight * 0.55 - rect.top;
            setFillHeight(Math.min(Math.max((scrolled / total) * 100, 0), 100));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setTitleVisible(true); },
            { threshold: 0.3 }
        );
        if (titleRef.current) observer.observe(titleRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Nav />

            {/* BREADCRUMB */}
            <div className="w-full bg-gradient-to-r from-[#FBAA18] to-[#EF4423] pt-20">
                <div className="max-w-7xl mx-auto px-4 py-6 flex items-center gap-2 text-sm text-white">
                    <p>Home</p><span>/</span><p>About</p>
                </div>
            </div>

            {/* HERO */}
            <section className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(232,100,10,0.07) 0%, transparent 70%)" }} />
                <div className="flex-1 space-y-6 relative z-10">
                    <SectionLabel text="About Us" />
                    <h2 className="font-bold leading-tight" style={{ fontFamily: "'Georgia',serif" }}>
                        <span className="block text-3xl md:text-5xl font-extrabold" style={{ color: "#FBAA18" }}>Building Excellence Across</span>
                        <span className="block text-3xl md:text-5xl font-extrabold" style={{ color: "#EF4423" }}>West Birmingham</span>
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                        Lorem ipsum dolor sit amet consectetur. Vitae sodales donec cursus tempus ullamcorper non in. Tellus dignissim donec fusce ornare volutpat id. Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <ul className="space-y-3">
                        {['Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#EF4423" }} />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <a href="#" className="px-7 py-3 rounded-lg text-sm font-semibold text-white"
                            style={{ background: "linear-gradient(135deg,#EF4423,#FBAA18)", boxShadow: "0 8px 24px rgba(240,159,9,0.35)" }}>
                            Get a Quote
                        </a>
                        <a href="#" className="px-7 py-3 rounded-lg text-sm font-semibold border-2"
                            style={{ borderColor: "#EF4423", color: "#EF4423" }}>
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center md:justify-end relative">
                    <div className="relative">
                        <img src="/assets/plumber.png" alt="Plumber" className="w-full max-w-sm object-contain drop-shadow-xl relative z-10" />

                        <style>{`
                            @keyframes badgeFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
                            @keyframes pulseRing  { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(2.2);opacity:0} }
                            @keyframes shimmer    { 0%{background-position:-200% center} 100%{background-position:200% center} }
                            @keyframes spin       { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                            .badge-float  { animation: badgeFloat 3s ease-in-out infinite; }
                            .pulse-ring-1 { animation: pulseRing 2s ease-out infinite; }
                            .pulse-ring-2 { animation: pulseRing 2s ease-out infinite .6s; }
                            .pulse-ring-3 { animation: pulseRing 2s ease-out infinite 1.2s; }
                            .shimmer-text {
                                background: linear-gradient(90deg,#EF4423 0%,#ffcc66 40%,#EF4423 60%,#c04a00 100%);
                                background-size: 200% auto;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                animation: shimmer 2.5s linear infinite;
                            }
                        `}</style>

                        <div className="absolute bottom-6 left-0 z-20 badge-float">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="absolute w-16 h-16 rounded-full pulse-ring-1" style={{ background: "rgba(232,100,10,0.25)", left: 8, top: 8 }} />
                                <div className="absolute w-16 h-16 rounded-full pulse-ring-2" style={{ background: "rgba(232,100,10,0.18)", left: 8, top: 8 }} />
                                <div className="absolute w-16 h-16 rounded-full pulse-ring-3" style={{ background: "rgba(232,100,10,0.12)", left: 8, top: 8 }} />
                            </div>
                            <div className="relative flex items-center gap-3 bg-white rounded-2xl px-4 py-3"
                                style={{ boxShadow: "0 8px 32px rgba(232,100,10,0.25), 0 2px 8px rgba(0,0,0,0.1)" }}>
                                <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
                                    <svg className="absolute inset-0 w-full h-full" style={{ animation: "spin 4s linear infinite" }} viewBox="0 0 44 44">
                                        <circle cx="22" cy="22" r="20" fill="none" stroke="#EF4423" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
                                    </svg>
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#EF4423,#c04a00)" }}>
                                        <ShieldCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xl font-black shimmer-text leading-none" style={{ fontFamily: "'Georgia',serif" }}>15+</div>
                                    <div className="text-xs font-semibold mt-0.5" style={{ color: "#9a8a80" }}>Years Experience</div>
                                </div>
                                <div className="relative ml-1 flex-shrink-0">
                                    <div className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
                                    <div className="absolute inset-0 w-2 h-2 rounded-full" style={{ background: "#22c55e", animation: "pulseRing 1.5s ease-out infinite" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION / VISION */}
            <section className="relative w-full py-24 overflow-hidden bg-gradient-to-r from-black via-zinc-900 to-black">
                <div className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(rgba(232,100,10,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
                        <SectionLabel text="Our Purpose" />
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Georgia',serif", color: "white" }}>
                            What Drives{" "}
                            <span style={{ background: "linear-gradient(135deg,#EF4423,#FBAA18)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Us Forward</span>
                        </h2>
                    </motion.div>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <MvCard title="Our Mission" text="To provide dependable, compliant, and high-quality boiler, gas, plumbing, and central heating services through skilled engineering, rigorous safety standards, and responsive customer support. We are dedicated to delivering efficient solutions that ensure operational reliability, regulatory compliance, and long-term value for our residential and commercial clients." />
                        <MvCard title="Our Vision" text="To be a leading and trusted provider of heating, gas, and plumbing services, distinguished by technical excellence, uncompromising safety practices, and a commitment to continuous improvement. We aspire to build lasting client relationships while setting industry benchmarks for quality, integrity, and service performance." />
                    </motion.div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="relative w-full py-24 overflow-hidden" style={{ background: "#FAFAF8" }}>
                <div className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(232,100,10,0.06) 0%,transparent 70%)" }} />
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(232,100,10,0.05) 0%,transparent 70%)" }} />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
                        <SectionLabel text="Our Promise" />
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
                            <span className="text-[#ef4423]">WHY CHOOSE </span>
                            <span className="text-[#FBAA18]">WARM MY HOUSE?</span>
                        </h2>
                        <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#9a8a80" }}>We combine technical excellence with genuine care to keep your home safe and comfortable.</p>
                    </motion.div>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyCards.map((card, i) => <WhyCard key={i} card={card} index={i} />)}
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-14 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-black via-zinc-900 to-black"
                        style={{ boxShadow: "0 20px 60px rgba(26,10,0,0.2)" }}>
                        {[["15+", "Years Experience"], ["2,000+", "Jobs Completed"], ["24/7", "Emergency Cover"], ["100%", "Gas Safe Certified"]].map(([n, l], i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold" style={{ background: "linear-gradient(135deg,#EF4423,#FBAA18)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "'Georgia',serif" }}>{n}</div>
                                <div className="text-xs mt-1 font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>{l}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="relative py-20 overflow-hidden" style={{ background: "white" }}>
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div style={{ position: "absolute", top: "5%", left: "0%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,100,10,0.07) 0%, transparent 70%)" }} />
                    <div style={{ position: "absolute", bottom: "5%", right: "0%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,100,10,0.05) 0%, transparent 70%)" }} />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    {/* Heading */}
                    <div ref={titleRef} className="text-center mb-16"
                        style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
                        <SectionLabel text="Who We Are" />
                        <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "#1a0a00", lineHeight: 1.2, fontFamily: "'Georgia',serif" }}>
                            Our{" "}
                            <span style={{ background: "linear-gradient(135deg,#EF4423,#D4500A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Story</span>
                        </h2>
                        <p style={{ marginTop: 12, fontSize: 14, color: "#9a8a80", maxWidth: 340, margin: "12px auto 0" }}>
                            A journey built on trust, expertise, and a passion for keeping homes warm and safe across West Birmingham.
                        </p>
                    </div>

                    {/* Timeline wrapper */}
                    <div ref={timelineRef} className="relative">

                        {/* ── DESKTOP: centre line ── */}
                        <div className="hidden md:block absolute top-0 bottom-0"
                            style={{ left: "50%", width: 2, transform: "translateX(-50%)", background: "#e8e0db", borderRadius: 9999 }} />
                        <div className="hidden md:block absolute top-0"
                            style={{ left: "50%", width: 2, height: `${fillHeight}%`, transform: "translateX(-50%)", background: "linear-gradient(to bottom,#EF4423,#FBAA18)", boxShadow: "0 0 14px rgba(239,68,35,0.5)", borderRadius: 9999, transition: "height 0.08s linear" }} />

                        {/* ── MOBILE: left rail at x=20 (left-5 = 20px)
                             The 40px dot (TimelineDot size=40) has its centre at 20px
                             because it starts at x=0 and is 40px wide → centre = 20px ✓  ── */}
                        <div className="block md:hidden absolute top-0 bottom-0"
                            style={{ left: 20, width: 2, background: "#e8e0db", borderRadius: 9999 }} />
                        <div className="block md:hidden absolute top-0"
                            style={{ left: 20, width: 2, height: `${fillHeight}%`, background: "linear-gradient(to bottom,#EF4423,#FBAA18)", boxShadow: "0 0 14px rgba(239,68,35,0.5)", borderRadius: 9999, transition: "height 0.08s linear" }} />

                        {milestones.map((item, i) => <TimelineItem key={i} item={item} index={i} />)}
                    </div>
                </div>
            </section>

            <Cta />
        </>
    );
}