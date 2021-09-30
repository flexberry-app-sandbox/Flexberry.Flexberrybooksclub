import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-flexberrybooksclub-meetingplan-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-flexberrybooksclub-meetingrequest+speaker':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'surname',
            required: true,
            relationName: 'speaker',
            projection: 'SpeakerL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-flexberrybooksclub-meetingrequest+book':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'tittle',
            required: true,
            relationName: 'book',
            projection: 'BookL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
