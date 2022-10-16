import moment from "moment";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  ButtonsWrapper,
  ButtonWrapper,
  EventBody,
  EventTitle,
} from "../../containers/StyledComponent";
import {
  isDayContainCurrentEvent,
  isDayContainCurrentTimestamp,
} from "../../helpers";
import { ITEMS_REP_DAY, ONE_SECOND } from "../../helpers/constants";
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
  position: relative;
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

const SelectEventTimeWrapper = styled("div")`
  padding: 8px 14px;
  border-bottom: 1px solid #464648;
  display: flex;
`;

const ListOfHours = styled("ul")`
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 60px;
  overflow-y: scroll;
  color: #000;
  position: absolute;
  left: 2px;
  background-color: rgb(239, 239, 239);
`;
const PositionRelative = styled("div")`
  position: relative;
`;
const HoursButton = styled("button")`
  border: none;
  background-color: unset;
  cursor: pointer;
`;

const RedLine = styled(`div`)`
  background-color: #f00;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => props.position}%;
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
  const [showTimePicker, setShowTimePicker] = useState(false);
  const cells = [...new Array(ITEMS_REP_DAY)].map((_, i) => {
    const temp = [];
    eventList.forEach((event) => {
      if (+moment.unix(+event.date).format("H") === i) {
        temp.push(event);
      }
    });
    return temp;
  });

  const setTimeForEvent = (i) => {
    setShowTimePicker(false);
    const time = moment
      .unix(+selectedEvent.date)
      .hour(i)
      .format("X");
    changeEventHandler(time, "date");
  };
  const getRedLinePosition = () =>
    ((moment().format("X") - today.format("X")) / 86400) * 100;

  const [, setCounter] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, ONE_SECOND);

    return () => clearInterval(timerId);
  }, []);

  return (
    <DayShowWrapper>
      <EventListWrapper>
        <ScaleWrapper>
          {isDayContainCurrentTimestamp(moment().format("X"), today) ? (
            <RedLine position={getRedLinePosition} />
          ) : null}

          {cells.map((eventsList, i) => (
            <ScaleCellWrapper>
              <ScaleCellTimeWrapper>
                {i ? <>{`${i}`.padStart(2, "0")}:00</> : null}
              </ScaleCellTimeWrapper>
              <ScaleCellEventWrapper>
                {eventsList.map((event) => (
                  <EventItemButton
                    onClick={() => openFormHandler("Update", event)}
                  >
                    {event.title}
                  </EventItemButton>
                ))}
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
            <SelectEventTimeWrapper>
              <PositionRelative>
                <button>
                  {moment.unix(+selectedEvent.date).format("dddd, D MMMM")}
                </button>
              </PositionRelative>
              <PositionRelative>
                <button
                  onClick={() => setShowTimePicker((prevState) => !prevState)}
                >
                  {moment.unix(+selectedEvent.date).format("HH:mm ")}
                </button>
                {showTimePicker ? (
                  <ListOfHours>
                    {[...new Array(ITEMS_REP_DAY)].map((_, i) => (
                      <li>
                        <HoursButton onClick={() => setTimeForEvent(i)}>
                          {`${i}`.padStart(2, "0")}:00
                        </HoursButton>
                      </li>
                    ))}
                  </ListOfHours>
                ) : null}
              </PositionRelative>
            </SelectEventTimeWrapper>
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
