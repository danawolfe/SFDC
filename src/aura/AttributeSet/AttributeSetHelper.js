({
  // Fetch the accounts from the Apex controller
  getAttributeSetItems: function(component) {
    var action = component.get('c.getAttributeSetItems');
    // Get the Attribute Set ID and pass to the server side method
    var attributeSet = component.get('v.attributeSet');
    action.setParams({ setId : attributeSet.Id });
    
    // Set up the callback
    var self = this;
    action.setCallback(this, function(actionResult) {
     component.set('v.attributes', actionResult.getReturnValue());
    });
    $A.enqueueAction(action);
  }
})