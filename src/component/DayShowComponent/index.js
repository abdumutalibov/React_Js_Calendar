import React from "react";
import styled from "styled-components";
import {
  ButtonsWrapper,
  ButtonWrapper,
  EventBody,
  EventTitle,
} from "../../containers/StyledComponent";
import { isDayContainCurrentEvent } from "../../helpers";
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
  return (
    <DayShowWrapper>
      <EventListWrapper>
        <EventListWrapper>
          {eventList.map((event) => (
            <EventListItemWrapper key={event.id}>
              <EventItemWrapper onClick={() => openFormHandler('Update',event)}>
                {event.title}
              </EventItemWrapper>
            </EventListItemWrapper>
          ))}
        </EventListWrapper>
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
            <button onClick={() => openFormHandler('Create', null,today)}>Create new event</button>
          </div>
          <NoEventMsg>No event selected</NoEventMsg>
          </>
        )}
      </EventFormWrapper>
    </DayShowWrapper>
  );
};
