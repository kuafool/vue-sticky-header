<template>
  <header :class="['component-sticky-header', {'is-fixed': isFixed}]">
    <div ref="header" class="sticky-header-wrapper">
      <slot />
    </div>
    <div class="sticky-header-bottom" :style="bottomStyle"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
      height: 0
    };
  },
  computed: {
    bottomStyle() {
      return {
        paddingTop: this.isFixed ? this.height + "px" : 0
      };
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const self = this;
      this.height = this.$refs.header.offsetHeight;
      if (window.pageYOffset > this.$$refs.header.offsetTop) {
        if (this.isFixed === false) {
          this.isFixed === true;
          this.$emit("change", this.isFixed);
        }
      } else {
        if (this.isFixed === true) {
          this.isFixed === false;
          this.$emit("change", this.isFixed);
        }
      }
    }
  }
};
</script>

<style lang="scss">
.component-sticky-header {
  &.is-fixed {
    .sticky-header-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
