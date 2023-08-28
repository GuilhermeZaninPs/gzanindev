"use client";

import Image from "next/image";
import styles from "./styles.module.css";

import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <>
      <section className="banner-section max-w-[1320px] mx-auto">
        <div className="relative">
          <div className={styles.verticalLines}>
            <div className="lines-div"></div>
            <div className="lines-div"></div>
            <div className="lines-div"></div>
          </div>
          <div className="main-container z-[1] mx-auto max-w-7x1 p-6 pt-0 md:pt-6 lg:px-8 flex flex-col-reverse items-center md:flex-row md:items-center md:justify-between">
            <div className="text-white">
              <div>
                <h3 className=" text-[calc(2.18vw+1.50rem)] lg:text-3.50rem font-bold">
                  <span>Hi, I&apos;m Guilherme Zanin</span>
                </h3>
              </div>
              <div className="text-[calc(2.08vw+1.40rem)] lg:text-3.75rem text-[#2896df]">
                <Typewriter
                  options={{
                    strings: ["Frontend Developer"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </div>
              <div>
                    <div className="w-[15%] flex justify-between mt-[15px]">
                        <a href={'https://www.linkedin.com/in/guilhermezaninps/'} target='_blank' className="w-[35px] h-[35px] bg-black/20 rounded-full flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                fill="currentColor"
                                className="bi bi-linkedin opacity-50 hover:opacity-100 cursor-pointer"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                        <a href={'https://github.com/GuilhermeZaninPs'} target="_blank" className="w-[35px] h-[35px] bg-black/20 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="19" 
                                height="19" 
                                fill="currentColor" 
                                className="bi bi-github opacity-50 hover:opacity-100 cursor-pointer" 
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>    
                    </div>
                <div>

                </div>
              </div>
            </div>
            <div className="w-[70%] md:w-[40%]">
              <Image
                src={"/Photo.jpeg"}
                width={400}
                height={300}
                layout="fixed"
                className="w-full h-full object-cover"
                alt="photo banner"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
