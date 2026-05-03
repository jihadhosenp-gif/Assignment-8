import Product from "@/components/Product/page";



const gotTiles = async () => {
    const res = await fetch('http://localhost:5000/tiles');

    return res.json();
}
const tiles = async () => {
    const tileData = await gotTiles();
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            All Tiles
           <div className="grid p-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                tileData.map(tile => <Product key={tile.id} tile={tile} />)
            }
                        
           </div>
        </div>
    );
};

export default tiles;