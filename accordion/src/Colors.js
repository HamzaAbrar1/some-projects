import React,{useState} from "react";

export default function Colors() {
  const hexgenerator = () => {
    let start = "#";
    let val = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * val.length);

      start += val[random];
    }
    let outer = document.getElementsByClassName("back")[0];
    outer.style.backgroundColor = start;
    return start;
  };

  const rgb = () => {
    let value1 = Math.floor(Math.random() * 256);
    let value2 = Math.floor(Math.random() * 256);
    let value3 = Math.floor(Math.random() * 256);

    let outer = document.getElementsByClassName("back")[0];
    outer.style.backgroundColor = `rgb(${value1},${value2},${value3})`;
  };

  const [rgballo,setRgbAllow]=useState(false)
  const generatorAllower=()=>{
setRgbAllow(!rgballo);
  }

  return (
    <div
      className="back"
      style={{
        // backgroundColor: hexgenerator(),
        height: "100vh",
        background: rgb(22, 100, 20),
      }}
    >
      {!rgballo &&
      <button onClick={hexgenerator}>Generate Hex Color</button>}
      {rgballo && <button onClick={rgb}>Rgb Generate</button>
}
<button onClick={generatorAllower}>Change Generator</button>
    </div>
  );
}
