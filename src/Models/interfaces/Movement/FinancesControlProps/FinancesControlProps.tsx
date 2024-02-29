import {Movement} from '../Movement';

export interface FinanceControlProps{
    handleSetMovement:(movement:Movement) => void;
    balance: number;
    expenses:number;
}