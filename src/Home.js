import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 200px;
    padding: 50px;

    & a{
        color: green;
    }
`;

const Button = styled.button`
    border: 1px solid red;
    background-color: transparent;
    outline: 0;
    font-size: 1em;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
    border-radius: 2px;
    //background-color: ${({ primary }) => primary ? 'orange' : 'slateblue'};
`;

const PrimaryButton = styled(Button)`
    background-color: red;
    border: 0;
`;

const Home = () => {
    return (
        <Container>
            <Button >Send</Button>
            <PrimaryButton>Send</PrimaryButton>
        </Container>
    )
}

export default Home;
