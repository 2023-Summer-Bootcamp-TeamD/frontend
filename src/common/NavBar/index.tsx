import { styled } from 'styled-components';
import KoreanFlag from '@/assets/KoreanFlag.png';
import WallClock from '@/assets/WallClock.png';

const NavBar = () => {
    return (
        <Nav>
            <div>
                <ClassMotto>
                    <span style={{ display: 'block', fontSize: '5rem' }}>급훈</span>
                    <span style={{ fontSize: '4rem' }}>어차피 1등은 D팀</span>
                </ClassMotto>
            </div>
            <div>
                <WallClockImg src={WallClock} />    
            </div>
            <div>
                <KoreanFlagImg src={KoreanFlag} />    
            </div>        
            
        </Nav>
  )
};

export default NavBar;

const Nav = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 20vh;
    width: 100vw;
`

const ClassMotto = styled.div`
    //margin-left: 15vw;

box-sizing: border-box;

//position: absolute;
width: 16vw;
height: 14vh;
//top: 4vh;

background: #FFFFFF;
border: 10px solid #734200;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex: 1;
`

const WallClockImg = styled.img`
    //position: absolute;
    width: 7rem;
    height: 7rem;   
    //top: 8vh;
    //left:45vw;
    flex: 1;
    margin-right: 7vw;
`

const KoreanFlagImg = styled.img`
/* 태극기 */

//position: absolute;
width: 10vw;
height: 12vh;
//top: 5vh;



/* Rectangle 23 */

box-sizing: border-box;



background: #FFFFFF;
border: 10px solid #734200;


/* 태극기 */

flex: 1;


`

