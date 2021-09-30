import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISFlexberrybooksclubBookLForm from './forms/i-i-s-flexberrybooksclub-book-l';
import IISFlexberrybooksclubMeetingLForm from './forms/i-i-s-flexberrybooksclub-meeting-l';
import IISFlexberrybooksclubMeetingplanLForm from './forms/i-i-s-flexberrybooksclub-meetingplan-l';
import IISFlexberrybooksclubSpeakerLForm from './forms/i-i-s-flexberrybooksclub-speaker-l';
import IISFlexberrybooksclubBookEForm from './forms/i-i-s-flexberrybooksclub-book-e';
import IISFlexberrybooksclubMeetingEForm from './forms/i-i-s-flexberrybooksclub-meeting-e';
import IISFlexberrybooksclubMeetingplanEForm from './forms/i-i-s-flexberrybooksclub-meetingplan-e';
import IISFlexberrybooksclubSpeakerEForm from './forms/i-i-s-flexberrybooksclub-speaker-e';
import IISFlexberrybooksclubBookModel from './models/i-i-s-flexberrybooksclub-book';
import IISFlexberrybooksclubMeetingModel from './models/i-i-s-flexberrybooksclub-meeting';
import IISFlexberrybooksclubMeetingplanModel from './models/i-i-s-flexberrybooksclub-meetingplan';
import IISFlexberrybooksclubMeetingrequestModel from './models/i-i-s-flexberrybooksclub-meetingrequest';
import IISFlexberrybooksclubReportModel from './models/i-i-s-flexberrybooksclub-report';
import IISFlexberrybooksclubSpeakerModel from './models/i-i-s-flexberrybooksclub-speaker';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-flexberrybooksclub-book': IISFlexberrybooksclubBookModel,
    'i-i-s-flexberrybooksclub-meeting': IISFlexberrybooksclubMeetingModel,
    'i-i-s-flexberrybooksclub-meetingplan': IISFlexberrybooksclubMeetingplanModel,
    'i-i-s-flexberrybooksclub-meetingrequest': IISFlexberrybooksclubMeetingrequestModel,
    'i-i-s-flexberrybooksclub-report': IISFlexberrybooksclubReportModel,
    'i-i-s-flexberrybooksclub-speaker': IISFlexberrybooksclubSpeakerModel
  },

  'application-name': 'Flexberrybooksclub',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Flexberrybooksclub',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Flexberrybooksclub',
          title: 'Flexberrybooksclub'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        flexberrybooksclub: {
          caption: 'Flexberrybooksclub',
          title: 'Flexberrybooksclub',
          'i-i-s-flexberrybooksclub-speaker-l': {
            caption: 'Speaker',
            title: ''
          },
          'i-i-s-flexberrybooksclub-meetingplan-l': {
            caption: 'Meetingplan',
            title: ''
          },
          'i-i-s-flexberrybooksclub-book-l': {
            caption: 'Book',
            title: ''
          },
          'i-i-s-flexberrybooksclub-meeting-l': {
            caption: 'Meeting',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-flexberrybooksclub-book-l': IISFlexberrybooksclubBookLForm,
    'i-i-s-flexberrybooksclub-meeting-l': IISFlexberrybooksclubMeetingLForm,
    'i-i-s-flexberrybooksclub-meetingplan-l': IISFlexberrybooksclubMeetingplanLForm,
    'i-i-s-flexberrybooksclub-speaker-l': IISFlexberrybooksclubSpeakerLForm,
    'i-i-s-flexberrybooksclub-book-e': IISFlexberrybooksclubBookEForm,
    'i-i-s-flexberrybooksclub-meeting-e': IISFlexberrybooksclubMeetingEForm,
    'i-i-s-flexberrybooksclub-meetingplan-e': IISFlexberrybooksclubMeetingplanEForm,
    'i-i-s-flexberrybooksclub-speaker-e': IISFlexberrybooksclubSpeakerEForm
  },

});

export default translations;
