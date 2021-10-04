import React from "react";
import './GIf.css'

export default function Gif ({ title,url, id}){
    return(
        <a href={`#${id}`} className="Gif">
            <h4 className="title">{title}</h4>
            <img src={url} alt={title}/>
        </a>
    )
}