
//firebase needs thses to figure out on how we r connecting to database
 //configuring the app on the front end to link with our firebase which we created on website
var firebaseConfig = {
    apiKey: "AIzaSyAAYbBaud3B5wexefQOs0A84L7hmIoZa0Y",
    authDomain: "login-with-firebase-b60ea.firebaseapp.com",
    projectId: "login-with-firebase-b60ea",
    storageBucket: "login-with-firebase-b60ea.appspot.com",
    messagingSenderId: "519546299937",
    appId: "1:519546299937:web:2db1cccc2ae23b692ea560",
    measurementId: "G-F6K55QJBKK"
  };
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore(app);
        firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });

   const submitPlayers = document.querySelector("#submit_btn");
   const name = document.querySelector("#name");
   const leaderBoard = document.querySelector("#leaderBoard");
   const grade = document.getElementById("gradepercentage");

function renderplayers(doc){
    let tr = document.createElement('tr');
    let name = document.createElement('span');
    let grade = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    grade.textContent = doc.data().grade;

    tr.appendChild(name);
    tr.appendChild(grade);

    leaderBoard.appendChild(tr);
}

// real-time listener
//snapshot an obj that represents your doc ..grab the data i t contains by calling data on it
db.collection('players').orderBy('grade').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
        changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderplayers(change.doc);}
    })
})

// saving data
 console.log(grade)
submitPlayers.addEventListener("click",function(){
    /*var str,
    element = document.getElementById('grade-percentage');
        if (element != null) {
        str = element.value;
        }
        else {
       str = null;
         }*/
    if( document.getElementById("name").value != ''){
    //e.preventDefault();
    db.collection('players').add({
        name: name.value,        
        grade: parseInt(grade.value)

        });
      }
    });
function display(){
          document.getElementById('table').style.display = "block";
}
