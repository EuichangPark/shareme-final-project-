import React from 'react';
import Header from '../components/header';
import Card from '../components/card';
import Greeting from '../components/greeting';
import Instruction from '../components/instruction';

export default function Home(props) {
  return (
    <>
      <Header />
      <Greeting />
      <Instruction />
      <Card />
    </>
  );
}
