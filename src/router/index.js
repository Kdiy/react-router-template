import React,{ lazy, Suspense } from "react";
import { Route, Switch } from 'react-router-dom';


export const routes = [
    {
        path: '/',
        title: '主页',
        name: '/',
        component: lazy(()=>import('../pages/Home')),

    },
    {
        path: '/news',
        name: 'news',
        title: '新闻',
        component: lazy(()=>import('../pages/News/News')),
        children: [

            {
                name: 'news_detail',
                title: '详情',
                path: '/detail',
                component: lazy(()=>import('../pages/News/Detail')),
            }
        ]
    },{
        path: '/contact',
        name: '/contact',
        title: '联系',
        component: lazy(()=>import('../pages/Contact'))
    }
]


const explainMaps = []
const explainRoutes = (routes,parent = {})=>{
    routes.forEach(item=>{
        if(typeof item.children !== 'undefined'){
            explainRoutes(item.children,item)
        }
        item.path = parent.path ? parent.path + item.path.replace(parent.path,'') : item.path
        explainMaps.push(item)
    })
    return explainMaps
}


const mapRoutes = ()=>{
    const routeMaps = explainRoutes(routes)
    console.log(routeMaps)
    return routeMaps.map(item=>{
        const RouteComponent = item.component
        return <Route exact={true} path={item.path} key={item.path} render={(props)=><RouteComponent {...props} />} />
    })
}




const BasicRoute = () => (
    <Suspense fallback={null}>
        <Switch>
            {mapRoutes(routes)}
        </Switch>
    </Suspense>

)


export default BasicRoute

