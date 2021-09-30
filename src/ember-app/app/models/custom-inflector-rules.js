import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('meetingrequest', 'Meetingrequests');
inflector.irregular('meetingplan', 'Meetingplans');
inflector.irregular('meeting', 'Meetings');
inflector.irregular('speaker', 'Speakers');
inflector.irregular('report', 'Reports');
inflector.irregular('book', 'Books');

export default {};
