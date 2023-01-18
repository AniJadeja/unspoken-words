/* 

    Home js which includes all the js used by home webpage
    
    Author : Anirudhsinh Jadeja
    Copyrighted content. 
    Copying or using the content for any personal or professional use is prohibited.

    You may read the code to research.

*/

/* ======================== HOME.JS ======================== */


// Declaring constants to access it easily

let navHome = document.getElementById('navHome');
let navAboutMe = document.getElementById('navAboutMe');
let navProjects = document.getElementById('navProjects');
let navAvocations = document.getElementById('navAvocations');
let navResume = document.getElementById('navResume');

// Changing classes to indicate the current webpage

navHome.className = "navSelected disabled";
navAboutMe.className = "navUnselected";
navProjects.className = "navUnselected";
navAvocations.className = "navUnselected";
navResume.className = "navUnselected";