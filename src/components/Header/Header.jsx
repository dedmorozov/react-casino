/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-Zzvv-TLU6SCJK2zeY5ZOeLEm50zr8l69FiyhIBO9xVcbXNitxYmicK1siYeb9-PpLQ&usqp=CAU';
const avatarUrl = 'https://leadpilates.com/wp-content/uploads/2019/04/avatar-male.jpg';

export const Header = ({ balance, userName, isGuest }) => (
  <header className="App__header header">
    <div className="header__logo">
      <img src={logoUrl} alt="logo" />
    </div>

    <div className="header__user user">
      {!isGuest
      && (
        <p className="user__balance">
          $
          <strong>{+balance}</strong>
        </p>
      )}
      <div className="user__info">
        <div className="user__avatar">
          <img src={avatarUrl} alt="avatar" />
        </div>

        <p className="user__name">{userName || 'Guest'}</p>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  balance: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  isGuest: PropTypes.bool.isRequired,
};
