import { LightningElement, track } from 'lwc';

import getProductList from '@salesforce/apex/customSearchController.getProductList';

import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ProductFilter extends LightningElement {

    @track products;
    sVal = '';

    updateSearchKey(event){
        this.sVal = event.target.value;
    }

    handleSearch(){
        if(this.sval !== ''){
            getProductList({searchKey: this.sVal})
            .then(result => {this.products = result;})

            .catch(error => {const event = new ShowToastEvent({
                title: 'Error',
                variant: 'error',
                message: error.body.message,
            });
            this.dispatchEvent(event);
            this.products=null;
            });
        }

        else{
            const event = new ShowToastEvent({
                variant: 'error',
                message: 'Search text missing.'
            })
            this.dispatchEvent(event);

        }
    }

}