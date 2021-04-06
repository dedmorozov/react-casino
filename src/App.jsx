import React, { useState } from 'react';
import { Login } from './components/Login/Login';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import './App.scss';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [nameQuery, setNameQuery] = useState('');
  const [userName, setUserName] = useState('');
  const [isNameCorrect, setIsNameCorrect] = useState(false);

  let user = {};

  const [balance, setBalance] = useState(user.balance || 99.99);

  localStorage.setItem(`${userName}`, JSON.stringify({
    name: userName,
    balance,
  }));

  user = JSON.parse(localStorage[`${userName}`]);

  const [scoresList, setScoresList] = useState([{
    id: 0,
    record: ['?', '?', '?'],
    time: new Date().toLocaleTimeString(),
  }]);
  const spinCost = 1;

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (value.length > 3) {
      setIsNameCorrect(true);
    } else {
      setIsNameCorrect(false);
    }

    setNameQuery(value);
  };

  const handleSubmit = () => {
    if (nameQuery.length > 3) {
      setIsLoggedIn(!isLoggedIn);
    }

    setUserName(nameQuery);
    setBalance(JSON.parse(localStorage[`${userName}`]).balance);
    localStorage.setItem(`${nameQuery}`, JSON.stringify({
      name: nameQuery,
      balance,
    }));

    setNameQuery('');
  };

  return (
    <div className="App">
      {isLoggedIn || isGuest ? (
        <>
          <Header
            balance={balance}
            userName={userName}
            isGuest={isGuest}
          />
          <Content
            setScoresList={setScoresList}
            scoresList={scoresList}
            balance={balance}
            setBalance={setBalance}
            spinCost={spinCost}
            setIsGuest={setIsGuest}
            isGuest={isGuest}
            userName={userName}
          />
          <Footer />
        </>
      )
        : (
          <Login
            nameQuery={nameQuery}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isNameCorrect={isNameCorrect}
            setIsLoggedIn={setIsLoggedIn}
            isGuest={isGuest}
            setIsGuest={setIsGuest}
          />
        )
      }
    </div>
  );
};
