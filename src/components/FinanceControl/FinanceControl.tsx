import { FinanceControlProps } from "../../Models/interfaces/Movement/FinancesControlProps/FinancesControlProps";
import "./FinanceControl.css";
import { Movement } from "../../Models/interfaces/Movement/Movement";
import Balance from "../Balance/Balance";

const FinanceControl = ({
    handleSetMovement,
    balance,expenses
}:FinanceControlProps) => {

    const receiveNewMovement = (movement: Movement) => {
        movement && handleSetMovement(movement);
    }
    return(
        <div className="container_finances">
            <Balance currentBalance={balance} emitMovement={receiveNewMovement}/>
            {/* <EXPENSE/> */}
        </div>
    );
};

export default FinanceControl;
