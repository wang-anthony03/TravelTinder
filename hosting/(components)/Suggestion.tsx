"use client";
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import { FaHeartCrack, FaHeart } from "react-icons/fa6";

const db = [
  {
    name: 'Richard Hendricks',
    url: '/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: '/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: '/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: '/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: '/dinesh.jpg'
  }
]

function Suggestion () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <h1>React Tinder Card</h1>
      <div className="flex flex-row justify-between items-center">
        <FaHeartCrack className={`w-40 h-40` + (lastDirection === 'left' ? `animate-pulse` : ``)} />
        <div className='cardContainer'>
          {characters.map((character) =>
            <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)} swipeRequirementType="position"> 
              <div style={{ backgroundImage: 'url(' +"https://raw.githubusercontent.com/3DJakob/react-tinder-card-demo/master/public/img" + character.url + ')' }} className='card'>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          )}
        </div>
        <FaHeart className={`w-40 h-40` + (lastDirection === 'right' ? `animate-pulse` : ``)} />
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Suggestion;