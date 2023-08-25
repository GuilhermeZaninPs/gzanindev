'use client'

export default function Skills () {
    return (
        <>
            <section className="text-white max-w-[1320px] mx-auto mt-[50px]">
                <div className="skills-title text-center">
                    <h1 className="text-[calc(1.56vw+1.56rem)] lg:text-2.81rem font-bold">My Expertise</h1>
                    <h3 className="text-[calc(0.74vw+1rem)] lg:text-1.19rem font-merriweather">Ability and Skills</h3>
                </div>
                <div className="skills-body grid grid-rows-1 px-8 mt-[50px]">
                    <div className="text-center grid md:grid-cols-2 lg:grid-cols-4">
                        <div className="mb-[30px]">
                            <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold">HTML/CSS</h3>
                            <h4 className="text-[calc(0.34vw+0.81rem)] lg:text-1.19rem">Responsive design</h4>
                        </div>
                        <div className="mb-[30px]">
                            <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold">JAVASCRIPT</h3>
                            <h4 className="text-[calc(0.34vw+0.81rem)] lg:text-1.19rem">React/Next.js </h4>
                        </div>
                        <div className="mb-[30px]">
                            <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold">GITHUB</h3>
                            <h4 className="text-[calc(0.34vw+0.81rem)] lg:text-1.19rem">NPM</h4>
                        </div>
                        <div className="mb-[30px]">
                            <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold">WORDPRESS</h3>
                            <h4 className="text-[calc(0.34vw+0.81rem)] lg:text-1.19rem">Bootstrap/TailwindCSS</h4>
                        </div>
                    </div>
                    {/* <div className="text-center grid  md:grid-cols-2 lg:grid-cols-4">
                            <div className="mb-[30px]">
                                <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold">TESTE1</h3>
                                <h4 className="text-[calc(0.34vw+0.81rem)] lg:text-1.19rem">Responsive design</h4>
                            </div>
                            <div className="mb-[30px]">
                                <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold">TESTE2</h3>
                                <h4 className="text-[calc(0.34vw+0.81rem)] lg:text-1.19rem">Responsive design</h4>
                            </div>
                            <div className="mb-[30px]">
                                <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold">TESTE3</h3>
                                <h4 className="text-[calc(0.34vw+0.81rem)] lg:text-1.19rem">Responsive design</h4>
                            </div>
                            <div className="mb-[30px]">
                                <h3 className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold">TESTE4</h3>
                                <h4 className="text-[calc(0.34vw+0.81rem)] lg:text-1.19rem">Responsive design</h4>
                            </div>
                        </div> */}
                </div>
            </section>
        </>
    )
}