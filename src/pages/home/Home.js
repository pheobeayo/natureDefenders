import React from "react";
import {
        HomeParent,
        HomeWrapper,
        NavContainer,
        NavbarLink,
        BigLinkContainer,
        NavWrapper,
        LogoContainer,
        Button,
        ButtonWrapper,
        CentreWrapper,
        Overlay,
        TextContainer,
        GButton,
        LButton,
        ButtonContainer,
        LineContainer,
        TextContainer2,
        NatureWrapper,
        ProjectsWrapper,
        LatestWrapper,
        TheonesWrapper,
        FooterWrapper,
        SubfooterWrapper
} from "./home.styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search-icon.png";
import landingimage from "../../assets/landingimage.svg";
import line from "../../assets/line.png";
import Naturedefenders from "../../components/naturedefenders/Naturedefenders";
import Projects from "../../components/projects/Projects";
import Latest from "../../components/latest/Latest";
import Theones from "../../components/theones/Theones";
import Footer from "../../components/footer/Footer";
import Subfooter from "../../components/subfooter/Subfooter";







const Home = () => {
        

        return (
                <HomeParent>
                        <HomeWrapper>
                                <NavContainer>
                                        <NavWrapper>
                                                <LogoContainer><img src={logo} alt="logo" />
                                                        <h1>NatureDefenders</h1></LogoContainer>
                                                <BigLinkContainer>
                                                        <NavbarLink><Link to='/' style={{ textDecoration: 'none', color: 'white' }} >Home</Link></NavbarLink>
                                                        <NavbarLink> <Link to='/ongoing-projects' style={{ textDecoration: 'none', color: 'white' }}>Explore</Link></NavbarLink>
                                                        <NavbarLink><Link to='/nft-rewards' style={{ textDecoration: 'none', color: 'white' }}>NFTs reward</Link></NavbarLink>
                                                        <NavbarLink><Link style={{ textDecoration: 'none', color: 'white' }}>About us </Link></NavbarLink>
                                                        <NavbarLink><Link style={{ textDecoration: 'none', color: 'white' }}>FAQs</Link></NavbarLink>
                                                </BigLinkContainer>
                                                <ButtonWrapper><img src={searchIcon} alt="search-icon" width={18} height={18} />
                                                        <Button>Connect Wallet</Button></ButtonWrapper>
                                        </NavWrapper>
                                </NavContainer>
                                <CentreWrapper>
                                        <Overlay></Overlay>
                                      
                                        <img src={landingimage} alt="landingimage" />
                                        <TextContainer><h1>01 Empowering Conservation</h1>
                                                <h2>Heroes</h2>
                                                <br></br> <h3>NatureDefenders empowers individuals and
                                                        <br></br>organizations to protect African wildlife through
                                                        <br></br>transparent blockchain-powered fundraising,
                                                        <br></br>while rewarding supporters with exclusive NFTs
                                                        <br></br>as a token of appreciation</h3>

                                                <ButtonContainer> <GButton>Get Started</GButton>
                                                        <LButton>Learn more</LButton>

                                                </ButtonContainer>
                                                <LineContainer><h3>01<img src={line} alt="line" /></h3>

                                                </LineContainer>
                                        </TextContainer>
                                        <TextContainer2>
                                                <p> Cheetahs are the fastest land animals, known for their
                                                        <br></br>incredible speed and agility, inhabiting sub-Saharan Africa
                                                        <br></br>and facing conservation challenges due to habitat loss and
                                                        <br></br>human-wildlife conflict.</p>
                                        </TextContainer2>

                                </CentreWrapper>
                                <NatureWrapper>
                                        <Naturedefenders />
                                </NatureWrapper>
                                <ProjectsWrapper>
                                        <Projects />
                                </ProjectsWrapper>
                                <LatestWrapper>
                                        <Latest />
                                </LatestWrapper>
                                <TheonesWrapper>
                                        <Theones />
                                </TheonesWrapper>

                                <FooterWrapper>
                                        <Footer />
                                </FooterWrapper>
                                <SubfooterWrapper>
                                        <Subfooter />
                                </SubfooterWrapper>
                        </HomeWrapper>



                </HomeParent>




        )



}


export default Home;