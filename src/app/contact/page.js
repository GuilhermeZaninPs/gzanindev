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
                <section className=" max-w-[90%] md:max-w-[1320px] mx-auto mt-[50px] lg:pl-14 md:px-8 pr-6">
                    <div>
                        <h1 className="text-[calc(1.56vw+1.56rem)] lg:text-2.81rem font-bold text-white">Contact</h1>
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
                    <div className="text-white">
                        <div className="w-1/4 flex justify-between">
                            <label>Phone</label>
                            <span className="text-left">+44 07771621493</span>
                        </div>
                        <div className="w-1/4 flex justify-between">
                            <label>Email</label>
                            <span className="text-left">guizanin224@gmail.com</span>
                        </div>
                    </div>
                </section>                
            <Footer />
        </>
    )
}


