import React from 'react';
import './tier.css'

function tier(){
    const data = [
        { id: 1, text : 'nikinis', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/nikinis.webp", alt:'img'  },
        { id: 2, text : 'hiro', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/hiiro.webp" ,alt:'img'},
        { id: 3, text : 'sharona', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/sharona.webp" ,alt:'img'},
        { id: 4, text : 'migard', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/migard.webp" ,alt:'img'},
        { id: 5, text : 'fleur', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/fleur.webp" ,alt:'img'},
        { id: 6, text : 'paloma', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/paloma.webp" ,alt:'img'},
      ];
     
    const data2 = [
        { id: 1, text : 'eicy', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/eicy.webp", alt:'img'  },
        { id: 2, text : 'sariel', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/sariel.webp" ,alt:'img'},
        { id: 3, text : 'eve', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/eve.webp" ,alt:'img'},
        { id: 4, text : 'gronru', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/gronru.webp" ,alt:'img'},
        { id: 5, text : 'uriel', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/uriel.webp" ,alt:'img'},
        { id: 6, text : 'smokey', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/smokey.webp" ,alt:'img'},
      ];

      const data3 = [
        { id: 1, text : 'sikare', url: "https://alchemystars.kloenlansfiel.com/img/thumbnail/sikare.webp", alt:'img'  },
        { id: 2, text : 'barton', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/barton.webp" ,alt:'img'},
        { id: 3, text : 'maggie', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/maggie.webp" ,alt:'img'},
        { id: 4, text : 'nemesis', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/nemesis.webp" ,alt:'img'},
        { id: 5, text : 'pact', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/pact.webp" ,alt:'img'},
        { id: 6, text : 'genevieve', url:"https://alchemystars.kloenlansfiel.com/img/thumbnail/genevieve.webp" ,alt:'img'},
      ];

      const imglist = data.map(data => <img src={data.url} alt={data.alt}/>)
      const imglist2= data2.map(data2 => <img src={data2.url} alt={data2.alt}/>)
      const imglist3= data3.map(data3 => <img src={data3.url} alt={data3.alt}/>)

    return(
        <div className='tabTier'>
            <table className='tierall'>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th colSpan={10}>Character</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SS</td>
                        <td className='crFlex'>
                            {imglist}
                        </td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td className='crFlex'>
                           {imglist2}
                        </td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td className='crFlex'>
                           {imglist3}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default tier;