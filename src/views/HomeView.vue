<template>
  <Codemirror
      v-model:value="code"
      :options="cmOptions"
      border
      placeholder="测试 placeholder"
      :height="500"
      @change="onChange"
  />
</template>

<script>
import Codemirror from "codemirror-editor-vue3";

// base style
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css.js";
// language
import "codemirror/mode/sql/sql.js";
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/theme/monokai.css';

import { ref } from "vue";
export default {
  components: { Codemirror },
  setup() {
    const code = ref(`
select * from aaa
where a=1 and x = '三个男人'
and create_time between '2015-01-01T00:00:00+0800' and '2016-01-01T00:00:00+0800'
and process_id > 1 order by id desc limit 100,10
`);

    return {
      code,
      cmOptions: {
        mode: "text/x-mysql", // 语言模式
        theme: "monokai", // 主题
        lineNumbers: true, // 显示行号
        smartIndent: true, // 智能缩进
        indentUnit: 4, // 智能缩进单位为4个空格长度
        foldGutter: true, // 启用行槽中的代码折叠
        styleActiveLine: true, // 显示选中行的样式
        extraKeys: {"Ctrl": "autocomplete"},   //自动提示配置
      },
      onChange(val, cm) {},
    };
  },
};
</script>

<style>
.codemirror-container {
  font-size: 20px;
}
.codemirror-container.width-auto {
  width: 50%;
}

</style>