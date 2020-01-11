import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 12vh;
    background: #ECA564;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center
    box-shadow: 0 5px #E68959;
    margin-bottom: 5px;
`;

export const OperatorHead = styled.div`
    height: 12vh;
    background: #ECA564;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center
    box-shadow: 0 5px #E68959;
    margin-bottom: 5px;
    padding: 0 2%;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 30%;
`;

export const NavLinks = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.8rem;
  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 100px;
`;

export const HeroTitle = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 3.2rem;
  font-weight: extra-bold;
`;

export const FormContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 5%;
  color: #fff;
`;

export const MenuButton = styled.div`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  color: #fff;
  background: #232429;
  width: 20rem;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const MainPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: url(https://github.com/agyin3/images/blob/master/food-truck-trackr/shari-sirotnak-IXh_h9UZctc-unsplash.jpg?raw=true)
    rgba(0, 0, 0, 0.4);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FormLabel = styled.label`
 
  font-size:25px;
  margin: 10px;
  font-family: Nunito Sans
  font-weight: Extra Bold
  color: #232429;
`;
export const FormSpacing = styled.form`
  display: flex;

  flex-direction: column;
`;

export const TruckFormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eca564;

  display: flex;
  justify-content: center;
`;
export const InputStyle = styled.input`
  color: #6fb03e;
  max-width: 450px;
  background: #f8f6ee;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 6px solid #232429;
`;
export const TextArea = styled.textarea`

  color: #6fb03e
  max-width: 450px;
	background: #F8F6EE;
	padding: 10px;
	margin: 5px ;
	box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
	border-radius: 10px;
	border: 6px solid #232429;
`;

export const TruckButton = styled.button`
  background: linear-gradient(to bottom, #f0c911 5%, #f2ab1e 100%);
  background-color: #f0c911;
  border-radius: 6px;
  border: 1px solid #232429;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #c92200;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ded17c;
`;

export const CardImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const MenuText = styled.p`
  text-align: center;
`;
export const MenuH2 = styled.h2`
  text-align: center;
`;

export const Body = styled.div`
  height: 100%;
  background: #eca564;
  margin: 0, auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const OperatorBody = styled.div`
  background: #eca564;
  padding: 10px;
`;

export const MyH2 = styled.h2`
color: #232429; 
font-family: Nunito Sans
font-weight: Extra Bold  
 

font-size: 3.6rem; 

 
line-height: 4.4rem;  
text-align: center;
margin: 0 0 12px;
`;
export const MyH3 = styled.h3`
color: #232429; 
font-family: Nunito Sans
font-weight: Extra Bold


font-size: 3.6rem; 
 

line-height: 4.4rem; 
text-align: center;
margin 0 0 12px;
`;

export const OperatorText = styled.p`
color: #fff; 
font-family: 'Droid serif', serif; 
font-size: 2.4rem; 
font-weight: 400; 
font-style: italic; 
line-height: 4.4rem; 
text-align: center;
margin 0 0 12px;
`;

export const TruckCardImg = styled.img`
  width: 200px;
  height: 200px;
  padding: 5px;
`;

export const CardInfo = styled.div`
    tex-align: left;
    font-family: Nunito Sans
    font-weight: Extra Bold
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    color: #232429;
`;

export const Card = styled.div`
  width: 50vw;
  padding: 10px;
  box-shadow: 1px 1px 5px black;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  border: solid 2px #232429;
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding 0 1%;
`;
