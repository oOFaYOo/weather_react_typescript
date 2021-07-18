

interface IWeatherForDay<T> {
    readonly dayOfWeek: string;
    readonly maxTemp: T;
    readonly minTemp: T;
    readonly morning: T;
    readonly day: T;
    readonly evening: T;
    readonly night: T;
    readonly date: Date|string;
    readonly id: T;
}

class WeatherForDay implements IWeatherForDay<number|string> {

    public date: string;
    public dayOfWeek: string;
    public id: string;

    constructor(date: Date,
                public maxTemp: number,
                public minTemp: number,
                public morning: number,
                public day: number,
                public evening: number,
                public night: number) {
        console.log(date);
        this.date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        this.dayOfWeek = WeatherForDay.convertDateToWeekdayName(date);
        this.id = WeatherForDay.convertWeekdayToID(date);
    }

    static convertDateToWeekdayName(date: Date): string {
        switch (date.getDay()) {
            case 0 :
                return "ВС";
            case 1 :
                return "ПН";
            case 2 :
                return "ВТ";
            case 3 :
                return "СР";
            case 4 :
                return "ЧТ";
            case 5 :
                return "ПТ";
            case 6 :
                return "СБ";
            default:
                throw new Error(`Unknown day type: ${date.getDay()}`);
        }
    }
    static convertWeekdayToID(date: Date): string {
        switch (date.getDay()) {
            case 0 :
                return "vs";
            case 1 :
                return "pn";
            case 2 :
                return "vt";
            case 3 :
                return "sr";
            case 4 :
                return "cht";
            case 5 :
                return "pt";
            case 6 :
                return "sb";
            default:
                throw new Error(`Unknown day type: ${date.getDay()}`);
        }
    }
}




export default WeatherForDay;