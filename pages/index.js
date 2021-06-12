import Head from "next/head";
import styled from "styled-components";
import Countdown from "react-countdown";
import { useState, useEffect, useContext } from "react";

import GlobalStyle from "../style/global-style";

import Timer from "../components/Timer";
import Steps from "../components/Steps";
import Modal from "../components/Modal";
import SettingsButton from "../components/SettingsButton";
import SettingsWindow from "../components/SettingsWindow";

import data from "../data/data.json";
import usePomodero from "../hooks/usePomodoro";
import { SelectedFontContext } from "../context/selectedFontContext";
import { DurationsContext } from "../context/durationsContext";

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
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 4rem;
    font-family: ${(p) => p.theme.fontPrimary[p.selectedFont]};
    font-weight: 700;
  }
`;

export default function Home() {
  // Pomodoro
  const [state, onEnd] = usePomodero();
  const [durations, setDurations] = useContext(DurationsContext);
  const [timer, setTimer] = useState(durations[state]);

  const [selectedFont, setSelectedFont] = useContext(SelectedFontContext);
  //Popin
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    setTimer(durations[state]);
  }, [state, durations]);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/tab1ylb.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <title>Pomodoro App</title>
      </Head>
      <Main selectedFont={selectedFont}>
        <GlobalStyle />
        <h1>pomodoro</h1>
        <Steps steps={data.steps_data} current={state} />
        <Countdown
          autoStart={false}
          zeroPadTime={3}
          date={Date.now() + timer * 1000}
          onComplete={onEnd}
          renderer={(props) => {
            return <Timer {...props} duration={timer} />;
          }}
        />
        <SettingsButton
          isSettingsOpen={isSettingsOpen}
          onClick={toggleSettings}
        />
        <Modal hidden={!isSettingsOpen}>
          <SettingsWindow
            pomodoroStarted={true}
            toggle={toggleSettings}
          ></SettingsWindow>
        </Modal>
      </Main>
    </>
  );
}
