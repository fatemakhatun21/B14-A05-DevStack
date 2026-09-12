import bannerImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight"> Build Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-brand-gradient"> Developer Stack</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Discover modern technologies, build your ideal development stack,
            and explore the tools developers use to create powerful applications.</p>
            <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-brand-gradient text-white px-6 py-3 rounded-full font-medium">Explore Technologies</button>
                <button className="border border-gray-300 px-6 py-3 rounded-full font-medium">Learn More</button>
            </div>
        </div>
        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="Developer Stack"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;