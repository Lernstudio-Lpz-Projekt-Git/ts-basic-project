// Klasse der Mitarbeiter erbt von Person
import {Person} from './Person';

class Mitarbeiter extends Person {
  abteilung: number | string;
  aufgabenbereich: string[];
  lohnstufe: number | string;

  constructor(
    // Person class
    name: string,
    wohnort: string,
    alter: number,
    geburtsdatum: string,
    // Mitarbeiter (Verwaltung) Class
    abteilung: number | string,
    aufgabenbereich: string[],
    lohnstufe: number | string
  ) {
    super(name, wohnort, alter, geburtsdatum);
    // Mitarbeiter
    this.abteilung = abteilung;
    this.aufgabenbereich = aufgabenbereich;
    this.lohnstufe = lohnstufe;
  }

  allInfos(): void {
    const currAbteilung = this.abteilung === '' ? 'Unbekannt' : this.abteilung;
    console.log(
      'Mitarbeiter*in: ' +
        super.getName() +
        ' aus ' +
        (super.getWohnort() === undefined
          ? 'einer anderen Stadt'
          : super.getWohnort()) +
        ' ist an der ' +
        super.getUniName() +
        ' in ' +
        super.getUniStadt() +
        ' in der Abteilung ' +
        currAbteilung +
        ' als ' +
        this.aufgabenbereich[0] +
        'beschäftigt.'
    );
  }
}
export {Mitarbeiter};
