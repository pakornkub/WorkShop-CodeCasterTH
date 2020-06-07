import React, {useState} from "react";

const TodoItem = (props) => {

  let { text } = props;

  const [status,setStatus] = useState(false);

  const toggle = () => {
      setStatus(currentStatus => !currentStatus);
  }

  return (
    <div>
      <input type="checkbox" value={status} onClick={toggle} />
      {status ? 'done :' + text : text}
    </div>
  );
};

export default TodoItem;
