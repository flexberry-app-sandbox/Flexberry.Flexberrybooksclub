import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  surname: DS.attr('string'),
  firstname: DS.attr('string'),
  secondname: DS.attr('string')
});

export let ValidationRules = {
  surname: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-speaker.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  firstname: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-speaker.validations.firstname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  secondname: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-speaker.validations.secondname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SpeakerE', 'i-i-s-flexberrybooksclub-speaker', {
    surname: attr('Surname', { index: 0 }),
    firstname: attr('Firstname', { index: 1 }),
    secondname: attr('Secondname', { index: 2 })
  });

  modelClass.defineProjection('SpeakerL', 'i-i-s-flexberrybooksclub-speaker', {
    surname: attr('Surname', { index: 0 }),
    firstname: attr('Firstname', { index: 1 }),
    secondname: attr('Secondname', { index: 2 })
  });
};
