const fs = require('fs')
const path = require('path')

// // Criar uma pasta
// fs.mkdir(path.join(__dirname, '/newpaste'), (error) => {
//       if (error) {
//       return console.log('Erro: ', error)
//       }

//       console.log('Pasta criada com sucesso!');
// });


// Criar um arquivo
// fs.writeFile(path.join(__dirname, '/newpaste', 'test.txt'), 'hello world!', (error) => {
//       if (error) {
//       return   console.log('Erro: ', error)
//       }
//       console.log('Você criou um arquivo!');
// });


// Adicionar a um arquivo
// fs.appendFile(path.join(__dirname, '/newpaste', 'test.txt'), 'hello world e hello world', (error) => {
//       if (error) {
//       return console.log('Erro: ', error)
//       }
      
//       console.log('Você adicionou um algo ao arquivo!')
// });


// Ler arquivo
// fs.readFile(path.join(__dirname, '/newpaste', 'test.txt'), 'utf-8', (error, data) => {
//       if (error) {
//       return console.log('Erro: ', error)
//       }
      
//       console.log(data)
// });