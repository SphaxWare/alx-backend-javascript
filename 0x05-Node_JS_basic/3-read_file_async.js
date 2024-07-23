const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  // Read the file asynchronously
  let result;
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // Split the file content by new lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header line
    const header = lines.shift();

    if (header === undefined) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // Initialize a map to store the students by field
    const studentsByField = {};

    // Process each line
    lines.forEach((line) => {
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
    result = `Number of students: ${totalStudents}`;

    // Log the number of students in each field
    for (const [field, students] of Object.entries(studentsByField)) {
      result += '\n'
      result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
    }
    console.log(result)

    resolve(result);
  });
});

module.exports = countStudents;
