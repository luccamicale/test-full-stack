import CheckHeader from "../img/svg/check.tsx";
import CheckCircleHeader from "../img/svg/checkcircle.tsx";
import CheckGreen from "../img/svg/checkgreen.tsx";
import CircleBlue from "../img/svg/circleBlue.tsx";
import CircleWhite from "../img/svg/circleWhite.tsx";
import ClarifionLogo from "../img/svg/clarifionLogo.tsx";
import HeartHeader from "../img/svg/heart.tsx";
import NortonLogo from "../img/svg/norton.tsx";
import SecureLogo from "../img/svg/secureLogo.tsx";
import TruckHeader from "../img/svg/truck.tsx";
import image4 from '../img/image4.png';
import imagepreview from '../img/imagepreview.png';
import { BigContainerHome, ButtonButton, ButtonYes, ContainerBoxCard, ContainerClarifionLogo, ContainerFooter, ContainerH1, ContainerH2, ContainerHeader, ContainerHome, ContainerIMgTwo, ContainerImg, ContainerInfoHome, ContainerLogos, ContainerMiniTitle, ContainerNortonSecureLogo, ContainerNumersTitle, ContainerNumersTitle2, ContainerPointBlueText, ContainerSectionInfo, ContainerSpanText, ContainerStar, ContainerSteps, ContainerStepsNumber, ContainerStyledText, ContainerSubTitle, ContainerTextbig, ContainerTextpoint, ContainerTickText, ContainerTitle, ContainerTitleImg, ContainericonHeader, ContainericonStep, Footer, GeneralContainer, Header, ImgHome, MainContainerHome, MainContainersteps, MiniContainerIMg, MiniSectionImg, StyledText, SubContainerNumbers, TextHeader } from "../styles/style.ts";
import Star from "../img/svg/star.tsx";
import PointBlue from "../img/svg/pointBlue.tsx";
import TickCircle from "../img/svg/tickCircle.tsx";
import Porcentage from "../img/svg/porcentage.tsx";

function Home() {
  return (
    <GeneralContainer >
      <ContainerHeader>
        <Header>
          <ContainericonHeader>
            <CheckHeader />
            <TextHeader>30-DAY SATISFACTION GUARANTEE</TextHeader>
          </ContainericonHeader>
          <ContainericonHeader>
            <TruckHeader />
            <TextHeader>Free delivery on orders over $40.00</TextHeader>
          </ContainericonHeader>
          <ContainericonHeader>
            <HeartHeader />
            <TextHeader>50.000+ HAPPY CUSTOMERS</TextHeader>
          </ContainericonHeader>
          <ContainericonHeader>
            <CheckCircleHeader />
            <TextHeader>100% Money Back Guarantee</TextHeader>
          </ContainericonHeader>
        </Header>
      </ContainerHeader>

      <MainContainerHome>
        <ContainerHome>
          <ContainerLogos>
            <ContainerClarifionLogo>
              <ClarifionLogo />
            </ContainerClarifionLogo>
            <ContainerNortonSecureLogo>
              <SecureLogo />
              <NortonLogo />
            </ContainerNortonSecureLogo>
          </ContainerLogos>

          <ContainerTitle>
            <ContainerH1>Wait ! your order in progress.</ContainerH1>
          </ContainerTitle>
          <ContainerSubTitle>
            <ContainerH2>Lorem ipsum dolor sit amet, consectetur adipiscing </ContainerH2>
          </ContainerSubTitle>

          <MainContainersteps>
          <ContainerSteps>
            <ContainericonStep>
              <CheckGreen />
            </ContainericonStep>
            <ContainerStepsNumber>
              Step 1 : Cart Review
            </ContainerStepsNumber>
          </ContainerSteps>

          <ContainerSteps>
            <ContainericonStep>
              <CheckGreen />
            </ContainericonStep>
            <ContainerStepsNumber>
              Step 2 : Checkout
            </ContainerStepsNumber>
          </ContainerSteps>

          <ContainerSteps>
            <ContainericonStep>
              <CircleBlue />
            </ContainericonStep>
            <ContainerStepsNumber>
              <span>Step 3 : Special Offer</span>
            </ContainerStepsNumber>
          </ContainerSteps>

          <ContainerSteps>
            <ContainericonStep>
              <CircleWhite />
            </ContainericonStep>
            <ContainerStepsNumber>
              Step 4 : Confirmation
            </ContainerStepsNumber>
          </ContainerSteps>
          </MainContainersteps>

          <div style={{display: 'flex', justifyContent: 'center'}}>
            <BigContainerHome>
              <ContainerImg><ImgHome src={image4} /></ContainerImg>
              <ContainerInfoHome>
                <ContainerTitleImg>
                  ONE TIME ONLY <span>special price for 6 extra Clarifion for only</span> $14 each <span>($84.00 total!)</span>
                </ContainerTitleImg>
                <MiniSectionImg>
                  <MiniContainerIMg>
                    <ContainerIMgTwo src={imagepreview}></ContainerIMgTwo>
                  </MiniContainerIMg>
                  <ContainerSectionInfo>
                    <div style={{display: 'flex', gap: '90px'}}>
                      <ContainerMiniTitle>Clarifion Air Ionizer</ContainerMiniTitle>
                      <SubContainerNumbers>
                        <ContainerNumersTitle>$180</ContainerNumersTitle>
                        <ContainerNumersTitle2>$84</ContainerNumersTitle2>
                      </SubContainerNumbers>
                    </div>
                    <ContainerStar>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </ContainerStar>
                    <ContainerPointBlueText>
                      <PointBlue />
                      <ContainerTextpoint>12 left in Stock</ContainerTextpoint>
                    </ContainerPointBlueText>
                    <ContainerTextbig>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</ContainerTextbig>
                  </ContainerSectionInfo>
                </MiniSectionImg>
                  <ContainerTickText>
                    <TickCircle />
                    <ContainerSpanText>Negative Ion Technology may <span>help with allergens</span></ContainerSpanText>
                  </ContainerTickText>
                  <ContainerTickText>
                    <TickCircle />
                    <ContainerSpanText>Designed for <span>air rejuvenation</span></ContainerSpanText>
                  </ContainerTickText>
                  <ContainerTickText>
                    <TickCircle />
                    <ContainerSpanText><span>Perfect for every room</span> in all types of places.</ContainerSpanText>
                  </ContainerTickText>

                  <ContainerStyledText>
                    <Porcentage />
                    <StyledText>
                      Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each.</span>
                    </StyledText>
                  </ContainerStyledText>

                  <ButtonYes>
                    <ButtonButton>Yes - Claim my discount</ButtonButton>
                  </ButtonYes>

                  <ContainerBoxCard>
                    hola
                  </ContainerBoxCard>
                
              </ContainerInfoHome>
            </BigContainerHome>

          </div>
        </ContainerHome>
      </MainContainerHome>

      <ContainerFooter>
        <Footer>chauuuuuu</Footer>
      </ContainerFooter>
    </GeneralContainer>
  );
}

export default Home;
