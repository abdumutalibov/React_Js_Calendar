import moment from "moment";
import React from "react";
import styled from "styled-components";
import {
  ButtonsWrapper,
  ButtonWrapper,
  EventBody,
  EventTitle,
} from "../../containers/StyledComponent";
import { isDayContainCurrentEvent } from "../../helpers";
import { ITEMS_REP_DAY } from "../../helpers/constants";
const DayShowWrapper = styled("div")`
  display: flex;
  flex-grow: 1;
  border-top: 1px solid #464648;
`;

const EventListWrapper = styled("ul")`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #1e1f21;
  color: #dddddd;
  flex-grow: 1;
`;
const EventFormWrapper = styled("div")`
  background-color: #27282a;
  color: #dddddd;
  width: 300px;
  position: relative;
  border-left: 1px solid #464648;
`;
const EventListItemWrapper = styled("li")`
  padding-left: 2px;
  padding-right: 2px;
  margin-bottom: 2px;
  display: flex;
`;
const EventItemWrapper = styled("button")`
  position: relative;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 114px;
  border: unset;
  color: #dddddd;
  cursor: pointer;
  margin: 0;
  padding: 0;
  text-align: left;
  background-color: #5d5f63;
  border: 1px solid #5d5f63;
  border-radius: 2px;
`;
const NoEventMsg = styled("div")`
  color: #565755;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
const ScaleWrapper = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 4px;
`;

const ScaleCellWrapper = styled("div")`
  flex-grow: 1;
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid #464648;
  }
  margin-left: 32px;
`;

const ScaleCellTimeWrapper = styled("div")`
  position: absolute;
  left: -26px;
  top: -6px;
  font-size: 8px;
`;

const ScaleCellEventWrapper = styled("div")`
  min-height: 16px;
`;

const EventItemButton = styled(EventItemWrapper)`
  min-width: 50px;
  width: unset;
  margin-left: 4px;
`;

export const DayShowComponent = ({
  events,
  today,
  selectedEvent,
  changeEventHandler,
  cancelButtonHandler,
  eventFetchHandler,
  method,
  removeEventHandler,
  openFormHandler,
}) => {
  const eventList = events.filter((event) =>
    isDayContainCurrentEvent(event, today)
  );

  const cells = [...new Array(ITEMS_REP_DAY)].map((_, i) => {
    const temp = [];
    eventList.forEach((event) => {
      if (+moment.unix(+event.date).format("H") === i) {
        temp.push(event);
      }
    });
    return temp;
  });

  return (
    <DayShowWrapper>
      <EventListWrapper>
        {/* <EventListWrapper>
          {eventList.map((event) => (
            <EventListItemWrapper key={event.id}>
              <EventItemWrapper onClick={() => openFormHandler('Update',event)}>
                {event.title}
              </EventItemWrapper>
            </EventListItemWrapper>
          ))}
        </EventListWrapper> */}
        <ScaleWrapper>
          {cells.map((eventsList, i) => (
            <ScaleCellWrapper>
              <ScaleCellTimeWrapper>
                {i ? <>{`${i}`.padStart(2, "0")}:00</> : null}
              </ScaleCellTimeWrapper>
              <ScaleCellEventWrapper>
               {
              eventsList.map(event => (
                <EventItemButton onClick={() => openFormHandler("Update", event)}>
                  {event.title}
                </EventItemButton>
              ))
               }
                </ScaleCellEventWrapper>
            </ScaleCellWrapper>
          ))}
        </ScaleWrapper>
      </EventListWrapper>
      <EventFormWrapper>
        {selectedEvent ? (
          <div>
            <EventTitle
              value={selectedEvent.title}
              onChange={(e) => changeEventHandler(e.target.value, "title")}
              placeholder="Title"
            />
            <EventBody
              value={selectedEvent.description}
              onChange={(e) =>
                changeEventHandler(e.target.value, "description")
              }
              placeholder="Description"
            />
            <ButtonWrapper>
              <ButtonsWrapper onClick={cancelButtonHandler}>
                Cancel{" "}
              </ButtonsWrapper>
              <ButtonsWrapper onClick={eventFetchHandler}>
                {method}
              </ButtonsWrapper>
              {method === "Update" ? (
                <ButtonsWrapper danger onClick={removeEventHandler}>
                  Remove
                </ButtonsWrapper>
              ) : null}
            </ButtonWrapper>
          </div>
        ) : (
          <>
            <div>
              <button onClick={() => openFormHandler("Create", null, today)}>
                Create new event
              </button>
            </div>
            <NoEventMsg>No event selected</NoEventMsg>
          </>
        )}
      </EventFormWrapper>
    </DayShowWrapper>
  );
};
