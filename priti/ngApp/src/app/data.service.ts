import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 emp;
  constructor(public http:HttpClient) 
  { 

  }
  GetData()
  {
    return this.http.get("http://15.206.178.229:4000/employees");
  }
  AddData(emp)
  {
   return this.http.post("http://15.206.178.229:4000/employees",emp);
  }
  delete(no)
  {
    return this.http.delete("http://15.206.178.229:4000/employees/"+no);
  }
  getdatabyid(no)
  {
    return this.http.get("http://15.206.178.229:4000/employees/"+no);
  }
  
  update(emp)
  {
    return this.http.put("http://15.206.178.229:4000/employees/"+emp.no,emp);
  }

  }

