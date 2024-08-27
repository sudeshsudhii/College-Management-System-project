import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.jpg";
import { LightPurpleButton } from '../components/buttonStyles';
import { CenterFocusStrong } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0} justifyContent={'center'}>
                <Grid item xs={6} md={6} display={'flex'} justifyContent={"center"}>
                    <img src={Students} alt="students" style={{ width: '70%' }} />
                </Grid>
                <Grid item xs={10} md={0}>
                    <StyledPaper elevation={1}>
                        <StyledTitle style={{textAlign:'center'}}>
                            Welcome to College Management System
                        </StyledTitle>
                        <StyledText>
                            
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#FFFFFF"}}>
                                    Sign up
                                </Link>
                                <StyledButton to="/Adminregister" color="#FFFFFF">
                                    Sign up
                                </StyledButton>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #CC0000;
`;

const StyledPaper = styled.div`
  padding: 2px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: top;
  color: #FFFFFF;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem; /* Reduced font size to 7rem */
  color: #FFFFFF;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #FFFFFF; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #FFFFFF;
  transition: all 0.3s ease;
  &:hover {
    background-color: #FFFFFF;
    color: #CC0000;
  }
`;
