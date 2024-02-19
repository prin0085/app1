import React, { Component } from 'react'

export default class Button extends Component {
    // getDate() {
    //     const dayNames = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
    //     const monthNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤกษภาคม', 'มิถุนายน', 'กรกฏาคม'
    //         , 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    //     const date = new Date();
    //     const weekDay = dayNames[date.getDay()];
    //     const day = date.getDate();
    //     const month = monthNames[date.getMonth()];
    //     const year = date.getFullYear() + 543;
    //     return `วัน${weekDay} ที่ ${day} ${month} ${year}`
    // }

    showAlert(msg) {
        alert(msg);
    }

    onClickButtonOk = () => {
        this.showAlert('Hello');
    }

    render() {
        return <button onClick={this.onClickButtonOk}>OK</button>
    }
}