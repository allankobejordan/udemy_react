import { FinanceControlProps } from "../../Models/interfaces/Movement/FinancesControlProps/FinancesControlProps";
import "./FinanceControl.css";
import { Movement } from "../../Models/interfaces/Movement/Movement";

const FinanceControl = ({
    handleSetMovement,
    balance,expenses
}:FinanceControlProps) => {

    const receiveNewMovement = (movement: Movement) => {
        movement && handleSetMovement(movement);
    }
    return(
        <div className="container_finances">
            {/* BALANCE */}
            {/* EXPENSE */}
        </div>
    );
};

export default FinanceControl;
