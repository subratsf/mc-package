---
title: Encoded JWT
---

Your application login endpoint will receive a parameter called JWT, which is a string consisting of three parts:

1. Encoded JWT Header
2. JWT Second Part
3. JWT Third Part

These parts occur in the above order separated by period ('.') delimiters. Each part contains base64url encoded content:

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
eyJleHAiOjEzNDkyMzg0MzcsImlzcyI6Imh0dHBzOi8vaW1oLmV4YWN0dGFyZ2V0LmNvbSIsInJlcXVlc3QiOnsiY2xh
aW1zVmVyc2lvbiI6MSwidXNlciI6eyJpZCI6MTA0MTQyNjcsIm9hdXRoVG9rZW4iOiJ3ZmRwZ3Y0c2U4eTQ4amM0bXI1
aGJndzciLCJlbWFpbCI6Im1jbGFya0BleGFjdHRhcmdldC5jb20iLCJpbnRlcm5hbE9hdXRoVG9rZW4iOiIwRVlhcUoy
Rl9oMUh1UkVSQ2JmVWhXRjlndEFNU2c4NmxiR2dxMlJfNy0tZzNwaHlOTmJ2MW93aTdEWHdpMGliZyJ9LCJvcmdhbml6
YXRpb24iOnsiaWQiOjEwNDkwNzU0LCJlbnRlcnByaXNlSWQiOjEwNDkwNzU0LCJkYXRhQ29udGV4dCI6ImVudGVycHJp
c2UiLCJzdGFja0tleSI6IlMxIn0sImFwcGxpY2F0aW9uIjp7ImlkIjoiOGIxZWJiMjQtOWU2OS00N2VhLTllNzItMWU5
MTE0YTU0M2I3IiwiY3VzdG9tZXJFbnZpcm9ubWVudCI6IlByb2QiLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vand0LmV4
YWN0dGFyZ2V0YXBwcy5jb20vIn19fQ.
ChpXrkdZj5obVfooRlXzOEsTk_ydAATrkIcM0POhnA8
```
##Related Items
* [Single Sign On](single-sign-on.htm)
* [Decode the JWT](decode-jwt.htm)
* [Explanation of Decoded JWT](explanation-decoded-jwt.htm)