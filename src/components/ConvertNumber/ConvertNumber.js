import React from 'react';

class ConvertNumber extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number1: "",
            number2: "",
            count1: 0,
            count2: 0,
        }
        this.handleChangeNumber1 = this.handleChangeNumber1.bind(this);
        this.handleChangeNumber2 = this.handleChangeNumber2.bind(this);
    }

    handleChangeNumber1(e) {
        const { name, value } = e.target;
        console.log(this.state);
        this.setState({
            [name]: value,
            count1: value * 0.5
        })
    }

    handleChangeNumber2(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            count2: value * 0.05
        })
    }


    render() {
        return (
            <div>
                <form>
                    <input
                        type="number"
                        name="number1"
                        count="count1"
                        value={this.state.number1}
                        onChange={this.handleChangeNumber1}>
                    </input>
                    <div>{this.state.count1}</div>
                    <input
                        type="number"
                        name="number2"
                        value={this.state.number2}
                        onChange={this.handleChangeNumber2}>
                    </input>
                    <div>{this.state.count2}</div>
                </form>
            </div>
        )
    }
}

export default ConvertNumber;