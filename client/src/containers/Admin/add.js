import React, { Component } from 'react';

class AddBook extends Component {

    state = {
        formData: {
            name: '',
            author: '',
            review: '',
            pages: '',
            rating: '',
            price: ''
        }
    }

    handleInput = (event, name) => {
        const newFormData = {
            ...this.state.formData
        }
        newFormData[name] = event.target.value;

        this.setState({
            formData: newFormData
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.formData);
    }
    render() {
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add a review</h2>
                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter name"
                            value ={this.state.formData.name}
                            onChange={(event) => this.handleInput(event, 'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter author"
                            value ={this.state.formData.author}
                            onChange={(event) => this.handleInput(event, 'author')}
                        />
                    </div>

                    <textarea 
                        value = {this.state.formData.review}
                        onChange={(event) => this.handleInput(event, 'review')}
                    />

                    <div className="form_element">
                        <input 
                            type="number"
                            placeholder="Enter pages"
                            value ={this.state.formData.pages}
                            onChange={(event) => this.handleInput(event, 'pages')}
                        />
                    </div>

                    <div className="form_element">
                        <select
                            value={this.state.formData.rating}    
                            onChange={(event) => this.handleInput(event, 'rating')}
                        >
                            <option val = "1" >1</option>
                            <option val = "2" >2</option>
                            <option val = "3" >3</option>
                            <option val = "4" >4</option>
                            <option val = "5" >5</option>
                        </select> 
                        
                    </div>

                    <div className="form_element">
                        <input 
                            type="number"
                            placeholder="Enter price"
                            value ={this.state.formData.price}
                            onChange={(event) => this.handleInput(event, 'price')}
                        />
                    </div>

                    <button type="submit"> Add Review</button>

                </form>
            </div>
        );
    }
}

export default AddBook;