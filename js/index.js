const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// image sources
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const circularSnip = document.getElementById("cta-img");
circularSnip.setAttribute('src', siteContent["cta"]["img-src"])

const blockSnip = document.getElementById("middle-img");
blockSnip.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// nav bar
let navAll = document.querySelectorAll('nav a');
navAll.forEach( element => {
  element.style.color = "lime"
})

let navAppend = document.createElement('a');
navAppend.textContent = 'Help';
navAppend.style.color = 'lime';
let navPrepend = document.createElement('a');
navPrepend.textContent = 'Review';
navPrepend.style.color = 'lime';
const Nav = document.querySelector('nav')

Nav.append(navAppend);
Nav.prepend(navPrepend);

const nav1 = document.querySelector('a:nth-child(2)');
nav1.textContent = siteContent["nav"]["nav-item-1"];

const nav2 = document.querySelector('a:nth-child(3)');
nav2.textContent = siteContent["nav"]["nav-item-2"];

const nav3 = document.querySelector('a:nth-child(4)');
nav3.textContent = siteContent["nav"]["nav-item-3"];

const nav4 = document.querySelector('a:nth-child(5)');
nav4.textContent = siteContent["nav"]["nav-item-4"];

const nav5 = document.querySelector('a:nth-child(6)');
nav5.textContent = siteContent["nav"]["nav-item-5"];

const nav6 = document.querySelector('a:nth-child(7)');
nav6.textContent = siteContent["nav"]["nav-item-6"];

// cta section
const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];

//middle section
//top-content
//Features
const features = document.querySelector('.main-content .top-content h4:first-child');
features.textContent = siteContent["main-content"]["features-h4"]


const featuresText = document.querySelector('.main-content .top-content p');
featuresText.textContent = siteContent["main-content"]["features-content"]

//About
const About = document.querySelector('.main-content .top-content div:nth-child(2) h4');
About.textContent = siteContent["main-content"]["about-h4"]

const AboutText = document.querySelector('.main-content .top-content div:nth-child(2) p');
AboutText.textContent = siteContent["main-content"]["about-content"]
//Services
const services = document.querySelector('.main-content .bottom-content h4:first-child');
services.textContent = siteContent["main-content"]["services-h4"]

const servicesText = document.querySelector('.main-content .bottom-content p');
servicesText.textContent = siteContent["main-content"]["services-content"]

//Product
const product = document.querySelector('.main-content .bottom-content div:nth-child(2) h4');
product.textContent = siteContent["main-content"]["product-h4"]
const productText = document.querySelector('.main-content .bottom-content div:nth-child(2) p');
productText.textContent = siteContent["main-content"]["product-content"]


//Vision
const vision = document.querySelector('.main-content .bottom-content div:nth-child(3) h4');
vision.textContent = siteContent["main-content"]["vision-h4"]
const visionText = document.querySelector('.main-content .bottom-content div:nth-child(3) p');
visionText.textContent = siteContent["main-content"]["product-content"]

//Contact
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent["contact"]["contact-h4"]
const contactAddress = document.querySelector('.contact p:nth-child(2)');
contactAddress.textContent = siteContent["contact"]["address"]
const contactPhone = document.querySelector('.contact p:nth-child(3)');
contactPhone.textContent = siteContent["contact"]["phone"];
const contactEmail = document.querySelector('.contact p:nth-child(4)');
contactEmail.textContent = siteContent["contact"]["email"]

//footer
const footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"];