import React, {useState} from 'react'

import Course1 from "../ui/1.jpg";
import Course2 from "../ui/2.jpg";

function CoursePage(){

    const [Course, setCourse] = useState(
        {
            ID: 1,
            title: "Aula no Léo Ep. 1",
            about:"make your illustration look really good. We're gonna study a lot of cases here, setting your work panel, makingg some awesome actions and presets for future. <br/> Hope you'll get some really usefull, stuff out of this course. Good Luck to all!",
            tutor: {
                ID: 1,
                name: "Leleo Games",
                username: "leleozin",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 min",
            poster: Course1,

            videos: [
                {
            ID: 1,
            title: "Introduction",
            duration: "03 min 24 secs"
            },
            {
                ID: 2,
                title: "Getting Started",
                duration: "09 min 55 secs"
                },
                {
                    ID: 1,
                    title: "The Illustration",
                    duration: "62 min 48 secs"
                }
            ]
        }
    );

var CourseVideos = [];
for(let i = 0; i < Course.videos.length; i++){
CourseVideos.push(
<a href="#" key={"course-video-" + i} className="noul aic rel flex">
    <div className="id s18 fontn cfff">{Course.videos[i].ID}</div>
    <div className="meta rel">
        <h1 className="s15 lbl fontb c333">{Course.videos[i].title}</h1>
        <h1 className="s13 dur fontn c777">{Course.videos[i].duration}</h1>

    </div>
</a>
);
}

    return (
        <div className="Course-page rel flex" >

  <div className="course-info rel">

  <div className="tutor rel aic flex">
                        <div className="pic">
                            <img src={Course.tutor.dp} className="bl"></img>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">{Course.tutor.name}</h2>
                            <h2 className="s13 uname fontn c777">Course Tutor</h2>
                        </div>
                    </div>

   <div className="Course-meta">
        <h2 className="s24 title fontb c333">{Course.title}</h2>
        <p className="s18 about fontn c777" dangerouslySetInnerHTML={{__html:Course.about}} />
        
        <div className="section section-b rel">
                <h2 className="title s24 fontb">Course <span className="fontn">Details</span></h2>
                <div className="Course-videos aic flex">
                {CourseVideos}
            </div>
        </div>
    </div>
</div>
<div className="course-preview rel">

    <div className="player rel">
        <video poster={Course.poster} />
        <div className="ctrls abs aic flex">
           <button className="icon-pause s24 pp" />

           <div className="timer rel fontn s15 cfff">
           02:54 / 09:55
        </div>

        <div className="slider rel">
        <div className="prog rel">
        <div className="bar rel">
        <div className="knob abs" />
        </div>
        </div>
        </div>
        <button className="icon-volume-100 s24 vol" />
        <button className="icon-full-screen-enter2 s24 fs" />
        </div>
    </div>
</div>
</div>
)
}

export default CoursePage;
