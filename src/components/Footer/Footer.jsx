import {
  BottomFooter,
  Copyright,
  TermsofService,
  FooterContainer,
  FooterInfo,
  FooterFacebookLogoStyled,
  LinkSocial,
  IconContainer,
  FooterButton,
  Form,
  ContainerSvg,
  Input,
  NavLinkItem,
  LinkStyle,
  NavLinkList,
  FooterLogoText,
  FooterLogoContainer,
  LogoWrapper,
  TextContainer,
  OptionsList,
  OptionsItem,
  SubscribeContainer,
  SubscribeTitle,
  SubscribeText,
  MainContainer

} from './Footer.styled';

import {
  FooterLogo,
  FooterEmailLogo,
  FooterYoutubeLogo,
  FooterTwitterLogo,
  FooterInstagramLogo,
} from './FooterIcon';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <FooterLogoContainer>
          <LogoWrapper>
            <FooterLogo />
          </LogoWrapper>

          <FooterLogoText>So Yummy</FooterLogoText>
        </FooterLogoContainer>

        
  <MainContainer>
   <TextContainer>
        <OptionsList>
            <OptionsItem>Database of recipes that can be replenished </OptionsItem>
            <OptionsItem>Flexible search for desired and unwanted ingredients</OptionsItem>
            <OptionsItem>Ability to add your own recipes with photos</OptionsItem>
            <OptionsItem>Convenient and easy to use</OptionsItem>
         </OptionsList>

        <NavLinkList>
          <NavLinkItem>
            <LinkStyle to={'/categories/:categoryName'}>Ingredients</LinkStyle>
          </NavLinkItem>
          <NavLinkItem>
            <LinkStyle to={'/add'}>Add recipes</LinkStyle>
          </NavLinkItem>
          <NavLinkItem>
            <LinkStyle to={'/recipe/:recipeId'}>My recipes</LinkStyle>
          </NavLinkItem>
          <NavLinkItem>
            <LinkStyle to={'/favorite'}>Favorites</LinkStyle>
          </NavLinkItem>
          <NavLinkItem>
            <LinkStyle to={'/shopping-list'}>Shopping list</LinkStyle>
          </NavLinkItem>
        </NavLinkList>

        </TextContainer>

        <SubscribeContainer>
          <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
           <SubscribeText>
            Subscribe up to our newsletter. Be in touch with latest news and special
            offers, etc.
          </SubscribeText>



          <Form action="subscribe">
            <ContainerSvg>
                <FooterEmailLogo/> </ContainerSvg>
                <Input type="email" placeholder="Enter your email address" />
            
            <FooterButton type="submit">Subscribe</FooterButton>
          </Form>
          </SubscribeContainer>
        </MainContainer>
        <IconContainer>
          <LinkSocial href="https://www.facebook.com/">
            <FooterFacebookLogoStyled />
          </LinkSocial>
          <LinkSocial href="https://www.youtube.com/">
            <FooterYoutubeLogo />
          </LinkSocial>
          <LinkSocial href="https://twitter.com/">
            <FooterTwitterLogo />
          </LinkSocial>
          <LinkSocial href="https://www.instagram.com/">
            <FooterInstagramLogo />
          </LinkSocial>
          </IconContainer>
       
      </FooterInfo>
      <BottomFooter>
        <Copyright>© 2023 All Rights Reserved.</Copyright>
        <TermsofService>Terms of Service</TermsofService>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;
