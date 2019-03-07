"use strict";
exports.__esModule = true;
var express = require("express");
var util = require("util");
var router = express.Router();
exports.router = router;
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'ExpressAngular'
    });
});
router.get('/menuitems', function (req, res, next) {
    res.json({
        menuitems: [
            { ButtonName: 'About' },
            { ButtonName: 'Contact' },
            { ButtonName: 'Login' }
        ]
    });
});
router.post('/login', function (req, res, next) {
    console.log("login received :" + util.inspect(req.body, false, null));
    res.sendStatus(200);
});
router.get('/boards', function (req, res, next) {
    res.json([{
            "manufacturer": "Dior",
            "manufacturer_logo": "Dior_logo.png",
            "logo_class": "",
            "boards": [
                {
                    "name": "烈艳蓝金",
                    "board_types": [{ "board_type": "French" }],
                    "manufacturer": "Dior",
                    "manufacturer_logo": "Dior_logo.png",
                    "description": "come from French",
                    "image": "lieyanlanjin.png",
                    "long_description": "迪奥烈艳蓝金唇膏是一类唇膏，第一支诞生于蒙田大道30号的Dior迪奥精品店，自1953年至今，已经幻变超过了1500多种缤纷色彩。第一支Dior迪奥烈艳蓝金唇膏 ，诞生于蒙田大道30号的Dior迪奥精品店，它的创作灵感源自Dior迪奥先生钟爱的时装面料，可谓纯粹色彩的浓缩与凝练。这款堪称完美的唇膏，正是当时女性期盼已久的恩物，一经推出便广受欢迎。Dior迪奥烈艳蓝金唇膏俨已成为了Dior迪奥彩妆的经典象征。自1953年至今，这款必备的时尚单品，已经幻变超过了1500多种缤纷色彩。至今，Dior迪奥烈艳蓝金唇膏，已经延续了60年的色彩艺术历史。值其60年诞辰之际，Dior迪奥重新演绎了这款唇膏钜作。",
                    "sizes": [
                        { "volume": 520, "length": 285, "width": 55.5, "sail_min": "粉红色", "sail_max": "5.2" },
                        { "volume": 28, "length": 280, "width": 57.5, "sail_min": "珊瑚红", "sail_max": "5.6" },
                        { "volume": 80, "length": 400, "width": 60, "sail_min": "微笑红", "sail_max": "6.0" }
                    ]
                },
                {
                    "name": "金艳幻彩",
                    "board_types": [{ "board_type": "French" }],
                    "manufacturer": "Dior",
                    "manufacturer_logo": "Dior_logo.png",
                    "description": "need much money",
                    "image": "lieyanlanjin.png",
                    "long_description": "迪奥烈艳蓝金唇膏是一类唇膏，第一支诞生于蒙田大道30号的Dior迪奥精品店，自1953年至今，已经幻变超过了1500多种缤纷色彩。第一支Dior迪奥烈艳蓝金唇膏 ，诞生于蒙田大道30号的Dior迪奥精品店，它的创作灵感源自Dior迪奥先生钟爱的时装面料，可谓纯粹色彩的浓缩与凝练。这款堪称完美的唇膏，正是当时女性期盼已久的恩物，一经推出便广受欢迎。Dior迪奥烈艳蓝金唇膏俨已成为了Dior迪奥彩妆的经典象征。自1953年至今，这款必备的时尚单品，已经幻变超过了1500多种缤纷色彩。至今，Dior迪奥烈艳蓝金唇膏，已经延续了60年的色彩艺术历史。值其60年诞辰之际，Dior迪奥重新演绎了这款唇膏钜作。",
                    "sizes": [
                        { "volume": 851, "length": 275, "width": 55.5, "sail_min": "酒红色", "sail_max": "5.2" },
                        { "volume": 770, "length": 278, "width": 57.5, "sail_min": "树莓色", "sail_max": "5.6" },
                        { "volume": 641, "length": 318, "width": 60, "sail_min": "枣红色", "sail_max": "6.0" }
                    ]
                },
                {
                    "name": "魅惑",
                    "board_types": [{ "board_type": "French" }, { "board_type": "滋润型" }],
                    "manufacturer": "Dior",
                    "manufacturer_logo": "Dior_logo.png",
                    "description": "i can't pay",
                    "image": "lieyanlanjin.png",
                    "long_description": "迪奥烈艳蓝金唇膏是一类唇膏，第一支诞生于蒙田大道30号的Dior迪奥精品店，自1953年至今，已经幻变超过了1500多种缤纷色彩。第一支Dior迪奥烈艳蓝金唇膏 ，诞生于蒙田大道30号的Dior迪奥精品店，它的创作灵感源自Dior迪奥先生钟爱的时装面料，可谓纯粹色彩的浓缩与凝练。这款堪称完美的唇膏，正是当时女性期盼已久的恩物，一经推出便广受欢迎。Dior迪奥烈艳蓝金唇膏俨已成为了Dior迪奥彩妆的经典象征。自1953年至今，这款必备的时尚单品，已经幻变超过了1500多种缤纷色彩。至今，Dior迪奥烈艳蓝金唇膏，已经延续了60年的色彩艺术历史。值其60年诞辰之际，Dior迪奥重新演绎了这款唇膏钜作。",
                    "sizes": [
                        { "volume": 5, "length": 205, "width": 56, "sail_min": "丁香紫", "sail_max": "5.8" },
                        { "volume": 1, "length": 179, "width": 58.5, "sail_min": "浅粉色", "sail_max": "6.0" },
                        { "volume": 4, "length": 199, "width": 60.5, "sail_min": "偏橘色", "sail_max": "6.2" }
                    ]
                },
            ]
        }, {
            "manufacturer": "RRD", "manufacturer_logo": "rrd_logo.jpg", "logo_class": "rrd_logo_class", "boards": [{ "name": "Hardcore Wave Ltd V5", "board_types": [{ "board_type": "Wave" }], "manufacturer": "RRD", "manufacturer_logo": "rrd_logo.jpg", "description": "Side Shore Wave Pro", "image": "hardcorewave-ltd-88-2-212x349.png", "long_description": "After 4 years of ridng waves all over the world with the Hardcore wave shapes V4 we have been able to test lots of different new shapes or prototype boards, used with different riding styles. Today we have been able to ﬁnalize 4 new magic shapes. The HardcoreWave V5 are the most vesatile Hardcore boards ever build it since their introduction in our collection. 4 Shapes with 10lt of difference in between 98 all the way down to 68 all equipped with 4 Fins slot box system for maxium drive trough the top and bottom turns.", "sizes": [{ "volume": 68, "length": 227, "width": 53.5, "sail_min": "3.2", "sail_max": "4.7" }, { "volume": 78, "length": 227, "width": 55.5, "sail_min": "3.7", "sail_max": "5.3" }, { "volume": 88, "length": 228, "width": 58.5, "sail_min": "4.2", "sail_max": "5.6" }] }, { "name": "Wave Cult Ltd V5", "board_types": [{ "board_type": "Wave" }], "manufacturer": "RRD", "manufacturer_logo": "rrd_logo.jpg", "description": "Wave Onshore", "image": "wavecult-5-ltd-92-212x349.png", "long_description": "The new shapes of the wave cults V5 incorporate the latest development of our hi performance sailboards line: wider body boards that are easier to use, more stable, planing earlier. This main feature (wide body) might seem in contrast with maneuverability, but when you actually work with a thinner rail proﬁle, increased rocker and tail V then the whole right equation for performance level is achieved again with the good additions that the extra width will bring. A magic new formula that will improve the amount of sailing days in waves and will help improving your level.", "sizes": [{ "volume": 75, "length": 229, "width": 57, "sail_min": "3.7", "sail_max": "5.2" }, { "volume": 83, "length": 230, "width": 59, "sail_min": "4.0", "sail_max": "5.7" }, { "volume": 92, "length": 231, "width": 61, "sail_min": "4.5", "sail_max": "6.2" }] }, { "name": "Firewave Ltd", "board_types": [{ "board_type": "Wave" }], "manufacturer": "RRD", "manufacturer_logo": "rrd_logo.jpg", "description": "Fast Wave Board", "image": "rewave-102-212x349.png", "long_description": "When you think you have tried all the possible wave boards shapes, you will wake up one day and be able to try one of our new boards in the RRD collection: THE FIREWAVE. It's really fast, quick to plane, and accelerates like a freeride board, yet it turns smoothly and precisely on the face of any waves.", "sizes": [{ "volume": 92, "length": 234, "width": 62, "sail_min": "4.0", "sail_max": "5.7" }, { "volume": 102, "length": 235, "width": 64, "sail_min": "4.5", "sail_max": "6.2" }, { "volume": 112, "length": 235, "width": 66, "sail_min": "4.7", "sail_max": "6.7" }] }, {
                    "name": "TwinTip Ltd V4",
                    "description": "Freestyle Pro", "board_types": [{ "board_type": "Freestyle" }], "manufacturer": "RRD", "manufacturer_logo": "rrd_logo.jpg", "image": "twintip-v4-91-212x349.png", "long_description": "The Twin Tip V4 is RRD's pure blooded long running and highly popular Freestyle Board line.  This year the TT is considerably wider in the mid rear section of the board and slightly narrower in the mid front section to allow a more parallel line ﬂow: the new outline enables the board to have more leverage in this area in order to enhance the pop, and also have more surface area for easier landings. The more parallel lines of the outline also further improve the speed of the board and its upwind capacity, as we have found already in our Wave Cult Quads.", "sizes": [{ "volume": 91, "length": 230, "width": 59.5, "sail_min": "3.3", "sail_max": "5.2" }, { "volume": 101, "length": 227, "width": 63, "sail_min": "4.2", "sail_max": "5.7" }]
                }, { "name": "Freestyle Wave Ltd V3", "board_types": [{ "board_type": "Freestyle" }, { "board_type": "Wave" }], "manufacturer": "RRD", "manufacturer_logo": "rrd_logo.jpg", "description": "Freestyle Wave Pro", "image": "rrd-freestyle-wave-ltd-v3-100-2-212x349.png", "long_description": "As the trend of wave boards shapes keeps going towards multiﬁn hulls, we have preferred to retain a 'classic', reliable and fast planing single ﬁn board line that would be suited for those who wish for a 'do it all' type of short board. The new Freestyle Wave boards, Version 3, are four new simple, reﬁned, retuned shapes that will cover the whole range of use of this program.", "sizes": [{ "volume": 88, "length": 234, "width": 59, "sail_min": "4.0", "sail_max": "6.2" }, { "volume": 94, "length": 236, "width": 61, "sail_min": "4.2", "sail_max": "6.4" }, { "volume": 100, "length": 237, "width": 63, "sail_min": "4.5", "sail_max": "6.7" }] }, { "name": "Firemove Ltd V2", "board_types": [{ "board_type": "Slalom" }], "manufacturer": "RRD", "manufacturer_logo": "rrd_logo.jpg", "description": "Wide Body Freemove", "image": "remove-ltd-v2-112-212x349.png", "long_description": "The most contradictive design in our windsurﬁng collection has conquered the heart of many passionate windsurfer in last two years since its ﬁrst launch on the market.The Firemove concept is based on an oversized middle width, an extra reduced volume thickness and rail shape, combined with a very long ﬂat section scooprocker line. An impossible combination for most at ﬁrst, a real innovation for all after testing this magic breed of board shapes.This year we have gone one step further and reﬁned in the most important details of this new line of boards.", "sizes": [{ "volume": 102, "length": 238, "width": 68, "sail_min": "5.2", "sail_max": "7.2" }, { "volume": 112, "length": 238, "width": 74, "sail_min": "6.0", "sail_max": "8.0" }, { "volume": 122, "length": 238, "width": 79, "sail_min": "6.8", "sail_max": "9.0" }] }, { "name": "X-Fire Ltd V7", "board_types": [{ "board_type": "Slalom" }], "manufacturer": "RRD", "manufacturer_logo": "rrd_logo.jpg", "description": "Slalom / Race", "image": "x-re-v7-114-212x349.png", "long_description": "Incredible effort and dedication in the development process was the theme behind our all new X-Fire range. Five completely new designs with a different concept has yielded the best slalom boards to ever come from the RRD think tank. Shaper Aurelio Verdi and testing partner Arnon Dagan tested many different concepts with a rigorous R&D program trying to ﬁnd the smallest details to improve on the back-to-back PWA world title winning boards under the feet of Antoine Albeau. Our design mandate was to keep our renowned market reference acceleration and top-speed whilst increasing the ease of use and range. Success!", "sizes": [{ "volume": 105, "length": 235, "width": 65, "sail_min": "6.0", "sail_max": "7.8" }, { "volume": 114, "length": 235, "width": 70, "sail_min": "6.2", "sail_max": "8.4" }, { "volume": 122, "length": 228, "width": 81, "sail_min": "7.5", "sail_max": "9.5" }] }]
        }, {
            "manufacturer": "Starboard", "manufacturer_logo": "starboard_logo.jpg", "logo_class": "", "boards": [{ "name": "Quad Wave", "board_types": [{ "board_type": "Wave" }], "manufacturer": "Starboard", "manufacturer_logo": "starboard_logo.jpg", "description": "Wave", "image": "quad_c.png", "long_description": "The Quads are Starboard's wave boards. They generate maximum speed and drive, bringing an awesome ﬂow and power to your sailing.  With the new 2013 shapes, Quads perform in all wave & wind conditions.", "sizes": [{ "volume": 70, "length": 223, "width": 56, "sail_min": "2.3", "sail_max": "4.7" }, { "volume": 74, "length": 227, "width": 57.5, "sail_min": "3.0", "sail_max": "5.0" }, { "volume": 77, "length": 228, "width": 58, "sail_min": "3.5", "sail_max": "5.5" }] }, {
                    "name": "nuEVO Wave",
                    "board_types": [{ "board_type": "Wave" }], "manufacturer": "Starboard", "manufacturer_logo": "starboard_logo.jpg", "description": "Wave", "image": "nuevo_w.png", "long_description": "The NuEvo is a high-performance surfboard style wave board. It excels in sideshore to side-onshore conditions, from knee to logo high waves. Its specialties are tight rail turns with excellent rail-to-rail transitions and extra-tight top turns. The NuEvos still have good capabilities in larger side-offshore wave conditions.", "sizes": [{ "volume": 73, "length": 221, "width": 55, "sail_min": "3.0", "sail_max": "5.0" }, { "volume": 80, "length": 224, "width": 57, "sail_min": "4.2", "sail_max": "5.3" }, { "volume": 93, "length": 227, "width": 59.5, "sail_min": "4.7", "sail_max": "6.0" }]
                }, { "name": "KODE Freestyle Wave", "board_types": [{ "board_type": "Wave" }, { "board_type": "Freestyle" }], "manufacturer": "Starboard", "manufacturer_logo": "starboard_logo.jpg", "description": "Freestyle Wave", "image": "kode_freewave_w.png", "long_description": "The Kode Waves are Philip Koster's fast, aerial style 'next- generation' signature wave boards. The Kode Waves are for riders who like to blend aerials and takas with powerful wave- carving. Their straight-line speed and acceleration also make them the most ideal for big airs and double combination loops.", "sizes": [{ "volume": 72, "length": 223, "width": 55.5, "sail_min": "3.0", "sail_max": "5.0" }, { "volume": 77, "length": 227, "width": 58, "sail_min": "3.3", "sail_max": "5.3" }, { "volume": 82, "length": 233, "width": 58.5, "sail_min": "3.5", "sail_max": "5.5" }] }, { "name": "Flare Freestyle", "board_types": [{ "board_type": "Freestyle" }], "manufacturer": "Starboard", "manufacturer_logo": "starboard_logo.jpg", "description": "Freestyle", "image": "are_c.png", "long_description": "The Flares are boards that pop air easily and respond to a rider's move instantaneously. They are fast in acceleration and feel compact and light in sliding and aerial maneuvers.  They are very light yet remain extremely strong. The design of the board also helps to push riders to go bigger each time while being forgiving enough to help them ﬁnish each move.", "sizes": [{ "volume": 81, "length": 227, "width": 57.5, "sail_min": "2.5", "sail_max": "5.5" }, { "volume": 91, "length": 230, "width": 57.5, "sail_min": "4.5", "sail_max": "6.0" }, { "volume": 101, "length": 227, "width": 59.5, "sail_min": "5.0", "sail_max": "6.8" }] }, { "name": "Isonic Slalom", "board_types": [{ "board_type": "Slalom" }], "manufacturer": "Starboard", "manufacturer_logo": "starboard_logo.jpg", "description": "Slalom", "image": "isonic_w.png", "long_description": "They are fast racing machines designed for the highest top speeds, the highest average speeds, the quickest accelerations with powerful overtaking abilities throughout a wide wind range.  The range itself is designed around the PWA's three board format: a perfect quiver covering all conditions can be achieved by selecting one board most suitable from each of the iSonic's three size-categories listed on the right.", "sizes": [{ "volume": 80, "length": 238, "width": 58, "sail_min": "5.2", "sail_max": "7.0" }, { "volume": 87, "length": 238, "width": 59, "sail_min": "5.2", "sail_max": "7.0" }, { "volume": 90, "length": 231, "width": 63, "sail_min": "5.6", "sail_max": "7.8" }] }]
        }]);
});
