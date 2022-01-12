import React from 'react';
import './rank.css'

export default function rank(){
    const waterS = [
        { id: 1, text : 'carleen', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/carleen.webp", alt:'img'  },
        { id: 2, text : 'connolly', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/connolly.webp" ,alt:'img'},
        { id: 3, text : 'sharona', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/sharona.webp" ,alt:'img'},
        { id: 4, text : 'regal', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/regal3.webp" ,alt:'img'},
        { id: 5, text : 'fleur', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/fleur.webp" ,alt:'img'},
        { id: 6, text : 'bethel', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/bethel.webp" ,alt:'img'},
      ];
    
      const waterA = [
        { id: 1, text : 'raphael', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/raphael.webp", alt:'img'  },
        { id: 2, text : 'sariel', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/sariel.webp" ,alt:'img'},
        { id: 3, text : 'noah', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/noah.webp" ,alt:'img'},
        { id: 4, text : 'vice', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/vice.webp" ,alt:'img'},
        { id: 5, text : 'corax', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/corax.webp" ,alt:'img'},
        { id: 6, text : 'allura', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/allura.webp" ,alt:'img'},
      ];
     
    const thunderS = [
        { id: 1, text : 'michael', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/michael.webp", alt:'img'  },
        { id: 2, text : 'requiem', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/requiem3.webp" ,alt:'img'},
        { id: 3, text : 'eve', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/eve.webp" ,alt:'img'},
        { id: 4, text : 'luke', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/luke.webp" ,alt:'img'},
        { id: 5, text : 'irridon', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/irridon.webp" ,alt:'img'},
        { id: 6, text : 'revy', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/revy.webp" ,alt:'img'},
      ];
      const thunderA = [
        { id: 1, text : 'gronru', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/gronru.webp", alt:'img'  },
        { id: 2, text : 'wrath', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/wrath.webp" ,alt:'img'},
        { id: 3, text : 'pittman', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/pittman.webp" ,alt:'img'},
        { id: 4, text : 'nemesis', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/nemesis.webp" ,alt:'img'},
        { id: 5, text : 'schwartz', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/schwartz.webp" ,alt:'img'},
        { id: 6, text : 'bonacie', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/bonacie.webp" ,alt:'img'},
      ];


    const forestS = [
        { id: 1, text : 'paloma', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/paloma.webp", alt:'img'  },
        { id: 2, text : 'migard', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/migard.webp" ,alt:'img'},
        { id: 3, text : 'hiiro', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/hiiro.webp" ,alt:'img'},
        { id: 4, text : 'hedy', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/hedy.webp" ,alt:'img'},
        { id: 5, text : 'beryl', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/beryl.webp" ,alt:'img'},
        { id: 6, text : 'nikinis', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/nikinis.webp" ,alt:'img'},
      ];

    const forestA = [
        { id: 1, text : 'gabriel', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/gabriel.webp", alt:'img'  },
        { id: 2, text : 'mythos', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/mythos3.webp" ,alt:'img'},
        { id: 3, text : 'naroxel', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/naroxel.webp" ,alt:'img'},
        { id: 4, text : 'areia', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/areia.webp" ,alt:'img'},
        { id: 5, text : 'cuscuta', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/cuscuta.webp" ,alt:'img'},
        { id: 6, text : 'sikare', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/sikare.webp" ,alt:'img'},
      ];

    const fireS = [
        { id: 1, text : 'smokey', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/smokey.webp", alt:'img'  },
        { id: 2, text : 'gram', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/gram.webp" ,alt:'img'},
        { id: 3, text : 'eicy', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/eicy.webp" ,alt:'img'},
        { id: 4, text : 'frostfire', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/frostfire3.webp" ,alt:'img'},
        { id: 5, text : 'victoria', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/victoria.webp" ,alt:'img'},
        { id: 6, text : 'charon', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/charon.webp" ,alt:'img'},
      ];
    
    const fireA = [
        { id: 1, text : 'uriel', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/uriel.webp", alt:'img'  },
        { id: 2, text : 'jona', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/jona.webp" ,alt:'img'},
        { id: 3, text : 'faust', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/faust.webp" ,alt:'img'},
        { id: 4, text : 'taki', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/taki.webp" ,alt:'img'},
        { id: 5, text : 'leona', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/leona.webp" ,alt:'img'},
        { id: 6, text : 'istvan', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/istvan.webp" ,alt:'img'},
      ];

      const dwater = waterS.map(waterS => <img src={waterS.url} alt={waterS.alt}/>)
      const ewater = waterA.map(waterA => <img src={waterA.url} alt={waterA.alt}/>)
      const dthunder= thunderS.map(thunderS => <img src={thunderS.url} alt={thunderS.alt}/>)
      const ethunder= thunderA.map(thunderA => <img src={thunderA.url} alt={thunderA.alt}/>)
      const dforest= forestS.map(forestS => <img src={forestS.url} alt={forestS.alt}/>)
      const eforest= forestA.map(forestA => <img src={forestA.url} alt={forestA.alt}/>)
      const dfire = fireS.map(fireS => <img src={fireS.url} alt={fireS.alt}/>)
      const efire = fireA.map(fireA => <img src={fireA.url} alt={fireA.alt}/>)

    return(
        <div className='tabTier'>
            <div style={{textAlign:'center'}}><img style={{width : "50px"}} src={"https://alchemystars.kloenlansfiel.com/img/icons/water.webp"}/> </div>
            <table className='tierAll'>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th colSpan={10} style={{paddingRight: "145px"}}>Character</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>S</td>
                        <td className='crFlex'>
                           {dwater}
                        </td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td className='crFlex'>
                           {ewater}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={{textAlign:'center'}}><img style={{width : "50px"}} src={"https://alchemystars.kloenlansfiel.com/img/icons/thunder.webp"}/></div>
            <table className='tierAll'>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th colSpan={10} style={{paddingRight: "145px"}}>Character</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>S</td>
                        <td className='crFlex'>
                           {dthunder}
                        </td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td className='crFlex'>
                           {ethunder}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={{textAlign:'center'}}><img style={{width : "50px"}} src={"https://alchemystars.kloenlansfiel.com/img/icons/forest.webp"}/></div>
            <table className='tierAll'>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th colSpan={10} style={{paddingRight: "145px"}}>Character</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>S</td>
                        <td className='crFlex'>
                           {dforest}
                        </td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td className='crFlex'>
                           {eforest}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={{textAlign:'center'}}><img style={{width : "50px"}} src={"https://alchemystars.kloenlansfiel.com/img/icons/fire.webp"}/></div>
            <table className='tierAll'>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th colSpan={10} style={{paddingRight: "145px"}}>Character</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>S</td>
                        <td className='crFlex'>
                           {dfire}
                        </td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td className='crFlex'>
                           {efire}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        
    )
}