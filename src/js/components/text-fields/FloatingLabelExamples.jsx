import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextField from 'react-md/lib/TextFields';

export default class FloatingLabelExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            label="Title"
            containerClassName="md-title-text-field"
            size={10}
          />
        </div>
        <div>
          <TextField label="Title" />
        </div>
        <div>
          <TextField label="Type many letters" rows={2} maxRows={4} />
        </div>
      </div>
    );
  }
}