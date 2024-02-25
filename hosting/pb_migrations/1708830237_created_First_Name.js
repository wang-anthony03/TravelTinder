/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s5gjnji2a0vppgp",
    "created": "2024-02-25 03:03:57.099Z",
    "updated": "2024-02-25 03:03:57.099Z",
    "name": "First_Name",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "az18brzq",
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
  const collection = dao.findCollectionByNameOrId("s5gjnji2a0vppgp");

  return dao.deleteCollection(collection);
})
