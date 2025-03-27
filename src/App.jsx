import Header from './components/Header'
import LuckyWorldCup from './components/LuckyWorldCup'
import LuckyWorldCupCard from './components/LuckyWorldCupCard'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <div className='p-2'>
        <LuckyWorldCupCard />
        {/* <LuckyWorldCup /> bg-gray-900*/}
      </div>
    </>
  )
}

export default App
