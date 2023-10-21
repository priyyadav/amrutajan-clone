const carousel1 = document.querySelector(".carousel-1");
const wrapper1 = document.querySelector(".wrapper-1");
const arrowBtns1 = [...document.querySelectorAll(".c1-btn")];
const imgsCarousel1 = [...document.querySelectorAll(".slide-1")]

//function to change button Opacity depending on currentscroll position
setOpacity = (carousel, arrBtn) => {
    const maxScroll = (carousel.scrollWidth - carousel.clientWidth);
    if (carousel.scrollLeft <= 1) {
        arrBtn[0].style.opacity = 0.4;
        arrBtn[1].style.opacity = 1;
    }
    else if (maxScroll - carousel.scrollLeft <= 1) {
        arrBtn[0].style.opacity = 1;
        arrBtn[1].style.opacity = 0.4;
    }
    else {
        arrBtn[0].style.opacity = 1;
        arrBtn[1].style.opacity = 1;
    }
}


arrowBtns1.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const imgWidthC1 = carousel1.clientWidth;
        carousel1.scrollLeft += btn.id === "l1" ? -imgWidthC1 : imgWidthC1;
    })
})

wrapper1.addEventListener('mouseover', () => {
    setOpacity(carousel1, arrowBtns1);
})

wrapper1.addEventListener('mouseout', () => {
    arrowBtns1.forEach(btn => btn.style.opacity = 0);
})

// second carousel
const carousel2 = document.querySelector('.carousel-2');
const arrowBtns2 = [...document.querySelectorAll(".c2-btn")];

arrowBtns2.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const imgWidthC1 = (carousel2.scrollWidth) / 4 + 10;
        carousel2.scrollLeft += btn.id === "l2" ? -imgWidthC1 : imgWidthC1;
    })
})

/*let isDragStart=false, prevPageX, prevScroll;

const dragStart=(e)=>{
    isDragStart=true;
    e.target.classList.add("dragging");
    // initial cursor position and position of carousel
    prevPageX=e.pageX;
    prevScroll=e.target.scrollLeft;
}

const dragStop=(e)=>{
    isDragStart=false;
    e.target.classList.remove("dragging");
}

const dragging=(e)=>{
    if(!isDragStart) return;
    e.preventDefault();
    console.log(e.pageX);
    let positionDiff=e.pageX-prevPageX;
    carousel2.scrollLeft=prevScroll-(positionDiff);
}

carousel2.addEventListener('mousedown',dragStart);
carousel2.addEventListener('mousemove',dragging);
carousel2.addEventListener('mouseout',dragStop);*/

// video section (sec-5)
const carousel3 = document.querySelector('.carousel-3');
const videos1 = [...document.querySelectorAll('.vid-card-1')];

videos1.forEach(vid => {
    vid.addEventListener('mouseover', (e) => {
        vid.children[0].play();
        vid.children[0].muted = !vid.children[0].muted;
    });
    vid.addEventListener('mouseout', (e) => {
        vid.children[0].pause();
        vid.children[0].muted = !vid.children[0].muted;
    });
})

const arrowBtns3 = [...document.querySelectorAll('.c3-btn')];

arrowBtns3.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const imgWidthC1 = (carousel3.clientWidth) + 20;
        carousel3.scrollLeft += btn.id === "l3" ? -imgWidthC1 : imgWidthC1;
    });
});

// section 11
const slideContainer = document.querySelector('.s11-wrapper');
const slide = document.querySelector('.s11-img-container');
let slideImgs = document.querySelectorAll('.s11-img');

const rightScroll = () => {
    slide.scrollLeft -= slideImgs[0].clientWidth * slideImgs.length;
}

slideContainer.addEventListener("mouseout", rightScroll);

// section12
const carousel4 = document.querySelector('.carousel-4');
const videos2 = [...document.querySelectorAll('.vid-card-2')];

videos2.forEach(vid => {
    vid.addEventListener('mouseover', (e) => {
        vid.children[0].play();
        vid.children[0].muted = !vid.children[0].muted;
    });
    vid.addEventListener('mouseout', (e) => {
        vid.children[0].pause();
        vid.children[0].muted = !vid.children[0].muted;
    });
})

const arrowBtns4 = [...document.querySelectorAll('.c4-btn')];

arrowBtns4.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const imgWidthC1 = (carousel4.clientWidth) + 20;
        carousel4.scrollLeft += btn.id === "l4" ? -imgWidthC1 : imgWidthC1;
    });
});

// section 3 increment decrement on + -
const add = document.querySelector('.add-btn');
const remove = document.querySelector('.remove-btn');
const netQty = document.querySelector('.qty');

add.addEventListener('click', (e) => {
    netQty.value++;
})

remove.addEventListener('click', (e) => {
    if (netQty.value > 1) netQty.value--;
    else netQty.value = '';
})









const usercredentials = new Map([

]);

function setUserCredentials(email, password) {

    usercredentials.set(email, password);

}

function GetUserCredentials(email, password) {
    try {
        if (usercredentials.has(email) === false) {
            console.log("User has not signed in yet");
            throw new Error("User has not signed in yet");
        }

        const password_stored = usercredentials.get(email);

        if (password !== password_stored) {
            console.log("Wrong Password");
            throw new Error("Wrong Password");
        }
    } catch (error) {
        // Handle the error or log it as needed
        console.error(error);
    }
}




const formContainer = document.getElementById("formContainer");
const successPopup = document.getElementById("successPopup");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const userIcon = document.getElementById("userIcon");
const closePopup = document.getElementById("closePopup");

// Define a map to store user credentials
const userCredentials = new Map();

// Check if a user is already present
function isUserPresent(email) {
    return userCredentials.has(email);
}

function showForm() {
    formContainer.style.display = 'block';

    // Check if the user is present and enable/disable buttons accordingly
    if (isUserPresent(emailInput.value)) {
        loginButton.disabled = false;
        registerButton.disabled = true;
    } else {
        loginButton.disabled = true;
        registerButton.disabled = false;
    }
}

function login() {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Perform login logic here
    if (isUserPresent(email)) {
        const storedPassword = userCredentials.get(email);

        if (password === storedPassword) {
            // Successful login logic
            // You can add a message to the modal here
            formContainer.innerHTML = '<p>Login successful!</p>';
        } else {
            // Display an error message in the modal
            formContainer.innerHTML = '<p>Login failed. Please check your credentials.</p>';
        }
    } else {
        // User not found
        formContainer.innerHTML = '<p>User not found. Please register.</p>';
    }
}

function register() {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (isUserPresent(email)) {
        formContainer.innerHTML = '<p>User with this email already exists. Please use a different email.</p>';
    } else {
        userCredentials.set(email, password);
        // Show the registration success popup
        successPopup.style.display = 'flex';
        // Hide the form after registration
        formContainer.style.display = 'none';

        // Fill the formContainer with the registration message
        formContainer.innerHTML = '<p>Registration successful!</p>';
    }
}
// Event listener for showing the form when clicking on the user icon
userIcon.addEventListener('click', showForm);

// You can also add an event listener to close the form when clicking outside of it
document.addEventListener('click', function (event) {
    if (event.target !== formContainer && event.target !== userIcon && !formContainer.contains(event.target)) {
        formContainer.style.display = 'none';
    }
});

closePopup.addEventListener('click', function () {
    successPopup.style.display = 'none';
});

function showForm() {
    formContainer.style.display = 'block';
}



userIcon.addEventListener('click', function (event) {
    showForm();
    event.stopPropagation(); // Prevent the click event from propagating to the document
});

document.addEventListener('click', function (event) {
    // Exclude the form input fields from closing the form
    if (
        event.target !== userIcon &&
        event.target !== formContainer &&
        !formContainer.contains(event.target)
    ) {
        formContainer.style.display = 'none';
    }
});

// Get all cart icons (cart images) on the page
// Get all cart icons (cart images) on the page
const cartIcons = document.querySelectorAll(".cart-icon");

// Get the cart length element
const cartLengthElement = document.querySelector(".cart-length");

// Get the cart modal, close button, and cart item list
const cartModal = document.getElementById("cartModal");
const closeBtn = cartModal.querySelector(".close");
const cartItemList = cartModal.querySelector("#cartItemList");

// Initialize the cart length and cart content
let cartLength = 0;
const cart = [];

// Add a click event listener to each cart icon
cartIcons.forEach((cartIcon, index) => {
    cartIcon.addEventListener("click", function () {
        // Add the clicked item to the cart
        const item = {
            id: index + 1, // You can use a unique identifier for each item
            name: "Amrutam Kuntal Care Hair Spa", // Item name
            price: 649.00 // Item price
        };

        // Increment the cart length
        cartLength++;
        // Update the cart length display
        cartLengthElement.textContent = cartLength;

        // Add the item to the cart content
        cart.push(item);

        // Display the cart modal with the item list
        cartModal.style.display = "block";

        // Clear the existing items in the cart item list
        cartItemList.innerHTML = "item is added";

        // Add the items to the cart item list


        // Close the modal when the close button is clicked
        closeBtn.addEventListener("click", function () {
            cartModal.style.display = "none";
        });
    });
});


