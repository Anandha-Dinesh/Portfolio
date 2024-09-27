const Aboutme = () => {
  return (
    <div>
      <div className="flex justify-center font-bold text-4xl font-mono w-full mb-20 mt-10">
        About Me
      </div>
      <div className="m-20 text-balance text-lg">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-200">
            Hey! I’m{" "}
            <span className="font-semibold text-violet-500">a recent grad</span>{" "}
            with a serious love for all things
            <span className="font-semibold text-violet-500">
              {" "}
              tech
            </span> and{" "}
            <span className="font-semibold text-violet-500">programming</span>.
            I usually build{" "}
            <span className="font-semibold text-violet-500">
              apps just for the fun of it
            </span>
            . When I’m not coding, I’m playing
            <span className="font-semibold text-violet-500"> games</span> and
            doing fun stuff.
          </p>
          <p className="mt-4 text-lg text-gray-200">
            I’m always up for{" "}
            <span className="font-semibold text-violet-500">
              learning new things
            </span>
            , trying out fresh ideas, and tackling challenges that keep me on my
            toes. Whether it’s coding up cool apps or experimenting with new
            tech, I’m{" "}
            <span className="font-semibold text-violet-500">all in</span> and
            ready to keep growing.
          </p>
          <p className="mt-6 text-lg font-semibold text-orange-500">
            Let’s connect and create something awesome!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
