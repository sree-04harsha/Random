import { LightningElement,api } from 'lwc';

export default class P2cChild extends LightningElement {
     //making the fields into public so that we can use it in another component
     @api message; //parent to child with primitive data
     @api cardTitle;
     @api isValid;
     @api number;

//non-primitive data communication (progress bar)
     @api progressValue

//programatic communication(slide bar)
     val=20

     changeHandler(event){
         this.val=event.target.value
     }
 
     @api
     resetSlider(){
         this.val=50;
     }
 
}