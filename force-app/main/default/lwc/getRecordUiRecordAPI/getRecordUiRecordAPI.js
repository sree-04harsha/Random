import { LightningElement ,wire,track} from 'lwc';
import { getRecord} from 'lightning/uiRecordApi';


export default class GetRecordUiRecordAPI extends LightningElement {

    contactRec;

    @wire( getRecord, { recordId:'003NS00000GXFFCYA5', layout:['Full'] })contactRec  //layout is how you want here full means all fiels
                                                                                     // and everything stores in the contactRec

    get lastName(){
      return this.contactRec.getRecord.data.fields.LastName.value; // from wired property going to datathen fields then field name of value
    }
    get title(){
        return this.contactRec.getRecord.data.fields.Title.value;
    }
    get phone(){
        return this.contactRec.getRecord.data.fields.Phone.value;
    }
}