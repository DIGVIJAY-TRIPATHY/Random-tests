import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <header className="px-6 lg:px-20 pt-8">
        <nav className="flex flex-col lg:flex-row items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-3">
          <div className="text-3xl font-bold">
            <span className="text-[#7C3AED] px-2 text-4xl">N</span>NEXORA
          </div>

          <ul className="my-6 flex flex-wrap justify-center gap-8 lg:my-0">
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                About
              </a>
            </li>
          </ul>

          <button className="rounded-xl bg-linear-to-r from-[#7C3AED] to-[#EC4899] px-6 py-3 font-semibold transition hover:scale-105">
            Get Started
          </button>
        </nav>
        <section className="flex min-h-[85vh] flex-col items-center justify-between gap-16 py-20 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="mb-8 inline-block rounded-full bg-white/10 px-5 py-2 backdrop-blur-lg">
              ⚡ Next Generation Platform
            </div>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Build Faster.
              <br />
              <span className="text-[#7C3AED]">Scale Smarter.</span>
              <br />
              Grow Beyond.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Build beautiful websites using modern UI design, gradients,
              animations and responsive layouts.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-xl bg-linear-to-r from-[#7C3AED] to-[#EC4899] px-8 py-4 font-semibold transition hover:-translate-y-1">
                Get Started
              </button>

              <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold backdrop-blur-xl transition hover:-translate-y-1">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            <div className="h-95 w-95 rounded-full bg-linear-to-br from-[#7C3AED] to-[#3B82F6] shadow-[0_0_120px_#7C3AED]" />

            <div className="absolute left-10 top-10 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <h3 className="text-gray-300">Performance</h3>
              <p className="mt-2 text-3xl font-bold">98.6%</p>
            </div>
            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <h3 className="text-gray-300">Revenue</h3>
              <p className="mt-2 text-3xl font-bold">$128.7K</p>
            </div>

            <div className="absolute bottom-24 left-4 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <h3 className="text-gray-300">Users</h3>
              <p className="mt-2 text-3xl font-bold">24.8K</p>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default App;
