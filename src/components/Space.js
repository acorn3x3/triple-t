import React from 'react';

export default function Space({ onClick, value }) {
  return <button onClick={onClick}>{value}</button>;
}
