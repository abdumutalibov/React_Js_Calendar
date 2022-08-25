import React from "react";
import styled from "styled-components";
const DivWrapper =styled('div')`
display: flex;
justify-content: space-between;
background-color: #1E1F21;

`
const TextWrapper = styled('span')`
font-size: 32px;
color: #E6E6E6;

`
const Titlewrapper= styled(TextWrapper)`
font-weight: bold;
margin-right: 8px;
color: #E6E6E6;
`

const ButtonsWrapper = styled('div')`
display: flex;
align-items: center;
`

const ButtonsCenterWrapper = styled('ButtonsWrapper')`
position: absolute;
top: 50%;
right: 50%;
transform: translate(50%, -50%);
`

const ButtonWrapper = styled('button')`
border: unset;
background-color: ${props => props.unPresses ? '#27282A':'#565759'};
border: 1px solid #565759;
height: 28px;
border-radius: 4px;
color: ${props => props.unPresses ? '#a4a6a9' :'#E6E6'} #E6E6E6;
outline:unset;
cursor: pointer;
&:not(:last-child){
  margin-right: 2px;
}
display: flex;
justify-content: center;
align-items: center;
`

const TodayButton = styled(ButtonWrapper)`

font-weight: bold;
`
const Monitor = ({today, prevHandler,todayHandler,nextHandler,setDisplayMode,displayMode}) => {
  return (
  <DivWrapper>
    <div>
      <Titlewrapper>{today.format('MMMM')}</Titlewrapper>
      <TextWrapper>{today.format('YYYY')}</TextWrapper>
       </div>
       <ButtonsCenterWrapper>
        <ButtonWrapper unPresses={displayMode === 'month'} onClick={() =>setDisplayMode('month')}>Month</ButtonWrapper>
        <ButtonWrapper unPresses={displayMode === 'day'} onClick={() =>setDisplayMode('day')}>Day</ButtonWrapper>
      </ButtonsCenterWrapper>
      <ButtonsWrapper>
        <ButtonWrapper onClick={prevHandler}>&lt;</ButtonWrapper>
        <TodayButton onClick={todayHandler}>Today</TodayButton>
        <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
      </ButtonsWrapper>
   

  </DivWrapper>);
};

export default Monitor;
