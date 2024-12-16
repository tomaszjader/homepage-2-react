module.exports = function (plop) {
    // tutaj będzie konfiguracja generatorów
    plop.setGenerator('component', {
      description: 'Tworzy nowy komponent React',
      prompts: [{
        type: 'input',
        name: 'name',
        message: 'Nazwa komponentu:'
      }],
      actions: [{
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.tsx',
        templateFile: 'templates/component.hbs'
      }]
    });
  };