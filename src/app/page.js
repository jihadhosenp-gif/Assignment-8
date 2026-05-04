import BannerPage from "@/components/Banner/page";
import FavoriteTiles from "@/components/FavoriteTiles/page";
import Footer from "@/components/Footer/page";
import SubscribeSection from "@/components/SubscribeSection/page";




export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen">
        <BannerPage />
      </div>
      <div className="min-h-screen">
        <FavoriteTiles />
      </div>
      <div className="min-h-screen">
        <SubscribeSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
