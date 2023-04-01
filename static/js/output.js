
//firebase needs thses to figure out on how we r connecting to database
 //configuring the app on the front end to link with our firebase which we created on website
var firebaseConfig = {
    apiKey: "AIzaSyCrZ_tebJ-klhMYTZI6RjLgJpXWV8ZNTuE",
    authDomain: "raksha-81610.firebaseapp.com",
    projectId: "raksha-81610",
    storageBucket: "raksha-81610.appspot.com",
    messagingSenderId: "1059115738524",
    appId: "1:1059115738524:web:0ca4111c04e990bd9a9459"
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
