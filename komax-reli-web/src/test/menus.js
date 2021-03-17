const menus = [
  {
    "redirect": "/dashboard/home",
    "path": "/",
    "component": "dashboard/Screen",
    "route": "1",
    "meta": {
      "keepAlive": true,
      "internalOrExternal": true,
      "icon": "home",
      "componentName": "Screen",
      "title": "首页"
    },
    "name": "dashboard-home",
    "id": "9502685863ab87f0ad1134142788a385"
  },

  {
    "redirect": null,
    "path": "/dashboard",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/dashboard/home",
        "component": "dashboard/Screen",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": true,
          "componentName": "Screen",
          "title": "换热站总览"
        },
        "name": "dashboard-overview",
        "id": "1170592628746878978"
      },
      {
        "path": "/dashboard/postionscreen",
        "component": "dashboard/PostionScreen",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "PostionScreen",
          "title": "定点监控"
        },
        "name": "dashboard-PostionScreen",
        "id": "1170592628746878978"
      },
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "dashboard",
      "componentName": "RouteView",
      "title": "监控大屏"
    },
    "name": "dashboard-bigdata",
    "id": "d7d6e2e4e2934f2c9385a623fd98c6f3"
  },


  {
    "path": "/heat",
    "component": "layouts/RouteView",
    "route": "1",
    "meta": {
      "keepAlive": true,
      "internalOrExternal": false,
      "componentName": "RouteView",
      "icon": "global",
      "title": "换热站监控"
    },
    "name": "heat",
    "children": [
      {
        "path": "/heat/overview",
        "component": "heat/Overview",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Overview",
          "title": "热点总览"
        },
        "name": "heat-overview",
        "id": "1170592628746878978"
      },
      {
        "path": "/heat/gismap",
        "component": "heat/GisMap",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "GisMap",
          "title": "热点GIS"
        },
        "name": "heat-gismap",
        "id": "1170592628746878978"
      },
      {
        "path": "/heat/runmoniter",
        "component": "heat/RunMoniter",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "RunMoniter",
          "title": "运行监控"
        },
        "name": "heat-runmoniter",
        "id": "1170592628746878978"
      },
    ],
    "id": "1170592628746878978"
  },



  {
    "path": "/twonet",
    "component": "layouts/RouteView",
    "route": "1",
    "meta": {
      "keepAlive": true,
      "internalOrExternal": false,
      "componentName": "RouteView",
      "icon": "control",
      "title": "二网监控"
    },
    "name": "twonet",
    "children": [
      {
        "path": "/twonet/scondarypipe",
        "component": "twonet/SecondaryPipe",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "SecondaryPipe",
          "title": "二级管网"
        },
        "name": "two-scondarypipe",
        "id": "1170592628746878978"
      },
      {
        "path": "/twonet/edgecontrol",
        "component": "twonet/EdgeControl",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "EdgeControl",
          "title": "边缘控制器管理"
        },
        "name": "two-EdgeControl",
        "id": "1170592628746878978"
      },
      {
        "path": "/twonet/compare",
        "component": "twonet/Compare",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Compare",
          "title": "二网对比分析"
        },
        "name": "two-Compare",
        "id": "1170592628746878978"
      },
    ],
    "id": "1170592628746878978"
  },

  {
    "redirect": null,
    "path": "/house",
    "component": "layouts/RouteView",
    "route": "1",
    "meta": {
      "keepAlive": true,
      "internalOrExternal": false,
      "icon": "eye-invisible",
      "title": "户内监控",
      "componentName": "RouteView",
    },
    "name": 'house',
    "children": [
      {
        "path": "/house/overview",
        "component": "house/Overview",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Overview",
          "title": "小区概览"
        },
        "name": "house-overview",
        "id": "1170592628746878978"
      },
      {
        "path": "/house/gismap",
        "component": "house/GisMap",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "GisMap",
          "title": "小区GIS"
        },
        "name": "house-gismap",
        "id": "1170592628746878978"
      },
      {
        "path": "/house/rooms",
        "component": "house/Rooms",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Rooms",
          "title": "房间列表"
        },
        "name": "house-rooms",
        "id": "1170592628746878978"
      },
      {
        "path": "/house/housecompare",
        "component": "house/HouseCompare",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "HouseCompare",
          "title": "户内对比分析"
        },
        "name": "house-housecompare",
        "id": "1170592628746878978"
      },
    ],
    "id": 11111,
  },
  {
    "redirect": null,
    "path": "/report",
    "component": "layouts/RouteView",
    "route": "1",
    "meta": {
      "keepAlive": true,
      "internalOrExternal": false,
      "icon": "cloud",
      "title": "报表分析",
      "componentName": "RouteView",
    },
    "name": "report", // will redirect
    "children": [
      {
        "path": "/report/energystatistics",
        "component": "report/EnergyStatistics",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "EnergyStatistics",
          "title": "能耗统计"
        },
        "name": "report-energystatistics",
        "id": "1170592628746878978"
      },
      {
        "path": "/report/history",
        "component": "report/History",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "History",
          "title": "历史记录"
        },
        "name": "report-history",
        "id": "1170592628746878978"
      },
      {
        "path": "/report/warning",
        "component": "report/Warning",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Warning",
          "title": "报警记录"
        },
        "name": "report-warning",
        "id": "1170592628746878978"
      },
    ]
  },


  {
    "redirect": null,
    "path": "/settings",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/settings/station",
        "component": "settings/Station",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Station",
          "title": "换热站配置"
        },
        "name": "settings-station",
        "id": "1170592628746878978"
      },
      {
        "path": "/settings/zones",
        "component": "settings/Zones",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Zones",
          "title": "小区配置"
        },
        "name": "settings-zones",
        "id": "1170592628746878978"
      },
      {
        "path": "/settings/houses",
        "component": "settings/Houses",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Houses",
          "title": "房间配置"
        },
        "name": "settings-houses",
        "id": "1170592628746878978"
      },
      {
        "path": "/settings/equipments",
        "component": "settings/Equipments",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Equipments",
          "title": "设备配置"
        },
        "name": "settings-equipments",
        "id": "1170592628746878978"
      },
      {
        "path": "/settings/equipmentmodel",
        "component": "settings/EquipmentModel",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "EquipmentModel",
          "title": "设备型号"
        },
        "name": "settings-equipmentmodel",
        "id": "1170592628746878978"
      },
      {
        "path": "/settings/heatingtime",
        "component": "settings/HeatingTime",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "HeatingTime",
          "title": "供暖季设置"
        },
        "name": "settings-heatingtime",
        "id": "1170592628746878978"
      },
      {
        "path": "/settings/zonealarmregular",
        "component": "settings/ZoneAlarmRegular",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "ZoneAlarmRegular",
          "title": "小区报警规则"
        },
        "name": "settings-zonealarmregular",
        "id": "1170592628746878978"
      },
      {
        "path": "/settings/alarmnotice",
        "component": "settings/AlarmNotice",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "AlarmNotice",
          "title": "报警通知"
        },
        "name": "settings-alarmnotice",
        "id": "1170592628746878978"
      },
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "desktop",
      "componentName": "RouteView",
      "title": "平台配置"
    },
    "name": "settings",
    "id": "d7d6e2e4e2934f2c9385a623fd98c6f3"
  },
  {
    "redirect": null,
    "path": "/ops",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/ops/overview",
        "component": "ops/Overview",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Overview",
          "title": "运维概览"
        },
        "name": "ops-overview",
        "id": "1170592628746878978"
      },
      {
        "path": "/ops/inspectplan",
        "component": "ops/InspectPlan",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "InspectPlan",
          "title": "巡检计划"
        },
        "name": "ops-inspectplan",
        "id": "1170592628746878978"
      },
      {
        "path": "/ops/inspecttask",
        "component": "ops/InspectTask",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "InspectTask",
          "title": "巡检任务"
        },
        "name": "ops-inspecttask",
        "id": "1170592628746878978"
      },
      {
        "path": "/ops/ticket",
        "component": "ops/Ticket",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Ticket",
          "title": "工单管理"
        },
        "name": "ops-ticket",
        "id": "1170592628746878978"
      },
      {
        "path": "/ops/operations",
        "component": "ops/Operations",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Operations",
          "title": "运维人员管理"
        },
        "name": "ops-operations",
        "id": "1170592628746878978"
      },
      {
        "path": "/ops/taskstatistics",
        "component": "ops/TaskStatistics",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "TaskStatistics",
          "title": "工作量统计"
        },
        "name": "ops-taskstatistics",
        "id": "1170592628746878978"
      },
      {
        "path": "/ops/message",
        "component": "ops/Message",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "Message",
          "title": "消息推送"
        },
        "name": "ops-message",
        "id": "1170592628746878978"
      },
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "build",
      "componentName": "RouteView",
      "title": "运维管理"
    },
    "name": "ops",
    "id": "d7d6e2e4e2934f2c9385a623fd98c6f3"
  },

  {
    "redirect": null,
    "path": "/pm/projects",
    "component": "pm/Projects",
    "route": "1",
    "meta": {
      "keepAlive": true,
      "internalOrExternal": false,
      "icon": "project",
      "title": "项目管理",
      "componentName": "Projects",
    },
    "name": "pm-projects", // will redirect
  },
  {
    "redirect": null,
    "path": "/pm/users",
    "component": "pm/Users",
    "route": "1",
    "meta": {
      "icon": "user",
      "title": "用户管理",
      "keepAlive": true,
      "internalOrExternal": false,
      "componentName": "Users",
    },
    "name": "pm-users",
  },
  {
    "redirect": null,
    "path": "/modules/message/sysMessageList",
    "component": "modules/message/SysMessageList",
    "route": "1",
    "meta": {
      "icon": "message",
      "title": "留言管理",
      "componentName": "SysMessageList",
    },
    "name": "modules-message-sysMessageList",
  },

  {
    "redirect": null,
    "path": "/debug",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/debug/toBehots",
        "component": "debugInHand/ToBehots",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "ToBehots",
          "title": "换热站列表"
        },
        "name": "debug-toBehots",
        "id": "1170592628746878978"
      },
      {
        "path": "/debug/sameBranch",
        "component": "debugInHand/SameBranch",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "SameBranch",
          "title": "同一分支对比"
        },
        "name": "debug-sameBranch",
        "id": "1170592628746878978"
      },
      {
        "path": "/debug/diffBranch",
        "component": "debugInHand/DiffBranch",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "DiffBranch",
          "title": "不同分支对比"
        },
        "name": "debug-diffBranch",
        "id": "1170592628746878978"
      },
      {
        "path": "/debug/reports",
        "component": "debugInHand/Reports",
        "route": "1",
        "meta": {
          "keepAlive": true,
          "internalOrExternal": false,
          "componentName": "reports",
          "title": "系统诊断报告"
        },
        "name": "debug-reports",
        "id": "1170592628746878978"
      },
    ],
    "meta": {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "laptop",
      "componentName": "RouteView",
      "title": "手持调试仪"
    },
    "name": "debug",
    "id": "d7d6e2e4e2934f2c9385a623fd98c6f3"
  },

  {
    "redirect": null,
    "path": "/isystem",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
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