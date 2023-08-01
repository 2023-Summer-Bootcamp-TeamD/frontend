import React, { useEffect, useState } from 'react';
import GameBoard from '@/components/Game/GameBoard';
import GameNav from '@/components/Game/GameNav';
import UsersChat from '@/components/Game/UsersChat';
import { keyframes, styled } from 'styled-components';
import pencil from '@/assets/pencil.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSocketContext } from '@/context/SocketContext';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  categoryIdState,
  currentRoundState,
  nicknameState,
  playerMaxCountState,
  remainTimeState,
  roundGameState,
  timeState,
  userListState,
  uuidState,
} from '@/atom/game';
import { UserListType } from '@/types/gameInfo';
import useDidMountEffect from '@/hooks/useDidMountEffect';

const Game = () => {
  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;
  const hostData = useLocation().state;
  const navigate = useNavigate();
  const { UUID } = useParams();
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [currentFocus, setCurrentFocus] = useState(pencil);
  const [start, setStart] = useState(false);
  const setUUID = useSetRecoilState(uuidState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [max_Player_num, setMax_Player_num] =
    useRecoilState(playerMaxCountState);
  const [category_id, setCategory_id] = useRecoilState(categoryIdState);
  const [time, setTime] = useRecoilState(timeState);
  const [userList, setUserList] = useRecoilState(userListState);
  const [currentRound, setCurrentRound] = useRecoilState(currentRoundState);
  const [remainTime, setRemainTime] = useRecoilState(remainTimeState);
  const [socketInitialized, setSocketInitialized] = useState(false);
  const [roundGame, setRoundGame] = useRecoilState(roundGameState);
  const [waveText, setWaveText] = useState('');

  const xyHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setXY({ x: mouseX, y: mouseY });
  };

  useEffect(() => {
    setWaveText(`${roundGame.drawer}님이 그림을 그리고 있어요 ~!`);
  }, [roundGame, currentRound]);

  useEffect(() => {
    if (socket && isConnected && hostData.entry_code) {
      socket.emit('createRoom', UUID);
    }

    return () => {
      socket?.off('createRoom');
    };
  }, []);

  //방 생성하기
  useEffect(() => {
    if (socket && isConnected && !socketInitialized) {
      //방장만 호출
      socket.emit('createUser', { nickname: hostData.nickname, roomId: UUID });
      socket.on('updateUserInfo', (data: UserListType) => {
        setUserList((prevArray) => [...prevArray, data]);
      });
    }
    setSocketInitialized(true);
    return () => {
      socket?.off('createUser');
      socket?.off('updateUserInfo');
    };
  }, []);

  //game 정보 가져오기
  useEffect(() => {
    if (UUID) setUUID(UUID);
    setNickname(hostData.nickname);
    setMax_Player_num(hostData.player_num);
    setCategory_id(hostData.category_id);
    setTime(hostData.time);
  }, []);

  //방장만 startRound 실행하게
  useDidMountEffect(() => {
    if (socket && isConnected && start && hostData.entry_code) {
      socket?.emit('startRound', {
        roomId: UUID,
        limitedTime: time,
        category_id: hostData.category_id,
      });
    }
    return () => {
      socket?.off('startRound');
    };
  }, [start, currentRound]);

  //라운드 시작 시
  useDidMountEffect(() => {
    if (socket && isConnected && start) {
      socket.on('startRoundTimer', (data) => {
        setRemainTime(Math.floor((data.endTime - data.startTime) / 1000));
      });

      socket.on('updateScores', (data) => {
        const result = Object.entries(data.scores).map(([key, score]) => ({
          nickname: key,
          score: score,
        }));
        setUserList(result);
      });

      socket.on('announceRoundInfo', (data) => {
        setRoundGame(data);
      });

      return () => {
        if (socket && isConnected) {
          socket.off('startRoundTimer');
          socket.off('updateScores');
          socket.off('announceRoundInfo');
        }
      };
    }
  }, [start, currentRound]);

  //게임이 끝났을 떄
  useEffect(() => {
    console.log(userList);
    if (currentRound > max_Player_num && max_Player_num !== 0) {
      navigate('/result', { state: userList });
    }
  }, [currentRound]);

  return (
    <GamePage onMouseMove={xyHandler}>
      <Nav>
        <GameNav start={start} />
      </Nav>
      <Section>
        <div>
          <div>
            <GameBoard
              start={start}
              setStart={setStart}
              setCurrentFocus={setCurrentFocus}
            />
            <DrawingUser>
              {start &&
                nickname &&
                waveText.split('').map((char, index) => (
                  <WaveText
                    key={index}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {char}
                  </WaveText>
                ))}
            </DrawingUser>
          </div>

          <UsersChat {...hostData} />
        </div>
      </Section>
      <Cursor
        style={{
          transform: `translate(${xy.x}px, ${xy.y}px)`,
        }}
        src={currentFocus}
        xy={xy}
      />
    </GamePage>
  );
};

export default Game;

const GamePage = styled.div`
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(to bottom, #faf1e5 60vh, #c9cb81 40vh);
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  & > div {
    width: 100%;
    max-width: 120rem;
    height: calc(100vh - 120px);
    color: white;
    display: flex;
    justify-content: space-around;
    padding-top: 3rem;
    z-index: 2;
  }
`;

const waveAnimation = keyframes`
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-10px)
  }
`;

const DrawingUser = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const WaveText = styled.span`
  font-size: 4.5rem;
  display: inline-block;
  margin-right: 0.8rem;
  margin-top: 1rem;
  animation: ${waveAnimation} 1.5s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`;

const Cursor = styled.img<{ xy: { x: number; y: number } }>`
  position: absolute;
  width: 30px;
  height: 30px;
  left: -15px;
  top: -15px;
  z-index: 2;
  pointer-events: none;
`;
