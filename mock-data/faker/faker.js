import { faker } from '@faker-js/faker';
import fs from 'fs'
import { FILES } from './base64_files/files.js';

function generateUsers() {

  const users = []

  for (let id=1; id <= 100; id++) {
    const avatar = Math.floor(Math.random() * FILES.length);
    users.push({
        id: id,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: FILES[avatar],
        createAt: faker.date.past(),
        updateAt: "",
    });
  }

  return { users: users }
}

let dataObj = generateUsers();

fs.writeFileSync('../data/db.json', JSON.stringify(dataObj, null, '\t'));
