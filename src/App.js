import { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const [getalam, setAlam] = useState({
    getTime: "",
    repeat: "",
  });
  // const [days, setDays] = useState(false);
  const [alarm, setAlarm] = useState([]);
  const updateAlarm = () => {
    setAlarm((pre) => {
      return [...pre, getalam];
    });
  };

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  // setInterval(() => {
  //   if (ctime === alarm.getTime) {
  //     console.log("matched");
  //   } else console.log("sleep");
  // }, 1000);
  // console.log(getalam.repeat);
  return (
    <div className="App">
      <h1>{ctime}</h1>
      <input
        type="time"
        value={getalam.getTime}
        onChange={(e) => setAlam({ ...getalam, getTime: e.target.value })}
      />
      <select onChange={(e) => setAlam({ ...getalam, repeat: e.target.value })}>
        <option defaultChecked>Select</option>
        <option>Every Day</option>
        <option>Once</option>
        <option>Mon to Fri</option>
        <option>Custom</option>
      </select>
      {getalam.repeat === "Custom" ? (
        <ul>
          <input type="checkbox" id="day" name="day" value="mon" />
          <label for="day"> Mon</label>
          <br />
          <input type="checkbox" id="day" name="day" value="tue" />
          <label for="day"> Tue</label>
          <br />
          <input type="checkbox" id="day" name="day" value="wed" />
          <label for="day"> Wed</label>
          <br />
          <input type="checkbox" id="day" name="day" value="thu" />
          <label for="day"> Thu</label>
          <br />
          <input type="checkbox" id="day" name="day" value="fri" />
          <label for="day"> Fri</label>
          <br />
          <input type="checkbox" id="day" name="day" value="sa" />
          <label for="day"> Sat</label>
          <br />
          <input type="checkbox" id="day" name="day" value="sun" />
          <label for="day"> Sun</label>
          <br />
        </ul>
      ) : null}
      <br />
      <button onClick={updateAlarm} disabled={!getalam.getTime}>
        Set Alarm
      </button>
      <br />

      {alarm.map((alam, id) => {
        return (
          <div key={id}>
            <h1>
              {id}: Your Alarm time is{alam.getTime} for {alam.repeat}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
