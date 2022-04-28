import React from "react";
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
  background-color: ${props => props.isWeekend ? '#272829' : '#1E1F21'};
  color: #dddcdd;
`;
const RowInCell = styled.div`
display: flex;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

const DayWrapper = styled.div`
height: 33px;
width: 33px;
display: flex;
align-items: center;
justify-content: center;
`;
const CalendarGrid = ({startDay}) => {
  const day = startDay.clone().subtract(1, 'day');
  const totalDays = 42;
  const daysArray = [...Array(42)].map(()=> day.add(1, 'day').clone());
  console.log(daysArray);
  return (
      <GridWrapper>
      {daysArray.map((dayItem) => (
        <CellWrapper 
        key={dayItem.format('DDMMYYYY')}
        isWeekend={dayItem.day() === 6 || dayItem.day() ===0}
        >
          <RowInCell 
         justifyContent={'flex-end'}
          >
            <DayWrapper>
                {dayItem.format('D')} 
            </DayWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
      </GridWrapper>
  );
};

export default CalendarGrid;
