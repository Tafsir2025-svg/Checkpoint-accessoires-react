// src/PlayersList.js
import Player from './player';
import players from './players';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
const PlayersList = () => {
  return (
    <Container>
      <h1 className="text-center my-4">FIFA Player Cards</h1>
      <Row>
        {players.map((player, index) => (
          <Col key={index} md={4}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
