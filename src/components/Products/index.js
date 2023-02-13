import { Component } from "react";
import { Link } from "react-router-dom"
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

class Products extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        const productsUrl = "http://localhost:3002/products"
        const option = {
            method: "GET"
        }
        const productsRespons = await fetch(productsUrl, option)
        console.log("products Response >> ", productsRespons)
        const data = await productsRespons.json()
        console.log("data >> ", data)
        this.setState({ products: [...data.data] })
    }


    render() {
        const { products } = this.state
        console.log("products render >> ", products)
        return (
            <div className="container-website">
                <Header />
                <div className="container-products">
                    <ul className="products-ul">
                        {products.map((product) => (
                            <li key={product.id} className="product-li">
                                <Link to={`/products/${product.id}`}>
                                    <img className="product-img" src={product.image_url} alt={product.product_name} />
                                    <h1 className="product-name">{product.product_name}</h1>
                                </Link>
                                <button className="add-to-cart-button">Add To Cart</button>
                                <p className="product-price">RS.{product.price}/-</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Products;
