/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'Amazon': '&#xe90b;',
            'Android': '&#xe90a;',
            'Dribbble': '&#xe900;',
            'Dropbox': '&#xe901;',
            'Ebay': '&#xe90f;',
            'Facebook': '&#xe902;',
            'Git': '&#xe90e;',
            'Github': '&#xe90c;',
            'Google': '&#xe913;',
            'Google Plus': '&#xe914;',
            'Instagram': '&#xe903;',
            'Medium': '&#xe904;',
            'Kickstarter': '&#xe917;',
            'Paypal': '&#xe905;',
            'Pinterest': '&#xe90d;',
            'Twitter': '&#xe906;',
            'Redddit': '&#xe910;',
            'Slack': '&#xe918;',
            'Snapchat': '&#xe911;',
            'Spotify': '&#xe916;',
            'TripAdvisor': '&#xe912;',
            'Visualmodo': '&#xe907;',
            'WhatsApp': '&#xe915;',
            'WordPress': '&#xe908;',
            'Youtube': '&#xe909;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icomoon-liga/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
