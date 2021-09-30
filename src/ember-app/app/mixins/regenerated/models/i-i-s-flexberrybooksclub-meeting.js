import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  meetingdate: DS.attr('date'),
  report: DS.hasMany('i-i-s-flexberrybooksclub-report', { inverse: 'meeting', async: false })
});

export let ValidationRules = {
  meetingdate: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-meeting.validations.meetingdate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  report: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-meeting.validations.report.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MeetingE', 'i-i-s-flexberrybooksclub-meeting', {
    meetingdate: attr('Meetingdate', { index: 0 }),
    report: hasMany('i-i-s-flexberrybooksclub-report', 'Report', {
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
    })
  });

  modelClass.defineProjection('MeetingL', 'i-i-s-flexberrybooksclub-meeting', {
    meetingdate: attr('Meetingdate', { index: 0 })
  });
};
