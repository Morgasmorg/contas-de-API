import express from 'express'

const servidor = express ();

servidor.get ('/calculadora/soma', (req, resp) => {
    let n1 = Number (req. query. n1);
    let n2 = Number (req. query. n2);
    let soma = n1 + n2;
    resp.send ('A soma deles é' + soma );
})

servidor.listen(5050,() => console.log('Subindo porta 5050'));