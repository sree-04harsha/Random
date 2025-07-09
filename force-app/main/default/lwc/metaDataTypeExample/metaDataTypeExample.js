import { LightningElement, wire } from 'lwc';
import getMetaData from '@salesforce/apex/AccountMetaDataTypeExample.getMetaData';
export default class MetaDataTypeExample extends LightningElement {
  records="";
 error="";

    @wire(getMetaData)
    metaData({data,error}){
        if(data){
            this.records=data;
            this.error=undefined;
        }
        else{
            this.records=undefined;
            this.error=error;
        }
    };
  
    
}