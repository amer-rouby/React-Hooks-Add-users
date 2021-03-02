import React, {useContext, useState} from 'react';
import { GlobalContext } from '../Contexts/GlobalState';
import uuId from "uuid/dist/v1";

const AddUser = ({history}) => {
    const [name, setName] = useState("")
    const { addUser } = useContext(GlobalContext);

    const cancel = () => {
        history.push("/");
    };

    const onAddUser = (e) => {
        e.preventDefault()
        const newUser = {
            id: uuId(),
            name: name
        };
        addUser(newUser);
        history.push("/")
    };

    return ( 
        <div className="containerForm add-userform">
            <form onSubmit={onAddUser}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter user" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mt-2">
                    <button type="submit" className="btn btn-secondary">Add User</button>
                    <button onClick={cancel} type="button" className="btn ml-2 btn-danger">Cansel</button>
                </div>
            </form>
        </div>
     );
}
 
export default AddUser;