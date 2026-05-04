import { BsArrowRight } from "react-icons/bs";
import FavoriteTileData from "../FavoriteTilesData/page";
import Link from "next/link";


const gotTiles = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/tiles');

    return res.json();
}
const FavoriteTiles = async () => {
    const tileData = await gotTiles();
    return (
        <div className="p-4 bg-gray-100 min-h-screen border-2 border-gray-300 rounded-lg mr-2 sm:mr-0 w-100%">
            <div className="flex items-center justify-between mb-4 text-blue-950">
                <h1 className="text-3xl">Favorite Tiles </h1>
                
            <div className="mb-4">
                <Link href="/tiles">
                    <button className="btn btn-outline">
                        View All <BsArrowRight />
                    </button>
                </Link>
            </div>
            </div>
            
           <div className="grid p-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                tileData.slice(0, 4).map(tile => <FavoriteTileData key={tile.id} tile={tile} />)
            }
            
                        
           </div>
           
        </div>
    );
};

export default FavoriteTiles;