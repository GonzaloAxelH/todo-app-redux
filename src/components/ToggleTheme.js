import styled from "styled-components";
import IconSunWhite from "../assets/images/sunIcon.png";
import IconSunBlack from "../assets/images/sunblackIcon.ico";
import store from "../data/store";
import { connect } from "react-redux";
const ToggleButton = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
`;

const handleClick = ()=>{
  store.dispatch({ type: 'TOGGLE_THEME' ,payload:null})
  localStorage.setItem('themeDark', store.getState().darkTheme)
}

const ToggleTheme = ({ theme }) => {
  return (
    <ToggleButton onClick={handleClick}>
      <img src={theme ? IconSunBlack : IconSunWhite} alt="" />
    </ToggleButton>
  );
};

const maStateToProps = (state) => {
  return {theme: state.darkTheme};
};

export default connect(maStateToProps, null)(ToggleTheme);
