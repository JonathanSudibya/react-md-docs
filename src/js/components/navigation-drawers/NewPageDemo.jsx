import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classnames from 'classnames';
import NavigationDrawer from 'react-md/lib//NavigationDrawers';
import { IconButton } from 'react-md/lib/Buttons';

import NewPage from './NewPage';
import LoremIpsum from '../LoremIpsum';
import { randomAvatars } from '../../utils';

const avatars = randomAvatars(3, 'fake-icon');

export default class NewPageDemo extends Component {
  constructor(props) {
    super(props);

    this.state = { page: 1 };
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  closeDemo = () => {
    this.refs.newPage.closeDemo();
  };

  fakeChangePage = (page) => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state;

    const navItems = [{
      primaryText: 'Page 1',
      onClick: this.fakeChangePage.bind(this, 1),
      tileClassName: classnames({ active: page === 1 }),
      leftIcon: avatars[0],
    }, {
      primaryText: 'Page 2',
      onClick: this.fakeChangePage.bind(this, 2),
      tileClassName: classnames({ active: page === 2 }),
      leftIcon: avatars[1],
    }, {
      primaryText: 'Page 3',
      onClick: this.fakeChangePage.bind(this, 3),
      tileClassName: classnames({ active: page === 3 }),
      leftIcon: avatars[2],
    }];

    return (
      <NewPage ref="newPage">
        <NavigationDrawer
          drawerTitle="Navigation Title"
          toolbarTitle="Main Toolbar Title"
          tabletDrawerType={NavigationDrawer.DrawerType.PERSISTENT_MINI}
          desktopDrawerType={NavigationDrawer.DrawerType.PERSISTENT_MINI}
          navItems={navItems}
          toolbarChildren={
            <IconButton
              onClick={this.closeDemo}
              tooltipLabel="Close Demo"
              tooltipPosition="left"
              className="md-navigation-drawer-btn fr"
            >
              close
            </IconButton>
          }
        >
          <section key={page} className="container text-container">
            <h1>On Page {page}</h1>
            <LoremIpsum count={20} />
          </section>
        </NavigationDrawer>
      </NewPage>
    );
  }
}
