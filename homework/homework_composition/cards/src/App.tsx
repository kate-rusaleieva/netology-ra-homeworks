import './App.css'
import Card from './components/Card'

const cards = [
  {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>,
    button: "Go somewhere"
  },
  {
    title: "Special title",
    text: "With supporting text below as a natural lead-in to additional content",
    button: "Go somewhere"
  }
];

function App() {

  return (
    <>
      <div className="bd-example">
        {
          cards.map((card, i) => {
            return (
              <Card {...card} children={card.img} />
            );
          })
        }
      </div>
    </>
  )
}

export default App
