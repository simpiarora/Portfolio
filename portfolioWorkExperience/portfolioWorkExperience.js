import { LightningElement, api, wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class PortfolioWorkExperience extends LightningElement {

    @api recordId;
    workExperienceList = [];

    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId:'Work_Experience__r',
        fields:['Work_Experience__c.Start_Date__c',
        'Work_Experience__c.End_Date__c',
        'Work_Experience__c.Role__c',
        'Work_Experience__c.Company_Name__c',
        'Work_Experience__c.Work_Location__c',
        'Work_Experience__c.Description__c',
        'Work_Experience__c.Currently_Working__c',
        ]
    })WorkExperienceHandler({data , error}){
        if(data){
            console.log("wora" , JSON.stringify(data))
            this.formatExperience(data)
        }
        if(error){
            console.error(error)
        }
    }

    formatExperience(data){
        this.workExperienceList = [...data.records].reverse().map(item => {
            let id = item.id
            const {Start_Date__c ,End_Date__c,Role__c,Company_Name__c,Work_Location__c,Description__c,Currently_Working__c } = item.fields
            let StartDate = this.getValue(Start_Date__c);
            let EndDate = this.getValue(End_Date__c);
            let Role = this.getValue(Role__c);
            let CompanyName = this.getValue(Company_Name__c);
            let WorkLocation = this.getValue(Work_Location__c);
            let Description = this.getValue(Description__c);
            let CurrentlyWorking = this.getValue(Currently_Working__c);

            return {id,StartDate,EndDate,Role,CompanyName,WorkLocation,Description,CurrentlyWorking};
        })
        console.log("workExperienceList" , JSON.stringify(this.workExperienceList));
    }

    getValue(data){
        return data.displayValue || data.value;
    }

}