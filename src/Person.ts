// An unserer Uni sind unterschiedliche Personen tätig: Angestellte, Dozenten, Mittarbeiter, Studenten usw.

import {Hochschulen} from './Hochschulen';

class Person extends Hochschulen {
  name: string;
  wohnort: string;
  alter: number;
  geburtsdatum: Date;
  static countPersons = 0;
  // Die Standardsichtbarkeit von Klassenmitgliedern ist public. Auf ein public Eigenschaft kann überall zugegriffen werden.
  // protected Eigenschaften sind nur für Unterklassen der Klasse sichtbar, in der sie deklariert sind.
  // private erlaubt nur Klassen-Mitgliedern und Klassen-Methoden den Zugriff.
  // Klassenmitgliedern doe private sind, werden Getter und Setter definiert.

  // Gundsätzlich ist es möglich den Konstruktor zu überladen, es bdarf aber einer
  // zusätzlichen Logik um festzustellen, welcher Konstruktor verwendet wurde.
  // Besser ist es Optionals zu verwenden.
  constructor();
  constructor(name: string);
  constructor(name: string, wohnort: string);
  constructor(name: string, wohnort: string, alter: number);
  constructor(
    name: string,
    wohnort: string,
    alter: number,
    geburtsdatum: string
  );
  // entspricht einer allgemeinen Logik, bei der abhängig von den
  // verwendeten Argumenten der Sonderfall der Objekterstellung verwendet wird:
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: Array<any>) {
    super('Alma Mater Lipsiensis', 'Leipzig', 5);
    // überladenen Konstruktor prüfen
    if (args.length === 0) throw new Error('Alle Argumente sind undefined.');
    this.name = args[0];
    this.wohnort = args[1];
    this.alter = args[2];
    this.geburtsdatum = new Date(args[3]);
    Person.countPersons++;
    console.log(
      'All Props in Person: ',
      this.name,
      this.wohnort,
      this.alter,
      this.geburtsdatum.toLocaleDateString()
    );
  }

  getName(): string {
    return this.name;
  }

  getWohnort(): string {
    return this.wohnort;
  }

  getUniName(): string {
    return super.uni_name;
  }

  getUniStadt() {
    return super.uni_stadt;
  }

  displayPCounter(): void {
    console.log('Anzahl instanzierter Personen = ' + Person.countPersons);
  }
}

export {Person};
