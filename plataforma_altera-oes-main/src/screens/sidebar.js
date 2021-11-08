import React, { useState } from 'react';
import logo from "../ui/logo_amaterasuv2p.png";

function Sidebar() {


    const [nav, setNav] = useState([
        {label: "Início", slug: "/", icon: "icon-home3"},
        {label: "Explore", slug: "discover", icon:"icon-compass2"},
        {label: "Categorias", slug: "cates", icon: "icon-stack"},
        {label: "Meus cursos", slug: "my-courses", icon: "icon-books"}
    ])
    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li key={"nav" + i + nav[i].slug}>
            <a href={nav[i].slug} className={"aic link noul flex c333" + (currentPage == nav[i].slug ? " on": "")}  >
              <div className={"ico s20 " + nav[i].icon} />
              <h2 className="lbl s24 ">{nav[i].label}</h2>
            </a>
            </li>

        );
    }


    return (
        <div className="sidebar rel">
            <a href="#" className="logo bl">
                <img src={logo} className="bl"/>
            </a>

            <ul className="nav">
                {navigation}
            </ul>


            <div className="updated-courses flex aic right">
                <div className="icon-notification ico c000" />
                <div className="lbl s15 fontb c333">
                    <span>Novidades de cursos</span>
                    <h2 className="author s13 c777">by Vinicius Rodrigues</h2>
                </div>
            </div>
            
            <div className="stats aic jic flex">

                <div className="stats-box flex aic jic">
                    <div className="ico ico-points s24 icon-shield" />
                    <h2 className="val s15 c333 fontb">7.5</h2>
                    <h2 className="lbl s13 c777">média</h2>
                </div>

                <div className="stats-box flex aic jic">
                    <div className="ico ico-star s24 icon-star-full" />
                    <h2 className="val s15 c333 fontb">45.3%</h2>
                    <h2 className="lbl s13 c777">concluído</h2>
                </div>

            </div>
                        <div className="me flex aic">
                            <div className="photo cfff s24">
                                <img src="https://placeimg.com/100/100/people" className="bl"/>
                            </div>
                            <div className="lbl s15 fontb c333">
                                <span>Vinicius Rodrigues</span>
                                <h2 className="uname s13 c777">@vinnie-webdev</h2>
                            </div>
                        </div>
                        
        </div>

    )
}

export default Sidebar;
