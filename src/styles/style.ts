import styled from 'styled-components';

export const MainContainerHome = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerHome = styled.div`
  width: 100%;
  height: 1320px;
  background: white;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
width: 100%;
height: 50px;
background: #252F3D;
display: flex;
flex-direction: row;
gap: 10%;
justify-content: center;
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.footer`
width: 100%;
height: 50px;
background: #252F3D;

@media (max-width: 740px) {
  height: 65px;
  padding-top: 10px;
}
`;


export const GeneralContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
overflow-x: hidden;
`;

export const ContainericonHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;
  align-items: center;

  @media (max-width: 740px) {
    display: none;
  }
`;

export const TextHeader = styled.p`
color: #FFF;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 12px */
text-transform: capitalize;
`;

export const ContainerLogos = styled.div`
  margin-top: 3%;
  display: flex;
  gap: 65%;
  align-items: center;

  @media (max-width: 740px) {
    gap: 55%;
  }
`;

export const ContainerClarifionLogo = styled.div`
  margin-left: 2%;

  @media (max-width: 740px) {
    width: 10px;
    height: 10px;
  }
`;

export const ContainerNortonSecureLogo = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;

  
`;

export const ContainerH1 = styled.h1`
  color: #000;
font-family: Manrope;
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 48px */
text-transform: capitalize;

@media (max-width: 740px) {
    text-align: center;
    font-size: 32px;
  }
`;

export const ContainerSubTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -20px;
`;

export const ContainerH2 = styled.div`
  color: #4D5254;
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 24px */
text-transform: capitalize;

@media (max-width: 740px) {
    text-align: center;
    color: #4D5254;
width: 80%;
text-align: center;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
text-transform: capitalize;
margin-top: 3%;
  }
`;

export const ContainerSteps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerStepsNumber = styled.p`
color: #000;
font-family: Manrope;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 110%; /* 22px */
text-transform: capitalize;
display: flex;

@media (max-width: 740px) {
    font-size: 10px;
  };

span {
    color: #000;
font-family: Manrope;
font-size: 20px;
font-style: normal;
font-weight: 100;
line-height: 110%; /* 22px */
text-transform: capitalize;

@media (max-width: 740px) {
    display: none;
    
  };
}
`;

export const ContainericonStep = styled.div`
  display: flex;
  margin-top: 5%;
`;

export const MainContainersteps = styled.div`
  display: flex;
  justify-content: center;
  gap: 8%;
  margin-top: 5%;

`;

export const BigContainerHome = styled.div`
border-radius: 10px;
background: #FAFAFA;
width: 92%;
height: 79px;
display: flex;
flex-direction: row;
margin-top: 3%;
gap: 1%;

@media (max-width: 740px) {
  height: 979px;
}
`;

export const ImgHome = styled.img`
  width: 575px;
height: 591px;
display: flex;
margin-top: 6%;
`;

export const ContainerInfoHome = styled.div`
  
`;

export const ContainerImg = styled.div`
  margin-left: 5%;

  @media (max-width: 740px) {
    display: none;
  }
`;

export const ContainerTitleImg = styled.h2`
  color: #2C7EF8;
font-family: Manrope;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 44.8px */
text-transform: capitalize;
width: 85%;

@media (max-width: 740px) {
    font-size: 24px;
    text-align: center;
    margin-left: 5%;
  }

span {
    color: #000;
font-family: Manrope;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 140%;
text-transform: capitalize;
@media (max-width: 740px) {
    font-size: 24px;
  }
}
`;

export const MiniSectionImg = styled.div`
  display: flex;
  gap: 6%;
`;

export const MiniContainerIMg = styled.div`
  background-color: #2C7EF8;
 width: 134px;
height: 134px;
border-radius: 10px;

@media (max-width: 740px) {
width: 80px;
height: 80px;
  }
`;

export const ContainerIMgTwo = styled.img`
  
@media (max-width: 740px) {
width: 80px;
height: 80px;
  }
`;

export const ContainerSectionInfo = styled.div`
  
`;

export const ContainerMiniTitle = styled.span`
  color: #000;
font-family: Manrope;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 28px */
text-transform: capitalize;

@media (max-width: 740px) {
    font-size: 14px;
  }
`;

export const ContainerNumersTitle = styled.span`
  color: #969696;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration-line: strikethrough;
text-transform: capitalize;

@media (max-width: 740px) {
    font-size: 10px;
  }
`;

export const ContainerNumersTitle2 = styled.span`
  color: #2C7EF8;
font-family: Manrope;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 30.8px */
text-transform: capitalize;
margin-left: 10%;

@media (max-width: 740px){
  margin-left: 10%;
}

@media (max-width: 740px) {
    font-size: 14px;
  }
`;

export const SubContainerNumbers = styled.div`
  
`;

export const ContainerStar = styled.div`
  display: flex;
  margin-top: 2%;
`;

export const ContainerPointBlueText = styled.div`
  display: flex;
  margin-top: 2%;
  gap: 12px;
`;

export const ContainerTextpoint = styled.span`
  color: #37465A;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: normal;
`;



export const ContainerTextbig = styled.div`
  color: #4D5254;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
margin-top: 2%;
width: 85%;

@media (max-width: 740px) {
  width: auto;
  margin-top: 10%;
  margin-left: -100px;
  text-align: center;
}
`;

export const ContainerTickText = styled.div`
  display: flex;
  margin-top: 3%;
  gap: 10px;
`;

export const ContainerSpanText = styled.span`
  color: #4D5254;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 25.6px */

span {
    color: #4D5254;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 160%;
}
`;

export const ContainerStyledText = styled.div`
  display: flex;
  gap: 3%;
  align-items: center;
  width: 90%;
  padding: 8px 6px;
  border-radius: 10px;
background: #EDF3FD;
margin-top: 3%;
`;

export const StyledText = styled.p`
  color: #000;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
  
  span {
    color: #2C7EF8;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%;
  }
`;

export const ButtonYes = styled.div`
  display: flex;
padding: 16px 64px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
align-self: stretch;
border-radius: 50px;
background: #59AE43;
margin-top: 3%;
width: 70%;

@media (max-width: 740px) {
    font-size: 14px;
    width: 60%;
    height: 35px;
  }
`;

export const ButtonButton = styled.div`
  color: #FFF;
font-family: Manrope;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;

@media (max-width: 740px) {
    font-size: 14px;
  }
`;

export const ContainerBoxCard = styled.div`
  display: flex;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 16px;
align-self: stretch;
border-radius: 4px;
border: 1px solid #CFCFCF;
margin-top: 3%;
width: 86%;

@media (max-width: 740px) {
  display: flex;
  flex-wrap: wrap;
}
`;

export const ContainerBox = styled.div`
  color: #4D5254;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 16.8px */
text-transform: capitalize;
align-items: center;
`;

export const ContainerSpace = styled.div`
  width: 8px;
height: 24px;
`;

export const ContainerSpace2 = styled.div`
  width: 8px;
height: 24px;

@media (max-width: 740px) {
  display: none;
}
`;

export const ContainerTextred = styled.div`
  color: #F82C2C;
font-family: Manrope;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration-line: underline;
text-transform: uppercase;
display: flex;
justify-content: center;
margin-top: 6%;
`;

export const ContainerImgTextEnd = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
  width: 93%;
  margin-top: 4%;
`;

export const ContainerImgEnd = styled.img`
  
`;

export const ContainerTextEnd = styled.span`
  color: #4D5254;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */

span {
  color: #4D5254;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 140%;
}
`;

export const ContainerBigImgText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerLastText = styled.div`
  display: flex;
width: 575px;
padding: 24px;
align-items: flex-start;
gap: 18px;
border-radius: 10px;
background: #FFF;
margin-left: 5%;
width: 85%;
margin-top: 5%;

@media (max-width: 740px) {
    display: none;
  }
`;

export const ContainerImgFace = styled.img`
  width: 48px;
height: 48px;
`;

export const ContainerStarSmall = styled.div`
  
`;

export const ContainerName = styled.div`
  display: flex;
  gap: 5%;
  align-items: center;
  width: 200px;
`;

export const ContainerSubName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerSpanName = styled.span`
  color: #333;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 100%; /* 14px */
`;

export const ContainerSpanVerify = styled.span`
color: #5BB59A;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 14.4px */
`;

export const ContainerTextRectangle = styled.div`
  color: #4D5254;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
margin-top: 5%;
`;

export const ContainerTextFooter = styled.div`
  display: flex;
  gap: 45%;
  align-items: center;
  margin-top: 1%;

  @media (max-width: 740px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ContainerTextTwoFooter = styled.div`
  margin-left: 5%;
  display: flex;
  gap: 15px;
`;

export const ContainerTextThreeFooter = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const TextFooterSpan = styled.span`
 color: #FFF;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
text-transform: capitalize;

@media (max-width: 740px) {
  font-size: 12px;
}
`;

export const ContainerIconHeaderMobile = styled.div`
  display: none;

  @media (max-width: 740px) {
    display: flex;
    margin-top: 5px;
  align-items: center;
  gap: 30px;
  }
  
`;

export const ContainerMainSectionClarifion = styled.div`
display: flex;
gap: 10%;
`;

export const ContainerCheckTextHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;