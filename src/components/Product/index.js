import React, { Component } from "react"
import Header from "../Header"
import Footer from "../Footer"
import "./index.css"

class Product extends Component {
    state = {
        product: {}
    }

    componentDidMount() {
        this.getProduct()
        console.log("componsent did mount function")
    }

    getTheProductId = () => {
        // const { id } = this.props
        // console.log("match > ", this.props)
        // const { params } = match
        // const { id } = params
        // return id
    }

    getProduct = async () => {
        // this.getTheProductId()
        // const productUrl = "http://localhost:3001/products/"
    }




    render() {
        console.log("render function")
        return (
            <div className="container-website">
                <Header />
                {/* <div className="container-product">
                    <img src={productsData.imageUrl} alt={productsData.productName} />
                    <div className="product-content">
                        <h1 className="product-name">{productsData.productName}</h1>
                        <button className="add-to-cart-button">Add To Cart</button>
                        <p className="product-price">RS.{productsData.price}/-</p>
                        <button type="button">Buy Now</button>
                    </div>
                </div> */}
                <Footer />
            </div>
        )
    }
}

export default Product