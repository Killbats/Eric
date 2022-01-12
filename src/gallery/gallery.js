import React from 'react';
import  './gallery.css';


function gallery(){
    return(
        <div className='outer'>
            <div className='container1'>
                <div style={{width : "35%"}}>
                    <img style={{width : "100%"}}  src={"https://alchemystars.kloenlansfiel.com/img/cg-book/avertyoureyes_small.webp"}/>
                </div>
                <div style={{width : "60%",padding: '25px'}}>
                    <div style={{fontSize:'30px',marginBottom:'15px'}}> Avert Your Eyes</div>
                    <div style={{fontSize:'20px'}}>No matter how desperately Pact struggles to break free from the thorns, their clutch only grows tighter and tighter. At that moment, you push open the door and witness her plight with your own eyes. Pact blushes and shouts, "Don't look at me! I can handle this myself!"
                    </div>
                </div>
            </div>
            <hr style={{marginTop:'20px', marginBottom:'20px'}}/>

            <div className='container1'>
                <div style={{width : "35%"}}>
                    <img style={{width : "100%"}}  src={"https://alchemystars.kloenlansfiel.com/img/cg-book/sparkedmemories_small.webp"}/>
                </div>
                <div style={{width : "60%",padding: '25px'}}>
                    <div style={{fontSize:'30px',marginBottom:'15px'}}> Sparked Memories</div>
                    <div style={{fontSize:'20px'}}>Under Hiiro's orders, Vice lights the sparklers for the first time. Their little sparks dance under the quiet night sky and light up Vice's face, which is flushed with excitement. If only this moment could last forever.
                    </div>
                </div>
            </div>
            <hr style={{marginTop:'20px', marginBottom:'20px'}}/>

            <div className='container1'>
                <div style={{width : "35%"}}>
                    <img style={{width : "100%"}}  src={"https://alchemystars.kloenlansfiel.com/img/cg-book/silencedescends_small.webp"}/>
                </div>
                <div style={{width : "60%",padding: '25px'}}>
                    <div style={{fontSize:'30px',marginBottom:'15px'}}> Silence Descends</div>
                    <div style={{fontSize:'20px'}}>
                    Thanks to your mental suppression, Aviduz failed to avoid the light beam and was penetrated in an instant. Time seemed to stand still, and everyone stopped dead in their tracks to witness the end of the Black Colossus...
                    </div>
                </div>
            </div>
            <hr style={{marginTop:'20px', marginBottom:'20px'}}/>

            <div className='container1'>
                <div style={{width : "35%"}}>
                    <img style={{width : "100%"}}  src={"https://alchemystars.kloenlansfiel.com/img/cg-book/roarofthebehemoth_small.webp"}/>
                </div>
                <div style={{width : "60%",padding: '25px'}}>
                    <div style={{fontSize:'30px',marginBottom:'15px'}}> Roar of the Behemoth</div>
                    <div style={{fontSize:'20px'}}>The Lumina cannon Damocles, the ultimate weapon of Lumopolis, attacked Aviduz with a terrifying roar, even at the price of putting the city at risk...
                    </div>
                </div>
            </div>
            <hr style={{marginTop:'20px', marginBottom:'20px'}}/>
        </div>
    )
}

export default gallery;