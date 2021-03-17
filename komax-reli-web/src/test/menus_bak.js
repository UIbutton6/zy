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
    "path": "/process",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/process/ExtActProcessList",
        "component": "modules/extbpm/process/ExtActProcessList",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "ExtActProcessList",
          "title": "流程设计"
        },
        "name": "process-ExtActProcessList",
        "id": "f9d3f4f27653a71c52faa9fb8070fbe7"
      },
      {
        "path": "/process/ExtActListenerList",
        "component": "modules/extbpm/process/ExtActListenerList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ExtActListenerList",
          "title": "流程监听"
        },
        "name": "process-ExtActListenerList",
        "id": "765dd244f37b804e3d00f475fd56149b"
      },
      {
        "path": "/process/ExtActExpressionList",
        "component": "modules/extbpm/process/ExtActExpressionList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ExtActExpressionList",
          "title": "流程表达式"
        },
        "name": "process-ExtActExpressionList",
        "id": "732d48f8e0abe99fe6a23d18a3171cd1"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "cluster",
      "componentName": "RouteView",
      "title": "流程设计"
    },
    "name": "process",
    "id": "63b551e81c5956d5c861593d366d8c57"
  },
  {
    "redirect": "2",
    "path": "/desform",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/online/desform",
        "component": "modules/online/desform/DesignFormList",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "DesignFormList",
          "title": "表单设计器"
        },
        "name": "online-desform",
        "id": "c3b050978256957869d860d066bf4049"
      },
      {
        "path": "/online/desformTemplate",
        "component": "modules/online/desform/DesignFormTempletList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "DesignFormTempletList",
          "title": "表单设计器模板"
        },
        "name": "online-desformTemplate",
        "id": "96dfaf38ff6625dd7ffc57e2b6b53f51"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "gold",
      "componentName": "RouteView",
      "title": "表单设计"
    },
    "name": "desform",
    "id": "98ab93226c45e39dc2bc9aa67b377183"
  },
  {
    "redirect": null,
    "path": "/jmreport",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "23f3f29d35e5d73ecd8efc0133fd6545",
        "component": "layouts/IframePageView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": true,
          "componentName": "IframePageView",
          "title": "大屏设计[NEW]",
          "url": "{{ window._CONFIG['domianURL'] }}/bigscreen/#?token=${token}"
        },
        "name": "{{ window._CONFIG['domianURL'] }}-bigscreen-#?token=${token}",
        "id": "1267412134208319489"
      },
      {
        "path": "42954cf4d77c812abef134e46c67a69d",
        "component": "layouts/IframePageView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": true,
          "componentName": "IframePageView",
          "title": "报表设计器[NEW]",
          "url": "{{ window._CONFIG['domianURL'] }}/design/report/list?token=${token}"
        },
        "name": "{{ window._CONFIG['domianURL'] }}-design-report-list?token=${token}",
        "id": "1209746778901028865"
      },
      {
        "path": "8f2a8995070aed417df718fbd267617b",
        "component": "layouts/IframePageView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "IframePageView",
          "title": "报表设计模板",
          "url": "{{ window._CONFIG['domianURL'] }}/design/report/demo"
        },
        "name": "{{ window._CONFIG['domianURL'] }}-design-report-demo",
        "id": "1213837343473086466"
      },
      {
        "path": "b5323bdac50f5bc855be3cf9c24f888a",
        "component": "layouts/IframePageView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "IframePageView",
          "title": "智慧物流监控大屏",
          "url": "{{ window._CONFIG['domianURL'] }}/test/bigScreen/templat/index2"
        },
        "name": "{{ window._CONFIG['domianURL'] }}-test-bigScreen-templat-index2",
        "id": "1205306106780364802"
      },
      {
        "path": "21e7299f9fbd4a2fa54cedb9d4c8e49f",
        "component": "layouts/IframePageView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": true,
          "componentName": "IframePageView",
          "title": "生产销售监控大屏",
          "url": "{{ window._CONFIG['domianURL'] }}/test/bigScreen/templat/index1"
        },
        "name": "{{ window._CONFIG['domianURL'] }}-test-bigScreen-templat-index1",
        "id": "1205098241075453953"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "area-chart",
      "componentName": "RouteView",
      "title": "报表设计"
    },
    "name": "jmreport",
    "id": "1205097455226462210"
  },
  {
    "redirect": null,
    "path": "/online",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/online/cgform",
        "component": "modules/online/cgform/OnlCgformHeadList",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "OnlCgformHeadList",
          "title": "Online表单开发[更新]"
        },
        "name": "online-cgform",
        "id": "8d4683aacaa997ab86b966b464360338"
      },
      {
        "path": "/online/cgreport",
        "component": "modules/online/cgreport/OnlCgreportHeadList",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "OnlCgreportHeadList",
          "title": "Online报表配置"
        },
        "name": "online-cgreport",
        "id": "109c78a583d4693ce2f16551b7786786"
      },
      {
        "path": "/online/graphreport",
        "component": "modules/online/graphreport/OnlGraphreportHeadList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlGraphreportHeadList",
          "title": "Online图表配置"
        },
        "name": "online-graphreport",
        "id": "7d08d3885671cf0ff1c4fe5d82fcd0e2"
      },
      {
        "path": "/online/graphreport/templet",
        "component": "modules/online/graphreport/OnlGraphreportTempletList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlGraphreportTempletList",
          "title": "Online组合报表"
        },
        "name": "online-graphreport-templet",
        "id": "6242fb02030e9778973390766a5791a7"
      },
      {
        "path": "/isystem/fillRule",
        "component": "system/SysFillRuleList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SysFillRuleList",
          "title": "系统编码生成规则"
        },
        "name": "isystem-fillRule",
        "id": "1192318987661234177"
      },
      {
        "path": "/isystem/checkRule",
        "component": "system/SysCheckRuleList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SysCheckRuleList",
          "title": "系统编码校验规则"
        },
        "name": "isystem-checkRule",
        "id": "1224641973866467330"
      },
      {
        "path": "/online/cgformButton/:code",
        "component": "modules/online/cgform/button/OnlCgformButtonList",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlCgformButtonList",
          "title": "自定义按钮"
        },
        "name": "online-cgformButton-@code",
        "id": "0bbf8639ce155779594f2a9948978f10"
      },
      {
        "path": "/online/df/:table/:id",
        "component": "modules/online/cgform/auto/OnlineDynamicForm",
        "route": "0",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlineDynamicForm",
          "title": "AUTO动态表单"
        },
        "name": "online-df-@table-@id",
        "id": "22d6a3d39a59dd7ea9a30acfa6bfb0a5"
      },
      {
        "path": "/online/cgformList/:code",
        "component": "modules/online/cgform/auto/OnlCgformAutoList",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlCgformAutoList",
          "title": "AUTO在线表单"
        },
        "name": "online-cgformList-@code",
        "id": "54097c6a3cf50fad0793a34beff1efdf"
      },
      {
        "path": "/online/cgformTreeList/:code",
        "component": "modules/online/cgform/auto/OnlCgformTreeList",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlCgformTreeList",
          "title": "AUTO树表单列表"
        },
        "name": "online-cgformTreeList-@code",
        "id": "fba41089766888023411a978d13c0aa4"
      },
      {
        "path": "/online/graphreport/chart/:code",
        "component": "modules/online/graphreport/auto/OnlGraphreportAutoChart",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlGraphreportAutoChart",
          "title": "AUTO在线图表"
        },
        "name": "online-graphreport-chart-@code",
        "id": "abb2641990431ea1d4b638e16933fbb5"
      },
      {
        "path": "/online/cgformErpList/:code",
        "component": "modules/online/cgform/auto/erp/OnlCgformErpList",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlCgformErpList",
          "title": "AUTO在线表单ERP"
        },
        "name": "online-cgformErpList-@code",
        "id": "1229674163694841857"
      },
      {
        "path": "/online/dfview/:table/:id",
        "component": "modules/online/cgform/auto/OnlineDynamicViewForm",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlineDynamicViewForm",
          "title": "AUTO表单详情页"
        },
        "name": "online-dfview-@table-@id",
        "id": "6c6a033650e64a14543a8a401d790093"
      },
      {
        "path": "/online/cgreport/:code",
        "component": "modules/online/cgreport/auto/OnlCgreportAutoList",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "onlineAutoList",
          "title": "AUTO在线报表"
        },
        "name": "onlineAutoList",
        "id": "9fe26464838de2ea5e90f2367e35efa0"
      },
      {
        "path": "/online/graphreport/templet/:code",
        "component": "modules/online/graphreport/auto/OnlGraphreportTempletAutoChart",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlGraphreportTempletAutoChart",
          "title": "AUTO多数据源图表"
        },
        "name": "online-graphreport-templet-@code",
        "id": "6523422a6c69a62d48dacf90932e5302"
      },
      {
        "path": "/online/copyform/:code",
        "component": "modules/online/cgform/OnlCgformCopyList",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlCgformCopyList",
          "title": "ONLINE视图管理"
        },
        "name": "online-copyform-@code",
        "id": "f2849d3814fc97993bfc519ae6bbf049"
      },
      {
        "path": "/online/desform/view/:desformId",
        "component": "modules/online/desform/PreviewDesform",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "PreviewDesform",
          "title": "AUTO设计表单浏览"
        },
        "name": "online-desform-view-@desformId",
        "id": "f842bc13739eccaba52e01105ce40055"
      },
      {
        "path": "/online/desform/list/:code",
        "component": "modules/online/desform/auto/AutoDesignDataListTable",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "AutoDesignDataListTable",
          "title": "AUTO设计表单列表"
        },
        "name": "online-desform-list-@code",
        "id": "a8ee330fb0cb867340101717e54998b5"
      },
      {
        "path": "/online/cgformInnerTableList/:code",
        "component": "modules/online/cgform/auto/innerTable/OnlCgformInnerTableList",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlCgformInnerTableList",
          "title": "AUTO在线内嵌子表"
        },
        "name": "online-cgformInnerTableList-@code",
        "id": "1235823781053313025"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "cloud",
      "componentName": "RouteView",
      "title": "在线开发"
    },
    "name": "online",
    "id": "e41b69c57a941a3bbcce45032fe57605"
  },
  {
    "redirect": null,
    "path": "/task",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/bpm/task/MyTaskList",
        "component": "modules/bpm/task/MyTaskList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "MyTaskList",
          "title": "我的任务"
        },
        "name": "bpm-task-MyTaskList",
        "id": "1939e035e803a99ceecb6f5563570fb2"
      },
      {
        "path": "/bpm/task/MyApplyProcessList",
        "component": "modules/bpm/task/MyApplyProcessList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "MyApplyProcessList",
          "title": "我发起流程"
        },
        "name": "bpm-task-MyApplyProcessList",
        "id": "abd50036ff42f0a9943ace7eb63c63b6"
      },
      {
        "path": "/bpm/task/MyCcHisProcessList",
        "component": "modules/bpm/task/MyCcHisProcessList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "MyCcHisProcessList",
          "title": "我的抄送"
        },
        "name": "bpm-task-MyCcHisProcessList",
        "id": "e4335a37647952a691fd609ee6f92168"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "share-alt",
      "componentName": "RouteView",
      "title": "个人办公"
    },
    "name": "task",
    "id": "baf16b7174bd821b6bab23fa9abb200d"
  },
  {
    "redirect": null,
    "path": "/biz",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/joa/JoaLoanList",
        "component": "modules/extbpm/joa/JoaLoanList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JoaLoanList",
          "title": "借款申请"
        },
        "name": "joa-JoaLoanList",
        "id": "3be6ff6704723141960ea0f397a18727"
      },
      {
        "path": "/joa/JoaEmployeeLeaveList",
        "component": "modules/extbpm/joa/JoaEmployeeLeaveList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JoaEmployeeLeaveList",
          "title": "请假申请"
        },
        "name": "joa-JoaEmployeeLeaveList",
        "id": "8200f83bcfa7b44190f4c15d805b3bf8"
      },
      {
        "path": "/joa/JoaBusinesStripList",
        "component": "modules/extbpm/joa/JoaBusinesStripList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JoaBusinesStripList",
          "title": "出差申请"
        },
        "name": "joa-JoaBusinesStripList",
        "id": "3b45e691929312bdc23047b25483ba77"
      },
      {
        "path": "/joa/JoaDocSendingList",
        "component": "modules/extbpm/joa/JoaDocSendingList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JoaDocSendingList",
          "title": "公文发文"
        },
        "name": "joa-JoaDocSendingList",
        "id": "7654fd49b2e86a2db8139552a2f8e670"
      },
      {
        "path": "/joa/JoaEmployeeLeaveListBiz",
        "component": "modules/extbpm/joa/JoaEmployeeLeaveListBiz",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JoaEmployeeLeaveListBiz",
          "title": "请假审批(自定义)"
        },
        "name": "joa-JoaEmployeeLeaveListBiz",
        "id": "1227871604541870082"
      },
      {
        "path": "/biz/ExtBizLeaveList",
        "component": "modules/extbpm/biz/ExtBizLeaveList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ExtBizLeaveList",
          "title": "批量申请(自定义)"
        },
        "name": "biz-ExtBizLeaveList",
        "id": "56ca78fe0f22d815fabc793461af67b8"
      },
      {
        "path": "/online/cgformList/7030311f69f04748831699b626ba572e",
        "component": "modules/online/cgform/auto/OnlCgformAutoList",
        "route": "0",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlCgformAutoList",
          "title": "Online会签子流程"
        },
        "name": "online-cgformList-7030311f69f04748831699b626ba572e",
        "id": "1216908703069999106"
      },
      {
        "path": "/online/cgformList/402860816aa5921f016aa5921f480000",
        "component": "modules/online/cgform/auto/OnlCgformAutoList",
        "route": "0",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlCgformAutoList",
          "title": "Online请假单"
        },
        "name": "online-cgformList-402860816aa5921f016aa5921f480000",
        "id": "1241696693075959809"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "cluster",
      "componentName": "RouteView",
      "title": "业务办理"
    },
    "name": "biz",
    "id": "edfa74d66e8ea63ea432c2910837b150"
  },
  {
    "redirect": null,
    "path": "/oa",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/extbpm/process/BpmAutoDesformApply",
        "component": "modules/extbpm/process/BpmAutoDesformApply",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "BpmAutoDesformApply",
          "title": "工单申请"
        },
        "name": "extbpm-process-BpmAutoDesformApply",
        "id": "cab5a60d58871cff3d5858e4d2580a26"
      },
      {
        "path": "/extbpm/process/ExtActDesignFlowDataList",
        "component": "modules/extbpm/process/ExtActDesignFlowDataList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ExtActDesignFlowDataList",
          "title": "我的工单"
        },
        "name": "extbpm-process-ExtActDesignFlowDataList",
        "id": "bae8992dc6f39b1736d65ef251fa68c2"
      },
      {
        "path": "/extbpm/process/BpmAutoDesformApplyMore",
        "component": "modules/extbpm/process/BpmAutoDesformApplyMore",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "BpmAutoDesformApplyMore",
          "title": "工单查看更多"
        },
        "name": "extbpm-process-BpmAutoDesformApplyMore",
        "id": "2ea33825c6b365607b9ff04f3362bdda"
      },
      {
        "path": "/online/desform/auto/AutoDesignDataQuery",
        "component": "modules/online/desform/auto/AutoDesignDataQuery",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "AutoDesignDataQuery",
          "title": "工单查询"
        },
        "name": "online-desform-auto-AutoDesignDataQuery",
        "id": "1215097609505517569"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "alert",
      "componentName": "RouteView",
      "title": "OA办公"
    },
    "name": "oa",
    "id": "09e7db25b4555332333f83afdadc7897"
  },
  {
    "redirect": null,
    "path": "/eoa",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/modules/eoa/cmsbpm/EoaCmsProcessPortal",
        "component": "modules/eoa/cmsbpm/EoaCmsProcessPortal",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "EoaCmsProcessPortal",
          "title": "流程门户"
        },
        "name": "modules-eoa-cmsbpm-EoaCmsProcessPortal",
        "id": "1235483978132119553"
      },
      {
        "path": "/eoa/cmsoa/EoaCmsEnterprisePortal",
        "component": "modules/eoa/cmsoa/EoaCmsEnterprisePortal",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "EoaCmsEnterprisePortal",
          "title": "企业门户"
        },
        "name": "eoa-cmsoa-EoaCmsEnterprisePortal",
        "id": "1234735670388441089"
      },
      {
        "path": "/isystem/addressList",
        "component": "system/AddressList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "AddressList",
          "title": "通讯录"
        },
        "name": "isystem-addressList",
        "id": "1174590283938041857"
      },
      {
        "path": "/modules/eoa/email/EoaCmsEmailList",
        "component": "modules/eoa/email/EoaCmsEmailList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "EoaCmsEmailList",
          "title": "我的邮箱"
        },
        "name": "modules-eoa-email-EoaCmsEmailList",
        "id": "1176103166991773698"
      },
      {
        "path": "/modules/eoa/filemanage",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/modules/eoa/filemanage/eoaFileInit",
            "component": "modules/eoa/filemanage/EoaFileInit",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaFileInit",
              "title": "文档管理"
            },
            "name": "modules-eoa-filemanage-eoaFileInit",
            "id": "1174291880345526274"
          },
          {
            "path": "/modules/eoa/filemanage/eoaFileView",
            "component": "modules/eoa/filemanage/EoaFileView",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaFileView",
              "title": "文档查看"
            },
            "name": "modules-eoa-filemanage-eoaFileView",
            "id": "1176852999002075137"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RouteView",
          "title": "我的文档"
        },
        "name": "modules-eoa-filemanage",
        "id": "1247704541530546178"
      },
      {
        "path": "/eoa/plan/menu",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/eoa/plan",
            "component": "modules/eoa/plan/EoaPlanView",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaPlanView",
              "title": "日程计划"
            },
            "name": "eoa-plan",
            "id": "11760312221121525513"
          },
          {
            "path": "/eoa/planList",
            "component": "modules/eoa/plan/EoaPlanList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaPlanList",
              "title": "日程计划列表"
            },
            "name": "eoa-planList",
            "id": "1176031222112026625"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RouteView",
          "title": "我的计划"
        },
        "name": "eoa-plan-menu",
        "id": "1247705246731460610"
      },
      {
        "path": "/eoa/metting",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/metting/eoaMettingList",
            "component": "modules/eoa/metting/EoaMettingList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaMettingList",
              "title": "会议管理"
            },
            "name": "metting-eoaMettingList",
            "id": "1242274973658173441"
          },
          {
            "path": "/metting/EoaMettingRoomUse",
            "component": "modules/eoa/metting/EoaMettingRoomUse",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaMettingRoomUse",
              "title": "会议室使用情况"
            },
            "name": "metting-EoaMettingRoomUse",
            "id": "1242640213038112769"
          },
          {
            "path": "/metting/eoaMettingRoomList",
            "component": "modules/eoa/metting/EoaMettingRoomList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaMettingRoomList",
              "title": "会议室"
            },
            "name": "metting-eoaMettingRoomList",
            "id": "1241962019083567106"
          },
          {
            "path": "/metting/eoaMettingPreview",
            "component": "modules/eoa/metting/modules/EoaMettingPreview",
            "route": "1",
            "hidden": true,
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaMettingPreview",
              "title": "预览"
            },
            "name": "metting-eoaMettingPreview",
            "id": "1244162795109400578"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RouteView",
          "title": "会议管理"
        },
        "name": "eoa-metting",
        "id": "1244279838241562625"
      },
      {
        "path": "/modules/eoa/sign",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/modules/eoa/sign/OaSignInfoList",
            "component": "modules/eoa/sign/OaSignInfoList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaSignInfoList",
              "title": "打卡"
            },
            "name": "modules-eoa-sign-OaSignInfoList",
            "id": "1194586555705049089"
          },
          {
            "path": "/modules/eoa/sign/OaSignPatchList",
            "component": "modules/eoa/sign/OaSignPatchList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaSignPatchList",
              "title": "补卡"
            },
            "name": "modules-eoa-sign-OaSignPatchList",
            "id": "1194587923132039170"
          },
          {
            "path": "/modules/eoa/sign/OaSignOutList",
            "component": "modules/eoa/sign/OaSignOutList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaSignOutList",
              "title": "外勤"
            },
            "name": "modules-eoa-sign-OaSignOutList",
            "id": "1194588524918194178"
          },
          {
            "path": "/modules/eoa/sign/OaSignRuleSetting",
            "component": "modules/eoa/sign/OaSignRuleSetting",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaSignRuleSetting",
              "title": "考勤规则"
            },
            "name": "modules-eoa-sign-OaSignRuleSetting",
            "id": "1194944096041451521"
          },
          {
            "path": "/modules/eoa/sign/OaSignStatistics",
            "component": "modules/eoa/sign/OaSignStatistics",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaSignStatistics",
              "title": "考勤统计"
            },
            "name": "modules-eoa-sign-OaSignStatistics",
            "id": "1197125991571480578"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "icon": "schedule",
          "componentName": "RouteView",
          "title": "考勤管理"
        },
        "name": "modules-eoa-sign",
        "id": "1194585809408344066"
      },
      {
        "path": "/eoa/cms",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/modules/eoa/cms/modules/eoaCmsArticleDetailModal",
            "component": "modules/eoa/cms/modules/EoaCmsArticleDetailModal",
            "route": "1",
            "hidden": true,
            "meta": {
              "keepAlive": false,
              "internalOrExternal": true,
              "componentName": "EoaCmsArticleDetailModal",
              "title": "文章详情"
            },
            "name": "modules-eoa-cms-modules-eoaCmsArticleDetailModal",
            "id": "1235766252878712834"
          },
          {
            "path": "/modules/eoa/cms/eoaCmsArticlePortal",
            "component": "modules/eoa/cms/EoaCmsArticlePortal",
            "route": "1",
            "hidden": true,
            "meta": {
              "keepAlive": false,
              "internalOrExternal": true,
              "componentName": "EoaCmsArticlePortal",
              "title": "文章列表"
            },
            "name": "modules-eoa-cms-eoaCmsArticlePortal",
            "id": "1235167949069754369"
          },
          {
            "path": "/eoa/cms/EoaCmsMenuList",
            "component": "modules/eoa/cms/EoaCmsMenuList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaCmsMenuList",
              "title": "文章栏目"
            },
            "name": "eoa-cms-EoaCmsMenuList",
            "id": "1174628954015903745"
          },
          {
            "path": "/eoa/cms/EoaCmsArticleList",
            "component": "modules/eoa/cms/EoaCmsArticleList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaCmsArticleList",
              "title": "文章管理"
            },
            "name": "eoa-cms-EoaCmsArticleList",
            "id": "1174629137172770818"
          },
          {
            "path": "/eoa/cms/EoaCmsSiteList",
            "component": "modules/eoa/cms/EoaCmsSiteList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "EoaCmsSiteList",
              "title": "站点管理"
            },
            "name": "eoa-cms-EoaCmsSiteList",
            "id": "1231868225743073281"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RouteView",
          "title": "CMS官网"
        },
        "name": "eoa-cms",
        "id": "1244281754195435522"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "qrcode",
      "componentName": "RouteView",
      "title": "OA模块"
    },
    "name": "eoa",
    "id": "1174628684611563521"
  },
  {
    "redirect": null,
    "path": "/bpm",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/modules/bpm/ProcessInstanceList",
        "component": "modules/bpm/ProcessInstanceList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ProcessInstanceList",
          "title": "流程实例"
        },
        "name": "modules-bpm-ProcessInstanceList",
        "id": "a4fc7b64b01a224da066bb16230f9c5a"
      },
      {
        "path": "/bpm/task/HisTaskList",
        "component": "modules/bpm/task/HisTaskList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "HisTaskList",
          "title": "历史任务"
        },
        "name": "bpm-task-HisTaskList",
        "id": "de89c46e0acb9687e1133d44d45b3491"
      },
      {
        "path": "/bpm/task/HisProcessList",
        "component": "modules/bpm/task/HisProcessList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "HisProcessList",
          "title": "历史流程"
        },
        "name": "bpm-task-HisProcessList",
        "id": "191e453f3de11d56cd376679958bcea2"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "cluster",
      "componentName": "RouteView",
      "title": "流程管理"
    },
    "name": "bpm",
    "id": "a44c30db536349e91106223957e684eb"
  },
  {
    "redirect": null,
    "path": "/wps",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/modules/eoa/wps/viewFile",
        "component": "modules/eoa/wps/viewFile",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "viewFile",
          "title": "wps文件预览"
        },
        "name": "modules-eoa-wps-viewFile",
        "id": "1270645595521994754"
      },
      {
        "path": "/officialConfig",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/modules/eoa/officialdoc/OaWpsFileList",
            "component": "modules/eoa/officialdoc/OaWpsFileList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaWpsFileList",
              "title": "模板管理"
            },
            "name": "modules-eoa-officialdoc-OaWpsFileList",
            "id": "1273541710077956097"
          },
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocOrgancodeList",
            "component": "modules/eoa/officialdoc/OaOfficialdocOrgancodeList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocOrgancodeList",
              "title": "机关待字设置"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocOrgancodeList",
            "id": "1272354095425323009"
          },
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocDepartUserList",
            "component": "modules/eoa/officialdoc/OaOfficialdocDepartUserList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocDepartUserList",
              "title": "分发人员"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocDepartUserList",
            "id": "1279967233381253122"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RouteView",
          "title": "配置管理"
        },
        "name": "officialConfig",
        "id": "1278163544043687938"
      },
      {
        "path": "/modules/eoa/wps/createFile",
        "component": "modules/eoa/wps/createFile",
        "route": "1",
        "hidden": true,
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "createFile",
          "title": "创建文件"
        },
        "name": "modules-eoa-wps-createFile",
        "id": "1270654343367938049"
      },
      {
        "path": "/modules/eoa/wps/webFile",
        "component": "modules/eoa/wps/webFile",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "webFile",
          "title": "wps文件"
        },
        "name": "modules-eoa-wps-webFile",
        "id": "1270645422053969921"
      },
      {
        "path": "/officialIssued",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocIssuedList",
            "component": "modules/eoa/officialdoc/OaOfficialdocIssuedList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocIssuedList",
              "title": "发文列表"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocIssuedList",
            "id": "1272766393910472706"
          },
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocDraftList",
            "component": "modules/eoa/officialdoc/OaOfficialdocDraftList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocDraftList",
              "title": "发文草稿箱"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocDraftList",
            "id": "1272864414304280577"
          },
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocIssuedHandle",
            "component": "modules/eoa/officialdoc/OaOfficialdocIssuedHandle",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocIssuedHandle",
              "title": "发文经办文件查询"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocIssuedHandle",
            "id": "1277788399483584514"
          },
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocIssuedStatistics",
            "component": "modules/eoa/officialdoc/OaOfficialdocIssuedStatistics",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocIssuedStatistics",
              "title": "发文统计"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocIssuedStatistics",
            "id": "1277888589167075330"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RouteView",
          "title": "公文发文"
        },
        "name": "officialIssued",
        "id": "1278162399170662402"
      },
      {
        "path": "/company/received",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocDistributeList",
            "component": "modules/eoa/officialdoc/OaOfficialdocDistributeList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocDistributeList",
              "title": "公文收文"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocDistributeList",
            "id": "1278901467496181762"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RouteView",
          "title": "公司收文"
        },
        "name": "company-received",
        "id": "1278901304773963777"
      },
      {
        "path": "/officialReveiced",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocReceivedList",
            "component": "modules/eoa/officialdoc/OaOfficialdocReceivedList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocReceivedList",
              "title": "收文列表"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocReceivedList",
            "id": "1277423330358726657"
          },
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocReceivedDraftList",
            "component": "modules/eoa/officialdoc/OaOfficialdocReceivedDraftList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocReceivedDraftList",
              "title": "收文草稿箱"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocReceivedDraftList",
            "id": "1277566003006676994"
          },
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocReceivedHandle",
            "component": "modules/eoa/officialdoc/OaOfficialdocReceivedHandle",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocReceivedHandle",
              "title": "收文经办文件查询"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocReceivedHandle",
            "id": "1277800347730227201"
          },
          {
            "path": "/modules/eoa/officialdoc/OaOfficialdocReceivedStatistics",
            "component": "modules/eoa/officialdoc/OaOfficialdocReceivedStatistics",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "OaOfficialdocReceivedStatistics",
              "title": "收文统计"
            },
            "name": "modules-eoa-officialdoc-OaOfficialdocReceivedStatistics",
            "id": "1277944934318845954"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RouteView",
          "title": "公文收文"
        },
        "name": "officialReveiced",
        "id": "1278163143487655937"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "book",
      "componentName": "RouteView",
      "title": "公文[NEW]"
    },
    "name": "wps",
    "id": "1270645157124952066"
  },
  {
    "redirect": null,
    "path": "/isystem",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/isystem/user",
        "component": "system/UserList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "UserList",
          "title": "用户管理"
        },
        "name": "isystem-user",
        "id": "3f915b2769fc80648e92d04e84ca059d"
      },
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
      {
        "path": "/isystem/roleUserList",
        "component": "system/RoleUserList",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "RoleUserList",
          "title": "角色管理"
        },
        "name": "isystem-roleUserList",
        "id": "190c2b43bec6a5f7a4194a85db67d96a"
      },
      {
        "path": "/isystem/depart",
        "component": "system/DepartList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "DepartList",
          "title": "部门管理"
        },
        "name": "isystem-depart",
        "id": "45c966826eeff4c99b8f8ebfe74511fc"
      },
      {
        "path": "/isystem/departUserList",
        "component": "system/DepartUserList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "DepartUserList",
          "title": "我的部门"
        },
        "name": "isystem-departUserList",
        "id": "5c2f42277948043026b7a14692456828"
      },
      {
        "path": "/isystem/position",
        "component": "system/SysPositionList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SysPositionList",
          "title": "职务管理"
        },
        "name": "isystem-position",
        "id": "1174506953255182338"
      },
      {
        "path": "/isystem/dict",
        "component": "system/DictList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "DictList",
          "title": "数据字典"
        },
        "name": "isystem-dict",
        "id": "f1cb187abf927c88b89470d08615f5ac"
      },
      {
        "path": "/isys/category",
        "component": "system/SysCategoryList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SysCategoryList",
          "title": "分类字典"
        },
        "name": "isys-category",
        "id": "ebb9d82ea16ad864071158e0c449d186"
      },
      {
        "path": "/isystem/annountCement",
        "component": "system/SysAnnouncementList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SysAnnouncementList",
          "title": "系统通告"
        },
        "name": "isystem-annountCement",
        "id": "e08cb190ef230d5d4f03824198773950"
      },
      {
        "path": "/isys/tenant",
        "component": "system/TenantList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "TenantList",
          "title": "租户管理[NEW]"
        },
        "name": "isys-tenant",
        "id": "1280350452934307841"
      }
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
  {
    "redirect": null,
    "path": "/report",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/report/ViserChartDemo",
        "component": "jeecg/report/ViserChartDemo",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ViserChartDemo",
          "title": "ViserChartDemo"
        },
        "name": "report-ViserChartDemo",
        "id": "020b06793e4de2eee0007f603000c769"
      },
      {
        "path": "/report/ArchivesStatisticst",
        "component": "jeecg/report/ArchivesStatisticst",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ArchivesStatisticst",
          "title": "布局统计报表"
        },
        "name": "report-ArchivesStatisticst",
        "id": "2aeddae571695cd6380f6d6d334d6e7d"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "bar-chart",
      "componentName": "RouteView",
      "title": "统计报表"
    },
    "name": "report",
    "id": "f0675b52d89100ee88472b6800754a08"
  },
  {
    "redirect": "/kunlun",
    "path": "/kunlun",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/online/graphreport/chart/1c034f6063cee129e6aa32016ac42ce8",
        "component": "modules/online/graphreport/auto/OnlGraphreportAutoChart",
        "route": "0",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlGraphreportAutoChart",
          "title": "项目性质收入统计"
        },
        "name": "online-graphreport-chart-1c034f6063cee129e6aa32016ac42ce8",
        "id": "326a99be05ab907332fad34944a906af"
      },
      {
        "path": "/online/graphreport/chart/27accd782f98c41eae5fad1b0514238d",
        "component": "modules/online/graphreport/auto/OnlGraphreportAutoChart",
        "route": "0",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OnlGraphreportAutoChart",
          "title": "月度增长分析同比"
        },
        "name": "online-graphreport-chart-27accd782f98c41eae5fad1b0514238d",
        "id": "0230a2c89be59104a1b048195150f2d0"
      },
      {
        "path": "b03ca6f3065d18bfec693c03b397ebd4",
        "component": "layouts/IframeFReportView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "IframeFReportView",
          "title": "年度同比报表",
          "url": "{{ window._CONFIG['domianURL'] }}/ReportServer?reportlet=kunl_re1.cpt"
        },
        "name": "{{ window._CONFIG['domianURL'] }}-ReportServer?reportlet=kunl_re1.cpt",
        "id": "e47142f2d104aa7f1ba0f9d360226be8"
      },
      {
        "path": "ad5bbf92f2d82df8dc11c86111bc4144",
        "component": "layouts/IframeFReportView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "IframeFReportView",
          "title": "来源收入统计",
          "url": "{{ window._CONFIG['domianURL'] }}/ReportServer?reportlet=kunlun_02.cpt"
        },
        "name": "{{ window._CONFIG['domianURL'] }}-ReportServer?reportlet=kunlun_02.cpt",
        "id": "2aa1fc959c2d0d8f78ab936c8f8560fb"
      },
      {
        "path": "/online/cgreport/87b55a515d3441b6b98e48e5b35474a6",
        "component": "modules/online/cgreport/auto/OnlCgreportAutoList",
        "route": "0",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "onlineAutoList",
          "title": "OL在线报表示例"
        },
        "name": "onlineAutoList",
        "id": "027aee69baee98a0ed2e01806e89c891"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "sliders",
      "componentName": "RouteView",
      "title": "业务报表"
    },
    "name": "kunlun",
    "id": "f4b0985a992eca541c1914a118669f44"
  },
  {
    "redirect": null,
    "path": "/dashboard3",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/monitor",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/monitor/redis/info",
            "component": "modules/monitor/RedisInfo",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "RedisInfo",
              "title": "Redis监控"
            },
            "name": "monitor-redis-info",
            "id": "8d1ebd663688965f1fd86a2f0ead3416"
          },
          {
            "path": "/monitor/TomcatInfo",
            "component": "modules/monitor/TomcatInfo",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "TomcatInfo",
              "title": "Tomcat信息"
            },
            "name": "monitor-TomcatInfo",
            "id": "024f1fd1283dc632458976463d8984e1"
          },
          {
            "path": "/monitor/HttpTrace",
            "component": "modules/monitor/HttpTrace",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "HttpTrace",
              "title": "请求追踪"
            },
            "name": "monitor-HttpTrace",
            "id": "fc810a2267dd183e4ef7c71cc60f4670"
          },
          {
            "path": "/monitor/SystemInfo",
            "component": "modules/monitor/SystemInfo",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "SystemInfo",
              "title": "服务器信息"
            },
            "name": "monitor-SystemInfo",
            "id": "8b3bff2eee6f1939147f5c68292a1642"
          },
          {
            "path": "/monitor/JvmInfo",
            "component": "modules/monitor/JvmInfo",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "JvmInfo",
              "title": "JVM信息"
            },
            "name": "monitor-JvmInfo",
            "id": "d07a2c87a451434c99ab06296727ec4f"
          },
          {
            "path": "/monitor/Disk",
            "component": "modules/monitor/DiskMonitoring",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "DiskMonitoring",
              "title": "磁盘监控"
            },
            "name": "monitor-Disk",
            "id": "97c8629abc7848eccdb6d77c24bb3ebb"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RouteView",
          "title": "性能监控"
        },
        "name": "monitor",
        "id": "700b7f95165c46cc7a78bf227aa8fed3"
      },
      {
        "path": "5f22d2592b01c9e964efe70040162b83",
        "component": "layouts/IframePageView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": true,
          "componentName": "IframePageView",
          "title": "SQL监控",
          "url": "{{ window._CONFIG['domianURL'] }}/druid/"
        },
        "name": "{{ window._CONFIG['domianURL'] }}-druid-",
        "id": "aedbf679b5773c1f25e9f7b10111da73"
      },
      {
        "path": "/sys/dataLog-list",
        "component": "system/DataLogList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "DataLogList",
          "title": "数据日志"
        },
        "name": "sys-dataLog-list",
        "id": "841057b8a1bef8f6b4b20f9a618a7fa6"
      },
      {
        "path": "/isystem/log",
        "component": "system/LogList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "LogList",
          "title": "日志管理"
        },
        "name": "isystem-log",
        "id": "58857ff846e61794c69208e9d3a85466"
      },
      {
        "path": "/isystem/dataSource",
        "component": "system/SysDataSourceList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SysDataSourceList",
          "title": "多数据源管理"
        },
        "name": "isystem-dataSource",
        "id": "1209731624921534465"
      },
      {
        "path": "10b80437abc6eee8c3e3daabb5e9f59e",
        "component": "layouts/IframePageView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": true,
          "componentName": "IframePageView",
          "title": "在线文档",
          "url": "{{ window._CONFIG['domianURL'] }}/doc.html"
        },
        "name": "{{ window._CONFIG['domianURL'] }}-doc.html",
        "id": "2dbbafa22cda07fa5d169d741b81fe12"
      },
      {
        "path": "/isystem/QuartzJobList",
        "component": "system/QuartzJobList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "QuartzJobList",
          "title": "定时任务"
        },
        "name": "isystem-QuartzJobList",
        "id": "b1cb0a3fedf7ed0e4653cb5a229837ee"
      },
      {
        "path": "/isps/userAnnouncement",
        "component": "system/UserAnnouncementList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "UserAnnouncementList",
          "title": "我的消息"
        },
        "name": "isps-userAnnouncement",
        "id": "53a9230444d33de28aa11cc108fb1dba"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "dashboard",
      "componentName": "RouteView",
      "title": "系统监控"
    },
    "name": "dashboard3",
    "id": "08e6b9dc3c04489c8e1ff2ce6f105aa4"
  },
  {
    "redirect": null,
    "path": "/message",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/modules/message/sysMessageList",
        "component": "modules/message/SysMessageList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SysMessageList",
          "title": "消息管理"
        },
        "name": "modules-message-sysMessageList",
        "id": "944abf0a8fc22fe1f1154a389a574154"
      },
      {
        "path": "/modules/message/sysMessageTemplateList",
        "component": "modules/message/SysMessageTemplateList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SysMessageTemplateList",
          "title": "模板管理"
        },
        "name": "modules-message-sysMessageTemplateList",
        "id": "f780d0d3083d849ccbdb1b1baee4911d"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "message",
      "componentName": "RouteView",
      "title": "消息中心"
    },
    "name": "message",
    "id": "5c8042bd6c601270b2bbd9b20bccc68b"
  },
  {
    "redirect": null,
    "path": "/jeecg",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/jeecg/SelectDemo",
        "component": "jeecg/SelectDemo",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SelectDemo",
          "title": "自定义组件"
        },
        "name": "jeecg-SelectDemo",
        "id": "9a90363f216a6a08f32eecb3f0bf12a3"
      },
      {
        "path": "/jeecg/j-vxe-table-demo",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/jeecg/j-vxe-table-demo/normal",
            "component": "jeecg/JVXETableDemo",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "JVXETableDemo",
              "title": "普通示例"
            },
            "name": "jeecg-j-vxe-table-demo-normal",
            "id": "1287715783966834689"
          },
          {
            "path": "/jeecg/j-vxe-table-demo/layout",
            "component": "jeecg/JVxeDemo/layout-demo/Index",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "Index",
              "title": "布局模板"
            },
            "name": "jeecg-j-vxe-table-demo-layout",
            "id": "1287716451494510593"
          },
          {
            "path": "/jeecg/j-vxe-table-demo/jsbc",
            "component": "jeecg/JVxeDemo/demo/JSBCDemo",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "JSBCDemo",
              "title": "即时保存"
            },
            "name": "jeecg-j-vxe-table-demo-jsbc",
            "id": "1287718919049691137"
          },
          {
            "path": "/jeecg/j-vxe-table-demo/tczb",
            "component": "jeecg/JVxeDemo/demo/PopupSubTable",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "PopupSubTable",
              "title": "弹出子表"
            },
            "name": "jeecg-j-vxe-table-demo-tczb",
            "id": "1287718938179911682"
          },
          {
            "path": "/jeecg/j-vxe-table-demo/whsx",
            "component": "jeecg/JVxeDemo/demo/SocketReload",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "SocketReload",
              "title": "无痕刷新"
            },
            "name": "jeecg-j-vxe-table-demo-whsx",
            "id": "1287718956957810689"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RouteView",
          "title": "JVXETable[NEW]"
        },
        "name": "jeecg-j-vxe-table-demo",
        "id": "1287715272999944193"
      },
      {
        "path": "/oss/file",
        "component": "modules/oss/OSSFileList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "OSSFileList",
          "title": "对象存储"
        },
        "name": "oss-file",
        "id": "1166535831146504193"
      },
      {
        "path": "/jeecg/jeecgDemoList",
        "component": "jeecg/JeecgDemoList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "DemoList",
          "title": "单表模型示例"
        },
        "name": "DemoList",
        "id": "4148ec82b6acd69f470bea75fe41c357"
      },
      {
        "path": "/jeecg/JeecgOrderMainList",
        "component": "jeecg/JeecgOrderMainList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JeecgOrderMainList",
          "title": "一对多示例"
        },
        "name": "jeecg-JeecgOrderMainList",
        "id": "fb367426764077dcf94640c843733985"
      },
      {
        "path": "/jeecg/tablist/JeecgOrderDMainList",
        "component": "jeecg/tablist/JeecgOrderDMainList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JeecgOrderDMainList",
          "title": "一对多Tab示例"
        },
        "name": "jeecg-tablist-JeecgOrderDMainList",
        "id": "6ad53fd1b220989a8b71ff482d683a5a"
      },
      {
        "path": "/jeecg/JeecgOrderMainListForJEditableTable",
        "component": "jeecg/JeecgOrderMainListForJEditableTable",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JeecgOrderMainListForJEditableTable",
          "title": "一对多JEditable"
        },
        "name": "jeecg-JeecgOrderMainListForJEditableTable",
        "id": "c431130c0bc0ec71b0a5be37747bb36a"
      },
      {
        "path": "/jeecg/tableTotal",
        "component": "jeecg/TableTotal",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "TableTotal",
          "title": "表格合计"
        },
        "name": "jeecg-tableTotal",
        "id": "043780fa095ff1b2bec4dc406d76f023"
      },
      {
        "path": "/jeecg/PrintDemo",
        "component": "jeecg/PrintDemo",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "PrintDemo",
          "title": "打印测试"
        },
        "name": "jeecg-PrintDemo",
        "id": "e6bfd1fcabfd7942fdd05f076d1dad38"
      },
      {
        "path": "/jeecg/JeecgTreeTable",
        "component": "jeecg/JeecgTreeTable",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JeecgTreeTable",
          "title": "异步树列表Demo"
        },
        "name": "jeecg-JeecgTreeTable",
        "id": "0620e402857b8c5b605e1ad9f4b89350"
      },
      {
        "path": "/jeecg/TableExpandeSub",
        "component": "jeecg/TableExpandeSub",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "TableExpandeSub",
          "title": "内嵌Table"
        },
        "name": "jeecg-TableExpandeSub",
        "id": "4356a1a67b564f0988a484f5531fd4d9"
      },
      {
        "path": "bfa89e563d9509fbc5c6503dd50faf2e",
        "component": "layouts/IframePageView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "IframePageView",
          "title": "百度",
          "url": "http://www.baidu.com"
        },
        "name": "http@--www.baidu.com",
        "id": "a400e4f4d54f79bf5ce160ae432231af"
      },
      {
        "path": "/jeecg/helloworld",
        "component": "jeecg/helloworld",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "helloworld",
          "title": "helloworld"
        },
        "name": "jeecg-helloworld",
        "id": "339329ed54cf255e1f9392e84f136901"
      },
      {
        "path": "/jeecg/InterfaceTest",
        "component": "jeecg/InterfaceTest",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "InterfaceTest",
          "title": "数据回执模拟"
        },
        "name": "jeecg-InterfaceTest",
        "id": "c6cf95444d80435eb37b2f9db3971ae6"
      },
      {
        "path": "/jeecg/JEditableTable",
        "component": "jeecg/JeecgEditableTableExample",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JeecgEditableTableExample",
          "title": "JEditableTable"
        },
        "name": "jeecg-JEditableTable",
        "id": "7960961b0063228937da5fa8dd73d371"
      },
      {
        "path": "/jeecg/imgDragSort",
        "component": "jeecg/ImgDragSort",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ImgDragSort",
          "title": "图片拖拽排序"
        },
        "name": "jeecg-imgDragSort",
        "id": "265de841c58907954b8877fb85212622"
      },
      {
        "path": "/jeecg/ImagCropper",
        "component": "jeecg/ImagCropper",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ImagCropper",
          "title": "图片裁剪"
        },
        "name": "jeecg-ImagCropper",
        "id": "1280464606292099074"
      },
      {
        "path": "/jeecg/ImagPreview",
        "component": "jeecg/ImagPreview",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ImagPreview",
          "title": "图片预览"
        },
        "name": "jeecg-ImagPreview",
        "id": "655563cd64b75dcf52ef7bcdd4836953"
      },
      {
        "path": "/jeecg/imgTurnPage",
        "component": "jeecg/ImgTurnPage",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "ImgTurnPage",
          "title": "图片翻页"
        },
        "name": "jeecg-imgTurnPage",
        "id": "58b9204feaf07e47284ddb36cd2d8468"
      },
      {
        "path": "/jeecg/jeecgPdfView",
        "component": "jeecg/JeecgPdfView",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "JeecgPdfView",
          "title": "PDF预览"
        },
        "name": "jeecg-jeecgPdfView",
        "id": "e1979bb53e9ea51cecc74d86fd9d2f64"
      },
      {
        "path": "/jeecg/splitPanel",
        "component": "jeecg/SplitPanel",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SplitPanel",
          "title": "分屏"
        },
        "name": "jeecg-splitPanel",
        "id": "3fac0d3c9cd40fa53ab70d4c583821f8"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "qrcode",
      "componentName": "RouteView",
      "title": "常见案例"
    },
    "name": "jeecg",
    "id": "2a470fc0c3954d9dbb61de6d80846549"
  },
  {
    "redirect": null,
    "path": "/result",
    "component": "layouts/PageView",
    "route": "1",
    "children": [
      {
        "path": "/result/success",
        "component": "result/Success",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "Success",
          "title": "成功"
        },
        "name": "result-success",
        "id": "00a2a0ae65cdca5e93209cdbde97cbe6"
      },
      {
        "path": "/result/fail",
        "component": "result/Error",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "Error",
          "title": "失败"
        },
        "name": "result-fail",
        "id": "13212d3416eb690c2e1d5033166ff47a"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "check-circle-o",
      "componentName": "PageView",
      "title": "结果页"
    },
    "name": "result",
    "id": "2e42e3835c2b44ec9f7bc26c146ee531"
  },
  {
    "redirect": null,
    "path": "/exception",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/exception/403",
        "component": "exception/403",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "403",
          "title": "403"
        },
        "name": "exception-403",
        "id": "65a8f489f25a345836b7f44b1181197a"
      },
      {
        "path": "/exception/404",
        "component": "exception/404",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "404",
          "title": "404"
        },
        "name": "exception-404",
        "id": "d2bbf9ebca5a8fa2e227af97d2da7548"
      },
      {
        "path": "/exception/500",
        "component": "exception/500",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "500",
          "title": "500"
        },
        "name": "exception-500",
        "id": "b4dfc7d5dd9e8d5b6dd6d4579b1aa559"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "warning",
      "componentName": "RouteView",
      "title": "异常页"
    },
    "name": "exception",
    "id": "c65321e57b7949b7a975313220de0422"
  },
  {
    "redirect": null,
    "path": "/profile",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/profile/basic",
        "component": "profile/basic/Index",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "Index",
          "title": "基础详情页"
        },
        "name": "profile-basic",
        "id": "cc50656cf9ca528e6f2150eba4714ad2"
      },
      {
        "path": "/profile/advanced",
        "component": "profile/advanced/Advanced",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "Advanced",
          "title": "高级详情页"
        },
        "name": "profile-advanced",
        "id": "b3c824fc22bd953e2eb16ae6914ac8f9"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "profile",
      "componentName": "RouteView",
      "title": "详情页"
    },
    "name": "profile",
    "id": "4875ebe289344e14844d8e3ea1edd73f"
  },
  {
    "redirect": null,
    "path": "/form",
    "component": "layouts/PageView",
    "route": "1",
    "children": [
      {
        "path": "/form/base-form",
        "component": "form/BasicForm",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "BasicForm",
          "title": "基础表单"
        },
        "name": "form-base-form",
        "id": "277bfabef7d76e89b33062b16a9a5020"
      },
      {
        "path": "/form/step-form",
        "component": "form/stepForm/StepForm",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "StepForm",
          "title": "分步表单"
        },
        "name": "form-step-form",
        "id": "6531cf3421b1265aeeeabaab5e176e6d"
      },
      {
        "path": "/form/advanced-form",
        "component": "form/advancedForm/AdvancedForm",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "AdvancedForm",
          "title": "高级表单"
        },
        "name": "form-advanced-form",
        "id": "e5973686ed495c379d829ea8b2881fc6"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "form",
      "componentName": "PageView",
      "title": "表单页"
    },
    "name": "form",
    "id": "e3c13679c73a4f829bcff2aba8fd68b1"
  },
  {
    "redirect": "/list/query-list",
    "path": "/list",
    "component": "layouts/PageView",
    "route": "1",
    "children": [
      {
        "path": "/list/query-list",
        "component": "list/TableList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "TableList",
          "title": "查询表格"
        },
        "name": "list-query-list",
        "id": "418964ba087b90a84897b62474496b93"
      },
      {
        "path": "/list/edit-table",
        "component": "list/TableInnerEditList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "TableInnerEditList",
          "title": "内联编辑表格"
        },
        "name": "list-edit-table",
        "id": "ae4fed059f67086fd52a73d913cf473d"
      },
      {
        "path": "/list/user-list",
        "component": "list/UserList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "UserList",
          "title": "用户列表"
        },
        "name": "list-user-list",
        "id": "05b3c82ddb2536a4a5ee1a4c46b5abef"
      },
      {
        "path": "/list/role-list",
        "component": "list/RoleList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "RoleList",
          "title": "角色列表"
        },
        "name": "list-role-list",
        "id": "4f84f9400e5e92c95f05b554724c2b58"
      },
      {
        "path": "/list/permission-list",
        "component": "list/PermissionList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "PermissionList",
          "title": "权限列表"
        },
        "name": "list-permission-list",
        "id": "73678f9daa45ed17a3674131b03432fb"
      },
      {
        "path": "/list/basic-list",
        "component": "list/StandardList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "StandardList",
          "title": "标准列表"
        },
        "name": "list-basic-list",
        "id": "f23d9bfff4d9aa6b68569ba2cff38415"
      },
      {
        "path": "/list/card",
        "component": "list/CardList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "CardList",
          "title": "卡片列表"
        },
        "name": "list-card",
        "id": "7ac9eb9ccbde2f7a033cd4944272bf1e"
      },
      {
        "path": "/list/search",
        "component": "list/search/SearchLayout",
        "route": "1",
        "children": [
          {
            "path": "/list/search/article",
            "component": "list/TableList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "TableList",
              "title": "搜索列表（文章）"
            },
            "name": "list-search-article",
            "id": "078f9558cdeab239aecb2bda1a8ed0d1"
          },
          {
            "path": "/list/search/project",
            "component": "list/TableList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "TableList",
              "title": "搜索列表（项目）"
            },
            "name": "list-search-project",
            "id": "de13e0f6328c069748de7399fcc1dbbd"
          },
          {
            "path": "/list/search/application",
            "component": "list/TableList",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "TableList",
              "title": "搜索列表（应用）"
            },
            "name": "list-search-application",
            "id": "200006f0edf145a2b50eacca07585451"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "SearchLayout",
          "title": "搜索列表"
        },
        "name": "list-search",
        "id": "fb07ca05a3e13674dbf6d3245956da2e"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "table",
      "componentName": "PageView",
      "title": "列表页"
    },
    "name": "list",
    "id": "540a2936940846cb98114ffb0d145cb8"
  },
  {
    "redirect": null,
    "path": "/account",
    "component": "layouts/RouteView",
    "route": "1",
    "hidden": true,
    "children": [
      {
        "path": "/account/center",
        "component": "account/center/Index",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "Index",
          "title": "个人中心"
        },
        "name": "account-center",
        "id": "d86f58e7ab516d3bc6bfb1fe10585f97"
      },
      {
        "path": "/account/settings/Index",
        "component": "account/settings/Index",
        "route": "1",
        "children": [
          {
            "path": "/account/settings/security",
            "component": "account/settings/Security",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "Security",
              "title": "安全设置"
            },
            "name": "account-settings-security",
            "id": "ec8d607d0156e198b11853760319c646"
          },
          {
            "path": "/account/settings/binding",
            "component": "account/settings/Binding",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "Binding",
              "title": "账户绑定"
            },
            "name": "account-settings-binding",
            "id": "4f66409ef3bbd69c1d80469d6e2a885e"
          },
          {
            "path": "/account/settings/notification",
            "component": "account/settings/Notification",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "Notification",
              "title": "新消息通知"
            },
            "name": "account-settings-notification",
            "id": "fedfbf4420536cacc0218557d263dfea"
          },
          {
            "path": "/account/settings/BaseSetting",
            "component": "account/settings/BaseSetting",
            "route": "1",
            "hidden": true,
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "account-settings-base",
              "title": "基本设置"
            },
            "name": "account-settings-base",
            "id": "1367a93f2c410b169faa7abcbad2f77c"
          },
          {
            "path": "/account/settings/custom",
            "component": "account/settings/Custom",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "componentName": "Custom",
              "title": "个性化设置"
            },
            "name": "account-settings-custom",
            "id": "882a73768cfd7f78f3a37584f7299656"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "Index",
          "title": "个人设置"
        },
        "name": "account-settings-Index",
        "id": "6e73eb3c26099c191bf03852ee1310a1",
        "alwaysShow": true
      },
      {
        "path": "/dashboard/workplace",
        "component": "dashboard/Workplace",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "componentName": "Workplace",
          "title": "工作台"
        },
        "name": "dashboard-workplace",
        "id": "8fb8172747a78756c11916216b8b8066"
      }
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "user",
      "componentName": "RouteView",
      "title": "个人页"
    },
    "name": "account",
    "id": "717f6bee46f44a3897eca9abd6e2ec44"
  }
]

export default menus;