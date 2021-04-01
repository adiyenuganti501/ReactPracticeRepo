import React from 'react';
import styles from './ListData.module.scss';

export default class UserData extends React.Component {

    state = {
        listtt: []
    }
    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        this.setState({
            listtt: data,
            originalData: data
        })
    }
    myFilterFunction = (event) => {

        let target = event.target;
        console.log(event.target.value);
        let list = this.state.originalData;
        let nameList = list.filter(user => user.name.includes(target.value) || user.email.includes(target.value))

        this.setState({
            listtt: [...nameList]
        })

    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input type='text' placeholder='Enter your name' onChange={this.myFilterFunction} />
                </div>
                <article className="styles.tabCard container">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>User Name</th>
                    </tr>
                    {(this.state.listtt.length) ? this.state.listtt.map((userList) => {
                        return <tr key={userList['id']}>
                            <td>{userList['name']}</td>
                            <td>{userList['email']}</td>
                            <td>{userList['phone']}</td>
                            <td>{userList['username']}</td>
                        </tr>

                    }) : <h2> No Data found</h2>}
                </article>

            </React.Fragment>

        )


    }

}