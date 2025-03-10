// Task 2: Adding Support Tickets Dynamically
 // Writing a function to create a new support ticket
 function addSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById("ticketContainer"); // Selecting the ticket container where tickets will be added

    // Creating a div element to represent the ticket 
    const ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket-card"); // Setting class attribute 

    // Creating a heading for the customer's name 
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = customerName;

    // Creating a paragraph for the issue description
    const issueParagraph = document.createElement("p");
    issueParagraph.textContent = issueDescription;

    // Creating a label indicating priority level
    const priorityLabel = document.createElement("p");
    priorityLabel.innerHTML = `<strong>Priority:</strong> ${priorityLevel}`; 

    // Creating a resolve button to remove the ticket
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", (event) => {
       ticketContainer.removeChild(ticket); // Adding an event listener for the click event 
       event.stopPropagation(); // Task 4 - Preventing event bubbling to container
    });
 }
 