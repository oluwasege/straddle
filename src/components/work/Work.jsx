import React from "react";
import { Link } from "react-router-dom";
import "./work.css";
import soya from "../../assets/soya.png";
import oil from "../../assets/oil.png";
import card from "../../assets/card.png";
import playstore from '../../assets/playstore.png'
import applestore from '../../assets/applestore.png'
import Google from '../../assets/Google.png'
import Apple from '../../assets/Apple.png'
import Iphone from '../../assets/Signup 12.png'
import Ellipse from "../../assets/Ellipse 6.png";
import Iphone12 from "../../assets/iPhone 12 Graphite Pro Top View Mockup.png";

const Work = () => {
  return (
    <>
      <Header />
      <About />

      <div className="straddle__work section__padding">
        <h1 className="text">How it works</h1>
        <div className="straddle__comp">
          <Comp
          className='comp comp__blue'
            h1="Sign Up"
            p="Trade smarter, faster, and better with our exchange platform by signing up."
          />
          <Comp
           className='comp comp__darkblue'
            h1="News"
            p="Stay up to date on the latest agribusiness news with our reliable and accurate information."
          />
          <Comp
           className='comp comp__purple'
            h1="Profile Account"
            p="Build your profile and access all our features to manage your inventory, connect with buyers and sellers in real time.
        "
          />
          <Comp
           className='comp comp__yellow'
            h1="Price Aggregation"
            p="Whether buying or selling,  Be confident you're getting the best possible price."
          />
          <Comp
           className='comp comp__text-yellow'
            h1={"Advertise & Sell Commodities"}
            p="Maximize profits by easily advertising and selling your goods, reaching global buyers, and getting the best prices."
          />
          <Comp
           className='comp comp__black'
            h1="Buy Commodities"
            p="Our advanced search filters makes it easier to find the right price for your next purchase."
          />
        </div>

        <Different />
      </div>
    </>
  );
};

const Comp = ({ h1, p, className}) => {
  return (
    <div className={className}>
      <div className="comp__text">
      <h1>{h1}</h1>
      <p>{p}</p>
      </div>
     <div className="comp__phone">
     <img className="slideInRight" src={Iphone} alt="" />
     </div>
      
    </div>
  );
};

const Header = () => {
  return (
    <div className="straddle__header section__padding">
    <div className="straddle__header-content">
      <div className="container">
      <h1 className="">You won buy, you won sell,<br/>Reason <span>Straddle</span></h1>
      <h1 className="">i choro izuru, i choro ire,<br/>chee echiche <span>Straddle</span></h1>
      <h1 className="">Kana so ka saya,<br/> Kana so ka sayar, <br/> Tunani <span>Straddle</span></h1>
    
      
      </div>
   
      <p>The exchange platform where agriculture <br /> and commerce intercept</p>
    
    <div className="straddle__header-content__input">
      <input type="email" placeholder="Enter your email address" />
      <button type="button">Join Waitlist</button>
    </div>
    <div className="straddle__header-content__playstore">
     
      <Link to="https://play.google.com/store/apps/details?id=com.lagmex.straddle"> <img  className ='apple 'src={Apple} alt="Apple" /></Link>
     
      <Link to="https://play.google.com/store/apps/details?id=com.lagmex.straddle"> <img className='google' src={Google} alt="Google" /></Link>
     
    </div>
    </div>
    <div className="straddle__header-image">
      <img className="ellipse" src={Ellipse} alt="Ellipse" />
      <img className="iphone" src={Iphone12} alt="Iphone12" />
    </div>
  </div>
  );
}

const About = () => {
  return (
    <div className="straddle__about section__padding">
      <h1>About Straddle</h1>
      <p>
        Welcome to Straddle – the cutting-edge e-commerce marketplace that is
        reshaping the way agricultural raw materials are bought and sold. Our
        mission is to empower farmers, suppliers, and buyers by providing a
        seamless platform that offers price transparency, advertising, and
        valuable news related to agricultural commodities.
      </p>
    </div>
  );
};

const Different = () => {
  return (
    <div className="straddle__different section__padding">
      <h1>
        How we are <span>different?</span>
      </h1>
      <Blurry />
      <Sign />
    </div>
  );
};

const Blurry = () => {
  return (
    <>
    <div className="different__container">
      <div className="different__model">
        <p>Unique Price Aggregation Model</p>
        <img className="blurry" src={soya} />
        <img className="soya" src={soya} />
        <img className="blurry" src={soya} />
        <img className="blurry" src={soya} />
      </div>
      <div className="different__content">
        <p>Agricultural Focused New Content</p>
        <img className=" oil__blurry" src={oil} />
        <img className="oil" src={oil} />
        <img className="oil__blurry" src={oil} />
      </div>
      <div className="different__marketplace">
        <p>Marketplace platform visible nationwide</p>
        <div className="different__marketplace-image">
          <img className=" different__blurry" src={card} />
          <img className="different__card" src={card} />
        </div>
      </div>
    </div>
    <div className="download__links">
    <Link to="https://play.google.com/store/apps/details?id=com.lagmex.straddle"> <img src={playstore} /></Link>
    <Link to="https://play.google.com/store/apps/details?id=com.lagmex.straddle">  <img src={applestore} /></Link>
       
       
    </div>
    </>
  );
};


 const Sign =() =>{
  return(
    <div className="Signup">
      <div className="Signup__content">
        <div className="Signup__text">
        <h1>Sign up with Straddle today!</h1>
        <p>A short description about the value of signing up goes here</p>
        </div>
       
        <div className="Signup__playstore">
        <Link to="https://play.google.com/store/apps/details?id=com.lagmex.straddle"><img  src={Google}/></Link>
        <Link to="https://play.google.com/store/apps/details?id=com.lagmex.straddle">  <img src={Apple} /></Link>
     
      
        </div>
        
      </div>
      <div className="Iphone12">
        <img src ={Iphone}/>
      </div>
    </div>
  )
 }

export default Work;
