describe('BMI-Rechner', () => {
    it('sollte nach Eingabe von Gewicht und Größe den BMI berechnen und anzeigen', () => {
        // Eingaben für Gewicht und Größe
        const weight = 70; // Beispielgewicht
        const height = 170; // Beispielgröße

        // Eingabefelder ausfüllen
        cy.get('#weight').type(weight);
        cy.get('#height').type(height);

        // Berechne Button klicken
        cy.get('#calculateButton').click();

        // Berechneten BMI überprüfen
        const calculatedBMI = Math.round(weight / ((height / 100) * (height / 100)));
        cy.get('#result').should('contain.text', 'Ihr BMI beträgt: ' + calculatedBMI);
    });
});

/* global cy */

describe('Die Startseite', () => {
    it('wird erfolgreich geladen', () => {
        cy.visit('/index.html'); // Hier wird die richtige Seite geladen, angenommen die Startseite ist index.html
    });
});