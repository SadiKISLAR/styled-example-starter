import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header"
import { ThemeProvider } from "styled-components";

const style = {
  color:{
    header:"#fff",
    body:"#eee",
    footer:"#8A1c4a"
  },
  margins:{},
  responsive:{}
}

const App = () => {
  return (
    <ThemeProvider>
      <Header/>
      <Card/>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
