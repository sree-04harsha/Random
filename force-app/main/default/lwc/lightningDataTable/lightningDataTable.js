import { LightningElement } from 'lwc';

export default class LightningDataTable extends LightningElement {

    data=[{id:1,Name:"Apple",color:"Red"},
          {id:2,Name:"Orange",color:"Orange"}];

    columns=[{
                 label:"Name", //table  header name
                 fieldName:"Name", // mapping the field name from data
                 type:"text"
             },
             {
                label:"Color",  //table  header name
                fieldName:"color", // mapping the field name from data
                type:"text"
            }
        ];




}