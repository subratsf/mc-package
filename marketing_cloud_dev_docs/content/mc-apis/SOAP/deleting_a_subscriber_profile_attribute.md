---
title: Delete a Subscriber Profile Attribute
---
<p>This page contains information  about deleting a subscriber profile attribute using the SOAP API.</p>

##Why Delete a Subscriber Profile Attribute
<p>You can remove subscriber profile attributes with this call when you no longer want to use or retain this information.</p>

##How to Delete a Subscriber Profile Attribute
<p>Use the sample code below as a model to create your own API call. Use the SOAP request to validate that you've included all applicable information.</p>

###Sample Java Code (Axis 1.4)
```
public void testDeleteAttributeForSubscriber() throws RemoteException {        
        Soap_PortType stub = init();
        ConfigureRequestMsg configureRequestMsg = new ConfigureRequestMsg();
        PropertyDefinition definition = new PropertyDefinition();
        //create special Attribute under profile management, this attribute holds html content
        definition.setName("SamplePropertyDefinition");
        definition.setPropertyType(PropertyType.value1);
        //Set ClientID to create attribute on sub-account
        ConfigureOptions options = new ConfigureOptions();
        ClientID clientID = new ClientID();
        clientID.setID(232538);
        options.setClient(clientID);  //this creates attribute in sub-account
        //definition.setClient(clientID); //this creates attribute in parent-account
        configureRequestMsg.setOptions(options);
        configureRequestMsg.setAction("delete");
        APIObject[] objects = {definition};
        configureRequestMsg.setConfigurations(objects);
        //API call to delete to Attribute....
        ConfigureResponseMsg responseMsg = stub.configure(configureRequestMsg);
        assertNotNull(responseMsg.getOverallStatusMessage());
    }
```
###SOAP Request
```
<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
     <ConfigureRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
          <Action>delete</Action>
          <Options>
              <Client>
                  <ID>232538</ID>
                  <!--SubAccount-->
              </Client>
          </Options>
          <Configurations>
              <Configuration xsi:type="PropertyDefinition">
                  <Name>Subject_Revoooo</Name>
              </Configuration>
          </Configurations>
    </ConfigureRequestMsg>
</s:Body>
```
