    const skills = [
        "Languages: C++, ReactJS (Javascript), SQL, HTML/CSS, Python, could do Java if forced",
        "Developer Tools: GitHub, VSCode, Android Studio, MariaDB, Doxygen",
        "Other: Microsoft Office 365, Unix, Windows"
    ];

    const skillsDescription = `
         <div style="text-align: center;">
         <img src="assets/dusky.png" alt="Description" style="width:px; height:300px; border-radius:2px;">
         </div>
    `;

    const container = document.getElementById("skills-container");

    //create left card for skills list
    const leftCard = document.createElement("div");
    leftCard.className = "side-box-left";

    const ul = document.createElement("ul");
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
    });

    leftCard.appendChild(ul);

    //create right card for description
    const rightCard = document.createElement("div");
    rightCard.className = "side-box-right";
    rightCard.innerHTML = `<p>${skillsDescription}</p>`;

    //append both cards to container
    container.appendChild(leftCard);
    container.appendChild(rightCard);

    //font sizes
    rightCard.style.fontSize = "30px";  // Make text bigger here
    leftCard.style.fontSize = "30px";
    