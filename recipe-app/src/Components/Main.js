import React from 'react';
import homepage1 from "../homepage1.png";
import homepage2 from "../homepage2.png";

const Footer = () => {

return (
    <div className='homepage'>
    <h1>Welcome to Sprinkle & Dash!</h1>
    <img src={homepage1} alt="steak dinner" className="hp1img" />
    <p>Do you always struggle figuring out what to cook for dinner? Maybe you never know what exactly you're in the mood to eat, 
        or you just don't know what to do with the ingredients you have on hand? Well, you're not alone.
        Studies have shown that while around 77% of people would rather eat a home-cooked meal, a different study in 2017 confirmed that
        only 10% of Americans love to cook. Shocking, right? Probably not.
    </p>
    <p>With the American lifestyle centered around a working culture, it's getting harder and harder for the average person to spend
        excess energy on the mundane tasks like figuring out what to make for dinner, let alone cooking it. That's where we come in!
    </p>

    <div className="extracontent">
    <img src={homepage2} alt="spaghetti" className="hp2img" />
    <p>
        Sprinkle & Dash is a recipe generator created with you in mind! We can generate a meal based on your main ingredient, 
        or the type of dish you're looking to make. If you don't know where you're even gonna start with your meal, we have that figured out too!
        Just head on over to our 'Random Meal' generator and we'll decide that for you! Each meal has an image for reference, as well as directions on
        how to make it. All you need to do is follow along!
    </p>
    <p>
        Our goal is to help the average person and families alike make meal decisions a little easier. With the busy lifestyles that we've all become
        accustomed to, why not let someone else do the thinking for you at dinner time.
    </p>
    </div>
    </div>
)
}

export default Footer;