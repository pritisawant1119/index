import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emps;
  constructor(public service:DataService) 
  {
    this.GetData();
  }

  ngOnInit() {
  }
  GetData()
  {
    this.service.GetData().subscribe((res)=>{
      this.emps=res;

    });
  }
delete(no)
{
  this.service.delete(no).subscribe((res)=>{
    this.GetData();
  })
}
}
