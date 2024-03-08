const imagesWithQuotes = [
    {
        url: "https://contents.mediadecathlon.com/s995064/k$916561e027be4dcc869a57881d25b8db/1920x0/3000pt1197/6000xcr3375/default.jpeg?format=auto",
        quote: "Strive for excellence through dedicated practice in the realm of sports."
    },
    {
        url: "https://miro.medium.com/v2/resize:fit:1200/1*P_H_UpQahH0juwQpXWXnpQ.jpeg",
        quote: "Unleash innovation through the power of coding and script your future."
    },
    {
        url: "https://media.wired.com/photos/627da1085d49787abdf713b4/master/pass/Pakistani-Gamers-Want-a-Seat-at-the-Table-Culture-shutterstock_1949862841.jpg",
        quote: "Exercise strategic thinking and stimulate intellect with engaging games."
    },
    {
        url: "https://media.istockphoto.com/id/1138295318/photo/young-asia-student-study-in-the-public-library-she-making-note-on-notebook-and-using-laptop.jpg?s=612x612&w=0&k=20&c=PDnXWwvHjJnDSaKOxT9Vdj8VwJx2mBJd7Yg0DkjL-2g=",
        quote: "Pursue knowledge as the catalyst for progress and lifelong learning."
    },
    {
        url: "https://damoclesjournal.files.wordpress.com/2022/02/0x0.jpg",
        quote: "Expand cultural horizons and broaden perspectives through purposeful travel."
    },
    {
        url: "https://sg1.gffoodservice.com.au/content/uploads/2019/08/culinary_terms-hero-1-@2x-1.jpg",
        quote: "Refine culinary prowess and embark on epicurean adventures in cooking."
    },
];

let currentIndex = 0;

function changeImage() {
    const currentImage = imagesWithQuotes[currentIndex];
    postMessage({ url: currentImage.url, quote: currentImage.quote });
    currentIndex = (currentIndex + 1) % imagesWithQuotes.length;
}

changeImage();
setInterval(changeImage, 5000);