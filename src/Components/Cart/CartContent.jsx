
import { useState } from "react";
export default function CartContent({ product, handleDelete }) {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="p-4 border border-gray-400 rounded-lg shadow-md mt-5 ">
            <div className="flex gap-4 justify-between items-start">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-24 h-24 object-cover rounded"
                />
                <div className="flex flex-col justify-between flex-1">
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    <p className="text-sm text-gray-600">
                        {product.description.slice(0, 60)}...
                    </p>
                    <p className="text-green-600 font-semibold">${product.price}</p>
                    <div className="flex gap-3 mt-3">
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                        >
                            {showDetails ? "Hide Details" : "Details"}
                        </button>
                        <button
                            onClick={() => handleDelete(product.id)}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                        >
                            Delete
                        </button>
                    </div>
                </div>

            </div>
            {showDetails && (
                <div className="mt-5 p-4 bg-gray-100 border rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Product Details</h4>
                    <p><span className="font-semibold">Category:</span> {product.category}</p>
                    <p><span className="font-semibold">Brand:</span> {product.brand}</p>
                    <p><span className="font-semibold">SKU:</span> {product.sku}</p>
                    <p><span className="font-semibold">Stock:</span> {product.stock}</p>
                    <p><span className="font-semibold">Rating:</span> {product.rating}</p>
                    <p className="mt-2 font-semibold">Dimensions:</p>
                    <ul className="ml-4 text-sm">
                        <li>Width: {product.dimensions.width}</li>
                        <li>Height: {product.dimensions.height}</li>
                        <li>Depth: {product.dimensions.depth}</li>
                    </ul>
                    <p className="mt-2">
                        <span className="font-semibold">Warranty:</span> {product.warrantyInformation}
                    </p>
                    <p>
                        <span className="font-semibold">Shipping:</span> {product.shippingInformation}
                    </p>
                    <p>
                        <span className="font-semibold">Availability:</span> {product.availabilityStatus}
                    </p>
                    <h4 className="font-bold mt-4">Reviews</h4>
                    {product.reviews.slice(0, 2).map((r, idx) => (
                        <div key={idx} className="mt-2 p-2 border rounded bg-white">
                            <p className="font-semibold">⭐ {r.rating}</p>
                            <p className="text-sm">{r.comment}</p>
                            <p className="text-xs text-gray-500">
                                — {r.reviewerName}
                            </p>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}

