import { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { backgroundColorItem, textColorItem } from "../theme/colors";
const InputBar = styled.div`
  background: ${backgroundColorItem};

  padding: 1em;
  border-radius: 5px;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  padding: 0 1em 0 1em;
  font-size: 18px;
  background: ${backgroundColorItem};
  color: ${textColorItem};

  outline: none;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const SendBtn = styled.button`
  border-radius: 30px;
  border: 2px solid ${textColorItem};
  background: transparent;
  color: ${textColorItem};
  cursor: pointer;
  padding: 0.5em 2em 0.5em 2em;
`;

const SearchBar = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: uuidv4(),
      completed: false,
      content: value,
    });

    setValue("");
  };
  const handleChange = (e) => setValue(e.target.value);
  return (
    <InputBar>
      <Form onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={value} type="text" />
        <SendBtn>Enviar</SendBtn>
      </Form>
    </InputBar>
  );
};
const mapDispachToProps = (dispatch) => {
  return {
    addTodo(todo) {
      dispatch({ type: "ADD_TODO", payload: todo });
    },
  };
};

export default connect(null, mapDispachToProps)(SearchBar);
