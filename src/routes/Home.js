import { useState, useEffect, useRef } from "react"
import Video from "./../assets/video/a.mp4"
import Face1 from "./../assets/photos/a.jpg"
import Face2 from "./../assets/photos/b.jpg"
import Face3 from "./../assets/photos/c.jpg"
function Home() {
    const [isPlaying, setPlaying] = useState(false);
    const vid = useRef(null)
    useEffect(()=>{
        console.log("chichi");
        if(isPlaying) {
            vid.current.pause();
        }
        else {
            vid.current.play();
        }
    }, [isPlaying])
    return(
        <main>
        <section>
            <div className="max">
            <h1>Lorem change it with appropriate</h1>
            <p className="p-s1">Need the element to resemble a link, use a button and change it with appropriate styles. Learn moreneed the element to resemble a link, use a button and change it with appropriate styles. Learn more</p>
            </div>
        </section>
        <section className="split-3">
            <div className="s3-main max">
                <section className="s3-1">
                    <div>
                        <h2>1.2 Million</h2>
                        <p className="ppt-1">Oh yeah apparently we tred it too!</p>
                        <div className="arrowed flex a-i-c">
                            <div>
                            <h3>Do you what they said?</h3>
                            <p>Need the element to resemble a link, use a button and change it with appropriate styles. Learn moreneed the element to resemble a link, use.</p>
                            </div>
                            <span></span>
                        </div>
                        <h2 style={{marginTop: "20px"}}>5 star reviews</h2>
                        <p className="ppt-1">From 300 users on pinterest and sindnoyea</p>
                    </div>
                </section>
                <section className="s3-2 flex a-i-c">
                    <div className="vid" style={{display: "flex", alignItems: "center"}}>
                        <button onClick={()=>setPlaying(!isPlaying)} className="p-p-btn">{isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
</svg>
 : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>
}</button>
                        <video autoPlay loop ref={vid}>
                            <source src={Video} />
                        </video>
                    </div>
                </section>
                <section className="s3-3 flex a-i-c">
                    <div>
                        <div>
                            <div className="flex a-i-c cc-rs">
                                <img src={Face1} />
                                <img src={Face2} />
                                <img src={Face3} />
                                <p>+5 contributors</p>
                            </div>
                            <blockquote>
                                <span className="quote">Marcel is a very common incancepture of inadequate interisms of logical methiods</span>
                                <span className="quoter">~ Marcel Williams</span>
                            </blockquote>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>
    )
}
export default Home