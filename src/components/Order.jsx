import React from 'react';
import randomImage from '../assets/random_image.jpeg';
function Order() {
    return (
        <div className="border border-black h-auto flex 
        rounded-lg
        gap-3
        bg-white
        
        ">
            <div>

                <img src={randomImage}
                    className='image rounded-l-lg transition-all duration-300 hover:scale-110 '
                    alt="" />
            </div>
            <div
                className='orderBlock p-5'
            >
                <h1>This is some random image </h1>
                <p>You are seeing this because u clicked it here :) </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit accusamus optio harum quos, nulla blanditiis earum amet fugiat, quae consectetur error illo aliquam ratione odit a tenetur voluptatibus maxime.</p>
            </div>
        </div>
    );
}

export default Order;