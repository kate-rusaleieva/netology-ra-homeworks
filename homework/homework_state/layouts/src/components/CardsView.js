import ShopCard from "./ShopCard";

function CardsView(props) {
    const { cards } = props;

    function renderCards(cards) {
        return cards.map((card, i) => {
            return (
                <div 
                  className="office-grid__col c_lg--4 c_md--4 c_sm--6 c_xs--12" 
                  key={card.id}
                >
                  <ShopCard info={card} />
                </div>
            );
        });
    }

    return (
        <div className="office-grid__row">
          {renderCards(cards)}
        </div>
    );
}

export default CardsView;