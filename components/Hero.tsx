"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative py-20 overflow-hidden"
        >
            {/* Floating Background Blobs */}
            <div className="absolute -top-40 -left-40 h-96 w-96 bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-40 -right-40 h-96 w-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

            <div className="relative rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/70 to-zinc-950/60 backdrop-blur-xl p-8 sm:p-12 shadow-[0_0_120px_-40px_rgba(99,102,241,0.4)]">
                <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-12">

                    {/* LEFT CONTENT */}
                    <div className="flex-1">
                        <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
                            🚀 Junior Full Stack MERN Developer
                        </p>

                        <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                                Mahmudul Hasan Masum
                            </span>{" "}
                            👋
                        </h1>

                        <p className="mt-5 max-w-2xl text-zinc-300 text-lg leading-relaxed">
                            I build modern, scalable web applications using React, Node.js,
                            Express, and MongoDB. I focus on clean code, performance, and
                            real-world teamwork.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
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

                        {/* Social Links */}
                        <div className="mt-8 flex items-center gap-4">
                            <a
                                href="https://github.com/mhmasum1"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-full border border-zinc-700 hover:bg-zinc-900 transition"
                            >
                                <Github size={20} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/hasanmasum"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-full border border-zinc-700 hover:bg-zinc-900 transition"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="relative shrink-0 flex justify-center sm:justify-end group">

                        {/* Animated Glow */}
                        <div className="absolute h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-pink-500/20 blur-3xl opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" />

                        {/* Circular Container */}
                        <div className="relative h-60 w-60 sm:h-72 sm:w-72 rounded-full border border-zinc-700 shadow-[0_0_80px_-20px_rgba(99,102,241,0.6)] overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">

                            <Image
                                src="/profile/PortfoliopicMasum.png"
                                alt="Mahmudul Hasan Masum"
                                width={300}
                                height={300}
                                priority
                                className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-110"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}