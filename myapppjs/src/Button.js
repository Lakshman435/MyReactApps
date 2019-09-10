import React ,{Component} from 'react';
import {Button} from 'reactstrap';


class CreateButton extends Component {

    
    render() {
        return (
           
            <div>

            <Button color="primary" size="large" className="Button">primary</Button>{' '}
            <Button color="secondary" size="lg">secondary</Button>{' '}
            <Button color="success">success</Button>{' '}
            <Button color="info" size="lg">info</Button>{' '}
            <Button color="warning">warning</Button>{' '}
            <Button color="danger">danger</Button>{' '}
            <Button color="link">link</Button>
       
          </div>
                
        );
    }
}

export default CreateButton;