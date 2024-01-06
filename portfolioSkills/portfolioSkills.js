import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECHNICAL_SKILLS from '@salesforce/schema/Portfolio__c.Technical_Skills__c';
import SOFTWARE_TOOLS from '@salesforce/schema/Portfolio__c.Software_Tools__c';
import METHODOLOGIES from '@salesforce/schema/Portfolio__c.Methodologies__c';

export default class PortfolioSkills extends LightningElement {

    techSkills = [];
    softwareTools = [];
    methodologies = [];

    @api recordId;

    @wire(getRecord,{
        recordId:'$recordId',
        fields:[TECHNICAL_SKILLS,SOFTWARE_TOOLS,METHODOLOGIES]
    })skillHandler({data,error}){
        if(data){
            this.formatSkills(data);
        }else{
            console.error(error);
        }
    }

    formatSkills(data){
        const {Technical_Skills__c,Software_Tools__c,Methodologies__c} = data.fields;
        this.techSkills = Technical_Skills__c ? Technical_Skills__c.value.split(','):[];
        this.softwareTools = Software_Tools__c ? Software_Tools__c.value.split(','):[];
        this.methodologies = Methodologies__c ? Methodologies__c.value.split(','):[];
    }
}