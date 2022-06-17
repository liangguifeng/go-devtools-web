<template>
  <div class="content-box">
    <Codemirror
        v-model:value="code"
        :options="cmOptions"
        border
        placeholder="请输入"
        @change="onChange"
    />
    <Codemirror
        v-model:value="code1"
        :options="cmOptions"
        border
        placeholder="请输入"
    />
  </div>

</template>

<script>
import Codemirror from "codemirror-editor-vue3";
import requests from "@/api";

// base style
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css.js";
// language
import "codemirror/mode/sql/sql.js";
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/theme/monokai.css';

export default {
  components: {Codemirror},
  data() {
    return {
      code: '',
      code1: '',
      cmOptions: {
        mode: "text/x-mysql", // 语言模式
        theme: "monokai", // 主题
        cursorHeight: 0.85, // 光标的高度
        lineNumbers: true, // 显示行号
        smartIndent: true, // 智能缩进
        indentUnit: 4, // 智能缩进单位为4个空格长度
        foldGutter: true, // 启用行槽中的代码折叠
        styleActiveLine: true, // 显示选中行的样式
        extraKeys: {"Tab": "autocomplete"},   //自动提示配置
      },
    }
  },
  // setup() {
  //   let code = "";
  //   let code1 = "222";
  //
  //   return {
  //     code,
  //     code1,
  //     cmOptions: {
  //       mode: "text/x-mysql", // 语言模式
  //       theme: "monokai", // 主题
  //       lineNumbers: true, // 显示行号
  //       smartIndent: true, // 智能缩进
  //       indentUnit: 4, // 智能缩进单位为4个空格长度
  //       foldGutter: true, // 启用行槽中的代码折叠
  //       styleActiveLine: true, // 显示选中行的样式
  //       extraKeys: {"Tab": "autocomplete"},   //自动提示配置
  //     },
  //     onChange(val, cm) {
  //       requests.post({
  //         url: '/api/v1/tools/sql_to_gorm',
  //         data: {
  //           ddl: val
  //         }
  //       }).then(res => {
  //         code1.value = res.data
  //       }).catch(err => {
  //         console.log(err)
  //       })
  //     },
  //   };
  // },
  mounted() {

  },
  methods: {
    onChange(val, cm) {
      requests.post({
        url: '/api/v1/tools/sql_to_gorm',
        data: {
          ddl: val
        }
      }).then(res => {
        this.code1 = res.data
        this.cmOptions.mode = 'text/x-go'
      }).catch(err => {
        console.log(err)
      })
    },
  }
};
</script>

<style>
.codemirror-container {
  font-size: 20px;
}
.content-box {
  display: flex;
}
.codemirror-container.width-auto {
  /*width: 50%;*/
}
.CodeMirror {
  /*height: auto !important;*/
  height: calc(100vh - 78px) !important;

  /*min-height: 100px;*/
}

.CodeMirror-scroll {
  height: calc(100vh - 78px) !important;
  min-height: 100px;
  /*overflow-y: hidden;*/
  /*overflow-x: auto;*/
}
</style>