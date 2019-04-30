const server = require('./api/server');

const port = process.env.PORT || 7777;

server.listen(port, () => console.log(`server is listening on port \n --**-- ${port} --**--\n`));