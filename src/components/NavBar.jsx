import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import AuthForm from './AuthForm';
import { logout } from '../redux/authSlice';

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleLogout = () => dispatch(logout());

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div>
      <nav className="navbar">
        <div className="flex flex-row justify-between items-center">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="Logo"
              height="100px"
              width="150px"
              className="m-5"
            />
          </a>

          <div className="flex items-center space-x-4 m-5">
            {user ? (
              <>
                <span className="text-teal-400 font-semibold">Vous êtes connecté</span>
                <button
                  className="btn text-white border-solid border-2 border-teal-200 p-2 rounded-xl"
                  onClick={handleLogout}
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <button
                className="btn text-white border-solid border-2 border-teal-200 p-2 rounded-xl"
                onClick={handleShow}
              >
                Connexion/Inscription
              </button>
            )}
          </div>
        </div>
      </nav>

      <Modal show={showModal} onClose={handleClose}>
        <AuthForm
          isLogin={isLogin}
          toggleForm={toggleForm}
          onSuccess={handleClose} 
        />
      </Modal>
    </div>
  );
}
