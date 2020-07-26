import React, {useState} from "react"
import styled from 'styled-components'

const Text = styled.span`
  font-size: 18px;
  color: ${props => (props.completed ? 'green' : '')}
`

const TodoItem = (props) => {

  let { text } = props

  const [status,setStatus] = useState(false)

  const toggle = () => {
      setStatus(currentStatus => !currentStatus)
  }

  return (
    <div>
      <input type="checkbox" value={status} onClick={toggle} />
      <Text completed={status}>
        {status ? 'Completed :' + text : text}
      </Text>
      
    </div>
  );
};

export default TodoItem
