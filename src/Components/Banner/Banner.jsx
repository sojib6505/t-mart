
export default function Banner() {
  return (
    <div className="container mx-auto bg-[#D9D9D9] md:py-5 lg:py-20 md:px-10 lg:px-72 grid grid-cols-2 items-center">
          <div className="">
            <img className="w-80" src="/Background.png" alt="" />
          </div>
          <div className="">
             <h2 className="mb-2 md:text-xl lg:text-2xl">Awesome Product Collection In 2025</h2>
             <button className="text-base font-bold cursor-pointer">SHOP NOW</button>
          </div>
    </div>
  )
}
