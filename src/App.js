import "./App.css";
import Appbar from "./componets/Appbar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import DevelopsTeam from "./componets/developmentTeams";
import AddNewMeeting from "./componets/Meetings"

function App() {
  return (
    <div className="App">
      <Appbar /><br />
      <DevelopsTeam />
      <AddNewMeeting />
    </div>
  );
}

export default App;
