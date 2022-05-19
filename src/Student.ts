// Klasse der Mitarbeiter erbt von der Klasse Person
import {Person} from './Person';

class Student extends Person {
  // Eigenschaften Student:
  studienfach: string; // Studenten
  studienzeit: string | number;
  seminare: string[];
  lehrplan: string[];
  immatrikulation: Date;
  abschluss: 'Master' | 'Diplom' | 'Bachelor';

  constructor(
    // Person class
    name: string,
    wohnort: string,
    alter: number,
    geburtsdatum: string,
    // Argumente zu Student
    studienfach: string,
    studienzeit: string | number,
    seminare: string[],
    lehrplan: string[],
    immatrikulation: string,
    abschluss: 'Master' | 'Diplom' | 'Bachelor'
  ) {
    super(name, wohnort, alter, geburtsdatum);
    this.studienfach = studienfach;
    this.studienzeit = studienzeit;
    this.seminare = seminare;
    this.lehrplan = lehrplan;
    this.immatrikulation = new Date(immatrikulation);
    this.abschluss = abschluss;
  }

  // Verhalten: Methoden bezw. Funktionen
  getLehrplan(): string[] {
    if (this.lehrplan.length > 0) {
      return this.lehrplan;
    }
    return [];
  }

  allInfos(): void {
    const studienfach =
      this.studienfach === '' ? 'Unbekannt' : this.studienfach;
    console.log(
      'Student*in: ' +
        super.getName() +
        ' aus ' +
        (super.getWohnort() === undefined
          ? 'einer anderen Stadt'
          : super.getWohnort()) +
        ' ist an der ' +
        this.uni_name +
        ' in ' +
        this.uni_stadt +
        ' im Studienfach ' +
        studienfach +
        ' am ' +
        this.immatrikulation.toLocaleDateString() +
        ' immatrikuliert worden.'
    );
  }
}

export default Student;
