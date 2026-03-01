"use client";

import Reveal from "./Reveal";

export default function About() {
    return (
        <section id="about" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <Reveal>
                    <h2 className="text-3xl font-semibold">👋 About Me</h2>
                    <p className="mt-2 text-zinc-300">
                        My journey, what I enjoy building, and what I’m focusing on right now.
                    </p>
                </Reveal>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    {/* Intro */}
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition">
                        <p className="text-sm text-zinc-400">Who I am</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                            Junior Full Stack MERN Developer
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                            I’m Mahmudul Hasan Masum — a Junior Full Stack MERN Developer with hands-on
                            experience in React, Next.js, TypeScript, Node.js, Express, and MongoDB.
                            I build full-stack web applications with REST APIs, authentication, and responsive UI.
                        </p>
                    </div>

                    {/* What I enjoy */}
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition">
                        <p className="text-sm text-zinc-400">What I enjoy</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                            Clean UI + real features
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                            I enjoy building practical products—dashboards, filters/search, role-based access,
                            secure APIs, and smooth user experiences. I like writing clean, maintainable code
                            and polishing performance & UI details.
                        </p>
                    </div>

                    {/* Current */}
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition">
                        <p className="text-sm text-zinc-400">Currently</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                            Trainee Software Engineer
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                            I’m currently working as a Trainee Software Engineer at BizReflex, gaining
                            hands-on experience in team-based development, clean coding practices, and
                            assisting in JavaScript-based frontend & backend development.
                        </p>
                        <p className="mt-4 text-xs text-zinc-400">
                            Location: Banasree, Rampura, Dhaka
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}