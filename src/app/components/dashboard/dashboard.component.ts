import { Component } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Task } from '../../model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

taskObj:Task=new Task();

taskArray:Task[]=[]

addTaskValue:string=''

editTaskValue:string=''

constructor(private crudService:CrudService)
{

}

ngOnInit(): void {
this.addTaskValue='';
this.editTaskValue='';
this.taskObj=new Task();
this.taskArray=[]
this.getAllTask();

}

addTask()
{
this.taskObj.task_name=this.addTaskValue;

this.crudService.addTask(this.taskObj)
.subscribe(res=>{
this.ngOnInit()

this.addTaskValue=""
})
}


getAllTask()
{
this.crudService.getAllTask()
.subscribe(res=>{
this.taskArray=res;
})
}

editTask()
{
this.taskObj.task_name=this.editTaskValue
this.crudService.updateTask(this.taskObj).subscribe(res=>{
this.ngOnInit();
})
}

deleteTask(task: Task) {
console.log('deleted' ,task);
  this.crudService.deleteTask(task).subscribe()


  ;
}



call(task:Task)
{
this.taskObj=task;
this.editTaskValue=task.task_name
}


}


