const roles = ["Aspiring Developer", "Python Developer", "Full Stack Learner"];
const typingText = document.getElementById("typingText");
let roleIndex = 0, charIndex = 0, deleting = false;
function typeLoop(){
  const current = roles[roleIndex];
  typingText.textContent = current.substring(0, charIndex);
  if(!deleting && charIndex < current.length){charIndex++;setTimeout(typeLoop,95);}
  else if(!deleting){deleting=true;setTimeout(typeLoop,1200);}
  else if(charIndex > 0){charIndex--;setTimeout(typeLoop,45);}
  else{deleting=false;roleIndex=(roleIndex+1)%roles.length;setTimeout(typeLoop,300);}
}
typeLoop();
const menuToggle=document.getElementById("menuToggle"), navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>navLinks.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const sections=document.querySelectorAll("main section[id]");
const navItems=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{let current="home";sections.forEach(section=>{if(window.scrollY>=section.offsetTop-150)current=section.id;});navItems.forEach(link=>{link.classList.toggle("active",link.getAttribute("href")===`#${current}`);});});
document.getElementById("contactForm").addEventListener("submit",function(e){e.preventDefault();const name=document.getElementById("name").value.trim(),email=document.getElementById("email").value.trim(),message=document.getElementById("message").value.trim();if(!name||!email||!message)return;const subject=encodeURIComponent(`Portfolio contact from ${name}`),body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);window.location.href=`mailto:sundaramoorthi@email.com?subject=${subject}&body=${body}`;document.getElementById("formNote").textContent="Your email app should open with the message ready to send.";});
