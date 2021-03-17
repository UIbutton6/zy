const menus = [
  {
    "redirect": null,
    "path": "/dashboard/analysis",
    "component": "dashboard/Analysis",
    "route": "1",
    "meta": {
      "keepAlive": true,
      "internalOrExternal": false,
      "icon": "home",
      "componentName": "Analysis",
      "title": "首页"
    },
    "name": "dashboard-analysis",
    "id": "9502685863ab87f0ad1134142788a385"
  },
  {
    "redirect": null,
    "path": "/pro",
    "component": "layouts/RouteView",
    "route": "1",
    "meta": {
      "icon": "cloud",
      "title": "项目管理"
    }
  },
  {
    "redirect": null,
    "path": "/procs",
    "component": "layouts/RouteView",
    "route": "1",
    "meta": {
      "icon": "user",
      "title": "用户管理"
    }
  },
  {
    "redirect": null,
    "path": "/process",
    "component": "layouts/RouteView",
    "route": "1",
    "meta": {
      "icon": "message",
      "title": "留言管理"
    }
  },
  // {
  //   "redirect": null,
  //   "path": "/process",
  //   "component": "layouts/RouteView",
  //   "route": "1",
  //   "children": [
  //     {
  //       "path": "/process/ExtActProcessList",
  //       "component": "modules/extbpm/process/ExtActProcessList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": true,
  //         "internalOrExternal": false,
  //         "componentName": "ExtActProcessList",
  //         "title": "流程设计"
  //       },
  //       "name": "process-ExtActProcessList",
  //       "id": "f9d3f4f27653a71c52faa9fb8070fbe7"
  //     },
  //     {
  //       "path": "/process/ExtActListenerList",
  //       "component": "modules/extbpm/process/ExtActListenerList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "ExtActListenerList",
  //         "title": "流程监听"
  //       },
  //       "name": "process-ExtActListenerList",
  //       "id": "765dd244f37b804e3d00f475fd56149b"
  //     },
  //     {
  //       "path": "/process/ExtActExpressionList",
  //       "component": "modules/extbpm/process/ExtActExpressionList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "ExtActExpressionList",
  //         "title": "流程表达式"
  //       },
  //       "name": "process-ExtActExpressionList",
  //       "id": "732d48f8e0abe99fe6a23d18a3171cd1"
  //     }
  //   ],
  //   "meta": {
  //     "keepAlive": false,
  //     "internalOrExternal": false,
  //     "icon": "cluster",
  //     "componentName": "RouteView",
  //     "title": "流程设计"
  //   },
  //   "name": "process",
  //   "id": "63b551e81c5956d5c861593d366d8c57"
  // },
  // {
  //   "redirect": "2",
  //   "path": "/desform",
  //   "component": "layouts/RouteView",
  //   "route": "1",
  //   "children": [
  //     {
  //       "path": "/online/desform",
  //       "component": "modules/online/desform/DesignFormList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": true,
  //         "internalOrExternal": false,
  //         "componentName": "DesignFormList",
  //         "title": "表单设计器"
  //       },
  //       "name": "online-desform",
  //       "id": "c3b050978256957869d860d066bf4049"
  //     },
  //     {
  //       "path": "/online/desformTemplate",
  //       "component": "modules/online/desform/DesignFormTempletList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "DesignFormTempletList",
  //         "title": "表单设计器模板"
  //       },
  //       "name": "online-desformTemplate",
  //       "id": "96dfaf38ff6625dd7ffc57e2b6b53f51"
  //     }
  //   ],
  //   "meta": {
  //     "keepAlive": false,
  //     "internalOrExternal": false,
  //     "icon": "gold",
  //     "componentName": "RouteView",
  //     "title": "表单设计"
  //   },
  //   "name": "desform",
  //   "id": "98ab93226c45e39dc2bc9aa67b377183"
  // },
  // {
  //   "redirect": null,
  //   "path": "/jmreport",
  //   "component": "layouts/RouteView",
  //   "route": "1",
  //   "children": [
  //     {
  //       "path": "23f3f29d35e5d73ecd8efc0133fd6545",
  //       "component": "layouts/IframePageView",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": true,
  //         "componentName": "IframePageView",
  //         "title": "大屏设计[NEW]",
  //         "url": "{{ window._CONFIG['domianURL'] }}/bigscreen/#?token=${token}"
  //       },
  //       "name": "{{ window._CONFIG['domianURL'] }}-bigscreen-#?token=${token}",
  //       "id": "1267412134208319489"
  //     },
  //     {
  //       "path": "42954cf4d77c812abef134e46c67a69d",
  //       "component": "layouts/IframePageView",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": true,
  //         "componentName": "IframePageView",
  //         "title": "报表设计器[NEW]",
  //         "url": "{{ window._CONFIG['domianURL'] }}/design/report/list?token=${token}"
  //       },
  //       "name": "{{ window._CONFIG['domianURL'] }}-design-report-list?token=${token}",
  //       "id": "1209746778901028865"
  //     },
  //     {
  //       "path": "8f2a8995070aed417df718fbd267617b",
  //       "component": "layouts/IframePageView",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "IframePageView",
  //         "title": "报表设计模板",
  //         "url": "{{ window._CONFIG['domianURL'] }}/design/report/demo"
  //       },
  //       "name": "{{ window._CONFIG['domianURL'] }}-design-report-demo",
  //       "id": "1213837343473086466"
  //     },
  //     {
  //       "path": "b5323bdac50f5bc855be3cf9c24f888a",
  //       "component": "layouts/IframePageView",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "IframePageView",
  //         "title": "智慧物流监控大屏",
  //         "url": "{{ window._CONFIG['domianURL'] }}/test/bigScreen/templat/index2"
  //       },
  //       "name": "{{ window._CONFIG['domianURL'] }}-test-bigScreen-templat-index2",
  //       "id": "1205306106780364802"
  //     },
  //     {
  //       "path": "21e7299f9fbd4a2fa54cedb9d4c8e49f",
  //       "component": "layouts/IframePageView",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": true,
  //         "componentName": "IframePageView",
  //         "title": "生产销售监控大屏",
  //         "url": "{{ window._CONFIG['domianURL'] }}/test/bigScreen/templat/index1"
  //       },
  //       "name": "{{ window._CONFIG['domianURL'] }}-test-bigScreen-templat-index1",
  //       "id": "1205098241075453953"
  //     }
  //   ],
  //   "meta": {
  //     "keepAlive": false,
  //     "internalOrExternal": false,
  //     "icon": "area-chart",
  //     "componentName": "RouteView",
  //     "title": "报表设计"
  //   },
  //   "name": "jmreport",
  //   "id": "1205097455226462210"
  // },
  // {
  //   "redirect": null,
  //   "path": "/online",
  //   "component": "layouts/RouteView",
  //   "route": "1",
  //   "children": [
  //     {
  //       "path": "/online/cgform",
  //       "component": "modules/online/cgform/OnlCgformHeadList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": true,
  //         "internalOrExternal": false,
  //         "componentName": "OnlCgformHeadList",
  //         "title": "Online表单开发[更新]"
  //       },
  //       "name": "online-cgform",
  //       "id": "8d4683aacaa997ab86b966b464360338"
  //     },
  //     {
  //       "path": "/online/cgreport",
  //       "component": "modules/online/cgreport/OnlCgreportHeadList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": true,
  //         "internalOrExternal": false,
  //         "componentName": "OnlCgreportHeadList",
  //         "title": "Online报表配置"
  //       },
  //       "name": "online-cgreport",
  //       "id": "109c78a583d4693ce2f16551b7786786"
  //     },
  //     {
  //       "path": "/online/graphreport",
  //       "component": "modules/online/graphreport/OnlGraphreportHeadList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlGraphreportHeadList",
  //         "title": "Online图表配置"
  //       },
  //       "name": "online-graphreport",
  //       "id": "7d08d3885671cf0ff1c4fe5d82fcd0e2"
  //     },
  //     {
  //       "path": "/online/graphreport/templet",
  //       "component": "modules/online/graphreport/OnlGraphreportTempletList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlGraphreportTempletList",
  //         "title": "Online组合报表"
  //       },
  //       "name": "online-graphreport-templet",
  //       "id": "6242fb02030e9778973390766a5791a7"
  //     },
  //     {
  //       "path": "/isystem/fillRule",
  //       "component": "system/SysFillRuleList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "SysFillRuleList",
  //         "title": "系统编码生成规则"
  //       },
  //       "name": "isystem-fillRule",
  //       "id": "1192318987661234177"
  //     },
  //     {
  //       "path": "/isystem/checkRule",
  //       "component": "system/SysCheckRuleList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "SysCheckRuleList",
  //         "title": "系统编码校验规则"
  //       },
  //       "name": "isystem-checkRule",
  //       "id": "1224641973866467330"
  //     },
  //     {
  //       "path": "/online/cgformButton/:code",
  //       "component": "modules/online/cgform/button/OnlCgformButtonList",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlCgformButtonList",
  //         "title": "自定义按钮"
  //       },
  //       "name": "online-cgformButton-@code",
  //       "id": "0bbf8639ce155779594f2a9948978f10"
  //     },
  //     {
  //       "path": "/online/df/:table/:id",
  //       "component": "modules/online/cgform/auto/OnlineDynamicForm",
  //       "route": "0",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlineDynamicForm",
  //         "title": "AUTO动态表单"
  //       },
  //       "name": "online-df-@table-@id",
  //       "id": "22d6a3d39a59dd7ea9a30acfa6bfb0a5"
  //     },
  //     {
  //       "path": "/online/cgformList/:code",
  //       "component": "modules/online/cgform/auto/OnlCgformAutoList",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlCgformAutoList",
  //         "title": "AUTO在线表单"
  //       },
  //       "name": "online-cgformList-@code",
  //       "id": "54097c6a3cf50fad0793a34beff1efdf"
  //     },
  //     {
  //       "path": "/online/cgformTreeList/:code",
  //       "component": "modules/online/cgform/auto/OnlCgformTreeList",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlCgformTreeList",
  //         "title": "AUTO树表单列表"
  //       },
  //       "name": "online-cgformTreeList-@code",
  //       "id": "fba41089766888023411a978d13c0aa4"
  //     },
  //     {
  //       "path": "/online/graphreport/chart/:code",
  //       "component": "modules/online/graphreport/auto/OnlGraphreportAutoChart",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlGraphreportAutoChart",
  //         "title": "AUTO在线图表"
  //       },
  //       "name": "online-graphreport-chart-@code",
  //       "id": "abb2641990431ea1d4b638e16933fbb5"
  //     },
  //     {
  //       "path": "/online/cgformErpList/:code",
  //       "component": "modules/online/cgform/auto/erp/OnlCgformErpList",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlCgformErpList",
  //         "title": "AUTO在线表单ERP"
  //       },
  //       "name": "online-cgformErpList-@code",
  //       "id": "1229674163694841857"
  //     },
  //     {
  //       "path": "/online/dfview/:table/:id",
  //       "component": "modules/online/cgform/auto/OnlineDynamicViewForm",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlineDynamicViewForm",
  //         "title": "AUTO表单详情页"
  //       },
  //       "name": "online-dfview-@table-@id",
  //       "id": "6c6a033650e64a14543a8a401d790093"
  //     },
  //     {
  //       "path": "/online/cgreport/:code",
  //       "component": "modules/online/cgreport/auto/OnlCgreportAutoList",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "onlineAutoList",
  //         "title": "AUTO在线报表"
  //       },
  //       "name": "onlineAutoList",
  //       "id": "9fe26464838de2ea5e90f2367e35efa0"
  //     },
  //     {
  //       "path": "/online/graphreport/templet/:code",
  //       "component": "modules/online/graphreport/auto/OnlGraphreportTempletAutoChart",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlGraphreportTempletAutoChart",
  //         "title": "AUTO多数据源图表"
  //       },
  //       "name": "online-graphreport-templet-@code",
  //       "id": "6523422a6c69a62d48dacf90932e5302"
  //     },
  //     {
  //       "path": "/online/copyform/:code",
  //       "component": "modules/online/cgform/OnlCgformCopyList",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlCgformCopyList",
  //         "title": "ONLINE视图管理"
  //       },
  //       "name": "online-copyform-@code",
  //       "id": "f2849d3814fc97993bfc519ae6bbf049"
  //     },
  //     {
  //       "path": "/online/desform/view/:desformId",
  //       "component": "modules/online/desform/PreviewDesform",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "PreviewDesform",
  //         "title": "AUTO设计表单浏览"
  //       },
  //       "name": "online-desform-view-@desformId",
  //       "id": "f842bc13739eccaba52e01105ce40055"
  //     },
  //     {
  //       "path": "/online/desform/list/:code",
  //       "component": "modules/online/desform/auto/AutoDesignDataListTable",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "AutoDesignDataListTable",
  //         "title": "AUTO设计表单列表"
  //       },
  //       "name": "online-desform-list-@code",
  //       "id": "a8ee330fb0cb867340101717e54998b5"
  //     },
  //     {
  //       "path": "/online/cgformInnerTableList/:code",
  //       "component": "modules/online/cgform/auto/innerTable/OnlCgformInnerTableList",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlCgformInnerTableList",
  //         "title": "AUTO在线内嵌子表"
  //       },
  //       "name": "online-cgformInnerTableList-@code",
  //       "id": "1235823781053313025"
  //     }
  //   ],
  //   "meta": {
  //     "keepAlive": false,
  //     "internalOrExternal": false,
  //     "icon": "cloud",
  //     "componentName": "RouteView",
  //     "title": "在线开发"
  //   },
  //   "name": "online",
  //   "id": "e41b69c57a941a3bbcce45032fe57605"
  // },
  // {
  //   "redirect": null,
  //   "path": "/task",
  //   "component": "layouts/RouteView",
  //   "route": "1",
  //   "children": [
  //     {
  //       "path": "/bpm/task/MyTaskList",
  //       "component": "modules/bpm/task/MyTaskList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "MyTaskList",
  //         "title": "我的任务"
  //       },
  //       "name": "bpm-task-MyTaskList",
  //       "id": "1939e035e803a99ceecb6f5563570fb2"
  //     },
  //     {
  //       "path": "/bpm/task/MyApplyProcessList",
  //       "component": "modules/bpm/task/MyApplyProcessList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "MyApplyProcessList",
  //         "title": "我发起流程"
  //       },
  //       "name": "bpm-task-MyApplyProcessList",
  //       "id": "abd50036ff42f0a9943ace7eb63c63b6"
  //     },
  //     {
  //       "path": "/bpm/task/MyCcHisProcessList",
  //       "component": "modules/bpm/task/MyCcHisProcessList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "MyCcHisProcessList",
  //         "title": "我的抄送"
  //       },
  //       "name": "bpm-task-MyCcHisProcessList",
  //       "id": "e4335a37647952a691fd609ee6f92168"
  //     }
  //   ],
  //   "meta": {
  //     "keepAlive": false,
  //     "internalOrExternal": false,
  //     "icon": "share-alt",
  //     "componentName": "RouteView",
  //     "title": "个人办公"
  //   },
  //   "name": "task",
  //   "id": "baf16b7174bd821b6bab23fa9abb200d"
  // },
  // {
  //   "redirect": null,
  //   "path": "/biz",
  //   "component": "layouts/RouteView",
  //   "route": "1",
  //   "children": [
  //     {
  //       "path": "/joa/JoaLoanList",
  //       "component": "modules/extbpm/joa/JoaLoanList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "JoaLoanList",
  //         "title": "借款申请"
  //       },
  //       "name": "joa-JoaLoanList",
  //       "id": "3be6ff6704723141960ea0f397a18727"
  //     },
  //     {
  //       "path": "/joa/JoaEmployeeLeaveList",
  //       "component": "modules/extbpm/joa/JoaEmployeeLeaveList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "JoaEmployeeLeaveList",
  //         "title": "请假申请"
  //       },
  //       "name": "joa-JoaEmployeeLeaveList",
  //       "id": "8200f83bcfa7b44190f4c15d805b3bf8"
  //     },
  //     {
  //       "path": "/joa/JoaBusinesStripList",
  //       "component": "modules/extbpm/joa/JoaBusinesStripList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "JoaBusinesStripList",
  //         "title": "出差申请"
  //       },
  //       "name": "joa-JoaBusinesStripList",
  //       "id": "3b45e691929312bdc23047b25483ba77"
  //     },
  //     {
  //       "path": "/joa/JoaDocSendingList",
  //       "component": "modules/extbpm/joa/JoaDocSendingList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "JoaDocSendingList",
  //         "title": "公文发文"
  //       },
  //       "name": "joa-JoaDocSendingList",
  //       "id": "7654fd49b2e86a2db8139552a2f8e670"
  //     },
  //     {
  //       "path": "/joa/JoaEmployeeLeaveListBiz",
  //       "component": "modules/extbpm/joa/JoaEmployeeLeaveListBiz",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "JoaEmployeeLeaveListBiz",
  //         "title": "请假审批(自定义)"
  //       },
  //       "name": "joa-JoaEmployeeLeaveListBiz",
  //       "id": "1227871604541870082"
  //     },
  //     {
  //       "path": "/biz/ExtBizLeaveList",
  //       "component": "modules/extbpm/biz/ExtBizLeaveList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "ExtBizLeaveList",
  //         "title": "批量申请(自定义)"
  //       },
  //       "name": "biz-ExtBizLeaveList",
  //       "id": "56ca78fe0f22d815fabc793461af67b8"
  //     },
  //     {
  //       "path": "/online/cgformList/7030311f69f04748831699b626ba572e",
  //       "component": "modules/online/cgform/auto/OnlCgformAutoList",
  //       "route": "0",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlCgformAutoList",
  //         "title": "Online会签子流程"
  //       },
  //       "name": "online-cgformList-7030311f69f04748831699b626ba572e",
  //       "id": "1216908703069999106"
  //     },
  //     {
  //       "path": "/online/cgformList/402860816aa5921f016aa5921f480000",
  //       "component": "modules/online/cgform/auto/OnlCgformAutoList",
  //       "route": "0",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "OnlCgformAutoList",
  //         "title": "Online请假单"
  //       },
  //       "name": "online-cgformList-402860816aa5921f016aa5921f480000",
  //       "id": "1241696693075959809"
  //     }
  //   ],
  //   "meta": {
  //     "keepAlive": false,
  //     "internalOrExternal": false,
  //     "icon": "cluster",
  //     "componentName": "RouteView",
  //     "title": "业务办理"
  //   },
  //   "name": "biz",
  //   "id": "edfa74d66e8ea63ea432c2910837b150"
  // },
  // {
  //   "redirect": null,
  //   "path": "/oa",
  //   "component": "layouts/RouteView",
  //   "route": "1",
  //   "children": [
  //     {
  //       "path": "/extbpm/process/BpmAutoDesformApply",
  //       "component": "modules/extbpm/process/BpmAutoDesformApply",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": true,
  //         "internalOrExternal": false,
  //         "componentName": "BpmAutoDesformApply",
  //         "title": "工单申请"
  //       },
  //       "name": "extbpm-process-BpmAutoDesformApply",
  //       "id": "cab5a60d58871cff3d5858e4d2580a26"
  //     },
  //     {
  //       "path": "/extbpm/process/ExtActDesignFlowDataList",
  //       "component": "modules/extbpm/process/ExtActDesignFlowDataList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "ExtActDesignFlowDataList",
  //         "title": "我的工单"
  //       },
  //       "name": "extbpm-process-ExtActDesignFlowDataList",
  //       "id": "bae8992dc6f39b1736d65ef251fa68c2"
  //     },
  //     {
  //       "path": "/extbpm/process/BpmAutoDesformApplyMore",
  //       "component": "modules/extbpm/process/BpmAutoDesformApplyMore",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "BpmAutoDesformApplyMore",
  //         "title": "工单查看更多"
  //       },
  //       "name": "extbpm-process-BpmAutoDesformApplyMore",
  //       "id": "2ea33825c6b365607b9ff04f3362bdda"
  //     },
  //     {
  //       "path": "/online/desform/auto/AutoDesignDataQuery",
  //       "component": "modules/online/desform/auto/AutoDesignDataQuery",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "AutoDesignDataQuery",
  //         "title": "工单查询"
  //       },
  //       "name": "online-desform-auto-AutoDesignDataQuery",
  //       "id": "1215097609505517569"
  //     }
  //   ],
  //   "meta": {
  //     "keepAlive": false,
  //     "internalOrExternal": false,
  //     "icon": "alert",
  //     "componentName": "RouteView",
  //     "title": "OA办公"
  //   },
  //   "name": "oa",
  //   "id": "09e7db25b4555332333f83afdadc7897"
  // },
  // {
  //   "redirect": null,
  //   "path": "/eoa",
  //   "component": "layouts/RouteView",
  //   "route": "1",
  //   "children": [
  //     {
  //       "path": "/modules/eoa/cmsbpm/EoaCmsProcessPortal",
  //       "component": "modules/eoa/cmsbpm/EoaCmsProcessPortal",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "EoaCmsProcessPortal",
  //         "title": "流程门户"
  //       },
  //       "name": "modules-eoa-cmsbpm-EoaCmsProcessPortal",
  //       "id": "1235483978132119553"
  //     },
  //     {
  //       "path": "/eoa/cmsoa/EoaCmsEnterprisePortal",
  //       "component": "modules/eoa/cmsoa/EoaCmsEnterprisePortal",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "EoaCmsEnterprisePortal",
  //         "title": "企业门户"
  //       },
  //       "name": "eoa-cmsoa-EoaCmsEnterprisePortal",
  //       "id": "1234735670388441089"
  //     },
  //     {
  //       "path": "/isystem/addressList",
  //       "component": "system/AddressList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "AddressList",
  //         "title": "通讯录"
  //       },
  //       "name": "isystem-addressList",
  //       "id": "1174590283938041857"
  //     },
  //     {
  //       "path": "/modules/eoa/email/EoaCmsEmailList",
  //       "component": "modules/eoa/email/EoaCmsEmailList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "EoaCmsEmailList",
  //         "title": "我的邮箱"
  //       },
  //       "name": "modules-eoa-email-EoaCmsEmailList",
  //       "id": "1176103166991773698"
  //     },
  //     {
  //       "path": "/modules/eoa/filemanage",
  //       "component": "layouts/RouteView",
  //       "route": "1",
  //       "children": [
  //         {
  //           "path": "/modules/eoa/filemanage/eoaFileInit",
  //           "component": "modules/eoa/filemanage/EoaFileInit",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaFileInit",
  //             "title": "文档管理"
  //           },
  //           "name": "modules-eoa-filemanage-eoaFileInit",
  //           "id": "1174291880345526274"
  //         },
  //         {
  //           "path": "/modules/eoa/filemanage/eoaFileView",
  //           "component": "modules/eoa/filemanage/EoaFileView",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaFileView",
  //             "title": "文档查看"
  //           },
  //           "name": "modules-eoa-filemanage-eoaFileView",
  //           "id": "1176852999002075137"
  //         }
  //       ],
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "RouteView",
  //         "title": "我的文档"
  //       },
  //       "name": "modules-eoa-filemanage",
  //       "id": "1247704541530546178"
  //     },
  //     {
  //       "path": "/eoa/plan/menu",
  //       "component": "layouts/RouteView",
  //       "route": "1",
  //       "children": [
  //         {
  //           "path": "/eoa/plan",
  //           "component": "modules/eoa/plan/EoaPlanView",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaPlanView",
  //             "title": "日程计划"
  //           },
  //           "name": "eoa-plan",
  //           "id": "11760312221121525513"
  //         },
  //         {
  //           "path": "/eoa/planList",
  //           "component": "modules/eoa/plan/EoaPlanList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaPlanList",
  //             "title": "日程计划列表"
  //           },
  //           "name": "eoa-planList",
  //           "id": "1176031222112026625"
  //         }
  //       ],
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "RouteView",
  //         "title": "我的计划"
  //       },
  //       "name": "eoa-plan-menu",
  //       "id": "1247705246731460610"
  //     },
  //     {
  //       "path": "/eoa/metting",
  //       "component": "layouts/RouteView",
  //       "route": "1",
  //       "children": [
  //         {
  //           "path": "/metting/eoaMettingList",
  //           "component": "modules/eoa/metting/EoaMettingList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaMettingList",
  //             "title": "会议管理"
  //           },
  //           "name": "metting-eoaMettingList",
  //           "id": "1242274973658173441"
  //         },
  //         {
  //           "path": "/metting/EoaMettingRoomUse",
  //           "component": "modules/eoa/metting/EoaMettingRoomUse",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaMettingRoomUse",
  //             "title": "会议室使用情况"
  //           },
  //           "name": "metting-EoaMettingRoomUse",
  //           "id": "1242640213038112769"
  //         },
  //         {
  //           "path": "/metting/eoaMettingRoomList",
  //           "component": "modules/eoa/metting/EoaMettingRoomList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaMettingRoomList",
  //             "title": "会议室"
  //           },
  //           "name": "metting-eoaMettingRoomList",
  //           "id": "1241962019083567106"
  //         },
  //         {
  //           "path": "/metting/eoaMettingPreview",
  //           "component": "modules/eoa/metting/modules/EoaMettingPreview",
  //           "route": "1",
  //           "hidden": true,
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaMettingPreview",
  //             "title": "预览"
  //           },
  //           "name": "metting-eoaMettingPreview",
  //           "id": "1244162795109400578"
  //         }
  //       ],
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "RouteView",
  //         "title": "会议管理"
  //       },
  //       "name": "eoa-metting",
  //       "id": "1244279838241562625"
  //     },
  //     {
  //       "path": "/modules/eoa/sign",
  //       "component": "layouts/RouteView",
  //       "route": "1",
  //       "children": [
  //         {
  //           "path": "/modules/eoa/sign/OaSignInfoList",
  //           "component": "modules/eoa/sign/OaSignInfoList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaSignInfoList",
  //             "title": "打卡"
  //           },
  //           "name": "modules-eoa-sign-OaSignInfoList",
  //           "id": "1194586555705049089"
  //         },
  //         {
  //           "path": "/modules/eoa/sign/OaSignPatchList",
  //           "component": "modules/eoa/sign/OaSignPatchList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaSignPatchList",
  //             "title": "补卡"
  //           },
  //           "name": "modules-eoa-sign-OaSignPatchList",
  //           "id": "1194587923132039170"
  //         },
  //         {
  //           "path": "/modules/eoa/sign/OaSignOutList",
  //           "component": "modules/eoa/sign/OaSignOutList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaSignOutList",
  //             "title": "外勤"
  //           },
  //           "name": "modules-eoa-sign-OaSignOutList",
  //           "id": "1194588524918194178"
  //         },
  //         {
  //           "path": "/modules/eoa/sign/OaSignRuleSetting",
  //           "component": "modules/eoa/sign/OaSignRuleSetting",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaSignRuleSetting",
  //             "title": "考勤规则"
  //           },
  //           "name": "modules-eoa-sign-OaSignRuleSetting",
  //           "id": "1194944096041451521"
  //         },
  //         {
  //           "path": "/modules/eoa/sign/OaSignStatistics",
  //           "component": "modules/eoa/sign/OaSignStatistics",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaSignStatistics",
  //             "title": "考勤统计"
  //           },
  //           "name": "modules-eoa-sign-OaSignStatistics",
  //           "id": "1197125991571480578"
  //         }
  //       ],
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "icon": "schedule",
  //         "componentName": "RouteView",
  //         "title": "考勤管理"
  //       },
  //       "name": "modules-eoa-sign",
  //       "id": "1194585809408344066"
  //     },
  //     {
  //       "path": "/eoa/cms",
  //       "component": "layouts/RouteView",
  //       "route": "1",
  //       "children": [
  //         {
  //           "path": "/modules/eoa/cms/modules/eoaCmsArticleDetailModal",
  //           "component": "modules/eoa/cms/modules/EoaCmsArticleDetailModal",
  //           "route": "1",
  //           "hidden": true,
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": true,
  //             "componentName": "EoaCmsArticleDetailModal",
  //             "title": "文章详情"
  //           },
  //           "name": "modules-eoa-cms-modules-eoaCmsArticleDetailModal",
  //           "id": "1235766252878712834"
  //         },
  //         {
  //           "path": "/modules/eoa/cms/eoaCmsArticlePortal",
  //           "component": "modules/eoa/cms/EoaCmsArticlePortal",
  //           "route": "1",
  //           "hidden": true,
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": true,
  //             "componentName": "EoaCmsArticlePortal",
  //             "title": "文章列表"
  //           },
  //           "name": "modules-eoa-cms-eoaCmsArticlePortal",
  //           "id": "1235167949069754369"
  //         },
  //         {
  //           "path": "/eoa/cms/EoaCmsMenuList",
  //           "component": "modules/eoa/cms/EoaCmsMenuList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaCmsMenuList",
  //             "title": "文章栏目"
  //           },
  //           "name": "eoa-cms-EoaCmsMenuList",
  //           "id": "1174628954015903745"
  //         },
  //         {
  //           "path": "/eoa/cms/EoaCmsArticleList",
  //           "component": "modules/eoa/cms/EoaCmsArticleList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaCmsArticleList",
  //             "title": "文章管理"
  //           },
  //           "name": "eoa-cms-EoaCmsArticleList",
  //           "id": "1174629137172770818"
  //         },
  //         {
  //           "path": "/eoa/cms/EoaCmsSiteList",
  //           "component": "modules/eoa/cms/EoaCmsSiteList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "EoaCmsSiteList",
  //             "title": "站点管理"
  //           },
  //           "name": "eoa-cms-EoaCmsSiteList",
  //           "id": "1231868225743073281"
  //         }
  //       ],
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "RouteView",
  //         "title": "CMS官网"
  //       },
  //       "name": "eoa-cms",
  //       "id": "1244281754195435522"
  //     }
  //   ],
  //   "meta": {
  //     "keepAlive": false,
  //     "internalOrExternal": false,
  //     "icon": "qrcode",
  //     "componentName": "RouteView",
  //     "title": "OA模块"
  //   },
  //   "name": "eoa",
  //   "id": "1174628684611563521"
  // },
  // {
  //   "redirect": null,
  //   "path": "/bpm",
  //   "component": "layouts/RouteView",
  //   "route": "1",
  //   "children": [
  //     {
  //       "path": "/modules/bpm/ProcessInstanceList",
  //       "component": "modules/bpm/ProcessInstanceList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "ProcessInstanceList",
  //         "title": "流程实例"
  //       },
  //       "name": "modules-bpm-ProcessInstanceList",
  //       "id": "a4fc7b64b01a224da066bb16230f9c5a"
  //     },
  //     {
  //       "path": "/bpm/task/HisTaskList",
  //       "component": "modules/bpm/task/HisTaskList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "HisTaskList",
  //         "title": "历史任务"
  //       },
  //       "name": "bpm-task-HisTaskList",
  //       "id": "de89c46e0acb9687e1133d44d45b3491"
  //     },
  //     {
  //       "path": "/bpm/task/HisProcessList",
  //       "component": "modules/bpm/task/HisProcessList",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "HisProcessList",
  //         "title": "历史流程"
  //       },
  //       "name": "bpm-task-HisProcessList",
  //       "id": "191e453f3de11d56cd376679958bcea2"
  //     }
  //   ],
  //   "meta": {
  //     "keepAlive": false,
  //     "internalOrExternal": false,
  //     "icon": "cluster",
  //     "componentName": "RouteView",
  //     "title": "流程管理"
  //   },
  //   "name": "bpm",
  //   "id": "a44c30db536349e91106223957e684eb"
  // },
  // {
  //   "redirect": null,
  //   "path": "/wps",
  //   "component": "layouts/RouteView",
  //   "route": "1",
  //   "children": [
  //     {
  //       "path": "/modules/eoa/wps/viewFile",
  //       "component": "modules/eoa/wps/viewFile",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "viewFile",
  //         "title": "wps文件预览"
  //       },
  //       "name": "modules-eoa-wps-viewFile",
  //       "id": "1270645595521994754"
  //     },
  //     {
  //       "path": "/officialConfig",
  //       "component": "layouts/RouteView",
  //       "route": "1",
  //       "children": [
  //         {
  //           "path": "/modules/eoa/officialdoc/OaWpsFileList",
  //           "component": "modules/eoa/officialdoc/OaWpsFileList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaWpsFileList",
  //             "title": "模板管理"
  //           },
  //           "name": "modules-eoa-officialdoc-OaWpsFileList",
  //           "id": "1273541710077956097"
  //         },
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocOrgancodeList",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocOrgancodeList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocOrgancodeList",
  //             "title": "机关待字设置"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocOrgancodeList",
  //           "id": "1272354095425323009"
  //         },
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocDepartUserList",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocDepartUserList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocDepartUserList",
  //             "title": "分发人员"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocDepartUserList",
  //           "id": "1279967233381253122"
  //         }
  //       ],
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "RouteView",
  //         "title": "配置管理"
  //       },
  //       "name": "officialConfig",
  //       "id": "1278163544043687938"
  //     },
  //     {
  //       "path": "/modules/eoa/wps/createFile",
  //       "component": "modules/eoa/wps/createFile",
  //       "route": "1",
  //       "hidden": true,
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "createFile",
  //         "title": "创建文件"
  //       },
  //       "name": "modules-eoa-wps-createFile",
  //       "id": "1270654343367938049"
  //     },
  //     {
  //       "path": "/modules/eoa/wps/webFile",
  //       "component": "modules/eoa/wps/webFile",
  //       "route": "1",
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "webFile",
  //         "title": "wps文件"
  //       },
  //       "name": "modules-eoa-wps-webFile",
  //       "id": "1270645422053969921"
  //     },
  //     {
  //       "path": "/officialIssued",
  //       "component": "layouts/RouteView",
  //       "route": "1",
  //       "children": [
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocIssuedList",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocIssuedList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocIssuedList",
  //             "title": "发文列表"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocIssuedList",
  //           "id": "1272766393910472706"
  //         },
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocDraftList",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocDraftList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocDraftList",
  //             "title": "发文草稿箱"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocDraftList",
  //           "id": "1272864414304280577"
  //         },
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocIssuedHandle",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocIssuedHandle",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocIssuedHandle",
  //             "title": "发文经办文件查询"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocIssuedHandle",
  //           "id": "1277788399483584514"
  //         },
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocIssuedStatistics",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocIssuedStatistics",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocIssuedStatistics",
  //             "title": "发文统计"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocIssuedStatistics",
  //           "id": "1277888589167075330"
  //         }
  //       ],
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "RouteView",
  //         "title": "公文发文"
  //       },
  //       "name": "officialIssued",
  //       "id": "1278162399170662402"
  //     },
  //     {
  //       "path": "/company/received",
  //       "component": "layouts/RouteView",
  //       "route": "1",
  //       "children": [
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocDistributeList",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocDistributeList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocDistributeList",
  //             "title": "公文收文"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocDistributeList",
  //           "id": "1278901467496181762"
  //         }
  //       ],
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "RouteView",
  //         "title": "公司收文"
  //       },
  //       "name": "company-received",
  //       "id": "1278901304773963777"
  //     },
  //     {
  //       "path": "/officialReveiced",
  //       "component": "layouts/RouteView",
  //       "route": "1",
  //       "children": [
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocReceivedList",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocReceivedList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocReceivedList",
  //             "title": "收文列表"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocReceivedList",
  //           "id": "1277423330358726657"
  //         },
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocReceivedDraftList",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocReceivedDraftList",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocReceivedDraftList",
  //             "title": "收文草稿箱"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocReceivedDraftList",
  //           "id": "1277566003006676994"
  //         },
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocReceivedHandle",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocReceivedHandle",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocReceivedHandle",
  //             "title": "收文经办文件查询"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocReceivedHandle",
  //           "id": "1277800347730227201"
  //         },
  //         {
  //           "path": "/modules/eoa/officialdoc/OaOfficialdocReceivedStatistics",
  //           "component": "modules/eoa/officialdoc/OaOfficialdocReceivedStatistics",
  //           "route": "1",
  //           "meta": {
  //             "keepAlive": false,
  //             "internalOrExternal": false,
  //             "componentName": "OaOfficialdocReceivedStatistics",
  //             "title": "收文统计"
  //           },
  //           "name": "modules-eoa-officialdoc-OaOfficialdocReceivedStatistics",
  //           "id": "1277944934318845954"
  //         }
  //       ],
  //       "meta": {
  //         "keepAlive": false,
  //         "internalOrExternal": false,
  //         "componentName": "RouteView",
  //         "title": "公文收文"
  //       },
  //       "name": "officialReveiced",
  //       "id": "1278163143487655937"
  //     }
  //   ],
  //   "meta": {
  //     "keepAlive": false,
  //     "internalOrExternal": false,
  //     "icon": "book",
  //     "componentName": "RouteView",
  //     "title": "公文[NEW]"
  //   },
  //   "name": "wps",
  //   "id": "1270645157124952066"
  // },
  {
    "redirect": null,
    "path": "/isystem",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      // {
      //   "path": "/isystem/user",
      //   "component": "system/UserList",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "componentName": "UserList",
      //     "title": "用户管理"
      //   },
      //   "name": "isystem-user",
      //   "id": "3f915b2769fc80648e92d04e84ca059d"
      // },
      {
        "path": "/isystem/newPermissionList",
        "component": "system/NewPermissionList",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "NewPermissionList",
          "title": "菜单管理"
        },
        "name": "isystem-newPermissionList",
        "id": "1170592628746878978"
      },
      // {
      //   "path": "/isystem/roleUserList",
      //   "component": "system/RoleUserList",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": true,
      //     "internalOrExternal": false,
      //     "componentName": "RoleUserList",
      //     "title": "角色管理"
      //   },
      //   "name": "isystem-roleUserList",
      //   "id": "190c2b43bec6a5f7a4194a85db67d96a"
      // },
      // {
      //   "path": "/isystem/depart",
      //   "component": "system/DepartList",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "componentName": "DepartList",
      //     "title": "部门管理"
      //   },
      //   "name": "isystem-depart",
      //   "id": "45c966826eeff4c99b8f8ebfe74511fc"
      // },
      // {
      //   "path": "/isystem/departUserList",
      //   "component": "system/DepartUserList",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "componentName": "DepartUserList",
      //     "title": "我的部门"
      //   },
      //   "name": "isystem-departUserList",
      //   "id": "5c2f42277948043026b7a14692456828"
      // },
      // {
      //   "path": "/isystem/position",
      //   "component": "system/SysPositionList",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "componentName": "SysPositionList",
      //     "title": "职务管理"
      //   },
      //   "name": "isystem-position",
      //   "id": "1174506953255182338"
      // },
      // {
      //   "path": "/isystem/dict",
      //   "component": "system/DictList",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "componentName": "DictList",
      //     "title": "数据字典"
      //   },
      //   "name": "isystem-dict",
      //   "id": "f1cb187abf927c88b89470d08615f5ac"
      // },
      // {
      //   "path": "/isys/category",
      //   "component": "system/SysCategoryList",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "componentName": "SysCategoryList",
      //     "title": "分类字典"
      //   },
      //   "name": "isys-category",
      //   "id": "ebb9d82ea16ad864071158e0c449d186"
      // },
      // {
      //   "path": "/isystem/annountCement",
      //   "component": "system/SysAnnouncementList",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "componentName": "SysAnnouncementList",
      //     "title": "系统通告"
      //   },
      //   "name": "isystem-annountCement",
      //   "id": "e08cb190ef230d5d4f03824198773950"
      // },
      // {
      //   "path": "/isys/tenant",
      //   "component": "system/TenantList",
      //   "route": "1",
      //   "meta": {
      //     "keepAlive": false,
      //     "internalOrExternal": false,
      //     "componentName": "TenantList",
      //     "title": "租户管理[NEW]"
      //   },
      //   "name": "isys-tenant",
      //   "id": "1280350452934307841"
      // }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "setting",
      "componentName": "RouteView",
      "title": "系统管理"
    },
    "name": "isystem",
    "id": "d7d6e2e4e2934f2c9385a623fd98c6f3"
  },
]
export default menus;