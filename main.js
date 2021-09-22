var dog_count = 0;
var cat_count = 0;
var cow_count = 0;
var tiger_count = 0;


function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SA4kJyU6b/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log("Error : " + error);
    } else {
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("resultAnimalVoice").innerHTML = "Detected voice is of " + results[0].label;
        document.getElementById("resultAnimal").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("resultAnimalVoice").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        if (results[0].label == "Barking") {
            document.getElementById("imgAnimal").src = "dog.gif";
            dog_count = dog_count + 1;
        } else
        if (results[0].label == "Meowing") {
            document.getElementById("imgAnimal").src = "cat.gif";
            cat_count = cat_count + 1;
        } else if (results[0].label == "Mooing") {
            document.getElementById("imgAnimal").src = "cow.gif";
            cow_count = cow_count + 1;
        } else if (results[0].label == "Roaring") {
            document.getElementById("imgAnimal").src = "Tigers.gif";
            tiger_count = tiger_count + 1;
        } else {
            document.getElementById("imgAnimal").src = "ear.gif";
        }
        document.getElementById("resultAnimal").innerHTML = "Detected Dogs : " + dog_count + " Detected Cats : " + cat_count + "<br>Detected Cows : " + cow_count + " Detected Tigers : " + tiger_count;
    }
}