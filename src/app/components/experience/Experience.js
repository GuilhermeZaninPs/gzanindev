'use client'
import { Chrono } from "react-chrono"

export default function Experience () {
    const items = [
        {
            cardTitle: "Volunteer Web Developer",
            url: "http://adventistasoxford.org",
            cardSubtitle:"Seventh Day Adventist Church, Oxford",
            cardDetailedText: "Collaborated with a designer to develop a new church website resulting in a more user-friendly and visually appealing website.",
            /* media: {
                type: "IMAGE",
                source: {
                    url: "http://someurl/image.jpg"
                }
            } */
        },
        {
            cardTitle: "Web Developer",
            url: "https://guilhermezaninps.github.io/Insure/",
            cardSubtitle:"Insure, Oxford",
            cardDetailedText: "Created a visually appealing and user-friendly website. Utilized responsive design techniques to ensure optimal viewing experience on both desktop and mobile devices.",
            /* media: {
                type: "IMAGE",
                source: {
                    url: "http://someurl/image.jpg"
                }
            } */
        },
        {
            cardTitle: "Web Developer",
            url: "https://guilhermezaninps.github.io/eshop-react/",
            cardSubtitle:"To-do list, Personal Project",
            cardDetailedText: "Developed and implemented a React-based to-do list web application using React, Reducer, and Local Storage. Designed and integrated front-end functionalities for efficient task management.",
            /* media: {
                type: "IMAGE",
                source: {
                    url: "http://someurl/image.jpg"
                }
            } */
        },
       
    ];
    return (
        <>
            <section className="text-white max-w-[1320px] mx-auto mt-[50px] bg-[#2e3032]">
                <div className="text-center">
                    <h1 className="text-[calc(1.56vw+1.56rem)] lg:text-2.81rem font-bold pt-[50px]">Job Experience</h1>
                </div>
                <div className="w-[90%] h-auto text-white mx-auto">
                    <Chrono 
                        items={items} 
                        mode="VERTICAL_ALTERNATING" 
                        hideControls={true} 
                        cardWidth={650} 
                        // cardHeight={200} 
                        enableBreakPoint 
                        slideShow
                        slideItemDuration={1500}
                        slideShowType="reveal"
                        verticalBreakPoint={920}
                        theme={{
                            primary: '#d2d3d5',
                            secondary: '#0693e3',
                            cardBgColor: '#212428',
                            titleColorActive: 'blue',
                            cardTitleColor: 'white',
                            cardSubtitleColor: 'white',
                            cardDetailsColor: 'white',
                          }}
                        fontSizes={{
                            cardSubtitle: 'calc(0.21vw + 0.95rem) !important',
                            cardText: 'calc(0.31vw + 1rem) !important',
                            cardTitle: 'calc(0.61vw + 1.1rem)',
                            title: '1rem',
                        }}
                    />
                </div>
            </section>
        </>
    )
}