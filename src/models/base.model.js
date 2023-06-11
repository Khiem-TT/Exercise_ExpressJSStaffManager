const databaseModel = require('./database.model');

class BaseModel {
    constructor() {
        this.connect = databaseModel.connectDB();
    }

    querySQL(sql) {
        return new Promise((resolve, reject) => {
            this.connect.query(sql, (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = new BaseModel();