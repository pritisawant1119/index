import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
emp= {
  "no": 0,
  "name": "",
  "address": ""
};
no;
constructor(public activeRoute:ActivatedRoute,
  public service:DataService,
  public router:Router
) { 

activeRoute.paramMap.subscribe((params)=>{
this.no=params.get("no");

this.service.getdatabyid(this.no).subscribe((res)=>{

console.log(res[0]);
this.emp=res[0];
})

})

}

  ngOnInit() {
  }
update()
{
this.service.update(this.emp).subscribe((res)=>{
  console.log(res);
  this.router.navigate(['home']);
})
}
}
