import React from 'react';
import Arabalar from '../assets/honda-arabalar.jpg';
import '../styles/About.css';

function Hakkinda() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${Arabalar})`}}>

        </div>
        <div className='aboutBottom'>
            <h1>Hakkımızda</h1>
            <p>Honda, insanlığa katkı sağlayıp müşteri memnuniyetini üst düzeye çıkarabilmek için ürünlerini her zaman kabul edilebilir fiyatlarla sunuyor. Bunları gerçekleştirirken temel dayanak noktası olarak da felsefesinden yararlanıyor. “Honda Felsefesi”nin temelleri; bireye saygının öne çıktığı, inisiyatife saygı duyulan, memnuniyete önem verilen ve eşitliğe inanmaktan oluşuyor. “Felsefesiz eylem, öldürücü bir silah; eylemsiz bir felsefe ise değersizdir.” ​ Soichiro Honda
            </p>
</div>
    </div>
  )
}

export default Hakkinda