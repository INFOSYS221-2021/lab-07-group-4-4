// Example object and print statements

// Create your JavaScript objects
let student = {
   name: "John Wick",
   id: "White",
   username: "Baba_Yaga",
   courses:[
      {
         title: "Bio",
         category: "Med School",
         category_num: "101",
         short_desc: "The human body",
         offered: "sem1"
      },
       {
         title: "Mechs",
         category: "Med",
         category_num: "102",
         short_desc: "Weapons",
         offered: "sem1"
      },
       {
         title: "Bio",
         category: "Med",
         category_num: "103",
         short_desc: "uhhhhh",
         offered: "sem1"
      }
   ],
   major: [
      {
         title: "BioMechanice",
      },
       {
         title: "BigOOOOOF",
      },
   },
} 

// print different properties of your objects
console.log("First name of person: " + person.firstName);
for (i in person.phoneNumbers) {
    console.log("Phone number: " + person.phoneNumbers[i].number);
}
