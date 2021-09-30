import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  plandate: DS.attr('date'),
  meetingrequest: DS.hasMany('i-i-s-flexberrybooksclub-meetingrequest', { inverse: 'meetingplan', async: false })
});

export let ValidationRules = {
  plandate: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-meetingplan.validations.plandate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  meetingrequest: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-meetingplan.validations.meetingrequest.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MeetingplanE', 'i-i-s-flexberrybooksclub-meetingplan', {
    plandate: attr('Plandate', { index: 0 }),
    meetingrequest: hasMany('i-i-s-flexberrybooksclub-meetingrequest', 'Meetingrequest', {
      requestdate: attr('Requestdate', { index: 0 }),
      speaker: belongsTo('i-i-s-flexberrybooksclub-speaker', 'Speaker', {
        surname: attr('Surname', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'surname' }),
      book: belongsTo('i-i-s-flexberrybooksclub-book', 'Book', {
        tittle: attr('Tittle', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'tittle' })
    })
  });

  modelClass.defineProjection('MeetingplanL', 'i-i-s-flexberrybooksclub-meetingplan', {
    plandate: attr('Plandate', { index: 0 })
  });
};
