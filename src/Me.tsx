import * as React from 'react';
import styled from 'styled-components';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from './profile';
import self from './self.png';

const Portfolio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Links = styled.div`
    position: absolute;
    padding: 5px 20px 0px 40px;
    top: 0;
    right: -90px;
    font-size: 40px;
    flex-direction: column;
    display: none;
    &:hover {
        display: flex;
    }
`;

const Link = styled.a.attrs(() => ({
    target: '_blank',
}))`
    color: rgb(51, 51, 51);
    &:hover {
        color: #428bca;
    }
    text-decoration: none;
`;

const Portrait = styled.div`
    position: relative;
    &:hover ${Links} {
        display: flex;
    }
`;

const Avatar = styled.img`
    width: 180px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0.5rem;
    &:hover {
        border: 1px solid gray;
    }
`;

const Intro = styled.div`
    width: 100%;
    text-align: center;
    text-align: center;
    font-size: 2em;
    padding: 10px 0px 10px 0px;
    font-weight: 500;
`;

const Desc = styled.div`
    width: 100%;
    text-align: center;
    color: rgba(0, 0, 0, 0.9);
`;

const Me: React.FC = () => {
    return (
        <Portfolio>
            <Portrait>
                <Avatar src={self} alt="Michael Luo" />
                <Links>
                    <Link href={`mailto:${profile.email}`}>
                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                    </Link>
                    <Link href={profile.twitter}>
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </Link>
                    <Link href={profile.linkedin}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link href={profile.github}>
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </Link>
                </Links>
            </Portrait>
            <Intro>{profile.intro}</Intro>
            <Desc>
                {profile.desc} @<Link href={profile.companyLink}>{profile.company}</Link>
            </Desc>
        </Portfolio>
    );
};

export default Me;
