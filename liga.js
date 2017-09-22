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
            'Add Tab': '&#xe949;',
            'Airplane Mode': '&#xe94a;',
            'Airplane Mode Off': '&#xe94b;',
            'Align Bottom': '&#xe94f;',
            'Align Left': '&#xe94c;',
            'Align Right': '&#xe94d;',
            'Align Top': '&#xe94e;',
            'Amazon': '&#xe90b;',
            'Android': '&#xe90a;',
            'Apple': '&#xe91a;',
            'Atom': '&#xe91c;',
            'Backward': '&#xe950;',
            'Behance': '&#xe91e;',
            'Bitcoin': '&#xe92b;',
            'Block Circle': '&#xe93c;',
            'Bootstrap': '&#xe91f;',
            'Brightness High': '&#xe951;',
            'Brightness Low': '&#xe952;',
            'Check': '&#xe935;',
            'Check All': '&#xe936;',
            'Double Check': '&#xe936;',
            'Check Circle': '&#xe93b;',
            'Check Circle Alt': '&#xe947;',
            'Check Square': '&#xe943;',
            'Check Square Alt': '&#xe948;',
            'Close': '&#xe937;',
            'Close Circle': '&#xe938;',
            'Cancel Circle': '&#xe938;',
            'Close Square': '&#xe944;',
            'Close Square Full': '&#xe945;',
            'Config': '&#xe953;',
            'Config Alt': '&#xe954;',
            'Dash': '&#xe92d;',
            'Door Lock': '&#xe955;',
            'Download': '&#xe956;',
            'Download Alt': '&#xe957;',
            'Dribbble': '&#xe900;',
            'Dropbox': '&#xe901;',
            'Ebay': '&#xe90f;',
            'Edit Circle': '&#xe959;',
            'Edit Square': '&#xe958;',
            'Ethereum': '&#xe92c;',
            'Exclamation Circle': '&#xe940;',
            'Question': '&#xe940;',
            'Expand': '&#xe95a;',
            'Expand 2': '&#xe95b;',
            'Expand 3': '&#xe95c;',
            'Expand 4': '&#xe95d;',
            'Expand Horizontal': '&#xe95e;',
            'Expand Vertical': '&#xe95f;',
            'Eye': '&#xe960;',
            'Eye Off': '&#xe961;',
            'Facebook': '&#xe902;',
            'Flash': '&#xe962;',
            'Flash 2': '&#xe963;',
            'Flash 3': '&#xe964;',
            'Flip Horizontal': '&#xe965;',
            'Flip Vertical': '&#xe966;',
            'Foward': '&#xe967;',
            'Git': '&#xe90e;',
            'Github': '&#xe90c;',
            'Google': '&#xe913;',
            'Google Plus': '&#xe914;',
            'Google Play': '&#xe923;',
            'Grid Circles': '&#xe968;',
            'Grid Squares': '&#xe969;',
            'Grid Squares 2': '&#xe96a;',
            'Hamburger Menu': '&#xe96b;',
            'Hamburger Menu Compact': '&#xe96c;',
            'Help': '&#xe96d;',
            'Help 2': '&#xe96e;',
            'Home': '&#xe96f;',
            'Info Circle': '&#xe93f;',
            'Inside': '&#xe970;',
            'Instagram': '&#xe903;',
            'Kickstarter': '&#xe917;',
            'LinkedIn': '&#xe924;',
            'Litecoin': '&#xe92e;',
            'MailChimp': '&#xe927;',
            'Medium': '&#xe904;',
            'Microsoft': '&#xe91b;',
            'Minus Circle': '&#xe93a;',
            'Minus Square': '&#xe942;',
            'Monero': '&#xe931;',
            'NEM': '&#xe930;',
            'Paypal': '&#xe905;',
            'Pinterest': '&#xe90d;',
            'PlayStation': '&#xe921;',
            'Plus': '&#xe934;',
            'More': '&#xe934;',
            'Plus Circle': '&#xe939;',
            'More Circle': '&#xe939;',
            'Plus Square': '&#xe941;',
            'Power': '&#xe946;',
            'React': '&#xe929;',
            'Redddit': '&#xe910;',
            'Ripple': '&#xe92f;',
            'Skype': '&#xe925;',
            'Slack': '&#xe918;',
            'Snapchat': '&#xe911;',
            'Spotify': '&#xe916;',
            'Steam': '&#xe91d;',
            'Stripe': '&#xe922;',
            'Tesla': '&#xe933;',
            'Tether': '&#xe932;',
            'TripAdvisor': '&#xe912;',
            'Twitch': '&#xe920;',
            'Twitter': '&#xe906;',
            'Vimeo': '&#xe926;',
            'Visualmodo': '&#xe907;',
            'Warning Circle': '&#xe93d;',
            'Warning Triangle': '&#xe93e;',
            'WhatsApp': '&#xe915;',
            'Wikipedia': '&#xe919;',
            'WordPress': '&#xe908;',
            'Xbox': '&#xe92a;',
            'Youtube': '&#xe909;',
            'Zendesk': '&#xe928;',
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
