import React from 'react'
import CalendarGrid from '../CalendarGrid'
import Header from '../Header'
import Monitor from '../Monitor'
import moment from "moment";
import styled from 'styled-components';
import Title from '../Title';

const ShadowWrapper = styled('div')`
border-top:1px solid #737374 ;
border-left: 1px solid #464648;
border-right: 1px solid #464648;
border-bottom: 2px solid #464648;
border-radius: 8px;
overflow: hidden;
box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`


function index() {
  moment.updateLocale("en", { week: { dow: 1 } });
  const today =moment() 
  const startDay = today.clone().startOf("month").startOf("week");
// window.moment = moment;
  return (
    <ShadowWrapper>
        <Title/>
        <Monitor today={today}/>
        <CalendarGrid startDay={startDay}/>
    </ShadowWrapper>
  )
}

export default index