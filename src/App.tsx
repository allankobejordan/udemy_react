
import './App.css'
import Header from './components/Header/Header';
import FinanceControl from './components/FinanceControl/FinanceControl';
import { useState } from 'react';
import { Movement } from './Models/interfaces/Movement/Movement';

function App() {
  const [currentBalance, setCurrentBalance] = useState(0); //state de saldo atual 
  const [currentExpenses, setCurrentExpenses] = useState(0); //state de despesas atual
  const [movementsItems, setMovementsItems] = useState<Array<Movement>>([]); //state de movimentações

  const setNewMovement = (movement: Movement) =>{
    if(movement){
      setMovementsItems((prevMovements)=>{
        const movements = [...prevMovements];
        movements.unshift({
          name: movement.name,
          value:movement.value,
          type:movement.type,
          id:Math.random().toString()
        });
        return movements;
      });
      movement.type ==="Input" && setCurrentBalance((prevBalance) => prevBalance + Number(movement.value));


      movement.type ==="Output" && setCurrentExpenses((prevExpenses) => prevExpenses + Number(movement.value));

      currentBalance > 0 && setCurrentBalance ((prevBalance)=> prevBalance - Number(movement.value));
    }
  }

  return (
   <div>
      <Header/>
      <FinanceControl/>
   </div>

  )
}

export default App
