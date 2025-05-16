import {motion} from 'framer-motion'

const AppDownload = () => {
  return (
    <div className="flex justify-around items-center">
        <div className="flex justify-around items-center w-full p-10 bg-pink-900 rounded-3xl bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='none' stroke='%23f9caca' stroke-width='0.3'%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3Cpath d='M60 20 Q65 10 70 20 Q75 30 80 20'/%3E%3Crect x='20' y='60' width='20' height='10' rx='3'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 70px',
          backgroundRepeat: 'repeat',

        }}>
            <motion.section className="flex flex-col gap-2"
              initial={{opacity:0.3, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5}}
            >
                <h2 className="text-pink-200 text-2xl sm:text-3xl font-extrabold tracking-tighter">Stay Home and Get All</h2>
                <h2 className="text-pink-200 text-2xl sm:text-3xl font-extrabold tracking-tighter">Your Essentail From</h2>
                <h2 className="text-pink-200 text-2xl sm:text-3xl font-extrabold tracking-tighter">Our Market!</h2>
                <p className="text-pink-300 text-xs tracking-tighter pt-4">Download the app from store or google play</p>
                <div className="flex justify-evenly">
                    <img className="w-20 h-6 sm:w-30 sm:h-9 rounded-sm" src="images/img_app_store.png" alt="" />
                    <img className="w-20 h-6 sm:w-30 sm:h-9 rounded-sm" src="images/img_google_play.png" alt="" />
                </div>
        </motion.section>
        
        <section>
            <motion.img src="https://placehold.jp/250x250.png" alt="" 
              initial={{opacity:0.3, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5}}
            />
        </section>
        </div>
    </div>
  )
}

export default AppDownload