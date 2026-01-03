import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import UserRoles from "@/components/UserRoles";
import DonationDrives from "@/components/DonationDrives";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <UserRoles />
        <DonationDrives />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
