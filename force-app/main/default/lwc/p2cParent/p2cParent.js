import {LightningElement} from 'lwc';

export default class P2cParent extends LightningElement {
    

    percentage=10;

    changeHandler(event){
        this.percentage=event.target.value
    }

//calling child from parent(programatic communication)
    handleClick(){
        this.template.querySelector('c-p2c-child[data-id="sliderChild"]').resetSlider();
    }

}