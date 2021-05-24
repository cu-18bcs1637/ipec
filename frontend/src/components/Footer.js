// import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'

// const Footer = () => {
//   return (
//     <footer style={{backgroundColor: 'black'}}>
//       <Container>
//         <Row>
//           <Col className='text-center py-3' style={{color: 'white'}}>Copyright &copy; </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }

// export default Footer
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import{FooterContainer, FooterWrap,FooterLinksContainer,
    FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,
    FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,WebsiteRights, SocialIconLink} from './FooterElements';


 const Footer = () => {
    return (
       <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle> About us</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle> Contact us</FooterLinkTitle>
                        <FooterLink to="/">Contact</FooterLink>
                        <FooterLink to="/">Support </FooterLink>
                        <FooterLink to="/">Destinations</FooterLink>
                        <FooterLink to="/">Sponsorships</FooterLink>
                        
                </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Category</FooterLinkTitle>
                        <FooterLink to="/">Softwares</FooterLink>
                        <FooterLink to="/">IPEC</FooterLink>
                        <FooterLink to="/">Partners</FooterLink>
                        <FooterLink to="/">Products</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Help Center</FooterLinkTitle>
                        <FooterLink to="/">24 X 7 Customer Care</FooterLink>
                        <FooterLink to="/">Mohali, Punjab</FooterLink>
                        <FooterLink to="/">+91-99999-88888</FooterLink>
                        <FooterLink to="/">ipec1234@gmail.com</FooterLink>
                </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                <SocialLogo to ='/'>
                      
                    </SocialLogo>
                    <WebsiteRights>IPEC © {new Date().getFullYear() } 
                      . All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedinIn />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
       </FooterContainer>
    )
}
 export default Footer;
