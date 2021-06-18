<template>
  <div class="container">
    交易统计
    <div class="search-head">
      <div class="left">
        <el-button type="primary">新建线索</el-button>
        <el-button>导入线索</el-button>
        <el-button icon="el-icon-download" />
      </div>
      <div class="right">
        <el-select v-model="typeValue" clearable :placeholder="options[0].label">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <div class="search">
          <el-input v-model="searchValue" placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search" />
          </el-input>
        </div>
        <div class="dater">
          <el-date-picker
            v-model="dater"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']"
          />
        </div>
      </div>
    </div>
    <div class="search-label">
      <div class="labels">
        <span>常用标签：</span>
        <div class="checkboxs">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="参与返款" />
            <el-checkbox label="支持赔付" />
            <el-checkbox label="反款待联系" />
            <el-checkbox label="鲁班线索" />
            <el-checkbox label="赠款活动" />
          </el-checkbox-group>
        </div>
      </div>
      <div class="setting">
        设置<icon class="el-icon-setting" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

  components: {},
  data() {
    return {
      searchValue: '', // 搜索内容
      typeValue: '', // 下拉菜单值
      options: [
        { value: 1, label: '按姓名' },
        { value: 2, label: '按QQ号' },
        { value: 3, label: '按邮箱' },
        { value: 4, label: '按详细地址' }
      ],
      dater: null, // 日期
      checkList: [] // 标签
    }
  },

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.container{
  .search-head{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    .right{
      display: flex;
      .saerch{
        ::v-deep{
          width: 200px;
        }
      }
      .dater{
        margin-left: 10px;
      }
    }
  }
  .search-label{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    .labels{
      display: flex;
    }
    .setting{
      color: #0672ff;
    }
  }
}
</style>
