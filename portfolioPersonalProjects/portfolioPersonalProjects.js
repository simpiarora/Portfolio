import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`;
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`;
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`;
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`;
    //Survey = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`;
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`;

    projects=[
        {
            "name":"BMI Calculator App",
            "img" : this.BMICalculator,
            "link" : "https://simpiarora-dev-ed.develop.my.site.com/bmi-calculator"
        },
        {
            "name":"Alarm Clock App",
            "img" : this.AlarmClock,
            "link" : "https://simpiarora-dev-ed.develop.my.site.com/alarm-clock"
        },
        {
            "name":"Currency Convertor App",
            "img" : this.CurrencyCalculator,
            "link" : "https://simpiarora-dev-ed.develop.my.site.com/currency-converter"
        },
        {
            "name":"Weather App",
            "img" : this.WeatherApp,
            "link" : "https://simpiarora-dev-ed.develop.my.site.com/weather-app"
        },
        {
            "name":"Note Taking App",
            "img" : this.NoteApp,
            "link" : "https://simpiarora-dev-ed.develop.my.site.com/note-taking-app"
        }
    ]
}