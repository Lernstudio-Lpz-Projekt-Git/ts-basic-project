// Klasse der Dozenten erbt von Person
import {Person} from './Person';

class Dozent extends Person {
  private _vertragsart: string;
  private _vertragsdauer: number;
  befristet: boolean;
  lohnstufe: number | string;
  vorlesungsplan: string[];
  dozentenprofil: string[];
  tätigkeitform: 'Selbstständig' | 'Angestellt';

  constructor(
    // Person class
    name: string,
    wohnort: string,
    alter: number,
    geburtsdatum: string,
    // Dozenten class
    vertragsart: string,
    vertragsdauer: number,
    befristet: boolean,
    lohnstufe: number,
    vorlesungsplan: string[],
    dozentenprofil: string[],
    tätigkeitform: 'Selbstständig' | 'Angestellt'
  ) {
    super(name, wohnort, alter, geburtsdatum);
    this._vertragsart = vertragsart;
    this._vertragsdauer = vertragsdauer;
    this.befristet = befristet;
    this.lohnstufe = lohnstufe;
    this.vorlesungsplan = vorlesungsplan;
    this.dozentenprofil = dozentenprofil;
    this.tätigkeitform = tätigkeitform;
  }

  public get vertragsart(): string {
    return this._vertragsart;
  }

  public set vertragsart(vertragsart: string) {
    this._vertragsart = vertragsart;
  }

  public get vertragsdauer(): number {
    return this._vertragsdauer;
  }

  public set vertragsdauer(vertragsdauer: number) {
    this._vertragsdauer = vertragsdauer;
  }

  allInfos(): void {
    const profil =
      this.dozentenprofil === [] ? 'Allgemeine Themen' : this.dozentenprofil[0];
    console.log(
      'Dozent*in: ' +
        super.getName() +
        ' aus ' +
        (super.getWohnort() === undefined
          ? 'einer anderen Stadt'
          : super.getWohnort()) +
        ' unterrichtet an der ' +
        super.getUniName() +
        ' in ' +
        super.getUniStadt() +
        ' im Fachbereich ' +
        profil +
        ' / ' +
        this.vorlesungsplan[0] +
        '.'
    );
  }
}

export default Dozent;
