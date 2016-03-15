import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Divider from 'react-md/lib/Dividers';

import { APP_URI_BASE } from '../utils';
import { toClassName, capitalizeFirst } from '../utils/StringUtils';
import Markdown from '../containers/Markdown';
import DocExample from './DocExample';
import DocPropTypes from './DocPropTypes';

export default class DocPage extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static context = {
    router: PropTypes.object.isRequired,
  };

  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.node,
    ]),
    sectionName: PropTypes.string.isRequired,
    examples: PropTypes.arrayOf(PropTypes.shape({
      sectionName: PropTypes.string,
      code: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    })),
    components: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      desc: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      props: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        defaultValue: PropTypes.any,
        required: PropTypes.bool,
      })),
    })),

    // from react-router
    location: PropTypes.object.isRequired,
  };

  static defaultProps = {
    examples: [],
    components: [],
    text: '',
  };

  render() {
    const { sectionName, text, examples, components, location } = this.props;
    const componentSectionName = capitalizeFirst(location.pathname.replace(APP_URI_BASE + '/components/', ''));

    let details;
    if(React.isValidElement(text)) {
      details = text;
    } else {
      details = typeof text === 'string' ? [text] : text;
      details = details.map((md, i) => <Markdown key={i} markdown={md} />);
    }
    return (
      <div className={`react-doc doc-component-${toClassName(sectionName)}`}>
        <header className="component-info">
          <h1 className="md-display-1">{sectionName}</h1>
          <Divider />
          {details}
        </header>
        {examples.map((example, key) => <DocExample {...example} key={key} fallbackId={`example-${key}`} />)}
        {components.map((component, key) => <DocPropTypes sectionName={componentSectionName} {...component} key={key} />)}
      </div>
    );
  }
}
