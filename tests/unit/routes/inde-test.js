import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | inde', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:inde');
    assert.ok(route);
  });
});
