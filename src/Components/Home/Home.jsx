import React, { useContext } from 'react'
import './Home.css';
import Card from '../Card/Card';
import betch from '../../assets/beach.jpg';
import betch1 from '../../assets/beach2.webp';
import betch2 from '../../assets/beac4.jpg';
import farmhouse from '../../assets/farmhouse.jpg';
import farmhouse1 from '../../assets/farmhouse1.jpg';
import farmhouse2 from '../../assets/farmhouse2.jpg';
import hut from '../../assets/hut.jpg';
import hut1 from '../../assets/hut1.jpeg';
import hut2 from '../../assets/hut2.jpg';
import hut3 from '../../assets/hut4.jpg';
import hut4 from '../../assets/hut5.jpg';
import hut5 from '../../assets/hut6.jpg';
import house from '../../assets/mordernhouse1.jpg';
import house1 from '../../assets/mordernhouse2.jpg';
import house2 from '../../assets/mordernhouse3.jpg';
import mountainhouse from '../../assets/mountain.jpg';
import mountainhouse1 from '../../assets/mountain2.jpg';
import mountainhouse2 from '../../assets/mountain4.jpg';
import oldhouse from '../../assets/old1.jpg';
import oldhouse1 from '../../assets/old2.jpg';
import oldhouse2 from '../../assets/old3.jpg';
import poolhouse from '../../assets/poolhouse1.jpg';
import poolhouse1 from '../../assets/poolhouse2.jpg';
import poolhouse2 from '../../assets/poolhouse3.jpg';
import housing from '../../assets/room1.jpg';
import housing1 from '../../assets/room2.jpg';
import housing2 from '../../assets/room3.jpg';
import housing3 from '../../assets/room4.jpg';
import housing4 from '../../assets/room5.jpg';
import housing5 from '../../assets/room6.jpg';
import villa from '../../assets/villa1.jpg';
import villa1 from '../../assets/villa2.jpg';
import villa2 from '../../assets/villa3.jpg';
import village from '../../assets/village1.jpg';
import village1 from '../../assets/village2.jpg';
import village2 from '../../assets/village3.jpg';
import { dataContext } from '../../Context/Usercontext';


function Home() {
  const {
    title,
    setTitle,
    addListing,
    setAddListing,
    addImage1,
    setAddImage1,
    addImage2,
    setAddImage2,
    addImage3,
    setAddImage3,
    price,
    setPrice
  }=useContext(dataContext);
  return (
    <div id='home'>
      <Card img1={betch} img2={betch1} img3={betch2} title={"2BHK villa in Digha"} price={20}/>
      <Card img1={farmhouse} img2={farmhouse1} img3={farmhouse2} title={"3BHK farmhouse in Wasington "} price={80}/>
      <Card img1={hut} img2={hut1} img3={hut2} title={"2BHK hut in Brazil"} price={120}/>
      <Card img1={hut3} img2={hut4} img3={hut5} title={"3BHK hut in Amazon"} price={70}/>
      <Card img1={house} img2={house1} img3={house2} title={"5BHK palace in Soudi-Arab"} price={150}/>
      <Card img1={mountainhouse} img2={mountainhouse1} img3={mountainhouse2} title={"1BHK palace in Simla"} price={20}/>
      <Card img1={oldhouse} img2={oldhouse1} img3={oldhouse2} title={"2BHK palace in Rajastan"} price={15}/>
      <Card img1={poolhouse} img2={poolhouse1} img3={poolhouse2} title={"3BHK palace in Maldives"} price={50}/>
      <Card img1={housing} img2={housing1} img3={housing2} title={"5BHK palace in Manglore"} price={80}/>
      <Card img1={housing3} img2={housing4} img3={housing5} title={"2BHK palace in Hydrabad"} price={90}/>
      <Card img1={villa} img2={villa1} img3={villa2} title={"3BHK palace in Abudhabi"} price={90}/>
      <Card img1={village} img2={village1} img3={village2} title={"2BHK palace in Bamnasai"} price={10}/>
      {addListing ? <Card img1={URL.createObjectURL(addImage1)} img2={URL.createObjectURL(addImage2)} img3={URL.createObjectURL(addImage3)} title={title} price={price}/> : ""}
    </div>
  )
}

export default Home
