import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../TodoItem';
import { Model } from '../Model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  
 displayAll: boolean = true;
 model = new  Model();
 constructor() 
 {
   this.model.items = this.getItemsFromLS();
  }
 
 AddItem(value:string){

 let data = {description: value, action:false};

  if(value != " " && value.trim()){
    this.model.items.push(data);
    let items = this.getItemsFromLS();
    
    items.push(data);
    localStorage.setItem("items",JSON.stringify(items))
  }
  else{
    alert("Please, enter a task");
  }
 }

 getItemsFromLS(){
    let items:TodoItem[] =[];
    let value = localStorage.getItem("items");

    if(value != null){
     items = JSON.parse(value);
    }
    return items;
 }
 
 getName():string{
  return this.model.name
 }

 Getitems():TodoItem[]{

  if(this.displayAll)
  {
   return this.model.items;
  }
   return this.model.items.filter(item=>item.action == true);
 }

 displayCount(){
  return this.model.items.filter(item=>item.action).length;
 }
  

  ngOnInit(): void {
  }

}

