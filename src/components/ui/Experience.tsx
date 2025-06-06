export default function Experience () {
  return (
    <>
    <div
      className="relative w-full h-screen bg-cover bg-center bottom-18"
      style={{ backgroundImage: "url('/image/Image(22).png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0 " />
      <div className="relative z-10 flex flex-col items-center justify-center h-full  px-6 md:px-20">
        <button className=" border-2 text-white px-4 py-1 rounded-full mb-4 font-medium text-sm">
          BELIEVE IN QUALITY!
        </button>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Experience <br /> The Power of Nature
        </h1>
        <p className="text-white text-lg max-w-xl mb-6">
          We all need a little space to grow. Give yourself the space you need
          to find your inner you.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </div>
    </>
  )
}