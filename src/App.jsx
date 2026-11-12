import ContactForm from './components/ContactForm'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'
import backgroundVideo from './assets/background.mp4'

const App = () => {
  return (
    <div className='relative min-h-screen overflow-x-hidden antialiased bg-black'>
      {/* ================= BACKGROUND VIDEO LAYER ================= */}
      <div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover opacity-30'
        >
          <source src="/background.mp4" type="video/mp4" />
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Lapisan tint gelap untuk menjaga keterbacaan teks */}
        <div className='absolute inset-0 bg-black/30 backdrop-blur-[1px]'></div>
      </div>

      {/*KONTEN UTAMA*/}
      <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
        <Hero />
        <Navbar />
        <Project />
        <Skills />
        <Experience />
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}

export default App