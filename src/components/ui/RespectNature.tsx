export default function RespectNature () {
  return (
    <>
    <div
      className="relative w-full h-screen bg-cover bg-center bottom-18"
      style={{ backgroundImage: "url('/image/Image(88).png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0 " />
      <div className="relative z-10 flex flex-col items-start justify-center h-full  px-6 md:px-20">
        <img className="ml-35" src="/icons/slider3-stamp.png.png" />
        <button className=" border-2 text-white px-4 py-1 rounded-full mb-4 font-medium text-sm">
          BELIEVE IN QUALITY!
        </button>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Respect Nature, <br /> Gain Benefits
        </h1>
      
        <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </div>
    </>
  )
}