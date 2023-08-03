import { styled } from 'styled-components';
import Award from '@/assets/award.png';
import RankingMemo from '@/assets/rankingMemo.png';
import DrawingRoom from '@/assets/drawingRoomIcon.png';
import { useLocation, useNavigate } from 'react-router-dom';
import wrong from '@/assets/wrong.png';
import { DAY, crapeTalk } from '@/constants/rank';
import { useEffect, useState } from 'react';
import GoldMedal from '@/assets/goldMedal.png';
import SilverMedal from '@/assets/silverMedal.png';
import BronzeMedal from '@/assets/bronzeMedal.png';
import { UserRankType } from '@/types/userRank';

const GameResult = () => {
  const userList: UserRankType[] = useLocation().state;
  const naviagte = useNavigate();
  const [bestPlayers, setBestPlayers] = useState<string>('');
  const [userRank, setUserRank] = useState<UserRankType[]>([]);
  let currentRanking = 1;
  let isTiedCount = 0; // 둉졈자 수

  const goToMain = () => naviagte('/');
  const goToDrwaingRoom = () => naviagte('/drawingroom');
  console.log(userList);
  console.log(userList[0]);
  const getGameResults = async () => {
    console.log(userList);
    const ranking: UserRankType[] = userList.sort((a, b) => a.score - b.score);
    setUserRank(ranking);
    if (ranking.length !== 0) {
      ranking.sort((a, b) => b.score - a.score);
      const maxScore = ranking[0].score;
      const bestPlayerArray: UserRankType[] = ranking.filter(
        (user) => user.score === maxScore,
      );
      let nameOfBestPlayers = '';
      bestPlayerArray.map((user, index) => {
        if (index === 0) {
          nameOfBestPlayers += user.nickname;
        } else {
          nameOfBestPlayers += ', ' + user.nickname;
        }
      });
      setBestPlayers(nameOfBestPlayers);
    }
  };

  useEffect(() => {
    getGameResults();
  }, []);

  return (
    <GameResultContainer>
      <TheFirstAward>
        <span className="right-items">발급번호: Techeer-600000호</span>
        <span className="center-items">상장</span>
        <span className="center-items">The Best Player of Game</span>
        <span className="right-items">성 명 {bestPlayers}</span>
        <span className="center-items">{crapeTalk}</span>
        <span className="center-items">{DAY}</span>
        <span className="center-items">Team D 대표 최현정</span>
      </TheFirstAward>
      <div className="right-items">
        <Buttons onClick={goToMain}> </Buttons>
        <Ranking>
          {userList
            ?.sort((a, b) => b.score - a.score)
            ?.map((user, index) => {
              if (index !== 0) {
                if (userRank[index - 1]?.score === user?.score) {
                  isTiedCount++;
                } else {
                  currentRanking++;
                  currentRanking += isTiedCount;
                  isTiedCount = 0;
                }
              }
              return (
                <UserInRanking key={index} rank={currentRanking}>
                  <Medal rank={currentRanking} />
                  {currentRanking}등급 {user.nickname}
                </UserInRanking>
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
    font-size: 1.5rem;
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

  @media (max-width: 768px) {
    width: 42vw;
    height: 50vh;
    background-size: 42vw 50vh;
    & > span {
      margin: 3rem 0;
    }
    span {
      font-size: 1rem;
    }
    span:nth-child(2) {
      font-size: 2rem;
      margin-top: 2rem;
    }
    span:nth-child(3) {
      font-size: 1rem;
    }
    span:nth-child(4) {
      font-size: 1rem;
      margin-top: 0;
      margin-bottom: 1rem;
    }
    span:nth-child(5) {
      font-size: 1.7rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
    span:nth-child(6) {
      font-size: 1rem;
      margin-top: 5rem;
    }
    span:nth-child(7) {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
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
  background-size: contain;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:first-child {
    background-image: url(${wrong});
  }
  &:last-child {
    background-color: transparent;
  }
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    margin-bottom: 6rem;
    margin-left: 20.5rem;

    & > img {
      width: 5rem;
      height: 5rem;
    }
  }
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
`;

const Medal = styled.img<{ rank: number }>`
  width: 4rem;
  ${(props) => {
    if (props.rank === 1) {
      return `content: url(${GoldMedal});`;
    } else if (props.rank === 2) {
      return `content: url(${SilverMedal});`;
    } else if (props.rank === 3) {
      return `content: url(${BronzeMedal});`;
    }
  }}
`;

const UserInRanking = styled.span<{ rank: number }>`
  font-size: 4.4rem;
  font-weight: 700;
  color: ${(props) => {
    if (props.rank === 1) {
      return '#e94600';
    } else if (props.rank === 2) {
      return '#5282ff';
    } else if (props.rank === 3) {
      return '#bc00fe';
    }
  }};
`;
