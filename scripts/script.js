  "use strict";

class Contact{
    constructor(name,email,phone,relation){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.relation=relation;
    }
}

class AddressBook{
    constructor(){
        this.contacts=[]
    }
    add(name,email,phone,relation){
        this.contacts.push(new Contact(name,email,phone,relation));

    }
    delete(index){
        this.contacts.splice(index,1);
        console.log(this.contacts);
    }
    display(){
        document.querySelector("#contact_list").innerHTML="";
        this.contacts.forEach((contact,index)=>{
            const newEntry=document.createElement("div");
            newEntry.classList.add("contact_box");
            newEntry.innerHTML=`
            <p>Name: ${contact.name}</p>
            <p>Email: ${contact.email}</p>
            <p>Phone: ${contact.phone}</p>
            <p>Relation: ${contact.relation}</p>
            <i class= "fa fa-trash" index="${index}" aria-hidden="true"></i>
            `;
            document.querySelector("#contact_list").append(newEntry);
        });
    }    
}
const addressBook = new AddressBook();
addressBook.add("Alicia Lecznar", "gmail.com", 3823489234, "self");
addressBook.add("Pat Lecznar", "yahoo.com", 3948127498, "mother");
addressBook.display();

const form = document.querySelector("form");
function submitListener(){
    form.addEventListener("submit", addContact);
   
}


function addContact(e){
    e.preventDefault();
    addressBook.add(form[0].Value, form[1].Value, form [2].value)
form.reset();
addressBook.display();
}

// function addContact(e){
//     e.preventDefault();
//     const formData= new FormData(form);
//     addressBook.add(
//         formData.get("name"),
//         formData.get("email"),
//         formData.get("phone"),
//         formData.get("relation")
//     );
function handleSubmit(e){
    e.preventDefault();
    console.log("I have been clicked");
    addressBook.add(
        event.target[0].value,
        event.target[1].value,
        event.target[2].value,
        event.target[3].value,
    );
newContacts.display();
form.reset();

}

function deleteContact(e){
    if(e.target.classList.contains("fa-trash")){
        const index =e.target.getAttribute("index");
        console.log(index);
        addressBook.deleteAt(index);
        addressBook.display();

    }
}



// .querySelector("#contact_list")
// .addEventListener("click", deleteContact);
// }



submitListener();
deleteListener();