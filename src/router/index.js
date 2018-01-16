import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index/Index'

import Applicant from '../pages/memberDev/Applicant/Index'
import ApplicantDetail from '../pages/memberDev/Applicant/Detail'

import Activist from '../pages/memberDev/Activist/Index'
import ActivistDetail from '../pages/memberDev/Activist/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/MemberDev/Applicant',
      name: 'MDApplicant',
      component: Applicant
    },
    {
      path: '/MemberDev/Applicant/:ID',
      name: 'MemberDevApplicantDetail',
      component: ApplicantDetail
    },
    {
      path: '/MemberDev/Activist',
      name: 'MDActivist',
      component: Activist
    },
    {
      path: '/MemberDev/Activist/:ID',
      name: 'MemberDevActivistDetail',
      component: ActivistDetail
    }
  ]
})
