export const saveStateToLocalStorage = (data) => {
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
  localStorage.setItem("todos", JSON.stringify(data));
};

export const loadStateOfLocalStorage = () => {
  try {
    const rawdata = localStorage.getItem("todos");
    if (rawdata == null) {
      return [];
    }
    return JSON.parse(localStorage.getItem("todos"));
  } catch (error) {
    return [];
  }
};


export const toggleTheme = (state) => !state;
export const deleteTodo = (state, payload) =>  state.filter((el) => el.id !== payload.id);
export const addTodo = (state, payload) => state.concat(payload);
export const updateTodo = (state, payload) => {
  state.map(el => {
    if(el.id === payload.id) {
      el.completed = !el.completed
    }
    return el
  })

  return state;
}
