import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./Home.module.css";

const Home = (props) => {
  const [showBinary, setShowBinary] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [showSelect, setShowSelect] = useState(false);

  const handleShowBinary = () => setShowBinary(true);

  const binaryHandler = () => {
    setShowBinary(false);
  };

  return (
    <div>
      {showBinary && <Modal onConfirm={binaryHandler} binary={true} />}
      <Card className={classes.home}>
        <h1>Welcome Back Friends</h1>
        <h2>First Button</h2>
        <Button onClick={handleShowBinary}>Busy Signal</Button>
        <h2>Second Button</h2>
        <Button>Yes or No</Button>
        <h2>Third Button</h2>
        <Button>Selection Menu</Button>
      </Card>
    </div>
  );
};

export default Home;
