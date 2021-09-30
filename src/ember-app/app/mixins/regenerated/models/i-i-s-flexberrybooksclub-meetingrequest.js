import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  requestdate: DS.attr('date'),
  speaker: DS.belongsTo('i-i-s-flexberrybooksclub-speaker', { inverse: null, async: false }),
  book: DS.belongsTo('i-i-s-flexberrybooksclub-book', { inverse: null, async: false }),
  meetingplan: DS.belongsTo('i-i-s-flexberrybooksclub-meetingplan', { inverse: 'meetingrequest', async: false })
});

export let ValidationRules = {
  requestdate: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-meetingrequest.validations.requestdate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  speaker: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-meetingrequest.validations.speaker.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-meetingrequest.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  meetingplan: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-meetingrequest.validations.meetingplan.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MeetingrequestE', 'i-i-s-flexberrybooksclub-meetingrequest', {
    requestdate: attr('Requestdate', { index: 0 }),
    speaker: belongsTo('i-i-s-flexberrybooksclub-speaker', 'Speaker', {
      surname: attr('Surname', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'surname' }),
    book: belongsTo('i-i-s-flexberrybooksclub-book', 'Book', {
      tittle: attr('Tittle', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'tittle' })
  });
};
