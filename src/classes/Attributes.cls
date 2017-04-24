public class Attributes {
    @AuraEnabled
    public static List<Attribute_Value__c> getAccountAttributes(String id){
      List<Attribute_Value__c> attrs = [select ID,
                                               Account__c,
                                               Attribute_Name__c,
                                               Attribute_Set_Item__c,
                                               Attribute_Set__c,
                                               Value_Checkbox__c,
                                               Value_Currency__c,
                                               Value_Date__c,
                                               Value_Number__c,
                                               Value_Percent__c,
                                               Value_Picklist__c,
                                               Value__c,
                                        		LastModifiedDate
                                          from attribute_Value__c 
                                          where account__c = :id ];
       return attrs;
    } 
}