import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-flexberrybooksclub-book-l');
  this.route('i-i-s-flexberrybooksclub-book-e',
  { path: 'i-i-s-flexberrybooksclub-book-e/:id' });
  this.route('i-i-s-flexberrybooksclub-book-e.new',
  { path: 'i-i-s-flexberrybooksclub-book-e/new' });
  this.route('i-i-s-flexberrybooksclub-meeting-l');
  this.route('i-i-s-flexberrybooksclub-meeting-e',
  { path: 'i-i-s-flexberrybooksclub-meeting-e/:id' });
  this.route('i-i-s-flexberrybooksclub-meeting-e.new',
  { path: 'i-i-s-flexberrybooksclub-meeting-e/new' });
  this.route('i-i-s-flexberrybooksclub-meetingplan-l');
  this.route('i-i-s-flexberrybooksclub-meetingplan-e',
  { path: 'i-i-s-flexberrybooksclub-meetingplan-e/:id' });
  this.route('i-i-s-flexberrybooksclub-meetingplan-e.new',
  { path: 'i-i-s-flexberrybooksclub-meetingplan-e/new' });
  this.route('i-i-s-flexberrybooksclub-speaker-l');
  this.route('i-i-s-flexberrybooksclub-speaker-e',
  { path: 'i-i-s-flexberrybooksclub-speaker-e/:id' });
  this.route('i-i-s-flexberrybooksclub-speaker-e.new',
  { path: 'i-i-s-flexberrybooksclub-speaker-e/new' });
});

export default Router;
