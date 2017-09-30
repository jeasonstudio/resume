<template>
  <div class="resume" id="concise">
    <div class="row">
      <div class="image">
        <div class="img"></div>
      </div>
    </div>
    <div class="row">
      <span class="name" v-text="person.name.first" />
    </div>
    <div class="row">
      <span
        class="position"
        v-text="person.position"
      />
    </div>
    <div class="row labels">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-JS"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-socialcss3"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-html-copy"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-nodejs"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-git"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vuejs"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-react"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-angular-logo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gopher"></use>
      </svg>
    </div>
    <div class="content">
      <div class="left">
        <div class="experience">
          <h4 v-text="lang.headings.experience" />
          <div
            class="experience-part"
            v-for="(experience, index) in person.experience"
            :key="index"
          >
            <span class="company" v-html="experience.company" />
            <span class="time-period">
              <span class="job-title" v-text="experience.position" />
              &nbsp;&nbsp;&nbsp;
              {{experience.timeperiod}}
            </span>
            <span class="job-description" v-text="experience.description" />
          </div>
        </div>
        <div class="projects">
          <h4 v-text="lang.headings.projects" />
          <div
            class="projects-part"
            v-for="(project, index) in person.projects"
            :key="index"
          >
            <span class="projects-name" v-text="project.name" />
            <span class="projects-description" v-text="project.description" />
          </div>
        </div>
        <div class="contacts">
          <h4 v-text="lang.headings.contact" />
          <span v-if="person.contact.github">
            <a :href="person.contact.github" v-text="person.contact.github" />
            <i class="fa fa-github" aria-hidden="true" />
          </span>
          <span v-if="person.contact.email">
            <a :href="'mailto:'+person.contact.email" v-text="person.contact.email" />
            <i class="fa fa-envelope" aria-hidden="true" />
          </span>
          <span v-if="person.contact.phone">
            <a :href="'tel:'+person.contact.phone" v-text="person.contact.phone" />
            <i class="fa fa-phone" aria-hidden="true" />
          </span>
          <span v-if="person.contact.website">
            <a :href="person.contact.website" v-text="person.contact.website" />
            <i class="fa fa-globe" aria-hidden="true" />
          </span>
        </div>
      </div>
      <div class="right">
        <div class="education">
          <h4 v-text="lang.headings.education" />
          <div
            class="education-part"
            v-for="(education, index) in person.education"
            :key="index"
          >
            <span class="education-degree" v-text="education.degree" />
            <span class="education-degree-description" v-html="education.description" />
          </div>
        </div>
        <div class="skills">
          <h4 v-text="lang.headings.skills" />
          <div
            class="skills-part"
            v-for="(skill, index) in person.skills"
            :key="index"
          >
            <span class="skill-name">
              <span v-text="skill.name" />
              <div class="bar">
                <span class="round deep" />
                <span class="round" :class="{ deep: Number(skill.level) >= 20 }" />
                <span class="round" :class="{ deep: Number(skill.level) >= 40 }" />
                <span class="round" :class="{ deep: Number(skill.level) >= 60 }" />
                <span class="round" :class="{ deep: Number(skill.level) >= 80 }" />
              </div>
            </span>
            <span class="skill-description" v-html="skill.description" />
          </div>
        </div>
        <span class="skill-other" v-html="person.skillDescription" />
      </div>
    </div>
    <div class="footer">
      Copyright &copy; 2017 <a href="https://github.com">JeasonStudio</a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { getVueOptions } from './resumes';
  import '../assets/iconfont';

  let name = 'concise';
  export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#concise {
  font-family:'Source Sans Pro', sans-serif;
  font-size:20px;
  padding-bottom:50px;
  display: flex;
  flex-flow: column nowrap;
  a, a:focus, a:hover, a:visited {
    color:#616161;
  }
  h4 {
    margin-top: 12px;
    margin-bottom: 0;
    border-bottom: 1px solid black;
  }
  span {
    display:inline-block;
  }
  .row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
  .labels {
    margin: 0 auto 10px auto;
    svg {
      margin: 0 2px;
    }
  }
  .image {
    width:130px;
    height:130px;
    margin: 60px auto 20px auto;
    .img {
      width:100%;
      height:100%;
      border-radius:50%;
      background-image:url('../assets/person.jpg');
      background-repeat:none;
      background-position:center;
      background-size:cover;
    }
  }
  .name {
    border-bottom:1px solid black;
    text-transform:uppercase;
    padding:5px 30px;
    margin-bottom:5px;
    font-family:'Open Sans', sans-serif;
    font-size:35px;
    font-weight:600;
    letter-spacing:10px;
  }
  .position {
    text-transform:uppercase;
    font-family:'Open Sans', sans-serif;
    font-size:small;
    color:#757575;
    margin-bottom:10px;
  }
  .content {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    flex-grow: 2;
    .left {
      flex-grow: 1;
      width: 50%;
      padding: 0 15px 0 30px;
      span {
        text-align: right;
      }
      .experience,.projects,.contacts {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        .experience-part,.projects-part {
          display: flex;
          flex-flow: column nowrap;
          align-items: flex-end;
          span.company {
            padding-bottom:3px;
            padding-top:5px;
          }
          span.job-title {
            font-style:italic;
            font-size: smaller;
            font-weight: 300;
          }
          span.projects-name {
            padding-bottom:3px;
            padding-top:5px;
          }
        }
      }
    }
    .right {
      flex-grow: 1;
      width: 50%;
      padding: 0 30px 0 15px;
      .education,.skills {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        .education-part,.skills-part {
          display: flex;
          width: 100%;
          flex-flow: column nowrap;
          align-items: flex-start;
          span.education-degree {
            padding-bottom: 3px;
            padding-top: 5px;
          }
          span.skill-name {
            display: flex;
            width: 100%;
            flex-flow: row nowrap;
            justify-content: space-between;
            line-height: 1.5;
            font-weight: 600;
          }
        }
      }
    }
    span.skill-other,
    .projects-description,
    .skill-description,
    .job-description,
    .education-degree-description,
    .time-period {
      font-size: smaller;
      color:#424242;
    }
  }
  .bar {
    padding-right: 20%;
    display: flex;
    flex-flow: row nowrap;
    .round {
      width: 12px;
      height: 12px;
      margin: auto 2px;
      background-color: #e0e0e0;
      border-radius: 50%;
    }
    .deep {
      background-color: #757575;
    }
  }
  .footer {
    font-size: smaller;
    text-align: center;
    padding: 10px 0 20px 0;
    a {
      text-decoration: none;
      color: black;
    }
  }
  .icon {
    width: 1.1em; height: 1.1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
