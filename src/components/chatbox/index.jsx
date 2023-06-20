import React, { useState, useEffect } from 'react';
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
  let sessionId = window.sessionStorage.getItem('meow-session');
  // console.log('chat history in chat box', chatHistory, sessionId);
  const fetchChat = async (id) => {
    console.log('fetch chat has been called!', id);
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
    console.log('chat history in chat box', chatHistory, sessionId);

    setSubmit(false);

    if (!sessionId) {
      console.log('should be in here...', textValue);
      sessionId = v4();
      const saveChat = async (text) => {
        console.log('!!!!!!!!!!! saveChat has been called', text);
        if (text) {
          const data = await saveCatGPTResponse({
            prompt: text,
            sessionId: sessionId,
          });
          console.log('data', data);
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
    if (submit) {
      const saveChat = async (text) => {
        console.log('!!!!!!!!!!! saveChat has been called', text);
        if (text) {
          const data = await saveCatGPTResponse({
            prompt: text,
            sessionId: sessionId,
          });
          console.log('data', data);
          setChatHistory(data);
        }
      };
      saveChat(currentText);
      setCurrentText('');
      setSubmit(false);
    }
  }, [submit]);

  const responseMapper = () =>
    chatHistory.map((response, index) =>
      response.role === 'assistant' ? (
        <Box sx={theme.catBubbleContainer} key={'cat'}>
          <Box sx={theme.avatarContainer}>
            <CatSVG style={theme.catIcon} />
          </Box>
          <Grid container>
            <Box sx={theme.catBubble}>{response.content}</Box>
          </Grid>
        </Box>
      ) : (
        <Box sx={theme.userBubbleContainer} key={`user-${index}`}>
          <Box sx={theme.userBubble}>{response.content}</Box>
        </Box>
      )
    );

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
        {displayHelper && <Box>Write something to get started!</Box>}
        <Box sx={theme.chatArea}>{responseMapper()}</Box>
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
                if (currentText) setSubmit(true);
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
