import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* grid-template-rows: repeat(6, 1fr); */
  grid-gap: 1.1px;
  background-color: ${(props) => (props.isHeader ? "#1E1F21" : "#4D4C4D")};
  ${(props) => props.isHeader && "border-bottom: 1px solid #4D4C4D"}
`;
const CellWrapper = styled.div`
  min-height: ${(props) => (props.isHeader ? 24 : 80)}px;
  min-width: 148px;
  background-color: ${(props) => (props.isWeekend ? "#272829" : "#1E1F21")};
  color: ${(props) => (props.isSelectedMonth ? "#DDDDDD" : "#555759")};
`;
const RowInCell = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : "flex-start"};
${props => props.pr && `padding-right: ${props.pr * 8}px`}
`;

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;

const CurrentDay = styled("div")`
  height: 100%;
  width: 100%;
  background: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarGrid = ({ startDay ,today, totalDays}) => {
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");
  const day = startDay.clone().subtract(1, "day");
const daysMap =[...Array(totalDays)].map(() => day.add(1, 'day').clone())
  // const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  // console.log(daysArray);
  return (
    <>
      <GridWrapper isHeader>
        {[...Array(7)].map((_, i) => (
           

             <CellWrapper isHeader isSelectedMonth>
               <RowInCell justifyContent={"flex-end"} pr={1}>
               { moment().day(i + 1).format('ddd')}
                </RowInCell>
               </CellWrapper>
          
        ))}
      </GridWrapper>
      <GridWrapper>
        {daysMap.map((dayItem) => (
          <CellWrapper
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)} 
          >
            <RowInCell justifyContent={"flex-end"}>
              <DayWrapper>
                {!isCurrentDay(dayItem) && dayItem.format("D")}
                {isCurrentDay(dayItem) && (
                  <CurrentDay>{dayItem.format("D")} </CurrentDay>
                )}
              </DayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </>
  );
};
//referferferfer
export default CalendarGrid;
