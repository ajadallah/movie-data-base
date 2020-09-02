import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleMessage } from './actions';

const Toggle = ({ messageVisibility, dispatch }) => (
  <div>
    {messageVisibility
      && <p>Redux action is toggled</p>}
    <button
      type="button"
      onClick={() => dispatch(toggleMessage())}
    >
      Toggle Me

    </button>
  </div>
);

const mapStateToProps = (state) => ({
  messageVisibility: state.message.messageVisibility,
});
export default connect(mapStateToProps)(Toggle);

Toggle.propTypes = {
  messageVisibility: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};
