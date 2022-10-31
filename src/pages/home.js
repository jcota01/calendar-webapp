import React from 'react';
import {time} from "../DataHandler";
import "../components/month-calendar.css";
import {Box, Col, Grid, Row} from "../components/grid";
import Arrow from "../components/arrow";
import {CalendarElement} from "../components/month-calendar";


Date.prototype.getWeek = function (){
    let jan1, w, d = new Date(this);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    jan1 = new Date(d.getFullYear(), 0, 1);
    w = Math.ceil((((d-jan1)/86400000)+1)/7);
    return w;
}

function changeMonth(offset){
    let month = time.month;
    let year = time.year;

    month += offset;

    if(month === -1){
        month = 11;
        year -= 1;
    }

    else if (month === 12){
        month = 0;
        year += 1;
    }

    return { month, year };
}


export const Home = () =>{
    const [,updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    function moveMonth(offset){
        let { month, year } = changeMonth(offset);
        time.changeMonth = month;
        time.changeYear = year;

        forceUpdate();
    }

    const firstDay = new Date(time.year, time.month, 1);
    let firstWeekNum = firstDay.getWeek();
    const lastDay = new Date(time.year, time.month +1, 0);
    let lastWeekNum = lastDay.getWeek();

    return (
        <Grid>
            <Row>
                <Col size={1} className="previous">
                    <div onClick={() => moveMonth(-1)}>
                        <Box bColor={[0,0,0,0.5].toString()} className="box">
                            <Arrow />
                        </Box>
                    </div>
                </Col>
                <Col size={8} id="calendar">
                    {CalendarElement(firstWeekNum, lastWeekNum)}
                </Col>
                <Col size={1} className="next">
                    <div onClick={() => moveMonth(1)}>
                        <Box bColor={[0,0,0,0.5].toString()} className="box">
                            <Arrow />
                        </Box>
                    </div>
                </Col>
            </Row>
            <Row>
                hello
            </Row>
            <Row>
                <Col size={1}>

                </Col>
                <Col size={8}>

                </Col>
                <Col size={1}>

                </Col>
            </Row>
        </Grid>
    );
}