var mainList = document.getElementById('list');
var input = document.getElementById('inp');

// var deleteAll= document.getElementById('allbtn')




function addEle() {

    var userinput = input.value;

    var a = document.createElement('li');
    var txt = document.createTextNode(userinput);
    a.appendChild(txt);
    mainList.appendChild(a);

    var delEle = document.createElement('button');
    var delTxt = document.createTextNode('Delete');
    delEle.appendChild(delTxt);
    a.appendChild(delEle);
    delEle.setAttribute('class', 'dltbtn');
    delEle.setAttribute('onclick', 'deleteElement(this)');


    var editEle = document.createElement('button');
    var editTxt = document.createTextNode('Edit');
    editEle.appendChild(editTxt);
    a.appendChild(editEle);
    editEle.setAttribute('class', 'editbtn')
    editEle.setAttribute('onclick','editElement(this)');

    // deleteAll.style.display=block;
;
    // userinput=document.getElementById('inp').value = '';

}

function deleteElement(element) {
element.parentNode.remove();
}

function editElement(element) {
    element.parentNode.firstChild.nodeValue= prompt();
}

function delAll(element) {
    mainList.innerHTML='';
}
