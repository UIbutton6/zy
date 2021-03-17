import { axios } from '@/utils/request'

const api = {
  checkSum: '/pc/check/sum',
  checkTask: '/pc/check/taskInfo',
  checkRepair: '/pc/check/repairInfo',

  listoverview: '/pc/checkTask/list',
  detailTask: '/pc/checkTask/queryById',

  listPlan: '/pc/checkPlan/list',
  detailPlan: '/pc/checkPlan/queryById',
  addPlan: '/pc/checkPlan/add',
  editPlan: '/pc/checkPlan/edit',

  listPlan: '/pc/checkPlan/list',
  detailPlan: '/pc/checkPlan/queryById',
}

export function getCheckSum(params) {
  return axios({ params: params, method: 'get', url: api.checkSum })
}
export function getCheckTask(params) {
  return axios({ params: params, method: 'get', url: api.checkTask })
}
export function getCheckRepair(params) {
  return axios({ params: params, method: 'get', url: api.checkRepair })
}

export function getTaskList(params) {
  const { pageNo, pageSize, depart } = params;
  const queryString = `pageNo=${pageNo}&pageSize=${pageSize}`
  debugger
  return axios({
    data: { depart },
    method: 'get',
    url: `${api.listTask}?${queryString}`,
  })
}

export function getTaskDetail(params) {
  return axios({ params: params, method: 'get', url: api.detailTask })
}

export function getPlanList(params) {
  const { pageNo, pageSize, depart } = params;
  const queryString = `pageNo=${pageNo}&pageSize=${pageSize}`
  return axios({
    data: { depart },
    method: 'get',
    url: `${api.listPlan}?${queryString}`,
  })
}

export function getPlanDetail(params) {
  return axios({ params: params, method: 'get', url: api.detailPlan })
}

export function getDetail(params) {
  return axios({ params: params, method: 'get', url: api.detailPlan })
}

export function addOrEditIP(params) {
  const id = params.id || undefined;
  const reqData = { data: params,  method: 'POST', url: api.addPlan };
  id && Object.assign(reqData, { method: 'PUT',  url: api.editPlan })
  return axios(reqData);
}

export function getUsers() {
  return axios({ data: {}, method: 'get', url: api.users });
}

export function addUser(params) {
  return axios({ data: params, method: 'post', url: api.addUser });
}

export function delUser({id}) {
  return axios({ data: {}, method: 'get', url: `${api.delUser}/${id}` });
}

export function editUser(params) {
  return axios({data: params, method: 'put', url: api.editUser });
}

export function resetpwd({id}) {
  return axios({ data: {}, method: 'get', url: `${api.resetpwd}/${id}` });
}