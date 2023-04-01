//firebase needs thses to figure out on how we r connecting to database
 //configuring the app on the front end to link with our firebase which we created on website

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCFQL64Sztz5TkF6MHo_mAHwnpQx6lychA",
    authDomain: "mentalhealth-bd14a.firebaseapp.com",
    databaseURL: "https://mentalhealth-bd14a-default-rtdb.firebaseio.com",
    projectId: "mentalhealth-bd14a",
    storageBucket: "mentalhealth-bd14a.appspot.com",
    messagingSenderId: "872639184603",
    appId: "1:872639184603:web:516bf879cd4cdaa9c1d6fe",
    measurementId: "G-Y76SDEQJD4"
  };
  // Initialize Firebase

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore(app);
        firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });

   const submitPlayer = document.querySelector("#submit_btn");
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
submitPlayer.addEventListener("click",function(){
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