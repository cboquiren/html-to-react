import { data } from './assets/data'
import { Header } from './components/header'
import { Table } from './components/ratings-functional'
import { Cards } from './components/cards-class'
import './css/default.css'


function App() {
  return (
    <>
    <Header />
    <Table info={data}/>
    <Cards info={data}/>
    </>
  )
}

export default App
