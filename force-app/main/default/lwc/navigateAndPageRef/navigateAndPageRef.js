import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';

import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigateAndPageRef extends NavigationMixin(LightningElement) {

    navigateToNewContactWithDefaultValues() {

        const defaultValues = encodeDefaultFieldValues({

            FirstName: 'TestFName',   //so  when we creating the record  it will be filled with this value by default

            LastName: 'TestLName'

       

        });

        console.log(defaultValues);

 

        this[NavigationMixin.Navigate]({

            type: 'standard__objectPage',

            attributes: {

                objectApiName: 'Contact',

                actionName: 'new'

            },

            state: {

                defaultFieldValues: defaultValues

            }

        });

    }

}