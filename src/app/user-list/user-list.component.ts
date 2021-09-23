import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public users : string[] = [
    "Java", "Python", "Node", "Javascript"
  ]

  public shouldDisplay : boolean = true
  public success : boolean = false

}
