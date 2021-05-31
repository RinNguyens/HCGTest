import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {
  listVideo = [
    "https://www.youtube.com/embed/D0zYJ1RQ-fs&ab_channel=Netflix",
    "https://www.youtube.com/embed/1roy4o4tqQM&feature=youtu.be&ab_channel=WarnerBros.Pictures",
    "https://www.youtube.com/embed/bILE5BEyhdo",
    "https://www.youtube.com/embed/uBYORdr_TY8&feature=youtu.be&ab_channel=IGN"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
