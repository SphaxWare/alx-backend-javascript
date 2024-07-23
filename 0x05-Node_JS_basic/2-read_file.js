const fs = require('fs');

const countStudents = (path) => {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    console.log(`data: ${data}`)
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    // Remove the header line
    const header = lines.shift();
    console.log(`header: ${header}`)
    if (header === undefined) {
      throw new Error('Cannot load the database');
    }
    const studentsByField = {};
    lines.forEach((line) => {
      console.log(`line: ${line}`)
      const [firstname, lastname, age, field] = line.split(',');
      // Skip invalid lines
      if (!firstname || !lastname || !age || !field) {
        return;
      }

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });
    // Log the total number of students
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);
    // Log the number of students in each field
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
      throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
