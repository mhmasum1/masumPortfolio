"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="py-16"
        >
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-12 shadow-[0_0_80px_-40px_rgba(99,102,241,0.45)]">
                <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-10">
                    <div className="flex-1">
                        <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
                            🚀 Junior Full Stack MERN Developer
                        </p>

                        <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight">
                            Hi, I&apos;m{" "}
                            <span className="bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                                Mahmudul Hasan Masum
                            </span>{" "}
                            👋
                        </h1>

                        <p className="mt-4 max-w-2xl text-zinc-300 text-lg leading-relaxed">
                            I build modern, scalable web applications using React, Node.js, Express, and MongoDB.
                            I focus on clean code, performance, and real-world teamwork.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black hover:bg-zinc-200 active:scale-[0.98] transition"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-medium hover:bg-zinc-900 active:scale-[0.98] transition"
                            >
                                Contact Me
                            </a>

                            <a
                                href="/cv/Mahmudul_Hasan_Masum_CV.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-medium hover:bg-zinc-900 active:scale-[0.98] transition"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="relative shrink-0 group">
                        <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <Image
                            src="/profile/masum.jpeg"
                            alt="Mahmudul Hasan Masum"
                            width={180}
                            height={180}
                            priority
                            className="relative rounded-full border border-zinc-700 shadow-lg transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
