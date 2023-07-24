import { styled, css } from 'styled-components';
import Award from '@/assets/Award.png';
import RankingMemo from '@/assets/RankingMemo.png';
import DrawingRoom from '@/assets/DrawingRoomIcon.png';
import { useNavigate } from 'react-router-dom';
import wrong from '@/assets/wrong.png';
import {
  DAY,
  bestPlayerName,
  crapeTalk,
  InitialResult,
} from '@/constants/rank';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useMemo } from 'react';
import { gameResultAPI } from '@/apis/gameResult';
import { resultScoreType, RankTextProps } from '@/types/gameResult';

const GameResult = () => {
  const naviagte = useNavigate();

  const goToMain = () => naviagte('/');
  const goToDrwaingRoom = () => naviagte('/drawingroom');

  const [resultScore, setResultScore] = useState<resultScoreType[]>([
    InitialResult,
  ]);

  const getServerData = () => {
    return gameResultAPI();
  };

  const { data } = useQuery(['Result'], getServerData, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      if (data !== undefined) setResultScore(data.data['석차']);
    },
    onError: (e) => {
      console.log('onError', e);
    },
  });

  const rankScored = useMemo(() => {
    let currentRank = 1;
    const sortedScore = [...resultScore].sort((a, b) => b.score - a.score);

    if (sortedScore[0].score !== undefined) {
      let prevScore = sortedScore[0].score;

      return sortedScore.map((item) => {
        if (item.score !== prevScore) {
          currentRank++;
        }
        prevScore = item.score;
        return { ...item, rank: currentRank };
      });
    }
  }, [resultScore]);

  return (
    <GameResultContainer>
      <TheFirstAward>
        <span className="right-items">발급번호: Techeer-600000호</span>

        <span className="center-items">상장</span>
        <span className="center-items">The Best Player of Game</span>
        <span className="right-items">성명</span>
        <span className="center-items">{crapeTalk}</span>
        <span className="center-items">{DAY}</span>
        <span className="center-items">Team D 대표 최현정</span>
      </TheFirstAward>
      <div className="right-items">
        <Buttons onClick={goToMain}></Buttons>
        <Ranking>
          {rankScored !== undefined &&
            rankScored.map((i) => (
              <RankWrap key={i.nickname}>
                <RankText rank={i.rank}>{i.rank}등급</RankText>
                <RankText rank={i.rank} nickname>
                  {i.nickname}
                </RankText>
              </RankWrap>
            ))}
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
    font-size: 1.5;
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

const RankWrap = styled.div`
  display: flex;
  margin: 0.5rem 7rem 1.1rem 10rem;
`;

const RankText = styled.h3<RankTextProps>`
  font-family: 'KyoboHandwriting2019';
  font-size: 3rem;
  ${(props) =>
    props.nickname &&
    css`
      margin-left: 2rem;
    `}

  ${(props) =>
    props.rank === 1 &&
    css`
      color: #e91700;
    `}
    ${(props) =>
    props.rank === 2 &&
    css`
      color: #5282ff;
    `}

  ${(props) =>
    props.rank === 3 &&
    css`
      color: #bc00fe;
    `}
`;
function rankedScore(rankedScore: any) {
  throw new Error('Function not implemented.');
}
