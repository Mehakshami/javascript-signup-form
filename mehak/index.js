document.getElementById("submitBtn").addEventListener("click", function() {
     

   
    let username = document.getElementById("username").value;
    let fatherName = document.getElementById("fatherName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

   
    if (username === "" || fatherName === "" || email === "" || password === "") {
        alert("All fields are required. Please fill in all the information.");
    } else {
        console.log("Full Name: " + username);
        console.log("Father's Name: " + fatherName);
        console.log("Email: " + email);
        console.log("Password: " + password);
    }
});
