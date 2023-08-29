'use client'

import { useState } from "react";
import Footer from "../components/footer/Footer";
import HeaderNav from "../components/header/HeaderNav";

export default function Page() {
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')
    const [textAreaInput, setTextAreaInput] = useState('')



    /* const handleSubmit = async (e) => {
        e.preventDefault();
        if(!emailInput) {
            return alert('email is required')
        }
        console.log(JSON.stringify({ email: emailInput }))
        try {
            const res = await fetch('./api/subscribe', {

                method: 'POST',
                body: JSON.stringify({email: emailInput})
            })
            const data = await res.json()

            if (data.success) {
                alert('Join successfully')
            } else {
                throw new Error(data?.error || 'Something went wrong, please try again later')
            }

        } catch(e) {
            alert(e.message)
            console.log(e.message)
            
        }
        setEmailInput('')
    }; */



    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!emailInput) {
          return alert('Email is required');
        }
        try {
           const res = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email: emailInput }) });
           const data = await res.json();
           if (data.success) {
             alert('Joined successfully.');
           } else {
              throw new Error(data?.error || 'Something went wrong, please try again later');
           }

        } catch(e) {
           alert(e.message);
        }
        setEmailInput('');    
    };
    


    return (
        <>
            <HeaderNav />
                <section className=" max-w-[90%] h-[70vh] md:max-w-[1320px] mx-auto mt-[50px] lg:pl-14 md:px-8 pr-6">
                    <div>
                        <h1 className="text-[calc(1.56vw+1.56rem)] lg:text-2.81rem font-bold text-white mb-[50px]">Contact</h1>
                    </div>
                    {/* <div className="w-[40%]">
                        <form onSubmit={handleFormSubmit} method='post' className="flex flex-col" >
                             <input type="text" className="mt-4 p-2 " placeholder="Your name"></input> 
                            <input type="email" className="mt-4 p-2 " placeholder="Your email" value={emailInput} onChange={(e) => {setEmailInput(e.target.value)}}></input>
                             <input type="text" className="mt-4 p-2 " placeholder="Your phone (optional)"></input> 
                             <textarea className="mt-4 h-[30vh] p-2 " placeholder="How can I help you?"></textarea> 
                            <button type="submit" className="mt-4 border p-2 text-white">Send</button>
                        </form>
                    </div> */}
                    <div className="text-white flex flex-col md:flex-row justify-between mb-[50px]">
                        <div className="md:w-1/2 bg-[#2e3032] mb-2 md:mb-0 md:mx-2 py-6 text-center flex flex-col justify-between">
                            <div className="flex flex-col justify-center">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="40" 
                                    height="40" 
                                    fill="currentColor" 
                                    className="bi bi-telephone w-full mb-6" 
                                    viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>
                                <label className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold mb-6">Phone</label>
                            </div>
                            <p>
                                Let&apos;s have a chat
                            </p>
                            <span className="text-[#2896df]">+44 07771621493</span>
                        </div>
                        <div className="md:w-1/2 bg-[#2e3032] mt-2 md:mx-2 md:mt-0 py-6 text-center flex flex-col justify-between">
                            <div className="flex flex-col">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="40" 
                                    height="40" 
                                    fill="currentColor" 
                                    className="bi bi-envelope w-full mb-6" 
                                    viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                                <label className="text-[calc(0.51vw+1rem)] lg:text-1.58rem font-bold mb-6">Email</label>
                            </div>
                            <p>
                                Send me an email
                            </p>
                            <span className="text-[#2896df]">guizanin224@gmail.com</span>
                        </div>
                    </div>
                </section>                
            <div className="fixed bottom-[-4px] md:bottom-0 left-0 right-0">
                <Footer />
            </div>
        </>
    )
}


