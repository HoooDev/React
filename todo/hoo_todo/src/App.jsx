import './App.css';

import {useState} from 'react'
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState({})
  const [todoList, setTodoList] = useState([])

  let id = 0
  const addItem = () => {
    id += 1
    setTodoList({...todoList, text : inputValue, id:id})
  }

  return (
    <div className="App">
      {console.log(todoList)}
      <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList}></TodoBoard>
    </div>
  );
}

export default App;
