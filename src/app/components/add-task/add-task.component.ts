import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  text !: string;
  day !: string;
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a Task before Submitting');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
