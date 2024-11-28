import { useState } from 'react';
import Modal from './Modal';
import AuthForm from './AuthForm';

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <nav className="navbar">
        <div className="flex flex-row justify-between">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="Logo"
              height="100px"
              width="150px"
              className='m-5'
            />
          </a>
          <button className="btn text-white m-5 border-solid border-2 border-teal-200 rou" onClick={handleShow}>
            Connexion/Inscription
          </button>
        </div>
      </nav>


      <Modal show={showModal} onClose={handleClose}>
        <AuthForm />
      </Modal>
    </div>
  );
}
