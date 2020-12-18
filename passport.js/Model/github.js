const { Model } = require('objection');
const knex = require('../config/dbConfig')
Model.knex(knex);
module.exports = class Github extends Model {
  static get tableName() {
    return 'github';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['github_id'],
      properties: {
        id: { type: 'integer' },
        github_id: { type: 'string' },
        DisplayName: { type: 'string' },
        DateTime: {type: 'string'}

      }
    }

  }
}