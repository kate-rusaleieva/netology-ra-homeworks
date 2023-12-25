import './App.css'
import Stars from './components/Stars';


const films = [{
  id: 'film-01',
  poster: './assets/superman.jpg',
  title: 'Супермен',
  stars: 4,
  price: 1299,
  type: 'Экшн',
  color: 'orange',
  isFavorite: true
}];


function App() {
  return (
    <>
      <div className="container">
        <div className="card u-clearfix">

          <div className="card-media">
            <img src={films[0].poster} alt="" className="card-media-img" />
          </div>

          <div className="card-body">
            <h2 className="card-body-heading">{films[0].title}</h2>
            <div className="card-body-options">
              <Favorite isChecked={films[0].isFavorite} />
              <Share />
            </div>
            <Stars count={films[0].stars} />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
