import './App.css'
import Listing from './components/Listing'
import jsonData from './data/etsy.json'

function App() {
  return (
    <>
      <div className='wrapper'>
        <Listing items={jsonData} />
      </div>
    </>
  )
}

export default App
