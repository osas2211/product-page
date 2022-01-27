import { useState } from "react";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

const App = ()=> {
  const dummyData = [{count: 0}];
  const [item, setItem] = useState(()=> dummyData);
  const [val, setVal] = useState(()=> 0);
  const [amount_, setAmount_] = useState(()=> 0);
  return (
    <>
      <Header newCount={val} clearItem={setItem} newItem={item} amount={amount_}></Header>
      <MainContent setCount___={setVal} setItem={setItem} setAmount_={setAmount_}></MainContent>
    </>
  )
}

export default App;