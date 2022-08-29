import React from "react";
import styled from "styled-components";
import { DISPLAY_MODE_DAY, DISPLAY_MODE_MONTH } from "../../helpers/constants";
const DivWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  background-color: #1e1f21;
  color: #dddddd;
  padding: 16px;
  position: relative;
`;
const TextWrapper = styled("span")`
  color: #e6e6e6;
`;
const Titlewrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
  margin-left: 8px;
`;
const ButtonsWrapper = styled("div")`
  display: flex;
  align-items: center;
`;
const ButtonsCenterWrapper = styled("ButtonsWrapper")`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  display: flex;
`;
const ButtonWrapper = styled("button")`
  border: unset;
  background-color: ${(props) => (props.unPresses ? "#27282A" : "#565759")};
  border: 1px solid #565759;
  height: 28px;
  border-radius: 4px;
  color: ${(props) => (props.unPresses ? "#a4a6a9" : "#E6E6")} #e6e6e6;
  outline: unset;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 2px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TodayButton = styled(ButtonWrapper)`
  font-weight: bold;
`;
const Monitor = ({
  today,
  prevHandler,
  todayHandler,
  nextHandler,
  setDisplayMode,
  displayMode,
}) => {
  return (
    <DivWrapper>
      <div>
        {
          displayMode === DISPLAY_MODE_DAY ? (
        <TextWrapper> {today.format("DD")}</TextWrapper>
          ):null
        }
        <Titlewrapper>{today.format("MMMM")}</Titlewrapper> 
        <TextWrapper>{today.format("YYYY")}</TextWrapper>
      </div>
      <ButtonsCenterWrapper>
        <ButtonWrapper
          unPresses={displayMode === DISPLAY_MODE_MONTH}
          onClick={() => setDisplayMode(DISPLAY_MODE_MONTH)}
        >
          Month
        </ButtonWrapper>
        <ButtonWrapper
          unPresses={displayMode === DISPLAY_MODE_DAY}
          onClick={() => setDisplayMode(DISPLAY_MODE_DAY)}
        >
          Day
        </ButtonWrapper>
      </ButtonsCenterWrapper>
      <ButtonsWrapper>
        <ButtonWrapper onClick={prevHandler}>&lt;</ButtonWrapper>
        <TodayButton onClick={todayHandler}>Today</TodayButton>
        <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
      </ButtonsWrapper>
    </DivWrapper>
  );
};

export default Monitor;
