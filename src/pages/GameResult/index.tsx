import { styled } from 'styled-components';
import Award from '@/assets/Award.png';
import RankingMemo from '@/assets/RankingMemo.png';
import DrawingRoom from '@/assets/DrawingRoomIcon.png';
import { useNavigate } from 'react-router-dom';

const GameResult = () => {
  const naviagte = useNavigate();

  const xButtonClick = () => naviagte('/');
  const drawingRoomButtonClick = () => naviagte('/drawingroom');

  const bestPlayerName = '서 근 재';
  const nowDate = new Date();

  return (
    <GameResultContainer>
      <TheFirstAward>
        <span className="right-items">발급번호: Techeer-600000호</span>
        <span className="center-items">상장</span>
        <span className="center-items">The Best Player of Game</span>
        <span className="right-items">성명 {bestPlayerName}</span>
        <span className="center-items">
          위 사람은 Team-D에서 만든 핑고빙고 게임에서 우수한 성적을 거두었기에
          이 상장을 수여함.
        </span>
        <span className="center-items">
          {nowDate.getFullYear()}년 {nowDate.getMonth() + 1}월{' '}
          {nowDate.getDate()}일
        </span>
        <span className="center-items">Team D 대표 최현정</span>
      </TheFirstAward>
      <div className="right-items">
        <Buttons onClick={xButtonClick}>X</Buttons>
        <Ranking>
          <span>1등급 </span>
          <span>2등급</span>
          <span>3등급</span>
          <span>4등급</span>
          <span>5등급</span>
          <span>6등급</span>
          <span>7등급</span>
          <span>8등급</span>
        </Ranking>
        <Buttons onClick={drawingRoomButtonClick}>
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
    font-size: 3rem;
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

const Buttons = styled.button`
  margin-left: auto;
  border: 0;
  width: 4rem;
  height: 4rem;
  background-color: white;
  border-radius: 3rem;
  margin-bottom: 3rem;
  font-size: 2rem;
  &:hover {
    transform: translateY(-5px);
  }
  &:last-child {
    background-color: transparent;
    margin-right: 5rem;
  }
  & > img {
    width: 8rem;
  }
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
    font-size: 4.5rem;
  }
`;
