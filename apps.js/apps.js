
function generatefoam() {
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const messageInput = document.getElementById('message').value;

    const foamDetails = `
        <p><strong> Name:</strong> ${nameInput}</p>
        <p><strong>Email:</strong> ${emailInput}</p>
         <p><strong>Message:</strong> ${messageInput}</p>`;
  
    document.getElementById('foamDetails').innerHTML= foamDetails;
   
}