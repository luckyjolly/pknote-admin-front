<template>
  <el-container class="full-height">
    <!-- 左侧菜单 -->
    <el-aside class="full-height" width="200">
      <Menu></Menu>
    </el-aside>

    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header class="flex main-between main-padding-l" height="56px">
        <div v-show="isMenuRective" class="toggle-flod flex cross-center" @click="toggleFold">
          <span>
            <i class="el-icon-s-unfold"></i>
          </span>
        </div>
        <div class="flex cross-center seach-ipt-wrap">
          <el-input v-model="searchStr" placeholder="搜索">
            <template #prefix>
              <i class="el-input__icon el-icon-search"></i>
            </template>
          </el-input>
        </div>
        <div class="account-btn-wrap flex cross-center">
          <a href="javascript:;" class="home-btn"><i class="el-icon-house"></i></a>
          <a href="javascript:;" class="notification-btn"><i class="el-icon-bell"></i></a>
          <p class="pipe flex cross-center">
            <span class="header-img-wrap flex">
              <el-image :src="''" class="flex grow">
                <template #error>
                  <div class="flex h-v-center grow">
                    <i class="el-icon-picture-outline placeholder-img-icon"></i>
                  </div>
                </template>
              </el-image>
            </span>
            <el-popover>
              <template #reference>
                <a href="javascript:;" class="user-btn flex cross-center">admin</a>
              </template>
              <p class="user-operate-btn flex"><el-link href="javascript:;">账户主页</el-link></p>
              <p class="user-operate-btn flex"><el-link href="javascript:;">退出登录</el-link></p>
            </el-popover>
          </p>
          <a href="javascript:;" class="exit-btn">退出<i class="el-icon-switch-button"></i></a>
        </div>
      </el-header>
      <el-main>
        <el-scrollbar>
          <div class="main-content column-flex">
            <!-- 子页面 -->
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import Menu from '@/components/menu.vue'
  import menu from '@/utils/menu'
  export default defineComponent({
    components: {
      Menu
    },
    setup() {
      let { isMenuRective, toggleFold } = menu()

      const searchStr = ref('') // 搜索
      return {
        searchStr,
        isMenuRective,
        toggleFold
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/style/mixin.scss';

  :deep(.el-container) {
    background-color: #f5f5f5;
  }

  :deep(.el-aside) {
    background-color: #273043;
  }

  :deep(.el-main) {
    padding: 0;
  }

  :deep(header) {
    background-color: #fff;
    padding-right: 0;
  }

  .flex {
    display: flex;
  }

  .main-padding-l {
    padding-left: 64px;
  }

  :deep(.el-header) {
    position: relative;
  }

  .toggle-flod {
    height: 100%;
    color: #666;
    font-size: 22px;
    padding: 0 10px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .el-icon-search {
    font-size: 18px;
    color: #666;
  }

  .seach-ipt-wrap {
    :deep(.el-input__inner) {
      @include placeholder {
        color: #ccc;
      }

      border: none;
      font-size: 14px;
      margin-left: 7px;

      &:focus-visible,
      &:focus {
        outline: none;
      }
    }
  }

  .account-btn-wrap {
    .pipe {
      position: relative;

      &::before,
      &::after {
        content: '';
        width: 1px;
        height: 16px;
        background-color: #2d2d2d;
        position: absolute;
      }

      &::before {
        left: -21px;
      }

      &::after {
        right: 21px;
      }
    }

    .header-img-wrap {
      width: 31px;
      height: 31px;
      border-radius: 50%;
      background-color: #f5f5f5;
      overflow: hidden;
      margin-right: 10px;

      :deep(.el-image) {
        display: flex;
      }

      .placeholder-img-icon {
        color: #666;
        font-size: 16px;
      }
    }

    a {
      color: #353535;
      margin-right: 42px;
      text-decoration: none;
    }

    i {
      color: inherit;
      font-size: 22px;
    }

    .user-btn {
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border: 5px solid currentColor;
        border-bottom: none;
        border-left-color: transparent;
        border-right-color: transparent;
        margin-left: 10px;
        margin-top: 3px;
      }
    }

    .exit-btn {
      color: #343434;

      i {
        font-size: 14px;
        margin-left: 8px;
      }
    }
  }
  // 会影响到后面子页面的 el-scrollbar__view
  :deep(.el-scrollbar__view) {
    height: 100%;
  }

  .main-content {
    padding: 48px 114px 50px 44px;
    box-sizing: border-box;
    min-height: 100%;
  }

  .user-operate-btn {
    height: 30px;
    text-decoration: none;
    font-size: 14px;
    padding-left: 15px;

    :deep(.el-link) {
      color: #666;
    }
  }
</style>
<style lang="scss">
  // home 页，子页面中使用到的公共样式
  .normal-wrap {
    background-color: #fff;
    border-radius: 8px;
    padding: 0 24px; // 注意：上下间距并不一定一致
  }

  .flex {
    display: flex;
    min-width: 0;
    min-height: 0;
  }

  .column-flex {
    @extend .flex;

    flex-direction: column;
  }

  .grow {
    flex-grow: 1;
  }

  .no-shrink {
    flex-shrink: 0;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .main-between {
    justify-content: space-between;
  }

  .main-center {
    justify-content: center;
  }

  .cross-center {
    align-items: center;
  }

  .cross-end {
    align-items: flex-end;
  }

  .h-v-center {
    justify-content: center;
    align-items: center;
  }
</style>
