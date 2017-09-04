var React = require('react');
import {Link,IndexLink} from 'react-router'



var Nav = () =>{
  return(
    <div>
      <h2>Nav Components</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
      <Link to="/about"  activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
      <Link to="/example"  activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>

    </div>
  );
}

module.exports=Nav;