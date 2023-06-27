import { Component } from '@angular/core';
import { Form } from './form';

@Component({
  selector: 'app-add-spot-button',
  templateUrl: './add-spot-button.component.html',
  styleUrls: ['./add-spot-button.component.css']
})

export class AddSpotButtonComponent {

  isAddOpened: boolean = false;

  clickedOutsideAdd(){
    
    this.isAddOpened = false;
    
  }

  togglerAdd(){
    
    this.isAddOpened = !this.isAddOpened;
    
  }

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  monthHasError = true;

  formModel = new Form('', '', 1, 1.0001, 1.0001, 'default')

  validateMonth(value: string){

    if(value === 'default'){

      this.monthHasError = true;

    } else {

      this.monthHasError = false;

    }
    
  }

  cancel(){

    this.isAddOpened = false;
  }

  onSubmit(){

    console.log(this.formModel);
  }

}
