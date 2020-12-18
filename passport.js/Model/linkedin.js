const { Model } = require('objection');
const knex = require('../config/dbConfig')
Model.knex(knex);
module.exports = class Linkedin extends Model {
  static get tableName() {
    return 'linkedin';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['linkedin_id'],
      properties: {
        id: { type: 'integer' },
        linkedin_id: { type: 'string' },
        DisplayName: { type: 'string' },
        DateTime: { type: 'string' }
      }
    }

  }
}