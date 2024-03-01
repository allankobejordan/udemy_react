export interface ButtonProps{
    title:string;
    priority:string;
    action?:() => void;
    type?:"button" | "subimit" | "reset" | undefined;
    disable?: boolean;
}