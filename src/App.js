import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavHeadLogo from './Components/HeaderNavbar/NavHeadLogo';
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  // AOS.refresh()
  // useEffect(()=>{
  //   AOS.init({duration:1000})
  //   document.addEventListener("DOMContentLoaded", function() {
  //     setTimeout(function() { AOS.refresh(); }, 500);
  // });
// AOS.refresh()
  // },[])
// 
useEffect(() => {
  AOS.init({duration:1000})
  AOS.refresh();
}, []);

// return(
//   <div  >
//   <h1 data-aos="fade-right">Helloasdnabfjkjdfhksjdf</h1>
//   <p>Pre-debut
// Prior to their debut, the group was known as i-Teen Girls. Elly, Yoojung, Doyeon, Sei, and Yejin had previously competed on Mnet's survival show Produce 101 in which Yoojung and Doyeon ranked in the final 11, thus debuting as members of the project girl group I.O.I. The group debuted on May 4, 2016 and disbanded on January 29, 2017.

// On July 6, 2017 Fantagio revealed that i-Teen Girls would be called Weki Meki.[1]

// 2017–2018: Debut with Weme, Lucky, and "Kiss, Kicks"
// Weki Meki released their debut mini album, Weme on August 8, 2017.

// On January 10, the group released the digital single "Butterfly" in support of the 2018 PyeongChang Winter Olympics. The song is a remake of the 2009 OST for the film Take Off.[2]

// On February 21, 2018, the group released their second mini album, Lucky.

// Weki Meki released their first single album "Kiss, Kicks" on October 11, 2018.

// 2019: Lock End LOL and Week End LOL
// The group released their second single album ,"Lock End LOL", on May 14, 2019 with the title track "Picky Picky".

// On August 8, 2019, the group released their second single album repackage, "Week End LOL", with "Tiki-Taka (99%)" as the title track.

// On October 16, Fantagio announced Yoojung would be taking a hiatus due to heath issues.[3]

// 2020: "Dazzle Dazzle", Hide and Seek, and New Rules
// On February 6, Fantagio confirmed that the group will have a comeback in mid-February with Yoojung returning from her hiatus since October 2019.[4] Their digital single title "Dazzle Dazzle" was released on February 20, 2020.

// On May 29, Fantagio released a teaser image for the group’s third mini album, Hide and Seek, which was released on June 18. It consists of five songs, including the title track "Oopsy" and the previously released single "Dazzle Dazzle".	</p>
// <h1 data-aos="fade-right">Helloasdnabfjkjdfhksjdf</h1>
  

// <p>

// On October 8, Weki Meki released their fourth mini album, New Rules, featuring five songs, including the title track "Cool".

// 2021: I Am Me.
// On November 18, Weki Meki released their fifth mini album, I Am Me..[5]

// 2022: Light stick design
// On August 7, the group revealed the design of their official light stick five years after their debut.[6]

// Members
// Name	Position(s)	Signature Emoji	Years active
// English	Korean	Japanese
// Suyeon	수연	チ・スヨン	Leader, Main Vocalist	
// ☁️
// 2017–present
// Elly	엘리	エリー	Lead Vocalist	
// 🦊
// 2017–present
// Yoojung	유정	チェ・ユジョン	Main Rapper, Main Dancer, Lead Vocalist, Face of the Group	
// 🌻
// 2017–present
// Doyeon	도연	キム・ドヨン	Lead Dancer, Vocalist, Visual, Center	
// </p>
// <h1 data-aos="fade-right">Helloasdnabfjkjdfhksjdf</h1>
  

// <p>
// ❄️
// 2017–present
// Sei	세이	セイ	Rapper, Vocalist	
// 🌱
// 2017–present
// Lua	루아	ルア	Main Dancer, Lead Rapper, Vocalist	
// 🌈
// 2017–present
// Rina	리나	リナ	Lead Dancer, Vocalist	
// 🦄
// 2017–present
// Lucy	루시	ルシー	Lead Rapper, Visual, Maknae	
// 🌙
// 2017–present
// Pre-debut
// Yejin	예진[7]	N/A	</p>
  
// <h1 data-aos="fade-right">Helloasdnabfjkjdfhksjdf</h1>
  
//   </div>


// )



  return (
    <div className="App">
     <NavHeadLogo/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
