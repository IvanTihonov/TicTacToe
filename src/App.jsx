import React, {useState} from "react";
import "./App.css";
import Fields from "./Fields/Fields";

function App() {
  const [squares, setSquares] = useState(true);
  const [fields, setFields] = useState(Array(9).fill(""))

    const handleClickCeil = (index) => {
      if (fields[index] || calculateWinner(fields)) {
        return;
      }
      const copyArray = fields.slice();
      if (squares) {
        copyArray[index] = "X";
      } else {
        copyArray[index] = "0";
      }
      setFields(copyArray);
      setSquares(!squares);
    }

      const calculateWinner = (fields) => {
        const lines = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
        ];
        for (let index = 0; index < lines.length; index++) {
         const [a, b, c] = lines[index];
         if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
           return fields[a];
         }
        }
      return null;
    }
      const winner = calculateWinner(fields);
      let status;
      if (winner) {
        status = "Победитель: " + winner;
      } else {
        status = "Следующий игрок: " + (squares ? "X" : "0");
      }

  return (
    <div className="App">
      <div>{status}</div>
      <Fields fields={fields} handleClickCeil={handleClickCeil} />
    </div>
  );
}

export default App