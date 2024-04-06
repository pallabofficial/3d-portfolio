{/* */}
import {BrowserRouter} from 'react-router-dom';
import {Navbar, Hero, About, Contact, Experience, Feedbacks, Tech, Works, StarsCanvas} from "./components";


const App = () => {
  return (
    
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>                                {/*the whole wrapper of the body */}

          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>        {/*  here the bg-hero-pattern is a image whose url is mentioned in tailwind.config.js file */}
            <Navbar/>
            <Hero/>
          </div>

          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>

          <div className='relative z-0'>
            <Contact/>
            <StarsCanvas/>
          </div>
          
       </div>
      </BrowserRouter>
      

    
  )
}

export default App