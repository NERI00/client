import { useState } from "react";

function AddNewMeeting() {
  const [newMeeting, setNewMeeting] = useState({
    teamCode: '',
    startingDateAndTime: "",
    endingDateAndTime: "",
    meetingDescription: "",
    meetingRoom: "",
  });
  const handleInputChange = (e, name) => {
    let inputValue = e.target.value;
    let tempNewMeeting = {
      ...newMeeting,
      [name]: inputValue,
    };

    setNewMeeting(tempNewMeeting);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      createMeeting();
    } else {
      alert("Form fields not valid.");
    }
  };

  const isEmptyString = (str) => {
    return !!(str || false);
  };

  const formValidation = () => {
    return (
      isEmptyString(newMeeting.teamCode) &&
      isEmptyString(newMeeting.startingDateAndTime) &&
      isEmptyString(newMeeting.endingDateAndTime) &&
      isEmptyString(newMeeting.meetingDescription)&&
      isEmptyString(newMeeting.meetingRoom)
    );
  };

  const createMeeting = () => {
    let body = {
      ...newMeeting,
    };
    fetch("http://localhost:5000/api/teamMeetings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.data);
        } else {
          alert("Server error: failed to create new Meeting.");
        }
        console.log("data");
        console.log(data);
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
  };

  return (
    <div className="AddNewMeeting-form">
      <br />
      <br />
      <div className="form-floating">
        <input
          type="number"
          className="form-control"
          id="teamCode"
          placeholder="teamCode"
          onChange={(e) => handleInputChange(e, "teamCode")}
          value={newMeeting.teamCode}
        ></input>
        <label for="teamCode">team Code</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          className="form-control"
          id="startingDateAndTime"
          placeholder="Password"
          onChange={(e) => handleInputChange(e, "startingDateAndTime")}
          value={newMeeting.startingDateAndTime}
        ></input>
        <label for="startingDateAndTime">starting Date And Time</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          className="form-control"
          id="endingDateAndTime"
          placeholder="Password"
          onChange={(e) => handleInputChange(e, "endingDateAndTime")}
          value={newMeeting.endingDateAndTime}
        ></input>
        <label for="endingDateAndTime">ending Date And Time</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          className="form-control"
          id="meetingDescription"
          placeholder="Password"
          onChange={(e) => handleInputChange(e, "meetingDescription")}
          value={newMeeting.meetingDescription}
        ></input>
        <label for="meetingDescription">meeting Description</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          className="form-control"
          id="meetingRoom"
          placeholder="Password"
          onChange={(e) => handleInputChange(e, "meetingRoom")}
          value={newMeeting.meetingRoom}
        ></input>
        <label for="meetingDescription">meeting Room</label>
      </div>
      
      <br />
      <br />
      <button
        onClick={handleSubmit}
        className="btn btn-outline-secondary"
      >
        Add
      </button>
    </div>
  );
}

export default AddNewMeeting;
