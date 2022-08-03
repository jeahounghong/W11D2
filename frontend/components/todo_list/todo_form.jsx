import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            id: Math.floor(Math.random()*1000000),
            body: "",
            title: "",
            done: false
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e){
        this.setState({title: e.target.value});
    }

    updateBody(e) {
        this.setState({body: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        
        this.props.receiveTodo(this.state);

        this.setState({
            id: Math.floor(Math.random()*1000000),
            body: "",
            title: "",
            done: false
        });

    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>   
            <h3>Add a Todo</h3>
            <label>Title:
                <input type="text" value={this.state.title} onChange={this.updateTitle}></input>
            </label>
            <label>Body:
                <input type="textarea" value={this.state.body} onChange={this.updateBody}></input>
            </label>
            <input type="submit" value="Create Todo!"/>
        </form>)
    }
}

export default TodoForm;

// class TeaForm extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         id: Math.floor(Math.random()*1000000),
//         flavor: '',
//         amount: ''
//       }
  
//       this.updateFlavor = this.updateFlavor.bind(this);
//       this.updateAmount = this.updateAmount.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     updateFlavor(e) {
//       this.setState({flavor: e.target.value});
//     }
  
//     updateAmount(e) {
//       this.setState({amount: e.target.value});
//     }
  
//     handleSubmit(e) {
//       e.preventDefault();
  
//       this.props.receiveTea(this.state);
  
//       this.setState({
//         id: Math.floor(Math.random() * 1000000),
//         flavor: '',
//         amount: ''
//       })
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <h1>Add a Tea</h1>
//           <label>Flavor
//             <input type="text" value={this.state.flavor} onChange={this.updateFlavor} />
//           </label>
//           <label>Amount
//             <input type="text" value={this.state.amount} onChange={this.updateAmount} />
//           </label>
//           <input type="submit" value="Add Tea"/>
//         </form>
//       )
//     }
//   }
  
//   export default TeaForm;