import React from 'react';
import PropTypes from 'prop-types';

export const Login = ({
  nameQuery,
  handleInputChange,
  handleSubmit,
  isNameCorrect,
  isGuest,
  setIsGuest,
}) => (
  <div className="App__login login">
    <form className="form">
      <input
        type="text"
        name="nameQuery"
        value={nameQuery}
        placeholder="Enter name"
        className="form__input"
        autoComplete="off"
        onChange={handleInputChange}
      />
    </form>

    <div className="login__buttons">
      <button
        className="login__button login__button--login button"
        type="submit"
        onClick={handleSubmit}
        disabled={!isNameCorrect}
      >
        Login
      </button>

      <button
        className="login__button login__button--guest button"
        type="submit"
        onClick={() => setIsGuest(!isGuest)}
      >
        Play as a guest
      </button>
    </div>
  </div>
);

Login.propTypes = {
  nameQuery: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isNameCorrect: PropTypes.bool.isRequired,
  setIsGuest: PropTypes.func.isRequired,
  isGuest: PropTypes.bool,
};

Login.defaultProps = {
  isGuest: false,
};
