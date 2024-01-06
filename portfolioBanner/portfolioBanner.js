import { LightningElement,wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import {getRecord,getFieldValue} from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANYLOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c';
import COMPANYNAME from '@salesforce/schema/Portfolio__c.CompanyName__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';


export default class PortfolioBanner extends LightningElement {

    @api recordId; //= 'a015j00000eGcNJAA0'
    @api linkedinUrl; //= "https://www.linkedin.com/in/simpi-arora/";
    @api trailheadUrl; // = 'https://www.salesforce.com/trailblazer/sarora1';
    @api githubUrl; //= 'https://github.com/simpiarora';

    profilePic = `${PortfolioAssets}/PortfolioAssets/profilepic.png`;
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;

    
    @wire(getRecord, {recordId:'$recordId' , fields:[FULLNAME,COMPANYLOCATION,COMPANYNAME,DESIGNATION]})
    portfolioData;

    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME);
    }

    get companyName(){
        return getFieldValue(this.portfolioData.data , COMPANYNAME);
    }

    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANYLOCATION);
    }

    get designation(){
        return getFieldValue(this.portfolioData.data , DESIGNATION);
    }

}