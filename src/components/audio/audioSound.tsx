import React, { useState, useEffect } from 'react';

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

type TisSucces = {
  isSucces: boolean;
};

export default function AudioSound({ isSucces }: TisSucces): JSX.Element {
  const srcSucces = '/static/audio/win.mp3';
  const srcError = '/static/audio/error.mp3';
  const [playing, toggle] = useAudio(srcSucces);
  if (!isSucces) {
    const audio = new Audio(srcSucces);
    audio.play();
  } else {
    const audio = new Audio(srcError);
    audio.play();
  }
  return <audio src={srcError} id="errorSound"></audio>;
}
