const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
// Your web app's Firebase configuration
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCrZ_tebJ-klhMYTZI6RjLgJpXWV8ZNTuE",
    authDomain: "raksha-81610.firebaseapp.com",
    projectId: "raksha-81610",
    storageBucket: "raksha-81610.appspot.com",
    messagingSenderId: "1059115738524",
    appId: "1:1059115738524:web:0ca4111c04e990bd9a9459"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
	const auth = firebase.auth();
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
