import React from "react";
import { inject, observer} from "mobx-react";

class Tabla extends React.Component {
    render() {
        const  { Users } = this.props;
        return <div>
            <ul>
                {Users.user.map(user => (
                    <li key={user.id}>
                        <h2>{user.id} </h2>
                        <span>{user.nombre} </span>
                    </li>
                ))}
            </ul>
        </div>
    }
}


export default inject("Users")(Tabla);