export function Index() {
  return (
    <>
      {/* Navigation Bar */}
      <div className="top-0 sticky w-full bg-black ">
        <nav className="md:container flex justify-between mx-auto">
          <img className="h-12 my-2" src="./dacaLogo.png" alt="" />
          <ul className="flex flex-row items-center gap-4">
            <li className="text-white uppercase font-light text-sm hover:text-orange-400">
              Home
            </li>
            <li className="text-white uppercase font-light text-sm hover:text-orange-400">
              About
            </li>
            <li className="text-white uppercase font-light text-sm hover:text-orange-400">
              Tours
            </li>
            <li className="text-white uppercase font-light text-sm hover:text-orange-400">
              Videos
            </li>
            <li className="text-white uppercase font-light text-sm hover:text-orange-400">
              Gallery
            </li>
            <li className="text-white uppercase font-light text-sm hover:text-orange-400">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      {/* Video Intro & CTA */}
      <div className="h-screen bg-cover bg-center bg-[url('/img/fire-bikes-ute.jpeg')] ">
        <div className="h-screen flex items-center justify-center flex-col bg-black/50">
          <h2 className="text-white font-sans2 text-5xl font-bold ">
            RAW ADVENTURE
          </h2>
          <p className="font-sans3 text-orange-100 mt-3 text-3xl font-extralight text-center lg:w-1/3">
            AUSTRALIA’S MOST REMOTE EPIC OFF-ROAD TOURS.
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
