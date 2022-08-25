import React from "react";
import styled from "styled-components";
import { isDayContainCurrentEvent } from "../../helpers";
const DayShowWrapper = styled('div')`
display: flex;
flex-grow: 1;
`;

 const EventListWrapper = styled("ul")`
margin: 0;
padding: 0;
list-style: none;
`;
const EventFormWrapper = styled('div')`
background-color: #27282A;
color: #DDDDDD;
width: 300px;
position: relative;
`
 const EventListItemWrapper = styled('li')`
padding-left: 2px;
padding-right: 2px;
margin-bottom: 2px;
display: flex;
`
 const EventItemWrapper = styled('button')`
position: relative;
flex-grow: 1;
text-overflow: ellipsis;
overflow: hidden;
width: 114px;
border: unset;
color: #DDDDDD;
cursor: pointer;
margin: 0;
padding: 0;
text-align: left;
background-color: #5d5f63;
border: 1px solid #5d5f63;
border-radius: 2px;
`
const NoEventMsg = styled('div')`
color: #565755;
position: absolute;
top: 50%;
right: 50%;
transform: translate(50%, -50%);

`

export const DayShowComponent = ({ events, today ,selectedEvent ,setEvent}) => {
  const eventList = events.filter((event) =>
    isDayContainCurrentEvent(event, today)
  );
  return (
    <DayShowWrapper>
      <EventListWrapper>
        <EventListWrapper>
          {eventList.map((event) => (
            <EventListItemWrapper key={event.id}>
              <EventItemWrapper onClick={() => setEvent(event)}>
                {event.title}
                </EventItemWrapper>
            </EventListItemWrapper>
          ))
          }
        </EventListWrapper>
      </EventListWrapper>
      <EventFormWrapper>
        {
            selectedEvent ? (
                <div>
                    <h3>
                        {
                            selectedEvent.title
                        }
                    </h3>
                </div>
            ):(
                <NoEventMsg>No event selected</NoEventMsg>
            )
        }
      </EventFormWrapper>
    </DayShowWrapper>
  );
};
