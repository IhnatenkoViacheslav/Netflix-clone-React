import { Route, Routes } from "react-router-dom";
import Header from "./components/elements/Header/Header";
import Main from "./components/elements/Main/Main";
import MyList from "./components/elements/MyList/MyList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Popular" element={<Main />} />
        <Route path="/Mylist" element={<MyList />} />
      </Routes>
    </>
  );
}

export default App;
