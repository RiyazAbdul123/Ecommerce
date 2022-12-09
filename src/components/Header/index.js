import "./index.css"

function Header() {
    return (
        <div className="container-header">
            <img src={"https://res.cloudinary.com/dxnhvq8pl/image/upload/v1628099153/movie%20app%20mini%20project/580b57fcd9996e24bc43c529_d5ju8c.png"} alt="website Logo" className="website-logo" />
            <ul className="header-ul">
                <li className="header-product">Products</li>
                <li className="header-product">Perfume</li>
            </ul>
        </div>
    );
}

export default Header