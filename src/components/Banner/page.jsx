import bg from "@/assets/banner.jpg";
import { BsArrowRight } from "react-icons/bs";



const BannerPage = () => {
    return (
        <div>
            
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover Your Perfect Aesthetic</h1>
                        <p className="mb-5 text-amber-50">
                            Explore our curated collection of tiles and find the perfect match for your unique style.
                        </p>
                        <button className="btn btn-primary bg-blue-950">Browse Now <BsArrowRight /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerPage;