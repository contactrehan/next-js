"use client"
export default function CounterButton() {
    const onClickHandler = ()=>{
        alert("Clicked")
    }
  return (
    <div>
      
      <button onClick={onClickHandler} style={{ backgroundColor: "red" }}>Add</button>
    </div>
  );
}
