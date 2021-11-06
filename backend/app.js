const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const port = 3001;
//const port = 3306;
const bluebird = require('bluebird');
const { response } = require('express');



let connection;


app.use(express.json());
app.use(cors({ origin: true }));
app.set('port', process.env.PORT || port);

app.get("/", async (req, res) => {
  res.json("my Backend misiontic")
})

app.get("/get-products", async (req, res) => {
    const [row, fields] = await connection.execute("SELECT * FROM productos");
    res.json({ data: row });

})

app.get("/get-ventas", async (req, res) => {
    const [row, fields] = await connection.execute("SELECT * FROM ventas");
    res.json({ data: row });
})

app.get("/get-usuarios", async (req, res) => {    
    const [row, fields] = await connection.execute("SELECT * FROM usuarios");
    res.json({data: row});
})

/*app.get("/get-usuarios", async (req, res) => {  
    const email = req.query.email;  
    const [row, fields] = await connection.execute(`SELECT * FROM usuarios WHERE email='${email}'`);
    res.json(row[0]);
})*/

app.post("/post-products", async (req, res) => {
    try {
        const { descripcion, valor, estado } = req.body;
        await connection.execute(`INSERT INTO productos(descripcion, valor, estado) VALUES('${descripcion}', ${valor}, '${estado}')`);
        res.json({ status: "ok" });
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
})

app.post("/post-ventas", async (req, res) => {
    try {
        const { valorTotal, idProduct, cantProduct, valorProduct, fechaVenta, nameCliente, idCliente, vendedor, estadoVentas } = req.body;
        await connection.execute(`INSERT INTO ventas(valorTotal, idProduct, cantProduct, valorProduct, fechaVenta, nameCliente, idCliente, vendedor, estadoVentas) VALUES(${valorTotal}, ${idProduct}, ${cantProduct}, ${valorProduct}, '${fechaVenta}', '${nameCliente}', ${idCliente}, '${vendedor}', '${estadoVentas}')`);
        res.json({ status: "ok" });
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
})

app.post("/post-usuarios", async (req, res) => {
    try {
        const { name, role, email, estado } = req.body;
        await connection.execute(`INSERT INTO usuarios(name, role, email, estado) VALUES('${name}', '${role}', '${email}', '${estado}')`);
        res.json({ status: "ok" });
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
})


app.listen(app.get('port'), async () => {
 /*  connection = await mysql.createConnection({
        host: 'sql10.freesqldatabase.com',
        user: 'sql10446827',
        password: 'dcdCFt51lB',
        database: 'sql10446827',
        port: 3306,
        Promise: bluebird
    });*/
    console.log("server runnig on port" + port);
});

