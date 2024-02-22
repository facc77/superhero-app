import { FC, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Word } from "./Word";

const FadeText: FC = () => {
  const element = useRef(null);
  const text =
    "¡Bienvenido a la batalla definitiva! En esta app, podrás crear tu propio equipo de héroes y villanos, combinando poderes increíbles para luchar contra el mal y salvar el mundo. ¿Estás listo para demostrar tu valentía y estrategia? ¡Únete a la lucha y forma el equipo más poderoso que el mundo haya visto!";

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <>
      <motion.p
        ref={element}
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "20px",
        }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </motion.p>
    </>
  );
};

export default FadeText;
