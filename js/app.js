
//base array
var persons = [
    { id: 1, name: 'Sandra', value: 25000 },
    { id: 2, name: 'Karina', value: 25000 },
    { id: 3, name: 'Valentina', value: 25000 },
];

//onload function
window.onload = function() {
    loadingPersons(); //load persons array in a table
};

//onclick function
addBtn.onclick = function(){
    if(name.value != '' && value.value != ''){
        //remove all rows from table
        document.querySelectorAll("td").forEach(function (data) {
            data.parentNode.remove();
        });
        addPerson();
        loadingPersons();
    }else{
        alert('Please fill all fields');
    }
}

function editPerson(id){
        //addBtn style hidden
        addBtn.style.display = 'none';
        editBtn.style.display = 'block';
        persons.forEach(function (element, i) {
            if(element.id == id){
                document.getElementById('name').value = element.name;
                document.getElementById('value').value = element.value;
            }
        });
        editBtn.onclick = function(){
            if(name.value != '' && value.value != ''){
                //modify person in array    
                persons.forEach(function (element, i) {
                    if(element.id == id){
                        element.name = document.getElementById('name').value;
                        element.value = document.getElementById('value').value;
                    }
                });
                //remove all rows from table
                document.querySelectorAll("td").forEach(function (data) {
                    data.parentNode.remove();
                });
                loadingPersons();
                document.getElementById('name').value = '';
                document.getElementById('value').value = '';
                addBtn.style.display = 'block';
                editBtn.style.display = 'none';
                alert('Person edited');
            }else{
                alert('Please fill all fields');
            }
        }
}


//load persons array in a table
function loadingPersons(){
    persons.forEach(function (element, i) {
         let row = document.createElement('tr'); 
         let id = document.createElement('td'); 
         let name = document.createElement('td'); 
         let value = document.createElement('td'); 
         let edit = document.createElement('td');   
         let remove = document.createElement('td'); 
         id.innerHTML = element.id; 
         name.innerHTML = element.name; 
         value.innerHTML = element.value; 
         //remove button with onclick function and id of person to delete from array and table  
         remove.innerHTML = '<button onclick="deletePerson('+element.id+')">Delete</button>';
         //edit button with onclick function and id of person to edit from array and table
         edit.innerHTML = '<button onclick="editPerson('+element.id+')">Edit</button>';
         row.appendChild(id); 
         row.appendChild(name);
         row.appendChild(value);
         row.appendChild(remove);
         row.appendChild(edit);
         document.getElementById('myTable').appendChild(row);
     });
}

//delete person from array
function deletePerson(id){
    persons.forEach(function (element, i) {
        if(element.id == id){
            persons.splice(i, 1);
        }
    });
    //remove all rows from table
    document.querySelectorAll("td").forEach(function (data) {
        data.parentNode.remove();
    });
    loadingPersons();
    alert('Person deleted');
}

//add person to array
function addPerson(){
    let name = document.getElementById('name').value;
    let value = document.getElementById('value').value;
    let id = persons.length + 1;
    let person = { id: id, name: name, value: value };
    persons.push(person);
    //clear name and value fields   
    document.getElementById('name').value = '';
    document.getElementById('value').value = '';
    alert('Person added');

}
