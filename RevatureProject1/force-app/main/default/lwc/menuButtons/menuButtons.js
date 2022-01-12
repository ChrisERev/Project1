import { api, LightningElement, track } from "lwc";

    export default class App extends LightningElement {
    @api
    buttonText="Menu Item";
    
    @api
    url="https://www.google.com";


}