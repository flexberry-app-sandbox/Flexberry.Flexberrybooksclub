import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-flexberrybooksclub-meeting', 'Unit | Model | i-i-s-flexberrybooksclub-meeting', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
