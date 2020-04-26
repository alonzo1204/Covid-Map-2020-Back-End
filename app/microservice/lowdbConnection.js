const lowdb = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

new FileAsync('DB.json')
let db;
async function createConnectionLowdb(){
    const adapter = new FileAsync('DB.json')
    db = await lowdb(adapter)
    db.defaults({data:[]}).write()
}
const getConnection = () => db

module.exports ={
    createConnectionLowdb,
    getConnection
}