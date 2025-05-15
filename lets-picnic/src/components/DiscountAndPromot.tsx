const DiscountAndPromot = () => {
  return (
    <div className="flex justify-between gap-5">
        <section className="flex flex-col justify-center w-3xs h-100 bg-pink-200 rounded-2xl">
            <div className="h-1/2 flex flex-col gap-3 justify-center bg-pink-200 rounded-t-2xl px-7 pt-3">
                <h2 className="text-rose-950 font-extrabold text-lg">Save</h2>
                <h3 className="text-rose-800 font-extrabold text-3xl font-mono">$29</h3>
                <p className="font-semibold">Enjoy Dicount all types of Grocery & frozen item</p>
            </div>
            <div className="h-1/2 flex justify-center items-center bg-rose-900 rounded-b-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:h-3/4 after:bg-rose-950 after:rounded-[70px_70px_70px_15px] round-shape-top">
                <img className="z-10" src="https://placehold.jp/100x150.png" alt="" />
            </div>
        </section>

        <section  className="flex flex-col justify-center w-3xs h-100 bg-orange-200 rounded-2xl">
            <div className="h-1/2 flex flex-col gap-3 justify-center bg-orange-200 rounded-t-2xl px-7 pt-3">
                <h2 className="text-orange-950 font-extrabold text-lg">Discount</h2>
                <h3 className="text-orange-900 font-extrabold text-3xl font-mono">30%</h3>
                <p className="font-semibold">Enjoy Dicount all types of Grocery & frozen item</p>
            </div>
            <div className="h-1/2 flex justify-center items-center bg-orange-800 rounded-b-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:h-3/4 after:bg-orange-900 after:rounded-[70px_70px_70px_15px] round-shape-top">
                <img className="z-10" src="https://placehold.jp/100x150.png" alt="" />
            </div>
        </section >

        <section className="flex flex-col justify-center w-3xs h-100 bg-blue-200 rounded-2xl">
            <div className="h-1/2 flex flex-col gap-3 justify-center bg-blue-200 rounded-t-2xl px-7 pt-3">
                <h2 className="text-blue-900 font-extrabold text-lg">Up tp</h2>
                <h3 className="text-blue-800 font-extrabold text-3xl font-mono">50%</h3>
                <p className="font-semibold">Enjoy Dicount all types of Grocery & frozen item</p>
            </div>
            <div className="h-1/2 flex justify-center items-center bg-blue-900 rounded-b-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:h-3/4 after:bg-blue-950 after:rounded-[70px_70px_70px_15px] round-shape-top">
                <img className="z-10" src="https://placehold.jp/100x150.png" alt="" />
            </div>
        </section>

        <section className="flex flex-col justify-center w-3xs h-100 bg-purple-200 rounded-2xl">
            <div className="h-1/2 flex flex-col gap-3 justify-center bg-purple-200 rounded-t-2xl px-7 pt-3">
                <h2 className="text-purple-950 font-extrabold text-lg">Free</h2>
                <h3 className="text-purple-900 font-extrabold text-3xl font-mono">SHIP</h3>
                <p className="font-semibold">Enjoy Dicount all types of Grocery & frozen item</p>
            </div>
            <div className="h-1/2 flex justify-center items-center bg-purple-900 rounded-b-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:h-3/4 after:bg-purple-950 after:rounded-[70px_70px_70px_15px] round-shape-top">
                <img className="z-10" src="https://placehold.jp/100x150.png" alt="" />
            </div>
        </section>
    </div>
  )
}

export default DiscountAndPromot