import { Serializer as MeetingSerializer } from
  '../mixins/regenerated/serializers/i-i-s-flexberrybooksclub-meeting';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MeetingSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
