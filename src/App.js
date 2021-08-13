import React, { useState, useCallback, useEffect } from "react";
import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { stringify, v4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const TODO_APP_STORAGE_KEY = "TODO_APP";

  useEffect(() => {
    const localstoraged = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (localstoraged) {
      setTodoList(JSON.parse(localstoraged));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextChangeInput = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddClickBtn = useCallback(() => {
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false },
      ...todoList,
    ]);

    setTextInput("");
  }, [textInput]);

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);

  const onDelteBtnClick = (id) => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <p>Danh sách cần làm</p>
      <Textfield
        name="todo-list"
        placeholder="Thêm việc cần làm ... "
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onAddClickBtn}
          >
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px 2px" }}
        value={textInput}
        onChange={onTextChangeInput}
      />
      <TodoList
        todoList={todoList}
        onCheckBtnClick={onCheckBtnClick}
        onDelteBtnClick={onDelteBtnClick}
      />
    </>
  );
}

export default App;
