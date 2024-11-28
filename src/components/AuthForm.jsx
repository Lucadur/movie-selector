import  {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/authSlice';

const AuthModal = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        dispatch(login(userData));
    }

    const handleLogout = () => {
        dispatch(logout());
    }



    return (
        <div className='flex flex-col w-full h-full'>
        {user ? (
          <div>
            <h2>Bienvenue, {user.email}</h2>
            <button onClick={handleLogout}>Se déconnecter</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Mot de passe:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Se connecter</button>
          </form>
        )}
      </div>
    );
  };
    
  export default AuthModal;
