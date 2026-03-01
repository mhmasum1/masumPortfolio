"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "../app/data/projects";

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
    children: ReactNode;
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

    // first featured as full width
    const featuredIndex = useMemo(() => {
        const idx = projects.findIndex((p) => p.featured);
        return idx >= 0 ? idx : 0;
    }, []);

    const images = useMemo(
        () =>
            projects.map((p) => ({
                src: p.image.src,
                alt: p.image.alt,
                title: p.title,
            })),
        []
    );

    const open = (i: number) => setActiveIndex(i);
    const close = useCallback(() => setActiveIndex(null), []);

    const prev = useCallback(() => {
        setActiveIndex((i) => {
            if (i === null) return null;
            return (i - 1 + images.length) % images.length;
        });
    }, [images.length]);

    const next = useCallback(() => {
        setActiveIndex((i) => {
            if (i === null) return null;
            return (i + 1) % images.length;
        });
    }, [images.length]);

    // ESC + arrows
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (activeIndex === null) return;
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [activeIndex, close, prev, next]);

    // lock scroll
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
            <div className="max-w-6xl mx-auto px-4">
                <Reveal>
                    <h2 className="text-3xl font-semibold">🚀 Projects</h2>
                    <p className="mt-2 text-zinc-300">
                        Bento showcase. (Click screenshot to preview)
                    </p>
                </Reveal>

                {/* ✅ Grid: featured full width + next row 2 cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8 grid gap-6 grid-cols-1 lg:grid-cols-2"
                >
                    {projects.map((p, idx) => {
                        const isFeaturedTile = idx === featuredIndex;

                        return (
                            <motion.article
                                key={p.slug}
                                variants={card}
                                className={[
                                    "group rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden",
                                    "hover:border-zinc-600 hover:bg-zinc-900/60",
                                    "hover:shadow-[0_0_60px_-25px_rgba(99,102,241,0.28)] transition",
                                    isFeaturedTile ? "lg:col-span-2" : "lg:col-span-1",
                                ].join(" ")}
                            >
                                {/* Screenshot */}
                                <button
                                    type="button"
                                    onClick={() => open(idx)}
                                    className="block w-full text-left"
                                    aria-label={`Preview ${p.title} screenshot`}
                                >
                                    <div
                                        className={[
                                            "relative w-full overflow-hidden bg-zinc-950",
                                            isFeaturedTile ? "aspect-[16/7]" : "aspect-[16/9]",
                                        ].join(" ")}
                                    >
                                        <Image
                                            src={p.image.src}
                                            alt={p.image.alt}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                            sizes="(max-width: 1024px) 100vw, 1100px"
                                            priority={!!p.featured}
                                        />

                                        {/* clean overlay */}
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                                        {/* badges */}
                                        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                                            {p.featured ? (
                                                <span className="rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                                                    ✨ Featured
                                                </span>
                                            ) : null}
                                            <span className="rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                                                🔍 Preview
                                            </span>
                                        </div>

                                        {/* glass bar */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                                            <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur">
                                                <h3 className="text-lg sm:text-2xl font-semibold text-white leading-snug">
                                                    {p.title}
                                                </h3>
                                                <p className="mt-1 text-sm text-zinc-200/90 line-clamp-1">
                                                    {p.subtitle}
                                                </p>

                                                <div className="mt-3 flex flex-wrap gap-2">
                                                    {p.tech
                                                        .slice(0, isFeaturedTile ? 5 : 3)
                                                        .map((t) => (
                                                            <span
                                                                key={t}
                                                                className="px-3 py-1 text-[11px] rounded-full border border-white/10 text-zinc-100 bg-white/5"
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    {p.tech.length > (isFeaturedTile ? 5 : 3) ? (
                                                        <span className="px-3 py-1 text-[11px] rounded-full border border-white/10 text-zinc-100 bg-white/5">
                                                            +{p.tech.length - (isFeaturedTile ? 5 : 3)}
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-zinc-300 text-sm leading-relaxed line-clamp-2">
                                        {p.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {p.live ? (
                                            <LinkButton href={p.live} label="Live" variant="solid" />
                                        ) : null}
                                        {p.client ? <LinkButton href={p.client} label="Client" /> : null}
                                        {p.server ? <LinkButton href={p.server} label="Server" /> : null}
                                        {p.repo ? <LinkButton href={p.repo} label="GitHub" /> : null}

                                        <Link
                                            href={`/projects/${p.slug}`}
                                            className="px-4 py-2 rounded-xl text-sm font-medium border border-zinc-700 hover:bg-zinc-900 text-zinc-100 transition"
                                        >
                                            Details
                                        </Link>
                                    </div>

                                    <div className="mt-5">
                                        <p className="text-sm font-medium text-zinc-100">Highlights</p>
                                        <ul className="mt-2 grid gap-2 text-sm text-zinc-300">
                                            {p.highlights.slice(0, 3).map((h) => (
                                                <li key={h} className="flex gap-2">
                                                    <span>✅</span>
                                                    <span className="line-clamp-1">{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>

            {/* ✅ Lightbox modal ONLY (grid এখানে থাকবে না) */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            type="button"
                            onClick={close}
                            aria-label="Close preview"
                            className="absolute inset-0 bg-black/70"
                        />

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
                                    <p className="text-xs text-zinc-400">Use ← → keys, ESC to close</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <IconButton label="Previous" onClick={prev}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M15 18l-6-6 6-6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </IconButton>
                                    <IconButton label="Next" onClick={next}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M9 6l6 6-6 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </IconButton>
                                    <IconButton label="Close" onClick={close}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M6 6l12 12"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M18 6L6 18"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
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
                                    sizes="(max-width: 1024px) 100vw, 1200px"
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