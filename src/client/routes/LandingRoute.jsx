import React from "react";

export default function Home({ openModal }) {
  return (
    <div>
      {/* Hero + CTA button */}
      <div className="flex flex-row items-center justify-center my-48">
        <article className="p-4 my-15 2xl:p-0">
          <h1 className="flex flex-col font-heading font-bold text-6xl justify-start tracking-wide">
            Victoria Unleashed
            <p className="font-heading text-5xl">Where Art Flourishes</p>
          </h1>
          <h3 className="font-subHeading text-lg text-textSecondary mt-5 tracking-wider">
            Join a Thriving Ecosystem of Local Artists and Enthusiasts
          </h3>
          <div className="inline-flex space-x-6 w-full mt-6 sm:w-auto">
            <button
              className="btn btn-primary w-64 text-white"
              onClick={openModal}
            >
              Join Now
            </button>
          </div>
        </article>
        <div className="block relative overflow-hidden rounded-full w-80 h-80 ml-4">
          <img
            src="/images/assets/hero_img.jpg"
            alt="victoria fantang alley"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto my-36">
        <p className="font-subHeading text-2xl text-textSecondary leading-loose">
          Welcome to <span className="text-primary">Blanc Canvas</span>, where Victoria's art scene comes alive.
          Whether you're an artist seeking inspiration or a creative enthusiast
          ready to embrace local talent, 
          <span className="text-primary"> our platform awaits</span>.
        </p>
      </div>

      <section>
        <div className="flex flex-row justify-center items-center my-20">
          <div className="block relative overflow-hidden rounded-full w-80 h-80">
            <img
              src="/images/assets/artist.jpg"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="m-10">
            <h2 className="font-subHeading text-xl mb-2 tracking-wide">For Artists</h2>
            <p className="font-bodyFont max-w-sm text-textSecondary">
              Unlock Victoria's Creative Pulse: Connect with local artists who
              breathe life into your vision.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center my-20">
          <div className="m-10">
            <h2 className="font-subHeading text-xl mb-2 tracking-wide">
              For Art Lovers and Community
            </h2>
            <p className="font-bodyFont max-w-sm text-textSecondary">
              Explore Victoria's Artistry: Immerse yourself in projects, events,
              and local talent.
            </p>
          </div>
          <div className="block relative overflow-hidden rounded-full w-80 h-80">
            <img
              src="/images/assets/community.jpg"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <div className="my-20 py-20 bg-primary ">
        <h1 className="font-heading text-3xl dark:text-white tracking-wide whitespace-break-spaces">
          Elevate Your Artistic journey in Victoria!<br />

          Ignite creativity, collaborate, and empower local artistry.</h1>
      </div>
    </div>
  );
}
