import React from "react";
import { isDayContainCurrentEvent } from "../../helpers";

import { CalendarCell } from "../CalendarCell";

export const MonthDaysList = ({
  startDay,
  totalDays,
  events,
  openFormHandler,
  today,
  setDisplayMode,
}) => {
  const day = startDay.clone().subtract(1, "day");
  const daysMap = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  return (
    <>
      {daysMap.map((dayItem) => (
        <CalendarCell
          today={today}
          dayItem={dayItem}
          openFormHandler={openFormHandler}
          events={events.filter((event) =>
            isDayContainCurrentEvent(event, dayItem)
          )}
          setDisplayMode={setDisplayMode}
        />
      ))}
    </>
  );
};
