export default function Card({product}) {
    const { name, images, price, description } = product;
    return (
        <div className="card bg-base-100 shadow-md dark:bg-gray-800">
            <figure className="aspect-3/2 xl:aspect-square">
                <img src={images[0]} alt={name} className="w-full h-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">$ {price}</div>
                </h2>
                <p className="text-base">{description.slice(0,130)}...</p>
                <div className="card-actions justify-between mt-2">
                    <div className="btn btn-primary btn-outline">View Details</div>
                </div>
            </div>
        </div>
    );
}