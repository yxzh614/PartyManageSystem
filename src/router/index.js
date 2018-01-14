import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index/Index'
import Applicant from '../pages/memberDev/Applicant/Index'
import Detail from '../pages/memberDev/Applicant/Detail'

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
      component: Detail

    }
  ]
})
