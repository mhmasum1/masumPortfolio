"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = {
    Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT"],
    Tools: ["Git", "GitHub", "Firebase", "Postman", "Vercel"],
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
};

export default function Skills() {
    return (
        <section id="skills" className="py-16">
            <div className="max-w-5xl mx-auto">
                <Reveal>
                    <h2 className="text-3xl font-semibold">🛠 Skills</h2>
                    <p className="mt-2 text-zinc-300">
                        Technologies I use to build full-stack applications.
                    </p>
                </Reveal>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8 grid gap-6 sm:grid-cols-3"
                >
                    {Object.entries(skills).map(([title, items]) => (
                        <motion.div
                            key={title}
                            variants={item}
                            className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40
                         hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900/60
                         hover:shadow-[0_0_60px_-25px_rgba(99,102,241,0.25)]
                         transition"
                        >
                            <h3 className="font-medium text-lg">{title}</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm rounded-full border border-zinc-700 text-zinc-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
