import React, { useState } from "react";
import styled from "styled-components";
import CalendarGridHeader from "../CalendarGridHeader";
import { MonthDaysList } from "../MonthDaysList";
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* grid-template-rows: repeat(6, 1fr); */
  grid-gap: 1.1px;
  background-color: ${(props) => (props.isHeader ? "#1E1F21" : "#4D4C4D")};
  ${(props) => props.isHeader && "border-bottom: 1px solid #4D4C4D"}
`;



const CalendarGrid = ({ startDay, today, totalDays, events, openFormHandler,setDisplayMode }) => {


  // const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  // console.log(daysArray);
  return (
    <>
      <GridWrapper isHeader>
    <CalendarGridHeader/>
      </GridWrapper>
      <GridWrapper>
 <MonthDaysList totalDays={totalDays} openFormHandler={openFormHandler} events={events} startDay={startDay} today={today} setDisplayMode={setDisplayMode}/>
      </GridWrapper>
    </>
  );
};
//referferferfer
export default CalendarGrid;
