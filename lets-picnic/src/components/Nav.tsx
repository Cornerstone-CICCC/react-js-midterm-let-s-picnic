import { FaBars, FaStore, FaShoppingCart } from "react-icons/fa";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { TiFlash } from "react-icons/ti";

const Nav = () => {
    return (
        <nav className="w-full flex justify-between  bg-teal-950 p-4">
            <div className="left-nav flex justify-around items-center gap-3.5">
                <FaBars className="text-white text-2xl" />
                <FaStore className="text-amber-300" />
                <h3 className="text-white">Let's Picnic</h3>
                <div className="flex justify-center items-center bg-white rounded-3xl">
                    <input className="bg-white rounded-3xl w-100 m-1 outline-none focus:ring-0 pl-4 px-2 py-1" type="text" placeholder="Search item..." /><CiSearch className="bg-white rounded-3xl w-10 text-2xl font-bold" />
                </div>

            </div>
            <div className="flex justify-around items-center gap-3.5">
                <TiFlash className="text-yellow-300" />
                <p className="text-white">Order now and get it!</p>
                <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
                    <FaShoppingCart className="w-full text-teal-800" />
                </div>
                <img className="rounded-full w-10 h-10" src="https://placehold.jp/150x150.png" alt="" />

            </div>
        </nav>
    )
}

export default Nav