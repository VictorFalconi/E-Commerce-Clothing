import styles from './Admin.module.css';
import { Profile } from "../Login/Profile";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { allUsers, updateUserStatus } from '../../redux/actions';



const Admin = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const { user }  = useAuth0();



    useEffect(()=>{
        dispatch(allUsers())
    },[])

    const handleActive = (e) =>{

        const id = e.target.name;
        const bool = e.target.value
        var nueva 
        if(bool === 'false'){
        nueva = true
        }else{
             nueva = false
        }
        const value = {'active': nueva}
        dispatch(updateUserStatus(id, value))        
        
    }

  

    return (
        <div>
        <h1>Admin Dashboard </h1>
        <Profile/>
        {users?.map((u, idx)=>
            <div key={idx} className={styles.user}>
            <h2>User data</h2>
            <h3>Fullname: {u.full_name}</h3>
            <img src={u.image} alt='profile_image'/>
            <p>Email: {u.email}</p>
            <div>
            <button value={u.active} name={u._id} onClick={(e)=> handleActive(e) }>Cambiar estado</button>
            <p>{u.active ? 'activo ': 'inactivo'}</p>
            </div>            
            </div>
        )}

        
    </div>
)

}

export default Admin