import React from 'react'

const NavBar = (props) => {
    console.log("props NavBar", props)


    const addStyle = (e) => {
      console.log(e.target)

      if (e.target.classList.contains("styled")) {
        e.target.classList.remove("styled")
      }else{
         e.target.classList.add("styled")
      }
    }
    const styleMenu = {
        padding: "0px 20px", 
        cursor: "pointer"
    }


  return (
    <header>
        <div className="conteneur">
            <div className="normal-flex">
                <div className="haut-gauche">
                    <h1 onMouseOver={addStyle} >{props.name}</h1>
                    <strong><span>C</span>ommunication</strong> /
                    <strong><span>M</span>arketing</strong> /
                    <strong><span>D</span>igital</strong>
                </div>
                <div className="haut-droit">
                    <a href="/">Télécharger mon c.v.</a>
                </div>
            </div>
        </div> 
        <nav>
            <div className="conteneur">
                <div className="flex-menu">
                    <div style={styleMenu} onClick={()=> props.getValueClick("Accueil") } >Accueil</div>
                    <div style={styleMenu}  onClick={()=> props.getValueClick("cv") }>Mon c.v</div>
                    <div style={styleMenu}  onClick={()=> props.getValueClick("Folio") }>Folio</div>
                    <div style={styleMenu} onClick={()=> props.getValueClick("Contact") }>Contact</div>
                </div>
            </div>
        </nav>
      </header>
  )
}

export default NavBar