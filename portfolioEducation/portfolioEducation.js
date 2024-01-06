import { LightningElement, api, wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
const COLUMNS = [
    { label: 'Education', fieldName: 'education' },
    { label: 'Institution Name', fieldName: 'institution' },
    { label: 'Passing Year', fieldName: 'passingYear' }
];

export default class PortfolioEducation extends LightningElement {

    tableData = [];
    columns = COLUMNS;
    @api recordId;

    @wire(getRelatedListRecords , {
        parentRecordId:"$recordId",
        relatedListId:'Educations__r',
        fields:['Education__c.Institution_Name__c' , 'Education__c.Passing_Year__c' , 'Education__c.Title__c'],
        sortBy:['Education__c.Passing_Year__c']
    })EducationHandler({data,error}){
        if(data){
            //console.log(JSON.stringify(data));
            this.formatData(data);
        }else{
            console.error(error);
        }
    }

    formatData(data){
        this.tableData = [...data.records].reverse().map(item=>{
            let id = item.id
            const {Institution_Name__c , Passing_Year__c, Title__c} = item.fields
            let education = Title__c.value
            let institution = Institution_Name__c.value
            let passingYear = Passing_Year__c.value
            return{
                id,education,institution,passingYear
            }
        })
        console.log(this.tableData);
    }

}