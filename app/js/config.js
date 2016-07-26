konferenceApp.config([
    '$locationProvider', '$routeProvider', '$translateProvider',
    function($locationProvider, $routeProvider, $translateProvider) {

        $locationProvider.html5Mode({
            enable: true,
            requireBase: false
        });

        $routeProvider
            .when('/', {
                templateUrl: 'view/main.html',
                controller: 'MainCtrl'
            })
            .when('/registration', {
                templateUrl: 'view/registration.html',
                controller: 'RegistrationCtrl'
            })
            .when('/login', {
                templateUrl: 'view/login.html',
                controller: 'LoginCtrl'
            })
            .when('/partners', {
                templateUrl: 'view/partners.html',
                controller: 'PartnersCtrl'
            })
            .when('/spikers', {
                templateUrl: 'view/spikers.html',
                controller: 'SpikersCtrl'
            })
           .when('/profit', {
                templateUrl: 'view/profit.html',
                controller: 'ProfitCtrl'
            })
            .when('/social_network', {
                 templateUrl: 'view/social_network.html',
                 controller: 'SocialNetworkCtrl'
             })
            .when('/reasons', {
                 templateUrl: 'view/reasons.html',
                 controller: 'ReasonsCtrl'
             })
            .when('/program', {
                  templateUrl: 'view/program.html',
                  controller: 'ProgramCtrl'
            })
            .when('/participants', {
                  templateUrl: 'view/participants.html',
                  controller: 'ParticipantsCtrl'
            })

           .when('/organizer', {
                  templateUrl: 'view/participants.html',
                  controller: 'OrganizerCtrl'
           })
           .when('/placement', {
                  templateUrl: 'view/organizer.html',
                  controller: 'PlacementCtrl'
           })

            .otherwise({redirectTo: '/'});

        $translateProvider.translations('en', {
            TITLE: 'title',
            REGISTRATION: 'registration'
        });
        $translateProvider.translations('ru', {
            TITLE: 'Конференция',
            PARTNERS: 'Для партнеров',
            MAIL: 'e-mail  ann.rslk@gmail.com',
            PHONE: 'тел.  +375 29 365 55 88',
            SKYPE: 'skype  ann_rslk',
            REGISTRATION: 'Бесплатная регистрация',
            CONFERENCE: 'Лучшая конференция в Минске',
            RECORDING: 'Запишитесь на лучшую конференцию прямо сейчас  и получи скидки и подарок от партнеров',
            INPUT_MAIL: 'Введите ваш e-mail',
            REGISTER: 'Зарегестрироваться бесплатно',
            ONLINE_PART: 'Бесплатное онлайн участие',
            THREE_DAYS: '3 дня полезных знаний',
            TWELVE_OF_EXPERTS: '12 известных экспертов',
            ONLINE_TRANSLATION: 'Онлайн трансляция на все устройства и страны',
            BONUSES: 'Бонусы и подарки от партнеров',
            SPEAKERS: 'Спикеры',
            KNOWN_PRACTICES: 'только известные специалисты практики',
            NAME: 'Дмитрий Иванов',
            POSITION: 'владелец компании ukropmedia.ru',
            REASONS: '6 причин',
            VISIT: 'посетить данное мероприятие',
            ONE: '01',
            APPROACH: 'Свежий подход к достижению личного и профессионального успеха',
            TWO: '02',
            THREE : '03',
            FOUR: '04',
            FIVE : '05',
            SIX: '06',
            FOR_WHOM: 'Для кого эта конференция?',
            FOR_BUSINESS_OWNERS: 'Для владельцев бизнеса',
            MANUAL: 'Полное руководство по привлчению клиентов в Ваш бизнес',
            OPPORTUNITY: 'Возможность обойти Ваших конкурентов',
            EFFICIENCY: 'Увеличение эффективности и снижение бюджета Вашей рекламы',
            OPPORTUNITY_TO_CHECK: 'Возможность проконтролировать качество Вашего подрядчика',
            RECOMMENDATION: 'Получите рекомендации именно по Вашему бизнес-кейсу',
            TRAFFIC: 'увеличение трафика, заявок и продаж на 25-100%',
            FOR_PROFESSIONALS: 'Для специалистов',
            TECHNOLOGIES: 'Новейшие технологии создания продающих сайтов и Лендинг Пейдж',
            METHODS: 'Способы и фишки увеличения и тестирования конверсии сайтов',
            TECHNOLOGY_ATTRACTION: 'Технологии привлечения качественного и недорого трафика',
            TECHNOLOGY_OF_INCREASE: 'Техники увеличения эффективности рекламных компаний и сокращения бюджета',
            INCREASE_TRAFFIC: 'увеличение трафика, конверсии и удовлетворенности',
            CUSTOMERS: 'Ваших клиентов',
            TRAINING: 'На тренинге вы получите',
            ALGORITHM: 'Вы получите пошаговый алгоритм создания посадочных страниц и настройки рекламы',
            EXPERIENCE_AND_KNOWLEDGE: 'Опыт и знания 12 специалистов и практиков',
            BONUS_MATERIALS: 'Бонусные учебные материалы по трафику, конферсии и продажам',
            SIGNIFICANT_INCREASE_TRAFFIC: 'Значительное увеличение трафика и продаж Ваших проектов',
            COMMUNICATION: 'Новые знакомства и общение с другими спикера и участниками проекта',
            REPORTS: 'Высокое качество докладов, видео-трансляции и организации мероприятия',
            THE_MAIN_THING: 'А главное - отсутствие рекламы, воды, спама и тролей!',
            WHERE: 'Где и как проходит тренинг?',
            FREE_PLAY_ONLINE: 'Бесплатная онлайн трансляция на мобильные телефоны и ПК',
            HOME_AND_OFFICE: 'У Вас дома или в офисе, кафе или машине',
            ACCESS: 'Доступ на трансляцию высылается на e-mail или смс',
            PROGRAM: 'Программа тренинга',
            FIRST_DAY: '1 день',
            THE_SECOND_OF_SEPTEMBER: '2 сентября',
            FRIDAY: 'Пятница, 2 сентября, 2016 года',
            IVANOV: 'Дмитрий Иванов - ',
            OWNER: 'владелец компании ukropmedia.ru стаж работы 14 лет',
            TECHNOLOGY_AUDIT: ' Технический аудит сайтов',
            INDEX: '1) Индексация сайта 2) Зеркала и копии сайта 3) Система ЧПУ 4) Скорость загрузки сайта 5) Валидность HTML кода и CSS 6) Коды ответа сервера 7) Обработка 404 ошибки',
            RESULT: 'Результат: будут исправлены основные технические ошибки, мешающие восприятию сайта поисковыми системами.',
            SECOND_DAY: '2 день',
            THIRD_OF_SEPTEMBER: '3 сентября',
            UT_INIM: ' Тут программа второго дня конференция.',
            THE_THIRD_DAY: '3 день ',
            FOURTH_OF_SEPTEMBER: '4 сентября',
            EXCEPTEUR: 'Тут программа третьего дня конференция.',
            TELL: 'Нравится подход к качеству? - Расскажи об этом друзьям',
            ORGANIZER: 'Организатор конференции',
            CREATING_CUSTOM: 'Создание Лейдинг Пейдж на заказаз гарантией результата',
            SECOND_SITE: 'Сайт:  thelandingpage.by',
            SECOND_MAIL: 'e-mail: order@thelandingpage.by',
            SECOND_SKYPE: 'Skype: thelandingpage',
            PARTNERS_AND_SPEAKERS: 'Партнеры и спикеры конференции',
            IT_COMPANIES: 'это топовые компании данной отрасли',
            FREE_REGISTRATION: 'Бесплатная регистрация на конференцию'

        });

        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.preferredLanguage('ru');
    }
]);