module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "semi": 0,  // 语句可以不需要分号结尾
    "space-before-function-paren": 0, // 函数定义时括号前面不要有空格
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "key-spacing": [1, {  // 对象字面量中冒号的前后空格
      "beforeColon": false,
      "afterColon": true
    }],
    'space-before-function-paren': 0, // 强制在 function的左括号之前使用一致的空格
    "quotes": [0, "single"], // 引号类型
    'indent': 'off', //新加了这句缩进为0
    'vue/script-indent': [ //新加了这句脚本缩进2空格
      '0',
      4,
      {
        'baseIndent': 1
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
