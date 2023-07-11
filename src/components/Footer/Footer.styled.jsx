import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgImg from '../../images/Header/spinachFooter.png';

import {
  FooterFacebookLogo,
  
} from './FooterIcon';

export const BottomFooter = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: row;
  background-image: url(${bgImg});
  background-position: bottom right;
  background-repeat: no-repeat;

  
`;

export const MainContainer = styled.div`
 @media (min-width: 1440px) {
    display: flex;
     
  }
`;

export const Copyright = styled.p`
  color: ${props => props.theme.mainPage.footer.bottomText.text};
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  padding: 28px 0px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -0.1px;
  opacity: 0.5;
  margin-right: 14px;
  &:hover {
    color: ${props => props.theme.mainPage.footer.bottomText.hoverText};
  }

   @media (min-width: 768px) {
    font-size: 14px;
     padding: 32px 0px;
  }

  @media (min-width: 1440px) {
    padding: 50px 0px;
  }
`;

export const TermsofService = styled.p`
  color: ${props => props.theme.mainPage.footer.bottomText.text};
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.1px;
  &:hover {
    color: ${props => props.theme.mainPage.footer.bottomText.hoverText};
  }


   @media (min-width: 768px) {
    font-size: 14px;
     
  }
`;
export const FooterContainer = styled.div`
  height: 435px;
  width: 100%;
  background-color:  ${props => props.theme.mainPage.footer.background} ;

   @media (min-width: 768px) {
     height: 423px;
    
  }

`;
export const FooterInfo = styled.div`
  width: 100%;
  background-color:  ${props => props.theme.mainPage.footer.background} ;
  padding-top: 28px;
  padding-bottom: 18px;
  justify-content: center;
  text-align: center;
  align-items: center;

   @media (min-width: 768px) {
     padding-top: 50px;
    padding-bottom: 24px;
  }
`;
export const FooterFacebookLogoStyled = styled(FooterFacebookLogo)`
  fill: #fff;
  color: #fff;
  background-color: #fafafa;
      width: 30px;
`;
export const LinkSocial = styled.a`
  &:not(:last-child) {
    margin-right: 14px;
  }

   @media (min-width: 768px) {
     &:not(:last-child) {
    margin-right: 18px;
  }
  }
`;
export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const FooterButton = styled.button`
  cursor: pointer;
  padding: 11px 67px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background-color:${props => props.theme.mainPage.footer.button.fill} ;
  color: ${props => props.theme.mainPage.footer.button.text};
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 44px;
  border: none;
  &:hover {
    background-color: ${props => props.theme.mainPage.footer.button.hoverFill};
  }



    @media (min-width: 768px) {
      padding: 16px 50px;
      font-size: 16px;
      line-height: 18px;
    }

    @media (min-width: 1440px) {
      padding: 21px 126px;
    
    }
`;

export const ContainerSvg = styled.div`
  position: absolute;
  top: 16%;
  left: 84px;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    top: 26%;
    left: 177px;
  }

    @media (min-width: 1440px) {
    top: 17%;
    left: 12px;
  }
`;



export const SubscribeContainer = styled.div`
@media (min-width: 1440px) {
    display: block;
    width: 339px;
    margin-top: -60px;}
`;

export const SubscribeTitle = styled.h2`
  display: none;
   @media (min-width: 1440px) {
    display: block;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: ${props => props.theme.mainPage.footer.text};
    margin-bottom: 14px;
    text-align: initial;
  }
`;


export const SubscribeText = styled.p`
  display: none;
   @media (min-width: 1440px) {
    display: block;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.mainPage.footer.text};
    margin-bottom: 28px;
    text-align: initial;
  }
`;


export const Input = styled.input`
  width: 204px;
  height: 38px;
  border: 1px solid #fafafa;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${props => props.theme.mainPage.footer.background};

   
   
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: ${props => props.theme.mainPage.footer.text};
    line-height: 15px;
    padding: 0 42px;
  }




         @media (min-width: 768px) {
           width: 259px;
            height: 50px;
            margin-right: 12px;

              &::placeholder {
                font-size: 14px;
                line-height: 21px;
          }

             @media (min-width: 1440px) {
                width: 338px;
                height: 59px;
                margin-bottom: 16px;
           

              &::placeholder {
                font-size: 18px;
                line-height: 27px;
          }

  }
`;





export const Form = styled.form`
  position: relative;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

     @media (min-width: 768px) {
    flex-direction: initial;
    align-items: baseline;
  }

  @media (min-width: 1440px) {
    display: block;
   
  }
`;


export const LinkStyle = styled(Link)`
  color: ${props => props.theme.mainPage.footer.text};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

export const TextContainer = styled.div`
  

    @media (min-width: 768px) {
      display: flex;
    }
  @media (min-width: 1440px) {
     
     justify-content: center;
  }
 
`;



export const OptionsList = styled.ul`
display: none;

  @media (min-width: 768px) {
   display: block;
   padding-left: 32px;
   margin-right: 175px;
  width: 424px;
  list-style: inside;
  text-align: initial;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${props => props.theme.mainPage.footer.title};
  margin-bottom: 72px;

  @media (min-width: 1440px) {
    padding-left: 100px;
    font-size: 18px;
    line-height: 24px;
    width: 527px;
    margin-right: 159px;
}

 
}
`;

export const OptionsItem = styled.li`
   &:not(:last-child) {
    margin-bottom: 10px;
  }
`;



export const NavLinkItem = styled.li`
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

   @media (min-width: 768px) {
     &:not(:last-child) {
    margin-bottom: 20px;
  }
   }

    @media (min-width: 1440px) {
     &:not(:last-child) {
    margin-bottom: 24px;
  }
   }
`;

export const NavLinkList = styled.ul`
  margin-bottom: 32px;

  @media (min-width: 768px) {
  text-align: initial;
  margin-top: -60px;
}

 @media (min-width: 1440px) {
      margin-right: 235px;
}
`;

export const FooterLogoText = styled.p`
  color: ${props => props.theme.mainPage.footer.title};
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.27px;
  margin-left: 8px;

   @media (min-width: 768px) {
      margin-left: 12px;
      font-size: 28px;
}
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;


  @media (min-width: 768px) {
    justify-content: start;
    margin-left: 32px;
    
}

  @media (min-width: 1440px) {
    justify-content: start;
    margin-left: 100px;
    margin-bottom: 40px;
}
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 32px;
  height: 32px;

  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${props => props.theme.mainPage.footer.logo.background};
`;
