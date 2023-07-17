import { styled } from 'styled-components';
import KoreanFlag from '@/assets/KoreanFlag.png';
import Clock from '@/assets/WallClock.png';

const Header = () => {
  return (
    <PageHeader>
      <div>
        <ClassMotto>
          <span>급훈</span>
          <span>어차피 1등은 D팀</span>
        </ClassMotto>
      </div>
      <div>
        <WallClockImg src={Clock} />
      </div>
      <div>
        <KoreanFlagImg src={KoreanFlag} />
      </div>
    </PageHeader>
  );
};

export default Header;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 180px;
  width: 100vw;
`;

const ClassMotto = styled.div`
  width: 16vw;
  height: 14vh;
  background: #ffffff;
  border: 0.7rem solid #734200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :first-child {
    display: block;
    font-size: 4.5rem;
  }
  :last-child {
    font-size: 3.5rem;
  }
`;

const WallClockImg = styled.img`
  height: 7rem;
  margin-right: 7vw;
`;

const KoreanFlagImg = styled.img`
  width: 10vw;
  height: 12vh;
  background: #ffffff;
  border: 0.7rem solid #734200;
`;
