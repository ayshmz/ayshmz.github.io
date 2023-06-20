import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PetsIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { ThemeProvider } from '@mui/material/styles';
import { InputAdornment } from '@mui/material';
import { ReactComponent as CatSVG } from '../../assets/cat.svg';
import { getCatGPTResponse, saveCatGPTResponse } from '../../utils/api';
import { theme } from './index.styles';

export const ChatBox = ({ textValue, setShowChat }) => {
  const [currentText, setCurrentText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [displayHelper, setDisplayHelper] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  let sessionId = window.sessionStorage.getItem('meow-session');

  const scrollRef = useRef(null);

  const fetchChat = async (id) => {
    if (id) {
      const data = await getCatGPTResponse(sessionId);
      if (!data.length) {
        setDisplayHelper(true);
      } else {
        setDisplayHelper(false);
        setChatHistory(data);
      }
    }
  };

  useEffect(() => {
    setSubmit(false);

    if (!sessionId) {
      sessionId = v4();
      const saveChat = async (text) => {
        if (text) {
          const data = await saveCatGPTResponse({
            prompt: text,
            sessionId: sessionId,
          });
          setChatHistory(data);
        }
      };
      saveChat(textValue);
      window.sessionStorage.setItem('meow-session', sessionId);
    } else {
      fetchChat(sessionId);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  useEffect(() => {
    if (submit) {
      setChatHistory([
        ...chatHistory,
        { role: 'user', content: currentText },
        { role: 'assistant', content: ' . . . ' },
      ]);
      const saveChat = async (text) => {
        if (text) {
          const data = await saveCatGPTResponse({
            prompt: text,
            sessionId: sessionId,
          });
          setChatHistory(data);
          setLoading(false);
        }
      };
      saveChat(currentText);
      setCurrentText('');
      setSubmit(false);
    }
  }, [submit]);

  const responseMapper = () =>
    chatHistory.map((response, index) => {
      if (
        response.role === 'assistant' &&
        loading &&
        index === chatHistory.length - 1
      ) {
        return (
          <Box sx={theme.catBubbleContainer} key={`cat-${index}`}>
            <Box sx={theme.avatarContainer}>
              <CatSVG style={theme.catIcon} />
            </Box>
            <Grid container>
              <Box sx={theme.catBubble}>
                <TypeAnimation
                  ref={scrollRef}
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    '.',
                    100,
                    '. .',
                    100,
                    '. . .',
                  ]}
                  omitDeletionAnimation
                  speed={20}
                />
              </Box>
            </Grid>
          </Box>
        );
      } else {
        return response.role === 'assistant' ? (
          <Box sx={theme.catBubbleContainer} key={`cat-${index}`}>
            <Box sx={theme.avatarContainer}>
              <CatSVG style={theme.catIcon} />
            </Box>
            <Grid container>
              <Box
                ref={index === chatHistory.length - 1 ? scrollRef : null}
                sx={theme.catBubble}
              >
                {response.content}
              </Box>
            </Grid>
          </Box>
        ) : (
          <Box sx={theme.userBubbleContainer} key={`user-${index}`}>
            <Box sx={theme.userBubble}>{response.content}</Box>
          </Box>
        );
      }
    });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={theme.chatbox}>
        <Box sx={theme.chatboxHeaderContainer}>
          <Grid container spacing={2} sx={theme.chatboxHeader}>
            <Grid item xs={9}>
              Chat with ChestnutBot
            </Grid>
            <Grid item xs={3}>
              <CloseIcon onClick={() => setShowChat(false)} />
            </Grid>
          </Grid>
        </Box>
        <Box id='chatarea' sx={theme.chatArea}>
          <Box>
            {displayHelper && 'Write something to get started!'} *This
            interaction may be used as part of another project. If you
            don&apos;t want your interactions to be used, please do not use this
            chatbot. Each session is allowed up to 10 interactions.
          </Box>
          {responseMapper()}
        </Box>
        <Box sx={theme.textareaContainer}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'flex-end',
              fontFamily: 'Dosis, sans-serif',
              padding: 0,
            }}
          >
            <TextField
              sx={{
                width: '300px',
                margin: '4px',
                backgroundColor: 'white',
                position: 'fixed',
                bottom: '12px',
                fontFamily: 'Dosis, sans-serif',
              }}
              value={currentText}
              onChange={(event) => setCurrentText(event.target.value)}
              onSubmit={() => {
                if (currentText) {
                  setSubmit(true);
                  setLoading(true);
                }
              }}
              onKeyDown={(ev) => {
                console.log(`Pressed keyCode ${ev.key}`);
                if (ev.key === 'Enter') {
                  // Do code here
                  setSubmit(true);
                  setLoading(true);
                  ev.preventDefault();
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <PetsIcon
                      onClick={() => {
                        setSubmit(true);
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

ChatBox.propTypes = {
  setShowChat: PropTypes.func.isRequired,
  textValue: PropTypes.string,
};
