import React, { useMemo } from "react";
import { findNthPrime } from "../utils/nthPrime";

export default function DemoUseMemo() {
  console.log("DemoUseMemo")

  const [text, setText] = React.useState('');
  const [toggle, setToggle] = React.useState(false);
  console.log("🚀 ~ DemoUseMemo ~ count:", text)

  function handleClick(e) {
    setText(e.target.value);
  }
  // const nthPrime = findNthPrime(text)
  const nthPrime = useMemo(() => findNthPrime(text), [text])
  console.log("🚀 ~ DemoUseMemo ~ nthPrime:", nthPrime)


  return (
    <div>
      <h1>Hello</h1>
      <div className={`w-32 h-36 border-red-300 border-2 ${toggle ? "bg-black text-white" : "bg-white text-black"}`}>

        <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
      </div>

      <button onClick={handleClick}> Click </button>
      <input className="border-2" type="number" value={text} onChange={handleClick} />

      <p>{nthPrime}</p>
    </div >
  )

}