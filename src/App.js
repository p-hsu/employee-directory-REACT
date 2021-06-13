import React, {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";
import EmployeeContainer from "./components/EmployeeContainer";
import './App.css';

function App() {

  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <Main>
        <Search
          search = {search}
          setSearch = {setSearch}
        />

        <EmployeeContainer
          search = {search}
        />
      </Main>
    </>
  );
}

export default App;
