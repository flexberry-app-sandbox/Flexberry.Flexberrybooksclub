import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.flexberrybooksclub.caption'),
          title: i18n.t('forms.application.sitemap.flexberrybooksclub.title'),
          children: [{
            link: 'i-i-s-flexberrybooksclub-speaker-l',
            caption: i18n.t('forms.application.sitemap.flexberrybooksclub.i-i-s-flexberrybooksclub-speaker-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberrybooksclub.i-i-s-flexberrybooksclub-speaker-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-flexberrybooksclub-meetingplan-l',
            caption: i18n.t('forms.application.sitemap.flexberrybooksclub.i-i-s-flexberrybooksclub-meetingplan-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberrybooksclub.i-i-s-flexberrybooksclub-meetingplan-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-flexberrybooksclub-book-l',
            caption: i18n.t('forms.application.sitemap.flexberrybooksclub.i-i-s-flexberrybooksclub-book-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberrybooksclub.i-i-s-flexberrybooksclub-book-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-flexberrybooksclub-meeting-l',
            caption: i18n.t('forms.application.sitemap.flexberrybooksclub.i-i-s-flexberrybooksclub-meeting-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberrybooksclub.i-i-s-flexberrybooksclub-meeting-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})