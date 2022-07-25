---
title: Single Sign-On
published: false
---
##Overview
MCLib and the SSO process support passing a parameter called "deeplink" (provided to the application on the JWT) which indicates to an application which page the user wishes to see after completing the login/token-generation process. Journey Builder journeys now takes advantage of this to provide the activity with a fully formed JWT, while still redirecting the user to the correct configuration screen for the activity. If you need tokens for your activity's configuration screen to make REST calls, then you will need to support this feature.

##How it Works
'useSso' property will use tokens from MCLib for permissions when is set to 'true' in config.json. SSO will redirect the user through the MCLib SSO URL, then 'POST' a JWT with a deeplink to the third party login resource. The login resource decodes the JWT and sends the user to the third party index page.

##Updating to Utilize SFMC SSO
Updating to take advantage of single sign-on requires the 'useSso' property to be present in your config.json. Your activity will need to have a running web server (like the NodeJS app in the example activity).

Below are example files, along with the necessary updates to config.json and customActivity.js.

###Example: config.json
```
{
    "workflowApiVersion": "1.1",
    "metaData": {
        "icon": "images/icon.png",
        "category": ""
    },
    "type": "REST",
    "useSso": true,
    "lang": {
        "en-US": {
            "name": "SSO Activity",
            "description": ""
        }
    },
    "arguments": {
        "execute": {
            "inArguments": [],
            "outArguments": [],
            "url": "URI/for/your/activity/execute"
        }
    },
    "configurationArguments": {
        "save": {
            "url": "URI/for/your/activity/save"
        },
        "publish": {
            "url": "URI/for/your/activity/publish"
        },
        "validate": {
            "url": "URI/for/your/activity/validate"
        }
    },
    "wizardSteps": [
        { "label": "Step 1", "key": "step1" },
        { "label": "Step 2", "key": "step2" },
        { "label": "Step 3", "key": "step3" },
        { "label": "Step 4", "key": "step4", "active": false }
    ],
    "userInterfaces": {
        "configModal": {
            "height": 400,
            "width": 700
        }
    }
}
```
###Example: customActivity.js
```
define([
    'js/postmonger'
], function(
    Postmonger
    ) {
    'use strict';
    var connection = new Postmonger.Session();
    var payload = {};
    $(window).ready(onRender);
    connection.on('initActivity', initialize);
    connection.on('clickedNext', onClickedNext);
    connection.on('requestedSsoRequired', onGetSsoRequired);

    function onRender() {
        connection.trigger('ready'); // JB will respond the first time 'ready' is called with 'initActivity'
        connection.trigger('requestSsoRequired');
    }x
    function initialize (data) {
        if (data) {
            payload = data;
        }
        connection.trigger('updateButton', { button: 'back', visible: false });
    }
    function onClickedNext () {
        save();
    }
    function onGetSsoRequired(useSso) {
        if (useSso === true) {
            connection.trigger('setSsoRequired', false);
        }
    }
    function save() {
        payload['metaData'].isConfigured = true;
        connection.trigger('updateActivity', payload);
    }
});
```
###Example: index.js (NodeJS app)
```
"use strict";
var config      = require('./config/qa');
var _           = require('underscore');
var express     = require('express');
var http        = require('http');
var jwtSimple   = require('jwt-simple');
var hbs         = require('hbs');
var app = express();

app.configure(function() {
    app.set('port', (process.env.PORT || 5000));
    app.set('view engine', 'hbs');
    app.set('views', __dirname + '/server/views');
    app.use(express.static(__dirname + '/public'));
    app.use(express.cookieParser());
    app.use(express.session({
        store: new express.session.MemoryStore()
        , secret: 'custom-activity-sso!@#$$'
        , key: 'custom-activity-sso-app'
        , cookie: { httpOnly: true }
    }));
});

app.post('/login', function( req, res ) {
    var formParser = express.urlencoded();
    var jwt = null;
    var appSignature = 'my-app-signature';

    formParser(req, res, function() {
        try {
            jwt = jwtSimple.decode( req.body.jwt, appSignature );
        } catch (e) {
            jwt = null;
        }

        if ( jwt === null ) {
            res.send( 500, 'Unable to decode jwt!' );
            return;
        }

        // User info object (MID, Organization, etc)
        req.session.user = req.session.user || {
            id:         jwt.request.user.id
            , culture:  jwt.request.user.culture
            , timezone: jwt.request.user.timezone.shortName // Nothing using this yet, so only store minimal info
            , email:    jwt.request.user.email
        };

        req.session.user.org = req.session.user.org || jwt.request.organization;

        // Fuel info object (mostly just keys)
        req.session.fuel = req.session.fuel || {};
        req.session.fuel.token = jwt.request.user.oauthToken;
        req.session.fuel.legacyToken = jwt.request.user.internalOauthToken;
        req.session.fuel.refreshToken = jwt.request.user.refreshToken;
        req.session.fuel.culture = jwt.request.user.culture;
        req.session.fuel.stackKey = String(jwt.request.organization.stackKey).toUpperCase();
        req.session.fuel.redirectLink = jwt.request.query && jwt.request.query.deepLink;

        if ( req.session.fuel.redirectLink ) {
            console.log('Redirect link found.  Redirecting to ', req.session.fuel.redirectLink);
            res.redirect( req.session.fuel.redirectLink ); // safe because this is only done on /login
            delete req.session.fuel.redirectLink;
        } else {
            res.redirect( '/' );
        }

    });
});

app.get('/index.html', function(req, res) {
    res.render('index', {
        user: req.session.user
        , stackKey: req.session.fuel.stackKey
        , token: req.session.fuel.token
        , refreshToken: req.session.fuel.refreshToken
        , legacyToken: req.session.fuel.legacyToken
        , culture: req.session.fuel.culture
    });
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
```
