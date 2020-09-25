import React from "react";
import { Link } from "react-router-dom";
import PageMenu from "./menu";


const PageHeader = (props)=>{
    return(
        <div>
            <div style={{display:'flex'}}>
                <Link to={'/'}>
                    <img src={require('../assets/img/1f47b.png')} />
                </Link>
                <h3>Logo</h3>
            </div>
            <div>
                <PageMenu />
            </div>
        </div>

    )
}
export default PageHeader
