import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 emp;
  constructor(public service:DataService,public router:Router) {
  
   }

  ngOnInit() {
  }
  add(FormData)
  {
    this.emp=FormData.form.value;
    this.service.AddData(this.emp).subscribe((res)=>{
      this.router.navigate(['home']);
    })

  }

  

}
