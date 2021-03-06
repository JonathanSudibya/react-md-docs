import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Slider from 'react-md/lib/Sliders';

export default class ContinuousSliderExamples extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleChange = (value) => {
    this.refs.div.style.background = `rgba(0, 0, 0, ${(value) / 100})`;
  };

  render() {
    return (
      <div>
        <div ref="div" style={{ height: '40px' }}>Slide first slider to change my color</div>
        <Slider onDragChange={this.handleChange} onChange={this.handleChange} />
        <Slider disabled />
        <Slider defaultValue={30} />
      </div>
    );
  }
}
