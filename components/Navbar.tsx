"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const links = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 640) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/70 backdrop-blur">
            <div className="mx-auto max-w-5xl px-5 py-3 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Image
                            src="/profile/masum.jpeg"
                            alt="Mahmudul Hasan Masum"
                            width={36}
                            height={36}
                            className="relative rounded-full border border-zinc-700 transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    <span className="font-semibold tracking-tight text-zinc-100">
                        Masum
                        <span className="ml-1 hidden sm:inline text-xs text-zinc-500">
                            Mahmudul Hasan Masum
                        </span>
                    </span>
                </a>

                <nav className="hidden sm:flex items-center gap-5 text-sm text-zinc-300">
                    {links.map((l) => (
                        <a key={l.label} href={l.href} className="hover:text-white transition">
                            {l.label}
                        </a>
                    ))}
                </nav>

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

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="sm:hidden border-t border-zinc-800/70 bg-zinc-950/80 backdrop-blur overflow-hidden"
                    >
                        <div className="mx-auto max-w-5xl px-5 py-4 flex flex-col gap-3">
                            {links.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-100 hover:bg-zinc-900 transition"
                                    onClick={() => setOpen(false)}
                                >
                                    {l.label}
                                </a>
                            ))}

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
