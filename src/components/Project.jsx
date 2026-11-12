import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { MdArrowOutward, MdClose, MdInfoOutline } from 'react-icons/md'
import { PROJECTS } from '../constants/index'
import { motion, AnimatePresence } from 'framer-motion'

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Buka modal dan reset index gambar ke 0
  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setActiveImageIndex(0)
  }

  // Kunci scroll background saat modal terbuka dan dengarkan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    if (selectedProject) {
      document.body.classList.add('overflow-hidden')
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section className="pt-28" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8 text-center text-3xl lg:text-4xl font-semibold">
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => handleOpenModal(project)}
            key={project.id}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-stone-800 bg-neutral-900/40 shadow-lg">
            <motion.img
              whileHover={{ scale: 1.08 }}
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Card Overlay: Hanya Judul & Tombol Detail */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 p-6">
              <h3 className="mb-4 text-center text-xl font-bold tracking-wide text-white px-2">
                {project.name}
              </h3>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleOpenModal(project)
                }}
                className="flex items-center gap-2 rounded-full border border-purple-400/50 bg-purple-600/80 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-purple-600 hover:scale-105 transition-all">
                <MdInfoOutline className="text-lg" />
                <span>Detail</span>
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Detail Pop-up Modal menggunakan React Portal */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop Blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedProject(null)}
                  className="fixed inset-0 bg-black/85 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-500/100 bg-neutral-950/95 p-6 shadow-2xl backdrop-blur-xl custom-scrollbar">

                  {/* Modal Header: Judul & Close Button di luar area gambar */}
                  <div className="flex items-center justify-between pb-4 mb-3 border-b border-stone-800">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      {selectedProject.name}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-stone-300 hover:text-white hover:bg-white/20 hover:scale-105 transition-all focus:outline-none"
                      aria-label="Close detail modal">
                      <MdClose className="text-xl" />
                    </button>
                  </div>

                  {/* High Quality Image Preview */}
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-inner">
                    <motion.img
                      key={activeImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      src={
                        selectedProject.screenshots && selectedProject.screenshots.length > 0
                          ? selectedProject.screenshots[activeImageIndex]
                          : selectedProject.image
                      }
                      alt={`${selectedProject.name} screenshot ${activeImageIndex + 1}`}
                      className="w-full max-h-[50vh] object-contain mx-auto"
                    />
                  </div>

                  {/* Interactive Thumbnail Gallery / Kolase Switcher */}
                  {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                    <div className="mt-4">
                      <p className="text-xs text-stone-400 mb-2 font-medium">Gallery Screenshots:</p>
                      <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar">
                        {selectedProject.screenshots.map((shot, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setActiveImageIndex(index)}
                            className={`relative shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-xl overflow-hidden border-2 transition-all ${
                              activeImageIndex === index
                                ? 'border-purple-500 scale-105 shadow-md shadow-purple-500/40'
                                : 'border-stone-700 opacity-60 hover:opacity-100 hover:border-stone-500'
                            }`}>
                            <img src={shot} alt="thumbnail" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Info, Full Description & GitHub Link */}
                  <div className="mt-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">
                        Project Overview
                      </span>
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/40">
                        <span>View On Github</span>
                        <MdArrowOutward />
                      </a>
                    </div>

                    <p className="text-stone-300 leading-relaxed text-sm md:text-base">
                      {selectedProject.description}
                    </p>

                    <p className="text-xs text-stone-500 pt-2">
                      💡 Tekan tombol <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-stone-300 font-mono">Esc</kbd> atau klik di luar area modal untuk menutup.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  )
}

export default Project