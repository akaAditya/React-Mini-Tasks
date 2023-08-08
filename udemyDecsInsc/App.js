import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import DemoList from "./components/udemyDecsInc/DemoList";
import Button from "./components/udemyDecsInc/Button";
const App = () => {
  const [listTitle, setListTitle] = useState('My List');
  const [order, setOrder] = useState(false);

  const changeTitleHandler = useCallback(()=>{
    setListTitle('New Title')
  }, [setListTitle]);

  const ListItems = useMemo(()=>[5,3,1,10,9],[]);

  const listOrderHandler = ()=>{
    // let val = order
    if(order===false){
      setOrder(true)
    }else{
      setOrder(false)
    }
  }
  
  return (
    <div>
      <DemoList title={listTitle} items={ListItems} onOrderChange={order}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      {order ? <button onClick={listOrderHandler}>Ascending</button> :<button onClick={listOrderHandler}>Descending</button> }
    </div>
  );
};

export default App;
