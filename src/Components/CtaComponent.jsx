import React from 'react';

export function CtaComponent() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl  text-center">
          <div className="isolate flex justify-center -space-x-2">
            <img
              className="relative z-30 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
              alt="Lee_Robinson"
            />
            <img
              className="relative z-20 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
              alt="Guillermo_Rauch"
            />
            <img
              className="relative z-10 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
              alt="Lee_Robinson"
            />
            <img
              className="relative z-0 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
              alt="Delba"
            />
          </div>

          <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
            Join <span className="border-b-8 border-yellow-300">5,482</span>{' '}
            other developers
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-600 md:mt-10 lg:text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>

          <button
            type="button"
            className="mt-8 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Get Access Now
          </button>
        </div>
      </div>
    </section>
  );
}
