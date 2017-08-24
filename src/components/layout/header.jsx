import React from 'react';
import PropTypes from 'prop-types';
import {
  NavBar, Icon
} from 'antd-mobile';

import './header.less';

function Header({
  location
}) {
  return (
    <div className="normal">
      <NavBar
        leftContent={null}
        rightContent={<a className="tel" href="tel:15867164299">
              联系我们
            </a>}
      >
        码代（上虞）
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default Header;
