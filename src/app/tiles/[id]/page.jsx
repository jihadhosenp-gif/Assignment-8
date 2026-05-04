import fs from "fs";
import path from "path";

const getSingleTile = async (id) => {
    try {
        const filePath = path.join(process.cwd(), "public/data/tiles.json");

        const jsonData = fs.readFileSync(filePath, "utf-8");
        const data = JSON.parse(jsonData);

        const tile = data.tiles.find((t) => String(t.id) === String(id));

        return tile || null;
    } catch (error) {
        console.log("Single Tile Error:", error);
        return null;
    }
};

const TileDetails = async ({ params }) => {

  
    const { id } = await params;

    const tile = await getSingleTile(id);

    if (!tile) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl text-red-500">Tile not found</h1>
            </div>
        );
    }

    return (
        <div className="p-4 bg-gray-100 min-h-screen">

            <div className="card lg:card-side bg-base-100 shadow-sm max-w-6xl mx-auto mt-10">

                <figure className="p-4">
                    <img
                        src={tile.image}
                        alt={tile.title}
                        className="w-full lg:w-[400px] h-[300px] lg:h-[400px] object-cover rounded-lg"
                    />
                </figure>

                <div className="card-body">

                    <h2 className="card-title text-blue-950 text-3xl">
                        {tile.title}
                    </h2>

                    <p className="text-blue-950">
                        {tile.description}
                    </p>

                    <ul className="list-disc list-inside mt-4">
                        <li className="text-blue-950 text-2xl">Price: ${tile.price}</li>
                        <li className="text-blue-950 text-2xl">Currency: {tile.currency}</li>
                        <li className="text-blue-950 text-2xl">Dimensions: {tile.dimensions}</li>
                        <li className="text-blue-950 text-2xl">Material: {tile.material}</li>
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default TileDetails;