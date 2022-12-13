import { Link } from "react-router-dom"
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const productsData = [
    {
        id: 1,
        productName: "Fogg",
        price: 249,
        imageUrl:
            "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png",
    },
    {
        id: 2,
        productName: "Fogg",
        price: 249,
        imageUrl:
            "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png",
    },
    {
        id: 3,
        productName: "Fogg",
        price: 249,
        imageUrl:
            "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png",
    },
    {
        id: 1,
        productName: "Fogg",
        price: 249,
        imageUrl:
            "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png",
    },
    {
        id: 2,
        productName: "Fogg",
        price: 249,
        imageUrl:
            "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png",
    },
    {
        id: 3,
        productName: "Fogg",
        price: 249,
        imageUrl:
            "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png",
    }, {
        id: 1,
        productName: "Fogg",
        price: 249,
        imageUrl:
            "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png",
    },
    {
        id: 2,
        productName: "Fogg",
        price: 249,
        imageUrl:
            "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png",
    },
    {
        id: 3,
        productName: "Fogg",
        price: 249,
        imageUrl:
            "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png",
    }
];

function Products() {
    return (
        <div className="container-website">
            <Header />
            <div className="container-products">
                <ul className="products-ul">
                    {productsData.map((product) => (
                        <Link to={`/products/${product.id}`}>
                            <li key={product.id} className="product-li">
                                <img src={product.imageUrl} alt={product.productName} />
                                <h1 className="product-name">{product.productName}</h1>
                                <button className="add-to-cart-button">Add To Cart</button>
                                <p className="product-price">RS.{product.price}/-</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default Products;
