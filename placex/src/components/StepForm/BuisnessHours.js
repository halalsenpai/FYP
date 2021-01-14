import React, { useState } from "react";
import { Button, Checkbox, Container, Header } from "semantic-ui-react";
import "./formstyles.css";

import Hours from "./Hours";

export default function BuisnessHours({ formData, setForm, navigation }) {
  const style = {
    display: "flex",
    justifyContent: "space-between",
  };

  const [isToggle, setToggle] = useState(true);
  function toggled() {
    setToggle(!isToggle);
  }

  return (
    <>
      <Container style={{ marginTop: "5em" }}>
        <h1 style={{ textAlign: "center" }}>Buisness Hours</h1>
        <div style={{ width: "500px", margin: "0 auto" }}>
          <div style={style}>
            <Header as="h3">Always Open</Header>
            <Checkbox
              toggle
              defaultChecked={isToggle}
              onChange={toggled}
              checked={isToggle}
            />
          </div>
          <div style={style}>
            <Header as="h3">Open Specific Hours</Header>
            <Checkbox toggle checked={!isToggle} onChange={toggled} />
          </div>
        </div>
        {!isToggle ? <Hours /> : null}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
            margin: "10px auto",
          }}
        >
          <Button secondary onClick={navigation.previous}>
            Back
          </Button>
          <Button positive onClick={navigation.next}>
            Next
          </Button>
        </div>
      </Container>
    </>
  );
}
