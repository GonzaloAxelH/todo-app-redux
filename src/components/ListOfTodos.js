import styled from "styled-components";
import { connect } from "react-redux";
import ItemTodo from "./ItemTodo";

const List = styled.div`
  border-radius:12px;
width:100%;

`;const ListOfTodos = ({ todos }) => {
  return (
    <List>
      {todos.map((el,contador) => {
        return (
          <ItemTodo  key={el.id} id={el.id} contador={contador}  completed={el.completed} content={el.content} />
        );
      })}
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, null)(ListOfTodos);
