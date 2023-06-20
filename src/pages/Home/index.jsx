import React, { useEffect, useState } from 'react';
import lax from 'lax.js';
import Grid from '@mui/material/Grid';
import { ReactComponent as CatRightSVG } from '../../assets/cat_right.svg';
import { ReactComponent as CatRunSVG } from '../../assets/cat_run.svg';
import { AboutMe, Experiences, Projects } from '../../components/aboutme';
import { ExperienceToolTip } from '../../components/experienceTooltip';
import { ChatBox } from '../../components/chatbox';
import { LeftRunningCat } from '../../components/cats';
import { leftCatAction, runCatAction } from './catActions';
import { IconButton } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import './index.css';

const Home = () => {
  const [text, setText] = useState('Hello!');
  const [showChat, setShowChat] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  let sessionId = window.sessionStorage.getItem('meow-session');

  let userAgentString = navigator.userAgent;
  let chromeAgent = userAgentString.indexOf('Chrome') > -1;
  let safariAgent = userAgentString.indexOf('Safari') > -1;
  // Discard Safari since it also matches Chrome
  if (chromeAgent && safariAgent) safariAgent = false;
  console.log('Safari???', safariAgent);

  const pos = { x: 0, y: 0 };
  const saveCursorPosition = (x, y) => {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--x', pos.x);
    document.documentElement.style.setProperty('--y', pos.y);
  };
  document.addEventListener('mousemove', (e) => {
    saveCursorPosition(e.clientX, e.clientY);
  });

  useEffect(() => {
    lax.init();
    lax.addDriver('scrollY', function () {
      return window.scrollY;
    });
    lax.addElements('.leftcat', leftCatAction);
    lax.addElements('.runcat', runCatAction);
  }, []);

  const openChatHandler = () => {
    setText('');
    setShowChat(true);
    setHasBeenOpened(true);
  };

  return (
    <div style={{ margin: '10vh 0' }}>
      <Grid container rowSpacing={4} justifyContent={'center'}>
        <Grid item xs={11} alignSelf={'center'}>
          <LeftRunningCat className='leftcat' isSafari={safariAgent} />
        </Grid>
        <Grid
          item
          xs={9}
          alignSelf={'center'}
          sx={{
            minHeight: { xs: '36vh', sm: '38vw' },
            fontSize: { xs: '4.0vh', sm: '5.0vw' },
            lineHeight: { xs: '4.5vh', sm: '5.0vw' },
            fontFamily: 'Inconsolata',
          }}
        >
          <AboutMe />
        </Grid>
        <Grid item xs={11} sx={{ display: 'flex' }} alignSelf={'center'}>
          <ExperienceToolTip
            sx={{ width: 'fit-content' }}
            arrow
            placement='left'
            title={
              <React.Fragment>
                {!sessionId && !hasBeenOpened && !showChat && (
                  <>
                    <React.Fragment
                      onClick={() => {
                        setHasBeenOpened(true);
                        setShowChat(true);
                      }}
                    >
                      Hi I&apos;m ChestnutBot! Click on me to start a chat with
                      me!
                    </React.Fragment>
                  </>
                )}
                {(hasBeenOpened || !!sessionId) && !showChat && (
                  <div onClick={() => setShowChat(true)}>
                    Click me to open the chat again!
                  </div>
                )}
                {showChat && <div>Have fun!</div>}
              </React.Fragment>
            }
          >
            {safariAgent ? (
              <CatRightSVG
                className='leftcat'
                style={{
                  width: '10.0vw',
                  height: '10.0vw',
                }}
                onClick={openChatHandler}
              />
            ) : (
              <CatRunSVG
                className='leftcat'
                style={{
                  width: '10.0vw',
                  height: '10.0vw',
                }}
                onClick={openChatHandler}
              />
            )}
          </ExperienceToolTip>
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            fontSize: { xs: '3vh', sm: '2.25vw' },
            lineHeight: '3.5vw',
            fontFamily: 'Inconsolata',
          }}
        >
          <strong>My experience journey:</strong>
        </Grid>
        <Grid item xs={10} alignSelf={'center'}>
          <Experiences />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            marginTop: '1.5vw',
            fontSize: { xs: '3vh', sm: '2.25vw' },
            lineHeight: '3.5vw',
            fontFamily: 'Inconsolata',
          }}
        >
          <strong>Projects:</strong>
        </Grid>
        <Grid item xs={10}>
          <Projects />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            marginTop: '5vw',
            fontSize: { xs: '3vh', sm: '2.25vw' },
            lineHeight: '3.5vw',
            fontFamily: 'Inconsolata',
          }}
        >
          <strong>Contact Me!</strong>
        </Grid>
        <Grid item xs={10} sx={{ marginBottom: '10vh' }}>
          <IconButton
            onClick={() =>
              window.open('https://www.linkedin.com/in/ayako-shimizu/')
            }
          >
            <LinkedIn />
          </IconButton>
        </Grid>
      </Grid>
      {showChat && (
        <Grid
          xs={10}
          sx={{
            display: 'flex',
            justifyContent: 'right',
            position: 'fixed',
            bottom: '0',
            right: '32px',
            height: '400px',
            zIndex: 10000,
          }}
        >
          <ChatBox setShowChat={setShowChat} textValue={text} />
        </Grid>
      )}
    </div>
  );
};

export default Home;
