// import { useGameContext } from '../context/GameContext';
import Box from './Box';

export default function Board({ space, onClick }) {
  return (
    <div className="Board">
      <Box
        value={space[0]}
        onClick={() => {
          onClick(0);
        }}
      ></Box>
      <Box
        value={space[1]}
        onClick={() => {
          onClick(1);
        }}
      ></Box>
      <Box
        value={space[2]}
        onClick={() => {
          onClick(2);
        }}
      ></Box>
      <Box
        value={space[3]}
        onClick={() => {
          onClick(3);
        }}
      ></Box>
      <Box
        value={space[4]}
        onClick={() => {
          onClick(4);
        }}
      ></Box>
      <Box
        value={space[5]}
        onClick={() => {
          onClick(5);
        }}
      ></Box>
      <Box
        value={space[6]}
        onClick={() => {
          onClick(6);
        }}
      ></Box>
      =
      <Box
        value={space[7]}
        onClick={() => {
          onClick(7);
        }}
      ></Box>
      <Box
        value={space[8]}
        onClick={() => {
          onClick(8);
        }}
      ></Box>
    </div>
  );
}
