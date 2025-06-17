import meImage from '../assets/photos/me.png';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Home(){
    useEffect(() => {
    AOS.init({
      duration: 1000, 
           
    });
  }, []);
    return(
        <>
        <div class="flex items-center justify-center min-h-screen bg-black text-white">
            <p data-aos="flip-right" className="md:text-9xl font-serif font-my-font text-sm sm:text-base ">HI, I AM DIMASH.
              WEB DEVELOPER</p>
        </div>
        <div class="flex text-white items-center justify-around min-h-screen bg-black flex-col md:flex-row">
            <img data-aos="fade-down-right" src={meImage} className='max-h-270 min-h-50' alt="me"></img>
            <div data-aos="fade-down-left" className='flex flex-col gap-5 max-w-200 min-w-50'>
                <h1  className='font-my-font italic text-6xl  '>- MY STORY</h1>
                <h2 className='font-my-font md:text-2xl italic text-base'>Abstract food for every mood</h2>
                <h3 className='font-my-font md:text-2xl text-base'>My mom wanted me to be a mathematician when I grew up. So I unintentionally went into a completely different direction. Thankfully my journey here was completely natural, sometimes it seems that I didn't even have a say in it. Always walking the line between the logical and the chaotic, creating designs that range from geometrical minimalism to dynamic color bombs.</h3>
                <h4 className='font-my-font md:text-2xl text-base'>When I was 12 I picked up Photoshop and started working on some kind of small digital art for forums, which were then called signatures. After a couple of years I switched to Illustrator and that really made me think of Graphic Design as a career path. I mostly focused on Logo Design because I had the freedom to explore a large number of themes and ideas without any real knowledge. At that moment I started looking for clients wherever I could find them, grabbing every job I can get my hands on.</h4>
                <h5 className='font-my-font md:text-2xl text-base'>Not really sure if I could make it, having 0% talent for design I decided to go to Belgrade's Faculty of Law. Just a couple of years there made me realize that I'd rather do what I love and hope for the best than have my soul waste away doing something I despise.</h5>
                <h6 className='font-my-font md:text-2xl text-base'>So here's me 8 years after that moment not regretting a thing.</h6>
            </div>
        </div>
        <div class="flex items-center bg-black text-white justify-center md:flex-row flex-col md:gap-x-50 min-h-screen">
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className='flex flex-col gap-5 font-my-font'>
                <p className='text-3xl md:text-6xl'>
                    Get in touch
                </p>
                <p className='text-base md:text-3xl'>
                    Even if it's just to have a random chat
                </p>
            </div>
            
<form data-aos="fade-up"
     data-aos-anchor-placement="top-center" >
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
      
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </div>
        

<footer class="bg-black text-white">
    <div class="w-full font-my-font mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm  sm:text-center dark:text-gray-400">© 2025 <a href="www.linkedin.com/in/dmshamangeldy" class="hover:underline">DMSH</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium  dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://t.me/dmshebash" class="me-4 md:me-6"><TelegramIcon/></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/dmshamangeldy" class="hover:underline me-4 md:me-6"><LinkedInIcon/></a>
        </li>
        <li>
            <a href="https://github.com/dmshsh" class="hover:underline"><GitHubIcon/></a>
        </li>
    </ul>
    </div>
</footer>

        </>
    )
}