

export const time = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    week: 1,

    get getYear(){
        return this.year;
    },

    get getMonth(){
        return this.month;
    },

    get getWeek(){
        return this.week;
    },

    set changeYear(newYear){
        this.year = newYear;
    },

    set changeMonth(newMonth){
        this.month = newMonth;
    },

    set changeWeek(newWeek){
        this.week = newWeek;
    }
};