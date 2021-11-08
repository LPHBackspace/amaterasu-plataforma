import React, { useState } from 'react';

import Course1 from "../ui/1.jpg";
import Course2 from "../ui/2.jpg";

import Gift from "../ui/presente.png";

function Rightbar() {

    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Aula no Léo Ep. 1",
            tutor: {
                ID: 1,
                name: "Leleo Games",
                username: "leleozin",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 min",
            poster: Course1
        },
        {
            ID: 2,
            title: "Murilão Tutoriais, como pronunciar as palavras corretamente",
            tutor: {
                ID: 2,
                name: "Murilão Love",
                username: "Murila1",
                dp: "http://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration: "24 hr 25 min",
            poster: Course2
        },
        {
            ID: 3,
            title: "Murilão Tutoriais, como pronunciar palavras corretamente",
            tutor: {
                ID: 3,
                name: "Murilão Love",
                username: "Murila1",
                dp: "http://placeimg.com/100/100/people?tutor-" + 3,
            },
            duration: "24 hr 25 min",
            poster: Course2
        }
    ]);

    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        courseList.push(
            <a href="#" className="course rel" key={"popular-course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center"
                }}>

                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl"></img>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                         <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                         <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
                    </div>

                </div>
            </a>
        );
    }

    return (
        <div className="rightbar rel">

            <div className="section rel">
                <h2 className="title s24 fontb">Barra <span className="fontn">de Pesquisa</span></h2>
                <div className="search-box rel flex">
                    <input type="text" placeholder="Digite Aqui..." className="qry s15 fontb"></input>
                    <button className="go cfff s15 fontb">Pesquisar</button>
                </div>
            </div>

            <div className="section section-b rel">
                <div className="courses rel flex">
                    <div className="course-a">
                        {courseList[0]}
                    </div>
                    <div className="flex cols">
                        {courseList[1]}
                        {courseList[2]}
                    </div>
                </div>
            </div>

            <div className="section section-b rel">
            <h2 className="title s24 fontb">Ofertas <span className="fontn">especiais</span></h2>
                <div className="special-offer rel flex">
                    <div className="meta rel">
                    <h2 className="h1 s20 fontb">1 mês de Premium!</h2>
                    <h2 className="h2 s14 fontb">Disponível até 30/11/2021</h2>
                    <button className="s15 fontb">Ver Mais</button>
                    </div>
                    <div className="vector rel">
                        <img src={Gift} />
                    </div>
                    <div className="ring abs"></div>
                </div>
            </div>

        </div>
    )
}

export default Rightbar;
