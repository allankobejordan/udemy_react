
import './App.css'
import Header from './components/Header/Header';
import FinanceControl from './components/FinanceControl/FinanceControl';
function App() {

  const finances = {
    id:1,
    description:"expenses",
  }
  return (
   <div>
    <Header/>
    <FinanceControl/>
   </div>

  )
}

export default App
