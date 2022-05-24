import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <>
      <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
        <h1>RoboWarriors</h1>
        <div>
          <img src={`https://robohash.org/${id}?size=200x200`} alt='robot' />
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
