import React from "react";
import { routes } from "../router";
import { Link } from "react-router-dom";


const PageMenu = ()=>{
    const mapMenu = (props,parent = {})=> (
        <ul>
            {props.map(item=>(
                <li key={item.name}>
                    <Link to={parent.path ? (parent.path + item.path.replace(parent.path,'')) : item.path}>{item.title}</Link>
                    {item.children ? mapMenu(item.children,item) : null}
                </li>
            ))}
        </ul>
    )

    return mapMenu(routes)
}

export default PageMenu
