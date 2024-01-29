import React from 'react';
import { userContext } from './context';

export default function Content() {
    let [user, setUser] = React.useContext(userContext);

    const contentStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        margin: 10,
        padding: 10
    };

    const onClickSignin = (event) => {
        event.preventDefault()
        setUser('Jin Kazama');
    };

    return (<div style={contentStyle}>
        {
            (user)
                ? <span>Hello {user}</span>
                : <span>Please <a href=" " onClick={(ev) => onClickSignin(ev)}>
                    Signin</a></span>
        }
    </div >
    )
}