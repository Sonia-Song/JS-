<template>
<!-- 当月查验票数 -->
  <div class="tickets-number" style="background-color: greenyellow;" :style="{height:vheight+'px'}"><i
    class="green-square"></i>当月查验票数
    <span class="green">
                    789票&nbsp;&nbsp;99%
                  </span>
    <div style="background-color: black;" :style="{height:vheight+'px'}">442342</div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to'
  export default {
    name: "MounthCheck",
    components: {
      countTo,
    },
    props: ['vheight'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .tickets-number {
    font-family: Helvetica;
    text-align: left;
    color: white;

    span.blue {
      color: #2CFEFD;
    }

    i {
      display: inline-block;
      width: 0.9rem;
      height: 0.9rem;
      margin-right: 0.3rem;
    }

    i.blue-square {
      background-color: #2CFEFD;
    }

    span.green {
      color: #2AFD84;

    }

    i.green-square {
      background-color: #2AFD84;
    }
  }
</style>
