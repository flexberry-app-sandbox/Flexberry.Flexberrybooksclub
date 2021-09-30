import { Serializer as MeetingrequestSerializer } from
  '../mixins/regenerated/serializers/i-i-s-flexberrybooksclub-meetingrequest';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MeetingrequestSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
