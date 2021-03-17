import { axios } from '@/utils/request'
import { assignIn } from 'lodash';

const api = {
  users: '/sys/userPt/list',
  addUser: '/sys/userPt/add',
  editUser: '/sys/user/edit',
  delUser: 'sys/userPt/delete',
  resetpwd: '/sys/userPt/reset',
  addPM: 'sys/sysDepartPt/add',
  editPM: '/sys/sysDepartPt/edit',
  delPM: '/sys/sysDepartPt/delete',
  projects: 'sys/sysDepartPt/list',
  checkUsername: 'sys/user/checkUsername',
  resetPMpwd: '/sys/sysDepartPt/restDepartPass',
}

export function getProjects(params) {
  const { pageNo, pageSize, depart } = params;
  const queryString = `pageNo=${pageNo}&pageSize=${pageSize}`
  return axios({
    data: { depart },
    method: 'post',
    url: `${api.projects}?${queryString}`,
  })
}

export function addOrEditPM(params) {
  const id = params.id || undefined;
  const reqData = { data: params,  method: 'POST', url: api.addPM };
  id && Object.assign(reqData, { method: 'PUT',  url: api.editPM })
  return axios(reqData);
}

export function delPM(params) {
  return axios({ params, method: 'DELETE', url: api.delPM })
}

export function resetPMpwd(params) {
  return axios({ params, method: 'get', url: api.resetPMpwd })
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

export function usernameCheck(params) {
  return axios({ params: params, method: 'get', url: api.checkUsername })
}