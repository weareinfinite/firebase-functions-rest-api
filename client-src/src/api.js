import firebaseApp from './firebaseapp';


export function loginWithEmailPassword(email, password)  {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
}

export const logout = () => {
    return firebaseApp.auth().logout()
}