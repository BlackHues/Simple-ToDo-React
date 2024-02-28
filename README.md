# React JS

    React Components
    JSX Working
    Rendering List
    useState
    useRef
    useEffect
    Passing Props
    Event Handeling

## What is React ?

    React is a frontend javascript library that is used to build interactive user interface.

    Using React we can create Single Page Application. (SPA)

## JSX

    JSX stands for Javascript Syntax Extension.
    In JSX we can write HTML & Javascript in a single file.

## React JS Project requirements & Create Project

    1. Install node.js

    2. VisualStudioCode

    3. Terminal:
        `npm --version`

    4. Terminal:
        `npm create vite@latest`

    5. Terminal:
        `npm install`
        
    5. Terminal:
        `npm run dev`

## Project

    1.App.jsx
    shortcut 'rafc' ( generates structure of that component )

    2.src folder 
        -create components folder
            -create Navbar.jsx / rafc / 
    
    3.Navbar.jsx mounted in App.jsx

## example 1

    let array = ["user1", "user2","user3"]

    <div>
    {array.map((user)=>{return<h2>{user}</h2>})}
    </div>

## Conditional rendering

    let data ="boy";
    return(
        <div>
            { data==="boy"? <h1>Boy</h1> : <h1>Girl</h1> }
        </div>
    )
