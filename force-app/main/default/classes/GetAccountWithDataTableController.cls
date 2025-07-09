public with sharing class GetAccountWithDataTableController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        Boolean isOk=true;
        List<Account> lis=[SELECT Id, Name, Industry, Phone FROM Account WITH SECURITY_ENFORCED];
        return lis;
      
    }
}