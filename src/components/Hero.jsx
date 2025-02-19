import { HERO } from "../constants"
import personimg from "../assets/bagus.jpg"
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }} 
        className="w-full md:w-1/2 p-8">
        <h2 className="my-8 p-2 text-4xl font-bold  md:text-5xl lg:text-[6rem]">
          {HERO.name}
        </h2>
        <p className="p-2 mb-6 text-3xl tracking-tighter lg:text-4xl">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                HERO.roles1,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                HERO.roles2,
                1000,
                HERO.roles3,
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
          />
        </p>
        <p className="mb-8 p-2 text-xl">
          {HERO.description}
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={personimg} width={530} height={530} alt="person IMG" className="rounded-3xl hover:drop-shadow-custom-purple2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero