import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c';
import AWARD_FIELD from '@salesforce/schema/Portfolio__c.Awards__c';
import LANGUAGE_FIELD from '@salesforce/schema/Portfolio__c.Languages__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';


export default class PortfolioOtherDetails extends LightningElement {
    superbadges = [];
    languages = [];
    awards = [];
    awardIcon = `${PortfolioAssets}/PortfolioAssets/trophy.png`;
    languageIcon = `${PortfolioAssets}/PortfolioAssets/language.png`;
    superbadgeIcon = `${PortfolioAssets}/PortfolioAssets/badge.png`;


    @api recordId;

    @wire(getRecord , {
        recordId : '$recordId',
        fields : [SUPERBADGE_FIELD , AWARD_FIELD , LANGUAGE_FIELD ]
    })otherFieldsHandler({data , error}){
        if(data){
            this.formatData(data)
        }else{
            console.log(error)
        }
    }

    formatData(data){
        const {Awards__c , Languages__c , Superbadges__c} = data.fields;
        this.awards = Awards__c && Awards__c.value ? Awards__c.value.split(',') : [];
        this.languages = Languages__c && Languages__c.value ? Languages__c.value.split(',') : [];
        this.superbadges = Superbadges__c && Superbadges__c.value ? Superbadges__c.value.split(';') : [];
    }
}