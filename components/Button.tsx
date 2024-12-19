 
"use client";
 
 
export default function Button(props) {
 
  return <button onClick={() => open()} className="bg-blue-500 text-white px-4 py-2 rounded mx-2"> 
    {props.text} </button>;
}