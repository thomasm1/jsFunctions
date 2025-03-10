const Story = ({ compFor }) => {
  if (compFor === "about") {
    return (
      <div>
        <section className="dark:bg-jacarta-800 relative py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>

          <div className="container">
            <div className="lg:flex lg:justify-between">
              {/* <!-- Image --> */}
              <div className="lg:w-[55%]">
                <div className="relative">
                  <img
                    src="/images/about/story.jpg"
                    width="200"
                    height="200"
                    className="mx-auto mt-8 w-[80%] rotate-[8deg] rounded-[10rem]"
                  />
                  <img
                    src="/images/hero/3D_elements.png"
                    alt=""
                    className="animate-fly absolute top-0"
                  />
                </div>
              </div>

              {/* <!-- Info --> */}
              <div className="py-20 lg:w-[45%] lg:pl-16">
                <h2 className="text-jacarta-700 font-display mb-6 text-2xl dark:text-white">
                  Get Experience. Were A Results Driven Team.
                </h2>
                <p className="dark:text-jacarta-300 mb-8 text-lg leading-normal">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam
                </p>
                <p className="dark:text-jacarta-300 mb-10">
                  Every digital creation available through MakersPlace is an
                  authentic and truly unique digital creation, signed and issued
                  by the creator — made possible by blockchain technology. Even
                  if the digital creation is copied, it wont be the authentic
                  and originally signed version.
                </p>
                <div className="flex space-x-4 sm:space-x-10">
                  <div className="flex space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-accent h-8 w-8 shrink-0"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                    </svg>
                    <div>
                      <span className="font-display text-jacarta-700 block text-xl dark:text-white">
                        11,2k+
                      </span>
                      <span className="dark:text-jacarta-300 text-jacarta-700">
                        Products launched
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-accent h-8 w-8 shrink-0"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                    </svg>
                    <div>
                      <span className="font-display text-jacarta-700 block text-xl dark:text-white">
                        99,7%
                      </span>
                      <span className="dark:text-jacarta-300 text-jacarta-700">
                        Satisfaction Rate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <section className="dark:bg-jacarta-800 relative py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* <!-- Info --> */}
            <div className="pb-10 lg:w-[45%] lg:py-20 lg:pr-16">
              <h2 className="text-jacarta-700 font-display mb-6 text-2xl dark:text-white">
                Sign up for The Tide, {"i3-Earth's"} newsletter!
              </h2>
              <p className="dark:text-jacarta-300 mb-10 text-lg leading-normal">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                i3-Earth
              </p>

              <form className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"
                />
                <button
                  className="hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* <!-- Image --> */}
            <div className="lg:w-[55%]">
              <div className="relative">
                <img
                  src="/images/about/story.jpg"
                  width="200"
                  height="200"
                  className="mx-auto mt-8 w-[80%] rotate-[8deg] rounded-[10rem]"
                />
                <img
                  src="/images/hero/3D_elements.png"
                  alt=""
                  className="animate-fly absolute top-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Story;
