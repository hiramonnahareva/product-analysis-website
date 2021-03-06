import React from 'react';
import './About.css' ;
import image from '../../images/pexels-ag-zn-5233032.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <img src={image} alt="" />
            <h2>The Origins of CatFoodDB</h2>
            <p> I first got interested in pet nutrition, and specifically cat food nutrition, after visiting the pet food store one afternoon. I had returned from my vet’s office earlier that morning, and during my visit she mentioned a number of ingredients she felt my cats should avoid.
While in the pet food store I spent a very long time reading tiny ingredient lists on many different varieties of cat food, trying to find the ones without the offending words. At the time I also only vaguely understood that carbs were generally less desirable in cat food, and that I should be looking for foods higher in protein.
I left the store that day without purchasing anything. I couldn’t decide what was the “best” food for my much adored three black cats that would meet my vets recommendations. I returned home, and turned to my trusty friend Google.
Google directed me to many articles, some very opinionated, on the topic of cat food. What was good, what as bad, why Brand X was great and Brand Y was not. Why raw food was best and all commercial cat food was horrible. (By the way — it’s not). What I couldn’t find, however, was a easy way to determine which commercial cat foods did and did not contain the ingredients I was instructed to avoid.</p>
<p>Hence, I created the initial version of CatFoodDB.com. My goal was to build a completely searchable database that I could use to look up products that didn't contain, for example, seafood or soy (not that there’s anything wrong with those ingredients; they just happen to be common allergens in some cats). As a web developer by trade I felt I was in a unique position because not only did I have the desire for such a site, but I also had the skills necessary to create it.</p>
   <p>The feedback I got from CatFoodDB.com was great. However, people kept asking me, over and over again, “This site is great — but what food is the best?” That’s not an easy question to answer. If fact, I've realized there's no one "best" cat food; a lot depends on the cat in question, their health, and a bunch of other factors. And heck, a particular food isn’t any good if your cat wont eat it -- and we all know how picky cats can be about their food sometimes! However, armed with the research I'd done and the data for all these different cat food products, I was able to see trends that identified some products as being quantifiably better than others. I wanted to share my findings with others who might be looking for similar information, and hence CatFoodDB grew into what it is today. It now includes not only the raw data as published, but a fact-based review and analysis of that data for each and every cat food I've catalogued.</p>
   <span>~tammy</span>
        </div>
    );
};

export default About;
