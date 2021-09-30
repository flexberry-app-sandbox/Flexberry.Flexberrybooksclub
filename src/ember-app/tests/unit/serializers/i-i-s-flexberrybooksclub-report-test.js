import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-flexberrybooksclub-report', 'Unit | Serializer | i-i-s-flexberrybooksclub-report', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-flexberrybooksclub-report',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-flexberrybooksclub-book',
    'model:i-i-s-flexberrybooksclub-meeting',
    'model:i-i-s-flexberrybooksclub-meetingplan',
    'model:i-i-s-flexberrybooksclub-meetingrequest',
    'model:i-i-s-flexberrybooksclub-report',
    'model:i-i-s-flexberrybooksclub-speaker',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
