import React, {FC} from 'react'
import './app.css'
import ContentToggler from './ContentToggler/ContentToggler'
// @ts-ignore
import logo from './images/blockoutlogo.png'
import './app.css';

const App: FC = () => (
   <div style={{display:'flex', flexDirection:'column' , alignItems:'center'}}>
            <img src={logo} />
            All these components are unstyled, so you can
            style them anyway you like:
       <div style={styles.comp}>
        <h1> ContentToggler </h1>

       ContentToggler is a simple component that allows you
        to toggle content
           <br></br> <br></br>
            <ContentToggler title='Click to toggle'>
                <br></br>
                Content goes here
            </ContentToggler>
       </div>
       <div>
           More components are on there way.
           Contact me if you need something  built or if you need help using this.
           at < a href="mailto:nickjohngray@gmail.com">nickjohngray@gmail.com</a>
       </div>
   </div>
)
const styles = {

    comp: {
       border:'1px solid black',
        padding:'10px'


    }
}

export default App;
