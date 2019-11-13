import React, { Component } from 'react'
import { Rate} from 'antd';
export default class RateComponet extends Component {
    constructor(props) {
        super(props);
        this.handleChangeRate = this.handleChangeRate.bind(this);
    }

    handleChangeRate (value, doctor) {
        let numberStar = "";

        if(value === 1){
            numberStar = "ONE"
        }else if(value === 2) {
            numberStar = "TWO"
        }else if(value === 3) {
            numberStar = "THREE"
        }else if(value === 4) {
            numberStar = "FOUR"
        }else if(value === 5) {
            numberStar = "FIVE"
        }
        let rate = {
            numberStar : numberStar,
            clinic : {
                id : this.props.clinic.clinic.object.id
            },
            expert : {
                id : doctor.id
            }
        }

        this.setState({
            rateValue : value
        })
    }

    render() {
        return (
            <div className="rate-logo-rate">
                <Rate onChange={this.props.onChange} value={this.props.value} />
            </div>
        )
    }
}
