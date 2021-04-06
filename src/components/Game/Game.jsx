/* eslint-disable no-mixed-operators */
import React from 'react';
import PropTypes from 'prop-types';
import './Game.scss';

export const Game = ({
  isActive,
  setIsActive,
  scoresList,
  setScoresList,
  balance,
  setBalance,
  spinCost,
}) => {
  let [x, y, z] = (scoresList).length > 0
    ? scoresList[scoresList.length - 1].record : ['-', '-', '-'];

  const handleCLick = () => setIsActive(!isActive);
  const handleSpin = (min, max) => {
    setBalance(balance - spinCost);
    x = Math.floor(Math.random() * (max - min + 1)) + min;
    y = Math.floor(Math.random() * (max - min + 1)) + min;
    z = Math.floor(Math.random() * (max - min + 1)) + min;

    if (scoresList[0].record[0] === '?') {
      setScoresList(scoresList.splice(scoresList[0], 1));
    }

    setScoresList([...scoresList, {
      id: scoresList.length + 1,
      record: [x, y, z],
      time: new Date().toLocaleTimeString(),
    }]);

    const changeBalance = (value) => {
      setBalance(balance - spinCost + value);
    };

    if ([x, y, z].every(item => item === 7)) {
      changeBalance(10);
    } else if (x === y && y === z) {
      changeBalance(5);
    } else if (x === y && y !== z
      || y === z && z !== x
      || z === x && x !== y) {
      changeBalance(0.5);
    }
  };

  return (
    <div
      className={isActive ? 'game active' : 'game'}
      onClick={handleCLick}
      aria-hidden="true"
    >
      <div
        className="game__content"
        onClick={e => e.stopPropagation()}
        aria-hidden="true"
      >
        <h1>
          Your balance is: $
          {balance}
        </h1>
        <div className="game__slots">
          <div className="game__slot game__slot--one">
            <div className="boxes">
              <h1 className="game__number">{x}</h1>
            </div>
          </div>

          <div className="game__slot game__slot--two">
            <div className="boxes">
              <h1 className="game__number">{y}</h1>
            </div>
          </div>

          <div className="game__slot game__slot--three">
            <div className="boxes">
              <h1 className="game__number">{z}</h1>
            </div>
          </div>
        </div>

        <div className="game__buttons">
          <button
            type="button"
            className="game__button button"
            onClick={balance >= spinCost ? () => handleSpin(1, 9) : () => {}}
            disabled={balance < spinCost}
          >
            {balance >= spinCost ? 'Spin' : 'No money'}
          </button>

          <button
            type="button"
            className="game__button button"
            onClick={() => handleSpin(7, 7)}
          >
            Fake 777
          </button>

          <button
            type="button"
            className="game__button game__button--close button"
            onClick={handleCLick}
          />
        </div>
      </div>
    </div>
  );
};

Game.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
  scoresList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    record: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    time: PropTypes.string,
  })).isRequired,
  setScoresList: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func.isRequired,
  spinCost: PropTypes.number.isRequired,
};
