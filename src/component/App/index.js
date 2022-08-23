import { useEffect, useState } from "react";
import CalendarGrid from "../CalendarGrid";
import Monitor from "../Monitor";
import moment from "moment";
import styled from "styled-components";
import Title from "../Title";

const ShadowWrapper = styled("div")`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`;

function App() {
  moment.updateLocale("en", { week: { dow: 1 } });
  // const today =moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  window.moment = moment;

  const prevHandler = () => {
    console.log("prev");
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const todayHandler = () => {
    setToday(moment());
  };
  const nextHandler = () => {
    console.log("next");
    setToday((prev) => prev.clone().add(1, "month"));
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/events")
      .then((res) => res.json())
      .then((res) => {
        console.log("Response", res);
        setEvents(res);
      });
  }, []);

  return (
    <ShadowWrapper>
      <Title />
      <Monitor
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
        today={today}
      />
      <CalendarGrid startDay={startDay} today={today} />
    </ShadowWrapper>
  );
}

export default App;
