/* eslint-disable */
const getLinks = (href, name) => `<a target="_blank" style="text-decoration: blink;color: black; font-size: 18px;" href="${href}"><span style="font-family:\'Source Sans Pro\', sans-serif;">${name}</span> <i class="fa fa-link" aria-hidden="true" /></a>`
export const PERSON = {
  name: {
    first: '赵吉彤'
  },
  position: '前端开发工程师',
  birth: {
    year: 1996,
    location: '河北唐山'
  },
  experience: [{
    company: '阿里巴巴集团 阿里云',
    position: '前端工程师',
    timeperiod: '2018年4月至今',
    description: '官网相关项目开发及团队基础架构建设，包括前端工程化，构建流及组件库的完善'
  }, {
    company: '小米科技有限责任公司',
    position: '软件工程师',
    timeperiod: '2017年6月-2018年4月',
    description: '负责内部运营平台的前后端开发 (React，Redux & Koa@2.x)，对 GraphQL 有着深入实践'
  }],
  projects: [{
    name: getLinks('https://github.com/jeasonstudio/CN-VScode-Docs', 'VSCode 文档翻译'),
    description: '在 GitHub 开源，已有 700+ star，200+ fork'
  }, {
    name: getLinks('https://github.com/jeasonstudio/hulk', 'HulkJS'),
    description: '提供 RESTful API Mock 服务的 Express 中间件'
  }, {
    name: getLinks('https://github.com/jeasonstudio/Juicy', 'Juicy 在位翻译'),
    description: '基于 Electron 的跨平台在位翻译编辑器，支持多人协同，后端由 Python Flask 实现'
  }, {
    name: getLinks('https://github.com/jeasonstudio?utf8=%E2%9C%93&tab=repositories&q=&type=&language=go', 'GoLang 项目'),
    description: '北科大教务系统 API，知乎爬虫，相关图像处理如：高斯模糊，图像单色，边缘检测等'
  }],
  education: [{
      degree: '北京科技大学',
      timeperiod: '2015年9月 - 2019年6月',
      description: '2019 届本科生 计算机科学与技术专业<br />中国大学生计算机设计大赛 国家级一等奖<br />"蓝桥杯" 团体赛 国家级二等奖等'
    }],
  // skill level goes 0 to 100
  skills: [{
      name: 'Front-End',
      level: '90',
      description: '熟练运用 JavaScript 等技术开发前端项目，熟悉前端编译构建流程及工具，熟悉 Less、Sass、Stylus 等 css 预处理工具'
    }, {
      description: '熟悉主流前端框架如 React 等，并了解其设计原理，掌握前端调试，对性能优化、前端工程化有着深入实践，具备良好的代码风格'
    }, {
      name: 'NodeJS',
      level: '60',
      description: '掌握 Express、Koa 的使用，了解 V8 运行机制，有一定的项目实践经验'
    }, {
      name: 'GoLang',
      level: '50',
      description: '掌握 Golang 网络编程，掌握主流数据库的使用，了解微服务设计模式'
    }],
  skillDescription: '深入理解计算机原理、数据结构及算法设计基础、计算机网络相关知识；熟悉 Git 及 Gitflow，熟练使用 Linux，具备全栈开发能力<br />善于交流及逻辑表达，良好的团队合作精神和积极主动的沟通意识；<br />对新技术保持 Geek 探索精神，拥抱开源，热爱生活，热爱运动',
  contact: {
    email: 'me@jeasonstudio.cn',
    phone: '13220101996',
    street: null,
    city: null,
    website: 'https://jeasonstudio.coding.me',
    github: 'https://github.com/jeasonstudio',
    blog: 'https://jeasonstudio.coding.me'
  },
  lang: 'cn' // en, de, fr, pt, cn, it, es, th, pt-br, ru, sv, id, hu
};

export const PERSON_en = {
  name: {
    first: 'Jeason'
  },
  position: 'Software Developer',
  birth: {
    year: 1996,
    location: 'Tangshan, Heibei, China'
  },
  experience: [{
      company: 'Xiaomi Technology Co., Ltd',
      position: 'Software Developer',
      timeperiod: 'since June 2017',
      description: 'Responsible for the front and back ends development of internal operation platform(use React, Koa and Graphql)'
    }, {
      company: 'Zhongbaohui Technology Co., Ltd',
      position: 'Web Developer',
      timeperiod: 'July 2016 - October 2016',
      description: 'Participated in the development of the platform and WeChatAPP of `BeikeCampus` with angularjs@1.x and WeUI.'
    }],
  projects: [{
    name: '<a target="_blank" style="text-decoration: blink;color: black;font-family:\'Source Sans Pro\', sans-serif;" href="https://github.com/jeasonstudio/CN-VScode-Docs"><i class="fa fa-link" aria-hidden="true" /> VSCode Doc translation</a>',
    description: 'Open source in Github with 420+ star, 130+ fork'
  }, {
    name: '<a target="_blank" style="text-decoration: blink;color: black;font-family:\'Source Sans Pro\', sans-serif;" href="https://github.com/jeasonstudio/hulk"><i class="fa fa-link" aria-hidden="true" /> Hulk.js</a>',
    description: 'An Express MiddleWare providing Mock data service for Restful API.'
  }, {
    name: '<a target="_blank" style="text-decoration: blink;color: black;font-family:\'Source Sans Pro\', sans-serif;" href="https://github.com/jeasonstudio/Ripples.wxss"><i class="fa fa-link" aria-hidden="true" /> Ripples.wxss</a>',
    description: 'CSS3 Animation library for WeChatAPP.'
  }, {
    name: '<a target="_blank" style="text-decoration: blink;color: black;font-family:\'Source Sans Pro\', sans-serif;" href="https://github.com/jeasonstudio/iWeAther-APP"><i class="fa fa-link" aria-hidden="true" /> iWeAther-APP</a>',
    description: 'A weather webapp based on VueJS & PWA'
  }, {
    name: '<a target="_blank" style="text-decoration: blink;color: black;font-family:\'Source Sans Pro\', sans-serif;" href="https://github.com/jeasonstudio?utf8=%E2%9C%93&tab=repositories&q=&type=&language=go"><i class="fa fa-link" aria-hidden="true" /> GoLang projects</a>',
    description: 'Development of USTB educational administration system & Zhihu crawler, Simple image processing.'
  }],
  education: [{
      degree: 'University of Science and Technology Beijing',
      timeperiod: 'September 2015 - June 2019',
      description: 'Undergraduate Year 3. Major in computer science<br />Honors: Chinese College Computer Design Competition national first prize; "LanQiao Cup" national second prize, etc.'
    }],
  // skill level goes 0 to 100
  skills: [{
      name: 'HTML5 & CSS3',
      level: '70',
      description: 'Have engineering mode of thinking in front end design. Skilled in flex layout.'
    }, {
      name: 'JavaScript',
      level: '90',
      description: 'Skilled in ES2016+. Familiar with ReactJS. Master the application of Angular and VueJS, and understand the theories behind.'
    }, {
      name: 'Node.js',
      level: '50',
      description: 'Skilled in Express, koa and Unit Testing. Familiar with HTTP protocol. Skilled in MySQL MongoDB.'
    }, {
      name: 'GoLang',
      level: '50',
      description: 'Have experience in GoLang back end development, database middleware, web crawler and Image Processing via GoLang'
    }],
  skillDescription: '<br />Familiar with RestfulAPI and Graphql, knows how to dubug and performance optimization<br />Have basic knowledge of data structure and algorithmic design. Love open source!<br />Familiar with Git, Gitflow and Linux, with full stack development capabilities;<br />I love life, love sports',
  contact: {
    email: 'me@jeasonstudio.cn',
    phone: '13220101996',
    street: null,
    city: null,
    website: '',
    github: 'https://github.com/jeasonstudio'
  },
  lang: 'en' // en, de, fr, pt, cn, it, es, th, pt-br, ru, sv, id, hu
};
