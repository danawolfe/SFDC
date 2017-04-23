public class AttributeSetController {
    	@AuraEnabled
    	public static List<Attribute_Set__c> getAttributeSets() {
    		return [SELECT Name from Attribute_Set__c order by Name];
    	}
}