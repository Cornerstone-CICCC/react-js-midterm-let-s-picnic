const Banner = () => {
  return (
    <div className="relative bg-teal-950 h-screen flex justify-around items-center">
        <section className="w-1/3 flex flex-col justify-center gap-10">
            <h1 className="text-white text-5xl font-extrabold tracking-tighter">We bring the store to your door</h1>
            <p className="text-white">Get organic produce and sustainably sourced groceries delivery at up to 4% off grocery.</p>
            <button className="bg-lime-300 rounded-md font-bold p-2 w-1/3">Shop now</button>
        </section>
            <img className="self-end h-full" src="https://placehold.jp/200x200.png" alt="" />
          <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
  >
    <path fill="#f6f3f4" d="M0,0 C360,100 1080,0 1440,100 L1440,100 L0,100 Z" />
  </svg>

        
    </div>
  )
}

export default Banner