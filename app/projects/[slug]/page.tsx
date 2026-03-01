import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);
    if (!project) return notFound();

    return (
        <main className="mx-auto max-w-6xl px-4 pb-20 pt-12">
            <Link
                href="/#projects"
                className="text-sm text-zinc-400 hover:text-white transition"
            >
                ← Back to projects
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                {/* LEFT */}
                <div className="space-y-6">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                        <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 65vw"
                        />
                    </div>

                    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                        <h2 className="text-lg font-semibold text-white">
                            ✨ Key Highlights
                        </h2>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                            {project.highlights.map((item) => (
                                <li key={item} className="flex gap-2">
                                    <span>✅</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* RIGHT */}
                <aside className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-semibold text-white">
                                {project.title}
                            </h1>
                            <p className="mt-1 text-sm text-zinc-400">{project.subtitle}</p>
                        </div>

                        {project.year ? (
                            <span className="text-xs rounded-full border border-zinc-700 px-3 py-1 text-zinc-300">
                                {project.year}
                            </span>
                        ) : null}
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-zinc-300">
                        {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 space-y-3 text-sm">
                        {project.live ? (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-2 hover:bg-zinc-900 transition"
                            >
                                🌐 Live Project
                            </a>
                        ) : null}

                        {project.client ? (
                            <a
                                href={project.client}
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-2 hover:bg-zinc-900 transition"
                            >
                                💻 Client Repo
                            </a>
                        ) : null}

                        {project.server ? (
                            <a
                                href={project.server}
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-2 hover:bg-zinc-900 transition"
                            >
                                🗄️ Server Repo
                            </a>
                        ) : null}

                        {project.repo ? (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-2 hover:bg-zinc-900 transition"
                            >
                                💻 GitHub Repo
                            </a>
                        ) : null}
                    </div>

                    <div className="mt-8">
                        <h2 className="text-base font-semibold text-white">⚡ Challenges</h2>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                            {project.challenges.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-base font-semibold text-white">
                            🛠 Future Improvements
                        </h2>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                            {project.improvements.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </main>
    );
}