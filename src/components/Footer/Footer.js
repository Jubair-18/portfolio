import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Footer> 
      <LinkList> 
        <LinkColumn> 
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:01990151895">01990151895</LinkItem>
        </LinkColumn>
        <LinkColumn> 
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:mirazOfficial2021@gmail.com">mirazOfficial2021@gmail.com</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer> <Slogan>Innocating one project at a time</Slogan></CompanyContainer>
        <SocialContainer>
          <SocialIcons href="htttps://github.com/Jubair-18">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="htttps://linkdin.com">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="htttps://instagram.com">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>     
        </SocialContainer> 
          </SocialIconsContainer>
      </LinkList>
    </Footer>
  );
};

export default Footer;
