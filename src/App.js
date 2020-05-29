import React, {useState} from 'react';
import { Input } from 'antd';
import './App.css';

function App() {
  let [table,setTable] = useState();
  let calculateTable= grid=>{
    let table = [];
    for(let i=1;i<=grid;i++){
      let row = [];
      for(let j=1;j<=grid;j++){
        row.push(i*j);
      }
      table.push(row);
    }
    return table;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Enter the multiplication table</h3>
        <Input placeholder="Enter the multiplication table" onChange={(e)=>setTable(calculateTable(e.target.value))}/>
        <div>
        {table? table.map((row, j)=>{
          let element = row.map((el, i)=>{
            return <div className = "grid" key={i}>{el}</div>;
          })
          return <div className = "row" key={j}>{element}</div>;
        }) : <div></div>}
        </div>
      </header>
    </div>
  );
}

export default App;
