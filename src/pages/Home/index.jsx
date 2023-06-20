import React, { useEffect, useState } from 'react';
import lax from 'lax.js';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { ReactComponent as CatSVG } from '../../assets/cat.svg';
import { ReactComponent as CatRunSVG } from '../../assets/cat_run.svg';
import { AboutMe, Experiences, Projects } from '../../components/aboutme';
import { ExperienceToolTip } from '../../components/experienceTooltip';
import { ChatBox } from '../../components/chatbox';
import { leftCatAction, runCatAction } from './catActions';
import { InputAdornment } from '@mui/material';
import './index.css';

const Home = () => {
  const [text, setText] = useState('Hello!');
  const [showChat, setShowChat] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  let sessionId = window.sessionStorage.getItem('meow-session');

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

  return (
    <div style={{ margin: '10vh 0' }}>
      <Grid container rowSpacing={4} justifyContent={'center'}>
        <Grid item xs={11} alignSelf={'center'}>
          <CatSVG
            className='leftcat'
            style={{
              width: '10.0vw',
              height: '10.0vw',
            }}
          />
        </Grid>
        <Grid item xs={9} alignSelf={'center'}>
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
                    <div>Hi I&apos;m ChestnutBot! Start a chat with me!</div>
                    <TextField
                      sx={{ width: '80%', margin: '4px' }}
                      value={text}
                      onChange={(event) => setText(event.target.value)}
                      onSubmit={() => {
                        setShowChat(true);
                        setHasBeenOpened(true);
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <SendIcon
                              onClick={() => {
                                setShowChat(true);
                                setHasBeenOpened(true);
                                console.log('send clicked...', text);
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
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
            <CatRunSVG
              className='runcat'
              onClick={() => {
                setShowChat(true);
              }}
              style={{
                width: '10.0vw',
                height: '10.0vw',
              }}
            />
          </ExperienceToolTip>
        </Grid>
        <Grid
          item
          xs={10}
          style={{
            fontSize: '2.25vw',
            lineHeight: '3.5vw',
            fontFamily: 'Inconsolata',
          }}
        >
          <strong>My work journey:</strong>
        </Grid>
        <Grid item xs={10} alignSelf={'center'}>
          <Experiences />
        </Grid>
        <Grid
          item
          xs={10}
          style={{
            marginTop: '1.5vw',
            fontSize: '2.25vw',
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
          style={{
            marginTop: '5vw',
            fontSize: '2.25vw',
            lineHeight: '3.5vw',
            fontFamily: 'Inconsolata',
          }}
        >
          <strong>Contact Me!</strong>
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
