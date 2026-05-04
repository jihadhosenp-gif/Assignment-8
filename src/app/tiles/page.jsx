import Product from "@/components/Product/page";
import fs from "fs";
import path from "path";


export const dynamic = "force-dynamic";

const getTiles = async () => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public/data/tiles.json"
    );

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    return Array.isArray(data?.tiles) ? data.tiles : [];

  } catch (error) {
    console.log("Tiles fetch error:", error);
    return [];
  }
};

const Tiles = async () => {
  const tileData = await getTiles();

  return (
    <div className="p-4 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-semibold mb-4">
        All Tiles
      </h1>

      <div className="grid p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {tileData.map((tile) => (
          <Product key={tile.id} tile={tile} />
        ))}

      </div>

    </div>
  );
};

export default Tiles;