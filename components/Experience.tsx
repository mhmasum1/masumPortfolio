import Reveal from "./Reveal";

export default function Experience() {
    return (
        <section id="experience" className="py-16">
            <div className="max-w-5xl mx-auto">
                <Reveal>
                    <h2 className="text-3xl font-semibold">🧑‍💻 Experience</h2>
                    <p className="mt-2 text-zinc-300">Where I’m currently working and learning.</p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mt-8 rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                            <div>
                                <h3 className="text-xl font-semibold">Trainee Software Engineer</h3>
                                <p className="text-zinc-300">
                                    BizReflex (Business Reflection Informatics System)
                                </p>
                            </div>
                            <p className="text-sm text-zinc-400">December 2025 – Present</p>
                        </div>

                        <ul className="mt-5 grid gap-2 text-sm text-zinc-300">
                            <li className="flex gap-2">
                                <span>✅</span>
                                <span>Working in a team-based development environment</span>
                            </li>
                            <li className="flex gap-2">
                                <span>✅</span>
                                <span>Assisting in frontend & backend development (JavaScript-based apps)</span>
                            </li>
                            <li className="flex gap-2">
                                <span>✅</span>
                                <span>Practicing clean code and real-world workflows</span>
                            </li>
                        </ul>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
