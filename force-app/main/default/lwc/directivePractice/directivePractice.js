import { LightningElement } from 'lwc';

export default class DirectivePractice extends LightningElement {


    isVisible=false;

    click(){
        this.isVisible=!this.isVisible;
    }
}