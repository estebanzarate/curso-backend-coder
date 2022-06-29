const knex = require('knex');

class Container {
    constructor(config, tableName) {
        this.config = config;
        this.tableName = tableName;
        this.knex = knex(this.config);
    }
    save = obj => {
        this.knex(this.tableName).insert(obj)
            .then(() => console.log('Saved'))
            .catch(err => { console.log(err); throw err })
            .finally(() => this.knex.destroy())
    }
    getById = async id => {
        try {
            let obj = await this.knex.from(this.tableName).select().table(this.tableName).where('id', id).first();
            if (obj) {
                return obj;
            } else {
                return { message: 'ERROR' };
            }
        } catch (err) {
            return { message: 'ERROR' };
        }
    }
    getAll = async () => {
        try {
            let objs = await this.knex.from(this.tableName).select('*');
            return objs;
        } catch (err) {

        }
    }
    deleteById() {

    }
    deleteAll() {

    }
    update() {

    }
}

module.exports = Container;