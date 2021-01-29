//uso un Pool (conjunto de conexcciones) es la manera en que puedo conectar a postgres
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'A4721130',
    database: 'challenge_api',
    port: '5432'
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);

};

const getUserById = async (req, res) => {
    const id = req.params.id;
    //'SELECT * FROM users WHERE id = $1', [id] == seria selecciona todos los usuarios con el [id] que me estan pasando 
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows)
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json('User' + ' ' + id + ' ' + ' delete succesfully');
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { concepto, monto } = req.body;
    console.log(concepto, monto);
    const response = await pool.query('UPDATE users SET concepto =$1, monto =$2  WHERE id = $3', [concepto, monto, id])
    console.log(response);
    res.send('User' + ' ' + id + ' ' + 'Updapted')
}

const createUser = async (req, res) => {
    //me deja ver los post que haga
    const { concepto, monto, tipo, fecha } = req.body;

    const response = await pool.query('INSERT INTO users ( concepto, monto, tipo) VALUES ($1,$2,$3)', [concepto, monto, tipo]);
    console.log(response);
    res.json({
        message: 'Userr Added Succesfully',
        body: {
            userr: {
                concepto, monto, tipo
            }
        }
    });
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser,
}