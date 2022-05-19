// An unserer Uni gibt es unterschiedliche Tätigkeitsbereiche: Angestellte, Dozenten, Mitarbeiter, Studenten usw.

// Klassen bestehen aus einem Bezeichner, Eigenschaften und Verhalten
// Klassen nutzen: Abstraktion, Kapselung, Vererbung
class Hochschulen {
  // Eigenschaften der Hochschule
  constructor(
    private _uni_name: string,
    private _uni_stadt: string,
    public uni_ranking: number
  ) {}

  public get uni_name(): string {
    return this._uni_name;
  }

  public set uni_name(uni_name: string) {
    this._uni_name = uni_name;
  }

  public get uni_stadt(): string {
    return this._uni_stadt;
  }

  public set uni_stadt(uni_stadt: string) {
    this._uni_stadt = uni_stadt;
  }
}
export {Hochschulen};
