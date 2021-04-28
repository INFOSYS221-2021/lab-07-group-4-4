// Example object and print statements

// Create your JavaScript objects
let student = {
   name: "John Wick",
   username: "Baba_Yaga",
   get nickname() {
       return student.name + " AKA " + student.username
   },
   courses:[
      {
         title: "course1",
         category: "cat1",
         category_num: "101",
         short_desc: "desc1",
         offered: "sem1"
      },
       {
         title: "course2",
         category: "cat2",
         category_num: "102",
         short_desc: "desc2",
         offered: "sem1"
      }
   ],
   major: [
      {
         title: "major1",
      },
       {
         title: "major2",
      }
   ]
} 

console.log(student.nickname)
