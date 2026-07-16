import Link from "next/link";
export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">

      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h1 className="text-center text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Join Book Your Shoot today.
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-400"
          />

          <button className="w-full rounded-xl bg-yellow-400 py-4 font-bold text-black transition hover:scale-105">
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?
          <Link href="/login" className="text-yellow-400 hover:underline">
  {" "}Login
</Link>
        </p>

      </div>

    </main>
  );
}