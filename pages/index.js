import Head from "next/head";
import styled from "styled-components";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";

import GlobalStyle from "./style/global-style";

import Timer from "../components/Timer";

import data from "../data/test.json";
import usePomodero from "../hooks/usePomodero";

const Main = styled.main`
  background-color: ${(p) => p.theme.bg};
  width: 100vw;
  min-height: 100vh;
  color: ${(p) => p.theme.text};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 4rem;

  h1 {
    font-size: 2.6rem;
    font-weight: bold;
    margin-bottom: 4rem;
  }
`;

const Steps = styled.div`
  background-color: ${(p) => p.theme.bgDark};
  border-radius: 4rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
`;

const Step = styled.button`
  outline: none;
  padding: 1.5rem 2.8rem;
  background-color: ${(p) =>
    p.active ? p.theme.colorPrimary : p.theme.bgDark};
  border: none;
  border-radius: 4rem;
  color: ${(p) => (p.active ? p.theme.bgDark : p.theme.textGrey)};
  font-weight: bold;
`;

export default function Home() {
  const [state, onEnd] = usePomodero();

  const [timer, setTimer] = useState(data.steps_data[state].duration);

  useEffect(() => {
    setTimer(data.steps_data[state].duration);
  }, [state]);

  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Main>
        <GlobalStyle />
        <h1>pomodoro</h1>
        <Steps>
          {data.steps_data.map((step, i) => (
            <Step key={step.name} active={i === state}>
              {step.title}
            </Step>
          ))}
        </Steps>
        <Countdown
          autoStart={false}
          zeroPadTime={3}
          date={Date.now() + timer * 1000}
          onComplete={onEnd}
          renderer={(props) => {
            return <Timer {...props} duration={timer} />;
          }}
        />
      </Main>
    </>
  );
}
