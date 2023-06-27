import { Component } from '@angular/core';
import { MobileForm } from './mobile-form';

@Component({
  selector: 'app-mobile-add-spot',
  templateUrl: './mobile-add-spot.component.html',
  styleUrls: ['./mobile-add-spot.component.css']
})
export class MobileAddSpotComponent {

  isAddOpened: boolean = true;

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  monthHasError = true;

  formModel = new MobileForm('', '', 1, 1.1234, 1.1234, 'default');

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
