import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={styles.card}>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={`${name}'s image`}
        style={styles.image}
      />
      <Card.Body style={styles.cardBody}>
        <Card.Title style={styles.name}>{name}</Card.Title>
        <Card.Text style={styles.text}>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text style={styles.text}>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text style={styles.text}>
          <strong>Jersey Number:</strong> {jerseyNumber}
        </Card.Text>
        <Card.Text style={styles.text}>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const styles = {
  card: {
    width: "18rem",
    margin: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "transform 0.2s",
  },
  image: {
    height: "280px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    fontSize: "0.9rem",
    color: "#555",
  },
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string,
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://example.com/default.jpg",
};

export default Player;
