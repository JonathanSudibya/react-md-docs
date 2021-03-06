import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import './_file-inputs.scss';

import FileInput from 'react-md/lib/FileInputs';
import Snackbar from 'react-md/lib/Snackbars';

export default class FileInputExamples extends Component {
  constructor(props) {
    super(props);

    this.state = { toasts: [] };
  }

  _dismiss = () => {
    const toasts = this.state.toasts.slice();
    toasts.shift();

    this.setState({ toasts });
  };

  _handleFileSelect = (file) => {
    const toasts = this.state.toasts.slice();

    if(!file) {
      toasts.push({ text: 'You did not select new file.' });
    } else {
      toasts.push({ text: `${file.name} has been selected.` });
    }

    this.setState({ toasts });
  };

  render() {
    const { toasts } = this.state;

    return (
      <div>
        <FileInput
          label="Select an image from your computer"
          onChange={this._handleFileSelect}
          accept="image/*"
          primary
        />
        <Snackbar toasts={toasts} dismiss={this._dismiss} />
      </div>
    );
  }
}
