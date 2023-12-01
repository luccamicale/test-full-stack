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
import image6 from '../img/image6.png';
import Rectangle from '../img/Rectangle.png';
import imagepreview from '../img/imagepreview.png';
import { BigContainerHome, ButtonButton, ButtonYes, ContainerBigImgText, ContainerBox, ContainerBoxCard, ContainerClarifionLogo, ContainerFooter, ContainerH1, ContainerH2, ContainerHeader, ContainerHome, ContainerIMgTwo, ContainerIconHeaderMobile, ContainerImg, ContainerImgEnd, ContainerImgFace, ContainerImgTextEnd, ContainerInfoHome, ContainerLastText, ContainerLogos, ContainerMainSectionClarifion, ContainerMiniTitle, ContainerName, ContainerNortonSecureLogo, ContainerNumersTitle, ContainerNumersTitle2, ContainerPointBlueText, ContainerSectionInfo, ContainerSpace, ContainerSpanName, ContainerSpanText, ContainerSpanVerify, ContainerStar, ContainerStarSmall, ContainerSteps, ContainerStepsNumber, ContainerStyledText, ContainerSubName, ContainerSubTitle, ContainerTextEnd, ContainerTextFooter, ContainerTextRectangle, ContainerTextThreeFooter, ContainerTextTwoFooter, ContainerTextbig, ContainerTextpoint, ContainerTextred, ContainerTickText, ContainerTitle, ContainerTitleImg, ContainericonHeader, ContainericonStep, Footer, GeneralContainer, Header, ImgHome, MainContainerHome, MainContainersteps, MiniContainerIMg, MiniSectionImg, StyledText, SubContainerNumbers, TextFooterSpan, TextHeader } from "../styles/style.ts";
import Star from "../img/svg/star.tsx";
import PointBlue from "../img/svg/pointBlue.tsx";
import TickCircle from "../img/svg/tickCircle.tsx";
import Porcentage from "../img/svg/porcentage.tsx";
import Lock from "../img/svg/lock.tsx";
import Visa from "../img/svg/visa.tsx";
import PersonalPay from "../img/svg/personal.tsx";
import Paypal from "../img/svg/paypaal.tsx";
import Master from "../img/svg/master.tsx";
import GooglePay from "../img/svg/GooglePay.tsx";
import IphonePay from "../img/svg/iphonePay.tsx";
import Amex from "../img/svg/amex.tsx";
import StarSmall from "../img/svg/startSmall.tsx";
import CheckVerify from "../img/svg/checkVerify.tsx";

function Home() {
  return (
    <GeneralContainer >
      <ContainerHeader>
        <Header>
          <ContainerIconHeaderMobile>
            <CheckHeader />
            <TextHeader>30-DAY SATISFACTION GUARANTEE</TextHeader>
          </ContainerIconHeaderMobile>
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
              <span>Step 1 : </span>Cart Review
            </ContainerStepsNumber>
          </ContainerSteps>

          <ContainerSteps>
            <ContainericonStep>
              <CheckGreen />
            </ContainericonStep>
            <ContainerStepsNumber>
              <span>Step 2 :</span> Checkout
            </ContainerStepsNumber>
          </ContainerSteps>

          <ContainerSteps>
            <ContainericonStep >
              <CircleBlue/>
            </ContainericonStep>
            <ContainerStepsNumber>
              <span>Step 3 : </span>Special Offer
            </ContainerStepsNumber>
          </ContainerSteps>

          <ContainerSteps>
            <ContainericonStep>
              <CircleWhite />
            </ContainericonStep>
            <ContainerStepsNumber>
              <span>Step 4 : </span>Confirmation
            </ContainerStepsNumber>
          </ContainerSteps>
          </MainContainersteps>

          <div style={{display: 'flex', justifyContent: 'center'}}>
            <BigContainerHome>
              <ContainerBigImgText>
                <ContainerImg><ImgHome src={image4} /></ContainerImg>
                
                <ContainerLastText>
                  <ContainerImgFace src={Rectangle}></ContainerImgFace>
                  <ContainerSubName>
                    <ContainerStarSmall>
                      <StarSmall />
                  </ContainerStarSmall>
                    <ContainerName>
                      <ContainerSpanName>Ken T.</ContainerSpanName>
                      <CheckVerify />
                      <ContainerSpanVerify>Verified Customer</ContainerSpanVerify>
                    </ContainerName>
                    <ContainerTextRectangle>
                      “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
                    </ContainerTextRectangle>
                  </ContainerSubName>
                </ContainerLastText>

              </ContainerBigImgText>

              <ContainerInfoHome>
                <ContainerTitleImg>
                  ONE TIME ONLY <span>special price for 6 extra Clarifion for only</span> $14 each <span>($84.00 total!)</span>
                </ContainerTitleImg>
                <MiniSectionImg>
                  <MiniContainerIMg>
                    <ContainerIMgTwo src={imagepreview}></ContainerIMgTwo>
                  </MiniContainerIMg>
                  <ContainerSectionInfo>
                    <ContainerMainSectionClarifion>
                      <ContainerMiniTitle>Clarifion Air Ionizer</ContainerMiniTitle>
                      <SubContainerNumbers>
                        <ContainerNumersTitle>$180</ContainerNumersTitle>
                        <ContainerNumersTitle2>$84</ContainerNumersTitle2>
                      </SubContainerNumbers>
                    </ContainerMainSectionClarifion>
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
                    <ContainerBox>
                      Free Shipping
                    </ContainerBox>
                    <ContainerSpace>|</ContainerSpace>
                    <ContainerBox>
                      <Lock />
                      Secure 256-bit SSL encryption.
                    </ContainerBox>
                    <ContainerSpace>|</ContainerSpace>
                    <ContainerBox>
                      <Visa />
                      <PersonalPay />
                      <Paypal />
                      <Master />
                      <GooglePay />
                      <IphonePay />
                      <Amex />
                    </ContainerBox>
                  </ContainerBoxCard>

                  <ContainerTextred>No thanks, I don’t want this.</ContainerTextred>

                  <ContainerImgTextEnd>
                    <ContainerImgEnd src={image6}></ContainerImgEnd>
                    <ContainerTextEnd>
                      If you are not completely thrilled with your Clarifion - <span>We have a 30 day satisfaction guarantee.</span> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                    </ContainerTextEnd>
                  </ContainerImgTextEnd>
              </ContainerInfoHome>
            </BigContainerHome>

          </div>
        </ContainerHome>
      </MainContainerHome>

      <ContainerFooter>
        <Footer>
          <ContainerTextFooter>
            <ContainerTextTwoFooter>
              <TextFooterSpan>Copyright (c) 2023</TextFooterSpan>
              <span>|</span>
              <TextFooterSpan>Clarifionsupport@clarifion.com</TextFooterSpan>
            </ContainerTextTwoFooter>
            <ContainerTextThreeFooter>
              <Lock />
              <TextFooterSpan>Secure 256-bit SSL encryption.</TextFooterSpan>
            </ContainerTextThreeFooter>
          </ContainerTextFooter>
        </Footer>
      </ContainerFooter>
    </GeneralContainer>
  );
}

export default Home;
