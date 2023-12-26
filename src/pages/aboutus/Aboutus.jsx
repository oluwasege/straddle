import React from 'react'
import './aboutus.css'
import section1 from '../../assets/section1.png'
import section2 from '../../assets/section2.png'
import section3 from '../../assets/section3.png'
import excellence1 from '../../assets/excellence1.png'
import excellence2 from '../../assets/excellence2.png'
import excellence3 from '../../assets/excellence3.png'
import teamtwitter from '../../assets/team twitter.png'
import teamlinkedin from '../../assets/team linkedin.png'
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'
import team3 from '../../assets/team3.png'
import team4 from '../../assets/team4.png'

const Aboutus = () => {
  return (
    <>
    <div className="about__top section__padding">
      <div className="about__top-text">
      <h1>We are <span className='yellow'>Straddle</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur. Donec at urna viverra sed pellentesque. Neque elementum arcu a faucibus. Erat nascetur.</p>
      </div>
      <div className="about__top-video section__padding">
        <Video />
      </div>
     
    </div>
    <div className="about__center section__padding">
       <Section  img={section1} h1 ="What is Straddle?" p ="Lorem ipsum dolor sit amet consectetur. Nunc vitae suspendisse tempus molestie urna tortor. In sed proin condimentum in elit amet. Imperdiet cursus eu vitae augue morbi quam purus. Cursus eros commodo aliquam id tincidunt."/>
       <Section className="reverse" img={section2} h1 ="Our Mission" p ="Lorem ipsum dolor sit amet consectetur. Nunc vitae suspendisse tempus molestie urna tortor. In sed proin condimentum in elit amet. Imperdiet cursus eu vitae augue morbi quam purus. Cursus eros commodo aliquam id tincidunt."/>
       <Section  img={section3} h1 ="Our Vision" p ="Lorem ipsum dolor sit amet consectetur. Nunc vitae suspendisse tempus molestie urna tortor. In sed proin condimentum in elit amet. Imperdiet cursus eu vitae augue morbi quam purus. Cursus eros commodo aliquam id tincidunt."/>
    </div>
    <div className="about__values section__padding">
      <div className="about__values-text">
      <h1>Straddle's Values</h1>
      <p>In egestas egestas egestas velit.</p>
      </div>
      
      <div className="about__excellence">
        <Values img ={excellence1} h1="Excellence" p="Lorem ipsum dolor sit amet consectetur. In egestas egestas egestas velit." />
        <Values img ={excellence2} h1="Excellence" p="Lorem ipsum dolor sit amet consectetur. In egestas egestas egestas velit." />
        <Values img ={excellence3} h1="Excellence" p="Lorem ipsum dolor sit amet consectetur. In egestas egestas egestas velit." />
      </div>
    </div>
    <div className="work__with section__padding">
      <div className="work__with-text">
      <h1>COME WORK WITH US</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Nunc vitae suspendisse tempus molestie urna tortor. In sed proin condimentum in elit amet. Imperdiet cursus eu vitae augue morbi quam purus. Cursus eros commodo aliquam id tincidunt.</p>
      </div>
    
      <button >View open roles</button>
    </div>

    <div className="meet__team section__padding">
      <div className="meet__team-text">
        <h1>Meet the Team</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Nunc vitae suspendisse tempus molestie urna tortor. In sed proin condimentum in elit amet. Imperdiet cursus eu vitae augue morbi quam purus. Cursus eros commodo aliquam id tincidunt.</p>
      </div>
      <div className="team__actual">
        <Team img={team1} h3="Sonnie Badu" p="CEO/Co-Founder" />
        <Team img={team2} h3="Octavia Blake" p="COO/Co-Founder" />
        <Team img={team3} h3="John Murphy" p="Engineering Lead" />
        <Team img={team4} h3="James Adewale" p="Product Lead" />
      </div>
    </div>

    </>

  )
}

export default Aboutus


const Section = ({img,h1,p}) =>{
  return(
    <div className="about__section">
      <img src={img} />
      <div className="about__section-text">
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
    </div>
  )
}

const Values = ({img,h1,p}) => {
  return(
    <div className="values">
          <img src={img} />
          <h1>{h1}</h1>
          <p>{p}</p>

    </div>
  )
}


const src = 'https://photos.onedrive.com/share/B52800640B50F57C!41593?cid=B52800640B50F57C&resId=B52800640B50F57C!41593&authkey=!ABfkbFLb50fpQOs&ithint=video&e=IQHO58'

const Video = () =>{
  return(
    // <video controls width="100%">
    //   <source src={src}  />
    // </video>

    <iframe 
    className='video'
    width="1130"
    height="618"
    src={src}
    title='video'
    frameborder ="0"
    allowFullScreen
    />
  )
}


const Team = ({img,h3,p})=>{
  return(
  <div className="team">
      <div className="team__image">
      < img src={img} />

    </div>
    <div className="team__text">
      <h3>{h3}</h3>
      <p>{p}</p>
      <div className="team__socials">
        <img src={teamlinkedin} />
        <img src={teamtwitter} />
      </div>
    </div>
  </div>
  )
    
}