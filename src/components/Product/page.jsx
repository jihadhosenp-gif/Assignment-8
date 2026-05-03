

const Product = ({ tile}) => {
    const { title, description, image, price, currency } = tile;
    return (
        <div>
            <div className="card bg-base-300 w-96 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <figure>
                    <img
                        src={image}
                        alt={title} 
                       className="w-40 h-40 object-cover"
                         />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-blue-950">{title}</h2>
                    <p className="text-blue-950">${price} </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;