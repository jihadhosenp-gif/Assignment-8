const API = process.env.NEXT_PUBLIC_API_URL;

const getSingleTile = async (id) => {
    try {
        const res = await fetch(`${API}/tiles/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch tile");
        }

        return res.json();
    } catch (error) {
        console.log("Single Tile Error:", error);
        return null;
    }
};

const TileDetails = async ({ params }) => {

    const { id } = await params;

    const tile = await getSingleTile(id);

    // Error fallback
    if (!tile) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl text-red-500">
                    Tile not found
                </h1>
            </div>
        );
    }

    return (
        <div className="p-4 bg-gray-100 min-h-screen">

            <div className="card lg:card-side bg-base-100 shadow-sm max-w-6xl mx-auto mt-10">

                {/* Image */}
                <figure className="p-4">
                    <img
                        src={tile.image}
                        alt={tile.title}
                        className="w-full lg:w-[400px] h-[300px] lg:h-[400px] object-cover rounded-lg"
                    />
                </figure>

                {/* Content */}
                <div className="card-body">

                    <h2 className="card-title text-blue-950 text-3xl">
                        {tile.title}
                    </h2>

                    <p className="text-blue-950">
                        {tile.description}
                    </p>

                    <div className="mt-4">
                        <ul className="list-disc list-inside space-y-2">

                            <li className="text-blue-950">
                                Price: ${tile.price}
                            </li>

                            <li className="text-blue-950">
                                Currency: {tile.currency}
                            </li>

                            <li className="text-blue-950">
                                Dimensions: {tile.dimensions}
                            </li>

                            <li className="text-blue-950">
                                Material: {tile.material}
                            </li>

                        </ul>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default TileDetails;