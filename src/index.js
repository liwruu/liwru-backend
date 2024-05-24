import app from './app.js';
import { sequelize } from './database/database.js';

//Importado de tablas
import './models/Author.js'
import './models/Editorial.js'
import './models/MaterialType.js'


async function main(){
    try{
        await sequelize.sync({force: true}); //Crea las tablas droppeandolas primero si existen
        app.listen(4000);
        console.log('Server is listening por 4000')
        console.log('Connection has been established successfully.');
    } catch(e){
        console.error('Unable to connect to the database:', e);
    }
}

main();