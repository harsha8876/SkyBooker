import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();

  const navLink =
    "relative text-sm font-medium tracking-wide transition-colors duration-200 text-[#ECF39E]/80 hover:text-[#ECF39E] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#ECF39E] after:transition-all after:duration-300 hover:after:w-full";

  const activeLink =
    "relative text-sm font-medium tracking-wide text-[#ECF39E] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-[#ECF39E]";

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#90A955]/20 bg-[#1a2410]/95 backdrop-blur-md shadow-lg shadow-black/20">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#90A955] to-transparent opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5 shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#90A955]/20 ring-1 ring-[#90A955]/40 transition-all duration-300 group-hover:bg-[#90A955]/30 group-hover:ring-[#90A955]/60">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-[#ECF39E]"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight text-[#ECF39E]">
              Sky<span className="text-[#90A955]">Booker</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={isActive("/") ? activeLink : navLink}>
              Home
            </Link>
            <Link
              to="/search"
              className={isActive("/search") ? activeLink : navLink}
            >
              Search Flights
            </Link>

            <SignedIn>
              <Link
                to="/my-trips"
                className={isActive("/my-trips") ? activeLink : navLink}
              >
                My Trips
              </Link>
            </SignedIn>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <SignedOut>
              <Link
                to="/login"
                className="text-sm font-medium text-[#ECF39E]/70 transition-colors duration-200 hover:text-[#ECF39E]"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="group relative overflow-hidden rounded-lg bg-[#90A955] px-5 py-2 text-sm font-semibold text-[#1a2410] shadow-md shadow-[#90A955]/20 transition-all duration-200 hover:bg-[#ECF39E] hover:shadow-[#ECF39E]/20"
              >
                <span className="relative z-10">Register</span>
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-2 rounded-full border border-[#90A955]/30 bg-[#90A955]/10 px-3 py-1.5">
                  <span className="text-xs font-medium text-[#ECF39E]/70">
                    {user?.firstName || user?.username || "My Account"}
                  </span>
                </div>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-[#90A955]/20 text-[#ECF39E]/70 transition-colors hover:border-[#90A955]/40 hover:text-[#ECF39E]"
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              {menuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M3 12h18M3 6h18M3 18h18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-[#90A955]/10 bg-[#1a2410]/98 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 py-3">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#ECF39E]/70 transition-colors hover:bg-[#90A955]/10 hover:text-[#ECF39E]"
          >
            Home
          </Link>

          <Link
            to="/search"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#ECF39E]/70 transition-colors hover:bg-[#90A955]/10 hover:text-[#ECF39E]"
          >
            Search Flights
          </Link>

          <SignedIn>
            <Link
              to="/my-trips"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#ECF39E]/70 transition-colors hover:bg-[#90A955]/10 hover:text-[#ECF39E]"
            >
              My Trips
            </Link>
          </SignedIn>

          <div className="mt-2 border-t border-[#90A955]/10 pt-2">
            <SignedOut>
              <div className="flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-center text-sm font-medium text-[#ECF39E]/70 transition-colors hover:bg-[#90A955]/10 hover:text-[#ECF39E]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg bg-[#90A955] px-4 py-2.5 text-center text-sm font-semibold text-[#1a2410] hover:bg-[#ECF39E]"
                >
                  Register
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center justify-between rounded-lg border border-[#90A955]/20 bg-[#90A955]/10 px-3 py-2.5">
                <span className="text-sm text-[#ECF39E]/80">
                  {user?.firstName || user?.username || "Account"}
                </span>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}