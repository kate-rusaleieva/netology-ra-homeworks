import Button from "./Button.js";

function ShopCard(props) {
    const { info } = props;

    return (
        <div className="shop-card">
            <div className="title">
                {info.name}
            </div>
            <div className="desc">
                {info.color}
            </div>
            <div className="slider">
                <figure>
                    <img src={info.img} alt={info.name}/>
                </figure>
            </div>

            <div className="cta">
                <div className="price">${info.price}</div>
                <Button label="Add to cart" />
            </div>
        </div>
    );
}

export default ShopCard;