"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

type Project = {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    live: string;
    client: string;
    server: string;
    tech: string[];
    featured?: boolean;
    image: { src: string; alt: string };
};

const projects: Project[] = [
    {
        title: "Digital Life Lessons",
        subtitle: "Full-Stack MERN Application",
        description:
            "A feature-rich platform for creating, saving, and sharing life lessons with authentication, premium content, and dashboards.",
        features: [
            "JWT-secured APIs + Email/Google Auth",
            "Free vs Premium content + Stripe lifetime payment",
            "Like/Save/Comment/Report + Search/Filter/Sort/Pagination",
            "User & Admin dashboards for analytics & moderation",
        ],
        live: "https://digital-life-lessons-b2d6b.web.app",
        client: "https://github.com/mhmasum1/digital-life-lessons",
        server: "https://github.com/mhmasum1/digital-life-lessons-server",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Tailwind"],
        featured: true,
        image: {
            src: "/projects/digital-life-lessons.png",
            alt: "Digital Life Lessons homepage screenshot",
        },
    },
    {
        title: "EcoTrack — Sustainable Living Community",
        subtitle: "Full-Stack MERN + Firebase Auth",
        description:
            "A sustainability community platform where users join eco-challenges, track activities, and explore green tips/events with progress-based features.",
        features: [
            "Firebase Auth (Email/Password + Google)",
            "Public + Protected routes with dashboard layout",
            "Challenges: browse, details, join, and progress tracking",
            "Tips & Events fetched from MongoDB via API",
            "Filters, search & pagination",
            "Role-based access (User/Admin)",
        ],
        live: "https://ecotrack-sustainable.web.app",
        client: "https://github.com/mhmasum1/ecotrack-client",
        server: "https://github.com/mhmasum1/ecotrack-server",
        tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind"],
        featured: true,
        image: {
            src: "/projects/ecotrack.png",
            alt: "EcoTrack homepage screenshot",
        },
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const card = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
};

function LinkButton({
    href,
    label,
    variant = "outline",
}: {
    href: string;
    label: string;
    variant?: "solid" | "outline";
}) {
    const base =
        "px-4 py-2 rounded-xl text-sm font-medium active:scale-[0.98] transition";
    const solid = "bg-white text-black hover:bg-zinc-200";
    const outline = "border border-zinc-700 hover:bg-zinc-900 text-zinc-100";
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`${base} ${variant === "solid" ? solid : outline}`}
        >
            {label}
        </a>
    );
}

function IconButton({
    label,
    onClick,
    children,
}: {
    label: string;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-950/70
                 px-3 py-2 text-zinc-100 hover:bg-zinc-900 active:scale-[0.98] transition"
        >
            {children}
        </button>
    );
}

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const images = useMemo(
        () => projects.map((p) => ({ src: p.image.src, alt: p.image.alt, title: p.title })),
        []
    );

    const open = (i: number) => setActiveIndex(i);
    const close = () => setActiveIndex(null);

    const prev = () => {
        setActiveIndex((i) => {
            if (i === null) return null;
            return (i - 1 + images.length) % images.length;
        });
    };

    const next = () => {
        setActiveIndex((i) => {
            if (i === null) return null;
            return (i + 1) % images.length;
        });
    };

    // ESC + arrow keys
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (activeIndex === null) return;
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [activeIndex, images.length]);

    // Disable body scroll when modal open
    useEffect(() => {
        if (activeIndex === null) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [activeIndex]);

    return (
        <section id="projects" className="py-16">
            <div className="max-w-5xl mx-auto">
                <Reveal>
                    <h2 className="text-3xl font-semibold">🚀 Projects</h2>
                    <p className="mt-2 text-zinc-300">
                        Featured projects I’ve built recently. (Click screenshot to preview)
                    </p>
                </Reveal>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8 grid gap-6"
                >
                    {projects.map((p, idx) => (
                        <motion.article
                            key={p.title}
                            variants={card}
                            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden
                         hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900/60
                         hover:shadow-[0_0_60px_-25px_rgba(99,102,241,0.28)]
                         transition"
                        >
                            {/* Screenshot */}
                            <button
                                type="button"
                                onClick={() => open(idx)}
                                className="block w-full text-left group"
                                aria-label={`Preview ${p.title} screenshot`}
                            >
                                <div className="relative aspect-[16/7] w-full overflow-hidden bg-zinc-950">
                                    <Image
                                        src={p.image.src}
                                        alt={p.image.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                        sizes="(max-width: 768px) 100vw, 800px"
                                        priority={p.featured}
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                                    <div className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-200">
                                        🔍 Click to preview
                                    </div>
                                </div>
                            </button>

                            <div className="p-6">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div>
                                        {p.featured && (
                                            <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
                                                🚀 Featured Project
                                            </p>
                                        )}
                                        <h3 className="text-xl font-semibold">{p.title}</h3>
                                        <p className="text-zinc-300 text-sm">{p.subtitle}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <LinkButton href={p.live} label="Live" variant="solid" />
                                        <LinkButton href={p.client} label="Client" />
                                        <LinkButton href={p.server} label="Server" />
                                    </div>
                                </div>

                                <p className="mt-4 text-zinc-300 leading-relaxed">{p.description}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-zinc-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <p className="font-medium text-zinc-100">✨ Highlights</p>
                                    <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-zinc-300">
                                        {p.features.map((f) => (
                                            <li key={f} className="flex gap-2">
                                                <span>✅</span>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6 grid gap-2 text-sm">
                                    <a href={p.live} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition">
                                        🔗 Live Demo: <span className="underline underline-offset-4">{p.live}</span>
                                    </a>
                                    <a href={p.client} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition">
                                        💻 Client Repo: <span className="underline underline-offset-4">{p.client}</span>
                                    </a>
                                    <a href={p.server} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition">
                                        🗄️ Server Repo: <span className="underline underline-offset-4">{p.server}</span>
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* backdrop */}
                        <button
                            type="button"
                            onClick={close}
                            aria-label="Close preview"
                            className="absolute inset-0 bg-black/70"
                        />

                        {/* modal */}
                        <motion.div
                            initial={{ scale: 0.98, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.98, opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950"
                        >
                            <div className="flex items-center justify-between gap-2 border-b border-zinc-800 px-4 py-3">
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-medium text-zinc-100">
                                        {images[activeIndex].title}
                                    </p>
                                    <p className="text-xs text-zinc-400">
                                        Use ← → keys, ESC to close
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <IconButton label="Previous" onClick={prev}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </IconButton>
                                    <IconButton label="Next" onClick={next}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </IconButton>
                                    <IconButton label="Close" onClick={close}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </IconButton>
                                </div>
                            </div>

                            <div className="relative aspect-[16/8] w-full bg-zinc-950">
                                <Image
                                    src={images[activeIndex].src}
                                    alt={images[activeIndex].alt}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
