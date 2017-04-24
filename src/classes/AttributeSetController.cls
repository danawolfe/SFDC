public class AttributeSetController {
    	@AuraEnabled
    	public static List<Attribute_Set__c> getAttributeSets() {
    		return [SELECT Name from Attribute_Set__c order by Name];
    	}
    	

    	public static List<Attribute_Set_Item__c> getAttributeSetItems(ID setId) {
    	  if (String.isBlank(setId)) {
    	    setId = 'a074100000BbKxfAAF';
    	  }
    	  return [Select Name from Attribute_Set_Item__c where Attribute_Set__c = :setId];
    	}
}