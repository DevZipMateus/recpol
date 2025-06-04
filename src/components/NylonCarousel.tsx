
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const NylonCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/nylon1.jpeg",
      alt: "Nylon 1 - Processo de reciclagem"
    },
    {
      src: "/lovable-uploads/nylon2.jpeg", 
      alt: "Nylon 2 - Material processado"
    },
    {
      src: "/lovable-uploads/nylon3.jpeg",
      alt: "Nylon 3 - Produto final"
    },
    {
      src: "/lovable-uploads/nylon4.jpeg",
      alt: "Nylon 4 - Aplicação industrial"
    }
  ];

  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 bg-gradient-to-r from-recpol-blue-dark/5 to-recpol-blue-light/5">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Processo de Reciclagem de Nylon</h2>
          <p className="section-subtitle">
            Conheça nosso processo especializado de reciclagem de materiais poliméricos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-96 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium">
                        {index + 1} / {images.length}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current 
                    ? "bg-recpol-blue-dark" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NylonCarousel;
