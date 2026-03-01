"use client";

import Reveal from "./Reveal";

export default function Education() {
    return (
        <section id="education" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <Reveal>
                    <h2 className="text-3xl font-semibold">🎓 Education</h2>
                </Reveal>

                <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition">
                    <p className="text-sm text-zinc-400">B.Sc. in Computer Science & Engineering</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                        United International University (UIU)
                    </h3>
                </div>
            </div>
        </section>
    );
}