import { Serializer as MeetingplanSerializer } from
  '../mixins/regenerated/serializers/i-i-s-flexberrybooksclub-meetingplan';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MeetingplanSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
