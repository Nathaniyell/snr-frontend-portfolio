import {resume} from '~/data/resume';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './resume.scss';

interface ResumeProp {
    menu?: string[];
    activeMenu: (arg: number) => void;
}

export default function Resume(props: ResumeProp) {
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

    useEffect(() => {
        props.activeMenu(0);
    }, []);

    const toggleItem = (idx: number) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(idx)) {
            newExpanded.delete(idx);
        } else {
            newExpanded.add(idx);
        }
        setExpandedItems(newExpanded);
    };

    return (
        <div className="resume">
            <div className="resume_container">
                <div className="top_row">
                    <h2>{resume.name}</h2>
                    <div className="buttons">
                        <a href="https://drive.google.com/file/d/18rmSPcoLdqLM1ftN2UD3VP0CusFlJt2c/view?usp=sharing" download target="_blank" rel="noopener noreferrer">
                            <small>
                                <i className="fas fa-download"></i> <span>Download </span>
                            </small>
                        </a>
                    </div>
                </div>

                <p className="subheading">{resume.title}</p>

                <div className="summary">
                    <p>{resume.intro}</p>
                </div>

                <div>
                    {resume.taglines?.map((tagline, idx) => (
                        <div key={`tagline-${idx}`} className="tagline">
                            <i className={`fas ${tagline.icon}`}></i>
                            <div>
                                <h5>{tagline.title}</h5>
                                <small>{tagline.text}</small>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="divider">
                    <p>Feedbacks & Recommendations</p>
                    <span></span>
                </div>

                <div>
                    {resume.recommendations?.map((recommendation) => <section className="recommendation">
                        <div className="profile">
                       
                            <div>
                                <a href={recommendation.user.linkedInUrl} target="_blank">
                                    {recommendation.user.name}
                                    <i className="fab fa-linkedin pl-2 mt-1"></i>
                                </a>
                                <small>{recommendation.user.role}</small>
                            </div>
                        </div>
                        <p>
                            <span className="font-bold text-black">"</span>
                            {recommendation.feedback}
                            <span className="font-bold text-black">"</span>
                        </p>
                    </section>)}
                </div>


                <div className="divider">
                    <p>Skills</p>
                    <span></span>
                </div>

                <div className="skills">
                    {resume.skills.map((skill, idx) => (
                        <p key={`skill-${idx}`}>
                            <span className="pr-2 text-black">{skill.title}: </span> {skill.body.join(', ')}
                        </p>
                    ))}
                </div>

                <div className="divider">
                    <p>Work Experience</p>
                    <span></span>
                </div>

                <div className="default_container">
                    {resume.workExperiences.map((experience, idx) => (
                        <section key={idx} className="work_experience_item">
                            <p 
                                className={`title accordion_title ${expandedItems.has(idx) ? 'expanded' : ''}`}
                                onClick={() => toggleItem(idx)}
                            >
                                <span className="title_content">
                                    <a 
                                        href={experience.companyUrl}
                                        target="_blank"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {experience.company}
                                    </a> - {experience.role}
                                    <span className="date">
                                        {experience.startDate} - {experience.endDate ? experience.endDate : 'PRESENT'}
                                    </span>
                                </span>
                                <i className={`fas ${expandedItems.has(idx) ? 'fa-chevron-up' : 'fa-chevron-down'} accordion_icon`}></i>
                            </p>
                            {expandedItems.has(idx) && (
                                <article className="description accordion_content">
                                    {experience.jobDescription && <p>{experience.jobDescription}</p>}
                                    {experience.achievements.map((achievement, achievementIdx) => (
                                        <p key={`achievement-${achievementIdx}`}>
                                            <span>—</span>
                                            {achievement}
                                        </p>
                                    ))}
                                </article>
                            )}
                        </section>
                    ))}
                </div>

                <div className="divider">
                    <p>Education</p>
                    <span></span>
                </div>

                <div className="default_container">
                    <section>
                        {resume.educations.map((education, idx) => (
                            <>
                                <p key={`education-${idx}`} className="title">
                                    {education.title} <br />
                                    <span> {education.startDate} - {education.endDate}</span>
                                </p>
                                {/* <article className="description">
                                    <p>{`— Relevant coursework: ${education.relevant.join(', ')}`}</p>
                                </article> */}
                            </>
                        ))}
                    </section>
                </div>

            </div>

            <div className="go_button_container">
                <Link to="/">
                    <button>
                        <b>➜ </b>Home
                    </button>
                </Link>
                <Link to="/projects">
                    <button>Projects ➜</button>
                </Link>
            </div>
        </div>
    );
}
