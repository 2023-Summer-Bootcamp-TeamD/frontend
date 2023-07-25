import { styled } from 'styled-components';
import KoreanFlag from '@/assets/KoreanFlag.png';
import Clock from '@/assets/WallClock.png';
import Theme from '@/constants/MainResponsive';
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
  @media ${Theme.HeaderTheme.SemiSmallSmall} {
    width: 14vw;
    height: 12vh;
    :first-child {
      font-size: 3rem;
    }
    :last-child {
      font-size: 2.5rem;
    }
  }
  @media ${Theme.HeaderTheme.TabletSemiSmall} {
    width: 13vw;
    height: 10vh;
    :first-child {
      font-size: 2.5rem;
    }
    :last-child {
      font-size: 2.2rem;
    }
  }
`;

const WallClockImg = styled.img`
  height: 7rem;
  margin-right: 7vw;

  @media ${Theme.HeaderTheme.SmallMedium} {
    height: 6rem;
  }
  @media ${Theme.HeaderTheme.SemiSmallSmall} {
    height: 5rem;
  }
  @media ${Theme.HeaderTheme.TabletSemiSmall} {
    height: 4.5rem;
  }
`;

const KoreanFlagImg = styled.img`
  width: 10vw;
  height: 12vh;
  background: #ffffff;
  border: 0.7rem solid #734200;

  @media ${Theme.HeaderTheme.SmallMedium} {
    width: 10vw;
    height: 12vh;
  }

  @media ${Theme.HeaderTheme.SemiSmallSmall} {
    width: 9vw;
    height: 11vh;
  }

  @media ${Theme.HeaderTheme.TabletSemiSmall} {
    width: 8vw;
    height: 10vh;
  }
`;
