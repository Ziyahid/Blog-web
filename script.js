const all = document.getElementById("all");
const design = document.getElementById("design");
const tech = document.getElementById("tech");
const mobile = document.getElementById("mobile");
const dPost = document.getElementById("dpost");
const mPost = document.getElementById("mpost");
const tPost = document.getElementById("tpost");
const cardContainer = document.getElementById("card-container")

function showContent(event) {
    const allTabs = document.querySelectorAll("ul li");
    allTabs.forEach(tab => tab.classList.remove("active"));
    const selectedTab = event.target;
    selectedTab.classList.add("active");
    console.log(`Showing content for: ${event.target.id}`);


    const allCards = document.querySelectorAll(".card");

  
    allCards.forEach(card => {
        
        if (selectedTab.id === "all" || card.id === `${selectedTab.id}post`) {
            
            card.style.display = "flex"; 
            setTimeout(() => card.style.opacity = "1", 100);
        } else {
            
            card.style.opacity = "0"; 
            setTimeout(() => card.style.display = "none", 500);
        }
    });
}



function nav() {
    if (window.scrollY >= 300) {
        document.querySelector('nav').style.backgroundColor = "white";
        document.querySelector('nav').style.color = "black"
    } else {
        document.querySelector('nav').style.backgroundColor = "rgb(22, 32, 32)"; 
        document.querySelector('nav').style.color = "white";
    }
}

window.addEventListener('scroll', nav);
    
