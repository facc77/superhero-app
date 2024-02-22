import React, { useEffect, useMemo, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Typography, Box, Container, Button } from "@mui/material";
import Background from "../assets/img/comic-background.webp";
import { GameCard } from "../components/GameCard";
import CaptainAmerica from "../assets/img/captainAmerica.jpg";
import Hulk from "../assets/img/hulk.jpg";
import IronMain from "../assets/img/ironman.jpg";
import HawkEye from "../assets/img/hawkeye.jpg";
import SpiderMan from "../assets/img/spiderMan.jpg";
import Thor from "../assets/img/thor.jpg";
import Timer from "../components/Timer/Timer";
import { toast } from "react-toastify";
import { Howl } from "howler";
import hitSound from "../assets/sounds/hit.mp3";
import winSound from "../assets/sounds/win.mp3";
import gameSound from "../assets/sounds/gameMusic.mp3";

type Card = {
  id: number;
  src: string;
  matched: boolean;
};

const Minigame = () => {
  const song = useMemo(() => new Audio(gameSound), [gameSound]);

  const cardImages = [
    { src: CaptainAmerica, matched: false },
    { src: Hulk, matched: false },
    { src: IronMain, matched: false },
    { src: SpiderMan, matched: false },
    { src: HawkEye, matched: false },
    { src: Thor, matched: false },
  ];

  const [cards, setCards] = useState<Card[]>([]);
  const [startGame, setStartGame] = useState(false);
  const [firstChoice, setFirstChoice] = useState<Card | null>(null);
  const [secondChoice, setSecondChoice] = useState<Card | null>(null);
  const [guessCount, setguessCount] = useState<number>(0);
  const [timer, setTimer] = useState(60);

  const mixCards = () => {
    const mixedCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(mixedCards);
    setTimer(60);
    setguessCount(0);
    /*  GameMusic(true); */
    song.play();
    setStartGame(true);
  };

  const handleChoice = (card: Card) => {
    if ((secondChoice && firstChoice) || !startGame) {
      return;
    }
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  useEffect(() => {
    if (secondChoice && firstChoice) {
      if (firstChoice.src === secondChoice.src) {
        setguessCount(guessCount + 1);
        callSound(hitSound);
        checkWin();
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [secondChoice, firstChoice]);

  useEffect(() => {
    return () => {
      song.pause();
    };
  }, [song]);

  const checkWin = () => {
    if (guessCount === 5) {
      song.pause();
      callWin(winSound);
      setguessCount(0);
      setStartGame(false);
      toast.success(`Ganaste en ${60 - timer} segundos!`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
    }
  };

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };

  const callSound = (src: any) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  const callWin = (src: HTMLAudioElement) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    setTimeout(() => {
      sound.play();
    }, 1500);
  };

  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Bebas Neue",
              fontSize: { lg: "42px", xs: "32px" },
              textAlign: "center",
              marginTop: "2.5rem",
              width: "50%",
              backgroundColor: "rgb(0,0,0,0.4)",
              borderRadius: "4px",
            }}
          >
            Encuentra los pares
          </Typography>
          <Timer
            startGame={startGame}
            setStartGame={setStartGame}
            timer={timer}
            setTimer={setTimer}
            song={song}
          />
          <Button
            sx={{
              fontFamily: "Bebas Neue",
              border: "2px solid #fff",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(35px)",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "16px",
            }}
            onClick={mixCards}
          >
            Comienza un nuevo juego
          </Button>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: { xs: "95%", md: "70%" },
              justifyContent: "center",
            }}
          >
            {cards.map((card) => {
              return (
                <GameCard
                  key={card.id}
                  card={card}
                  handleChoice={handleChoice}
                  flipped={
                    card === firstChoice ||
                    card === secondChoice ||
                    card.matched
                  }
                />
              );
            })}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Minigame;
