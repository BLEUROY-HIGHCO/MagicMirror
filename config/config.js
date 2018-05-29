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
            position: "top_left"
        },
        {
            module:   "calendar",
            header:   "Événements Highco Shopper",
            position: "top_left",
            config:   {
                timeFormat:             'absolute',
                dateFormat:             'D MMMM',
                fullDayEventDateFormat: 'D MMMM',
                urgency:                0,
                fade:                   0,
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
                timeFormat:             'absolute',
                dateFormat:             'D MMMM',
                fullDayEventDateFormat: 'D MMMM',
                urgency:                0,
                fade:                   0,
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
            header:   "Jours",
            position: "top_left",
            config:   {
                timeFormat: 'absolute',
                dateFormat: 'D MMMM',
                urgency:    0,
                fade:       0,
                calendars:  [
                    {
                        maximumEntries: 5,
                        symbol:         "calendar-check-o ",
                        url:            "webcal://calendar.google.com/calendar/ical/fr.french%23holiday%40group.v.calendar.google.com/public/basic.ics"
                    }
                ]
            }
        },
        // {
        //     module:   "compliments",
        //     position: "lower_third"
        // },
        // {
        //     module:   "currentweather",
        //     position: "top_right",
        //     config:   {
        //         location:   "New York",
        //         locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
        //         appid:      "YOUR_OPENWEATHER_API_KEY"
        //     }
        // },
        // {
        //     module:   "weatherforecast",
        //     position: "top_right",
        //     header:   "Weather Forecast",
        //     config:   {
        //         location:   "New York",
        //         locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
        //         appid:      "YOUR_OPENWEATHER_API_KEY"
        //     }
        // },
        // {
        //     module:   "newsfeed",
        //     position: "bottom_bar",
        //     config:   {
        //         feeds:           [
        //             {
        //                 title: "New York Times",
        //                 url:   "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
        //             }
        //         ],
        //         showSourceTitle: true,
        //         showPublishDate: true
        //     }
        // },
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}
