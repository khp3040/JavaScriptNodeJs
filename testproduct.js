const dbConnection = require('./dbconnection');

async function getProducts(id){
const conn  =  await dbConnection();
    const result = await conn.query('SELECT * from newproducts where product_id=?',[id]);
    if(result[0].length < 1){
        throw new Error('Product with this id was not found')
    }
    return result[0]

}


console.log(getProducts(2))