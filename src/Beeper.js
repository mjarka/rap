import { useEffect } from "react";
import useSound from "use-sound";
import beep from "./audio/drzwi.m4a";

export default function Sound({ counter }) {
  const [play] = useSound(beep, { interrupt: true });

  //   useEffect(() => {
  //     play();
  //   }, [counter, play]);
  return (
    <button
      onClick={() => {
        play();
      }}
    >
      asdasdasd
    </button>
  );
}
