const { Model } = require('objection');
const knex = require('../config/dbConfig')
Model.knex(knex);
module.exports = class Google extends Model {
  static get tableName() {
    return 'google';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email'],
      properties: {
        id: { type: 'integer' },
        google_id: { type: 'string' },
        DisplayName: { type: 'string' },
        email: { type: 'string' },
        picture: { type: 'string' },
        DateTime: { type: 'string' }

      }
    }

  }
}