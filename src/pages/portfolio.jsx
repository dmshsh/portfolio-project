import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import jtap from '../assets/photos/1.png';
import todo from '../assets/photos/2.png'
import mam from '../assets/photos/3.png'
import x from '../assets/photos/4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); 
  }, []);

  return (  
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, 
          background: { color: "#000000" },
          particles: {
            number: { value: 150 },
            density: {
            enable: false },
            size: { value: 3 },
            color: { value: "#ffffff" },
            move: { enable: true, speed: 0.5 },
            links: { enable: true, distance: 120, color: "#ffffff" },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, 
        }}
      />

        
      <div style={{ position: "relative", zIndex: 1 }}>
          <NavLink
          to="https://github.com/dmshsh/jymustap">
        <div className="flex md:py-20 lg:gap-x-30 lg:flex-row flex-col gap-y-10 items-center justify-start py-10 text-white">
          <img 
            data-aos="fade-right" 
            src={jtap} 
            className="rounded-4xl w-screen 2xl:w-310 lg:w-150" 
            alt="JymusTap Project" 
          />
          <div data-aos="fade-left" className="flex items-center flex-col">
            <p className="font-my-font text-xl sm:text-lg md:text-xl lg:text-4xl">JymusTap</p>
            <p className="xl:leading-loose lg:leading-tight font-my-font2">
              Jymustap is my first frontend project — a layout-focused mockup designed to practice and showcase my HTML and CSS skills. It doesn’t include complex interactivity or dynamic functionality, but it emphasizes clean structure, modern styling, and responsiveness across devices. The goal of the project was to create something visually appealing while learning the fundamentals of frontend development. Though simple in purpose, Jymustap reflects my attention to detail and sets the foundation for more advanced projects in the future. It’s a small step, but an important one in my journey as a developer.
            </p>
          </div>
        </div>
        </NavLink>
        <NavLink
          to="https://github.com/dmshsh/mediaasmedium">
        <div className="flex md:py-20 lg:gap-x-30 lg:flex-row flex-col gap-y-10 items-center justify-start py-10 text-white">
          <div data-aos="fade-left" className="flex items-center flex-col">
            <p className="font-my-font text-xl sm:text-lg md:text-xl lg:text-4xl">Media as Medium</p>
            <p className="xl:leading-loose lg:leading-tight font-my-font2">
              NYT Clone is a news app I built using only vanilla JavaScript, HTML, and CSS.
Although I created it before my React-based TodoList, this project was key in strengthening my understanding of working with APIs and asynchronous data fetching using fetch().
It dynamically loads and displays news articles from a public API, simulating the structure and feel of a real-world news platform.
The main goal was to practice handling external data, updating the DOM based on responses, and building a clean, responsive layout.
This project helped me get comfortable with async operations and gave me confidence to transition into React later on.
While it doesn’t use a framework, it represents an important step in learning how frontend apps work under the hood.
            </p>
          </div>
          <img 
            data-aos="fade-right" 
            src={mam} 
            className="rounded-4xl w-screen 2xl:w-310 lg:w-150" 
            alt="MediaAsMedium" 
          />
          
        </div>
        </NavLink>
        <NavLink
          to="https://github.com/dmshsh/todolist">
        <div className="flex md:py-20 lg:gap-x-30 lg:flex-row flex-col gap-y-10 items-center justify-start py-10 text-white">
          <img 
            data-aos="fade-right" 
            src={todo} 
            className="rounded-4xl w-screen 2xl:w-310 lg:w-150" 
            alt="todo" 
          />
          <div data-aos="fade-left" className="flex items-center flex-col">
            <p className="font-my-font text-xl sm:text-lg md:text-xl lg:text-4xl">ToDo List</p>
            <p className="xl:leading-loose lg:leading-tight font-my-font2">
              This app allowed me to dive deeper into React fundamentals by using hooks like useState to manage task states and updates in real time.
Unlike my first project, this one introduced interactivity — users can add, complete, and delete tasks dynamically.
It’s a simple to-do list on the surface, but under the hood, it reflects a major step forward in my understanding of component-based design and state management.
The project helped me gain confidence working with React and laid the groundwork for more complex applications moving forward.
It’s still minimal, but far more dynamic — and a clear milestone in my frontend journey.
            </p>
          </div>
        </div>
        </NavLink>
        <NavLink
          to="https://github.com/dmshsh/xclone">
        <div className="flex md:py-20 lg:gap-x-30 lg:flex-row flex-col gap-y-10 items-center justify-start py-10 text-white">
          <div data-aos="fade-left" className="flex items-center flex-col">
            <p className="font-my-font text-xl sm:text-lg md:text-xl lg:text-4xl">X-clone</p>
            <p className="xl:leading-loose lg:leading-tight font-my-font2">
              Twitter Clone is a minimal social feed app that captures the core features of Twitter.
Built with React, it allows users to add, delete, and filter posts by username in real time.
The project focuses on simplicity and clean UI while reinforcing essential frontend concepts like controlled components, conditional rendering, and array manipulation.
Though it doesn’t include backend logic or authentication, it delivers a smooth, functional user experience that mirrors the basic structure of a social media feed.
This project helped me sharpen my skills in managing dynamic lists and implementing filtering logic using React state.
It’s a straightforward app, but thoughtfully crafted — a great exercise in building interactive UI with a polished feel.
            </p>
          </div>
          <img 
            data-aos="fade-right" 
            src={x} 
            className="rounded-4xl w-screen 2xl:w-310 lg:w-150" 
            alt="JymusTap Project" 
          />
        </div>
        </NavLink>
      </div>
    </div>
  );
}