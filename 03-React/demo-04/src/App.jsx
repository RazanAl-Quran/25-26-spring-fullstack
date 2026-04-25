import { useState,useEffect } from "react";
import PeopleForm from "./PeopleForm";
import PeopleList from "./PeopleList";
import Digimon from "./Digimon";

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson]);
  }

  //  removeperson func


  // ✅ useEffect runs Only on mount (first render) the initial rendering of the component 
  // useEffect(() => {
  //   console.log("I run on the first Render only (mounting)");

  // }, [])

  // ✅ useEffect runs every time the people array changes
  useEffect(() => {
    // console.log(people);

    if (people.length > 0) {
      console.log(`✅ New person added: ${people[people.length - 1].name}`);
      console.log(`Total people now: ${people.length}`);
    }
  }, [people]);

  
  // ✅ useEffect runs Runs when the component unmounts
  // ✔ Good for removing timers, listeners, sockets, intervals
  useEffect(() => {
    return () => {
      console.log("🧹 cleanup: runs on UNMOUNT");
    };
  });


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <PeopleForm addPerson={addPerson} />
      <PeopleList people={people} />

      {/* axios */}
      <Digimon/>
    </div>
  );
}

export default App;

