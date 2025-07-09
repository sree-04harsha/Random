public with sharing class AccountMetaDataTypeExample {
    @AuraEnabled(cacheable=true)
    public static List<Account_Meta__mdt> getMetaData(){
        return Account_Meta__mdt.getAll().values();
    }
}