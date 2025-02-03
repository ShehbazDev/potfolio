
import deve from "../assets/image/Arrow.svg";
import div1 from "../assets/image/img2.png";
const Hero = () => {
  return (
    <div>
      <section className="bg-[#2c1051] p-4">
        <div className="">
          <div className="flex md:flex-row flex-row items-center justify-center">
            <img src={deve} alt="#" className="md:block hidden" />
            <h1 className="text-white text-xl">
              Hello! I Am <span className="text-[#7127BA]"> Muhammad Shehbaz</span>
            </h1>
          </div>
          <div className="flex gap-4 p-10 items-center justify-center">
            <div className="">
              <img src={div1} alt="#" className="md:block hidden w-40 h-40 rounded-full" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white text-center md:text-start">
                Who a developer
              </p>

              <h1 className="text-white text-7xl md:text-start text-center">
              Judges code by its structure <br />
                <span className="text-[#7127BA]"> by its logic</span>...
              </h1>
              <p className="text-white md:text-start text-center">
              Because if the structure does not impress you, what else can?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:items-center justify-around">
          <div className="pt-20">
            <h1 className="text-white text-start text-4xl">
              I'm a Software Engineer.|
            </h1>
            <p className="text-white text-start">
            Currently, I'm a Software Engineer at Triangle Software Technologies!
            </p>
          </div>

          <div>
            <p className="text-white text-start md:w-[40%] mx-auto w-[97%] ">
            I’m a self-taught developer currently learning web development.
            I have a keen interest in building user-friendly web solutions
            and am actively working on personal projects to improve my skills. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
