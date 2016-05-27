import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import UncontrolledRadioExample from './UncontrolledRadioExample';
import UncontrolledRadioExampleRaw from '!!raw!./UncontrolledRadioExample';
import ControlledRadioExample from './ControlledRadioExample';
import ControlledRadioExampleRaw from '!!raw!./ControlledRadioExample';

import RadioGroup from 'docgen/RadioGroup.json';
import Radio from 'docgen/Radio.json';

const text = `
Radio buttons allow the user to select one option from a set. Use radio buttons
for exclusive selection if you think that the user needs to see all available options
side-by-side.
`;

export default class RadioDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Radio Fields"
        examples={[{
          name: 'Uncontrolled Example',
          code: UncontrolledRadioExampleRaw,
          children: <UncontrolledRadioExample />,
        }, {
          name: 'Controlled Example',
          code: ControlledRadioExampleRaw,
          children: <ControlledRadioExample />,
        }]}
        docgens={[RadioGroup, Radio]}
      />
    );
  }
}
