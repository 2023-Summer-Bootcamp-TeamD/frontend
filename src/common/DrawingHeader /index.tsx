import { styled } from 'styled-components';
import Exit from '@/assets/Exit.png';
import Circle from '@/components/DrawingResultCircle';
const DrawingHeader = () => {
  return (
    <PageHeader>
      <WrapBtn>
        <ExitBtn>
          <ExitImg src={Exit} alt="돌아가기" />
          <Text>돌아가기</Text>
        </ExitBtn>{' '}
      </WrapBtn>
      <Circle />
    </PageHeader>
  );
};

export default DrawingHeader;

const WrapBtn = styled.div`
  position: absolute;
  left: 3rem;
  top: 3rem;
`;
const PageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 100%;
`;

const ExitBtn = styled.button`
  position: relative;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const ExitImg = styled.img`
  width: 14rem;
  height: 9rem;
`;
const Text = styled.span`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: bold;
  color: #000000;
`;
