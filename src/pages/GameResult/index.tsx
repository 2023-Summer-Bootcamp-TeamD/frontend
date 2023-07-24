import { styled } from 'styled-components';
import Award from '@/assets/Award.png';
import RankingMemo from '@/assets/RankingMemo.png';
import DrawingRoom from '@/assets/DrawingRoomIcon.png';
import { useNavigate } from 'react-router-dom';
import wrong from '@/assets/wrong.png';
import { DAY, USERRANK, bestPlayerName, crapeTalk } from '@/constants/rank';
import { useEffect, useState } from 'react';
import { gameResultAPI } from '@/apis/gameResult';

import axios from 'axios';

const GameResult = () => {
  const naviagte = useNavigate();

  const [userRank, setUserRank] = useState<object[]>([]);
  let currentRanking = 1;
  let isTiedCount = 0;

  const goToMain = () => naviagte('/');
  const goToDrwaingRoom = () => naviagte('/drawingroom');

  const getGameResults = async (uuid: string) => {
    const res = await gameResultAPI(uuid);
    setUserRank(res?.data.석차);
  };
  useEffect(() => {
    getGameResults('34516');
  }, []);

  return (
    <GameResultContainer>
      <TheFirstAward>
        <span className="right-items">발급번호: Techeer-600000호</span>
        <span className="center-items">상장</span>
        <span className="center-items">The Best Player of Game</span>
        <span className="right-items">성명 {bestPlayerName}</span>
        <span className="center-items">{crapeTalk}</span>
        <span className="center-items">{DAY}</span>
        <span className="center-items">Team D 대표 최현정</span>
      </TheFirstAward>
      <div className="right-items">
        <Buttons onClick={goToMain}></Buttons>
        <Ranking>
          {userRank.map((user, index) => {
            if (index !== 0) {
              if (userRank[index - 1].score === user.score) {
                isTiedCount++;
              } else {
                currentRanking++;
                currentRanking += isTiedCount;
                isTiedCount = 0;
              }
            }
            return (
              <span key={index}>
                {currentRanking}등급 {user.nickname} {'(점수: '}
                {user.score}
                {')'}
              </span>
            );
          })}
        </Ranking>
        <Buttons onClick={goToDrwaingRoom}>
          <img src={DrawingRoom} className="drawingRoom-icon" />
        </Buttons>
      </div>
    </GameResultContainer>
  );
};

export default GameResult;

const GameResultContainer = styled.div`
  background-color: #0b191b;
  opacity: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .right-items {
    display: flex;
    flex-direction: column;
  }
`;

const TheFirstAward = styled.div`
  width: 32vw;
  height: 80vh;
  margin-left: 3rem;
  background-image: url(${Award});
  background-size: 32vw 80vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;

  & > span {
    font-family: 'ChosunGs';
    margin: 3rem 1rem;
  }
  span {
    font-size: 1.4rem;
  }
  span:nth-child(2) {
    font-size: 3rem;
    margin-top: 4rem;
    margin-bottom: 0;
  }
  span:nth-child(3) {
    font-size: 2rem;
    margin-top: 1rem;
    color: #b8b2b2;
  }
  span:nth-child(4) {
    font-size: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  span:nth-child(5) {
    font-size: 2.5rem;
    margin-left: 4rem;
    margin-right: 3rem;
    white-space: pre-line;
    text-align: center;
  }
  span:nth-child(6) {
    font-size: 1.5rem;
    margin-top: 10rem;
    margin-bottom: 0;
  }
  span:nth-child(7) {
    font-size: 1%.5;
    margin-top: 1rem;
    margin-bottom: 0;
  }
  .right-items {
    margin-left: auto;
  }
  .center-items {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Buttons = styled.div`
  margin-left: auto;
  width: 4rem;
  height: 4rem;
  background-color: white;
  border-radius: 50%;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:last-child {
    background-color: transparent;
    margin-right: 5rem;
  }
  background-image: url(${wrong});
  background-size: contain;
`;

const Ranking = styled.div`
  width: 35vw;
  height: 60vh;
  background-image: url(${RankingMemo});
  background-size: 35vw 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10rem;
  padding-top: 13rem;
  & > img {
    height: 53vh;
  }
  & > span {
    font-size: 4.2rem;
    font-weight: 700;
  }

  & > span:nth-child(1) {
    color: #e94600;
    opacity: 0.9;
    font-weight: 700;
  }
  & > span:nth-child(2) {
    color: #5282ff;
    font-weight: 700;
  }
  & > span:nth-child(3) {
    color: #bc00fe;
    opacity: 0.7;
    font-weight: 700;
  }
`;
