import React, {useState} from "react"
import NavBar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import Aside from '../../components/Aside/Aside';
import Footer from '../../components/Footer/Footer';
import Folio from "../Folio/Folio";
// import Blog from "../Blog/Blog"

const  Home = () => {

  //const [name] = useState("Elie Sultan")
//  const name = "Elie Sultan"
  const [name, setName] = useState("Elie Sultan")

  
  const handleName = (cb) => {
    console.log(cb.target.value)
    setName(cb.target.value)
  }

  const [state, setState] = useState({
    cv : true, 
    folio : false, 
    Contact : false
  })

  const getValueClick = (cb) => {
    console.log("cb", cb)
    if ( cb === "Folio" ) {
        setState({
            cv : false, 
            folio : true, 
            Contact : false
        })
    }else{
        setState({
            cv : true, 
            folio : false, 
            Contact : false
        })
    }

}

  return (
    <>
    <NavBar name={name} getValueClick={getValueClick} />

    { state.cv && 
    <>
        <Header />
        <main>
            <div className="conteneur flex-main">
                <SectionPresentation />
                <Aside handleName={handleName} name={name} />
            </div>
        </main>
    </>
    }

    { state.folio && 
        <Folio />
    }

   <Footer name={name} />
    </>
  );
}

export default Home;