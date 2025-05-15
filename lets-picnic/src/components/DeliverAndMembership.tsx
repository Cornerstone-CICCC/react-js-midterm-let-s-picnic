import { BsCreditCard2Front } from "react-icons/bs";
import { LuPackageCheck } from "react-icons/lu";

const DeliverAndMembership = () => {
  return (
    <div className="flex justify-around items-center gap-10">
        <section className="flex justify-around items-center bg-blue-900 rounded-2xl w-xl h-40">
          <div>
            <label className="flex justify-center items-center gap-1 bg-cyan-200 rounded-xs font-bold text-xs w-28 h-5 text-blue-900 px-2 mb-3"><LuPackageCheck /> Free delivery</label>
            <h2 className="text-cyan-200 text-xl font-extrabold tracking-tighter">Get up to 50% off</h2>
            <h2 className="text-cyan-200 text-xl font-extrabold tracking-tighter">Deliver by 12:15pm</h2>
            <h2 className="text-cyan-200 text-xl font-extrabold tracking-tighter">Fast and free</h2>
          </div>
          <img src="https://placehold.jp/100x100.png" alt="" />
        </section>
        <section className="flex justify-around items-center bg-amber-800 rounded-2xl w-xl h-40">
          <div>
            <label className="flex justify-center items-center gap-1 bg-amber-400 rounded-xs font-bold text-xs w-36 h-5 text-amber-900 px-2 mb-3"><BsCreditCard2Front /> Membership Card</label>
            <h2 className="text-amber-400 text-xl font-extrabold tracking-tighter">You can enjoy a 5%</h2>
            <h2 className="text-amber-400 text-xl font-extrabold tracking-tighter">discount using our</h2>
            <h2 className="text-amber-400 text-xl font-extrabold tracking-tighter">health card</h2>
          </div>
          <img src="https://placehold.jp/100x100.png" alt="" />
        </section>
    </div>
  )
}

export default DeliverAndMembership