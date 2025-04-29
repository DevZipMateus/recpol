
import { useRef, useEffect } from "react";

type HeroVideoProps = {
  videoSrc: string;
  title: string;
  description: string;
};

const HeroVideo = ({ videoSrc, title, description }: HeroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white p-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
