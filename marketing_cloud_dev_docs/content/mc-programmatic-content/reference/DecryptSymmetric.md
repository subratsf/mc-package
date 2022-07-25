---
data: <%= reference.encryption.functions.DecryptSymmetric %>
---
###Usage
You can set optional mode or padding values for DES or TripleDES algorithms:

####Mode

* cbc - default
* ecb
* ofb
* cfb
* cts

####Padding

* none
* pkcs7 - default
* zeros
* ansix923
* iso10126

The example below sets the @clearData variable to the value of the @endData once the function decrypts that data. This example uses provided values for the password, salt, and IV, and it sets any external key values to the undeclared variable @null. Note that the Salt and IV values provided in the example below represent hex string values - the Salt value includes 8 bytes of information, and the IV value provides 16 bytes.
```
SET @clearData=DecryptSymmetric(@encData, 'AES', @null, 'aardvark', @null, '0000000000000000', @null, '00000000000000000000000000000000')
```
The example below uses external keys instead of provided values:
```
SET @clearData=DecryptSymmetric(@encData, 'AES', @passwordExternalKey, @null, @saltExternalKey, @null, @IVExternalKey, @null)
SET @clearData=DecryptSymmetric(@encData, 'AES', 'passwordExternalKey', @null, 'saltExternalKey', @null, 'IVExternalKey', @null)
```