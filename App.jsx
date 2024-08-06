// import Weather from "./Weather.jsx"
// function App() {
//   return (<>
//           <Weather/>
  
//   </>)
// }

// export default App


import React from "react";
import "./App.css";
class App extends React.Component {
    
    constructor(props) {
        super(props);
 
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }
 
    // ComponentDidMount is used to
    // execute the code
componentDidMount() {
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((json) => {
    this.setState({
        items: json,
        DataisLoaded: true,
    });
});
}
render() {
const { DataisLoaded, items } = this.state;
if (!DataisLoaded)
return (
    <div>
        <h1> Pleses wait some time.... </h1>
    </div>
);

return (
<div className="App">
<h3>Fetch data from an api in react</h3>
<div className="container">
{items.map((item) => (
<div className="item">
<ol key={item.id}>
    <div>
        <strong>
            {"User Name: "}
        </strong>
        {item.username},
    </div>
    <div>
        Full Name: {item.name},
    </div>
    <div>
        User Email: {item.email}
    </div>
</ol>
</div>
))}
</div>
</div>
);
}
}

export default App;
