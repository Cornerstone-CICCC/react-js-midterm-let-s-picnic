import { FaBars, FaStore, FaShoppingCart } from "react-icons/fa";
import { CiSearch} from "react-icons/ci";
import { TiFlash } from "react-icons/ti";

const Nav = () => {
    return (
        <nav className="w-full flex flex-wrap justify-between  bg-teal-950 p-4">
            <div className="flex justify-around items-center flex-wrap gap-3.5">
                <FaBars className="text-white text-2xl" />
                <FaStore className="text-amber-300 text-2xl" />
                <h3 className="text-white font-bold hidden sm:block">Let's Picnic</h3>
                <div className="flex justify-center items-center bg-white rounded-3xl">
                    <input className="bg-white rounded-3xl w-30 sm:w-40 md:w-50 lg:w-70 xl:w-90 m-1 outline-none focus:ring-0 pl-4 px-2 py-1" type="text" placeholder="Search item..." /><CiSearch className="bg-white rounded-3xl w-10 text-2xl font-bold" />
                </div>
            </div>
            <div className="flex justify-around items-center flex-wrap gap-3.5">
                <TiFlash className="text-yellow-300 text-xl hidden md:block" />
                <p className="text-white hidden md:block">Order now and get it!</p>
                <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
                    <FaShoppingCart className="w-full text-teal-800" />
                </div>
                <img className="rounded-full w-10 h-10" src="https://placehold.jp/150x150.png" alt="" />

            </div>
        </nav>
    )
}

export default Nav