import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background-color: #404040;
  grid-gap: 1.1px;
`;
const CellWrapper = styled.div`
  min-width: 148px;
  min-height: 88px;
  background-color: ${(props) => (props.isWeekend ? "#272829" : "#1E1F21")};
  color: #dddcdd;
`;
const RowInCell = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
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

const isCurrentDay = (day) => moment().isSame(day, 'day');
const CalendarGrid = ({ startDay }) => {
  const day = startDay.clone().subtract(1, "day");
  const totalDays = 42;
 
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  console.log(daysArray);
  return (
    <GridWrapper>
      {daysArray.map((dayItem) => (
        <CellWrapper
        
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
          key={dayItem.unix()}
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
  );
};

export default CalendarGrid;
