import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { Howl } from 'howler';
import failSound from '../../assets/sounds/fail.mp3';

type TimerProps = {
  startGame: boolean;
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  song: HTMLAudioElement;
};

const Timer: React.FC<TimerProps> = ({
  startGame,
  setStartGame,
  timer,
  setTimer,
  song,
}) => {
  const id = React.useRef<null | number>(null);

  const clear = () => {
    window.clearInterval(id.current!);
  };
  useEffect(() => {
    if (!startGame) {
      return;
    }
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, [startGame]);

  useEffect(() => {
    if (timer === 0) {
      song.pause();
      clear();
      setTimer(60);
      setStartGame(false);
      callSound(failSound);
      toast.error(`Perdiste :( - Intenta de nuevo!!`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
    }
  }, [timer, startGame]);

  const callSound = (src: any) => {
    const sound = new Howl({
      src,
      html5: true,
      volume: 0.3,
    });
    sound.play();
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgb(0,0,0,0.4)',
        padding: '0.7rem',
        borderRadius: '7px',
        margin: '0.5rem',
      }}
    >
      <Typography sx={{ color: '#fff', fontSize: '20px' }}>
        Time left : {timer}
      </Typography>
    </Box>
  );
};

export default Timer;
