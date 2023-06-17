import { Component } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

        public taskList: Array<TaskList> = [];
        constructor(){}
        ngOnInit():void{}        
        
        /* Capturando eventos emitidos e adicionando eventos na lista tipados */
        public setEmitTaskList(event: string){                
                this.taskList.push({task: event, checked: false});
                console.log(event);
        }
        
        public deleteItem(index: number): void{
                this.taskList.splice(index, 1);
        }
       
        public deleteAllItemsInList(): void{
                const confirm = window.confirm('Você deseja deletar tudo?')
                if(confirm && this.taskList.length > 0){
                        this.taskList = [];
                }                
        }

}

      // ng g i /modules/home/model/TaskList
