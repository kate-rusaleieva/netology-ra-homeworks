const defaultProps = {
    props: {
        items: []
    }
};

type MyObj = {
    map(arg0: (item: MyObj, i: number) => void): JSX.Element;
    listing_id: number;
    url: string;
    MainImage: { url_570xN: string; };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}
  

type Props = { 
    items: MyObj;
}

function Listing(props: Props) {
    const items = props.items;

    function getQuantityClass( quantity:number ) {
        if( quantity <= 10 ) {
            return 'level-low';
        } else if( quantity <= 20 ) {
            return 'level-medium';
        } else if( quantity > 20 ) {
            return 'level-high';
        }
        return '';
    }

    function getFormatCurrencyCode( currency_code: string, price: string ) {
        let pricePostfix = '',
            pricePrefix = '';

            switch( currency_code ) {
                case 'USD':
                    pricePrefix = '$';
                    break;
                case 'EUR':
                    pricePrefix = '€';
                    break;
                default:
                    pricePostfix = ' ' + currency_code;
                    break;
            }

            return pricePrefix + price + pricePostfix;
    }

    function getFormatTitle( title: string ) {
        if( title.length > 50 ) {
            title = title.substring(0, 50) + '...';
        }

        return title;
    }

    function renderItems(items: MyObj) {
        return items.map((item, i) => {
            return (
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} />
                        </a>
                        </div>
                        <div className="item-details">
                        <p className="item-title">{getFormatTitle( item.title )}</p>
                        <p className="item-price">{getFormatCurrencyCode( item.currency_code, item.price )}</p>
                        <p className={`item-quantity ${getQuantityClass( item.quantity )}`}>{item.quantity} left</p>
                    </div>
                </div>
            );
        });
    }


    return(
        <div className="item-list">
             {renderItems(items)}
        </div>
    );
}

Listing.defaultProps = defaultProps;

export default Listing