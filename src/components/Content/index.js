import React, {useState} from 'react';
import './style.css';
import ImageSlider from '../Slider/Slider';


const Content = () => {
    
    
    const [sh, setsh] = useState(false);

    function showdiv() {
      if (window.scrollY >= 500) {
        setsh(true);
      } else {
        setsh(false);
      }
    }
    const mybutton = document.getElementById('mybtn');
    mybutton.addEventListener('click', ()=> {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
  
    window.addEventListener('scroll', showdiv);
    
    return (
        
        <div className='container'>
            
            <div className='row'>
                <div className='con'> 

                
                    <h2>This is a content</h2>
                    
                </div>
                 
                <button id='mybtn' to='totop' smooth={true} duration={1000} className={sh ? 'setsh true' : 'sh'}>Back to top
                 </button>
                <div className='con2'>
        
                    <ImageSlider/>
                   
                </div>
            </div>
        </div>
        
    );
}

export default Content;