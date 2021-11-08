import React, {useEffect, useState} from 'react';
import Course1 from "../ui/1.jpg";
import Course2 from "../ui/2.jpg";


var AppLoader = "";
var NavLink = "";

function HomePage(){

    useEffect(()=>{
        document.title = "Udemy";
    })

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
            title: "Murilão Tutoriais, como pronunciar palavras corretamente.",
            tutor: {
                ID: 2,
                name: "Murilão Love",
                username: "Murila1",
                dp: "http://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration: "24 hr 25 min",
            poster: Course2
        }
    ]);

    const [topTutors, setTopTutors] = useState([
        {
                ID: 1,
                name: "Leleo Games",
                username: "leleozin",
                dp: "http://placeimg.com/100/100/people?tutors-" + 1,
        },
        {
            ID: 2,
            name: "Leleo Games",
            username: "leleozin",
            dp: "http://placeimg.com/100/100/people?tutors-" + 2,
        },
        {
            ID: 3,
            name: "Leleo Games",
            username: "leleozin",
            dp: "http://placeimg.com/100/100/people?tutors-" + 3,
    },
    {
        ID: 4,
        name: "Leleo Games",
        username: "leleozin",
        dp: "http://placeimg.com/100/100/people?tutors-" + 4,
},
{
    ID: 5,
    name: "Leleo Games",
    username: "leleozin",
    dp: "http://placeimg.com/100/100/people?tutors-" + 5,
},
{
    ID: 6,
    name: "Leleo Games",
    username: "leleozin",
    dp: "http://placeimg.com/100/100/people?tutors-" + 6,
},
        
    ]);

    //Live Tutors List
    var tutorList = [];
    for(let i = 0; i < 8; i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/100/100/people?" + i} className="bl"></img>
            </button>
        );
    }

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

    var topTutorsList = [];
    for(let i = 0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"too-tutors-" + i}>
                <div className="user aic flex">
                        <div className="pic">
                            <img src={topTutors[i].dp} className="bl"></img>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                            <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
                        </div>
                    </div>
            </a>
        );
    }

    return (
        <div className="home-page rel">

            {/** Ao vivo **/}
            <div className="section rel">
                <h2 className="title s24 fontb">Ao <span className="fontn">Vivo</span></h2>

                <div className="tutors rel flex">
                    {tutorList}
                </div>
            </div>

            {/** Em destaque **/}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Em <span className="fontn">Destaque</span></h2>

                <div className="courses rel flex">
                    {courseList}
                </div>
            </div>

             {/** Top Tutors **/}
             <div className="section section-b rel">
                <h2 className="title s24 fontb">Melhores <span className="fontn">Criadores</span></h2>
                <div className="top-tutors rel flex">
                    {topTutorsList}
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;
