import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component{
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

    componentDidMount(){
      this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person.js] rendering...');
        return (
        <Aux>
              {this.props.isAuth ? 
              <p>Authenticated</p> :
              <p>Please log in</p>}
              <p onClick={this.props.click}>
                I'm {this.props.name} and I am {this.props.age} years old!
              </p>
              <p >{this.props.children}</p>
              <input 
              // ref={(inputEle)=> {this.inputElement = inputEle}}
              ref={this.inputElementRef}
              type="text" 
              onChange={this.props.changed} 
              value={this.props.name} 
              />
        </Aux>
        );   
    }
}


Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, 'Person');
