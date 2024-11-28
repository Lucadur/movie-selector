// AuthForm.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure, registerSuccess, registerFailure } from '../redux/authSlice';

/* eslint-disable react/prop-types */
const AuthForm = ({ isLogin, toggleForm, onSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const { error: authError } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAuthAction = () => {
    const { email, password } = formData;
    if (!email || !password) {
      const errorMessage = 'Veuillez remplir tous les champs.';
      dispatch(isLogin ? loginFailure(errorMessage) : registerFailure(errorMessage));
      return;
    }

    if (isLogin) {
      // Simulated login validation
      if (email === 'user@example.com' && password === 'password') {
        dispatch(loginSuccess({ email }));
        onSuccess();
      } else {
        dispatch(loginFailure('Identifiants incorrects.'));
      }
    } else {
      // Simulated registration
      dispatch(registerSuccess({ email }));
      onSuccess();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuthAction();
  };

  return (
    <div className="auth-form bg-gray-800 text-white p-20 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isLogin ? 'Connexion' : 'Inscription'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-500 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">Mot de passe</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-500 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {authError && <p className="text-red-500 text-sm">{authError}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition duration-300"
        >
          {isLogin ? 'Connexion' : 'Inscription'}
        </button>
      </form>

      <p className="text-center mt-4">
        {isLogin ? 'Pas encore de compte ?' : 'Vous avez déjà un compte ?'}{' '}
        <button
          className="text-teal-400 underline hover:text-teal-600"
          onClick={toggleForm}
        >
          {isLogin ? 'Inscrivez-vous' : 'Connectez-vous'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
