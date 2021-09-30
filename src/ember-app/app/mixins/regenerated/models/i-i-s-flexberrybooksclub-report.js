import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  reportdate: DS.attr('date'),
  videoURL: DS.attr('string'),
  booklevel: DS.attr('number'),
  presentationURL: DS.attr('string'),
  review: DS.attr('string'),
  speaker: DS.belongsTo('i-i-s-flexberrybooksclub-speaker', { inverse: null, async: false }),
  book: DS.belongsTo('i-i-s-flexberrybooksclub-book', { inverse: null, async: false }),
  meeting: DS.belongsTo('i-i-s-flexberrybooksclub-meeting', { inverse: 'report', async: false })
});

export let ValidationRules = {
  reportdate: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-report.validations.reportdate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  videoURL: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-report.validations.videoURL.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  booklevel: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-report.validations.booklevel.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  presentationURL: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-report.validations.presentationURL.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  review: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-report.validations.review.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  speaker: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-report.validations.speaker.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-report.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  meeting: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-report.validations.meeting.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ReportE', 'i-i-s-flexberrybooksclub-report', {
    reportdate: attr('Reportdate', { index: 0 }),
    booklevel: attr('Booklevel', { index: 1 }),
    presentationURL: attr('Presentation URL', { index: 2 }),
    videoURL: attr('Video URL', { index: 3 }),
    review: attr('Review', { index: 4 }),
    speaker: belongsTo('i-i-s-flexberrybooksclub-speaker', 'Speaker', {
      surname: attr('Surname', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'surname' }),
    book: belongsTo('i-i-s-flexberrybooksclub-book', 'Book', {
      tittle: attr('Tittle', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'tittle' })
  });
};
