import React from 'react'
import "../Components/CSS/about.css"

const toggleImage = ev => {
  let newOne = ev.target.dataset.other
  let old = ev.target.src
  ev.target.src = newOne
  ev.target.dataset.other = old
}

const About = () => {
  
  return (
    <div id="aboutUs">
      <h1 id="aboutTitle">Our Development Team</h1> 
      <div id="profileWrapper">
        <div id="Jamie" className="profile">
        <img className="profilePic" src="/images/KatzJamie.jpg" data-other="https://thumbs.dreamstime.com/z/funny-baby-spoon-her-mouth-beautiful-child-girl-sitting-high-chair-waiting-food-nutrition-kids-funny-baby-114605130.jpg" alt="jamie" onMouseEnter={toggleImage} onMouseLeave={toggleImage}/>
        <h1>Jamie</h1>
        <p> <span className="spoon">Baby Spoon.</span><br></br> Our beloved summer intern, known for fetching coffee and JSON</p>
      </div>
      <div id="Mitch" className="profile">
        <img className="profilePic" src="/images/PoskMitch.jpg" data-other="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/093b342a-e54e-4dc0-94de-0be65553cd74/d39h7lb-34e671a6-a0cf-4439-848c-4a8f724b87bc.png/v1/fill/w_691,h_1157,strp/365_day_44_spork_by_korikian_d39h7lb-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwNiIsInBhdGgiOiJcL2ZcLzA5M2IzNDJhLWU1NGUtNGRjMC05NGRlLTBiZTY1NTUzY2Q3NFwvZDM5aDdsYi0zNGU2NzFhNi1hMGNmLTQ0MzktODQ4Yy00YThmNzI0Yjg3YmMucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uICBqau90MOFjJTrPYGTtzglTOu34j6R2gqla9bmrYI" alt="mitch" onMouseEnter={toggleImage} onMouseLeave={toggleImage}/>
        <h1>Mitch</h1>
        <p><span className="spoon">Spork.</span> <br></br> Rough around the edges but his indents are smooth.</p>
      </div>
      <div id="Jessica" className="profile">
        <img className="profilePic" src="/images/RuonaJessica.jpg"  data-other="https://www.pinclipart.com/picdir/big/63-638078_free-stock-chips-drawing-kawaii-transparent-cartoon-tea.png"alt="jessica" onMouseEnter={toggleImage} onMouseLeave={toggleImage}/>
        <h1>Jessica</h1>
        <p><span className="spoon">Tea Spoon.</span> <br></br> Our office gossip purposefully keeps .env file out of the .gitignore</p>
      </div>
    </div>
  </div>
  )
}

export default About;
