const { Model } = require('objection');
const knex = require('../config/dbConfig')
Model.knex(knex);
module.exports = class Facebook extends Model {
  static get tableName() {
    return 'facebook';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['facebook_id'],
      properties: {
        id: { type: 'integer' },
        facebook_id: { type: 'string' },
        DisplayName: { type: 'string' },
        DateTime: { type: 'string' }

      }
    }

  }
}