import { useEffect, useState } from "react";

const DevelopsTeam = () => {
  const [developsTeam, setDevelopsTeam] = useState([]);
  const [meeting, setMeeting] = useState([]);

  useEffect(
    (developsTeam) => {
      fetch(`http://localhost:5000/api/developmentTeams`)
        .then((res) => res.json())
        .then((data) => {
          setDevelopsTeam(data.data);
        });
    },[]
  );

  


  return (
    <div className="card-container">
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => {
          
        }}
      >
        {developsTeam.map((developsTeam) => (
          <option value={developsTeam.teamCode}>{developsTeam.teamName}</option>
        ))}
      </select>
    </div>
  );
};

export default DevelopsTeam;
