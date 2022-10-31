import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {Grid, Row, Col, Box, BoxContent} from "./grid";
import Arrow from "./arrow";
import "./month-calendar.css";
import {time} from "../DataHandler";

const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function getDateOfISOWeek(week, year){
    let date = new Date(year, 0, 1 + (week - 1) * 7);
    let dayOfWeek = date.getDay();
    let weekStart = date;
    if (dayOfWeek <= 4){
        weekStart.setDate(date.getDate() - date.getDay() + 1);
    }
    else{
        weekStart.setDate(date.getDate() + 8 - date.getDay());
    }
    return weekStart;
}

function getWeekDates(weekNum, year){
    let dates = [];
    let date = getDateOfISOWeek(weekNum, year);
    dates.push(date.getDate());

    for(let i = 1; i < 7; i++){
        date.setDate(date.getDate() + 1);
        dates.push(date.getDate());
    }
    return dates;
}

function getTR(row, key){
    return(
        <tr key={key}>
            {row.map((n, index)=> {return <td key={index}>{n}</td>})}
        </tr>
    );
}

function CalendarTable(firstWeek, lastWeek, year) {
    let dates = []

    if (firstWeek > lastWeek){
        dates.push(getWeekDates(firstWeek, year-1));
        firstWeek = 1;
    }

    for(let i = firstWeek; i < lastWeek + 1; i++){
        dates.push(getWeekDates(i, year));
    }


    return (
        <table>
            <thead>
                <tr id="calendar-header">
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                    <th>S</th>
                </tr>
            </thead>
            <tbody>
            {dates.map((n, index)=> {return getTR(n, index)})}
            </tbody>
        </table>
    );
}

export const CalendarElement = (firstWeek, lastWeek) =>{

    return(
        <BoxContent id="main-calendar">
            <Row id="calendar-top">
                <Box bColor={[255,255,255,1].toString()} id="month-name-box">
                    <h1>{Months[time.month]} {time.year}</h1>
                </Box>
            </Row>
            <Row id="calendar-bottom">
                <Box bColor={[255,255,255,1].toString()}>
                    {CalendarTable(firstWeek, lastWeek, time.year)}
                </Box>
            </Row>
        </BoxContent>
    );
}

