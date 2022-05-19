import Dozent from './Dozent';
import {Mitarbeiter} from './Mitarbeiter';
import Student from './Student';

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      let t = 1;
      resolve(`Resolved: ${(t += 1)}`);
    }, 2000);
  });
}

const App = async () => {
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Instanz Dozent
  const dozent = new Dozent(
    'Anne Mustermann',
    'München',
    22,
    '1999-02-11',
    'Dozent',
    5,
    true,
    4,
    ['Einführung in die Chemie'],
    ['Chemie', 'Mathematik'],
    'Selbstständig'
  );
  dozent.allInfos();
  // Instanz Mitarbeiter
  const mitarbeiter = new Mitarbeiter(
    'Yasmin Cöl',
    'Koblenz',
    25,
    '1997-02-11',
    1,
    ['Sicherheit'],
    100
  );
  mitarbeiter.allInfos();

  // Instanz Student
  const student = new Student(
    'Christoph',
    'Nürnberg',
    35,
    '1987-02-11',
    'Angewandte Informatik',
    '5 Jahre',
    ['Datenbanken', ' Mathematik', 'OOP'],
    ['Einführung OOP'],
    '2020-09-15',
    'Master'
  );
  student.allInfos();
  student.displayPCounter();
};

App().catch(err => {
  console.error('Main-App Error: ', err);
});
