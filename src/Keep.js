import React from "react";

import { Button, Textarea, FormGroup, Input } from "reactstrap";

const Keep = () => {
  return (
    <div className="container mt-5">
      <FormGroup>
        <Input type="text" placeholder="Title" />
      </FormGroup>
      <FormGroup>
        <Textarea type="text" placeholder="Write a content"></Textarea>
      </FormGroup>
      <Button color="warning">Add</Button>
    </div>
  );
};

export default Keep;
