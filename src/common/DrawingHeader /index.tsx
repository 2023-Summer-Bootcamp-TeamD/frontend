import { styled } from 'styled-components';

const DrawingHeader = () => {
  return (
    <PageHeader>
      <CircleWrap>우</CircleWrap>
      <CircleWrap>리</CircleWrap>
      <CircleWrap>의</CircleWrap>
      <CircleWrap>작</CircleWrap>
      <CircleWrap>품</CircleWrap>
    </PageHeader>
  );
};

export default DrawingHeader;

const PageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 100vw;
`;

const CircleWrap = styled.div`
  width: 8rem;
  height: 8rem;
  margin-left: 3rem;
  background-color: #fff;
  border: 0 solid;
  border-radius: 50%;
  text-align: center;
  line-height: 8.5rem;
  font-size: 5rem;
  text-shadow: 1px 1px 2px #b8b8b8;
  box-shadow: 4px 4px 3px -1px #a6a6a6;
`;
