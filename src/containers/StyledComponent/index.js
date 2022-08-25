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

