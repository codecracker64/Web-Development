import React,{useEffect,useState} from "react"

function Items(){

  const [Items,setItems] = useState([]);

  const fetchedItems = () =>{
    return fetch('http://localhost:5000')
    .then(response=>response.json())
    // .then(data=>JSON.stringify(data)) // this can be added here or below.
  }

useEffect(()=>{
  fetchedItems().then(res=>{
  console.log(res);
  setItems(res);
  })
},[])//not using brackets makes 2 get requests IDK why.

console.log("Items",Items)

function print(item){
  return <li key={item._id} id={item._id}>{item.value}</li>
}

  return(
    <div>
    <ul>
    {Items.map((item)=>print(item))}
    </ul>
    </div>
  )
}

export default Items;
