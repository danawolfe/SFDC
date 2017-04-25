({
	myAction : function(component, event, helper) {
		
	},  
	
	doInit: function(component, event, helper) {      
    // Fetch the account list from the Apex controller   
    console.log("In doInit()");
    
    helper.getAttributeSetItems(component);
	},
  	
  	handleToggleExpand: function(component, event, helper){
	  console.log('Clicked on Chevron');
	  var target = event.getSource();
//	  console.log('target:' + target.get("v.iconName"));
	  if (target.get("v.iconName") == "utility:chevronright"){
		  target.set("v.iconName","utility:chevrondown");
	  }
	  else
	  {
		  target.set("v.iconName","utility:chevronright");
	  }
	  var listOfAttributes = component.find("attrRow");
	  $A.util.toggleClass(listOfAttributes, "toggle");
	  //target.set("v.iconName","utility:chevrondown")
	  //console.log('iconName:' + target.toString() );
  }
})