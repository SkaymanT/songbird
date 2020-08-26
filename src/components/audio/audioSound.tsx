import React, { useState, useEffect } from 'react';

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default function AudioSound(): JSX.Element {
  const srcWin = '/static/audio/win.mp3';
  const srcError = '/static/audio/error.mp3';
  const [playing, toggle] = useAudio(srcWin);
  const audio = new Audio(srcWin);
  return <audio src={srcError} id="errorSound"></audio>;
}
