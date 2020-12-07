export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  "column": [
	  {
      "type": "input",
      "label": "主键",
      "prop": "id"
    },	  {
      "type": "input",
      "label": "用户名",
      "prop": "username"
    },	  {
      "type": "input",
      "label": "密码",
      "prop": "password"
    },	  {
      "type": "input",
      "label": "角色(admin:超级管理员",
      "prop": "role"
    },	  {
      "type": "input",
      "label": "电话号码",
      "prop": "phone"
    },	  {
      "type": "input",
      "label": "创建时间",
      "prop": "createTime"
    },	  {
      "type": "input",
      "label": "修改时间",
      "prop": "updateTime"
    },	  {
      "type": "input",
      "label": "逻辑删除标志(1:删除，0：未删除",
      "prop": "deleteFlag"
    }  ]
}
