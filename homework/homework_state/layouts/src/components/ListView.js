 import ShopItem from "./ShopItem";

function ListView(props) {
    const { items } = props;

    function renderItems(items) {
        return items.map((item, i) => {
            return (
                <div 
                    className="shop-item-wrapper" 
                    key={item.id}
                >
                    <ShopItem desc={item} />
                </div>
            );
        });
    }

    return (
        <div className="shop-item-list">
          {renderItems(items)}
        </div>
    );
}

export default ListView;