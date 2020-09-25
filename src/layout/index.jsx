import React from "react";
import PageHeader from "./header";
import PageFooter from './footer'
import { BrowserRouter as Router } from "react-router-dom";
import BasicRoute from "../router";


const PageLayout = (props)=>{
    return(
        <Router basename='/'>
            <PageHeader />
            <div style={{minHeight:500,background:'#f7f7f7'}}>
                <BasicRoute />
            </div>
            <PageFooter />
        </Router>
    )
}
export default PageLayout
