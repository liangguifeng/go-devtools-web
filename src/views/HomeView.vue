<template>
  <div class="button-box">
    <div class="logo-img-view">
      <a href="https://plugin.csdn.net/?from=plugin_json_full" target="_blank">
        <img alt="" src="../assets/logo.png">
      </a>
    </div>
    <el-button @click="sql2gorm()">sql转gorm</el-button>
    <el-button @click="sql2goZero()">sql转go-zero</el-button>
    <el-button @click="sql2ent()">sql转ent</el-button>
    <el-button @click="yaml2goStruct()">yaml转go struct</el-button>
    <el-button @click="xml2Json()">xml转json</el-button>
    <el-button @click="sql2Es()">sql转es</el-button>
  </div>
  <div class="content-box">
    <Codemirror
        v-model:value="code"
        :options="cmOptions"
        border
        placeholder="请输入"
    />
    <Codemirror
        v-model:value="code1"
        :options="cmOptions1"
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
        lineWrapping: false, // 自动换行
        extraKeys: {"Tab": "autocomplete"},   //自动提示配置
      },
      cmOptions1: {
        mode: "text/x-mysql", // 语言模式
        theme: "monokai", // 主题
        cursorHeight: 0.85, // 光标的高度
        lineNumbers: true, // 显示行号
        smartIndent: true, // 智能缩进
        indentUnit: 4, // 智能缩进单位为4个空格长度
        foldGutter: true, // 启用行槽中的代码折叠
        styleActiveLine: true, // 显示选中行的样式
        lineWrapping: false, // 自动换行
        extraKeys: {"Tab": "autocomplete"},   //自动提示配置
      },
    }
  },
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
    sql2gorm(){
      this.cmOptions.mode = 'text/x-mysql'
      requests.post({
        url: '/api/v1/tools/sql_to_gorm',
        data: {
          ddl: this.code
        }
      }).then(res => {
        this.cmOptions1.mode = 'text/x-mysql'
        this.code1 = res.data
      }).catch(err => {
        this.$notify.error({
          title: '错误',
          message: '转写错误，请检查输入是否正确！'
        });
      })
    },
    sql2goZero(){
      this.cmOptions.mode = 'text/x-mysql'
      requests.post({
        url: '/api/v1/tools/sql_to_go_zero',
        data: {
          ddl: this.code
        }
      }).then(res => {
        this.cmOptions1.mode = 'text/x-mysql'
        this.code1 = res.data
      }).catch(err => {
        this.$notify.error({
          title: '错误',
          message: '转写错误，请检查输入是否正确！'
        });
      })
    },
    sql2ent(){
      this.cmOptions.mode = 'text/x-mysql'
      requests.post({
        url: '/api/v1/tools/sql_to_ent',
        data: {
          ddl: this.code
        }
      }).then(res => {
        this.cmOptions1.mode = 'text/x-mysql'
        this.code1 = res.data
      }).catch(err => {
        this.$notify.error({
          title: '错误',
          message: '转写错误，请检查输入是否正确！'
        });
      })
    },
    yaml2goStruct(){
      this.cmOptions.mode = 'text/x-mysql'
      requests.post({
        url: '/api/v1/tools/yaml_to_go',
        data: {
          ddl: this.code
        }
      }).then(res => {
        this.cmOptions1.mode = 'text/x-mysql'
        this.code1 = res.data
      }).catch(err => {
        this.$notify.error({
          title: '错误',
          message: '转写错误，请检查输入是否正确！'
        });
      })
    },
    xml2Json(){
      this.cmOptions.mode = 'text/x-mysql'
      requests.post({
        url: '/api/v1/tools/xml_to_json',
        data: {
          ddl: this.code
        }
      }).then(res => {
        this.cmOptions1.mode = 'text/x-mysql'
        this.code1 = res.data
      }).catch(err => {
        this.$notify.error({
          title: '错误',
          message: '转写错误，请检查输入是否正确！'
        });
      })
    },
    sql2Es(){
      this.cmOptions.mode = 'text/x-mysql'
      requests.post({
        url: '/api/v1/tools/sql_to_es',
        data: {
          ddl: this.code
        }
      }).then(res => {
        this.cmOptions1.mode = 'text/x-mysql'
        this.code1 = res.data
      }).catch(err => {
        this.$notify.error({
          title: '错误',
          message: '转写错误，请检查输入是否正确！'
        });
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

.button-box {
  display: flex;
  padding: 8px;
}

.CodeMirror {
  height: calc(100vh - 51px) !important;

}

.CodeMirror-scroll {
  height: calc(100vh - 51px) !important;
  min-height: 100px;
}

.logo-img-view {
  margin-right: 6px;
  font-family: system-ui, "PingFang SC", STHeiti, sans-serif;
  font-size: 75%;
}

.logo-img-view img {
  width: 30px;
}
</style>