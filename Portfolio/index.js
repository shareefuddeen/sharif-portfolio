// Select elements with specific classes
let right = document.querySelectorAll('.animate-from-right');
let left = document.querySelectorAll('.animate-from-left');
let images = document.querySelectorAll('.animate-image');
let images_women = document.querySelectorAll('.animate-image-women');

// Function to trigger animations
window.onscroll = () => {
    // Loop through sections and apply animation logic
    right.forEach(sec => {
        let top = window.scrollY - 150;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset - window.innerHeight && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Loop through headings and apply animation logic
    left.forEach(heading => {
        let top = window.scrollY - 150;
        let offset = heading.offsetTop;
        let height = heading.offsetHeight;

        if (top >= offset - window.innerHeight && top < offset + height) {
            heading.classList.add('show-animate');
        } else {
            heading.classList.remove('show-animate');
        }
    });

    // Loop through images and apply animation logic
    images.forEach(img => {
        let top = window.scrollY - 150;
        let offset = img.offsetTop;
        let height = img.offsetHeight;

        if (top >= offset - window.innerHeight && top < offset + height) {
            img.classList.add('show-animate');
        } else {
            img.classList.remove('show-animate');
        }
    });

    
     images_women.forEach(heading => {
        let top = window.scrollY - 150;
        let offset = heading.offsetTop;
        let height = heading.offsetHeight;

        if (top >= offset - window.innerHeight && top < offset + height) {
            heading.classList.add('show-animate');
        } else {
            heading.classList.remove('show-animate');
        }
    });
}
