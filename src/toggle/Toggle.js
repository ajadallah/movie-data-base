import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { toggleMessage } from './actions';
import { getMovies } from '../movies/actions';

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility
      && <p>Redux action is toggled</p>}
    <button type="button" onClick={toggleMessage}>
      Toggle Me
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMessage,
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);

Toggle.propTypes = {
  messageVisibility: PropTypes.bool.isRequired,
  toggleMessage: PropTypes.func.isRequired,
};
