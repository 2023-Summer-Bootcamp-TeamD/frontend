import { styled } from 'styled-components';
import KoreanFlag from '@/assets/koreanFlag.png';
import Clock from '@/assets/wallClock.png';
import HeaderResponse from '@/constants/HeaderResponsive';
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
  @media ${HeaderResponse.HeaderTheme.SmallMedium} {
    height: 160px;
  }
  @media ${HeaderResponse.HeaderTheme.SemiSmallSmall} {
    height: 140px;
  }
  @media ${HeaderResponse.HeaderTheme.TabletSemiSmall} {
    height: 120px;
  }
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
  @media ${HeaderResponse.HeaderTheme.SemiSmallSmall} {
    width: 14vw;
    height: 12vh;
    :first-child {
      font-size: 3rem;
    }
    :last-child {
      font-size: 2.5rem;
    }
  }
  @media ${HeaderResponse.HeaderTheme.TabletSemiSmall} {
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
  @media ${HeaderResponse.HeaderTheme.SmallMedium} {
    height: 6rem;
  }
  @media ${HeaderResponse.HeaderTheme.SemiSmallSmall} {
    height: 5rem;
  }
  @media ${HeaderResponse.HeaderTheme.TabletSemiSmall} {
    height: 4.5rem;
  }
`;

const KoreanFlagImg = styled.img`
  width: 10vw;
  height: 12vh;
  background: #ffffff;
  border: 0.7rem solid #734200;
  @media ${HeaderResponse.HeaderTheme.SmallMedium} {
    width: 10vw;
    height: 12vh;
  }
  @media ${HeaderResponse.HeaderTheme.SemiSmallSmall} {
    width: 9vw;
    height: 11vh;
  }
  @media ${HeaderResponse.HeaderTheme.TabletSemiSmall} {
    width: 8vw;
    height: 10vh;
  }
`;
