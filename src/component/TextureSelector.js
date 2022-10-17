import { useEffect, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useStore";

import { dirtImg, grassImg, glassImg, woodImg, logImg } from "../images/images";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
};

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const { dirt, grass, glass, wood, log } = useKeyboard();

  const textures = { dirt, grass, glass, wood, log };
  //подвязка  выбора на время

  useEffect(() => {
    const pressedTexture = Object.entries(textures).find(
      ([key, value]) => value
    );

    if (pressedTexture) {
      console.log("pressedTexture", pressedTexture[0]);
      setTexture(pressedTexture[0]);
    }
  }, [dirt, grass, glass, wood, log, setTexture]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);
    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);

  return (
    visible && (
      <div className=" absolute centered texture-selector">
        {Object.entries(images).map(([key, source]) => {
          return (
            <img
              alt={key}
              key={key}
              src={source}
              className={`${key === activeTexture ? "active" : ""}`}
            />
          );
        })}
      </div>
    )
  );
};
