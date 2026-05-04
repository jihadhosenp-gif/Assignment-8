

const getSingleTile = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tiles/${id}`, {
        cache: "no-store",
    });

    return res.json();
};

const TileDetails = async ({ params }) => {

    const { id } = await params;

    const tile = await getSingleTile(id);

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="card card-side bg-base-100 shadow-sm w-250 mx-auto mt-10">
                <figure>
                    <img
                        src={tile.image}
                        alt={tile.title}
                        className="w-100 h-100 object-cover"
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-blue-950">{tile.title}</h2>

                    <p className="text-blue-950">{tile.description}</p>
                    <div>
                        <ul className="list-disc list-inside">
                            <li className="text-blue-950">Price: ${tile.price}</li>
                            <li className="text-blue-950">Currency: {tile.currency}</li>
                            <li className="text-blue-950">Dimensions: {tile.dimensions}</li>
                            <li className="text-blue-950">Material: {tile.material}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TileDetails;