---
data: <%= reference.content.functions.BarCodeURL %>
---
###Usage
Use this function to create these types of barcodes:

* Codabar
* Code11
* Code128Auto
* Code128A
* Code128B
* Code128C
* Code39
* Code39Ext
* Code93
* Code93Ext
* Ean13
* Ean8
* Industr25
* Interl25
* Mat25
* MSI
* Postnet
* Planet
* Telepen
* UPCa
* UPCe
* OneCode
* DataMatrix
* PDF417
* PlainText

When the AMPscript below is placed in a content area, the email message receives the applicable bar code at the time of the send:

```
<p>
<img style='width: 400px; height: 200px' title=barcode border=0 hspace=0 alt=barcode src='%%=BarCodeURL('BBY01-397101069285','Code39', 400, 200, 0)=%%' width=400 height=200>
</p>
```

The AMPscript generates a bar code based on the value in Code39 format in the specified height and width.
The AMPscript below displays the bar code with the listed alt text and rotated 90&deg; to the right on a transparent background.

```
%%=BarCodeURL('BBY01-397101069285','Code39', 400, 200, 0, 0, 'Alt Text', 90, 1)=%%
```

The AMPscript below displays the bar code with the string value as text and rotated 90&deg; to the right on a transparent background. Note that the single quotes must be included when using the string value as text to prevent the function from returning an error.

```
%%=BarCodeURL('9X4H341ZTKTPMintT','Code128B', 231, 55, 0, 1,'',90,1)=%%
```