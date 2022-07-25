/*global $:false */

var Swiftype = window.Swiftype || {};

$(function () {

    $('.responseObject').on('show.bs.collapse', function (e) {
       $('#'+e.currentTarget.id+'_i').removeClass("fa-caret-right").addClass("fa-caret-down");
    });

    $('.responseObject').on('hide.bs.collapse', function (e) {
       $('#'+e.currentTarget.id+'_i').removeClass("fa-caret-down").addClass("fa-caret-right");
    });
    
    if (location.hash) {
        setTimeout(function(){
            var hash = location.hash;
            location.hash = '';
            location.hash = hash;
            $('a[href="'+ hash.replace('#','#detail_') +'"]').click();
        },100);
    }

  $('[data-toggle]').closest('li').on({
    mouseenter: function () {
      $(this).addClass('open');
    },
    mouseleave: function () {
      $(this).removeClass('open');
    }
  });

  $('.panel').on('show.bs.collapse', function (e) {
    $("a.accordion-toggle", e.currentTarget).addClass('active');
  });
  $('.panel').on('hide.bs.collapse', function (e) {
    $("a.accordion-toggle", e.currentTarget).removeClass('active');
  });

  //$("#st-search-input,#mobile-st-search-input").swiftype({
  //engineKey: "zbkUazxUq53NnDgAx8cp"
  //});

  $("#st-search-input").swiftypeSearch({
    engineKey: "zbkUazxUq53NnDgAx8cp",
    resultContainingElement: "#st-results-container"
  });

  /** DO NOT EDIT BELOW THIS LINE **/
  Swiftype.key = 'zbkUazxUq53NnDgAx8cp';
  Swiftype.renderStyle = 'new_page';
  /** CONFIGURATION VARIABLE: YOU MUST EDIT BEFORE ADDING TO YOUR TEMPLATE. **/
  Swiftype.resultPageURL = '/search.html';
  Swiftype.additionalInputElements = ['#mobile-st-search-input'];
  /** DO NOT EDIT BELOW THIS LINE **/
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = false;
  script.src = "//s.swiftypecdn.com/embed.js";
  var entry = document.getElementsByTagName('script')[0];
  entry.parentNode.insertBefore(script, entry);

  $("#logos").smoothDivScroll({
    autoScrollingMode: "always",
    autoScrollingDirection: "endlessLoopLeft",
    autoScrollingStep: 1,
    autoScrollingInterval: 40
  });

  // Logo parade event handlers
  $("#logos").bind("mouseover", function () {
    $(this).smoothDivScroll("stopAutoScrolling");
  }).bind("mouseout", function () {
    $(this).smoothDivScroll("startAutoScrolling");
  });

  $("#social-scrolling-banner").smoothDivScroll({
    autoScrollingMode: "always",
    autoScrollingDirection: "endlessLoopRight",
    autoScrollingStep: 1,
    autoScrollingInterval: 40
  });

  // Logo parade event handlers
  $("#social-scrolling-banner").bind("mouseover", function () {
    $(this).smoothDivScroll("stopAutoScrolling");
  }).bind("mouseout", function () {
    $(this).smoothDivScroll("startAutoScrolling");
  });

  $('#email-subscribe')
    .bootstrapValidator({
      message: 'This value is not valid',
      excluded: [':disabled'],
      live: "enabled",
      submitButton: "#subscribe-submit",
      feedbackIcons: {
        valid: 'fa fa-check-circle',
        invalid: 'fa fa-exclamation-circle',
        validating: 'fa fa-refresh'
      },
      fields: {
        FirstName: {
          enabled: true,
          validators: {
            notEmpty: {
              message: 'Please enter your first name.'
            },
            stringLength: {
              max: 50,
              message: 'The first name must be less than 50 characters'
            },
            regexp: {
              regexp: /^[a-z\s]+$/i,
              message: 'First name can consist of alphabetical characters and spaces only'
            }
          }
        },
        LastName: {
          enabled: true,
          validators: {
            notEmpty: {
              message: 'Please enter your last name.'
            },
            stringLength: {
              max: 50,
              message: 'The last name must be less than 50 characters'
            },
            regexp: {
              regexp: /^[a-z\s]+$/i,
              message: 'Last name can consist of alphabetical characters and spaces only'
            }
          }
        },
        EmailAddress: {
          enabled: true,
          validators: {
            notEmpty: {
              message: 'Please enter a valid email.'
            },
            emailAddress: {
              message: 'The value is not a valid email address'
            }
          }
        }
      }
    })
    .on('success.form.bv', function (e) {
      // Prevent form submission
      e.preventDefault();

      // Get the form instance
      var $form = $(e.target);

      // Get the BootstrapValidator instance
      var bv = $form.data('bootstrapValidator');

      // Use Ajax to submit form data
      $('#subscribe-submit').addClass("disabled");
      $('#loader').removeClass("hidden");
      $.post("/subscribe", $form.serialize(), function (data) {
        data = JSON.parse(data);

        var contentReplacement;
        if (data.results) {
          contentReplacement = "<h4>Welcome back to Code@.</h4><p>It appears you have already subscribed before - which is great! Unfortunately, we only allow one subscription per email address though. Your inbox will thank us later.</p>";
          //send triggered email now
          $('#subscribe .modal-body').fadeOut('fast', function () {
            $('#subscribe .modal-body').html(contentReplacement).fadeIn('fast');
          });
        } else if (data.resub) {
          //provide link to get profile update email
          contentReplacement = "<h4>Welcome back to Code@.</h4><p>It appears you have already subscribed before or haven't confirmed your subscription. Your email address has been sent a confirmation email to get you resubscribed and back on the list.</p>";
          $('#subscribe .modal-body').fadeOut('fast', function () {
            $('#subscribe .modal-body').html(contentReplacement).fadeIn('fast');
          });
        } else {
          contentReplacement = "<h4>Thank you for registering for the Code@ Newsletter.</h4>";
          contentReplacement += "<p>You should recieve a confirmation in your inbox soon. Once verified, be sure to click the link to our profile center to customize your content options!</p>";
          $('#subscribe .modal-body').fadeOut('fast', function () {
            $('#subscribe .modal-body').html(contentReplacement).fadeIn('fast');
          });
        }

      });
    });

  $('#mobile-nav-header .mobile-toggle').on('touchstart click', function (e) {
    e.preventDefault();
    $('#mobile-nav-menu,#mobile-nav-header,body')
      .toggleClass('mobile-menu-active');
  });

  $('#mobile-subscribe').on('touchstart click', function (e) {
    $('#mobile-nav-menu,#mobile-nav-header,body')
      .toggleClass('mobile-menu-active');
  });

  $('body.mobile-menu-active').on('touchstart', function (e) {
    e.preventDefault();
  });

  $('#developer-edition')
    .on('init.form.bv', function (e, data) {
      data.bv.disableSubmitButtons(true);
    })
    .bootstrapValidator({
      message: 'This value is not valid',
      submitButtons: '#dev-edition-submit',
      live: "enabled",
      trigger: null,
      feedbackIcons: {
        valid: 'fa fa-check-circle',
        invalid: 'fa fa-exclamation-circle',
        validating: 'fa fa-refresh'
      },
      fields: {
        firstname: {
          enabled: true,
          validators: {
            notEmpty: {
              message: 'Please enter your first name.'
            },
            stringLength: {
              max: 50,
              message: 'The first name must be less than 50 characters'
            },
            regexp: {
              regexp: /^[A-Za-z'\W]+$/i,
              message: 'First name may consist of alphabetical characters and spaces only'
            }
          }
        },
        lastname: {
          enabled: true,
          validators: {
            notEmpty: {
              message: 'Please enter your last name.'
            },
            stringLength: {
              max: 50,
              message: 'The last name must be less than 50 characters'
            },
            regexp: {
              regexp: /^[A-Za-z'\W]+$/i,
              message: 'Last name may consist of alphabetical characters and spaces only'
            }
          }
        },
        emailaddress: {
          enabled: true,
          validators: {
            notEmpty: {
              message: 'Please enter a valid email.'
            },
            emailAddress: {
              message: 'The value is not a valid email address'
            }
          }
        },
        eula: {
          feedbackIcons: 'false',
          validators: {
            choice: {
              min: 1,
              max: 1,
              message: 'You must read and accept the EULA'
            }
          }
        },
        company: {
          enabled: true,
          validators: {
            notEmpty: {
              message: 'Please add a company name.'
            }
          }
        },
        password: {
          enabled: true,
          message: 'Your password does not meet requirements.',
          validators: {
            remote: {
              message: 'Your password does not meet requirements.',
              type: 'POST',
              url: '/checkPass'
            },
            notEmpty: {
              message: 'You must provide a password.'
            },
          }
        },
        username: {
          enabled: true,

          validators: {
            remote: {
              message: 'The username is not available',
              type: 'POST',
              url: '/checkUser'
            },
            notEmpty: {
              message: 'You must provide a username.'
            },
            stringLength: {
              min: 10,
              message: 'Username must be longer than 10 characters.'
            }
          }

        },
      }
    })
    .on('success.field.bv', function (e, data) {
      var isValid = data.bv.isValid();
      data.bv.disableSubmitButtons(!isValid);
    })
    .on('success.form.bv', function (e) {
      // Prevent form submission
      e.preventDefault();

      // Get the form instance
      var $form = $(e.target);

      // Get the BootstrapValidator instance
      var bv = $form.data('bootstrapValidator');

      // Use Ajax to submit form data
      $('#dev-edition-submit').addClass("disabled");
      $('#loader').removeClass("hidden");
      $.post("/signup", $form.serialize());
      setTimeout(function () {
        window.location = "/developer-edition/thank-you.html";
      }, 2500);
    });

  $('#developer-edition-notice')
    .on('init.form.bv', function (e, data) {
      data.bv.disableSubmitButtons(true);
    })
    .bootstrapValidator({
      message: 'This value is not valid',
      submitButtons: '#dev-edition-notice-submit',
      live: "enabled",
      trigger: null,
      feedbackIcons: {
        valid: 'fa fa-check-circle',
        invalid: 'fa fa-exclamation-circle',
        validating: 'fa fa-refresh'
      },
      fields: {
        firstname: {
          enabled: true,
          validators: {
            notEmpty: {
              message: 'Please enter your first name.'
            },
            stringLength: {
              max: 50,
              message: 'The first name must be less than 50 characters'
            },
            regexp: {
              regexp: /^[A-Za-z'\W]+$/i,
              message: 'First name may consist of alphabetical characters and spaces only'
            }
          }
        },
        lastname: {
          enabled: true,
          validators: {
            notEmpty: {
              message: 'Please enter your last name.'
            },
            stringLength: {
              max: 50,
              message: 'The last name must be less than 50 characters'
            },
            regexp: {
              regexp: /^[A-Za-z'\W]+$/i,
              message: 'Last name may consist of alphabetical characters and spaces only'
            }
          }
        },
        emailaddress: {
          enabled: true,
          validators: {
            notEmpty: {
              message: 'Please enter a valid email.'
            },
            emailAddress: {
              message: 'The value is not a valid email address'
            }
          }
        }
      }
    })
    .on('success.field.bv', function (e, data) {
      var isValid = data.bv.isValid();
      data.bv.disableSubmitButtons(!isValid);
    })
    .on('success.form.bv', function (e) {
      // Prevent form submission
      e.preventDefault();

      // Get the form instance
      var $form = $(e.target);

      // Get the BootstrapValidator instance
      var bv = $form.data('bootstrapValidator');

      // Use Ajax to submit form data
      $('#dev-edition-notice-submit').addClass("disabled");
      $('#loader').removeClass("hidden");
      $.post("/notificationSignup", $form.serialize(), function (res) {
        var copy = "<h4>Thank you!</h4><p>Thank you for signing up - we will send you an email as soon as developer edition is ready.</p>";
        $("#dev-edition-notice-copy").html(copy);
        //console.log(res);
      });
    });
});

function getSocialData() {
  $.ajax({
    url: "./social",
  })
    .done(function (data) {
      if (console && console.log) {
        var tweets = data.twitter;
        var questions = data.stackexchange.items;
        $('#social-scrolling-banner .scrollableArea').html("");
        for (var i = 0; i < 4; i++) {
          if (tweets[i] !== undefined) {
            var tweet = '<div class="scroll-card orange"><div class="social-icon"><i class="fa fa-twitter fa-3x"></i></div><div class="social-content"><a href="https://twitter.com/' + tweets[i].user.name + '/status/' + tweets[i].id + '" target="_blank">' + tweets[i].text + '</a></div></div>';
            //console.log(tweets[i].text);
            $('#social-scrolling-banner .scrollableArea').append(tweet);
          }

          if (questions[i] !== undefined) {
            var question = '<div class="scroll-card blue"><div class="social-icon"><i class="fa fa-stack-exchange fa-3x"></i></div><div class="social-content"><a href="' + questions[i].link + '" target="_blank">' + questions[i].title + '</a></div></div>';
            //console.log(questions[i].title);
            $('#social-scrolling-banner .scrollableArea').append(question);
          }
        }
      }
      $("#social-scrolling-banner").smoothDivScroll({
        autoScrollingMode: "always",
        autoScrollingDirection: "endlessLoopRight",
        autoScrollingStep: 1,
        autoScrollingInterval: 40
      });
    });
}

(function ($) {
  $.fn.bootstrapValidator.validators.securePassword = {
    validate: function (validator, $field, options) {

      var value = $field.val();
      if (value === '') {
        return true;
      }

      //Check the password strength
      if (value.length < 11) {
        return false;
      }

      if (value.length > 49) {
        return false;
      }

      //validate 1 digit
      if (value.search(/.*\d/) < 0) {
        return false;
      }

      //validate 1 uppercase
      if (value.search(/.*[A-Z]/) < 0 && value.search(/.*[a-z]/) < 0) {
        return false;
      }

      //validate 1 special
      if (value.search(/.*[!@#$%?;]/) < 0) {
        return false;
      }

      return true;
    }
  };
}(window.jQuery));

var hash = document.location.hash;
if (hash) {
    $('.nav a[href='+hash+']').tab('show');
    setTimeout(function(){
      window.scrollTo(0,0);
    },0);
} 

// Change hash for page-reload
$('.nav a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
    window.scrollTo(0,0);
});