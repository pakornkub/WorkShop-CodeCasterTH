import React, { useState } from "react";

const TodoInput = (props) => {
  let { onTodoClick } = props;

  const [input, setInput] = useState("");

  const handleInputTodoClicked = (e = null) => {

    if((e == 13 || e == 'click') && input)
    {
        onTodoClick(input);
        setInput('');
    }

  };

  return (
    <div>
      Add Todo
      <input value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => handleInputTodoClicked(e.keyCode)}/>
      <button onClick={() => handleInputTodoClicked('click')}>Add</button>
      {input}
    </div>
  );
};

export default TodoInput;
