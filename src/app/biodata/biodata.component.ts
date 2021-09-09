import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biodata',
  template:`
  <h1 style="color:red">{{title}}</h1>
  <p><strong>Name:</strong>{{name}}</p>
  <p><strong>Email :</strong>{{email}}</p>
  <p><strong>Address :-:</strong>{{address.street}},{{address.city}},{{address.district}},{{address.postalpin}}
  </p>
  <button (click)="toggleHobbies()">{{showHobbies? "Hide":"Get My Hobby"}}</button>
  <div *ngIf="showHobbies">
     <p><strong>My hobbies :-:</strong></p>
      <ul>
        <li *ngFor="let hobby of hobbies;let i=index">{{hobby}}
        <button (click)="deleteHobby(i)">X</button></li>
      </ul>
      <form (submit)="addHobby(hobby.value)">
        <label>Edit Hobby:</label><br/>
        <input type="text" #hobby />
      </form>
  </div>
  <form>
  <label>Name:</label><br/>
  <input type="text" name="name" [(ngModel)]="name"/><br/>
  <label>Email:</label>
  <input type="text" name="email" [(ngModel)]="email"/>
  </form>
  <hr />
  `
})
export class BiodataComponent implements OnInit {
        title:string;
        name:string;
        email:string;
        address:address;
        hobbies:string[];
        showHobbies:boolean;
        
  constructor() { 
          this.title="Bio-Data";
          this.name="Suraj Kumar";
          this.email="Surajkumar.kumar@gmail.com";
          this.address={
            street:'DoddaneKundi',
            city:"Bengaluru Urban",
            district:"Bangalore",
            postalpin:'560037'
          };
          this.hobbies=["Music","Code","Travel","Trekking"];  
          this.showHobbies=false;
      }

      toggleHobbies(){
        if (this.showHobbies==true)
            this.showHobbies=false;
          else 
            this.showHobbies=true;
      }
      addHobby(hobby){
            this.hobbies.push(hobby);
      }
      deleteHobby(i){
        this.hobbies.splice(i,1);
      }

    ngOnInit(): void {
    }
}
interface address{
  street:string;
  city:string;
  district:string;
  postalpin:string;
}
