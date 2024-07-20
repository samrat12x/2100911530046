export default function SpecificProduct({ product, onBack }) {
    return (
        <div className="specific_product">
            <button onClick={onBack}>Back</button>
            <h2>{product.productName}</h2>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rating ? product.rating : 'No rating available'}</p>
            <p>Discount: {product.discount ? `${product.discount}%` : 'No discount available'}</p>
            <p>Availability: {product.availability === "yes" ? "In Stock" : "Sold Out"}</p>
        </div>
    );
}