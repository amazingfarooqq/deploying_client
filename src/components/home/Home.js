import React from 'react';

import './home.css';
import { Header } from '../header/Header';
import { SectionOne } from './SectionOne';
import { SectionTwo } from './SectionTwo';
import { SectionThree } from './SectionThree';
import { SectionFour } from './SectionFour';
import { Footer } from '../footer/Footer';

export const Home = () => {
  return (
    <div>

        <Header />
        <SectionOne />
        <div style={{height: '100px'}}></div>
        <SectionTwo />
        <div style={{height: '100px'}}></div>
        <SectionThree />
        <div style={{height: '100px'}}></div>
        <SectionFour />
        <Footer />
    </div>
  )
}
