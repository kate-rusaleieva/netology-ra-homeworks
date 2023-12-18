import PropTypes from 'prop-types';

const propTypes = {
    item: PropTypes.shape ({
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        price: PropTypes.number,
        currency: PropTypes.oneOf(["£","$","€","¥"]),
    }).isRequired
};
  
const defaultProps = {
    item: ({
        description: "description of this item is not available now",
        descriptionFull: "descriptionFull of this item is not available now",
        price: 0,
        currency: ""
    })
};


function ShopItemFunc({ item }) {
    return (
      <div className="main-content">
          <h2>{item.brand}</h2>
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <div className="description">{item.descriptionFull}</div>
          <div className="highlight-window mobile">
              <div className="highlight-overlay"></div>
          </div>
          <div className="divider"></div>
          <div className="purchase-info">
              <div className="price">{item.currency}{parseFloat(item.price).toFixed(2)}</div>
              <button>Добавить в корзину</button>
          </div>
      </div>
    );
}

ShopItemFunc.propTypes = propTypes;
ShopItemFunc.defaultProps = defaultProps;

export default ShopItemFunc;