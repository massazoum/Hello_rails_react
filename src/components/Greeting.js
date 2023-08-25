import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRandomGreeting from '../actions/greetingActions';

function Greeting({ greeting, fetchRandomGreeting }) {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>Greeting Component</h1>
      <p>{greeting}</p>
    </div>
  );
}

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  fetchRandomGreeting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  greeting: state.greeting.greeting,
});

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
