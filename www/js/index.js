/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		StatusBar.overlaysWebView(false);
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// function to open twitter page with nav bar button
function twitter(){
    var ref = window.open('twitterfeed.html', '_blank', 'location=no');    
};

// function to open survey page with nav bar button
function surveys(){
    var ref = window.open('surveys.html', '_blank', 'location=no');    
};

// Each of the functions below pulls the respective JSON data 
// from the server and gives it necessary formatting for display

$(document).ready(function(){
    $(document).bind('deviceready', function(){
        onDeviceReady();
    });
    var output = $('#surveys');

    $.ajax({
        url: 'https://siueexperience.isg.siue.edu/survey.php',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $.each(data, function(i,item){ 
                var survey = '<p><a href="' 
                    + item.link + '" onclick="window.open(' + "'" 
                    + item.link + "', '_system');" + '">' 
                    + item.title + '</a></p>';
                output.append(survey);
            });
        },
        error: function(){
           output.text('There was an error loading the data.');
        }
    });
});

$(document).ready(function(){
    $(document).bind('deviceready', function(){
        onDeviceReady();
    });
    var output = $('#links');

    $.ajax({
        url: 'https://siueexperience.isg.siue.edu/links.php',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $.each(data, function(i,item){ 
                var link = '<a class="helpLink" href="' 
                    + item.description + '" onclick="window.open(' + "'" 
                    + item.description + "', '_system');" + '">' 
                    + item.title + '</a><br><br>';
                output.append(link);
            });
        },
        error: function(){
           output.text('There was an error loading the data.');
        }
    });
});

$(document).ready(function(){
    $(document).bind('deviceready', function(){
        onDeviceReady();
    });
    var output = $('#faqs');
    $.ajax({
        url: 'https://siueexperience.isg.siue.edu/faq.php',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $.each(data, function(i,item){ 
                var link = '<button class="accordion">' + item.question + '</button> <div class="panel eventdesc"> <p><br>' + item.answer + '</p> </div>';
                output.append(link);
            });
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        },
        error: function(){
           output.text('There was an error loading the data.');
        }
    });
});


$(document).ready(function(){
    $(document).bind('deviceready', function(){
        onDeviceReady();
    });
    var output = $('#monday');
    $.ajax({
        url: 'https://siueexperience.isg.siue.edu/monday.php',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $(output).html('<p class="day"> '+data[0].day+"</p>");
            $.each(data, function(i,item){ 
                var link = '<button class="accordion">' + item.title + '<br>' + item.stime + ' - ' + item.etime + '</button> <div class="panel eventdesc"> <p><br>' + item.location + '<br><br>' + item.description + '</p> </div>';
                output.append(link);
            });
            output.append('<br>');
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        },
        error: function(){
           output.text('There was an error loading the data.');
        }
    });
});

$(document).ready(function(){
    $(document).bind('deviceready', function(){
        onDeviceReady();
    });
    var output = $('#tuesday');
    $.ajax({
        url: 'https://siueexperience.isg.siue.edu/tuesday.php',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $(output).html('<p class="day"> '+data[0].day+"</p>");
            $.each(data, function(i,item){ 
                var link = '<button class="accordion">' + item.title + '<br>' + item.stime + ' - ' + item.etime + '</button> <div class="panel eventdesc"> <p><br>' + item.location + '<br><br>' + item.description + '</p> </div>';
                output.append(link);
            });
            output.append('<br>');
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        },
        error: function(){
           output.text('There was an error loading the data.');
        }
    });
});

$(document).ready(function(){
    $(document).bind('deviceready', function(){
        onDeviceReady();
    });
    var output = $('#wednesday');
    $.ajax({
        url: 'https://siueexperience.isg.siue.edu/wednesday.php',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $(output).html('<p class="day"> '+data[0].day+"</p>");
            $.each(data, function(i,item){ 
                var link = '<button class="accordion">' + item.title + '<br>' + item.stime + ' - ' + item.etime + '</button> <div class="panel eventdesc"> <p><br>' + item.location + '<br><br>' + item.description + '</p> </div>';
                output.append(link);
            });
            output.append('<br>');
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        },
        error: function(){
           output.text('There was an error loading the data.');
        }
    });
});

$(document).ready(function(){
    $(document).bind('deviceready', function(){
        onDeviceReady();
    });
    var output = $('#thursday');
    $.ajax({
        url: 'https://siueexperience.isg.siue.edu/thursday.php',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $(output).html('<p class="day"> '+data[0].day+"</p>");
            $.each(data, function(i,item){ 
                var link = '<button class="accordion">' + item.title + '<br>' + item.stime + ' - ' + item.etime + '</button> <div class="panel eventdesc"> <p><br>' + item.location + '<br><br>' + item.description + '</p> </div>';
                output.append(link);
            });
            output.append('<br>');
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        },
        error: function(){
           output.text('There was an error loading the data.');
        }
    });
});

$(document).ready(function(){
    $(document).bind('deviceready', function(){
        onDeviceReady();
    });
    var output = $('#friday');
    $.ajax({
        url: 'https://siueexperience.isg.siue.edu/friday.php',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $(output).html('<p class="day"> '+data[0].day+"</p>");
            $.each(data, function(i,item){ 
                var link = '<button class="accordion">' + item.title + '<br>' + item.stime + ' - ' + item.etime + '</button> <div class="panel eventdesc"> <p><br>' + item.location + '<br><br>' + item.description + '</p> </div>';
                output.append(link);
            });
            output.append('<br>');
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        },
        error: function(){
           output.text('There was an error loading the data.');
        }
    });
});

$(document).ready(function(){
    $(document).bind('deviceready', function(){
        onDeviceReady();
    });
    var output = $('#saturday');
    $.ajax({
        url: 'https://siueexperience.isg.siue.edu/saturday.php',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $(output).html('<p class="day"> '+data[0].day+"</p>");
            $.each(data, function(i,item){ 
                var link = '<button class="accordion">' + item.title + '<br>' + item.stime + ' - ' + item.etime + '</button> <div class="panel eventdesc"> <p><br>' + item.location + '<br><br>' + item.description + '</p> </div>';
                output.append(link);
            });
            output.append('<br>');
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        },
        error: function(){
           output.text('There was an error loading the data.');
        }
    });
});

$(document).ready(function(){
    $(document).bind('deviceready', function(){
        onDeviceReady();
    });
    var output = $('#sunday');
    $.ajax({
        url: 'https://siueexperience.isg.siue.edu/sunday.php',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $(output).html('<p class="day"> '+data[0].day+"</p>");
            $.each(data, function(i,item){ 
                var link = '<button class="accordion">' + item.title + '<br>' + item.stime + ' - ' + item.etime + '</button> <div class="panel eventdesc"> <p><br>' + item.location + '<br><br>' + item.description + '</p> </div>';
                output.append(link);
            });
            output.append('<br>');
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                }
            }
        },
        error: function(){
           output.text('There was an error loading the data.');
        }
    });
});
