import Header from "../Header"
import Footer from "../Footer"
import "./index.css"
const productsData =
{
    id: 1,
    productName: "Fogg",
    price: 249,
    imageUrl:
        "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656827930/movie%20app%20mini%20project/NativebaseLogo_zo5r6r.png",
}


const Product = () => {
    return (
        <div className="container-website">
            <Header />
            <div className="container-product">
                <img src={productsData.imageUrl} alt={productsData.productName} />
                <div className="product-content">
                    <h1 className="product-name">{productsData.productName}</h1>
                    <button className="add-to-cart-button">Add To Cart</button>
                    <p className="product-price">RS.{productsData.price}/-</p>
                    <button type="button">Buy Now</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product