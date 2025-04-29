
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroVideo from '@/components/laboratory/HeroVideo';
import LabOverview from '@/components/laboratory/LabOverview';
import CertificationsSection from '@/components/laboratory/CertificationsSection';
import MediaGallery from '@/components/laboratory/MediaGallery';
import CallToAction from '@/components/laboratory/CallToAction';

const Laboratory = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <HeroVideo 
          videoSrc="/lovable-uploads/videolab.mp4"
          title="Laboratório Recpol"
          description="Excelência e inovação em análise e controle de qualidade de polímeros"
        />
        
        <LabOverview imageSrc="/lovable-uploads/2774020419465373.jpeg" />
        
        <CertificationsSection />
        
        <MediaGallery />
        
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Laboratory;
