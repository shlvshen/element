<template>
  <transition name="el-message-fade">
      <!-- :class=""     -->
    <div
      class="el-message"
      :class="[ type, customClass ]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer">
      <i class="el-message__status iconfont" v-if="!iconClass" v-html="typeIcon" ></i>
      <!-- <img class="el-message__img" :src="typeImg" alt="" v-if="!iconClass"> -->
      <div class="el-message__group" :class="{ 'is-with-icon': iconClass }">
        <slot><p><i class="el-message__icon" :class="iconClass" v-if="iconClass"></i>{{ message }}</p></slot>
        <div v-if="showClose" class="el-message__closeBtn el-icon-close" @click="close"></div>
      </div>
    </div>
  </transition>
</template>
<script type="text/babel">
  let typeMap = {
    success: '&#xe77f;',
    info: '&#xe659;',
    warning: '&#xe65a;',
    danger: '&#xe695;'
  };

  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: '',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        timer: null
      };
    },

    computed: {
      typeIcon() {
        return typeMap[this.type];
        // return require(`../assets/${ this.type }.svg`);
      }
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
    },

    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },

      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      }
    },

    mounted() {
      this.startTimer();
    }
  };
</script>

<style type="scss">
  @font-face {
    font-family: 'iconfont';  /* project id 313336 */
    src: url('//at.alicdn.com/t/font_313336_5ilrj33g5b2ihpvi.eot');
    src: url('//at.alicdn.com/t/font_313336_5ilrj33g5b2ihpvi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_313336_5ilrj33g5b2ihpvi.woff') format('woff'),
    url('//at.alicdn.com/t/font_313336_5ilrj33g5b2ihpvi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_313336_5ilrj33g5b2ihpvi.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    /* font-size: 18px; */
  }
</style>
