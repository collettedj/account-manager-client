import { moduleForModel, test } from 'ember-qunit';

moduleForModel('app', 'Unit | Model | app', {
  // Specify the other units that are required for this test.
  needs: ['model:app-role']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});