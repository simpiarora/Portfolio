import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SF_CERT_FIELD from '@salesforce/schema/Portfolio__c.Salesforce_Certifications__c';
import OTHER_CERT_FIELD from '@salesforce/schema/Portfolio__c.Other_Certifications__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioCertifications extends LightningElement {

    certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`;
    sfCertsList = [];
    otherCertsList = [];

    @api recordId;

    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SF_CERT_FIELD,OTHER_CERT_FIELD]
    })certsHandler({data,error}){
        if(data){
            console.log(data)
            this.formatData(data);
        }else{
            console.error(error)
        }
    }

    formatData(data){
       const{Salesforce_Certifications__c , Other_Certifications__c} = data.fields;
       this.sfCertsList = Salesforce_Certifications__c ? Salesforce_Certifications__c.value.split(';').map(item=>{
        return `${item}`
       }) : [];
       this.otherCertsList = Other_Certifications__c ? Other_Certifications__c.value.split(',') : [];

    }

}