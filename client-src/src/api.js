import firebaseApp from './firebaseapp';

/** Authentication  */


export function loginWithEmailPassword(email, password)  {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
}

export const logout = () => {
    return firebaseApp.auth().signOut();
}