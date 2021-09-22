function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SA4kJyU6b/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("Model is Ready!!");
}