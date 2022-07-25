---
data: <%= reference.encryption.functions.EncryptSymmetric %>
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

The example below sets the @encData variable to the encrypted value of the plain text supplied in the function (in this case, the word Example). This example uses provided values for the password, salt, and IV, and it sets any external key values to the undeclared variable @null. Note that the Salt and IV values provided in the example below represent hex string values - the Salt value includes 8 bytes of information, and the IV value provides 16 bytes.
```
SET @encData=EncryptSymmetric('Example', 'AES', @null, 'password', @null, '0000000000000000', @null, '00000000000000000000000000000000')
```

The examples below use external keys instead of provided values.
```
SET @encData=EncryptSymmetric('Example', 'AES', @PasswordExternalKey, @null, @saltExternalKey, @null, @IVExternalKey, @null)
SET @encData=EncryptSymmetric('Example', 'AES', 'PasswordExternalKey', @null, 'saltExternalKey', @null, 'IVExternalKey', @null)
```

This example uses the ebc mode of the DES algorithm:
```
SET @encData=EncryptSymmetric('Example', 'des;mode=ecb;padding=zeros', @null, '0x7FEBCBCBCB9BCB01', @null, @null, @null, @null)
```
