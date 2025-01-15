
import image from "../assets/image/image 1.svg";
const section = () => {
  return (
    <div className="bg-[#2c1051] py-20">
      <div className="">
        <div className="">
          <h1 className="text-white text-4xl p-12 ">Work Experience</h1>
        </div>
        <div className="p-6 flex md:flex-row flex-col gap-4">
          <div className=" border border-[#693B93] h-42  flex md:flex-row flex-col bg-[#2C1250] gap-2 rounded-xl hover:scale-90 transition-all duration-200 p-6">
            <img src={image} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-2xl">Practiced version control </h1>
              <p className="text-white">
                Take your client onboard seamlessly by our amazing <br/>
                tool of digital onboard process.
              </p>
              <div>
                <button className="border h-10 w-28 rounded-lg text-white">
                  learn more
                </button>
              </div>
            </div>
          </div>

          <div className=" border border-[#693B93] h-42  flex md:flex-row flex-col bg-[#2C1250] gap-2 rounded-xl hover:scale-90 transition-all duration-200 p-6">
            <img src={image} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-2xl">Built a personal portfolio website </h1>
              <p className="text-white">
                Take your client onboard seamlessly by our amazing <br />
                tool of digital onboard process.
              </p>
              <div>
                <button className="border h-10 w-28 rounded-lg text-white">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 flex md:flex-row flex-col gap-4">
          <div className=" border border-[#693B93] h-42  flex md:flex-row flex-col bg-[#2C1250] gap-2 rounded-xl hover:scale-90 transition-all duration-200 p-6">
            <img src={image} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-2xl">Designed responsive web pages. </h1>
              <p className="text-white">
                Take your client onboard seamlessly by our amazing <br />
                tool of digital onboard process.
              </p>
              <div>
                <button className="border h-10 w-28 rounded-lg text-white">
                  learn more
                </button>
              </div>
            </div>
          </div>

          <div className=" border border-[#693B93] h-42  flex  md:flex-row flex-col bg-[#2C1250] gap-2 rounded-xl hover:scale-90 transition-all duration-200 p-6">
            <img src={image} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-2xl">Used Tailwind CSS for styling </h1>
              <p className="text-white">
                Take your client onboard seamlessly by our amazing <br />
                tool of digital onboard process.
              </p>
              <div>
                <button className="border h-10 w-28 rounded-lg text-white">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section;
