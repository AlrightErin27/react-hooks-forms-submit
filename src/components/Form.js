import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("First Name...");
  const [lastName, setLastName] = useState("Last Name...");
  const [submittedData, setSubmittedData] = useState([]);
  const [err, setErr] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (firstName.length > 0 && lastName.length > 0) {
      const formDataObj = { firstName: firstName, lastName: lastName };
      const formDataArr = [...submittedData, formDataObj];

      setSubmittedData(formDataArr);
      setFirstName("");
      setLastName("");
    } else {
      setErr("PLEASE FILL IN NAME");
      alert(err);
    }
  }

  const listOfSubmissions = submittedData.map((data, idx) => {
    return (
      <div key={idx}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <h2>Submissions:</h2>
      {listOfSubmissions}
    </form>
  );
}

export default Form;
