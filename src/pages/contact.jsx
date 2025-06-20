import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import e from '../assets/photos/ed.png'
import p from '../assets/photos/pr.png'
import a from '../assets/photos/A.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const cards = [
  { title: 'Education', description: 'School, university and etc', image: e ,more:'My educational journey began at Lyceum №165, where I built a strong foundation in mathematics and the sciences. The structured and competitive environment helped me develop discipline and a love for analytical thinking. After graduating, I continued my path at KBTU (Kazakh-British Technical University), where I’m currently a first-year student pursuing a degree in Computer Science. At the same time, I was fortunate to be accepted into the nFactorial program — an intensive, hands-on tech bootcamp — which has significantly accelerated my growth as a frontend developer. Balancing university studies and real-world coding experience has been challenging, but incredibly rewarding.'},
  { title: 'About me', description: 'Maybe it would be interesting...', image: p ,more:'I am so glad that you are actually interested in this one. I try my best at developing myself at person, I am doing sports(basketball, gym, chess), reading a lot of interesting books(not only programming) and expanding my horizons of views. Hope if you get to know me we will get into each other. Looking forward for new possibilities and bonds! '},
  { title: 'Personal info', description: 'Additional', image: a, more:'My name is Amangeldy Dimash, I currently live in Almaty, right now study in KBTU, I was born on 8 may 2006. In active search of job as front-end developer. Trying to achieve my goals by developing my programming skills. Github, LinkedIn and other important you can find in header.' },
]

export default function HoverCards() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  const [isOpen, setIsOpen] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  const openModal = (card) => {
    setActiveCard(card)
    setIsOpen(true)
  }
const handleDownload = () => {
    const fileUrl = '/public/cv.docx'
    const fileName = 'cv.docx'

    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div  className='bg-black flex flex-col justify-center min-h-screen md:p-20 '>
      <div className="grid grid-cols-1 md:grid-rows-3 lg:mx-30  gap-6  p-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => openModal(card)}
            data-aos="zoom-in-down"
            className="cursor-pointer group transition-all transform hover:scale-105 duration-700 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold group-hover:text-blue-600">{card.title}</h2>
              <p className="text-black">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
        <Dialog.Panel data-aos="zoom-in" className="bg-white md:w-2xl md:h-150 flex justify-center items-center flex-col gap-10 w-full rounded-4xl shadow-lg p-6">
          <Dialog.Title className="text-6xl font-bold mb-2 font-my-font">{activeCard?.title}</Dialog.Title>
          <p className='font-my-font2'>{activeCard?.more}</p>
          <button className="font-my-font2 mt-4 w-50 h-15 text-3xl px-4 py-2 bg-blue-600 text-white rounded-4xl" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </Dialog.Panel>
        
      </Dialog>
<button
  onClick={handleDownload}
  data-aos="zoom-in"
  className="transition-all duration-300 hover:scale-110 hover:cursor-pointer
  font-my-font2 self-center md:w-72 text-lg md:h-20 bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-gray-800 transition-all duration-500 ease-in-out"
>
  <p className='text-2xl'>
    Download my CV
  </p>
</button>

    </div>
  )
}
