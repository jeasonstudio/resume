webpackJsonp([1],Array(25).concat([function(t,e,a){"use strict";var s=a(7),n=a(81),i=a(78),o=a.n(i);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"home",component:o.a}]})},function(t,e,a){function s(t){a(76)}var n=a(24)(a(44),a(79),s,null,null);t.exports=n.exports},function(t,e,a){"use strict";var s={headings:{contact:"联系方式",experience:"实习经历",projects:"个人项目",education:"教育经历",skills:"技能专长",about:"自我介绍"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Kontakt",experience:"Berufserfahrung",education:"Schulbildung",skills:"Qualifikationen",about:"Über mich"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Contact",experience:"Internship Experience",projects:"Personal Projects",education:"Education",skills:"Skills",about:"About me"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Contacto",experience:"Experiencia",education:"Educación",skills:"Habilidades",about:"Sobre mi"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Contact",experience:"Expérience professionelle",education:"Formation",skills:"Compétences",about:"À propos de moi"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Kapcsolat",experience:"Munkatapasztalat",education:"Tanulmány",skills:"Készségek",about:"Rólam"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Kontak",experience:"Pengalaman",education:"Pendidikan",skills:"Keterampilan",about:"Tentang Saya"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Contatti",experience:"Esperienza professionale",education:"Formazione",skills:"Competenze",about:"Su di me"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Contato",experience:"Experiência Profissional",education:"Educação",skills:"Competências",about:"Sobre"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Contactos",experience:"Experiência Profissional",education:"Educação",skills:"Competências",about:"Sobre mim"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Контакты",experience:"Опыт",education:"Обучение",skills:"Навыки",about:"Обо мне"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"Kontakt",experience:"Arbetslivserfarenhet",education:"Utbildning",skills:"Kunskaper",about:"Om mig"}};e.a=s},function(t,e,a){"use strict";var s={headings:{contact:"ข้อมูลติดต่อ",experience:"ประสบการณ์ทำงาน",education:"ประวัติการศึกษา",skills:"ทักษะและความสามารถ",about:"ข้อมูลส่วนตัว"}};e.a=s},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(7),n=a(26),i=a.n(n),o=a(25);s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},function(t,e,a){"use strict";a.d(e,"a",function(){return r});var s=a(46),n=a.n(s),i=function(t){if(t&&t.length>0)return t;t=document.getElementsByTagName("*");var e=[],a=!0,s=!1,i=void 0;try{for(var o,r=n()(t);!(a=(o=r.next()).done);a=!0){var c=o.value,l=window.getComputedStyle(c,null).getPropertyValue("box-shadow");"none"!==l&&(c.style.boxShadow="none",e.push({shadow:l,top:c.offsetTop+"px",left:c.offsetLeft+"px",width:c.getBoundingClientRect().width+"px",height:c.getBoundingClientRect().height+"px"}))}}catch(t){s=!0,i=t}finally{try{!a&&r.return&&r.return()}finally{if(s)throw i}}return e},o=function(t){var e='<div id="chrome-shadow-fixer">';return t.forEach(function(t,a){return e+='<div id="chrome-shadow-fixer-'+a+'"></div>'}),e+="</div>"},r=function(t){var e=i(t);if(e.length<1)return void console.warn("fixShadows(): No elements to fix shadows.");var a=o(e);return document.body.innerHTML+=a,e.forEach(function(t,e){var a=document.querySelector("#chrome-shadow-fixer-"+e);a.style.height=t.height,a.style.width=t.width,a.style.left=t.left,a.style.top=t.top,a.style.position="absolute",a.style.boxShadow=t.shadow,a.style["-webkit-print-color-adjust"]="exact",a.style["-webkit-filter"]="opacity(1)"}),e}},function(t,e,a){"use strict";a.d(e,"a",function(){return s});var s={name:{first:"Jeason"},position:"Software Developer",birth:{year:1996,location:"Tangshan, Heibei, China"},experience:[{company:"Xiaomi Technology Co., Ltd",position:"Software Developer",timeperiod:"since June 2017",description:"Responsible for the development of Audio Operating Platform(React, Koa and Graphql)"},{company:"Zhongbaohui Technology Co., Ltd",position:"Web Developer",timeperiod:"July 2016 - October 2016",description:"Participated in the development of `BeikeCampus` and WeChatAPP with angularjs@1.x and WeUI."}],projects:[{name:'<a target="_blank" style="text-decoration: blink;color: black;font-family:\'Source Sans Pro\', sans-serif;" href="https://github.com/jeasonstudio/CN-VScode-Docs"><i class="fa fa-link" aria-hidden="true" /> VSCode Doc translation</a>',description:"Open source in Github with 420+ star, 130+ fork"},{name:'<a target="_blank" style="text-decoration: blink;color: black;font-family:\'Source Sans Pro\', sans-serif;" href="https://github.com/jeasonstudio/hulk"><i class="fa fa-link" aria-hidden="true" /> Hulk.js</a>',description:"An Express MiddleWare provides Mock data service for Restful API."},{name:'<a target="_blank" style="text-decoration: blink;color: black;font-family:\'Source Sans Pro\', sans-serif;" href="https://github.com/jeasonstudio/Ripples.wxss"><i class="fa fa-link" aria-hidden="true" /> Ripples.wxss</a>',description:"CSS3 Animation library for WeChatAPP."},{name:'<a target="_blank" style="text-decoration: blink;color: black;font-family:\'Source Sans Pro\', sans-serif;" href="https://github.com/jeasonstudio/iWeAther-APP"><i class="fa fa-link" aria-hidden="true" /> iWeAther-APP</a>',description:"A weather webapp based on VueJS & PWA"},{name:'<a target="_blank" style="text-decoration: blink;color: black;font-family:\'Source Sans Pro\', sans-serif;" href="https://github.com/jeasonstudio?utf8=%E2%9C%93&tab=repositories&q=&type=&language=go"><i class="fa fa-link" aria-hidden="true" /> GoLang projects</a>',description:"Web crawler of USTB edu system and zhihu, Simple image processing: GaussianBlur, Edge detection and so on."}],education:[{degree:"USTB",timeperiod:"September 2015 - June 2019",description:'Junior students, major in computer science<br />Honors: Chinese College Computer Design Competition national first prize; "LanQiao Cup" national second prize and so on;'}],skills:[{name:"HTML5 & CSS3",level:"70",description:"Worked in both Agile and Waterfall settings. Skilled use flex layout."},{name:"JavaScript",level:"90",description:"Skilled use ES2016+, can build webapp via React, VueJS, angular.js."},{name:"Node.js",level:"50",description:"Skilled use Express, koa and Unit Testing, familiar with HTTP protocol,Understand the use of MySQL & MongoDB"},{name:"GoLang",level:"50",description:"Have the experience to build backend server, database middleware, web crawler and Image Processing via GoLang"}],skillDescription:"<br />Familiar with RestfulAPI and Graphql, knows how to dubug and performance optimization<br />There are data structures and algorithmic design basis and I like open source.<br />Familiar with Git, Gitflow and Linux, with full stack development capabilities;<br />I love life, love sports",contact:{email:"me@jeasonstudio.cn",phone:"13220101996",street:null,city:null,website:"",github:"https://github.com/jeasonstudio"},lang:"en"}},function(t,e,a){"use strict";a.d(e,"a",function(){return m});var s=a(29),n=a(28),i=a(31),o=a(36),r=a(27),c=a(34),l=a(30),d=a(39),u=a(33),p=a(38),h=a(37),f=a(35),v=a(32),m={en:s.a,de:n.a,fr:i.a,pt:o.a,cn:r.a,it:c.a,es:l.a,th:d.a,"pt-br":f.a,ru:h.a,sv:p.a,id:u.a,hu:v.a}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(7),n=a(41),i=a(42),o=a(43);e.default=s.a.component("resume",{name:"app",data:function(){return{person:i.a,terms:o.a}},computed:{lang:function(){return this.terms[this.person.lang]}},mounted:function(){var t=n.a();t&&t.length>0&&(window.onhashchange=function(){location.reload()})}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e,a){function s(t){a(77)}var n=a(24)(a(45),a(80),s,"data-v-7cc7494e",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("div",{staticClass:"page"},[a("div",{staticClass:"page-inner"},[a("div",{staticClass:"resume",attrs:{id:"concise"}},[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"name",domProps:{textContent:t._s(t.person.name.first)}})]),t._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"position",domProps:{textContent:t._s(t.person.position)}})]),t._v(" "),a("div",{staticClass:"row labels"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-JS"}})]),t._v(" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-socialcss3"}})]),t._v(" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-html-copy"}})]),t._v(" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-nodejs"}})]),t._v(" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-git"}})]),t._v(" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-vuejs"}})]),t._v(" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-react"}})]),t._v(" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-angular-logo"}})]),t._v(" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-gopher"}})])]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"left"},[a("div",{staticClass:"experience"},[a("h4",{domProps:{textContent:t._s(t.lang.headings.experience)}}),t._v(" "),t._l(t.person.experience,function(e,s){return a("div",{key:s,staticClass:"experience-part"},[a("span",{staticClass:"company",domProps:{innerHTML:t._s(e.company)}}),t._v(" "),a("span",{staticClass:"time-period"},[a("span",{staticClass:"job-title",domProps:{textContent:t._s(e.position)}}),t._v("\n                     \n                  "+t._s(e.timeperiod)+"\n                ")]),t._v(" "),a("span",{staticClass:"job-description",domProps:{textContent:t._s(e.description)}})])})],2),t._v(" "),a("div",{staticClass:"projects"},[a("h4",{domProps:{textContent:t._s(t.lang.headings.projects)}}),t._v(" "),t._l(t.person.projects,function(e,s){return a("div",{key:s,staticClass:"projects-part"},[a("span",{staticClass:"projects-name",domProps:{innerHTML:t._s(e.name)}}),t._v(" "),a("span",{staticClass:"projects-description",domProps:{textContent:t._s(e.description)}})])})],2),t._v(" "),a("div",{staticClass:"contacts"},[a("h4",{domProps:{textContent:t._s(t.lang.headings.contact)}}),t._v(" "),t.person.contact.github?a("span",[a("a",{attrs:{target:"_blank",href:t.person.contact.github},domProps:{textContent:t._s(t.person.contact.github)}}),t._v(" "),a("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.person.contact.email?a("span",[a("a",{attrs:{target:"_blank",href:"mailto:"+t.person.contact.email},domProps:{textContent:t._s(t.person.contact.email)}}),t._v(" "),a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.person.contact.phone?a("span",[a("a",{attrs:{target:"_blank",href:"tel:"+t.person.contact.phone},domProps:{textContent:t._s(t.person.contact.phone)}}),t._v(" "),a("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.person.contact.website?a("span",[a("a",{attrs:{target:"_blank",href:t.person.contact.website},domProps:{textContent:t._s(t.person.contact.website)}}),t._v(" "),a("i",{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})]):t._e()])]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"education"},[a("h4",{domProps:{textContent:t._s(t.lang.headings.education)}}),t._v(" "),t._l(t.person.education,function(e,s){return a("div",{key:s,staticClass:"education-part"},[a("span",{staticClass:"education-degree",domProps:{textContent:t._s(e.degree)}}),t._v(" "),a("span",{staticClass:"education-degree-description",domProps:{innerHTML:t._s(e.description)}})])})],2),t._v(" "),a("div",{staticClass:"skills"},[a("h4",{domProps:{textContent:t._s(t.lang.headings.skills)}}),t._v(" "),t._l(t.person.skills,function(e,s){return a("div",{key:s,staticClass:"skills-part"},[a("span",{staticClass:"skill-name"},[a("span",{domProps:{textContent:t._s(e.name)}}),t._v(" "),a("div",{staticClass:"bar"},[a("span",{staticClass:"round deep"}),t._v(" "),a("span",{staticClass:"round",class:{deep:Number(e.level)>=20}}),t._v(" "),a("span",{staticClass:"round",class:{deep:Number(e.level)>=40}}),t._v(" "),a("span",{staticClass:"round",class:{deep:Number(e.level)>=60}}),t._v(" "),a("span",{staticClass:"round",class:{deep:Number(e.level)>=80}})])]),t._v(" "),a("span",{staticClass:"skill-description",domProps:{innerHTML:t._s(e.description)}})])})],2),t._v(" "),a("span",{staticClass:"skill-other",domProps:{innerHTML:t._s(t.person.skillDescription)}})])]),t._v(" "),a("div",{staticClass:"footer"},[t._v("\n          Copyright © 2017 "),a("a",{attrs:{target:"_blank",href:t.person.contact.github}},[t._v("JeasonStudio")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"image"},[a("div",{staticClass:"img"})])])}]}}]),[40]);
//# sourceMappingURL=app.92f75b0901b7782650d4.js.map