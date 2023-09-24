import React,{useState} from "react";

function InputField(){

  const [input,setInput] = useState();

  function handleInputChange(event){
    setInput(event.target.value);
  }

  async function handleSubmit(e){
    e.preventDefault();
    try{
      const result = await fetch("http://localhost:5000",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify({input:input})
      });
    }
    catch(err){
      console.log(err);
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input name="inputItem" type="text" placeholder="enter item" value={input} onChange={handleInputChange}></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default InputField;
