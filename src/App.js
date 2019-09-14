class App extends React.Component{
  state = {ToDoArray :[]}
  deleteItem = (index) => {
    let copy =[...this.state.ToDoArray];
    copy.splice(index,1);
    this.setState({ToDoArray : copy})
  }
  addToItem = (text) =>{
    let newarr = [... this.state.ToDoArray,text]
    this.setState({ToDoArray : newarr});
  } 
  
  render(){
    return(
      <div>
      <ToDoInput addItem ={this.addToItem}/>
      <ToDoList item={this.state.ToDoArray} delItem = {this.deleteItem} />
        </div>
    ); 
  }
}


class ToDoInput extends React.Component{
  state = {inputVal : ""}
  handleChange = (event) =>{
    this.setState({inputVal : event.target.value})
  }
  handleClick = () => {
    this.props.addItem(this.state.inputVal);
 this.setState({inputVal : ""})
  }
  render(){
    return(
     <div>
     <input value={this.state.inputVal} onChange = {this.handleChange}/>
     <button onClick = {this.handleClick}>add
      </button>
      </div>
    );
  }
}



class ToDoList extends React.Component{
  render(){
    let total = this.props.item.map((items,index) =>     <li>
    {items}
    <button onClick = { () => this.props.delItem(index)}>Delete
    </button>
    </li>)
   return(
       <div>
       {total}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));class App extends React.Component{
  state = {ToDoArray :[]}
  deleteItem = (index) => {
    let copy =[...this.state.ToDoArray];
    copy.splice(index,1);
    this.setState({ToDoArray : copy})
  }
  addToItem = (text) =>{
    let newarr = [... this.state.ToDoArray,text]
    this.setState({ToDoArray : newarr});
  } 
  
  render(){
    return(
      <div>
      <ToDoInput addItem ={this.addToItem}/>
      <ToDoList item={this.state.ToDoArray} delItem = {this.deleteItem} />
        </div>
    ); 
  }
}


class ToDoInput extends React.Component{
  state = {inputVal : ""}
  handleChange = (event) =>{
    this.setState({inputVal : event.target.value})
  }
  handleClick = () => {
    this.props.addItem(this.state.inputVal);
 this.setState({inputVal : ""})
  }
  render(){
    return(
     <div>
     <input value={this.state.inputVal} onChange = {this.handleChange}/>
     <button onClick = {this.handleClick}>add
      </button>
      </div>
    );
  }
}



class ToDoList extends React.Component{
  render(){
    let total = this.props.item.map((items,index) =>     <li>
    {items}
    <button onClick = { () => this.props.delItem(index)}>Delete
    </button>
    </li>)
   return(
       <div>
       {total}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));class App extends React.Component{
  state = {ToDoArray :[]}
  deleteItem = (index) => {
    let copy =[...this.state.ToDoArray];
    copy.splice(index,1);
    this.setState({ToDoArray : copy})
  }
  addToItem = (text) =>{
    let newarr = [... this.state.ToDoArray,text]
    this.setState({ToDoArray : newarr});
  } 
  
  render(){
    return(
      <div>
      <ToDoInput addItem ={this.addToItem}/>
      <ToDoList item={this.state.ToDoArray} delItem = {this.deleteItem} />
        </div>
    ); 
  }
}


class ToDoInput extends React.Component{
  state = {inputVal : ""}
  handleChange = (event) =>{
    this.setState({inputVal : event.target.value})
  }
  handleClick = () => {
    this.props.addItem(this.state.inputVal);
 this.setState({inputVal : ""})
  }
  render(){
    return(
     <div>
     <input value={this.state.inputVal} onChange = {this.handleChange}/>
     <button onClick = {this.handleClick}>add
      </button>
      </div>
    );
  }
}



class ToDoList extends React.Component{
  render(){
    let total = this.props.item.map((items,index) =>     <li>
    {items}
    <button onClick = { () => this.props.delItem(index)}>Delete
    </button>
    </li>)
   return(
       <div>
       {total}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));class App extends React.Component{
  state = {ToDoArray :[]}
  deleteItem = (index) => {
    let copy =[...this.state.ToDoArray];
    copy.splice(index,1);
    this.setState({ToDoArray : copy})
  }
  addToItem = (text) =>{
    let newarr = [... this.state.ToDoArray,text]
    this.setState({ToDoArray : newarr});
  } 
  
  render(){
    return(
      <div>
      <ToDoInput addItem ={this.addToItem}/>
      <ToDoList item={this.state.ToDoArray} delItem = {this.deleteItem} />
        </div>
    ); 
  }
}


class ToDoInput extends React.Component{
  state = {inputVal : ""}
  handleChange = (event) =>{
    this.setState({inputVal : event.target.value})
  }
  handleClick = () => {
    this.props.addItem(this.state.inputVal);
 this.setState({inputVal : ""})
  }
  render(){
    return(
     <div>
     <input value={this.state.inputVal} onChange = {this.handleChange}/>
     <button onClick = {this.handleClick}>add
      </button>
      </div>
    );
  }
}



class ToDoList extends React.Component{
  render(){
    let total = this.props.item.map((items,index) =>     <li>
    {items}
    <button onClick = { () => this.props.delItem(index)}>Delete
    </button>
    </li>)
   return(
       <div>
       {total}
      </div>
    );
  }
}//jfue

ReactDOM.render(<App/>, document.getElementById("root"));
