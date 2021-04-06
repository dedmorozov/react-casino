import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Game } from '../Game/Game';
import './Content.scss';

export const Content = ({
  scoresList,
  setScoresList,
  balance,
  setBalance,
  spinCost,
  setIsGuest,
  isGuest,
}) => {
  const [isActive, setIsActive] = useState(false);

  const onSort = (e) => {
    // const { value } = e.target.dataset;

    // setScoresList(scoresList.slice().sort((a, b) => a - b));
    setScoresList(scoresList.slice().reverse());
  };

  return (
    <main className="App__main main">
      <table className="App__table table">
        <thead>
          <tr>
            <th
              onClick={onSort}
              data-value="id"
              name="id"
              className="table__clickable"
            >
              ID
            </th>
            <th>Scores</th>
            <th
              onClick={onSort}
              data-value="time"
              className="table__clickable"
            >
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {scoresList[0].record[0] !== '?' ? (
            scoresList.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={index + 1}>
                <td>{item.id}</td>
                <td>{item.record.join(' ')}</td>
                <td>{item.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          )}
        </tbody>
      </table>

      {!isGuest ? (
        <>
          <div className="content__buttons">
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className="content__button button"
            >
              Play a game
            </button>
          </div>

          <Game
            isActive={isActive}
            setIsActive={setIsActive}
            setScoresList={setScoresList}
            scoresList={scoresList}
            balance={balance}
            setBalance={setBalance}
            spinCost={spinCost}
          />
        </>
      ) : (
        <div className="content__buttons">
          <p>To play and save records you need to</p>
          <button
            type="button"
            onClick={() => setIsGuest(!isGuest)}
            className="content__button button"
          >
            Login
          </button>
        </div>
      )}
    </main>
  );
};

Content.propTypes = {
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
  setIsGuest: PropTypes.func.isRequired,
  isGuest: PropTypes.bool.isRequired,
};
