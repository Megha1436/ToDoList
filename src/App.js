class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {currentTime :new Date().toLocaleTimeString()  }
  } 
    
   changeTime = () =>{
     this.setState({currentTime :new Date().toLocaleTimeString() });
   }
   
   
   render(){
     return(
       <div>
       <p>
       {this.state.currentTime}
       </p>
       </div>
     );
   }
    
    
  componentDidMount(){
    setInterval(this.changeTime,1000);
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
