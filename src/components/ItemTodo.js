import styled from "styled-components";
import { textColorItem, backgroundColorItem } from "../theme/colors";
import { connect } from "react-redux";

const Item = styled.div`
  background-color: ${backgroundColorItem};
  display: flex;
  padding: 1em;
  margin: 0.2em 0em;
  border-radius: 5px;
  align-items:center;
`;

const CheckCompleted = styled.input`
flex: 1;
  cursor:pointer;
outline: none;
padding:0.3em;
`;
const Text = styled.p`
  flex: 8;
  color: ${textColorItem};
  text-decoration: ${(props) => (props.tached ? "line-through" : "none")};
  font-size: 18px;
`;
const Id = styled.span`
  color: ${textColorItem};
  flex: 1;
`;
const Button = styled.button`
  flex: 1;
  border-radius: 30px;
  border: 2px solid ${textColorItem};
  background: transparent;
  color: ${textColorItem};
  cursor: pointer;
`;

const ItemTodo = ({
  id,
  content,
  completed,
  contador,
  toggleCompleted,
  handleClickDelete,
}) => {
  return (
    <Item>
      <Id>{contador + 1}</Id>
      <CheckCompleted
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted({ id })}
      />
      <Text tached={completed}>{content}</Text>
      <Button onClick={() => handleClickDelete({ id })}>Delete</Button>
    </Item>
  );
};

const mapDispachToProps = (dispatch) => {
  return {
    toggleCompleted(item) {
      dispatch({ type: "UPDATE_TODO", payload: item });
    },
    handleClickDelete(item) {
      dispatch({ type: "DELETE_TODO", payload: item });
    },
  };
};

export default connect(null, mapDispachToProps)(ItemTodo);
