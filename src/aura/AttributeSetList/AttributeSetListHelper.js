({
  // Fetch the accounts from the Apex controller
  getattributeSets: function(component) {
    var action = component.get('c.getAttributeSets');

    // Set up the callback
    var self = this;
    action.setCallback(this, function(actionResult) {
     component.set('v.attributeSets', actionResult.getReturnValue());
    });
    $A.enqueueAction(action);
  }
})