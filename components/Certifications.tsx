"use client";

import Reveal from "./Reveal";

export default function Certifications() {
    return (
        <section id="certifications" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <Reveal>
                    <h2 className="text-3xl font-semibold">🏅 Certifications</h2>
                    <p className="mt-2 text-zinc-300">Proof of learning and consistency.</p>
                </Reveal>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition">
                        <h3 className="text-lg font-semibold text-white">
                            MERN Stack Web Development — Programming Hero
                        </h3>
                        <p className="mt-2 text-zinc-300 text-sm">
                            Certificate of Completion with Excellence (Complete Web Development Course).
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-zinc-300">
                                Batch: batch-12
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-zinc-300">
                                ID: WEB12-1179
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-zinc-300">
                                June–December 2025
                            </span>
                        </div>

                        <p className="mt-4 text-sm text-zinc-300">
                            Covered: JavaScript, React, Next.js, TypeScript, Node.js, Express, MongoDB + multiple projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}