import React from 'react';
import { Table, Column } from 'sticky-react-table'

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        let targetUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
        fetch(proxyUrl + targetUrl, {})
            .then(res => res.json())
            .then(data => {
                data.map(user => {
                    user.address = `${user.address.state} ${user.address.city} ${user.address.streetAddress} ${user.address.zip}`
                    return user
                })
                return data
            })
            .then(data => {
                console.log(data)
                return this.setState({ cards: data })
            })
            .catch(e =>{
                console.log(e)
            })
    }
    render() {
        return (

                <Table data={this.state.cards}>
                    <Column title="id" width={50} dataKey="id"/>
                    <Column title="firstName" width={100} dataKey="firstName"/>
                    <Column title="lastName" width={150} dataKey="lastName"/>
                    <Column title="email" width={250} dataKey="email"/>
                    <Column title="phone" width={150} dataKey="phone"/>
                    <Column title="address" width={250} dataKey="address"/>
                    <Column title="description" width={500} dataKey="description"/>
                </Table>

        )
    }
}
export default Card
//     id: 0,
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     address: {
//         streetAddress: '',
//         city: '',
//         state: '',
//         zip: '',
//     },
//     description: '',
// }