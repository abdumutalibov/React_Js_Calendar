import logo from "./logo.svg";
import "./App.css";
import moment from "moment";
function App() {
  
  moment.updateLocale("en", { week: { dow: 1 } });
  const startDay = moment().startOf("month").startOf("week");
  const endDay = moment().endOf("month").endOf("week");
  console.log(startDay.format("YYYY-MM-DD"));
  console.log(endDay.format("YYYY-MM-DD"));

 
  const calender = [];
  const day = startDay;


  while (!day.isAfter(endDay)) {
    calender.push(day.clone);
    day.add(1, "day");
  }
console.log(calender);
 window.startDay = startDay
  window.endDay = endDay
window.moment = moment;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
