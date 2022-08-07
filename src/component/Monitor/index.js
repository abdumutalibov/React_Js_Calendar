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


const ButtonWrapper = styled('button')`
border: unset;
background-color: #565759;
height: 20px;
margin-right: 2px;
border-radius: 4px;
color: #E6E6E6;
outline:unset;
cursor: pointer;
`

const TodayButton = styled(ButtonWrapper)`
padding-right: 16px;
padding-left: 16px;
font-weight: bold;
`
const Monitor = ({today, prevHandler,todayHandler,nextHandler}) => {
  return (
  <DivWrapper>
    <div>
      <Titlewrapper>{today.format('MMMM')}</Titlewrapper>
      <TextWrapper>{today.format('YYYY')}</TextWrapper>
       </div>
      <ButtonsWrapper>
        <ButtonWrapper onClick={prevHandler}> &lt;</ButtonWrapper>
        <TodayButton onClick={todayHandler}>Todayjon</TodayButton>
        <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
      </ButtonsWrapper>
   

  </DivWrapper>);
};

export default Monitor;
