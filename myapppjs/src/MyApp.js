import React, {Component} from 'react';

import './MyApp.css';
import Footer from  './Footer.js';
import Header from './Header.js';
import Details from './Details.js';
class MyApp extends Component {

    constructor(props) {
        super(props);

    }

/*    render(){

        return (
            
            <div className = "MyApp">
          
            <fieldset>
             <header className="MyApp-header">
             <h1>Header</h1>
             <h1 className="MyApp-title">Welcome to {this.props.title}</h1>
             </header>
             </fieldset>
            
             <fieldset>
            <section  className="MyApp-section">
            <div>
                
            <nav className="MyApp-nav">
             <h1 className="MyApp-title">Welcome</h1>
             <img src={logo} className="MyApp-logo" alt="logo" />
             </nav>
             </div>
             <div>
             <article  className="MyApp-article">
                 <h1>This is Lakshman</h1>
                <h1>React JS</h1>
                </article>
                </div>
             </section>
             </fieldset>
            
           
                 <Footer/>
             
             
        </div>\
        </body>
     
      );
    }*/

    render() {

        return(
            <div>
           
            <Header/>
            <Details/>
            <Footer/>
           
           </div>

        )

    }
    }
    
export default MyApp;