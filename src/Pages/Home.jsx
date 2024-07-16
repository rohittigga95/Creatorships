import React from 'react';
import Hero from '../Components/Hero';
import { Features } from '../Components/Features';
import { CtaComponent } from '../Components/CtaComponent';
import { NewsLetter } from '../Components/NewsLetter';

export default function Home() {
  return (
    <div>
      <Hero />
      <CtaComponent />
      <Features />
      <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row px-2 md:px-12">
        <div className="space-y-6">
          <p className="text-sm font-semibold md:text-base">
            Join our team &rarr;
          </p>
          <p className="text-3xl font-bold md:text-4xl">
            We&apos;re just getting started
          </p>
          <p className="text-base text-gray-600 md:text-lg">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Join Now
          </button>
        </div>
        <div className="md:mt-o mt-10 w-full">
          <img
            src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Getting Started"
            className="rounded-lg"
          />
        </div>
      </div>
      <NewsLetter />
      <hr className="mt-6" />
    </div>
  );
}
