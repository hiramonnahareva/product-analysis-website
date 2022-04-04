import React from 'react';
import './Bloges.css' ;
const Blogs = () => {
    return (
        <div className='blogs-container'>
           <div className="blog">
           <h1>Bonus Part</h1>
            <h2>Qustion-1: What is Semantic Tag or element?</h2>
            <article>
            A semantic element clearly describe it meaning to both the browser and the developer. This HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.Although nearly every HTML4 tag and all the HTML5 tags have semantic meanings, some tags are primarily semantic.For example, HTML5 has redefined the meaning of the "b" and 'i' tags to be semantic. In HTML there are some semantic elements that can be used to define different parts of a web page: "article", "aside", "details", "figcaption", "figure", "footer" , "header", "main", "mark", "nav" , "section", "summary", "time".
            </article>
           </div>
           <div className="blog">
           <h2>Qustion-2:Diffrents among block , inline & inline-block elements</h2>
            <article>
               <h3> Inline elements </h3>
                <h4> 1. Inline elements have respect for their left and right margin and padding but it egnor top or bottom margin and padding.</h4>
                 <h4>2. Example of inline elements a , abbr, b, code , span, i, img, input, em, time, script etc.</h4>
               <h3> Inline-Block elements</h3>
               <h4>1. Inline-Block elements respect all sides for margin and padding.</h4>
               <h4>2. Inline or block elements can be changed in inline-block for set height or width.</h4>
               <h3> Block elements</h3>
               <h4>1. Respect all sides for margin and padding</h4>
               <h4>2. Exmple of block elements: div , hr, li, ol, p, ul, video, section, h1 to h6 , table, main, nav,fotter, form etc.</h4>

            </article>
           </div>
        </div>
    );
};

export default Blogs;
