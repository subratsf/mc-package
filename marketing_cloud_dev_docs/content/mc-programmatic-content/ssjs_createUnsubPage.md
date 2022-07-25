---
title: Create an Unsubscribe Page
---

Place this script in the webpage displayed when a person unsubscribes from your mailing list.
```
<script runat="server">
    Platform.Load("Core","1");

    // get all the submitted values from the front end
    // verify first that we have an email passed as a parameter,
    //otherwise the form may have been called from some other means and won't function without needed parameters
    var email = Request.GetFormField("email");
    if (Stringify(email) != "null" && email != ''){

        //Get the list ID from the calling form
        var ListID = Request.GetFormField("listid");

        if (Stringify(ListID) != "null" && ListID != ''){

            var lists = List.Retrieve({Property:"ID",SimpleOperator:"equals",Value:ListID});
            var listKey = lists[0].CustomerKey;
            var myList = List.Init(listKey);

            var status = myList.Subscribers.Unsubscribe(email);

            if (status == "OK") {
            } else {
            }
        }
    }
</script>
```
