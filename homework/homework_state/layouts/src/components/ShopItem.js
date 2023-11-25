import Button from "./Button.js";

function ShopItem(props) {
    const { desc } = props;

    return (
        <div className="shop-item">
            <div className="thumb">
                <figure>
                    <img src={desc.img} alt={desc.name}/>
                </figure>
            </div>
            <div className="title">
                {desc.name}
            </div>
            <div className="desc">
                {desc.caption}
            </div>
            <div className="price">${desc.price}</div>
            <Button label="Add to cart" />
        </div>
    );
}

export default ShopItem;