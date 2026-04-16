import { useState } from "react";
import Footer from './Footer'

function App() {

  // variables/states/functions/hooks
  const el1 = <h1>hello there!!!!</h1>
  // let count =0;
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count++);
  }


  return (
    <>
    {/* navbar component */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {/* jsx only */}
        {el1}

        <p>You clicked the buttonnnn {count} times.</p>
        <button onClick={handleClick}>Click Me</button>
      </div>



      {/* footer component */}
      <Footer count={count} username="Razan"/>
    </>
  )
}

export default App;
