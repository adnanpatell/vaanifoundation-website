import { motion, AnimatePresence } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import CarouselCards from "./CarouselCards";
import { CardResp } from "./CardResp";
import { useMediaQuery } from "@/hooks/use-media-query";

const Carousel = () => {
  const isDesktop = useMediaQuery("( min-width: 950px )");
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The hero section slideshow",
      subtitle: "nobody asked for",
      buttonText: "Join now →"
    },
    {
      image: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discover amazing landscapes",
      subtitle: "adventure awaits",
      buttonText: "Explore now →"
    },
    {
      image: "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Embrace the winter wonderland",
      subtitle: "experience the magic",
      buttonText: "Plan your trip →"
    },
  ];

  return (
    <>
      <ImagesSlider className="h-screen" slides={slides}>
        {(currentSlide) => (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.title}
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.6 }}
              className="z-50 flex flex-col justify-center items-center"
            >
              <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                {currentSlide.title} <br /> {currentSlide.subtitle}
              </motion.p>
              <motion.button 
                className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span>{currentSlide.buttonText}</span>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}
      </ImagesSlider>
      {isDesktop ? (
        <div className="flex justify-center items-center">
          <CarouselCards />
        </div>
      ) : (
        <CardResp />
      )}
    </>
  );
}

export default Carousel;