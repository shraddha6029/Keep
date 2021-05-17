import React from "react";

import { Button, Textarea, FormGroup, Input } from "reactstrap";

const App = () => {
  return (
    <div className="container mt-5">
      <form>
        <FormGroup>
          <Input type="text" placeholder="Title" />
        </FormGroup>
        <FormGroup>
          <Textarea type="text" placeholder="Write a content"></Textarea>
        </FormGroup>
        <Button color="warning">Add</Button>
      </form>
    </div>
  );
};

export default App;
