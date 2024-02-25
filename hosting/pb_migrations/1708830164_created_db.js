/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zyg1w8x0f0gkpp2",
    "created": "2024-02-25 03:02:44.336Z",
    "updated": "2024-02-25 03:02:44.336Z",
    "name": "db",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "egx8fvvr",
        "name": "field",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zyg1w8x0f0gkpp2");

  return dao.deleteCollection(collection);
})
