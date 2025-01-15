import logo from "../assets/image/Logo.svg";


function Nav() {
  return (
    <>
      <nav className="bg-[#1A0B2E]">
        <div>
          <div className="flex md:flex-row flex-col gap-4  md:justify-around items-center justify-center p-4">
            <div className="">
              <img src={logo} alt="#" />
            </div>
            <div className="flex md:flex-row flex-col gap-10 items-center justify-center">
              <h1 className="text-white">Home</h1>
              <h1 className="text-white">About</h1>
              <h1 className="text-white">Lab</h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
