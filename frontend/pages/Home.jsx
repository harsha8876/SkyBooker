import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="mb-3 rounded-full border border-slate-700 px-4 py-1 text-sm text-slate-300">
        Full Stack Airplane Ticketing System
      </p>
      <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
        Book flights, manage trips, and pay securely in one place
      </h1>
      <p className="mb-8 max-w-2xl text-slate-400">
        Search flights, choose seats, complete payment, and track all your
        bookings from a single dashboard.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          to="/search"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
        >
          Search Flights
        </Link>
        <Link
          to="/register"
          className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-800"
        >
          Create Account
        </Link>
      </div>
    </section>
  );
}

export default Home;