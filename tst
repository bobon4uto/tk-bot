{
  "name": "Команды",
  "alias": ["кмд", "команды", "команда", "!", "бот"],
  "doc": "Все команды",
  "area": "general",
  "access": 0,
  "fn": { "args": "", "body": "console.log(\"hello,world!\")" },
  "children": [
    {
      "name": "Создать",
      "alias": ["создать", "сзд", "создаю"],
      "doc": "Команды для создания",
      "area": "general",
      "access": 0,
      "fn": { "args": "", "body": "" },
      "children": [
        {
          "name": "Танк",
          "alias": ["танк", "тнк"],
          "doc": "Создание нового танка(только для ГМов.)",
          "area": "general",
          "access": 2,
          "fn": { "args": "", "body": "" },
          "children": []
        }
      ]
    },
    {
      "name": "Ехать",
      "alias": ["ехать", "еду"],
      "doc": "Перемещает ваш танк в выбранную вами зону",
      "area": "game",
      "access": 0,
      "fn": { "args": "", "body": "console.log(\"hello,\"+this.area+\"!\")" },
      "children": []
    }
  ]
}
