import { LightningElement,api } from 'lwc';

import {NavigationMixin} from 'lightning/navigation';

export default class NavigationMixPractice extends NavigationMixin(LightningElement) {
    @api recordId ;

// Navigate to the Contact new page

navigateToNewContact(){

    this[NavigationMixin.Navigate]({

        type: 'standard__objectPage',

        attributes: {

            objectApiName: 'Contact',

            actionName: 'new'

        },

    });

}

// Navigate to the Contact view page

navigateToViewContact(){

    this[NavigationMixin.Navigate]({

        type: 'standard__recordPage',

        attributes: {

            recordId : this.recordId,

            objectApiName: 'Contact',

            actionName: 'view'

        },

    });

}

// Navigate to the Contact edit page

navigateToEditContact(){

    this[NavigationMixin.Navigate]({

        type: 'standard__recordPage',

        attributes: {

            recordId : this.recordId,

            objectApiName: 'Contact',

            actionName: 'edit'

        },

    });

}

}