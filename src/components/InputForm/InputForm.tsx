import { useRef } from "react";
import "./InputForm.scss";

const InputForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log("Du klickade");
    if (inputRef.current !== null) {
      console.log("input ger ", inputRef.current.value);
    }
  };

  return (
    <div>
      <label htmlFor="firstname">
        Namn:
        <input id="firstname" type="text" ref={inputRef} />
      </label>
      <button onClick={handleClick}>lägg till</button>
    </div>
  );
};

export default InputForm;
