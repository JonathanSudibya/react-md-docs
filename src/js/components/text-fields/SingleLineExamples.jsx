import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';

export default class SingleLineExamples extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="block-text-field-examples">
        <TextField
          label="Title"
          className="md-title-text-field"
          size={10}
          floatingLabel={false}
          lineDirection="right"
        />
        <TextField label="Title" floatingLabel={false} />
        <TextField
          label="Type many letters"
          rows={2}
          maxRows={4}
          floatingLabel={false}
        />
        <TextField label="Enter your password" type="password" floatingLabel={false} />
      </div>
    );
  }
}
