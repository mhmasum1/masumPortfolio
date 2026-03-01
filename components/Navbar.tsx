"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const links = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Certifications", href: "#certifications", id: "certifications" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },


];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>("");

    const sectionIds = useMemo(() => links.map((l) => l.id), []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 640) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // ScrollSpy by scroll position (stable)
    useEffect(() => {
        const NAV_OFFSET = 90;
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        let ticking = false;

        const updateActive = () => {
            ticking = false;

            let current = sections[0]?.id ?? "";
            for (const sec of sections) {
                const top = sec.getBoundingClientRect().top;
                if (top - NAV_OFFSET <= 0) current = sec.id;
            }
            if (current) setActiveId(current);
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(updateActive);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        updateActive();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [sectionIds]);

    const NavLink = ({ label, href, id }: { label: string; href: string; id: string }) => {
        const isActive = activeId === id;

        return (
            <a
                href={href}
                onClick={() => setActiveId(id)}
                className={[
                    "relative px-2 py-1 rounded-lg text-sm transition",
                    isActive ? "text-white" : "text-zinc-300 hover:text-white",
                ].join(" ")}
            >
                {isActive ? (
                    <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-lg bg-zinc-800/60 border border-zinc-700"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                ) : null}

                <span className="relative z-10">{label}</span>
            </a>
        );
    };

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/70 backdrop-blur">
            <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    onClick={() => setActiveId("")}
                    className="flex items-center gap-3 group"
                >
                    <div className="relative h-9 w-9 rounded-full overflow-hidden border border-zinc-700 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/profile/PortfoliopicMasum.png"
                            alt="Mahmudul Hasan Masum"
                            fill
                            sizes="36px"
                            className="object-cover object-[center_25%]"
                        />
                    </div>

                    <span className="font-semibold tracking-tight text-zinc-100">
                        Masum
                        <span className="ml-1 hidden sm:inline text-xs text-zinc-500">
                            Mahmudul Hasan Masum
                        </span>
                    </span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-2">
                    {links.map((l) => (
                        <NavLink key={l.id} label={l.label} href={l.href} id={l.id} />
                    ))}
                </nav>

                {/* Resume */}
                <div className="hidden sm:flex items-center gap-3">
                    <a
                        href="/cv/Mahmudul_Hasan_Masum_CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200 active:scale-[0.98] transition"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile button */}
                <button
                    type="button"
                    className="sm:hidden inline-flex items-center justify-center rounded-xl border border-zinc-700 px-3 py-2 text-zinc-100 hover:bg-zinc-900 transition"
                    aria-label="Open menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="sm:hidden border-t border-zinc-800/70 bg-zinc-950/80 backdrop-blur overflow-hidden"
                    >
                        <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-3">
                            {links.map((l) => {
                                const isActive = activeId === l.id;
                                return (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        className={[
                                            "rounded-xl border px-4 py-3 text-sm transition",
                                            isActive
                                                ? "border-zinc-600 bg-zinc-900 text-white"
                                                : "border-zinc-800 bg-zinc-900/40 text-zinc-100 hover:bg-zinc-900",
                                        ].join(" ")}
                                        onClick={() => {
                                            setActiveId(l.id);
                                            setOpen(false);
                                        }}
                                    >
                                        {l.label}
                                    </a>
                                );
                            })}

                            <a
                                href="/cv/Mahmudul_Hasan_Masum_CV.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-black hover:bg-zinc-200 active:scale-[0.98] transition"
                                onClick={() => setOpen(false)}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}