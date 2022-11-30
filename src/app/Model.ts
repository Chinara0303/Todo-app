import { TodoItem } from "./TodoItem";
export class Model{
    name: string;
    items:TodoItem[];

    constructor(){
       this.name = "Chinara",
       this.items = [
        {description:"breakfast",action:false},
        {description:"lesson",action:false},
        {description:"sport",action:true},
        {description:"reading",action:true}
       ]
    }
}