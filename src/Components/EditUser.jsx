import React, {useContext, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../Contexts/GlobalState';

const EditUser = (props) => {
    const [slectedUser, setSlectedUser] = useState({
        id: "",
        name: ""
    });

    const { users, editUser, removeUser} = useContext(GlobalContext)
    const history = useHistory()
    const currentUserId = props.match.params.id;

    const cancel = () => {
        removeUser(currentUserId);
        history.push("/");
    }

    useEffect(() => {
        debugger
        if(users && users.length){
            const slectedUser = users.find(user => user.id === currentUserId )
            setSlectedUser(slectedUser);
        } else {
            history.push("/");
        }

    }, [currentUserId, users, history]);

    const onEditUser = (e) => {
        e.preventDefault()
        editUser(slectedUser)
        history.push("/")
    };

    const onChange = (e) => {
        setSlectedUser({...slectedUser, [e.target.name]: e.target.value})
    };
    
    return ( 
        <div>
            <form onSubmit={onEditUser} className="containerEdit Edit">
                <div>
                    <input 
                        type="text" 
                        className="form-control mt-3 ml-3" 
                        placeholder="Enter user" 
                        value={slectedUser.name} 
                        name="name"
                        onChange={onChange}
                    />
                </div>
                <div className="buttons mt-3 mr-4">
                    <button type="submit" className="btn btn-warning">Edit</button>
                    <button type="button" onClick={cancel} className="btn ml-1 btn-danger">Delete</button>
                </div>
            </form> 
        </div>
     );
}
 
export default EditUser;