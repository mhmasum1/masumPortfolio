import Reveal from "./Reveal";

export default function Footer() {
    return (
        <footer className="py-10 text-zinc-400">
            <div className="max-w-5xl mx-auto border-t border-zinc-800 pt-6 text-sm flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <Reveal>
                    <p>© {new Date().getFullYear()} Mahmudul Hasan Masum</p>
                </Reveal>
                <Reveal delay={0.1}>
                    <p>Built with Next.js + Tailwind</p>
                </Reveal>
            </div>
        </footer>
    );
}
