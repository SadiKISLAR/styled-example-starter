import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header"

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
    <>
      <Header/>
      <Card/>
      <Footer/>
    </>
  );
};

export default App;
