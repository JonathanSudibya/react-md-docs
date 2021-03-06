import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Snackbar from 'react-md/lib/Snackbars';
import { RaisedButton } from 'react-md/lib/Buttons';

export default class SnackbarExamples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toasts: [],
      autohide: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  addToast = (text, action) => {
    const toasts = this.state.toasts.slice();
    toasts.push({
      key: Date.now(),
      text,
      action,
    });
    const autohide = action === null || action === 'Ok';

    this.setState({ toasts, autohide });
  };

  addToasts = () => {
    const toasts = this.state.toasts.slice();
    toasts.push({
      text: 'Sent',
      action: 'Undo',
    });

    toasts.push({
      text: 'Connection timed out. Showing limited messages.',
      action: {
        label: 'Retry',
        onClick: () => {
          alert('You tried again for some reason..');
        },
      },
    });

    this.setState({ toasts, autohide: true });
  };

  // Pops the first toast off of the stack of toasts.
  // Make sure to make a new array object since it won't update
  // the snackbar otherwise. PureRenderMixin probs.
  dismissToast = () => {
    const toasts = this.state.toasts.slice();
    toasts.shift();
    this.setState({ toasts });
  };

  render() {
    const { toasts, autohide } = this.state;

    return (
      <div>
        <RaisedButton
          label="Toast Hello, world!"
          onClick={this.addToast.bind(this, 'Hello, World!', null)}
        />
        <RaisedButton
          label="Require action to dismiss"
          onClick={this.addToast.bind(this, 'Something Happend', 'Retry')}
        />
        <RaisedButton
          label="Mutliple Line Toast"
          onClick={this.addToast.bind(this, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non metus finibus, ultrices odio eget.', 'Ok')}
        />
        <RaisedButton
          label="Chained Toasts"
          onClick={this.addToasts}
        />
        <Snackbar
          toasts={toasts}
          dismiss={this.dismissToast}
          autohide={autohide}
        />
      </div>
    );
  }
}
