import Link from "next/link";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center px-6">
      <AuroraBackground />
      <div className="relative z-10 text-center">
        <p className="font-heading text-7xl font-bold aurora-text">404</p>
        <h1 className="mt-4 font-heading text-2xl font-semibold">
          Page not found
        </h1>
        <p className="mt-2 text-text-secondary">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-aurora-gradient px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
