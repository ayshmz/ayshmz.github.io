import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PetsIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import { InputAdornment } from '@mui/material';
import { ReactComponent as CatSVG } from '../../assets/cat.svg';
import { theme } from './index.styles';

export const ChatBox = ({ setShowChat }) => {
  const [currentText, setCurrentText] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={theme.chatbox}>
        <Box sx={theme.chatboxHeaderContainer}>
          <Grid container sx={theme.chatboxHeader}>
            <Grid xs={9}>Chat with ChestnutBot</Grid>
            <Grid xs={3}>
              <CloseIcon onClick={() => setShowChat(false)} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={theme.chatArea}>
          <Box sx={theme.catBubbleContainer}>
            <Box sx={theme.avatarContainer}>
              <CatSVG style={theme.catIcon} />
            </Box>
            <Grid container>
              <Box sx={theme.catBubble}>Hellow how does this look meow?</Box>
              <Box sx={theme.catBubbleNoTail}>
                Hellow how does this look meow?
              </Box>
              <Box sx={theme.catBubbleNoTail}>
                Hellow how does this look meow?
              </Box>
              <Box sx={theme.catBubbleNoTail}>
                Hellow how does this look meow?
              </Box>
              <Box sx={theme.catBubbleNoTail}>
                Hellow how does this look meow?
              </Box>
              <Box sx={theme.catBubbleNoTail}>
                Hellow how does this look meow?
              </Box>
            </Grid>
          </Box>
          <Box sx={theme.catBubbleContainer}>
            <Box sx={theme.avatarContainer}>
              <CatSVG
                style={{
                  width: '24px',
                  minWidth: '24px',
                  height: '24px',
                  minHeight: '24px',
                }}
              />
            </Box>
            <Grid container>
              <Box sx={theme.catBubble}>Hellow how does this look meow?</Box>
            </Grid>
          </Box>
          <Box sx={theme.userBubbleContainer}>
            <Box sx={theme.userBubble}>I think it looks good</Box>
          </Box>
          <Box
            className='input'
            style={{
              display: 'flex',
              justifyContent: 'right',
              position: 'sticky',
              bottom: '0px',
              right: '32px',
            }}
          ></Box>
        </Box>
        <Box sx={{ display: 'fixed' }}>
          <Box
            sx={{
              width: '120%',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'flex-end',
              fontFamily: 'sans-serif',
            }}
          >
            <TextField
              sx={{
                width: '290px',
                margin: '4px',
                backgroundColor: 'white',
                position: 'fixed',
                bottom: '12px',
              }}
              value={currentText}
              onChange={(event) => setCurrentText(event.target.value)}
              onSubmit={() => {}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <PetsIcon />
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
};

// import React, { useState } from 'react';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import SendIcon from '@mui/icons-material/Send';
// import CloseIcon from '@mui/icons-material/Close';
// import PropTypes from 'prop-types';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { InputAdornment } from '@mui/material';
// import { ReactComponent as CatSVG } from '../../assets/cat.svg';

// const theme = createTheme({
//   chatbox: {
//     maxWidth: '300px',
//     width: '100%',
//     height: '400px',
//     backgroundColor: 'aliceblue',
//     padding: '12px',
//     display: 'flex',
//     marginRight: '32px',
//     overflow: 'hidden',
//     overflowY: 'scroll',
//     flexDirection: 'column',
//   },
//   avatarContainer: {
//     width: '36px',
//     height: '36px',
//     backgroundColor: 'white',
//     border: 'px solid lightblue',
//     borderRadius: '18px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: '12px',
//   },
//   userBubbleContainer: {
//     display: 'flex',
//     justifyContent: 'end',
//   },
//   userBubble: {
//     minHeight: '14px',
//     minWidth: '14px',
//     height: 'fit-content',
//     backgroundColor: 'lightblue',
//     textAlign: 'left',
//     position: 'relative',
//     maxWidth: '60%',
//     padding: '8px',
//     borderRadius: '10px',
//     '&:before': {
//       content: '" "',
//       position: 'absolute',
//       width: '0',
//       height: '0',
//       borderTop: '10px solid lightblue',
//       borderLeft: '8px solid transparent',
//       borderRight: '8px solid transparent',
//       top: '3px',
//       right: '-6px',
//     },
//     '&:after': {
//       content: '" "',
//       position: 'absolute',
//       width: '0',
//       height: '0',
//       borderTop: '1px solid lightblue',
//       borderLeft: '9px solid transparent',
//       borderRight: '9px solid transparent',
//       top: '3px',
//       right: '-8px',
//     },
//   },
//   catBubbleContainer: {
//     display: 'flex',
//     marginTop: '24px',
//     marginBottom: '24px',
//   },
//   catBubbleNoTail: {
//     marginTop: '8px',
//     minHeight: '14px',
//     minWidth: '14px',
//     height: 'fit-content',
//     backgroundColor: 'orange',
//     maxWidth: '60%',
//     padding: '8px',
//     borderRadius: '10px',
//   },
//   catBubble: {
//     marginTop: '8px',
//     minHeight: '14px',
//     minWidth: '14px',
//     height: 'fit-content',
//     backgroundColor: 'orange',
//     maxWidth: '60%',
//     padding: '8px',
//     borderRadius: '10px',
//     position: 'relative',
//     '&:before': {
//       content: '" "',
//       position: 'absolute',
//       width: '0',
//       height: '0',
//       borderTop: '10px solid orange',
//       borderLeft: '8px solid transparent',
//       borderRight: '8px solid transparent',
//       top: '3px',
//       left: '-8px',
//     },
//     '&:after': {
//       content: '" "',
//       position: 'absolute',
//       width: '0',
//       height: '0',
//       borderTop: '1px solid orange',
//       borderLeft: '9px solid transparent',
//       borderRight: '9px solid transparent',
//       top: '3',
//       left: '-8px',
//     },
//   },
// });

// export const ChatBox = ({ setShowChat }) => {
//   const [currentText, setCurrentText] = useState('');
//   return (
//     <ThemeProvider theme={theme}>
//       <Paper elevation={3} sx={theme.chatbox}>
//         <Grid container>
//           <Grid item xs={12}>
//             <Box
//               sx={{
//                 backgroundColor: 'white',
//                 height: '32px',
//                 margin: '-12px -12px 0 -12px',
//                 border: '1px solid aliceblue',
//                 display: 'flex',
//                 justifyContent: 'end',
//                 alignItems: 'center',
//                 fontFamily: 'sans-serif',
//               }}
//             >
//               <Grid
//                 container
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'flex-end',
//                   alignItems: 'center',
//                   textAlign: 'end',
//                 }}
//               >
//                 <Grid xs={9}>Chat with ChestnutBot</Grid>
//                 <Grid xs={3}>
//                   <CloseIcon onClick={() => setShowChat(false)} />
//                 </Grid>
//               </Grid>
//             </Box>
//           </Grid>
//           <Grid item xs={12}>
//             <Box sx={theme.catBubbleContainer}>
//               <Box sx={theme.avatarContainer}>
//                 <CatSVG
//                   style={{
//                     width: '24px',
//                     height: '24px',
//                   }}
//                 />
//               </Box>
//               <Grid container>
//                 <Box sx={theme.catBubble}>Hellow how does this look meow?</Box>
//                 <Box sx={theme.catBubbleNoTail}>
//                   Hellow how does this look meow?
//                 </Box>
//                 <Box sx={theme.catBubbleNoTail}>
//                   Hellow how does this look meow?
//                 </Box>
//               </Grid>
//             </Box>
//             <Box sx={theme.catBubbleContainer}>
//               <Box sx={theme.avatarContainer}>
//                 <CatSVG
//                   style={{
//                     width: '24px',
//                     height: '24px',
//                   }}
//                 />
//               </Box>
//               <Box sx={theme.catBubble}>Hellow how does this look meow?</Box>
//             </Box>
//             <Box sx={theme.userBubbleContainer}>
//               <Box sx={theme.userBubble}>I think it looks good</Box>
//             </Box>
//           </Grid>
//           <Grid item xs={12}>
//             <Box
//               className='input'
//               style={{
//                 display: 'flex',
//                 justifyContent: 'right',
//                 position: 'sticky',
//                 bottom: '0px',
//                 right: '32px',
//               }}
//             ></Box>
//             <Box
//               sx={{
//                 width: '120%',
//                 display: 'flex',
//                 justifyContent: 'start',
//                 alignItems: 'flex-end',
//                 fontFamily: 'sans-serif',
//               }}
//             >
//               <TextField
//                 sx={{
//                   width: '290px',
//                   margin: '4px',
//                   backgroundColor: 'white',
//                   position: 'fixed',
//                   bottom: '12px',
//                 }}
//                 value={currentText}
//                 onChange={(event) => setCurrentText(event.target.value)}
//                 onSubmit={() => {}}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position='end'>
//                       <SendIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>
//     </ThemeProvider>
//   );
// };

// ChatBox.propTypes = {
//   setShowChat: PropTypes.func.isRequired,
// };
