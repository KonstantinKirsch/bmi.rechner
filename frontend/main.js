// Füge eine Event-Listener für den "Berechne" Button hinzu
document.getElementById('calculateButton').addEventListener('click', updateUI);

// Funktion zur Aktualisierung des UI
function updateUI() {
    // Lese Gewicht und Größe aus den Eingabefeldern
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Berechne den BMI
    const bmi = calculateBMI(weight, height);

    // Zeige den BMI im UI an
    document.getElementById('result').innerText = 'Ihr BMI beträgt: ' + bmi;
}

// Funktion zur Berechnung des BMI
function calculateBMI(weight, height) {
    // Logik zur Berechnung des BMI hier
    const heightInMeters = height / 100; // Umrechnung von Zentimetern in Meter
    const bmi = Math.round(weight / (heightInMeters * heightInMeters));
    return bmi;
}