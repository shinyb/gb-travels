import React from "react"
import Navbar from "./components/Navbar"
import Posts from "./components/Posts"
import data from "./data"

export default function App() {
     const dataEl = data.map(item => <Posts
        key={item.id}
        item={item}
        />)
        console.log(dataEl)
    
    return (
        <div className="page-container">
            <Navbar />
            {dataEl}
        </div>
    )
}