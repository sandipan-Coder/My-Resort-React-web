import React from 'react'
import './Houses.css';
import Card from '../Card/Card';
import farmhouse from '../../assets/farmhouse.jpg';
import farmhouse1 from '../../assets/farmhouse1.jpg';
import farmhouse2 from '../../assets/farmhouse2.jpg';
import house from '../../assets/mordernhouse1.jpg';
import house1 from '../../assets/mordernhouse2.jpg';
import house2 from '../../assets/mordernhouse3.jpg';
import poolhouse from '../../assets/poolhouse1.jpg';
import poolhouse1 from '../../assets/poolhouse2.jpg';
import poolhouse2 from '../../assets/poolhouse3.jpg';
import village from '../../assets/village1.jpg';
import village1 from '../../assets/village2.jpg';
import village2 from '../../assets/village3.jpg';

function Houses() {
  return (
    <div id='houses'>
      <Card img1={farmhouse} img2={farmhouse1} img3={farmhouse2} title={"3BHK farmhouse in Wasington "} price={80}/>
      <Card img1={house} img2={house1} img3={house2} title={"5BHK palace in Soudi-Arab"} price={150}/>
      <Card img1={poolhouse} img2={poolhouse1} img3={poolhouse2} title={"3BHK palace in Maldives"} price={50}/>
      <Card img1={village} img2={village1} img3={village2} title={"2BHK palace in Bamnasai"} price={10}/>
    </div>
  )
}

export default Houses
