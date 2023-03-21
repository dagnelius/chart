import "./App.css";
import LineChart from "./components/LineChart";
import { Data } from "./Data";
import { useState } from "react";
function App() {
  console.log(Data);
  const [data, setData] = useState({
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "24:00",
    ],
    datasets: [
      {
        label: "Ceļa virsmas temperatūra [act] (C)",
        data: [...Data.map((data) => data.temperature), -0.5],
        borderColor: "red",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Temperatūra -5cm [act] (C)",
        data: [
          ...Data.map(
            (data) => data.temperature - (Math.random() * (0.5 - 0.1) + 0.1)
          ),
          -0.5,
        ],
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Temperatūra -30cm [act] (C)",
        data: [
          ...Data.map((data) => -0.5 - (Math.random() * (0.1 - 0.05) + 0.05)),
        ],
        borderColor: "green",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Sasalšanas temp. NaCl [act] (C)",
        data: [
          ...Data.map((data) => -0.65 - (Math.random() * (0.1 - 0.05) + 0.05)),
        ],
        borderColor: "rgb(255, 230, 0)",
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 1200 }}>
        <LineChart chartData={data} />
      </div>
    </div>
  );
}

export default App;
