import React,{Component}  from 'react'
import MyImage from './Images/pic_trulli.jpg'

class Image extends Component{
    render(){
        return(
            <div className="image">
                
                <img src ={MyImage} alt = "trulli" className="img"/>
                
            </div>
        )
    }
}
export default Image