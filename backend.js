export class FirebaseAuth {
    static signOutUser() {
        console.log("[Firebase] User signed out safely.");
        document.getElementById('output').innerHTML += "<br><br><b>[SYSTEM] Connection Terminated.</b>";
    }
}