import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
const ThemeProviderFull = ({ children, theme }) => {
  return (
    <ThemeProvider theme={{ theme: theme ? "dark" : "light" }}>
      {children}
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.darkTheme,
  };
};

export default connect(mapStateToProps, null)(ThemeProviderFull);
