import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  let [cval, setCval] = useState("");
  const ButtonClicked = (event) => {
    let currCal = event.target.value;
    let newCval = cval + currCal;
    if (currCal == "C") {
      setCval(" ");
    } else if (currCal == "=") {
      let result = eval(cval);
      console.log(result);
      setCval(result);
    } else setCval(newCval);
  };
  let ma = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
  ];
  return (
    <div className={styles.calculator}>
      <Display DisplayValue={cval}></Display>
      <ButtonsContainer
        items={ma}
        OnButtonClick={ButtonClicked}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
