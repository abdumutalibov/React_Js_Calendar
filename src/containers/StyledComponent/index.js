import styled from "styled-components";

export const CellWrapper = styled.div`
  min-height: ${(props) => (props.isHeader ? 24 : 94)}px;
  min-width: 148px;
  background-color: ${(props) => (props.isWeekend ? "#272829" : "#1E1F21")};
  color: ${(props) => (props.isSelectedMonth ? "#DDDDDD" : "#555759")};
`;
export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
`;

export const EventTitle = styled("input")`
  padding: 8px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #dddddd;
  outline: unset;
  border-bottom: 1px solid #464648;
`;
export const EventBody = styled("textarea")`
  padding: 8px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #dddddd;
  outline: unset;
  border-bottom: 1px solid #464648;
  resize: none;
  height: 60px;
`;
export const ButtonWrapper = styled("div")`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
`;
export const ButtonsWrapper = styled("button")`
  color: ${(props) => (props.danger ? "#f00" : "#27282A")};
  border: 1px solid ${(props) => (props.danger ? "#f00" : "#27282A")};
  border-radius: 2px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 2px;
  }
`;
