/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address:     "localhost", // Address to listen on, can be:
                              // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                              // - another specific IPv4/6 to listen on a specific interface
                              // - "", "0.0.0.0", "::" to listen on any interface
                              // Default, when address config is left out, is "localhost"
    port:        8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
                                                           // or add a specific IPv4 of 192.168.1.5 :
                                                           // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                           // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                           // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    language:   "fr",
    timeFormat: 24,
    units:      "metric",

    modules: [
        {
            module: "alert",
        },
        {
            module:   "updatenotification",
            position: "top_bar"
        },
        {
            module:   "clock",
            position: "top_center"
        },
        {
            module:   "calendar",
            header:   "Événements Highco Shopper",
            position: "top_left",
            config:   {
                wrapEvents: true,
                maxTitleLength: 20,
                timeFormat:             'absolute',
                dateFormat:             'D MMM',
                fullDayEventDateFormat: 'D MMM',
                urgency:                0,
                fade:                   0.1,
                calendars:              [
                    {
                        symbol: "calendar ",
                        url:    "webcal://calendar.google.com/calendar/ical/t1dvli0ri2eeu8kjkfp3d5q21s%40group.calendar.google.com/private-83adbbf0dba5466c17458cad76e57091/basic.ics"
                    }
                ]
            }
        },
        {
            module:   "calendar",
            header:   "Congés",
            position: "top_left",
            config:   {
                wrapEvents: true,
                maxTitleLength: 20,
                timeFormat:             'absolute',
                dateFormat:             'D MMM',
                fullDayEventDateFormat: 'D MMM',
                urgency:                0,
                fade:                   0.1,
                calendars:              [
                    {
                        symbol: "calendar ",
                        url:    "webcal://calendar.google.com/calendar/ical/cb4u5rsdee9r9c44gajor2dajg%40group.calendar.google.com/private-b1adac09c3d6417193d289c4bbe84c01/basic.ics"
                    }
                ]
            }
        },
        {
            module:   "calendar",
            header:   "Jours notable",
            position: "top_left",
            config:   {
                wrapEvents: true,
                maxTitleLength: 20,
                timeFormat: 'absolute',
                dateFormat: 'D MMM',
                urgency:    0,
                fade:       0.1,
                calendars:  [
                    {
                        maximumEntries: 3,
                        symbol:         "calendar-check-o ",
                        url:            "webcal://calendar.google.com/calendar/ical/fr.french%23holiday%40group.v.calendar.google.com/public/basic.ics"
                    }
                ]
            }
        },
        {
            module:   "compliments",
            position: "bottom",
            config: {
                compliments: {
                    "anytime" : [
                        "Hey there sexy !"
                    ],
                    "morning" : [
                        "Good morning, sunshine !",
                        "Who needs coffee when you have your smile?",
                        "Go get 'em, Tiger!"
                    ],
                    "afternoon" : [
                        "Hitting your stride!",
                        "You are making a difference!",
                        "You're more fun than bubble wrap!"
                    ],
                    "evening" : [
                        "You made someone smile today, I know it.",
                        "You are making a difference.",
                        "The day was better for your efforts."
                    ]
                }
            }
        },
        {
            module:   "currentweather",
            position: "top_right",
            config:   {
                location:   "Aix-en-Provence,France",
                locationID: "3038354",  //ID from http://www.openweathermap.org/help/city_list.txt
                appid:      "c43f52280386b2c3e0b7d77133c60bda"
            }
        },
        {
            module:   "weatherforecast",
            position: "top_right",
            header:   "Weather Forecast",
            config:   {
                location:   "Aix-en-Provence,France",
                locationID: "3038354",  //ID from http://www.openweathermap.org/help/city_list.txt
                appid:      "c43f52280386b2c3e0b7d77133c60bda"
            }
        },
        {
            module: "MMM-Cocktails",
            position: "top_right", // Editable footprint - Fits anywhere.
            config: {
                maxWidth: "280px",     // See provided .css file for full customization options
                header: "",
            }
        },
        {
            module: "newsfeed",
            position: "bottom", // Editable footprint - Fits anywhere.
            config: {
                feeds: [
                    {
                        title: "Le Saviez-Vous ?",
                        url: "http://feeds.feedburner.com/lesaviezvous",
                    },
                ]
            }
        },
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}
