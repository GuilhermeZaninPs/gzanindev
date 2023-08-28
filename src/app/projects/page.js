import Image from "next/image";
import Footer from "../components/footer/Footer";
import HeaderNav from "../components/header/HeaderNav";

export default function Page () {
    return (
        <>
            <HeaderNav />
                <section className="text-white max-w-[90%] md:max-w-[1320px] mx-auto mt-[50px] lg:pl-14 md:px-8 pr-6">
                    <div>
                        <h1 className="text-[calc(1.56vw+1.56rem)] lg:text-2.81rem font-bold">My projects</h1>
                    </div>
                    <div className="mt-[50px]">
                        <div className="bg-[#2e3032] h-auto text-center px-8 pb-6 flex flex-col items-center md:text-left md:pb-0 md:flex-row md:items-center mt-[10px]">
                            <Image 
                                src="/iasdphoto.png" 
                                width={300} 
                                height={500}
                                className="w-[20vw] md:h-[34vh] md:w-[15vw] mr-[20px]"
                                alt="Screenshot IASD project"
                            />
                            <div className="pl-10 mt-10">
                                <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold ">Volunteer Web Developer</h3>
                                <p>Collaborated with a designer to develop a new church website resulting in a more user-friendly and visually appealing website.</p>
                                <p>I built using <strong>Wordpress</strong></p>
                                <a href="https://adventistasoxford.org" target="blank_" className="text-[#2896df] hover:font-bold">adventistasoxford.org</a>
                            </div>
                        </div>
                        <div className="bg-[#2e3032] h-auto text-center px-8 pb-6 flex flex-col-reverse items-center md:text-left md:pb-0 md:flex-row md:items-center           md:justify-end mt-[20px] ">
                            <div className="pl-10 mt-10">
                                <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold">Web Developer</h3>
                                <p>Created a visually appealing and user-friendly website. Utilized responsive design techniques to ensure optimal viewing experience on both desktop and mobile devices.</p>
                                <p>I built using <strong>HTML, CSS and Javascript</strong></p>
                                <a href="https://guilhermezaninps.github.io/Insure/" target="blank_" className="text-[#2896df] hover:font-bold">guilhermezaninps.github.io/Insure/</a>
                            </div>
                            <Image 
                                src="/insure.png" 
                                width={300} 
                                height={500}
                                className="w-[20vw] md:h-[34vh] md:w-[15vw] ml-[20px]"
                                alt="sreenshot Insure project"
                            />
                        </div>
                        <div className="bg-[#2e3032] h-auto text-center px-8 pb-6 flex flex-col items-center md:text-left md:pb-0 md:flex-row md:items-center mt-[20px]">
                            <Image 
                                src="/to-do.png" 
                                width={300} 
                                height={500}
                                className="w-[20vw] md:h-[34vh] md:w-[15vw] mr-[20px]"
                                alt="screenshot To-do list project"
/>
                            <div className="pl-10 mt-10">
                                <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold ">Web Developer</h3>
                                <p>Developed and implemented a React-based to-do list web application using React, Reducer, and Local Storage. Designed and integrated front-end functionalities for efficient task management.</p>
                                <p>I built using <strong>Reactjs, useReducer and Bootstrap</strong></p>
                                <a href="https://guilhermezaninps.github.io/eshop-react/" target="blank_" className="text-[#2896df] hover:font-bold">guilhermezaninps.github.io/eshop-react/</a>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
        </>
    )
}