import React, { useState } from 'react';
import useToggle from './toggle';
import logo from './logo.svg';
import './App.css';
import ReactHowler from 'react-howler';

const Card = (props) => {
  const [playing, handlePlay] = useToggle();
  return (
    <div>
      <ReactHowler src={[props.sound]} playing={playing} onEnd={handlePlay} />
      <button id="symbol" onClick={handlePlay}>
        {' '}
        <h1
          style={{
            color: playing ? 'black' : '#333',
            fontWeight: playing ? 'bold' : 'lighter',
          }}
        >
          {props.name}
        </h1>
      </button>
    </div>
  );
};
export default Card;
