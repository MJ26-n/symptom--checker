import {db} from "./firebase.js";

import{
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const symptomInput = document.getElementById("symptomInput");
const symptomList = document.getElementById("symptomList");

async function saveSymptom() {
    const symptom = symptomInput.value.trim();

    if(symptom=== "") {
        alert("Please enter a symptom.");
        return;
    } 

    try{
        await addDoc(
            collection(db,"symptoms"),
            {
                symptom:symptom,
                createdAt:new Date().toISOString()  
            }
        );
    

        symptomInput.value= "";
        await getSymptoms();

  } catch(error){
        console.error(error);
    
  }    
 } 

 async function getSymptoms() {
    try {
        const querySnapshot = await getDocs(collection(db, "symptoms"));
        symptomList.innerHTML = ""; // Clear the current list
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const li = document.createElement("li");
            li.textContent = data.symptom;
            symptomList.appendChild(li);
        });
    } catch (error) {
        console.error("Error getting symptoms: ", error);
    }
}
window.saveSymptom=saveSymptom;
document.getElementById("add-btn").addEventListener("click",saveSymptom);
