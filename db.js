const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'db_login',
    connectionLimit:5,
});

const connect = async () => {
    try{
        const conn = await pool.getConnection();
        console.log("Conexão com o banco de dados foi um sucesso")
        conn.release();
    } catch(err){
        console.log("erro ao se conectar com o banco",err)
    }
};

module.exports={connect,pool};