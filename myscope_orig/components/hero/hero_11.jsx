const hero_11 = () => {
  const heroContent = {
    subTitle: " Open Free Crypto Trading Account",
    title: (
      <>
        Join the Future of Blockchain
        <br />
        Buy & Trade Crypto
      </>
    ),
    btnText: " Start Earning",
    heroImg: "/images/hero/hero_crypto_trading.png",
    link: "#",
  };
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero relative pt-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient.jpg"
            alt="gradient"
            className="h-[150%] w-full object-cover"
          />
        </picture>
        <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
          <img
            src="/images/gradient_dark.jpg"
            alt="gradient dark"
            className="h-[150%] w-full object-cover"
          />
        </picture>
        <picture className="pointer-events-none absolute bottom-[15%] left-1/2 -translate-x-1/2">
          <img
            src="/images/crypto-trading/crypto_trading_icons.png"
            alt=""
            className="animate-fly"
          />
        </picture>

        <div className="container">
          <div className="mx-auto max-w-4xl pt-16 text-center">
            <p className="mb-6 text-lg text-accent dark:text-accent-lighter">
              {heroContent.subTitle}
            </p>
            <h1 className="mb-8 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
              {heroContent.title}
            </h1>
            <a
              href={heroContent.link}
              className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              {heroContent.btnText}
            </a>
            <figure className="relative z-10 mt-12 text-center">
              <img
                src={heroContent.heroImg}
                className="relative z-10 -ml-16 inline-block"
                alt="hero"
              />
              <div className="absolute bottom-0 left-1/2 h-[364px] w-[364px] -translate-x-1/2 overflow-hidden rounded-[1.875rem] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
                <div className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] -rotate-45 animate-gradientDiagonal"></div>
              </div>
            </figure>
          </div>
        </div>
        {/* End .container */}

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="fill-jacarta-700 dark:fill-jacarta-900"
            ></path>
          </svg>
        </div>
        {/* End absolute bottom */}
      </section>
      {/* <!-- end hero -->  */}
    </>
  );
};

export default hero_11;
