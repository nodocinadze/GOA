import React from 'react';
import Button from './Button';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Button variant="primary" onClick={() => alert('Primary Button Clicked!')}>
        Primary Button
      </Button>
      <Button variant="secondary" onClick={() => alert('Secondary Button Clicked!')}>
        Secondary Button
      </Button>
      <Button variant="success" onClick={() => alert('Success Button Clicked!')}>
        Success Button
      </Button>
      <Button variant="danger" onClick={() => alert('Danger Button Clicked!')}>
        Danger Button
      </Button>
    </div>
  );
};

export default Homepage;