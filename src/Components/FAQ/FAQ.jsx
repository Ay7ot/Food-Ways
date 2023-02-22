import Navbar2 from "../Index/Header/NavBar2";
import Footer from "../Footer/Footer";
import { FAQuestion } from "./questions";
import { FaCaretDown } from "react-icons/fa"
import {Fade} from 'react-reveal'

function FAQ({navToggle, toggleNav}) {
    return (  
        <>
          <Navbar2 navToggle={navToggle} toggleNav={toggleNav}/>
          <section className="FAQ">
            <h2>FAQ's</h2>
            <div className="bar"></div>
           <Fade left>
            <div className="frequentQuestions">
                    {FAQuestion.map(quest=>{
                        return (
                            <div className="quest" key={quest.id}>
                                <p>{quest.question}</p>
                                <FaCaretDown />
                            </div>
                        )
                    })}
                </div>
           </Fade>
          </section>
          <Footer />  
        </>
    );
}

export default FAQ;