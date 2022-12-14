import background from "../img/background.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

function Intro() {

    const showDot = (id) => {
        const dot = document.getElementById(id);
        dot.classList.toggle("hidden");
    }

    const hideDot = (id) => {
        const dot = document.getElementById(id);
        dot.classList.toggle("hidden");
    }
 
    return (
    <div style={{backgroundImage: `url(${background})`}} class="h-screen bg-cover">
        <div class="px-2 text-white dark:bg-gray-900 dark:border-gray-700bg-white sm:px-4 py-4 dark:bg-gray-900  w-full flex justify-around">
            <p class="py-4 md:text-3xl md:ml-3 font-semibold font-sans">Tom Coquery</p>
            <div class="flex">
                <div class="py-4 mr-2 md:mr-8 flex flex-col items-center justify-center" id="work-div">
                    <a href="#works" class="md:text-2xl text-white font-sans z-10" onMouseOver={()=> showDot("work-dot")} onMouseOut={() => hideDot( "work-dot")}>Works</a>
                    <span class="text-5xl leading-[0rem] hidden" id="work-dot">.</span>
                </div>
                <div class="py-4 mr-2 md:mr-8 flex flex-col items-center justify-center" id="about-div">
                    <a href="#about"class="md:text-2xl text-white font-sans z-10" onMouseOver={()=> showDot("about-dot")} onMouseOut={() => hideDot( "about-dot")}>About</a>
                    <span class="text-5xl leading-[0rem] hidden" id="about-dot">.</span>
                </div>
                <div class="py-4 flex flex-col items-center justify-center" id="contact-div">
                    <a href="#contact" class="text-white md:text-2xl font-sans z-10" onMouseOver={()=> showDot("contact-dot")} onMouseOut={() => hideDot( "contact-dot")}>Contact</a>
                    <span class="text-5xl leading-[0rem] hidden" id="contact-dot">.</span>
                </div>
            </div>
        </div>        
        <div class="flex flex-col container justify-center items-center mx-auto h-3/4 px-4">
            <p class="font-sans text-xl md:text-4xl text-white ">
                Welcome. <br/><br/>
                My name is Tom, I'm a web developer based in Paris.<br/><br/>
                If you like clean interfaces and messy backends, you're in the right place. <br/>
            </p>
        </div>
        <div class="flex flex-col justify-center items-center bottom-4 absolute w-full h-10">
            <FontAwesomeIcon icon={faAnglesDown} class="invisible md:visible text-white animate-bounce h-full"/>
        </div>
    </div>
    );
  }
  
  export default Intro;
  