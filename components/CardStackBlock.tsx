"use client"


import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { colors } from "@/utils/colors";

const CARD_OFFSET = 4;
const ROTATION_FACTOR = 6;

interface Card {
    id: number;
    imagePath: string;
    rotation: number;
}

const imagePaths = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
]

const Block = () => {
    const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (imagePaths.length > 0) {
      const initialCards = imagePaths.map((imagePath, index) => ({
        id: index,
        imagePath: imagePath, // Changed from imageUrl
        rotation: (index % 2 === 0 ? 1 : -1) * ROTATION_FACTOR * Math.random(),
      }));
      setCards(initialCards);
    }
  }, [imagePaths]); // Changed dependency

  const moveToEnd = (from: number) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const item = newCards.splice(from, 1)[0];
      newCards.push(item);
      return newCards;
    });
  };

  return (
    <ul style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.darkGray, borderRadius: '1rem'}}>
      {cards.map((card, index) => (
        <motion.li
          key={card.id}
          animate={{
            y: index * -CARD_OFFSET,
            rotate: card.rotation,
          }}
          style={{ 
            position: 'absolute', 
            transformOrigin: 'center', 
            listStyle: 'none', 
            borderRadius: '0.5rem', 
            cursor: 'grab',
            zIndex: cards.length - index,
          }}
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          initial={{ rotate: card.rotation }}
          transition={{ type: "spring", stiffness: 50 }}
          onDragEnd={() => moveToEnd(index)}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <Image
            alt="Card image"
            style={{ 
              objectFit: 'cover', 
              width: '80%', 
              marginLeft: 'auto', 
              marginRight: 'auto', 
              borderRadius: '1rem', 
              aspectRatio: '16/9' 
            }}
            height={200}
            quality={80}
            src={card.imagePath} // Changed from imageUrl
            width={355}
          />
        </motion.li>
      ))}
    </ul>
  );
}

export default Block