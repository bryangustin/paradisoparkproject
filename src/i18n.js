import { createI18n } from 'vue-i18n'


function loadLocaleMessages() {

    const messages = {
        en: {


          // desktopmenu
            menus: {
                menu1: "Paradiso",
                menu2: 'Services',
                dMenu1: 'Sauna & Steam room',
                dMenu2: 'Swimming pool',
                dMenu3: 'Winter Garden',
                dMenu4: 'Garden and pond',
                dMenu5: 'Catering',
                menu3: 'Rooms',
                menu4: 'Events',
                contact:'Contact',
                btn:'BOOK NOW'

            },
            // Home
            home: {
                title1: "A true",
                title2: "paradise,",
                title3: "close to your home...",
                subtitle1: 'Would you like to relax in a totally unusual setting in Belgium, for a few hours, a day or a longer stay?',
                subtitle2: 'Take a dive into a 30 degree pool, enjoy a bubble bath to relax, a Nordic bath or a Moroccan hammam?',
                subtitle3: 'All this in a unique setting and in one same place?',
                button: "Book now",
                description: "Discover the Paradiso Park Estate, a 20 hectare domain between Brussels and Antwerp dedicated to nature and well-being ...",

                philosophy: {
                    title: "Our philosophy",
                    description1: "Our domain is designed for people who need to disconnect or have a real change of scenery a few kilometres from home.  In a totally new place, nature and well-being are celebrated with equipment inspired by rituals from around the world.",
                    description2: "The estate is a majestic place that offers an immediate sense of travel and change of air. Book the estate for a few hours or a few days, with friends, for an event or a seminar and enjoy a fully privatised estate and all the services it offers.",
                },

                category: {
                    services: {
                        title: 'Our services',
                        description: 'The domain offers a whole range of services that will make your experience unique, an indoor heated swimming pool, an indoor and outdoor sauna, a Moroccan hammam... Let yourself be surprised by the quality of the facilities of the estate that will take you on a journey through the world and its different well-being rituals...',
                    },
                    rooms: {
                        title: 'The rooms',
                        description: 'Five beautifully appointed rooms and facilities that can accommodate up to 30 people on site. Discover our 5 rooms and all their services.',
                    },
                    events: {
                        title: 'Your events',
                        description: 'Five beautifully appointed rooms and facilities that can accommodate up to 30 people on site. Discover our 5 rooms and all their services.',
                    },
                },
            },

            // Services
            services: {
                title: 'Our services',
                sauna: {
                    title: 'Sauna & Hammam',
                    description: 'There is nothing like a sauna or a hammam to relax and detoxify your muscles. Discover our wonderful hammam and indoor sauna, as well as our Nordic bath and outdoor sauna, ideal when the temperature drops to enjoy a Finnish fitness experience.',
                    alt: 'Sauna',
                },
                pool: {
                    title: 'Pool',
                    description: 'A huge indoor pool heated to 30 degrees as the central feature of the property. No, you are not dreaming... You never dreamed of such a paradise like pool in total privacy???.',
                    alt: 'pool',
                },
                wintergarden: {
                    title: 'Winter garden',
                    description: 'An evening by the fire, with a good book and a delicious cup of tea? A moment with friends to rethink the world? An unusual place to meet up with friends or colleagues? Enjoy our winter garden during the coldest months of the year. A unique and comforting environment, just a stone\'s throw from your home...',
                    alt: 'Winter garden',
                },
                garden: {
                    title: 'Garden and pond',
                    description: 'Let yourself be surprised by the variety of landscapes and the richness of the surroundings: between wild nature, ponds, gardens and waterfalls... Enjoy the sun on your lounger or a relaxing Nordic bath, but above all enjoy the tranquillity of this magical and timeless place.',
                    alt: 'Garden and pond',
                },
                catering: {
                    title: 'Catering',
                    description: 'We offer all the facilities you need to organise your meals during your stay in Paradiso Park, but you can also call on us to organise a catering service. We work with a number of regular partners to meet all your requirements. Do not hesitate to contact us using the form at the bottom of the page and tell us your wishes.',
                    alt: 'Catering',
                },
            },

            // Events
            events: {
                title: 'Our events',
                wedding: {
                    title: 'Private events',
                    description1: 'A birthday, a wedding or a bachelor party? Our space lends itself to all those days that mark your existence, whatever the type of event. An event in Paradiso Park will remain forever in the memory of all those who accompany you during your stay...',
                    description2: 'Are you interested?  Do not hesitate to fill in the form at the bottom of the page to plan your event with us!',
                    alt: '',
                },
                seminar: {
                    title: 'Professional events',
                    description1: 'Would you like to organise a seminar, yoga classes, a wellness treatment or an event for your company? Do not hesitate to contact us directly. We can organise a whole range of private events for you, adapting our formulas to your needs.',
                    description2: 'Are you interested?  Do not hesitate to fill in the form at the bottom of the page to plan your event with us!',
                    alt: '',
                },
            },

            // Booking
            booking: {
                title: 'Make your choice',
                timeslot: {
                    title: 'Reserve a time slot',
                    description: 'Looking for a break between meetings, or a moment in a unique place with a few friends or a working group?',
                    button: 'BOOK',
                },
                fullday: {
                    title: 'Book an on-site stay',
                    description: 'Want to share an incredible moment with family, colleagues or friends?  Want to organise a group fitness retreat? Discover our offers for stays of one or more nights in the heart of the Paradiso Park Estate',
                    button: 'BOOK',
                },
            },

            // Contact
            contact: {
                title: 'Contact',
                description: 'Are you interested in renting Paradiso Park and do you want more information? Fill in this form and our team will contact you as soon as possible.',
                address: 'Address',
                phone: 'Phone number',
                mail: 'E-mail',
                label: {
                    name: 'Name and first name',
                    mail: 'E-mail',
                    phone: 'Phone number',
                    message: 'Your question',
                },
                placeholder:{
                    name: 'Name',
                    mail: 'Email',
                    phone: 'Phone',
                    message: 'Message',
                },
                submit:'Submit',
            },

            term:'Terms',
            policy:'Policy',
            faq:'FAQ',
            newsletter:{
                text:'SUBSCRIBE TO OUR NEWSLETTER',
                placeholder:'Enter your email',
                subscribe:"Subscribe"
            },

            // Privacy policy
            privacy: {

                title: "Privacy Policy & Cookie Policy",

                sub1: "A. Introduction",
                hed1: "Introduction",
                cond1: "The privacy of visitors to our website is very important to us, and we are committed to protecting it. This policy details what we do with your personal information.",
                cond2: "Consenting to our use of cookies in accordance with this policy when you first visit our website allows us to use cookies each time you visit our site.",

                sub2: "B. Source",
                hed2: "This document was created using a template from SEQ Legal (seqlegal.com)",

                sub3: "C. Collection of personal information",
                hed3: "The following types of personal information may be collected, stored and used :",
                cond3: "Information about your computer, including your IP address, geographic location, browser type and version, and operating system ;",
                cond4: "Information about your visits to and use of this website including the referring source, length of visit, page views, and website navigation paths ;",
                cond5: "Information such as your e-mail address, which you provide to us when you register with the site ;",
                cond6: "Information you enter when you create a profile on our website such as your name, profile picture, gender, date of birth, relationship status, interests and hobbies, education and work history ;",
                cond7: "Information such as your name and email address, which you enter to subscribe to our emails and/or newsletters ;",
                cond8: "Information that you enter when you use the services of our website ;",
                cond9: "Information generated while using our site, including when, how often and under what circumstances you use it ;",
                cond10: "Information relating to the purchases you make, the services you use or the transactions you carry out on our site, which includes your name, address, telephone number, e-mail address and banking information ;",
                cond11: "Information that you post to our website with the intention of posting to the internet, which includes your username, profile pictures and the content of your posts ;",
                cond12: "Information contained in any communications you send to us by email or on our website, including their content and metadata ;",
                cond13: "Any other personal information you provide to us ;",
                cond14: "Before disclosing personal information about another person to us, you must obtain that person's consent to the disclosure and processing of that personal information under the terms of this policy.",

                sub4: "D. Use of your personal information",
                hed4: "Personal information provided to us through our website will be used for the purposes described in this policy or on the relevant site pages. We may use your personal information to:",
                cond15: "To administer our website and our business ;",
                cond16: "Personalize our website for you ;",
                cond17: "Enable your use of the services offered on our website ;",
                cond18: "Send you the goods purchased on our site ;",
                cond19: "To provide you with the services purchased on our site ;",
                cond20: "Send you statements, invoices and payment reminders, and collect your payments ;",
                cond21: "Send you non-marketing commercial communications ;",
                cond22: "Send you email notifications that you have specifically requested ;",
                cond23: "Send you our newsletter by email, if you have requested it (you can inform us at any time of your wish to no longer receive our newsletter) ;",
                cond24: "Send you marketing communications relating to our business or carefully selected third-party businesses which we think may be of interest to you, by post, or where you have expressly consented, by email or similar technology (you can tell us at any time of your wish to no longer receive marketing communications) ;",
                cond25: "Provide statistical information about our users to third parties (without such third parties being able to identify individual users with this information) ;",
                cond26: "Dealing with requests and complaints relating to your website made by or about you ;",
                cond27: "Maintaining the security of our website and preventing fraud ;",
                cond28: "Checking compliance with the terms and conditions that govern the use of our website (including monitoring private messages sent through our website's private messaging service) ;",
                cond29: "Other uses.",
                cond30: "If you submit personal information to our website for the purpose of publishing it, we will publish it and may use that information in accordance with the permissions you grant us. Your privacy settings can be used to limit the publication of your information on our website and can be adjusted in your privacy settings on the website. Without your express consent, we will not provide your personal information to third parties for their direct marketing or that of other third parties.",

                sub5: "E. Disclosure of your personal information",
                hed5: "We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers, or subcontractors as reasonably necessary for the purposes set out in this policy. We may disclose your personal information to any member of our corporate group (this means our subsidiaries, our ultimate holding company and all of its subsidiaries) insofar as reasonably necessary for the purposes set out in this policy.We may disclose your personal information :",
                cond31: "To the extent that we are required to do so by law ;",
                cond32: "As part of any ongoing or future legal proceedings ;",
                cond33: "To establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk);",
                cond34: "To the purchaser (or potential purchaser) of any business or asset in our possession which we wish (or contemplate) to sell;",
                cond35: "To anyone whom we reasonably believe to be a party to a court or other competent authority for the disclosure of such personal information if, in our opinion, such court or authority would be likely to require disclosure of such personal information.",
                cond36: "Except as otherwise provided in this policy, we will not share your personal information with third parties.",

                sub6: "F. International data transfers",
                hed6: "The information we collect may be stored, processed and transferred to any country in which we operate, to enable us to use the information in accordance with this policy.",
                cond37: "The information we collect may be transferred to the following countries, which do not have data protection laws equivalent to those in force in the European Economic Area: the United States of America, Russia, Japan, China and India.",
                cond38: "Personal information that you publish on our website or submit for publication may be available, via the internet, around the world. We cannot prevent the use, good or bad, of this information by third parties.",
                cond39: "You expressly agree to the transfer of personal information described in this Section F.",

                sub7: "G. Retention of your personal information",
                hed7: "This Section G details our data retention policies and procedures, designed to help us comply with our legal obligations regarding the retention and deletion of personal information.",
                cond40: "Personal information that we process for any purpose is not kept longer than necessary for that purpose or those purposes.",
                cond41: "Without prejudice to Article G-2, we will generally delete personal data in these categories.",
                cond42: "Notwithstanding the other provisions of this Section G, we will retain documents (including electronic documents) containing personal data: 1. To the extent that we are required to do so by law; 2. If we believe that the documents may be relevant to any pending or potential legal proceedings; 3. To establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk).",

                sub8: "H. Security of your personal information",
                hed8: "We will take reasonable technical and organizational precautions to prevent the loss, misuse or alteration of your personal information.",
                cond43: "We will store all personal information you provide to us on secure servers (password and firewall protected).",
                cond44: "All electronic financial transactions conducted through our website will be protected by encryption technologies.",
                cond45: "You acknowledge that the transmission of information over the internet is inherently insecure, and that we cannot guarantee the security of your data sent over the internet.",
                cond46: "You are responsible for keeping the password you use to access our website confidential; we will not ask you for your password (except when you log in to our website).",

                sub9: "I. Amendements",
                hed9: "We may occasionally update this policy by posting a new version on our website. You should check this page regularly to ensure that you are aware of any changes made to this policy. We may notify you of changes to this policy by email or through our website's private messaging service.",

                sub10: "J. Your Rights",
                hed10: "You may ask us to provide you with any personal information we hold about you; the transfer of such information will be subject to the following conditions:",
                cond47: "The Settlement of Fees.",
                cond48: "Presentation of sufficient proof of your identity (for these purposes we generally accept a notarized photocopy of your passport plus an original copy of a utility bill showing your current address).",
                cond49: "We may withhold personal information that you request to the extent permitted by law.",
                cond50: "You can ask us at any time not to process your personal information for marketing purposes.",
                cond51: "In practice, you will express your consent in advance to our use of your personal information for marketing purposes or we will provide you with an opportunity to opt out of the use of your personal information for marketing purposes.",

                sub11: "K. Third Party Websites",
                hed11: "Our website contains hypertext links to third-party websites and information about them. We have no control over these sites, and are not responsible for their privacy policies or practices.",

                sub12: "L. Updating Information",
                hed12: "Please let us know if the personal information we hold about you needs to be corrected or updated.",

                sub13: "M. Cookies",
                hed13: "Our website uses cookies. A cookie is a file containing an identifier (a string of letters and numbers) sent by a web server to a web browser and stored by the browser. The identifier is then sent back to the server each time browser requests a page from the server Cookies can be persistent or session cookies: a persistent cookie is stored by the browser and remains valid until its expiry date, unless deleted by the user before this expiration date; as for a session cookie, it expires at the end of the user session, when the browser is closed. Cookies generally do not contain any information allowing a user to be personally identified, but the personal information we store about you may be linked to information stored in cookies and obtained by cookies.",
                cond52: "The names of the cookies we use on our website and the purposes for which we use them are described below: We use Google Analytics and Adwords on our website to: recognize a computer when a user visits the website / track users as they browse the website / enable the use of a shopping cart on the website / improve the use of a website / analyze the use of the website / administer the website / prevent the fraud and improve website security / personalize the website for each user / send targeted advertisements that may be of interest to certain users.",
                cond53: "Most browsers allow you to refuse or accept cookies. For example: 1. With Internet Explorer (version 10), you can block cookies using the cookie management override settings available by clicking  Tools, Internet Options, Privacy then Advanced; 2. With Firefox (version 24), you can block all cookies by clicking on Tools, Options, Privacy and then selecting Use custom settings for history from the drop-down menu and unchecking Accept cookies from sites 3. With Chrome (version 29), you can block all cookies by accessing the Customize and control menu and then clicking on Settings, Show advanced settings and Content settings and then selecting Prevent sites from setting data in the Cookies header.",
                cond54: "Blocking all cookies will have a negative impact on the use of many websites. If you block cookies, you will not be able to use all the features of our website.",
                cond55: "You can delete cookies already stored on your computer. Example: 1. With Internet Explorer (version 10), you must delete the cookies file manually; 2. With Firefox (version 24), you can delete cookies by clicking Tools, Options, and Privacy, then selecting Use custom settings for history and by clicking on ???Show cookies???, then on ???Delete all cookies??? 3. with Chrome (version 29), you can delete all cookies by accessing the ???Customize and control??? menu and then clicking on Settings, Show advanced settings and Delete browsing data then Delete cookies and module data from other sites before clicking on Delete browsing data.",
                cond56: "Deleting cookies will have a negative impact on the use of many websites.",

                sub14: "N. Contact the Data Controller",
                hed14: "Paradiso park, 269 Lintsesteenweg, 2570 Duffel (Belgium). Tel +32 493 47 07 07, Email info@paradisopark.be",
            },

            cookies: {
                title: 'Dear visitor',
                click: 'By clicking "Accept All" you accept the',
                terms: 'Terms of use',
                and: 'as well as the',
                privacy: 'processing of personal data',
                service: 'in order to be able to provide the service.',
            },

            
            copytext:'Paradiso Park, All rights reserved - Website carefully crafted by',

            

            


        },

        fr: {

             // desktopmenu
             menus: {
                menu1: "Paradiso",
                menu2: 'Services',
                dMenu1: 'Sauna & Hammam',
                dMenu2: 'Piscine',
                dMenu3: 'Jardin d\'hiver',
                dMenu4: 'Jardin et ??tang',
                dMenu5: 'Traiteur',
                menu3: 'Chambres',
                menu4: '??v??nements',
                contact:'Contactez',
                btn:'R??SERVER'
            },

            // Home
            home: {
                title1: "Un lieu",
                title2: "paradisiaque,",
                title3: "tout pr??s de chez vous???",
                subtitle1: 'Envie de vous d??tendre dans un cadre totalement insolite en Belgique , le temps de quelques heures, d???une journ??e ou d???un s??jour plus long ?',
                subtitle2: 'Plongez dans une piscine ?? 30 degr??s, profitez d???un bain bulle pour vous d??tendre, d???un bain nordique ou d???un hammam marocain?',
                subtitle3: 'Tout ??a dans un cadre unique et dans un seul et m??me lieu ?',
                button: "R??server",
                description: "D??couvrez le domaine de Paradiso Park, un domaine de 20 hectares entre Bruxelles et Anvers d??di?? ?? la nature et au bien-??tre???",

                philosophy: {
                    title: "Notre philosophie",
                    description1: "Notre domaine se destine aux personnes ayant besoin de d??connecter ou d???un v??ritable d??paysement ?? quelques kilom??tres de chez eux.  Dans un lieu totalement in??dit qui c??l??bre la nature et le bien-??tre ?? travers des ??quipments s???inspirant de rituels venus du monde entier.",
                    description2: "Le domaine est un lieu majestueux qui offre un sentiment imm??diat de voyage et de d??paysement. R??servez le domaine pour quelques heures ou pour quelques jours, entre amis, pour un ??v??nement ou un s??minaire et profitez d???un domaine enti??rement privatis?? et de tous les services qu???il propose.",
                },

                category: {
                    services: {
                        title: 'Nos services',
                        description: 'Le domaine offre toute une s??rie de services qui rendent votre exp??rience unique, piscine int??rieure chauff??e, sauna int??rieur et ext??rieur, hammam marocain??? laissez-vous surprendre par la qualit?? des ??quipements du domaine qui vous feront voyager ?? travers le monde et ses diff??rents rituels de bien-??tre???',
                    },
                    rooms: {
                        title: 'Les chambres',
                        description: 'Cinq chambres magnifiquement am??nag??es et des ??quipements pouvant loger jusqu????? 30 personnes sur place, D??couvrez nos 5 chambres et tous leurs services.',
                    },
                    events: {
                        title: 'Vos ??v??nements',
                        description: 'Cinq chambres magnifiquement am??nag??es et des ??quipements pouvant loger jusqu????? 30 personnes sur place, D??couvrez nos 5 chambres et tous leurs services.',
                    },
                },
            },

            // Services
            services: {
                title: 'Nos services',
                sauna: {
                    title: 'Sauna & Hammam',
                    description: 'Rien de tel qu???un sauna ou un hammam pour d??tendre ses muscles et se detoxifier. D??couvrez notre magnifique hammam et notre sauna int??rieur mais ??galement notre bain nordic et notre sauna ext??rieur, id??al quand les temp??ratures baissent pour profiter d???une exp??rience finnoise de remise en forme.',
                    alt: 'Sauna',
                },
                pool: {
                    title: 'Piscine',
                    description: 'Une gigantesque piscine int??rieure chauff??e ?? 30 degr??s comme ??l??ment central de la propri??t??. Non, vous ne r??vez pas??? Jamais vous n???auriez m??me r??v?? profiter d???une piscine aussi paradisiaque de mani??re totalement priv??e???',
                    alt: 'Piscine',
                },
                wintergarden: {
                    title: 'Jardin d\'hiver',
                    description: 'Une soir??e au coin du feu, accompagn?? d???un bon livre et d???une d??licieuse tasse de th??? Un moment entre amis pour refaire le monde? Un lieu insolite pour vous retrouver entre amis ou entre coll??gues ? Profitez de notre jardin d???hiver durant les mois les plus froids de l???ann??e. Un cadre unique et r??confortant, ?? deux pas de chez vous???',
                    alt: 'Jardin d\'hiver',
                },
                garden: {
                    title: 'Jardin et ??tang',
                    description: 'Laissez-vous surprendre par la vari??t?? des paysages et la richesse de l\'environnement: entre nature sauvage, ??tang et jardins et cascades??? Profitez des rayons du soleil sur votre chaise longue ou d???un bain nordique ressour??ant mais surtout profitez de la tranquillit?? de ce lieu magique et hors du temps.',
                    alt: 'Jardin et ??tang',
                },
                catering: {
                    title: 'Traiteur',
                    description: 'Nous mettons ?? votre disposition toutes les installations n??cessaires pour organiser vos repas lors de votre s??jour au Paradiso Park mais vous pouvez ??galement faire appel ?? nos services pour l???organisation d???un service traiteur. Nous travaillons avec une s??rie de partenaires fixes pour r??pondre ?? vos envies. N???h??sitez pas ?? nous contacter via le formulaire en bas de page et ?? nous partager vos demandes.',
                    alt: 'Traiteur',
                },
            },

            // Events
            events: {
                title: 'Our events',
                wedding: {
                    title: '??v??nements priv??s',
                    description1: 'Un anniversaire, un mariage ou un enterrement de vie de jeunes filles ? Notre espace se pr??te ?? toutes ces journ??es qui marquent votre existence et ce, quel que soit votre type d?????v??nement. Un ??v??nement au Paradiso Park restera ?? jamais grav?? dans la m??moire de tout ceux qui vous accompagneront lors de votre s??jour???',
                    description2: 'Int??ress?? ?  N???h??sitez pas ?? remplir le formulaire en bas de page pour planifier votre ??v??nement chez nous !',
                    alt: 'Wedding',
                },
                seminar: {
                    title: '??v??nements professionnels',
                    description1: 'Vous d??sirez organiser un s??minaire, des cours de yoga, une cure de bien-??tre ou un ??v??nement pour votre soci??t??? N???h??sitez  pas ?? nous contacter directement. Nous organisons pour vous toute une s??rie d?????v??nements priv??s en adaptant nos formules ?? votre demande.',
                    description2: 'Int??ress?? ?  N???h??sitez pas ?? remplir le formulaire en bas de page pour planifier votre ??v??nement chez nous !',
                    alt: 'Seminar',
                },
            },

            // Booking
            booking: {
                title: 'Faites votre choix',
                timeslot: {
                    title: 'R??servez une tranche horaire',
                    description: 'Envie d???un break entre deux rendez-vous, ou d???un moment dans un lieu unique avec quelques amies ou groupe de travail ?',
                    button: 'R??server',
                },
                fullday: {
                    title: 'R??servez un s??jour sur place',
                    description: 'Envie de partager un incroyable moment en famille, entre coll??gues ou entre amis ?  Envie d???organiser une retraite de remise en forme en groupe ? D??couvrez nos offres pour des s??jours d???une ou plusieurs nuit au c??ur du Domaine du Paradiso Park',
                    button: 'R??server',
                },
            },

            // Contact
            contact: {
                title: 'Contact',
                description: 'Vous ??tes int??ress??s par la location du Paradiso Park et d??sirez obtenir davantage d???informations ? N???h??sitez pas ?? remplir ce formulaire et nos ??quipes reviendront vers vous dans les plus brefs d??lais.',
                address: 'Adresse',
                phone: 'Num??ro de t??l??phone',
                mail: 'E-mail',
                label: {
                    name: 'Nom et Pr??nom',
                    mail: 'E-mail',
                    phone: 'Num??ro de t??l??phone',
                    message: 'Votre question',
                },
                placeholder: {
                    name: 'Nom',
                    mail: 'E-mail',
                    phone: 't??l??phone',
                    message: 'Message',
                },
                submit:'Soumettre',
            },
            term:'Termes',
            policy:'Vie priv??e',
            faq:'FAQ',
            newsletter:{
                text:"S'ABONNER ?? NOTRE NEWSLETTER",
                placeholder:'Entrez votre courriel',
                btn:"S'abonner ??",
                subscribe:"S'abonner"
            },

             // Privacy policy
            privacy: {
                title: "Politique de confidentialit?? & politique en mati??re de cookies",
                sub1: "A. Introduction",
                hed1: "Introduction",
                cond1: "La confidentialit?? des visiteurs de notre site web est tr??s importante ?? nos yeux, et nous nous engageons ?? la prot??ger. Cette politique d??taille ce que nous faisons de vos informations personnelles.",
                cond2: "Consentir ?? notre utilisation de cookies en accord avec cette politique lors de votre premi??re visite de notre site web nous permet d???utiliser des cookies ?? chaque fois que vous consultez notre site.",

                sub2: "B. Source",
                hed2: "Ce document a ??t?? cr???? gr??ce ?? un mod??le de SEQ Legal (seqlegal.com)",

                sub3: "C. Collecte d???informations personnelles",
                hed3: "Les types d???informations personnelles suivants peuvent collect??s, stock??s et utilis??s :",
                cond3: "Des informations ?? propos de votre ordinateur, y compris votre adresse IP, votre localisation g??ographique, le type et la version de votre navigateur, et votre syst??me d???exploitation ;",
                cond4: "Des informations sur vos visites et votre utilisation de ce site web y compris la source r??f??rente, la dur??e de la visite, les pages vues, et les chemins de navigation de sites web ;",
                cond5: "Des informations comme votre adresse e-mail, que vous nous fournissez lors de votre inscription au site ;",
                cond6: "Des informations que vous saisissez quand vous cr??ez un profil sur notre site web comme votre nom, votre photo de profil, votre genre, votre date de naissance, votre situation amoureuse, vos int??r??ts et vos loisirs, votre parcours scolaire et votre parcours professionnel ;",
                cond7: "Des informations comme votre nom et votre adresse e-mail, que vous saisissez pour souscrire ?? nos e-mails et/ou newsletters ;",
                cond8: "Des informations que vous saisissez quand vous utilisez les services de notre site web ;",
                cond9: "Des informations g??n??r??es lors de l???utilisation de notre site, y compris quand, ?? quelle fr??quence et sous quelles circonstances vous l???utilisez ;",
                cond10: "Des informations relatives aux achats que vous faites, aux services que vous utilisez ou aux transactions que vous effectuez sur notre site, qui incluent votre nom, adresse, num??ro de t??l??phone, adresse e-mail et informations bancaires ;",
                cond11: "Des informations que vous publiez sur notre site web dans l???intention de les publier sur internet, et qui incluent votre identifiant, vos photos de profil et le contenu de vos publications ;",
                cond12: "Des informations contenues dans toutes les communications que vous nous envoyez par e-mail ou sur notre site web, y compris leurs contenus et leurs m??tadonn??es ;",
                cond13: "Toute autre information personnelle que vous nous communiquez.",
                cond14: "Avant de nous divulguer des informations personnelles concernant une autre personne, vous devez obtenir le consentement de ladite personne en ce qui concerne la divulgation et le traitement de ces informations personnelles selon les termes de cette politique.",

                sub4: "D. Utilisation de vos informations personnelles",
                hed4: "Les informations personnelles qui nous sont fournies par le biais de notre site web seront utilis??es dans les objectifs d??crits dans cette politique ou dans les pages du site pertinentes. Nous pouvons utiliser vos informations personnelles pour:",
                cond15: "Administrer notre site web et notre entreprise ;",
                cond16: "Personnaliser notre site web pour vous ;",
                cond17: "Permettre votre utilisation des services propos??s sur notre site web ;",
                cond18: "Vous envoyer les marchandises achet??es sur notre site ;",
                cond19: "Vous fournir les services achet??s sur notre site ;",
                cond20: "Vous envoyer des relev??s, des factures et des rappels de paiement, et collecter vos paiements ;",
                cond21: "Vous envoyer des communications commerciales non relatives au marketing ;",
                cond22: "Vous envoyer des notifications par e-mail que vous avez express??ment demand??es ;",
                cond23: "Vous envoyer notre newsletter par mail, si vous l???avez demand?? (vous pouvez nous informer ?? tout moment de votre volont?? de ne plus recevoir notre newsletter) ;",
                cond24: "Vous envoyer des communications marketing relatives ?? notre entreprise ou ?? des entreprises tierces s??lectionn??es avec soin qui selon nous pourraient vous int??resser, sous forme de publication, ou si vous avez express??ment donn?? votre accord, par e-mail ou technologie similaire (vous pouvez nous informer ?? tout moment de votre volont?? de ne plus recevoir de communications marketing) ;",
                cond25: "Fournir des informations statistiques ?? propos de nos utilisateurs ?? des tierces parties (sans que ces tierces parties puissent identifier d???utilisateur individuel avec ces informations) ;",
                cond26: "Traiter les demandes et les r??clamations relatives ?? votre site web effectu??es par vous ou vous concernant ;",
                cond27: "Maintenir la s??curit?? de notre site web et emp??cher la fraude ;",
                cond28: "V??rifier le respect des conditions g??n??rales qui r??gissent l???utilisation de notre site web (y compris surveiller les messages priv??s envoy??s par le biais du service de messagerie priv?? de notre site web) ;",
                cond29: "D???autres utilisations.",
                cond30: "Si vous soumettez des informations personnelles sur notre site web dans le but de les publier, nous les publierons et pourrons utiliser ces informations conform??ment aux autorisations que vous nous accordez. Vos param??tres de confidentialit?? peuvent ??tre utilis??s pour limiter la publication de vos informations sur notre site web et peuvent ??tre ajust??s dans vos param??tres de confidentialit?? sur le site web. Sans votre consentement explicite, nous ne fournirons pas vos informations personnelles ?? des tierces parties pour leur marketing direct, ni celui d???autres tierces parties.",

                sub5: "E. Divulgation de vos informations personnelles",
                hed5: "Nous pouvons divulguer vos informations personnelles ?? n???importe lequel de nos employ??s, dirigeants, assureurs, conseillers professionnels, agents, fournisseurs, ou sous-traitants dans la mesure o?? cela est raisonnablement n??cessaire aux fins ??nonc??es dans cette politique. Nous pouvons divulguer vos informations personnelles ?? n???importe quel membre de notre groupe d???entreprises (cela signifie nos filiales, notre soci??t?? holding ultime et toutes ses filiales) dans la mesure o?? cela est raisonnablement n??cessaire aux fins ??nonc??es dans cette politique. Nous pouvons divulguer vos informations personnelles:",
                cond31: "Dans la mesure o?? nous sommes tenus de le faire par la loi ;",
                cond32: "Dans le cadre de toute proc??dure judiciaire en cours ou ?? venir ;",
                cond33: "Pour ??tablir, exercer ou d??fendre nos droits l??gaux (y compris fournir des informations ?? d???autres ?? des fins de pr??vention des fraudes et de r??duction des risques de cr??dit) ;",
                cond34: "?? l???acheteur (ou acheteur potentiel) de toute entreprise ou actif en notre possession que nous souhaitons (ou envisageons de) vendre ;",
                cond35: "?? toute personne que nous estimons raisonnablement faire partie int??grante d???un tribunal ou autre autorit?? comp??tente pour la divulgation de ces informations personnelles si, selon notre opinion, un tel tribunal ou une telle autorit?? serait susceptible de demander la divulgation de ces informations personnelles.",
                cond36: "Sauf disposition contraire de la pr??sente politique, nous ne transmettrons pas vos informations personnelles ?? des tierces parties.",

                sub6: "F. Transferts internationaux de donn??es",
                hed6: "Les informations que nous collectons peuvent ??tre stock??es, trait??es et transf??r??es dans tous les pays dans lesquels nous op??rons, afin de nous permettre d???utiliser les informations en accord avec cette politique.",
                cond37: "Les informations que nous collectons peuvent ??tre transf??r??es dans les pays suivants, n???ayant pas de lois de protections des donn??es ??quivalentes ?? celles en vigueur dans l???espace ??conomique europ??en : les ??tats-Unis d???Am??rique, la Russie, le Japon, la Chine et l???Inde.",
                cond38: "Les informations personnelles que vous publiez sur notre site web ou que vous soumettez ?? la publication peuvent ??tre disponibles, via internet, dans le monde entier. Nous ne pouvons emp??cher l???utilisation, bonne ou mauvaise, de ces informations par des tiers.",
                cond39: "Vous acceptez express??ment le transfert d???informations personnelles d??crit dans cette Section F.",

                sub7: "G. Conservation de vos informations personnelles",
                hed7: "Cette Section G d??taille nos politiques de conservation des donn??es et nos proc??dures, con??ues pour nous aider ?? nous conformer ?? nos obligations l??gales concernant la conservation et la suppression d???informations personnelles.",
                cond40: "Les informations personnelles que nous traitons ?? quelque fin que ce soit ne sont pas conserv??es plus longtemps que n??cessaire ?? cette fin ou ?? ces fins.",
                cond41: "Sans pr??judice ?? l???article G-2, nous supprimerons g??n??ralement les donn??es personnelles de ces cat??gories.",
                cond42: "Nonobstant les autres dispositions de cette Section G, nous conserverons des documents (y compris des documents ??lectroniques) contenant des donn??es personnelles: 1. Dans la mesure o?? nous sommes tenus de le faire par la loi ; 2. Si nous pensons que les documents peuvent ??tre pertinents pour toute proc??dure judiciaire en cours ou potentielle ; 3. Pour ??tablir, exercer ou d??fendre nos droits l??gaux (y compris fournir des informations ?? d???autres ?? des fins de pr??vention des fraudes et de r??duction des risques de cr??dit).\n",

                sub8: "H. S??curit?? de vos informations personnelles",
                hed8: "Nous prendrons des pr??cautions techniques et organisationnelles raisonnables pour emp??cher la perte, l???abus ou l???alt??ration de vos informations personnelle.",
                cond43: "Nous stockerons toutes les informations personnelles que vous nous fournissez sur des serveurs s??curis??s (prot??g??s par mot de passe et pare-feu).",
                cond44: "Toutes les transactions financi??res ??lectroniques effectu??es par le biais de notre site web seront prot??g??es par des technologies de cryptage.",
                cond45: "Vous reconnaissez que la transmission d???informations par internet est intrins??quement non s??curis??e, et que nous ne pouvons pas garantir la s??curit?? de vos donn??es envoy??es par internet.",
                cond46: "Vous ??tes responsable de la confidentialit?? du mot de passe que vous utilisez pour acc??der ?? notre site web ; nous ne vous demanderons pas votre mot de passe (sauf quand vous vous identifiez sur notre site web).",

                sub9: "I. Amendements",
                hed9: "Nous pouvons parfois mettre cette politique ?? jour en publiant une nouvelle version sur notre site web. Vous devez v??rifier cette page r??guli??rement pour vous assurer de prendre connaissance de tout changement effectu?? ?? cette politique. Nous pouvons vous informer des changements effectu??s ?? cette politique par courrier ??lectronique ou par le biais du service de messagerie priv??e de notre site web.",

                sub10: "J. Vos droits",
                hed10: "Vous pouvez nous demander de vous fournir toute information personnelle que nous d??tenons sur vous ; le transfert de telles informations sera soumis aux conditions suivantes :",
                cond47: "Le r??glement de frais.",
                cond48: "La pr??sentation de preuves suffisantes de votre identit?? (?? ces fins, nous acceptons en g??n??ral une photocopie de votre passeport certifi??e par notaire plus une copie originale d???une facture de service public indiquant votre adresse actuelle).\n",
                cond49: "Nous pouvons retenir les informations personnelles que vous demandez dans la mesure autoris??e par la loi.",
                cond50: "Vous pouvez nous demander ?? tout moment de ne pas traiter vos informations personnelles ?? des fins marketing.",
                cond51: "En pratique, vous exprimerez express??ment et ?? l???avance votre accord pour que nous utilisions vos informations personnelles ?? des fins marketing ou nous vous fournirons une opportunit?? de refuser l???utilisation de vos informations personnelles ?? des fins marketing.",

                sub11: "K. Sites web tiers",
                hed11: "Notre site web contient des liens hypertextes menant vers des sites web tiers et des informations les concernant. Nous n???avons aucun contr??le sur ces sites, et ne sommes pas responsables de leurs politiques de confidentialit?? ni de leurs pratiques.",

                sub12: "L. Mise ?? jour des informations",
                hed12: "Merci de nous faire savoir si les informations personnelles que nous d??tenons ?? votre sujet doivent ??tre corrig??es ou mises ?? jour.",

                sub13: "M. Cookies",
                hed13: "Notre site web utilise des cookies. Un cookie est un fichier contenant un identifiant (une cha??ne de lettres et de chiffres) envoy?? par un serveur web vers un navigateur web et stock?? par le navigateur. L???identifiant est alors renvoy?? au serveur ?? chaque fois que le navigateur demande une page au serveur. Les cookies peuvent ??tre ?? persistants ?? ou ?? de session ?? : un cookie persistant est stock?? par le navigateur et reste valide jusqu????? sa date d???expiration, ?? moins d?????tre supprim?? par l???utilisateur avant cette date d???expiration ; quant ?? un cookie de session, il expire ?? la fin de la session utilisateur, lors de la fermeture du navigateur. Les cookies ne contiennent en g??n??ral aucune information permettant d???identifier personnellement un utilisateur, mais les informations personnelles que nous stockons ?? votre sujet peuvent ??tre li??es aux informations stock??es dans les cookies et obtenues par les cookies.",
                cond52: "Les noms des cookies que nous utilisons sur notre site web et les objectifs dans lesquels nous les utilisons sont d??crits ci-dessous: Nous utilisons Google Analytics et Adwords sur notre site web pour : reconna??tre un ordinateur lorsqu???un utilisateur consulte le site web / suivre les utilisateurs lors de leur navigation sur le site web / activer l???utilisation d???un panier sur le site web / am??liorer l???utilisation d???un site web / analyser l???utilisation du site web / administrer le site web / emp??cher la fraude et am??liorer la s??curit?? du site web/ personnaliser le site web pour chaque utilisateur / envoyer des publicit??s cibl??es pouvant int??resser certains utilisateurs.",
                cond53: "La plupart des navigateurs vous permettent de refuser ou d???accepter les cookies. Par exemple: 1. Avec Internet Explorer (version 10), vous pouvez bloquer les cookies en utilisant les param??tres de remplacement de la gestion des cookies disponibles en cliquant sur ??Outils??, ??Options internet??, ??Confidentialit???? puis ??Avanc????; 2. Avec Firefox (version 24), vous pouvez bloquer tous les cookies en cliquant sur ??Outils??, ??Options??, ??Confidentialit???? puis en s??lectionnant ??Utiliser des param??tres personnalis??s pour l???historique?? depuis le menu d??roulant et en d??cochant ??Accepter les cookies provenant des sites??; 3. Avec Chrome (version 29), vous pouvez bloquer tous les cookies en acc??dant au menu ??Personnaliser et contr??ler?? puis en cliquant sur ??Param??tres??, ??Montrer les param??tres avanc??s?? et ??Param??tres de contenu?? puis en s??lectionnant ??Emp??cher les sites de d??finir des donn??es?? dans l???en-t??te ??Cookies??.",
                cond54: "Bloquer tous les cookies aura un impact n??gatif sur l???utilisation de nombreux sites web. Si vous bloquez les cookies, vous ne pourrez pas utiliser toutes les fonctionnalit??s de notre site web.",
                cond55: "Vous pouvez supprimer les cookies d??j?? stock??s sur votre ordinateur. Exemple: 1. Avec Internet Explorer (version 10), vous devez supprimer le fichier cookies manuellement; 2. Avec Firefox (version 24), vous pouvez supprimer les cookies en cliquant sur ??Outils??, ??Options??, et ??Confidentialit????, puis en s??lectionnant ??Utiliser des param??tres personnalis??s pour l???historique?? et en cliquant sur ??Montrer les cookies??, puis sur ??Supprimer tous les cookies??; 3. avec Chrome (version 29), vous pouvez supprimer tous les cookies en acc??dant au menu ??Personnaliser et contr??ler?? puis en cliquant sur ??Param??tres??, ?? Montrer les param??tres avanc??s ?? et ??Supprimer les donn??es de navigation?? puis ??Supprimer les cookies et les donn??es des modules d???autres sites?? avant de cliquer sur ??Supprimer les donn??es de navigation??.",
                cond56: "Supprimer les cookies aura un impact n??gatif sur l???utilisation de nombreux sites web.",

                sub14: "N. Contacter le responsable du traitement des donn??es",
                hed14: "Paradiso park, 269 Lintsesteenweg, 2570 Duffel (Belgique). Tel +32 493 47 07 07, Email info@paradisopark.be",
            },

            cookies: {
                title: 'Cher visiteur',
                click: 'En cliquant "Accept All" vous acceptez les',
                terms: 'conditions d\'utilisation',
                and: 'ainsi que le',
                privacy: 'traitement des donn??es personnelles',
                service: 'afin de pouvoir fournir le service.',
            },

            copytext:'Paradiso Park, Tous Droits R??serv??s - Site Soigneusement Con??u Par',

        },

        nl: {

             // desktopmenu
             menus: {
                menu1: "Paradiso",
                menu2: 'Diensten',
                dMenu1: 'Sauna & Hammam',
                dMenu2: 'Zwembad',
                dMenu3: 'Wintertuin',
                dMenu4: 'Tuin en vijver',
                dMenu5: 'Catering',
                menu3: 'Kamers',
                menu4: 'Evenementen',
                contact:'Contact',
                btn:'Boeken'

            },

            // Home
            home: {
                title1: "Een hemelse",
                title2: "plek,",
                title3: "dicht bij huis...",
                subtitle1: 'Wilt u uitrusten in een totaal buitengewoon omgeving in Belgi??, voor een paar uren, een dag of een langer verblijf?',
                subtitle2: 'Een duik nemen in een zwembad van 30 graden, genieten van een bubbelbad om te ontspannen, een Nordic bath of een Marokkaanse hammam?',
                subtitle3: 'Dit alles in een unieke omgeving en op dezelfde plaats?',
                button: "Boeken",
                description: "Ontdek het Paradiso Park domein, een 20 hectare groot domein tussen Brussel en Antwerpen gewijd aan natuur en welzijn ...",

                philosophy: {
                    title: "Onze filosofie",
                    description1: "Ons domein is bedoeld voor mensen die behoefte hebben om zich los te koppelen of een echte verandering van omgeving op enkele kilometers van huis.  Op een totaal ander plek waar de natuur en het welzijn worden gevierd met apparatuur die ge??nspireerd is op rituelen uit de hele wereld.",
                    description2: "Het gebied is een majestueuze plek die onmiddellijk een gevoel van reizen en verandering van omgeving biedt. Reserveer het domein voor een paar uur of een paar dagen, met vrienden, voor een evenement of een seminar en geniet van een volledig geprivatiseerd domein en alle diensten die het biedt.",
                },

                category: {
                    services: {
                        title: 'Onze diensten',
                        description: 'Het domein biedt een hele reeks diensten die uw ervaring uniek zullen maken, verwarmd binnenzwembad, binnen- en buitensauna, Marokkaanse hammam... laat u verrassen door de kwaliteit van de faciliteiten van het domein die u zullen meenemen op een reis door de wereld en haar verschillende welzijnsrituelen...',
                    },
                    rooms: {
                        title: 'De kamers',
                        description: 'Vijf prachtig ingerichte kamers en slaapgelegenheid die ter plaatse plaats bieden aan maximaal 30 personen. Ontdek onze 5 kamers en al hun diensten.',
                    },
                    events: {
                        title: 'Uw evenementen',
                        description: 'Vijf prachtig ingerichte kamers en slaapgelegenheid die ter plaatse plaats bieden aan maximaal 30 personen. Ontdek onze 5 kamers en al hun diensten.',
                    },
                },
            },

            // Services
            services: {
                title: 'Onze diensten',
                sauna: {
                    title: 'Sauna & Hammam',
                    description: 'Er gaat niets boven een sauna of een hammam om uw spieren te ontspannen en te detoxen. Ontdek onze prachtige hammam en binnensauna, maar ook ons Nordic bath en onze buitensauna, ideaal wanneer de temperatuur daalt om te genieten van een Finse fitnesservaring.',
                    alt: 'Sauna',
                },
                pool: {
                    title: 'Zwembad',
                    description: 'Een gigantisch verwarmd binnenzwembad tot 30 graden als het centrale kenmerk van het domein. Nee, u droomt niet... U had nooit durven dromen van zo\'n zalig zwembad in totale privacy...',
                    alt: 'Zwembad',
                },
                wintergarden: {
                    title: 'Wintertuin',
                    description: 'Een avond bij het haardvuur, met een goed boek en een heerlijk kopje thee? Een moment met vrienden om de wereld opnieuw te imagineren? Een uniek plek om af te spreken met vrienden of collega\'s? Geniet van onze wintertuin tijdens de koudste maanden van het jaar. Een unieke en troostende omgeving, op een steenworp afstand van uw huis...',
                    alt: 'Wintertuin',
                },
                garden: {
                    title: 'Tuin en vijver',
                    description: 'Laat u verrassen door de variatie in landschappen en de rijkdom van de omgeving: tussen wilde natuur, vijvers en tuinen en watervallen... Geniet van de zon op uw ligstoel of van een ontspannend Nordic bath, maar geniet vooral van de rust van deze magische en tijdloze plek.',
                    alt: 'Tuin en vijver',
                },
                catering: {
                    title: 'Horeca',
                    description: 'Wij bieden alle faciliteiten die u nodig heeft om uw maaltijden te organiseren tijdens uw verblijf in Paradiso Park, maar u kunt ons ook vragen voor het organiseren van een cateringservice voor u. Wij werken samen met een aantal vaste partners om aan uw eisen te voldoen. Aarzel niet om contact met ons op te nemen via het formulier onderaan de pagina en ons uw wensen mee te delen.',
                    alt: 'Horeca',
                },
            },

            // Events
            events: {
                title: 'Our events',
                wedding: {
                    title: 'Priv?? evenementen',
                    description1: 'Een verjaardag, een bruiloft of een vrijgezellenfeest? Onze ruimte leent zich voor al die dagen die uw leven markeren, ongeacht het soort evenement. Een evenement in Paradiso Park zal voor altijd in het geheugen gegrift blijven van al diegenen die u tijdens uw verblijf vergezellen...',
                    description2: 'Heb je interesse?  Aarzel niet om het formulier onderaan de pagina in te vullen om uw evenement met ons te plannen!',
                    alt: '',
                },
                seminar: {
                    title: 'Professionele evenementen',
                    description1: 'U wenst een seminarie, yogalessen, een wellness behandeling of een evenement voor uw bedrijf te organiseren? Aarzel niet om direct contact met ons op te nemen. Wij kunnen een heel reeks priv??-evenementen voor u organiseren, waarbij wij onze formules aanpassen aan uw behoeften.',
                    description2: 'Heb je interesse?  Aarzel niet om het formulier onderaan de pagina in te vullen om uw evenement met ons te plannen!',
                    alt: '',
                },
            },

            // Booking
            booking: {
                title: 'Maak uw keuze',
                timeslot: {
                    title: 'Reserveer een tijdslot',
                    description: 'Op zoek naar een pauze tussen twee vergaderingen, of een moment op een unieke plek met een paar vrienden of een werkgroep?',
                    button: 'BOEKEN',
                },
                fullday: {
                    title: 'Boek een verblijf',
                    description: 'Wil je een ongelofelijk moment delen met familie, collega\'s of vrienden?  Wilt u een groeps fitness retraite organiseren? Ontdek onze aanbiedingen voor verblijven van ????n of meerdere nachten in het hart van het Paradiso Park Domein',
                    button: 'BOEKEN',
                },
            },

            // Contact
            contact: {
                title: 'Contact',
                description: 'Bent u ge??nteresseerd in het huren van Paradiso Park en wilt u meer informatie? Vul dit formulier in en ons team neemt zo vlug mogelijk contact met u op.',
                address: '',
                phone: 'Telefoonnummer',
                mail: 'E-mail',
                label: {
                    name: 'Naam en voornaam',
                    mail: 'E-mail',
                    phone: 'Telefoonnummer',
                    message: 'Jouw vraag',
                },
                placeholder:{
                    name: 'Naam ',
                    mail: 'Email',
                    phone: 'Telefoon',
                    message: 'Bericht',
                },
                submit:'Indienen',
            },

           term:'Voorwaarden',
            policy:'Privacy',
            faq:'FAQ',
            newsletter:{
                text:'ABONNEER U OP ONZE NIEUWSBRIEF',
                placeholder:'Voer uw e-mail',
                btn:'Inschrijven',
                subscribe:'Abonneren'
            },

            // Privacy policy
            privacy: {

                title: "Privacy- en Cookiebeleid",

                sub1: "A. Inleiding",
                hed1: "Inleiding",
                cond1: "De privacy van de bezoekers van onze website is erg belangrijk voor ons, en wij zetten ons in om deze te beschermen. Dit beleid beschrijft wat wij met uw persoonlijke informatie doen.",
                cond2: "Door in te stemmen met ons gebruik van cookies in overeenstemming met dit beleid wanneer u onze website voor het eerst bezoekt, kunnen wij cookies gebruiken telkens wanneer u onze site bezoekt.",

                sub2: "B. Bron",
                hed2: "Dit document is gemaakt met behulp van een sjabloon van SEQ Legal (seqlegal.com)",

                sub3: "C. Verzamelen van persoonsgegevens",
                hed3: "De volgende soorten persoonlijke informatie kunnen worden verzameld, opgeslagen en gebruikt :",
                cond3: "Informatie over uw computer, met inbegrip van uw IP-adres, geografische locatie, browsertype en -versie, en besturingssysteem ;",
                cond4: "Informatie over uw bezoeken aan en gebruik van deze website, met inbegrip van de verwijzende bron, de duur van het bezoek, bekeken pagina's en navigatiepaden op de website ;",
                cond5: "Informatie zoals uw e-mailadres, dat u aan ons verstrekt wanneer u zich op de site registreert ;",
                cond6: "Informatie die u invoert wanneer u een profiel aanmaakt op onze website, zoals uw naam, profielfoto, geslacht, geboortedatum, relatiestatus, interesses en hobby's, opleiding en werkgeschiedenis ;",
                cond7: "Informatie zoals uw naam en e-mailadres, die u invoert om u te abonneren op onze e-mails en/of nieuwsbrieven ;",
                cond8: "Informatie die u invoert wanneer u gebruik maakt van de diensten van onze website ;",
                cond9: "Informatie die wordt gegenereerd tijdens het gebruik van onze site, met inbegrip van wanneer, hoe vaak en onder welke omstandigheden u de site gebruikt ;",
                cond10: "Informatie met betrekking tot de aankopen die u doet, de diensten die u gebruikt of de transacties die u verricht op onze site, met inbegrip van uw naam, adres, telefoonnummer, e-mailadres en bankgegevens ;",
                cond11: "Informatie die u op onze website plaatst met de bedoeling deze op het internet te plaatsen, met inbegrip van uw gebruikersnaam, profielfoto's en de inhoud van uw berichten ;",
                cond12: "Informatie die is opgenomen in berichten die u per e-mail of via onze website naar ons verzendt, met inbegrip van de inhoud en metagegevens daarvan ;",
                cond13: "Alle andere persoonlijke informatie die u aan ons verstrekt ;",
                cond14: "Voordat u persoonlijke informatie over een andere persoon aan ons bekendmaakt, moet u de toestemming van die persoon verkrijgen voor de bekendmaking en verwerking van die persoonlijke informatie onder de voorwaarden van dit beleid.",

                sub4: "D. Gebruik van uw persoonlijke informatie",
                hed4: "Persoonlijke informatie die aan ons wordt verstrekt via onze website zal worden gebruikt voor de doeleinden die worden beschreven in dit beleid of op de relevante pagina's van de site. Wij kunnen uw persoonlijke informatie gebruiken om:",
                cond15: "Om onze website en ons bedrijf te beheren ;",
                cond16: "Onze website voor u te personaliseren ;",
                cond17: "Uw gebruik mogelijk te maken van de diensten die op onze website worden aangeboden ;",
                cond18: "U de goederen te sturen die u op onze site hebt gekocht ;",
                cond19: "U de diensten leveren die u op onze site hebt gekocht ;",
                cond20: "U overzichten, facturen en betalingsherinneringen sturen, en uw betalingen innen ;",
                cond21: "U niet-marketing commerci??le berichten sturen ;",
                cond22: "U e-mailberichten sturen waarom u specifiek hebt gevraagd ;",
                cond23: "U onze nieuwsbrief per e-mail toezenden, indien u daarom hebt verzocht (u kunt ons te allen tijde meedelen dat u niet langer onze nieuwsbrief wenst te ontvangen) ;",
                cond24: "U marketingberichten sturen over ons bedrijf of zorgvuldig geselecteerde bedrijven van derden waarvan wij denken dat ze interessant voor u kunnen zijn, per post, of wanneer u daar uitdrukkelijk toestemming voor hebt gegeven, per e-mail of vergelijkbare technologie (u kunt ons op elk gewenst moment laten weten dat u geen marketingberichten meer wilt ontvangen) ;",
                cond25: "Verstrekken van statistische informatie over onze gebruikers aan derden (zonder dat deze derden individuele gebruikers kunnen identificeren met deze informatie) ;",
                cond26: "Behandeling van verzoeken en klachten die door of over u met betrekking tot uw website worden ingediend ;",
                cond27: "De veiligheid van onze website handhaven en fraude voorkomen ;",
                cond28: "Controleren of de voorwaarden voor het gebruik van onze website worden nageleefd (met inbegrip van het controleren van priv??berichten die via de priv??berichtenservice van onze website worden verzonden) ;",
                cond29: "Ander gebruik.",
                cond30: "Als u persoonlijke informatie op onze website plaatst met het doel deze te publiceren, zullen wij deze publiceren en kunnen wij deze informatie gebruiken in overeenstemming met de permissies die u ons verleent. Uw privacy-instellingen kunnen worden gebruikt om de publicatie van uw informatie op onze website te beperken en kunnen worden aangepast in uw privacy-instellingen op de website. Zonder uw uitdrukkelijke toestemming zullen wij uw persoonlijke informatie niet aan derden verstrekken voor hun direct marketing of die van andere derden.",
                sub5: "E. Openbaarmaking van uw persoonsgegevens",
                hed5: "Wij kunnen uw persoonsgegevens bekendmaken aan onze werknemers, functionarissen, verzekeraars, professionele adviseurs, agenten, leveranciers of onderaannemers indien dit redelijkerwijs noodzakelijk is voor de doeleinden die in dit beleid worden uiteengezet. Wij kunnen uw persoonlijke informatie bekendmaken aan elk lid van onze bedrijfsgroep (dit betekent onze dochterondernemingen, onze uiteindelijke houdstermaatschappij en al haar dochterondernemingen) voor zover dit redelijkerwijs noodzakelijk is voor de doeleinden die in dit beleid zijn uiteengezet.Wij kunnen uw persoonlijke informatie bekendmaken :",
                cond31: "Voor zover wij daartoe wettelijk verplicht zijn ;",
                cond32: "Als onderdeel van lopende of toekomstige juridische procedures ;",
                cond33: "Om onze wettelijke rechten vast te stellen, uit te oefenen of te verdedigen (met inbegrip van het verstrekken van informatie aan anderen met het oog op fraudepreventie en het verminderen van kredietrisico);",
                cond34: "Aan de koper (of potenti??le koper) van een bedrijf of activa in ons bezit dat wij willen (of overwegen te) verkopen;",
                cond35: "Aan iedereen van wie wij redelijkerwijs aannemen dat hij of zij partij is bij een rechtbank of een andere bevoegde autoriteit voor de openbaarmaking van dergelijke persoonlijke informatie indien, naar onze mening, een dergelijke rechtbank of autoriteit waarschijnlijk de openbaarmaking van dergelijke persoonlijke informatie zou eisen. ",
                cond36: "Behalve zoals anders bepaald in dit beleid, zullen wij uw persoonlijke informatie niet delen met derden.",

                sub6: "F. Internationale doorgifte van gegevens",
                hed6: "De informatie die wij verzamelen kan worden opgeslagen, verwerkt en overgedragen naar elk land waar wij actief zijn, om ons in staat te stellen de informatie te gebruiken in overeenstemming met dit beleid.",
                cond37: "De informatie die wij verzamelen kan worden doorgegeven aan de volgende landen, die geen gegevensbeschermingswetten hebben die gelijkwaardig zijn aan de wetten die gelden in de Europese Economische Ruimte: de Verenigde Staten van Amerika, Rusland, Japan, China en India.",
                cond38: "Persoonlijke informatie die u op onze website publiceert of voor publicatie indient, kan via het internet over de hele wereld beschikbaar zijn. Wij kunnen het gebruik, goed of slecht, van deze informatie door derden niet voorkomen.",
                onder39: "U stemt uitdrukkelijk in met de overdracht van persoonlijke informatie zoals beschreven in dit onderdeel F.",

                sub7: "G. Bewaring van uw persoonlijke gegevens",
                hed7: "Dit deel G beschrijft ons beleid en onze procedures voor het bewaren van gegevens, die zijn ontworpen om ons te helpen te voldoen aan onze wettelijke verplichtingen met betrekking tot het bewaren en verwijderen van persoonlijke informatie.",
                cond40: "Persoonsgegevens die wij voor enig doel verwerken, worden niet langer bewaard dan noodzakelijk is voor dat doel of die doelen.",
                cond41: "Onverminderd artikel G-2 zullen wij persoonsgegevens in deze categorie??n in de regel wissen.",
                cond42: "Onverminderd de overige bepalingen van deze afdeling G, bewaren wij documenten (met inbegrip van elektronische documenten) die persoonsgegevens bevatten: 1. Voor zover wij daartoe wettelijk verplicht zijn; 2. Als wij van mening zijn dat de documenten relevant kunnen zijn voor lopende of potenti??le juridische procedures; 3. Om onze wettelijke rechten vast te stellen, uit te oefenen of te verdedigen (met inbegrip van het verstrekken van informatie aan anderen met het oog op fraudepreventie en het verminderen van kredietrisico).",

                sub8: "H. Beveiliging van uw persoonlijke gegevens",
                hed8: "Wij zullen redelijke technische en organisatorische voorzorgsmaatregelen treffen om verlies, misbruik of wijziging van uw persoonlijke informatie te voorkomen.",
                cond43: "Wij zullen alle persoonlijke informatie die u aan ons verstrekt opslaan op beveiligde servers (beveiligd met een wachtwoord en firewall).",
                cond44: "Alle elektronische financi??le transacties die via onze website worden uitgevoerd, worden beveiligd met encryptietechnologie??n.",
                cond45: "U erkent dat de overdracht van informatie via het internet inherent onveilig is, en dat wij de veiligheid van uw gegevens die via het internet worden verzonden, niet kunnen garanderen.",
                cond46: "U bent verantwoordelijk voor het vertrouwelijk houden van het wachtwoord dat u gebruikt voor toegang tot onze website; wij zullen u niet om uw wachtwoord vragen (behalve wanneer u inlogt op onze website).",

                sub9: "I. Wijzigingen",
                hed9: "Wij kunnen dit beleid van tijd tot tijd bijwerken door een nieuwe versie op onze website te plaatsen. U dient deze pagina regelmatig te controleren om er zeker van te zijn dat u op de hoogte bent van eventuele wijzigingen in dit beleid. Wij kunnen u op de hoogte brengen van wijzigingen in dit beleid via e-mail of via de priv??berichtendienst van onze website.",

                sub10: "J. Uw rechten",
                hed10: "U kunt ons vragen u alle persoonlijke informatie te verstrekken die wij over u hebben; de overdracht van dergelijke informatie zal onderworpen zijn aan de volgende voorwaarden:",
                cond47: "De afrekening van vergoedingen.",
                cond48: "Presentatie van voldoende bewijs van uw identiteit (voor deze doeleinden accepteren wij over het algemeen een notari??le fotokopie van uw paspoort plus een originele kopie van een energierekening waarop uw huidige adres staat).",
                cond49: "Wij kunnen persoonlijke informatie waar u om vraagt achterhouden voor zover de wet dat toestaat.",
                cond50: "U kunt ons op elk moment vragen uw persoonlijke informatie niet voor marketingdoeleinden te verwerken.",
                cond51: "In de praktijk zult u vooraf uw toestemming geven voor het gebruik van uw persoonlijke informatie voor marketingdoeleinden of zullen wij u de mogelijkheid bieden om u af te melden voor het gebruik van uw persoonlijke informatie voor marketingdoeleinden.",

                sub11: "K. Websites van derden",
                hed11: "Onze website bevat hyperlinks naar websites van derden en informatie over deze websites. Wij hebben geen controle over deze sites, en zijn niet verantwoordelijk voor hun privacybeleid of praktijken.",

                sub12: "L. Bijwerken van informatie",
                hed12: "Laat het ons weten als de persoonlijke informatie die wij over u hebben moet worden gecorrigeerd of bijgewerkt.",

                sub13: "M. Cookies",
                hed13: "Onze website maakt gebruik van cookies. Een cookie is een bestand met een identificatiecode (een reeks letters en cijfers) die door een webserver naar een webbrowser wordt gestuurd en door de browser wordt opgeslagen. De identifier wordt dan teruggestuurd naar de server telkens wanneer de browser een pagina van de server opvraagt. Cookies kunnen persistente of sessiecookies zijn: een persistent cookie wordt door de browser opgeslagen en blijft geldig tot de vervaldatum, tenzij de gebruiker het voor die datum verwijdert; een sessiecookie vervalt op het einde van de gebruikerssessie, wanneer de browser wordt afgesloten. Cookies bevatten over het algemeen geen informatie aan de hand waarvan een gebruiker persoonlijk kan worden ge??dentificeerd, maar de persoonlijke informatie die wij over u opslaan kan in verband worden gebracht met informatie die in cookies is opgeslagen en door cookies is verkregen.",
                cond52: "De namen van de cookies die we op onze website gebruiken en de doeleinden waarvoor we ze gebruiken, worden hieronder beschreven: We gebruiken Google Analytics en Adwords op onze website om: een computer te herkennen wanneer een gebruiker de website bezoekt / gebruikers te volgen terwijl ze op de website surfen / het gebruik van een winkelwagentje op de website mogelijk te maken / het gebruik van een website te verbeteren / het gebruik van de website te analyseren / de website te beheren / fraude te voorkomen en de veiligheid van de website te verbeteren / de website voor elke gebruiker te personaliseren / gerichte advertenties te verzenden die voor bepaalde gebruikers interessant kunnen zijn.",
                cond53: "Met de meeste browsers kunt u cookies weigeren of accepteren. Bijvoorbeeld: 1. Met Internet Explorer (versie 10) kunt u cookies blokkeren met de cookiebeheer-overbruggingsinstellingen die beschikbaar zijn door te klikken op Extra, Internet-opties, Privacy en vervolgens op Geavanceerd; 2. Met Firefox (versie 24) kunt u alle cookies blokkeren door te klikken op Extra, Opties, Privacy en vervolgens Gebruik aangepaste instellingen voor geschiedenis te selecteren in het vervolgkeuzemenu en het vinkje bij Cookies van sites accepteren uit te schakelen. 3. Met Chrome (versie 29) kunt u cookies weigeren of accepteren. Met Chrome (versie 29) kunt u alle cookies blokkeren door naar het menu Aanpassen en beheren te gaan en vervolgens te klikken op Instellingen, Geavanceerde instellingen weergeven en Inhoudsinstellingen en vervolgens te kiezen voor Voorkomen dat sites gegevens in de kop Cookies plaatsen.",
                cond54: "Het blokkeren van alle cookies zal een negatieve invloed hebben op het gebruik van veel websites. Als u cookies blokkeert, zult u niet alle functies van onze website kunnen gebruiken.",
                cond55: "U kunt cookies verwijderen die al op uw computer zijn opgeslagen. Voorbeeld: 1. Bij Internet Explorer (versie 10) moet u het cookies-bestand handmatig verwijderen; 2. Bij Firefox (versie 24) kunt u cookies verwijderen door te klikken op Extra, Opties en Privacy, vervolgens Aangepaste instellingen gebruiken voor geschiedenis te selecteren en te klikken op \"Cookies weergeven\" en vervolgens op \"Alle cookies verwijderen\" 3. Bij Chrome (versie 29) kunt u alle cookies verwijderen door naar het menu \"Aanpassen en beheren\" te gaan en vervolgens te klikken op Instellingen, Geavanceerde instellingen weergeven en Browsegegevens verwijderen en vervolgens Cookies en modulegegevens van andere sites verwijderen voordat u klikt op Browsegegevens verwijderen.",
                cond56: "Het verwijderen van cookies zal een negatieve invloed hebben op het gebruik van veel websites.",

                sub14: "N. Neem contact op met de verantwoordelijke voor de verwerking van de gegevens",
                hed14: "Paradiso park, Lintsesteenweg 269, 2570 Duffel (Belgi??). Tel +32 493 47 07 07, Email info@paradisopark.be",
            },

            cookies: {
                title: 'Beste bezoeker',
                click: 'Door op "Alles accepteren" te klikken accepteert u de',
                terms: 'Gebruiksvoorwaarden',
                privacy: 'verwerking van persoonsgegevens',
                and: 'en ook de',
                service: 'om de dienst te kunnen verlenen.',
            },

            copytext:'Paradiso Park, Alle Rechten Voorbehouden - Website Zorgvuldig Gemaakt Door',

        },
    }
    // const locales = require.context(messages.en, true, /[A-Za-z0-9-_,\s]+\.json$/i)
    // locales.keys().forEach(key => {
    //     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    //     if (matched && matched.length > 1) {
    //         const locale = matched[1]
    //         console.log('locale', locale);
    //         messages[locale] = locales(key).default
    //     }
    // })
    return messages
}

export default createI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'fr',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'fr',
    messages: loadLocaleMessages()
})
