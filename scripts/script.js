document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const country = document.querySelector('select').value;

    if (!name || !email || !phone || country === "Select Country Preference") {
        alert("Please complete all fields correctly");
    } else {
        alert("Form submitted successfully!");
    }
});

const universityInfo = [
    "Study MBBS in Russia: Low-cost, world-class education with global recognition.",
    "Study MBBS in Uzbekistan: WHO and MCI-approved universities with quality education.",
    "Study MBBS in Kazakhstan: Modern facilities, English-medium, and affordable tuition.",
    "Study MBBS in Philippines: Globally accepted degree with a tropical environment.",
    "Study MBBS in Georgia: European-standard medical education at an affordable cost.",
    "Study MBBS in Kyrgyzstan: No donation, low fees, and high-quality medical education.",
    "Study MBBS in Egypt: Affordable living costs with a cultural and medical history."
];

let currentIndex = 0;
const textContainer = document.getElementById("university-text");

function changeText() {
    textContainer.textContent = universityInfo[currentIndex];
    currentIndex = (currentIndex + 1) % universityInfo.length;
}

setInterval(changeText, 5000);
changeText();
