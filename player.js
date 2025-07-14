// src/Player.js

import { Card, Form } from 'react-bootstrap';
import React from 'react'
const Player = ({
  name = "Nom inconnu",
  team = "Équipe inconnue",
  nationality = "Nationalité inconnue",
  jerseyNumber = 0,
  age = 0,
  image = "https://via.placeholder.com/150"
}) => {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    textAlign: 'center',
    backgroundColor: '#f8f9fa'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe:</strong> {team}<br />
          <strong>Nationalité:</strong> {nationality}<br />
          <strong>N°:</strong> {jerseyNumber}<br />
          <strong>Âge:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
