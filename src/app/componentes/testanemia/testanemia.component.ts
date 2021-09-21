import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TestanemiaService } from './testanemia.service';

@Component({
  selector: 'app-testanemia',
  templateUrl: './testanemia.component.html',
  styleUrls: ['./testanemia.component.css']
})

export class TestanemiaComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    edad: new FormControl(''),
    document: new FormControl(''),
    correoElectronico:new FormControl(''),
    eps: new FormControl(''),
    sexo: new FormControl(0),
    hemo: new FormControl(0),
  });
  showAlertNotification = false;
  showAlerta = '';
  constructor(private testanemiaService: TestanemiaService) { }

  ngOnInit(): void {
  }

  onSubmit(data): void {
    console.log( this.profileForm.value.hemo);
    console.log( this.profileForm.value.edad);
    this.testanemiaService.createTestAnemia(this.profileForm.value).subscribe((response) =>{
       
     if (response.status === 200) {
         this.showAlertNotification = true;
         setTimeout(() => {
           this.showAlertNotification = false;
        }, 2000);

       }
      //  if(this.profileForm.value.hemo !== 4 ){
      //    if(this.profileForm.value.edad >1  ){
      //      if(this.profileForm.value.edad <=5){
      //        alert("yeu");

      //      }else{
      //        console.log("fallo edad2");
      //      }

      //    }else{
      //      console.log("fallo la edad");
      //    }

      //  }else{
      //    console.log("fallo en el profile");

      //  }

        if (this.profileForm.value.hemo !== 4 && this.profileForm.value.edad > 1 && this.profileForm.value.edad <= 5 ){
          this.showAlerta = `test anemia : POSITIVO`;

        } else {
          this.showAlerta=`test anemia:NEGAIVO`;
        }
        
        function anemia(event){
         console.log("anemia",event);

        }

    
    } 
    );
  }
    
}




  




