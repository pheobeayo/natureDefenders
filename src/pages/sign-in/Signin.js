import React from "react";

import {
    SigninParent,
    SigninWrapper,
    Wrapper,
    FormHeader
} from "./sign.in.styles";
import { Link } from "react-router-dom";
import sideimage2 from "../../assets/sideimage2.png";
import FormTextInput from "../../components/custom-input/FormTextInput";
import FormButton from "../../components/custom-button/FormButton";
import arrow from "../../assets/arrow.png";
import { Checkbox, Stack } from '@chakra-ui/react';






const Signin = () => {


    return (
        <SigninParent>
            <SigninWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>SIGN INTO YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" />
                        </FormHeader>
                        
                        <FormTextInput
                            labelName="Email address"
                            placeholder="e.g devonlane@gmail.com"
                            name="emailAddress"

                        />
                       
                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"

                        />
                        
                        

                        <FormButton
                            text="Sign in"
                            color="#ffffff"
                            borderColor="#DA8450"
                            backgroundColor={"#DA8450"}

                        />
                        <Stack spacing={5} direction='row' >
                            <Checkbox  size='sm'  colorScheme='white'>

                                By signing up you accept our <Link style={{ textDecoration: 'none', color: '#DA8450' }}>Terms of Service </Link> and
                                    <Link style={{ textDecoration: 'none', color: '#DA8450' }}>  private policy</Link>
                            </Checkbox>
                        </Stack>
                        <p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#DA8450' }}>Sign up</Link></p>


                    </form>

                    <div><img src={sideimage2} alt="sideimage2" height={750} width={500} /></div>
                </Wrapper>
            </SigninWrapper>
        </SigninParent>

    );
};

export default Signin;