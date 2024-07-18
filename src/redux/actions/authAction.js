import { auth, googleProvider} from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const loginWithEmailAction = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: 'LOGIN_SUCCESS', payload: userCredential.user });
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', payload: error.message });
  }
};

export const loginWithGoogleAction = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch({ type: 'LOGIN_SUCCESS', payload: result.user });
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', payload: error.message });
  }
};

export const registerWithEmailAction = (email, password) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: 'REGISTER_SUCCESS', payload: userCredential.user });
  } catch (error) {
    dispatch({ type: 'REGISTER_ERROR', payload: error.message });
  }
};

export const registerWithGoogleAction = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch({ type: 'REGISTER_SUCCESS', payload: result.user });
  } catch (error) {
    dispatch({ type: 'REGISTER_ERROR', payload: error.message });
  }
};