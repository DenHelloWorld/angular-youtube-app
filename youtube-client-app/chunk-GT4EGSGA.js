import {
  BaseIcon,
  BehaviorSubject,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgClass,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  Output,
  PrimeTemplate,
  Ripple,
  RippleModule,
  Router,
  SharedModule,
  UniqueComponentId,
  ViewEncapsulation$1,
  animate,
  booleanAttribute,
  of,
  setClassMetadata,
  state,
  style,
  transition,
  trigger,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7RT3DARY.js";

// src/app/features/youtube/services/youtube.service.ts
var _YoutubeService = class _YoutubeService {
  constructor() {
    this.mockVideos = {
      kind: "youtube#videoListResponse",
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4"',
      pageInfo: {
        totalResults: 10,
        resultsPerPage: 10
      },
      items: [
        {
          kind: "youtube#video",
          etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI"',
          id: "YN8zNnV0sK8",
          snippet: {
            publishedAt: "2024-06-11T12:42:19.000Z",
            channelId: "UCg8ss4xW9jASrqWGP30jXiw",
            title: "Introduction to Angular - Learning Angular",
            description: "In this series, learn how to build your first Angular application. Angular is a web framework that allows teams to deliver web apps with confidence. Discover how these tools build scalable applications.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/hqdefault.jpg",
                width: 480,
                height: 360
              },
              standard: {
                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/sddefault.jpg",
                width: 640,
                height: 480
              },
              maxres: {
                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/maxresdefault.jpg",
                width: 1280,
                height: 720
              }
            },
            channelTitle: "Angular",
            tags: [
              "angular",
              "angular 8",
              "angularjs",
              "js",
              "javascript",
              "rxjs",
              "angular 60 \u043C\u0438\u043D\u0443\u0442",
              "angular 1 \u0447\u0430\u0441",
              "angular 8 1 \u0447\u0430\u0441",
              "\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u043C\u0438\u043D\u0438\u043D",
              "\u0443\u0440\u043E\u043A\u0438 javascript",
              "angular 2",
              "angular 4",
              "angular \u0443\u0440\u043E\u043A\u0438",
              "\u043A\u0443\u0440\u0441 angular",
              "\u043E\u0441\u043D\u043E\u0432\u044B angular",
              "angular \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A",
              "angular \u0443\u0440\u043E\u043A\u0438 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445",
              "\u0443\u0440\u043E\u043A\u0438 angular",
              "angular \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430",
              "\u0430\u043D\u0433\u0443\u043B\u044F\u0440",
              "angular \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435",
              "angular \u043A\u0443\u0440\u0441",
              "\u0430\u043D\u0433\u0443\u043B\u044F\u0440 4 \u0443\u0440\u043E\u043A\u0438",
              "angular \u0443\u0440\u043E\u043A\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C"
            ],
            categoryId: "27",
            liveBroadcastContent: "none",
            localized: {
              title: "Introduction to Angular - Learning Angular",
              description: "In this series, learn how to build your first Angular application. Angular is a web framework that allows teams to deliver web apps with confidence. Discover how these tools build scalable applications."
            },
            defaultAudioLanguage: "en-US"
          },
          statistics: {
            viewCount: "33265",
            likeCount: "1173",
            dislikeCount: "26",
            favoriteCount: "0",
            commentCount: "170"
          }
        },
        {
          kind: "youtube#video",
          etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ"',
          id: "Fdf5aTYRW0E",
          snippet: {
            publishedAt: "2024-05-30T17:46:58.000Z",
            channelId: "UC29ju8bIPH5as8OGnQzwJyA",
            title: "Angular Crash Course",
            description: "In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc\n\nSponsor:\nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n\u{1F496} Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/Fdf5aTYRW0E/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/Fdf5aTYRW0E/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/Fdf5aTYRW0E/hqdefault.jpg",
                width: 480,
                height: 360
              },
              standard: {
                url: "https://i.ytimg.com/vi/Fdf5aTYRW0E/sddefault.jpg",
                width: 640,
                height: 480
              },
              maxres: {
                url: "https://i.ytimg.com/vi/Fdf5aTYRW0E/maxresdefault.jpg",
                width: 1280,
                height: 720
              }
            },
            channelTitle: "Traversy Media",
            tags: ["angular", "angular 7", "angular tutorial", "angularjs"],
            categoryId: "28",
            liveBroadcastContent: "none",
            localized: {
              title: "Angular Crash Course",
              description: "In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc\n\nSponsor:\nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n\u{1F496} Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia"
            },
            defaultAudioLanguage: "en"
          },
          statistics: {
            viewCount: "456979",
            likeCount: "8213",
            dislikeCount: "131",
            favoriteCount: "0",
            commentCount: "555"
          }
        },
        {
          kind: "youtube#video",
          etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/6e0k9ik7TThWpqueHGOhTRIN1-A"',
          id: "k5E2AVpwsko",
          snippet: {
            publishedAt: "2024-03-05T16:48:15.000Z",
            channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
            title: "Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh",
            description: "\u{1F525}Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/k5E2AVpwsko/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/k5E2AVpwsko/hqdefault.jpg",
                width: 480,
                height: 360
              },
              standard: {
                url: "https://i.ytimg.com/vi/k5E2AVpwsko/sddefault.jpg",
                width: 640,
                height: 480
              },
              maxres: {
                url: "https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg",
                width: 1280,
                height: 720
              }
            },
            channelTitle: "Programming with Mosh",
            tags: [
              "learn angular 4",
              "learn angular 4 from scratch",
              "angular4",
              "learn angular",
              "angular tutorial",
              "angular 4",
              "Angular",
              "angular 5",
              "angular 5 course",
              "angular course",
              "angular.js",
              "angularjs",
              "angular 2",
              "angular2",
              "angular 4 tutorial",
              "angular 4 tutorial for beginners",
              "angular tutorial for beginners",
              "angular 4 crash course",
              "angular 4 in 60 minutes",
              "angularjs 4",
              "angular 4 tutorial for beginners step by step",
              "angular js",
              "angularjs tutorial for beginners",
              "angular 6",
              "angular 7"
            ],
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
              title: "Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh",
              description: "\u{1F525}Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani"
            },
            defaultAudioLanguage: "en-US"
          },
          statistics: {
            viewCount: "1266085",
            likeCount: "18342",
            dislikeCount: "473",
            favoriteCount: "0",
            commentCount: "1255"
          }
        },
        {
          kind: "youtube#video",
          etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/cDwx4Ds5-J9CmiqmazUetzrLZKY"',
          id: "Rf54BH35yrY",
          snippet: {
            publishedAt: "2024-04-04T15:00:12.000Z",
            channelId: "UCg8ss4xW9jASrqWGP30jXiw",
            title: "Angular 8 \u041E\u0441\u043D\u043E\u0432\u044B. \u041F\u043E\u043B\u043D\u044B\u0439 \u041A\u0443\u0440\u0441 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445",
            description: "\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:\nhttps://clc.to/angular\n\n\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\n\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen\n\n\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:\n\u042F\u0414: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n\u0423\u0440\u043E\u043A \u043F\u043E Angular. \u0412 \u044D\u0442\u043E\u043C \u043A\u0443\u0440\u0441\u0435 \u0432\u044B \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0441\u0442\u044C \u0432 Angular \u0441 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043D\u0443\u043B\u044F\n\nAngular 8 \u041E\u0441\u043D\u043E\u0432\u044B. \u041F\u043E\u043B\u043D\u044B\u0439 \u041A\u0443\u0440\u0441. \u0423\u0440\u043E\u043A \u0434\u043B\u044F \u041D\u043E\u0432\u0438\u0447\u043A\u043E\u0432",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/Rf54BH35yrY/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/Rf54BH35yrY/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/Rf54BH35yrY/hqdefault.jpg",
                width: 480,
                height: 360
              },
              standard: {
                url: "https://i.ytimg.com/vi/Rf54BH35yrY/sddefault.jpg",
                width: 640,
                height: 480
              },
              maxres: {
                url: "https://i.ytimg.com/vi/Rf54BH35yrY/maxresdefault.jpg",
                width: 1280,
                height: 720
              }
            },
            channelTitle: "\u0412\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u041C\u0438\u043D\u0438\u043D",
            tags: [
              "angular",
              "angularjs",
              "js",
              "javascript",
              "\u0443\u0440\u043E\u043A\u0438 angular",
              "angular \u0443\u0440\u043E\u043A\u0438",
              "angular 8",
              "\u043A\u0443\u0440\u0441 angular",
              "angular \u043E\u0441\u043D\u043E\u0432\u044B",
              "\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D",
              "\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u043C\u0438\u043D\u0438\u043D",
              "\u043C\u0438\u043D\u0438\u043D",
              "\u043E\u0441\u043D\u043E\u0432\u044B angular",
              "\u0430\u043D\u0433\u0443\u043B\u044F\u0440",
              "angular 6",
              "angular js",
              "angular \u0443\u0440\u043E\u043A\u0438 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445",
              "angular \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A",
              "angular \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430",
              "\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 angular",
              "angular cli",
              "angular \u0443\u0440\u043E\u043A\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C",
              "\u043A\u0443\u0440\u0441\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
              "angular tutorial"
            ],
            categoryId: "27",
            liveBroadcastContent: "none",
            localized: {
              title: "Angular 8 \u041E\u0441\u043D\u043E\u0432\u044B. \u041F\u043E\u043B\u043D\u044B\u0439 \u041A\u0443\u0440\u0441 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445",
              description: "\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:\nhttps://clc.to/angular\n\n\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\n\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen\n\n\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:\n\u042F\u0414: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n\u0423\u0440\u043E\u043A \u043F\u043E Angular. \u0412 \u044D\u0442\u043E\u043C \u043A\u0443\u0440\u0441\u0435 \u0432\u044B \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0441\u0442\u044C \u0432 Angular \u0441 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043D\u0443\u043B\u044F\n\nAngular 8 \u041E\u0441\u043D\u043E\u0432\u044B. \u041F\u043E\u043B\u043D\u044B\u0439 \u041A\u0443\u0440\u0441. \u0423\u0440\u043E\u043A \u0434\u043B\u044F \u041D\u043E\u0432\u0438\u0447\u043A\u043E\u0432"
            },
            defaultAudioLanguage: "en-US"
          },
          statistics: {
            viewCount: "14544",
            likeCount: "573",
            dislikeCount: "11",
            favoriteCount: "0",
            commentCount: "88"
          }
        },
        {
          kind: "youtube#video",
          etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/_99tEunMszVYvCj2-1aUTKgOoSY"',
          id: "m0yGx2MGZWg",
          snippet: {
            publishedAt: "2024-06-25T07:44:08.000Z",
            channelId: "UCe_H8hzx9WV7Ca7Ps5gt72Q",
            title: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Angular. \u041E\u0431\u0437\u043E\u0440 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439",
            description: "\u0412 \u044D\u0442\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u0440\u0435\u0447\u044C \u043F\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u043E javascript \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A Angular. \u042F \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Angular, \u0433\u0434\u0435 \u0438 \u043A\u043E\u0433\u0434\u0430 \u0435\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u044E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u0437\u043E\u0440 \u0435\u0433\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0435\u043C \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0441\u043B\u043E\u0436\u0435\u043D \u0434\u043B\u044F \u043D\u043E\u0432\u0438\u0447\u043A\u043E\u0432 \u0438 \u0447\u0435\u043C \u043E\u043D \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0440\u043E\u0448 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432. \u0421\u0435\u0439\u0447\u0430\u0441 \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0431 \u0441\u0442\u0430\u0442\u044C junior javascript \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u043D\u0430\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A js \u0438 \u0430\u043D\u0433\u0443\u043B\u044F\u0440 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0432\u044B\u0431\u043E\u0440\u043E\u043C.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/m0yGx2MGZWg/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/m0yGx2MGZWg/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/m0yGx2MGZWg/hqdefault.jpg",
                width: 480,
                height: 360
              },
              standard: {
                url: "https://i.ytimg.com/vi/m0yGx2MGZWg/sddefault.jpg",
                width: 640,
                height: 480
              },
              maxres: {
                url: "https://i.ytimg.com/vi/m0yGx2MGZWg/maxresdefault.jpg",
                width: 1280,
                height: 720
              }
            },
            channelTitle: "Web Developer Blog",
            tags: [
              "angular",
              "\u0430\u043D\u0433\u0443\u043B\u044F\u0440",
              "angular js",
              "\u0443\u0440\u043E\u043A\u0438 angular",
              "angular \u0443\u0440\u043E\u043A\u0438",
              "angular tutorial",
              "\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 angular",
              "angular \u043E\u0431\u0437\u043E\u0440",
              "angular \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A",
              "js",
              "javascript",
              "web development",
              "angular 6",
              "angular \u043F\u0440\u0438\u043C\u0435\u0440\u044B",
              "angular \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430",
              "\u0441\u0442\u043E\u0438\u0442 \u043B\u0438 \u0443\u0447\u0438\u0442\u044C angular",
              "angular \u0443\u0447\u0438\u0442\u044C",
              "\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
            ],
            categoryId: "27",
            liveBroadcastContent: "none",
            defaultLanguage: "ru",
            localized: {
              title: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Angular. \u041E\u0431\u0437\u043E\u0440 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439",
              description: "\u0412 \u044D\u0442\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u0440\u0435\u0447\u044C \u043F\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u043E javascript \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A Angular. \u042F \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Angular, \u0433\u0434\u0435 \u0438 \u043A\u043E\u0433\u0434\u0430 \u0435\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u044E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u0437\u043E\u0440 \u0435\u0433\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0435\u043C \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0441\u043B\u043E\u0436\u0435\u043D \u0434\u043B\u044F \u043D\u043E\u0432\u0438\u0447\u043A\u043E\u0432 \u0438 \u0447\u0435\u043C \u043E\u043D \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0440\u043E\u0448 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432. \u0421\u0435\u0439\u0447\u0430\u0441 \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0431 \u0441\u0442\u0430\u0442\u044C junior javascript \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u043D\u0430\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A js \u0438 \u0430\u043D\u0433\u0443\u043B\u044F\u0440 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0432\u044B\u0431\u043E\u0440\u043E\u043C."
            },
            defaultAudioLanguage: "ru"
          },
          statistics: {
            viewCount: "43470",
            likeCount: "1047",
            dislikeCount: "198",
            favoriteCount: "0",
            commentCount: "96"
          }
        },
        {
          kind: "youtube#video",
          etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/GuGydXnkvpl-L4ntYhAaLNiseZ4"',
          id: "VAkio68d51A",
          snippet: {
            publishedAt: "2019-02-25T00:09:23.000Z",
            channelId: "UCZ9qFEC82qM6Pk-54Q4TVWA",
            title: "What is Angular? (Explained for Beginners)",
            description: `When you're just starting out you are probably wondering "What is Angular exactly? When you ask that question it leads to a lot of concepts that are over your head and don't make sense. So in this video I really want to cover what exactly Angular is and why it's even necessary... all from a beginners point of view.

*** DOWNLOAD THE FREE REPORT ***
For my free report on the five best programming languages in 2019 (for beginners) go to: https://andysterkowitz.com/report`,
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/VAkio68d51A/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/VAkio68d51A/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/VAkio68d51A/hqdefault.jpg",
                width: 480,
                height: 360
              },
              standard: {
                url: "https://i.ytimg.com/vi/VAkio68d51A/sddefault.jpg",
                width: 640,
                height: 480
              },
              maxres: {
                url: "https://i.ytimg.com/vi/VAkio68d51A/maxresdefault.jpg",
                width: 1280,
                height: 720
              }
            },
            channelTitle: "Andy Sterkowitz",
            tags: [
              "angular",
              "angular 7",
              "angularjs",
              "learn angular",
              "angular.js",
              "angular tutorial for beginners",
              "angular for beginners",
              "angular for dummies",
              "what is angular",
              "what is angular 7",
              "angular2",
              "angular 2",
              "javascript",
              "front end framework",
              "web development",
              "web development 2019",
              "front end framework 2019",
              "what is a front end framework",
              "software development",
              "programming",
              "front end software developer",
              "web developer"
            ],
            categoryId: "28",
            liveBroadcastContent: "none",
            defaultLanguage: "en",
            localized: {
              title: "What is Angular? (Explained for Beginners)",
              description: `When you're just starting out you are probably wondering "What is Angular exactly? When you ask that question it leads to a lot of concepts that are over your head and don't make sense. So in this video I really want to cover what exactly Angular is and why it's even necessary... all from a beginners point of view.

*** DOWNLOAD THE FREE REPORT ***
For my free report on the five best programming languages in 2019 (for beginners) go to: https://andysterkowitz.com/report`
            },
            defaultAudioLanguage: "en"
          },
          statistics: {
            viewCount: "57997",
            likeCount: "1662",
            dislikeCount: "34",
            favoriteCount: "0",
            commentCount: "114"
          }
        },
        {
          kind: "youtube#video",
          etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/u2qq5ltpXouoIrpkJgGLu8YOIeg"',
          id: "u1VCxpvDgsk",
          snippet: {
            publishedAt: "2018-12-01T15:00:05.000Z",
            channelId: "UCvuY904el7JvBlPbdqbfguw",
            title: "\u0423\u0440\u043E\u043A\u0438 Angular \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445 / #1 - \u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 Angular",
            description: "\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u043C \u043A \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044E \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u0412 \u0445\u043E\u0434\u0435 \u043A\u0443\u0440\u0441\u0430 \u043C\u044B \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0430\u0439\u0442 \u0438 \u043D\u0430\u0443\u0447\u0438\u043C\u0441\u044F \u0432\u0441\u0435\u043C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F\u043C \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u041C\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F, \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0444\u043E\u0440\u043C \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0441\u0430\u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u0435\u0431 \u0441\u0430\u0439\u0442\u044B \u043D\u0430 Angular.\n\n1) \u041A\u0443\u0440\u0441 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 itProger: https://itproger.com/course/angular\n2) Node JS: https://nodejs.org/\n3) \u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043A\u043E\u0434\u0430: https://atom.io/\n4) Angular CLI: https://cli.angular.io/\n\n\u2714 \u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432: https://itproger.com/\n\n\u2714 -------------\n\u0412\u0441\u0442\u0443\u043F\u0430\u0439 \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 \u0412\u043A - https://vk.com/prog_life \u{1F680}\n\u0413\u0440\u0443\u043F\u043F\u0430 FaceBook - https://goo.gl/XW0aaP\n\nInstagram: https://www.instagram.com/gosha_dudar/\nTelegram: http://t.me/itProger_official\nTwitter - https://twitter.com/GoshaDudar\n\n- \u0423\u0440\u043E\u043A\u0438 \u043E\u0442 #GoshaDudar \u{1F468}\u{1F3FC}\u200D\u{1F4BB}\n- \u0412\u0441\u0435 \u0443\u0440\u043E\u043A\u0438 \u043F\u043E \u0445\u0435\u0448\u0442\u0435\u0433\u0443 #goshaAngular",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/u1VCxpvDgsk/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/u1VCxpvDgsk/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/u1VCxpvDgsk/hqdefault.jpg",
                width: 480,
                height: 360
              },
              standard: {
                url: "https://i.ytimg.com/vi/u1VCxpvDgsk/sddefault.jpg",
                width: 640,
                height: 480
              },
              maxres: {
                url: "https://i.ytimg.com/vi/u1VCxpvDgsk/maxresdefault.jpg",
                width: 1280,
                height: 720
              }
            },
            channelTitle: "\u0413\u043E\u0448\u0430 \u0414\u0443\u0434\u0430\u0440\u044C",
            tags: [
              "angular",
              "angular 6",
              "angular \u0443\u0440\u043E\u043A\u0438",
              "angular node js",
              "angularjs",
              "angularjs \u0443\u0440\u043E\u043A\u0438",
              "\u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445",
              "angular \u0443\u0440\u043E\u043A\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C",
              "\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 Angular",
              "\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 angular",
              "\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 angular",
              "#GoshaDudar",
              "#goshaAngular"
            ],
            categoryId: "27",
            liveBroadcastContent: "none",
            defaultLanguage: "ru",
            localized: {
              title: "\u0423\u0440\u043E\u043A\u0438 Angular \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445 / #1 - \u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 Angular",
              description: "\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u043C \u043A \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044E \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u0412 \u0445\u043E\u0434\u0435 \u043A\u0443\u0440\u0441\u0430 \u043C\u044B \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0430\u0439\u0442 \u0438 \u043D\u0430\u0443\u0447\u0438\u043C\u0441\u044F \u0432\u0441\u0435\u043C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F\u043C \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u041C\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F, \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0444\u043E\u0440\u043C \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0441\u0430\u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u0435\u0431 \u0441\u0430\u0439\u0442\u044B \u043D\u0430 Angular.\n\n1) \u041A\u0443\u0440\u0441 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 itProger: https://itproger.com/course/angular\n2) Node JS: https://nodejs.org/\n3) \u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043A\u043E\u0434\u0430: https://atom.io/\n4) Angular CLI: https://cli.angular.io/\n\n\u2714 \u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432: https://itproger.com/\n\n\u2714 -------------\n\u0412\u0441\u0442\u0443\u043F\u0430\u0439 \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 \u0412\u043A - https://vk.com/prog_life \u{1F680}\n\u0413\u0440\u0443\u043F\u043F\u0430 FaceBook - https://goo.gl/XW0aaP\n\nInstagram: https://www.instagram.com/gosha_dudar/\nTelegram: http://t.me/itProger_official\nTwitter - https://twitter.com/GoshaDudar\n\n- \u0423\u0440\u043E\u043A\u0438 \u043E\u0442 #GoshaDudar \u{1F468}\u{1F3FC}\u200D\u{1F4BB}\n- \u0412\u0441\u0435 \u0443\u0440\u043E\u043A\u0438 \u043F\u043E \u0445\u0435\u0448\u0442\u0435\u0433\u0443 #goshaAngular"
            },
            defaultAudioLanguage: "ru"
          },
          statistics: {
            viewCount: "33896",
            likeCount: "612",
            dislikeCount: "37",
            favoriteCount: "0",
            commentCount: "50"
          }
        },
        {
          kind: "youtube#video",
          etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/96JEWzuOaAgaHrcnKhmatlZzPME"',
          id: "4KBVkQ7b6yk",
          snippet: {
            publishedAt: "2024-02-22T15:00:14.000Z",
            channelId: "UCg8ss4xW9jASrqWGP30jXiw",
            title: "Top 50 Angular Interview Questions",
            description: "Angular Interview Masterclass",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/4KBVkQ7b6yk/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/4KBVkQ7b6yk/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/4KBVkQ7b6yk/hqdefault.jpg",
                width: 480,
                height: 360
              },
              standard: {
                url: "https://i.ytimg.com/vi/4KBVkQ7b6yk/sddefault.jpg",
                width: 640,
                height: 480
              },
              maxres: {
                url: "https://i.ytimg.com/vi/4KBVkQ7b6yk/maxresdefault.jpg",
                width: 1280,
                height: 720
              }
            },
            channelTitle: "Interview Happy",
            tags: [
              "angular",
              "angularjs",
              "js",
              "javascript",
              "\u0443\u0440\u043E\u043A\u0438 angular",
              "angular \u0443\u0440\u043E\u043A\u0438",
              "angular 8",
              "\u043A\u0443\u0440\u0441 angular",
              "angular \u043E\u0441\u043D\u043E\u0432\u044B",
              "\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D",
              "\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u043C\u0438\u043D\u0438\u043D",
              "\u043C\u0438\u043D\u0438\u043D",
              "\u043E\u0441\u043D\u043E\u0432\u044B angular",
              "angular \u0432\u043E\u043F\u0440\u043E\u0441\u044B",
              "angular \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E",
              "\u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435",
              "angular \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435",
              "\u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043D\u0430 \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435",
              "angular 6",
              "angular \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445",
              "angular \u0443\u0440\u043E\u043A\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C"
            ],
            categoryId: "27",
            liveBroadcastContent: "none",
            localized: {
              title: "Top 50 Angular Interview Questions",
              description: "Angular Interview Masterclass"
            },
            defaultAudioLanguage: "en-US"
          },
          statistics: {
            viewCount: "6824",
            likeCount: "595",
            dislikeCount: "10",
            favoriteCount: "0",
            commentCount: "126"
          }
        },
        {
          kind: "youtube#video",
          etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/pvVvPt5cchXjCoSYxodr18lOaEg"',
          id: "xGgwQvza0Ns",
          snippet: {
            publishedAt: "2023-07-31T16:06:13.000Z",
            channelId: "UCg8ss4xW9jASrqWGP30jXiw",
            title: "RxJs In Practice Course",
            description: "In this lessons we will start learning RxJs at the beginning: we are going to start with the most fundamental RxJs concept which is the Stream of Values.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/xGgwQvza0Ns/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/xGgwQvza0Ns/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/xGgwQvza0Ns/hqdefault.jpg",
                width: 480,
                height: 360
              },
              standard: {
                url: "https://i.ytimg.com/vi/xGgwQvza0Ns/sddefault.jpg",
                width: 640,
                height: 480
              },
              maxres: {
                url: "https://i.ytimg.com/vi/xGgwQvza0Ns/maxresdefault.jpg",
                width: 1280,
                height: 720
              }
            },
            channelTitle: "Angular University",
            tags: [
              "angular",
              "angular 8",
              "vladilen",
              "\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D",
              "\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u043C\u0438\u043D\u0438\u043D",
              "angularjs",
              "angular \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430",
              "\u0443\u0440\u043E\u043A\u0438 angular",
              "rxjs",
              "rxjs \u0443\u0440\u043E\u043A\u0438",
              "momentjs",
              "js",
              "javascript",
              "web",
              "frontend",
              "\u0430\u043D\u0433\u0443\u043B\u044F\u0440",
              "angular \u0443\u0440\u043E\u043A\u0438",
              "angular \u0443\u0440\u043E\u043A\u0438 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445",
              "\u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 angular 4",
              "angular 60 \u043C\u0438\u043D\u0443\u0442",
              "\u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 angular",
              "angular 6",
              "\u0430\u043D\u0433\u0443\u043B\u044F\u0440 7 \u0443\u0440\u043E\u043A\u0438",
              "\u0440\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
            ],
            categoryId: "27",
            liveBroadcastContent: "none",
            localized: {
              title: "RxJs In Practice Course",
              description: "In this lessons we will start learning RxJs at the beginning: we are going to start with the most fundamental RxJs concept which is the Stream of Values."
            },
            defaultAudioLanguage: "en-US"
          },
          statistics: {
            viewCount: "12128",
            likeCount: "665",
            dislikeCount: "11",
            favoriteCount: "0",
            commentCount: "156"
          }
        },
        {
          kind: "youtube#video",
          etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/KuFm1jGNMzgjE2VlAEsPgRVra4o"',
          id: "G0bBLvWXBvc",
          snippet: {
            publishedAt: "2023-09-16T16:53:41.000Z",
            channelId: "UCsBjURrPoezykLs9EqgamOA",
            title: "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
            description: "Learn the basics of Angular 8 \u{1F680} by building a tic-tac-toe game \u{1F579}\uFE0F from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics \u{1F449}https://fireship.io/courses/angular/\n\nFull Source Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Docs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes \u{1F913}\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndroid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/G0bBLvWXBvc/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/G0bBLvWXBvc/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg",
                width: 480,
                height: 360
              },
              standard: {
                url: "https://i.ytimg.com/vi/G0bBLvWXBvc/sddefault.jpg",
                width: 640,
                height: 480
              },
              maxres: {
                url: "https://i.ytimg.com/vi/G0bBLvWXBvc/maxresdefault.jpg",
                width: 1280,
                height: 720
              }
            },
            channelTitle: "Fireship",
            tags: [
              "webdev",
              "app development",
              "lesson",
              "tutorial",
              "beginners",
              "beginner",
              "basic",
              "angular tutorial",
              "angular basics",
              "angular for beginners",
              "angular 8",
              "angular components",
              "learn angular"
            ],
            categoryId: "28",
            liveBroadcastContent: "none",
            localized: {
              title: "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
              description: "Learn the basics of Angular 8 \u{1F680} by building a tic-tac-toe game \u{1F579}\uFE0F from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics \u{1F449}https://fireship.io/courses/angular/\n\nFull Source Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Docs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes \u{1F913}\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndroid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment."
            },
            defaultAudioLanguage: "en"
          },
          statistics: {
            viewCount: "56657",
            likeCount: "2092",
            dislikeCount: "36",
            favoriteCount: "0",
            commentCount: "128"
          }
        }
      ]
    };
  }
  getAll() {
    return of(this.mockVideos);
  }
  // getOnce(video: number): Item {
  //   return this.mockVideos.items[video];
  // }
  getById(id) {
    const matched = this.mockVideos.items.filter((video) => video.id.includes(id));
    return matched;
  }
  getByTitle(title) {
    const matched = this.mockVideos.items.filter((video) => video.snippet.localized.title.toLowerCase().includes(title.toLowerCase()));
    return matched;
  }
};
_YoutubeService.\u0275fac = function YoutubeService_Factory(t) {
  return new (t || _YoutubeService)();
};
_YoutubeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _YoutubeService, factory: _YoutubeService.\u0275fac, providedIn: "root" });
var YoutubeService = _YoutubeService;

// src/app/features/youtube/services/detalis.service.ts
var _DetalisService = class _DetalisService {
  constructor(router, youtubeservice) {
    this.router = router;
    this.youtubeservice = youtubeservice;
    this.id = "";
    this.subscriptions = [];
    this.datalisData = {
      statistics: {
        likeCount: "",
        dislikeCount: "",
        viewCount: "",
        favoriteCount: "",
        commentCount: ""
      },
      img: {
        url: "",
        width: 0,
        height: 0
      },
      description: "",
      channelTitle: "",
      publishedAt: "",
      title: ""
    };
  }
  turnOffSubscribes() {
    this.routeSubscription?.unsubscribe();
  }
  loadDetalisById(id) {
    const data = this.youtubeservice.getById(id)[0];
    this.datalisData.channelTitle = data.snippet.channelTitle;
    this.datalisData.description = data.snippet.description;
    this.datalisData.publishedAt = data.snippet.publishedAt;
    this.datalisData.statistics = data.statistics;
    this.datalisData.img.url = data.snippet.thumbnails.medium.url;
    this.datalisData.title = data.snippet.title;
  }
  openDetalis(id) {
    this.router.navigate(["/main/detalis", id]);
  }
  handleButtonBack() {
    this.router.navigate(["/main"]);
  }
};
_DetalisService.\u0275fac = function DetalisService_Factory(t) {
  return new (t || _DetalisService)(\u0275\u0275inject(Router), \u0275\u0275inject(YoutubeService));
};
_DetalisService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DetalisService, factory: _DetalisService.\u0275fac, providedIn: "root" });
var DetalisService = _DetalisService;

// node_modules/primeng/fesm2022/primeng-toolbar.mjs
var _c0 = ["*"];
function Toolbar_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Toolbar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, Toolbar_div_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "start");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.startTemplate);
  }
}
function Toolbar_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Toolbar_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, Toolbar_div_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.centerTemplate);
  }
}
function Toolbar_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Toolbar_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, Toolbar_div_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "end");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.endTemplate);
  }
}
var Toolbar = class _Toolbar {
  el;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabelledBy;
  templates;
  startTemplate;
  endTemplate;
  centerTemplate;
  constructor(el) {
    this.el = el;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "start":
        case "left":
          this.startTemplate = item.template;
          break;
        case "end":
        case "right":
          this.endTemplate = item.template;
          break;
        case "center":
          this.centerTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = function Toolbar_Factory(t) {
    return new (t || _Toolbar)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toolbar,
    selectors: [["p-toolbar"]],
    contentQueries: function Toolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      ariaLabelledBy: "ariaLabelledBy"
    },
    ngContentSelectors: _c0,
    decls: 5,
    vars: 9,
    consts: [["role", "toolbar", 3, "ngClass", "ngStyle"], ["class", "p-toolbar-group-left p-toolbar-group-start", 4, "ngIf"], ["class", "p-toolbar-group-center", 4, "ngIf"], ["class", "p-toolbar-group-right p-toolbar-group-end", 4, "ngIf"], [1, "p-toolbar-group-left", "p-toolbar-group-start"], [4, "ngTemplateOutlet"], [1, "p-toolbar-group-center"], [1, "p-toolbar-group-right", "p-toolbar-group-end"]],
    template: function Toolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275template(2, Toolbar_div_2_Template, 2, 2, "div", 1)(3, Toolbar_div_3_Template, 2, 2, "div", 2)(4, Toolbar_div_4_Template, 2, 2, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", "p-toolbar p-component")("ngStyle", ctx.style);
        \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledBy)("data-pc-name", "toolbar");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.startTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.centerTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.endTemplate);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
    styles: ["@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toolbar, [{
    type: Component,
    args: [{
      selector: "p-toolbar",
      template: `
        <div [ngClass]="'p-toolbar p-component'" [attr.aria-labelledby]="ariaLabelledBy" [ngStyle]="style" [class]="styleClass" role="toolbar" [attr.data-pc-name]="'toolbar'">
            <ng-content></ng-content>
            <div class="p-toolbar-group-left p-toolbar-group-start" *ngIf="startTemplate" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </div>
            <div class="p-toolbar-group-center" *ngIf="centerTemplate" [attr.data-pc-section]="'center'">
                <ng-container *ngTemplateOutlet="centerTemplate"></ng-container>
            </div>
            <div class="p-toolbar-group-right p-toolbar-group-end" *ngIf="endTemplate" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToolbarModule = class _ToolbarModule {
  static \u0275fac = function ToolbarModule_Factory(t) {
    return new (t || _ToolbarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToolbarModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule],
      exports: [Toolbar, SharedModule],
      declarations: [Toolbar]
    }]
  }], null, null);
})();

// src/app/shared/services/shared.service.ts
var _SharedService = class _SharedService {
  constructor() {
    this.filterTitle = new BehaviorSubject("");
    this.filterDate = new BehaviorSubject("");
    this.filterView = new BehaviorSubject("");
    this.detalisId = new BehaviorSubject("");
    this.searchResultsData = new BehaviorSubject({
      filterTitle: "",
      filterDate: "",
      filterViews: "",
      searchInputHeader: "",
      searchedItems: []
    });
    this.filterTitle$ = this.filterTitle.asObservable();
    this.filterDate$ = this.filterDate.asObservable();
    this.filterView$ = this.filterView.asObservable();
    this.searchResultsData$ = this.searchResultsData.asObservable();
    this.detalisId$ = this.detalisId.asObservable();
  }
  setFilterTitle(value) {
    this.filterTitle.next(value);
  }
  setFilterDate(value) {
    this.filterDate.next(value);
  }
  setFilterView(value) {
    this.filterView.next(value);
  }
  setSearchResultsData(value) {
    this.searchResultsData.next(value);
  }
  setDetalisId(value) {
    this.detalisId.next(value);
  }
};
_SharedService.\u0275fac = function SharedService_Factory(t) {
  return new (t || _SharedService)();
};
_SharedService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SharedService, factory: _SharedService.\u0275fac, providedIn: "root" });
var SharedService = _SharedService;

// src/app/features/youtube/services/search-results.service.ts
var _SearchResultsService = class _SearchResultsService {
  constructor(youtubeService, sharedService, detalisService) {
    this.youtubeService = youtubeService;
    this.sharedService = sharedService;
    this.detalisService = detalisService;
    this.mockItems = [];
    this.SearchResultsData = {
      filterTitle: "",
      filterDate: "",
      filterViews: "",
      searchInputHeader: "",
      searchedItems: []
    };
    this.subscriptions = [];
    this.getAllYoutubeItems();
    this.handleFiltersChange();
    this.allOrSearchedItems();
  }
  getAllYoutubeItems() {
    this.youtubeService.getAll().subscribe((response) => {
      this.mockItems = response.items;
    });
  }
  handleFiltersChange() {
    this.sharedService.filterTitle$.subscribe((value) => {
      this.SearchResultsData.filterTitle = value;
      this.listenSearchResultsData();
    });
    this.sharedService.filterDate$.subscribe((value) => {
      this.SearchResultsData.filterDate = value;
      this.listenSearchResultsData();
    });
    this.sharedService.filterView$.subscribe((value) => {
      this.SearchResultsData.filterViews = value;
      this.listenSearchResultsData();
    });
    this.subscriptions.push(this.sharedService.searchResultsData$.subscribe((value) => {
      this.SearchResultsData = value;
    }));
  }
  listenSearchResultsData() {
    this.sharedService.setSearchResultsData(this.SearchResultsData);
  }
  get allItems() {
    return this.mockItems;
  }
  destroyListeners() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  searchByTitle(title) {
    this.SearchResultsData.searchedItems = this.youtubeService.getByTitle(title);
  }
  allOrSearchedItems() {
    if (this.SearchResultsData.searchInputHeader.trim() === "") {
      this.SearchResultsData.searchedItems = this.allItems;
    } else {
      this.searchByTitle(this.SearchResultsData.searchInputHeader);
    }
    return this.SearchResultsData.searchedItems;
  }
};
_SearchResultsService.\u0275fac = function SearchResultsService_Factory(t) {
  return new (t || _SearchResultsService)(\u0275\u0275inject(YoutubeService), \u0275\u0275inject(SharedService), \u0275\u0275inject(DetalisService));
};
_SearchResultsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchResultsService, factory: _SearchResultsService.\u0275fac, providedIn: "root" });
var SearchResultsService = _SearchResultsService;

// node_modules/primeng/fesm2022/primeng-icons-minus.mjs
var MinusIcon = class _MinusIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinusIcon_BaseFactory;
    return function MinusIcon_Factory(t) {
      return (\u0275MinusIcon_BaseFactory || (\u0275MinusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_MinusIcon)))(t || _MinusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MinusIcon,
    selectors: [["MinusIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
    template: function MinusIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinusIcon, [{
    type: Component,
    args: [{
      selector: "MinusIcon",
      standalone: true,
      imports: [CommonModule, BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-plus.mjs
var PlusIcon = class _PlusIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlusIcon_BaseFactory;
    return function PlusIcon_Factory(t) {
      return (\u0275PlusIcon_BaseFactory || (\u0275PlusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_PlusIcon)))(t || _PlusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PlusIcon,
    selectors: [["PlusIcon"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function PlusIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlusIcon, [{
    type: Component,
    args: [{
      selector: "PlusIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-fieldset.mjs
var _c02 = ["*", [["p-header"]]];
var _c1 = ["*", "p-header"];
var _c2 = (a0, a1) => ({
  "p-fieldset p-component": true,
  "p-fieldset-toggleable": a0,
  "p-fieldset-expanded": a1
});
var _c3 = (a0) => ({
  transitionParams: a0,
  height: "0"
});
var _c4 = (a0) => ({
  value: "hidden",
  params: a0
});
var _c5 = (a0) => ({
  transitionParams: a0,
  height: "*"
});
var _c6 = (a0) => ({
  value: "visible",
  params: a0
});
function Fieldset_ng_container_2_ng_container_2_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "PlusIcon", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-fieldset-toggler");
    \u0275\u0275attribute("data-pc-section", "togglericon");
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("data-pc-section", "togglericon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_2_PlusIcon_1_Template, 1, 2, "PlusIcon", 9)(2, Fieldset_ng_container_2_ng_container_2_span_2_Template, 2, 2, "span", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.expandIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3_MinusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "MinusIcon", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-fieldset-toggler");
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "togglericon");
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("data-pc-section", "togglericon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_3_MinusIcon_1_Template, 1, 3, "MinusIcon", 9)(2, Fieldset_ng_container_2_ng_container_3_span_2_Template, 2, 2, "span", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapseIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 7);
    \u0275\u0275listener("click", function Fieldset_ng_container_2_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle($event));
    })("keydown", function Fieldset_ng_container_2_Template_a_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275template(2, Fieldset_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 8)(3, Fieldset_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 8)(4, Fieldset_ng_container_2_ng_container_4_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const legendContent_r4 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("id", ctx_r2.id + "_header")("aria-controls", ctx_r2.id + "_content")("aria-expanded", !ctx_r2.collapsed)("aria-label", ctx_r2.buttonAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", legendContent_r4);
  }
}
function Fieldset_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Fieldset_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "legendtitle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.legend);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate);
  }
}
function Fieldset_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var Fieldset = class _Fieldset {
  el;
  /**
   * Header text of the fieldset.
   * @group Props
   */
  legend;
  /**
   * When specified, content can toggled by clicking the legend.
   * @group Props
   * @defaultValue false
   */
  toggleable;
  /**
   * Defines the default visibility state of the content.
   * * @group Props
   */
  collapsed = false;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Transition options of the panel animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Emits when the collapsed state changes.
   * @param {boolean} value - New value.
   * @group Emits
   */
  collapsedChange = new EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom toggle event
   * @group Emits
   */
  onBeforeToggle = new EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom toggle event
   * @group Emits
   */
  onAfterToggle = new EventEmitter();
  templates;
  get id() {
    return UniqueComponentId();
  }
  get buttonAriaLabel() {
    return this.legend;
  }
  animating;
  headerTemplate;
  contentTemplate;
  collapseIconTemplate;
  expandIconTemplate;
  constructor(el) {
    this.el = el;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "expandicon":
          this.expandIconTemplate = item.template;
          break;
        case "collapseicon":
          this.collapseIconTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  toggle(event) {
    if (this.animating) {
      return false;
    }
    this.animating = true;
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.collapsed) this.expand();
    else this.collapse();
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    event.preventDefault();
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  expand() {
    this.collapsed = false;
    this.collapsedChange.emit(this.collapsed);
  }
  collapse() {
    this.collapsed = true;
    this.collapsedChange.emit(this.collapsed);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onToggleDone() {
    this.animating = false;
  }
  static \u0275fac = function Fieldset_Factory(t) {
    return new (t || _Fieldset)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Fieldset,
    selectors: [["p-fieldset"]],
    contentQueries: function Fieldset_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      legend: "legend",
      toggleable: [2, "toggleable", "toggleable", booleanAttribute],
      collapsed: [2, "collapsed", "collapsed", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      transitionOptions: "transitionOptions"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    features: [\u0275\u0275InputTransformsFeature],
    ngContentSelectors: _c1,
    decls: 9,
    vars: 28,
    consts: [["legendContent", ""], [3, "ngClass", "ngStyle"], [1, "p-fieldset-legend"], [4, "ngIf", "ngIfElse"], ["role", "region", 1, "p-toggleable-content"], [1, "p-fieldset-content"], [4, "ngTemplateOutlet"], ["pRipple", "", "tabindex", "0", "role", "button", 3, "click", "keydown"], [4, "ngIf"], [3, "styleClass", 4, "ngIf"], ["class", "p-fieldset-toggler", 4, "ngIf"], [3, "styleClass"], [1, "p-fieldset-toggler"], [1, "p-fieldset-legend-text"]],
    template: function Fieldset_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275elementStart(0, "fieldset", 1)(1, "legend", 2);
        \u0275\u0275template(2, Fieldset_ng_container_2_Template, 5, 7, "ng-container", 3)(3, Fieldset_ng_template_3_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275listener("@fieldsetContent.done", function Fieldset_Template_div_animation_fieldsetContent_done_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onToggleDone());
        });
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275projection(7);
        \u0275\u0275template(8, Fieldset_ng_container_8_Template, 1, 0, "ng-container", 6);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const legendContent_r4 = \u0275\u0275reference(4);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(17, _c2, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
        \u0275\u0275attribute("id", ctx.id)("data-pc-name", "fieldset")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "legend");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.toggleable)("ngIfElse", legendContent_r4);
        \u0275\u0275advance(3);
        \u0275\u0275property("@fieldsetContent", ctx.collapsed ? \u0275\u0275pureFunction1(22, _c4, \u0275\u0275pureFunction1(20, _c3, ctx.transitionOptions)) : \u0275\u0275pureFunction1(26, _c6, \u0275\u0275pureFunction1(24, _c5, ctx.animating ? ctx.transitionOptions : "0ms")));
        \u0275\u0275attribute("id", ctx.id + "_content")("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("data-pc-section", "toggleablecontent");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "content");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, MinusIcon, PlusIcon],
    styles: ["@layer primeng{.p-fieldset{min-width:initial}.p-fieldset-legend>a,.p-fieldset-legend>span{display:flex;align-items:center;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-fieldset-legend-text{line-height:1}.p-fieldset-toggleable.p-fieldset-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-fieldset-toggleable .p-toggleable-content{overflow:hidden}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("fieldsetContent", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fieldset, [{
    type: Component,
    args: [{
      selector: "p-fieldset",
      template: `
        <fieldset
            [attr.id]="id"
            [ngClass]="{ 'p-fieldset p-component': true, 'p-fieldset-toggleable': toggleable, 'p-fieldset-expanded': !collapsed && toggleable }"
            [ngStyle]="style"
            [class]="styleClass"
            [attr.data-pc-name]="'fieldset'"
            [attr.data-pc-section]="'root'"
        >
            <legend class="p-fieldset-legend" [attr.data-pc-section]="'legend'">
                <ng-container *ngIf="toggleable; else legendContent">
                    <a [attr.id]="id + '_header'" pRipple tabindex="0" role="button" [attr.aria-controls]="id + '_content'" [attr.aria-expanded]="!collapsed" [attr.aria-label]="buttonAriaLabel" (click)="toggle($event)" (keydown)="onKeyDown($event)">
                        <ng-container *ngIf="collapsed">
                            <PlusIcon *ngIf="!expandIconTemplate" [styleClass]="'p-fieldset-toggler'" [attr.data-pc-section]="'togglericon'" />
                            <span *ngIf="expandIconTemplate" class="p-fieldset-toggler" [attr.data-pc-section]="'togglericon'">
                                <ng-container *ngTemplateOutlet="expandIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngIf="!collapsed">
                            <MinusIcon *ngIf="!collapseIconTemplate" [styleClass]="'p-fieldset-toggler'" [attr.aria-hidden]="true" [attr.data-pc-section]="'togglericon'" />
                            <span *ngIf="collapseIconTemplate" class="p-fieldset-toggler" [attr.data-pc-section]="'togglericon'">
                                <ng-container *ngTemplateOutlet="collapseIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="legendContent"></ng-container>
                    </a>
                </ng-container>
                <ng-template #legendContent>
                    <span class="p-fieldset-legend-text" [attr.data-pc-section]="'legendtitle'">{{ legend }}</span>
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                </ng-template>
            </legend>
            <div
                [attr.id]="id + '_content'"
                role="region"
                class="p-toggleable-content"
                [@fieldsetContent]="collapsed ? { value: 'hidden', params: { transitionParams: transitionOptions, height: '0' } } : { value: 'visible', params: { transitionParams: animating ? transitionOptions : '0ms', height: '*' } }"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                [attr.data-pc-section]="'toggleablecontent'"
                (@fieldsetContent.done)="onToggleDone()"
            >
                <div class="p-fieldset-content" [attr.data-pc-section]="'content'">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
            </div>
        </fieldset>
    `,
      animations: [trigger("fieldsetContent", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-fieldset{min-width:initial}.p-fieldset-legend>a,.p-fieldset-legend>span{display:flex;align-items:center;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-fieldset-legend-text{line-height:1}.p-fieldset-toggleable.p-fieldset-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-fieldset-toggleable .p-toggleable-content{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    legend: [{
      type: Input
    }],
    toggleable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var FieldsetModule = class _FieldsetModule {
  static \u0275fac = function FieldsetModule_Factory(t) {
    return new (t || _FieldsetModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FieldsetModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, RippleModule, MinusIcon, PlusIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldsetModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, MinusIcon, PlusIcon],
      exports: [Fieldset, SharedModule],
      declarations: [Fieldset]
    }]
  }], null, null);
})();

export {
  SharedService,
  DetalisService,
  SearchResultsService,
  Toolbar,
  ToolbarModule,
  Fieldset,
  FieldsetModule
};
//# sourceMappingURL=chunk-GT4EGSGA.js.map
