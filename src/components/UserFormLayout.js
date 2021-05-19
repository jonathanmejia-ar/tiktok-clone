import React from 'react'
import styled from 'styled-components';
import { CenteredContainer, SmallContainer as SmallContainerTemplate, Title } from '../theme';


const SmallContainer = styled(SmallContainerTemplate)`
    text-align: center;
`;

const Header = styled.header`
    text-align: center;

`;

const UserFormLayout = (props) => {
    return (
        <CenteredContainer>
            <SmallContainer>
                <Header>
                    <img src="/icons/logo.svg" alt="tiktok-logo" height="120" />
                    <div>
                        <Title>
                            TikTok
                    </Title>
                    </div>
                </Header>
                {props.children}
            </SmallContainer>
        </CenteredContainer>
    )
}

export default UserFormLayout;
