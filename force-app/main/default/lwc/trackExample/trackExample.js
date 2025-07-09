import { LightningElement, track } from 'lwc';

export default class TrackExample extends LightningElement {
    //without track

    movie={
        name:'sahoo',
        actor:'prabhas',
        type:'action'
    };

    changeMovie(event){
        this.movie.type=event.target.value;
    }
    

    //with Track
    @track
    details={
        name:'Harsha',
        place:'Bangalore',
        food:'Pizza'
    };
    

    changeFood(event){
        this.details.food=event.target.value;
    }



}