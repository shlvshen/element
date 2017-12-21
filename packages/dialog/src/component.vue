<template>
  <transition name="dialog-fade">
    <div class="el-dialog__wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div
        class="el-dialog"
        :class="[sizeClass, customClass]"
        ref="dialog"
        :style="style"
      >
        <div class="el-dialog__header" ref="header">
          <slot name="title">
            <span class="el-dialog__title">{{title}}</span>
          </slot>
          <button type="button" class="el-dialog__headerbtn" aria-label="Close" 
                  v-if="showClose" @click="handleClose">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-dialog__body" v-if="rendered"><slot></slot></div>
        <div class="el-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from 'thx-knight/src/utils/popup';
import Emitter from 'thx-knight/src/mixins/emitter';

function initData() {
  return {
    isDragging: false,
    dialogOriginLeft: 0,
    dialogOriginTop: 0,
    mouseOriginX: 0,
    mouseOriginY: 0
  };
}

function initDraggable() {
  const wrapper = this.$el;
  const dlg = this.$refs.dialog;
  const header = this.$refs.header;
  header.onmousedown = (ev) => {
    if (!this.draggable || ev.button !== 0) {
      return;
    }

    this.isDragging = true;
    header.classList.add('is-dragging');
    this.dialogOriginLeft = dlg.offsetLeft;
    this.dialogOriginTop = dlg.offsetTop;
    this.mouseOriginX = ev.clientX;
    this.mouseOriginY = ev.clientY;
  };

  wrapper.onmousemove = (ev) => {
    if (!this.draggable || !this.isDragging) {
      return;
    }
    const style = dlg.style;
    style.left = this.dialogOriginLeft + ev.clientX - this.mouseOriginX + 'px';
    style.top = this.dialogOriginTop + ev.clientY - this.mouseOriginY + 'px';
  };

  wrapper.onmouseup = (ev) => {
    if (!this.draggable || !this.isDragging) {
      return;
    }

    this.isDragging = false;
    header.classList.remove('is-dragging');
  };
}

export default {
  name: 'ElDialog',

  mixins: [Popup, Emitter],

  data: initData,

  props: {
    title: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    /** 
     * 是否可以拖动 
     */
    draggable: {
      type: Boolean,
      default: false
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    size: {
      type: String,
      default: 'small'
    },

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: '15%'
    },
    beforeClose: Function
  },

  watch: {
    visible(val) {
      this.$emit('update:visible', val);
      if (val) {
        this.$emit('open');
        this.$el.addEventListener('scroll', this.updatePopper);
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0;
        });
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper);
        this.$emit('close');
      }
    }
  },

  computed: {
    sizeClass() {
      return `el-dialog--${this.size}`;
    },
    style() {
      return this.size === 'full' ? {} : { top: this.top };
    }
  },

  methods: {
    handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('visible-change', false);
      }
    },
    updatePopper() {
      this.broadcast('ElSelectDropdown', 'updatePopper');
      this.broadcast('ElDropdownMenu', 'updatePopper');
    },
    initData,
    initDraggable
  },

  mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
    }

    this.initDraggable();
  }
};
</script>
