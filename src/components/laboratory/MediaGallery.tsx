type ImageGalleryProps = {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((src, index) => (
        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden h-64 shadow-md">
          <img 
            src={src}
            alt={`Laboratório Recpol ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

type VideoGalleryProps = {
  videos: string[];
}

const VideoGallery = ({ videos }: VideoGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((src, index) => (
        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden aspect-video shadow-md">
          <video 
            controls 
            className="w-full h-full object-cover"
          >
            <source src={src} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      ))}
    </div>
  );
};

const MediaGallery = () => {
  const images = [
    "/lovable-uploads/1221236622680505.jpeg",
    "/lovable-uploads/10034708336581978.jpeg",
    "/lovable-uploads/1783739858916616.jpeg",
    "/lovable-uploads/1651077705546971.jpeg"
  ];

  const videos = [
    "/lovable-uploads/analisadordeunidade.mp4",
    "/lovable-uploads/574513425130506.mp4"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Galeria do Laboratório</h2>
          <p className="section-subtitle">
            Conheça nossas instalações e equipamentos de alta tecnologia
          </p>
        </div>
        
        <ImageGallery images={images} />
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Vídeos do Nosso Laboratório</h3>
          <VideoGallery videos={videos} />
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
