import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App=() => { 
const stories = [ 
{ 
title: 'React', 
url: 'https://reactjs.org/', 
author:'Jordan Walke' , 
num_comments:3, 
points:4, 
objectID:0, 
} ,
{ 
title: 'Redux', 
url: 'https://redux.js.org/', 
author: 'Dan Abramov, Andrew Clark', 
num_comments: 2, 
points :5, 
objectID: 1, 
},
];
return( 
<div> 
  <h1>My Hacker Stories</h1> 
  <Search /> 
  <hr /> 
  <List list={stories} /> 
</div> 
); 
};
const List = (props) => ( 
  <ul> 
  {props.list.map((item) => ( 
  <Item key={item.objectID} item={item} /> 
  ))} 
  </ul> 
  ); 
  const Item = (props) => ( 
  <li> 
  <span> 
  <a href={props.item.url}>{props.item.title} </a> 
  </span> 
  <span>{props.item.author} </span> 
  <span>{props.item.num_comments} </span> 
  <span>{props.item.points} </span> 
  </li> 
  );
  const Search = () => { 
    const [searchTerm, setSearchTerm] = React.useState(''); 
    const handleChange =(event) => { 
    setSearchTerm (event.target.value); 
    }; 
    return ( 
    <div> 
    <label htmlFor="search">Search: </label> 
    <input id="search" type="text" onChange={handleChange} /> 
    <p> 
    Searching for <strong> (searchTerm)</strong>. 
    </p> 
    </div> 
    ); 
    };
    // week 6 commit
    //666