import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  let { items } = props;

  //key={index} ต้องใส่ที่ tag ตัวนอกสุดและต้องมีทุกครั้งที่ loop

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <TodoItem text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
