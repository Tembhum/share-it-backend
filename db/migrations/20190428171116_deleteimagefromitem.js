exports.up = function(knex, Promise) {
  return knex.schema.table("items", function(table) {
    table.dropColumn("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("items", function(table) {
    table.string('image').nullable();
  });
};
