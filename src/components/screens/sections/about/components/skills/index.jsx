import React from 'react';
import SomeSkills from './skills';

export default function Skills(props) {

    const renderSomeSkills = (item, index) => {
        return (
            <div className="progress" key= { index }>
                <span className="skill">{ item.skill } <i className="val">{`${ item.value }%`}</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar"></div>
                </div>
            </div>
        )
    };

    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6">
                        { SomeSkills.map(renderSomeSkills) }
                    </div>
                </div>
            </div>
        </section>
    )
}
