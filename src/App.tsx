import styled from "styled-components";
import "./App.css";

import BlueSSULogo from "./assets/icon.png";

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #3045ff;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
    max-width: 200px;
`;

const Title = styled.h1`
    color: #fff;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 900;
    font-size: 32px;
`;

const Description = styled.p`
    color: #fff;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    font-size: 16px;
`;

const GithubURL = styled.a`
    color: rgba(255, 255, 255, 0.5);
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;

    transition: 200ms;

    &:hover {
        text-decoration: underline;
        color: rgba(255, 255, 255, 1);
    }
`;

function App() {
    return (
        <Center>
            <Image src={BlueSSULogo} alt="BlueSSU Logo" />
            <Title>Blue SSU</Title>
            <Description>숭실대학교 개발 프로젝트</Description>
            <GithubURL href="https://github.com/blue-ssu" target="_blank">
                https://github.com/blue-ssu
            </GithubURL>
        </Center>
    );
}

export default App;
