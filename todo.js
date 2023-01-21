// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, onChildAdded, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhDaQueucCBNtNPEQbE8Xsi78SRidUNbU",
    authDomain: "todoappp-41bbd.firebaseapp.com",
    projectId: "todoappp-41bbd",
    storageBucket: "todoappp-41bbd.appspot.com",
    messagingSenderId: "383240627387",
    appId: "1:383240627387:web:6d783c2f6686671f6e759e",
    measurementId: "G-D8D5VY7CHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase()








var mn = document.getElementById('main')
var inp = document.getElementById('inp')

window.sendvalue = function () {
    if (!inp.value) {
        alert("Enter Value")
    } else {
        var todoObj = {
            value: inp.value,
        }
        todoObj.id = Math.random().toString().slice(2)
        // console.log(todoObj)
        const reference = ref(database, `ToDo/${todoObj.id}`)
        set(reference, todoObj)
        inp.value = ""
    }
}

function getData() {
    var toDolist = []
    const reference = ref(database, "ToDo/")
    onChildAdded(reference, function (dt) {
        toDolist.push(dt.val())
        // console.log(toDolist)
        var li = document.createElement('li')
        var litext = document.createTextNode(dt.val().value)
        li.appendChild(litext)
        mn.appendChild(li)
        inp.value = ""

        var editbtn = document.createElement('BUTTON')
        var editbtntext = document.createTextNode('Edit todo')
        editbtn.appendChild(editbtntext)
        editbtn.setAttribute("id", `${dt.val().id}`)
        editbtn.setAttribute("onclick", "edittodo(this)")
        li.appendChild(editbtn)
        mn.appendChild(li)


        var delbtn = document.createElement('BUTTON')
        var delbtntext = document.createTextNode('delete todo')
        delbtn.appendChild(delbtntext)
        delbtn.setAttribute("id", `${dt.val().id}`)
        delbtn.setAttribute("onclick", "deletetodo(this)")
        li.appendChild(delbtn)
        mn.appendChild(li)
    })
}
getData()

window.edittodo = function (element) {
    var newvalue = prompt("Enter Updated Value", element.parentNode.firstChild.nodeValue);
    const refrence = ref(database, `ToDo/${element.id}`)
    var editToDoObj = {
        value: newvalue,
        id: element.id
    }
    set(refrence, editToDoObj)
    element.parentNode.firstChild.nodeValue = newvalue
    // console.log(element.id)
}

window.deletetodo = function (element) {
    const refrence = ref(database, "ToDo/")
    remove(refrence, `${element.id}`)
    element.parentNode.remove();
}

window.del = function () {
    const refrence = ref(database, "ToDo")
    remove(refrence, "ToDo")
    mn.innerHTML = ""
}