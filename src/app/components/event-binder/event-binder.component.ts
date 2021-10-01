import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binder',
  templateUrl: './event-binder.component.html',
  styleUrls: ['./event-binder.component.css']
})
export class EventBinderComponent {

  constructor() { }

  // public text : string = "Hello Angular";
  // public type : string = "text";

  public twoWayBindingText: string = ""
  public shouldDisplay: boolean = false
  public status : string = "yettostart";

  public students: any[] = [{
    id: "SD001",
    name: "Blessy",
    exp : 2
  },
  {
    id: "SD002",
    name: "Pavithra",
    exp : 1
  },
  {
    id: "SD003",
    name: "Sneha",
    exp : 1
  },
  {
    id: "SD004",
    name: "Shinu",
    exp : 4
  }]


  loadStudent() {

  }

  toggleShouldDisplay() {
    this.shouldDisplay = !this.shouldDisplay;
  }

  toggleStyle() {
    if(this.status === "yettostart") 
      this.status = "inprogress";
    else if(this.status === "inprogress")
      this.status = "pending"
    else if(this.status === "pending")
      this.status = "completed"
    else if(this.status === "completed")
      this.status = "yettostart"
  }

  // ngOnInit(): void {
  //   this.loadStudents() 
  // }

  // ngOnDestroy(): void {

  // }

  // loadStudents() {
  //   setTimeout(() => {
  //     this.type = "password";
  //   }, 5000)
  // }

  // changeColor() {

  //   if(this.type === "password") {
  //     this.type = "text";
  //   } else {
  //     this.type = "password";
  //   }

  // }


}
