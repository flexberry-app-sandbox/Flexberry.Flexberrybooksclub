import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        flexberrybooksclub: {
          caption: 'flexberrybooksclub',
          title: 'flexberrybooksclub',
          'i-i-s-flexberrybooksclub-speaker-l': {
            caption: 'i-i-s-flexberrybooksclub-speaker-l',
            title: 'i-i-s-flexberrybooksclub-speaker-l'
          },
          'i-i-s-flexberrybooksclub-meetingplan-l': {
            caption: 'i-i-s-flexberrybooksclub-meetingplan-l',
            title: 'i-i-s-flexberrybooksclub-meetingplan-l'
          },
          'i-i-s-flexberrybooksclub-book-l': {
            caption: 'i-i-s-flexberrybooksclub-book-l',
            title: 'i-i-s-flexberrybooksclub-book-l'
          },
          'i-i-s-flexberrybooksclub-meeting-l': {
            caption: 'i-i-s-flexberrybooksclub-meeting-l',
            title: 'i-i-s-flexberrybooksclub-meeting-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
