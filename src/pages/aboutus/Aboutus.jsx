import React from 'react'
import './aboutus.css'
import excellence1 from '../../assets/excellence1.png'
import excellence2 from '../../assets/excellence2.png'
import excellence3 from '../../assets/excellence3.png'
import farm1 from '../../assets/african-5870014_1280.jpg'
import farm2 from '../../assets/african-farmer-is-happily-working-his-organic-banana-plantation-farm-with-using-tablet-agricu.jpg'
import farm3 from '../../assets/iStock-543212762.jpg'
import teamtwitter from '../../assets/team twitter.png'
import teamlinkedin from '../../assets/team linkedin.png'
import ceo from '../../assets/CEO.png'
import cto from '../../assets/CTO.png'
import hop from '../../assets/headofproduct.png'
import pm from '../../assets/PM.png'

const Aboutus = () => {
  return (
    <>
    <div className="about__top section__padding">
      <div className="about__top-text">
      <h1>We are <span className='yellow'>Straddle</span></h1>
      <p>We're utilizing technology to enable agricultural trade within Africa and beyond.</p>
      </div>
      <div className="about__top-video section__padding">
        <Video />
      </div>
     
    </div>
    <div className="about__center section__padding">
       <Section className="normal" img={farm1} h1 ="What is Straddle?" p ="Straddle is a fast- growing technology company that aims to disrupt the global agricultural trade value chain. We are passionate about food security while delivering superior returns to farmers. We do this by promoting price transparency and discovery, democratizing access to markets and sectorial news."/>
       <Section className="reverse" img={farm2} h1 ="Our Mission" p ="We are building a B2B commerce marketplace app for agricultural commodities, which brings farmers, traders, exporters, and manufacturers on one platform."/>
       <Section className="normal" img={farm3} h1 ="Our Vision" p ="Our vision is to enable industries discover superior quality raw materials at the right price and get on-time delivery and connect smallholder farmers to large size manufacturers with the large and improve the supply chain."/>
    </div>
    <div className="about__values section__padding">
      <div className="about__values-text">
      <h1>Straddle's Values</h1>
      <p>In egestas egestas egestas velit.</p>
      </div>
      
      <div className="about__excellence">
        <Values  className="values" img ={excellence1} h1="Integrity" p="We uphold honesty and transparency in all our actions, fostering trust and credibility." />
        <Values  className="orange" img ={excellence2} h1="Respect" p="We treat everyone with dignity and consideration, valuing diverse perspectives and fostering an inclusive environment." />
        <Values className="values"  img ={excellence3} h1="Innovation" p="We embrace creativity and actively seek new and better ways to solve challenges, driving progress and growth."/>
      </div>
    </div>
    <div className="work__with section__padding">
      <div className="work__with-text">
      <h1>COME WORK WITH US</h1>
      <p>Our work holds significant importance. Join us in engaging in meaningful tasks and contribute to advancing our mission of simplifying and increasing accessibility to entrepreneurship for everyone.</p>

      </div>
    
      <button >View open roles</button>
    </div>

    <div className="meet__team section__padding">
      <div className="meet__team-text">
        <h1>Meet the Team</h1>
      </div>
      <div className="team__actual">
        <Team img={ceo} h3="Omitaomu Basit" p="CEO" />
        <Team img={cto} h3="Bakare Hafeez" p="CTO" />
        <Team img={pm} h3="Nwagwu Justin" p="COO" />
        <Team img={hop} h3="Jokpeyibo Ochuko" p="Head Of Product" />
       
      </div>
    </div>

    </>

  )
}

export default Aboutus


const Section = ({img,h1,p,className}) =>{
  return(
    <div className="about__section">
      <div className={className}>
      <img src={img} />
      <div className="about__section-text">
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
      </div>
      
    </div>
  )
}

const Values = ({img,h1,p,className}) => {
  return(
    <div className={className}>
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