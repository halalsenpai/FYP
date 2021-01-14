import React from "react";
import { Button, Container, Form } from "semantic-ui-react";

export default function buisnessDetails({ formData, setForm, navigation }) {
  const { name, address, city, phNumber, website } = formData;
  return (
    <>
      <Container style={{ marginTop: "5em", width: "500px" }}>
        <h1 style={{ textAlign: "center" }}>Buisness Details</h1>
        <Form>
          <Form.Field>
            <label>Name of the workspace</label>
            <input
              name="name"
              type="text"
              defaultValue={name}
              onChange={setForm}
            />
          </Form.Field>
          <Form.Field>
            <label>Address of the workspace</label>
            <input
              name="address"
              type="text"
              defaultValue={address}
              autoComplete="no"
              onChange={setForm}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              type="text"
              autoComplete="false"
              defaultValue={city}
              onChange={setForm}
            />
          </Form.Field>
          <Form.Field>
            <label>Phone Number</label>
            <input
              name="phNumber"
              type="number"
              autoComplete="false"
              defaultValue={phNumber}
              onChange={setForm}
            />
          </Form.Field>
          <Form.Field>
            <label>Website</label>
            <input
              name="website"
              type="text"
              autoComplete="false"
              defaultValue={website}
              onChange={setForm}
            />
          </Form.Field>
          <Button positive floated="right" onClick={navigation.next}>
            Next
          </Button>
        </Form>
      </Container>
    </>
  );
}
