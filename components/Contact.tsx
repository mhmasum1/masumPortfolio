"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
};

export default function Contact() {
    return (
        <section id="contact" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <Reveal>
                    <h2 className="text-3xl font-semibold">📫 Contact</h2>
                    <p className="mt-2 text-zinc-300">
                        I’m open to junior roles and collaborations. Let’s talk!
                    </p>
                </Reveal>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {/* Email */}
                    <motion.a
                        variants={item}
                        href="mailto:mhmasum231@gmail.com"
                        className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40 hover:bg-zinc-900 transition"
                    >
                        <p className="text-sm text-zinc-400">Email</p>
                        <p className="mt-1 font-medium">mhmasum231@gmail.com</p>
                    </motion.a>

                    {/* Phone */}
                    <motion.a
                        variants={item}
                        href="tel:+8801761190107"
                        className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40 hover:bg-zinc-900 transition"
                    >
                        <p className="text-sm text-zinc-400">Phone</p>
                        <p className="mt-1 font-medium">01761190107</p>
                    </motion.a>

                    {/* WhatsApp */}
                    <motion.a
                        variants={item}
                        href="https://wa.me/8801761190107"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40 hover:bg-zinc-900 transition"
                    >
                        <p className="text-sm text-zinc-400">WhatsApp</p>
                        <p className="mt-1 font-medium">Chat on WhatsApp</p>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        variants={item}
                        href="https://www.linkedin.com/in/hasanmasum"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40 hover:bg-zinc-900 transition"
                    >
                        <p className="text-sm text-zinc-400">LinkedIn</p>
                        <p className="mt-1 font-medium">/in/hasanmasum</p>
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                        variants={item}
                        href="https://github.com/mhmasum1"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40 hover:bg-zinc-900 transition"
                    >
                        <p className="text-sm text-zinc-400">GitHub</p>
                        <p className="mt-1 font-medium">mhmasum1</p>
                    </motion.a>

                    {/* Resume */}
                    <motion.a
                        variants={item}
                        href="/cv/Mahmudul_Hasan_Masum_CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40 hover:bg-zinc-900 transition"
                    >
                        <p className="text-sm text-zinc-400">Resume</p>
                        <p className="mt-1 font-medium">Download CV</p>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}