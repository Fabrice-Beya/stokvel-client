import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const AppJumbotron = (props) => {
    var styles ={
        "background-image": ("http://worldkings.org/Userfiles/Upload/images/Yale.jpg")
      }
  return (
    <div>
      <Jumbotron style={styles}>
        <h1 className="display-3">Stokvel</h1>
        <p className="lead">This is a simple Stokvel app.</p>
        <hr className="my-2" />
        <p>It uses the blockchain to createa trustless community for stokvel users classes.</p>
        <p className="lead">
          <Button color="primary">Get Started</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default AppJumbotron;