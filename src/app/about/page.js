import Footer from "../components/footer/Footer";
import HeaderNav from "../components/header/HeaderNav";
import Image from "next/image";

export default function Page () {
    return (
        <>
            <HeaderNav />
            <section className="text-white max-w-[90%] md:max-w-[1320px] mx-auto mt-[50px] lg:pl-14 md:px-8 pr-6">
                <div>
                    <h1 className="text-[calc(1.56vw+1.56rem)] lg:text-2.81rem font-bold">About me</h1>
                </div>

                <div className="mt-[50px] flex flex-row">
                    {/* <Image 
                        src="/about-image.jpg"
                        width={300}
                        height={400}
                        alt="Code image by Luca Bravo on Unsplash"
                        className="w-[500px] max-h-[450px] mr-4"
                    /> */}
                    <p>
                    Hello, I'm Guilherme Zanin, a passionate Frontend Developer based in England. My journey into the world of programming began in 2017 while pursuing a degree in psychology. It was during this time that I discovered my fascination for creating digital experiences that connect with people on a deeper level.<br/><br/>

                    In 2021, I embarked on a new chapter by moving to England, which marked the turning point in my programming journey. This change provided me with the environment and motivation to dive wholeheartedly into honing my skills and expertise.<br/><br/>

                    My toolkit includes a versatile array of technologies. I'm adept at crafting pixel-perfect user interfaces using HTML, CSS, and Javascript. Building upon these foundations, I've embraced modern libraries like React and Next.js to bring seamless interactivity and dynamic functionality to my projects.<br/><br/>

                    With a strong sense of version control, I'm well-versed in utilizing Git to collaborate efficiently and ensure codebase integrity. I've mastered the art of crafting responsive and visually appealing designs, often utilizing frameworks such as Bootstrap and Tailwind CSS to streamline the development process.<br/><br/>

                    As someone who believes in the power of content management, I've also worked extensively with WordPress, seamlessly blending design and functionality to create engaging websites.<br/><br/>
                    My journey from a background in psychology to the world of coding has equipped me with a unique perspective. I understand the importance of user-centered design and the ability of technology to influence human behavior positively.<br/><br/>

                    I'm driven by curiosity, a commitment to continuous learning, and a desire to contribute to projects that make a meaningful impact. I'm excited to be a part of this ever-evolving digital landscape, where creativity and technology intertwine.<br/><br/>

                    Feel free to explore my portfolio to see the results of my journey so far. Let's connect and explore how my skills and passion can elevate your projects.
                    </p>
                </div>

                <Footer />
            </section>
        </>
    )
}