import React, { useContext } from 'react'
import {GlobalContext} from "../Contexts/GlobalState"
import {Link} from "react-router-dom";

export const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
    return ( 
        <div >
            {users.length > 0 ? (
                <React.Fragment>
                    {users.map(user => (
                        <div className="containerEdit Edit" key={user.id}>
                            <div>
                                <p className="mt-3 ml-4">{user.name}</p>
                            </div>
                            <div className="buttons mt-3 mr-4">
                                <Link to={`/edit/${user.id}`} className="btn btn-warning">Edit</Link>
                                <button onClick={() => removeUser(user.id)} type="button" className="btn ml-1 btn-danger">Delete</button>
                            </div>
                        </div> 
                    ))} 
                </React.Fragment>
            ):(<h4 className="text-center mt-4">No User</h4>)} 
        </div>
     );
}
