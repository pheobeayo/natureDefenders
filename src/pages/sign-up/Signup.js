import React from "react";

import {
    SignupParent,
    SignupWrapper,
    Wrapper,
    FormHeader
} from "./sign.up.styles";
import { Link } from "react-router-dom";
import sideimage1 from "../../assets/sideimage1.png";
import FormTextInput from "../../components/custom-input/FormTextInput";
import FormButton from "../../components/custom-button/FormButton";
import arrow from "../../assets/arrow.png";
import { Checkbox, Stack } from '@chakra-ui/react';






const Signup = () => {


    return (
        <SignupParent>
            <SignupWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>CREATE YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" marginLeft="2rem"/>
                        </FormHeader>
                        <FormTextInput
                            labelName="Full Name"
                            placeholder="e.g Devon Lane"
                            name="fullName"

                        />
                        <FormTextInput
                            labelName="Email address"
                            placeholder="e.g devonlane@gmail.com"
                            name="emailAddress"

                        />
                        <FormTextInput
                            labelName="Wallet Address"
                            placeholder="e.g 0xd914...ABED"
                            name="walletAddress"

                        />
                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"

                        />
                        <h4>Password must contain:</h4>
                        <p> At least 8 characters
                            <br></br>At least one number
                            <br></br>At least one lowercase letter
                            <br></br>At least one uppercase letter</p>
                        <FormTextInput
                            labelName="Country of Residence"
                            placeholder="Nigeria"
                            name="country"

                        />
                         <Stack spacing={5} direction='row' >
                            <Checkbox  size='md'  colorScheme='white' fontSize="0.9rem">

                                By signing up you accept our <Link style={{ textDecoration: 'none', color: '#da8450' }}>Terms of Service</Link> and
                                <Link style={{ textDecoration: 'none', color: '#da8450' }}> private policy</Link>
                            </Checkbox>
                        </Stack>
                        <FormButton
                            text="Create an account"
                            color="#ffffff"
                            borderColor="#DA8450"
                            backgroundColor={"#DA8450"}

                        />
                       
                         Already have an account? <Link to="/sign=in" style={{ textDecoration: 'none', color: '#da8450' }}>Sign in</Link>

                    </form>

                    <div><img src={sideimage1} alt="sideimage1" marginTop={'30px'} height={750} width={500} /></div>
                </Wrapper>
            </SignupWrapper>
        </SignupParent>

    );
};

export default Signup;