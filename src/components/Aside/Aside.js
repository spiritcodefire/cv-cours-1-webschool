import React , {useState} from 'react'

const Aside = ({handleName, name}) => {
    // 1 contact
    const [title, setTitle] = useState("Contact")

    const myList = [
        { Experience : "Experience 1", i: 1 },
        { Experience : "Experience 2", i: 2 },
        { Experience : "Experience 2", i: 3  },
    ]

    // 2 exercice handleCLick
    const handleClick = () => {
      console.log("hello")
      setTitle("Form Send")
    }


    const [state, setState] = useState({
        pseudo : "",
        email : "email"
    })

    const changeViaInput = (e) => {
      console.log(e.target.value)
      setState((prevState)=> ({...prevState, pseudo: e.target.value}))
    }

  return (
    <aside>

        <div className="encart">

            <h3>Qui suis-je ?</h3>
            {!state.pseudo 
            ? 
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit, ipsa esse illo sunt iure voluptatum, labore laboriosam quas officiis non totam repellat natus odit corporis dicta tenetur consectetur sapiente.
                </p>
            :
                <h1 style={{textAlign: "center"}}>FullStack Developpeur</h1>
            } 

        </div>

        <div className="encart">
            <h3>Experience</h3>
            <ul>
                 {
                    myList?.map((item)=>(
                        <li key={item.i} >{item.Experience}</li>
                    ))
                 }
            </ul>
        </div>

        <div className="encart">

            <h3>{title}</h3>
            {   title === "Contact" 
                ?
                    <div  style={{margin: "auto" , textAlign: "center"}}  >

                        <label htmlFor="prenom">Pseudo</label> 
                        <br />
                        <input value={state.pseudo} onChange={(e)=> {changeViaInput(e)}} type="text"  />

                        <br />

                        <label htmlFor="nom">Nom</label> 


                        <br />
                        <input  value={name} onChange={(e)=> handleName(e) } type="text"  />

                        <br />

                        <label htmlFor="email">E-mail</label> 
                        <br />
                        <input  placeholder="E-mail" type="email" id="email" name="email" />
                        <br />
                        <label htmlFor="message">Message</label> 
                        <br />
                        <textarea placeholder="Ecrire votre message" name="message" id="message"></textarea>
                        <br />
                        {/* je passe une fonction flechE , car uniquement quand mon parametre se lance, je lance cette fonction */}
                        <input  type="submit" style={{padding: "10px 20px", borderRadius: "50px", border: "none", backgroundColor: "pink", cursor: "pointer"}}  onClick={()=>  handleClick()}  />
                    </div>
                :
                    <div>Merci d'avoir tentE de nous contacter, je vous appel dans la minute pcq je cherche un taff</div>
            }
            

        
        </div>

</aside>
  )
}

export default Aside