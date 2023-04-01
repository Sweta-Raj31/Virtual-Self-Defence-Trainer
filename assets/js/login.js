
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
const firebaseConfig = {
    apiKey: "AIzaSyAAYbBaud3B5wexefQOs0A84L7hmIoZa0Y",
    authDomain: "login-with-firebase-b60ea.firebaseapp.com",
    projectId: "login-with-firebase-b60ea",
    storageBucket: "login-with-firebase-b60ea.appspot.com",
    messagingSenderId: "519546299937",
    appId: "1:519546299937:web:2db1cccc2ae23b692ea560",
    measurementId: "G-F6K55QJBKK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//initilzation var
  const auth = firebase.auth();
  const database=firebase.database();
	function signUp(){
		     
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		var Name = document.getElementById("text");
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}

	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));

	}
	
	
	function signOut(){	
		auth.signOut();
		alert("Signed Out");
		
	}


