import Product from "@/components/Product/page";

const API = process.env.NEXT_PUBLIC_API_URL;

const gotTiles = async () => {
    try {
        const res = await fetch(`${API}/tiles`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch tiles");
        }

        return res.json();
    } catch (error) {
        console.log("Tiles fetch error:", error);
        return [];
    }
};

const Tiles = async () => {
    const tileData = await gotTiles();

    return (
        <div className="p-4 bg-gray-100 min-h-screen">

            <h1 className="text-2xl font-semibold mb-4">
                All Tiles
            </h1>

            <div className="grid p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tileData?.map((tile) => (
                    <Product key={tile.id} tile={tile} />
                ))}
            </div>

        </div>
    );
};

export default Tiles;