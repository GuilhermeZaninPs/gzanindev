'use client'

export default function Cta () {
    return (
        <>
            <section className="text-white max-w-[1320px] mx-auto px-4 py-8 my-[50px] flex justify-between items-center">
                <div>
                    <h1 className="text-[calc(1.56vw+1.56rem)] lg:text-2.81rem font-bold">Download CV</h1>
                    <h3 className="text-[calc(0.44vw+0.95rem)] lg:text-1.19rem">Download my CV to learn more about me</h3>
                </div>
                <a href="/resume_guilherme_zanin.pdf" download="Resume_Guilherme_Zanin" target="_blank"><button className="bg-[#2896df] px-4 py-2 h-12 w-36 font-bold">Download</button></a>
            </section>
        </>
    )
}