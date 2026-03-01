// app/data/projects.ts

export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    live?: string;
    client?: string;
    server?: string;
    repo?: string;
    tech: string[];
    featured?: boolean;
    year?: string;
    image: { src: string; alt: string };
    challenges: string[];
    improvements: string[];
};

export const projects: Project[] = [
    {
        slug: "digital-life-lessons",
        title: "Digital Life Lessons",
        subtitle: "Full-Stack MERN Application",
        description:
            "A feature-rich platform for creating, saving, and sharing life lessons with authentication, premium content, and dashboards.",
        highlights: [
            "JWT-secured APIs + Email/Google Auth",
            "Free vs Premium content + Stripe lifetime payment",
            "Like/Save/Comment/Report + Search/Filter/Sort/Pagination",
            "User & Admin dashboards for analytics & moderation",
        ],
        live: "https://digital-life-lessons-b2d6b.web.app",
        client: "https://github.com/mhmasum1/digital-life-lessons",
        server: "https://github.com/mhmasum1/digital-life-lessons-server",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Tailwind"],
        featured: true,
        year: "2025",
        image: {
            src: "/projects/digital-life-lessons.png",
            alt: "Digital Life Lessons homepage screenshot",
        },
        challenges: [
            "Designing flexible API filters/sorting while keeping response time fast",
            "Maintaining secure auth flows across client + server with role-based access",
        ],
        improvements: [
            "Add tests (unit/integration) + CI pipeline",
            "Improve performance with caching + query optimization",
        ],
    },
    {
        slug: "ecotrack",
        title: "EcoTrack — Sustainable Living Community",
        subtitle: "Full-Stack MERN + Firebase Auth",
        description:
            "A sustainability community platform where users join eco-challenges, track activities, and explore green tips/events with progress-based features.",
        highlights: [
            "Firebase Auth (Email/Password + Google)",
            "Public + Protected routes with dashboard layout",
            "Challenges: browse, details, join, and progress tracking",
            "Tips & Events fetched from MongoDB via API",
            "Filters, search & pagination",
            "Role-based access (User/Admin)",
        ],
        live: "https://ecotrack-sustainable.web.app",
        client: "https://github.com/mhmasum1/ecotrack-client",
        server: "https://github.com/mhmasum1/ecotrack-server",
        tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind"],
        featured: true,
        year: "2025",
        image: {
            src: "/projects/ecotrack.png",
            alt: "EcoTrack homepage screenshot",
        },
        challenges: [
            "Keeping dashboard navigation consistent across protected routes",
            "Handling progress logic for joined challenges reliably",
        ],
        improvements: [
            "Add notifications + weekly summaries",
            "Add better onboarding + guided tours",
        ],
    },
    {
        slug: "greennest",
        title: "GreenNest — Indoor Plant Care & Store",
        subtitle: "Responsive SPA + Firebase Auth",
        description:
            "A responsive single-page app for indoor plant lovers to explore top-rated plants, read care guides, and book expert consultations.",
        highlights: [
            "Firebase auth (Email/Password + Google)",
            "Protected routes with redirect logic",
            "Profile update using updateProfile()",
            "Dynamic plant listings from JSON",
        ],
        live: "https://greennest-indoor-plant-care.vercel.app/",
        repo: "https://github.com/mhmasum1/greennest-indoor-plant-care",
        tech: ["React", "Tailwind CSS", "DaisyUI", "Firebase"],
        featured: false,
        year: "2024",
        image: {
            src: "/projects/greennest.png",
            alt: "GreenNest homepage screenshot",
        },
        challenges: [
            "Implementing protected route redirect logic without breaking UX",
            "Keeping auth state + profile updates consistent across reloads",
        ],
        improvements: [
            "Move JSON to a backend API + add admin dashboard for inventory",
            "Add booking calendar integration + email confirmations",
        ],
    },
];