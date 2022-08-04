//Requiere a filesystem
const fs = require('fs');

fs.writeFileSync('./.env', `API=${process.env.API}/n`)

//Ejecutamos este script desde package.json