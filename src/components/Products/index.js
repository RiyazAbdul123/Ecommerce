import "./index.css"

const productsData = [{
    id: 1, productName: "Fogg", price: 249, imageUrl: "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png"
}, {
    id: 2, productName: "Fogg", price: 249, imageUrl: "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png"
}, {
    id: 3, productName: "Fogg", price: 249, imageUrl: "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png"
}]

function Products() {
    return (
        <div className="container-products">
            <ul>
                {productsData.map((product) => <li><img src={product.imageUrl} alt={product.productName} /><h1>{product.productName}</h1><p>{product.price}</p></li>)}
            </ul>
        </div>
    );
}

export default Products