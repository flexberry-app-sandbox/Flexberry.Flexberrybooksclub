import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  tittle: DS.attr('string'),
  author: DS.attr('string'),
  pages: DS.attr('number'),
  coverURL: DS.attr('string'),
  descriptionURL: DS.attr('string'),
  tags: DS.attr('string'),
  score: DS.attr('decimal')
});

export let ValidationRules = {
  tittle: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-book.validations.tittle.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  author: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-book.validations.author.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  pages: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-book.validations.pages.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  coverURL: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-book.validations.coverURL.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  descriptionURL: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-book.validations.descriptionURL.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tags: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-book.validations.tags.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  score: {
    descriptionKey: 'models.i-i-s-flexberrybooksclub-book.validations.score.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'i-i-s-flexberrybooksclub-book', {
    tittle: attr('Tittle', { index: 0 }),
    author: attr('Author', { index: 1 }),
    pages: attr('Pages', { index: 2 }),
    coverURL: attr('Cover URL', { index: 3 }),
    descriptionURL: attr('Description URL', { index: 4 }),
    tags: attr('Tags', { index: 5 }),
    score: attr('Score', { index: 6 })
  });

  modelClass.defineProjection('BookL', 'i-i-s-flexberrybooksclub-book', {
    tittle: attr('Tittle', { index: 0 }),
    author: attr('Author', { index: 1 }),
    pages: attr('Pages', { index: 2 }),
    coverURL: attr('Cover URL', { index: 3 }),
    descriptionURL: attr('Description URL', { index: 4 }),
    tags: attr('Tags', { index: 5 }),
    score: attr('Score', { index: 6 })
  });
};
