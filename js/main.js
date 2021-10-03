const menu = document.querySelector(".menu");
const nav = document.querySelector(".navbar");

// Set Initial State Of Menu
let showMenu = false;

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    nav.classList.add("nav-active");

    // Set Menu State
    showMenu = true;
  } else {
    nav.classList.remove("nav-active");

    // Set Menu State
    showMenu = false;
  }
}
var cookiePermission = getCookie("CookiePermission");

function getCookie(cookieName) {
  var cookieArr = document.cookie.split(";");

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");

    /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
    if (cookieName == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

if (cookiePermission === "full") {
  console.log("Google Analytics aktiv.");
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-MDTF1QX7WS");
}

var currentURL = window.location.href;
var cookiePermission = getCookie("CookiePermission");
var banner = document.getElementById("banner");

function getCookie(cookieName) {
  var cookieArr = document.cookie.split(";");

  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");

    /* Removing whitespace at the beginning of the cookie name
                and compare it with the given string */
    if (cookieName == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

function setCookie(permission) {
  var cookiePremission = "CookiePermission=" + permission;
  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();

  // set a cookie
  document.cookie = cookiePremission + ";" + "expires=" + expires + ";";
}

function akzeptieren() {
  setCookie("full");

  // redirect to the current URl with permission for Tracking
  location.replace(currentURL);
}

function ablehnen() {
  setCookie("necessary");

  // redirect to the current URl without permission for Tracking
  location.replace(currentURL);
}

if (cookiePermission == "full" || cookiePermission == "necessary") {
  banner.style.display = "none";
}
