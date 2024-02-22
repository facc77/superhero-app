import { Typography } from "@mui/material";
import { Character } from "../Character";
import { MotionValue } from "framer-motion";

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <Typography
      sx={{
        position: "relative",
        margin: "12px 12px 0 0",
        fontSize: { xs: "32px", md: "52px" },
      }}
    >
      {characters.map((children, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {children}
          </Character>
        );
      })}
    </Typography>
  );
};

export default Word;
