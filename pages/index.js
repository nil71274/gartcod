import { useEffect, useState } from 'react';

export default function Home() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
        const target = new Date("1/31/2024 12:59:59");
        const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();
  
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));

        // return () => clearInterval(interval);
    });
});
  
  return (
    <>
        <div className=' relative z-0'>
            <div className="fixed inset-0 transition-color delay-100 duration-700 opacity-25 color-bg" ></div>
            <div className="imgStyle" ></div>
                <img
                    role="presentation"
                    alt="gradient background"
                    loading="lazy"
                    width="1200"
                    height="1200"
                    decoding="async"
                    data-nimg="1"
                    className="  fixed inset-0 w-screen h-screen object-cover"
                    src="/images/gradient.e25977d1.svg"
                />
            <div className=" fixed inset-0 transition-opacity duration-1000 opacity-100" ></div>
        </div>

        <div className=' relative z-10'>
            <section id="container">
                <h1 className=" text-7xl max-w-3xl text-center leading-snug mb-12 __className_3e3188">
                    <img
                        alt="Gartcod logo"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        className="inline-block mr-6 -mt-2"
                        src="/images/gartcod-without-bg.webp"
                    />for
                    <div className="mx-2 ml-6 mr-6 -mt-2 align-middle inline-flex relative h-[80px] w-[80px]">
                        <img
                        alt="Widget icon"
                        loading="lazy"
                        width="80"
                        height="80"
                        decoding="async"
                        className=' imgChange text-transparent w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300 transform-none'
                        data-nimg="1"
                        src="/images/desktop.6a735a94.svg"
                        />
                        {/* <img
                        alt="Widget icon"
                        loading="lazy"
                        width="80"
                        height="80"
                        decoding="async"
                        className=' imgChange w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300 transform-none'
                        data-nimg="1"
                        src="/images/icons8-chrome.svg"
                        /><img
                        alt="Widget icon"
                        loading="lazy"
                        width="80"
                        height="80"
                        decoding="async"
                        className=' imgChange w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300 transform-none'
                        data-nimg="1"
                        src="/images/phone-white.svg"
                        /> */}
                    </div>
                    <span className=" color-change">&amp; Cloud gaming</span>
                </h1>
            </section>
            
            <section id="container-2">
                <span className="text-one">Join us on the launch of gartcod by
                    <img className=' ms-2 mt-1 w-14 h-14' src="/images/provoke_logo.webp" alt="Provoke Logo" />
                </span>
            </section>

            <section id="container-3">
                <div className="timer">
                    <div>
                        <span className="time">{days}</span>
                        <p className="color-change">DAYS</p>
                    </div>
                    <div>
                        <span className="time">{hours}</span>
                        <p className="color-change">HOURS</p>
                    </div>
                    <div>
                        <span className="time">{minutes}</span>
                        <p className="color-change">MINUTES</p>
                    </div>
                    <div>
                        <span className="time">{seconds}</span>
                        <p className="color-change">SECONDS</p>
                    </div>
                </div>
            </section>

            <section id="container-4">
                <button className=" text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200 bg-yellow-300 btn color-bg">
                    Claim Ticket
                </button>
            </section>

        </div>  
    </> 
  )
}
// )
// };