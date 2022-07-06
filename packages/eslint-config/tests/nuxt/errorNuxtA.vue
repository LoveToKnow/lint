<script>
export default {
  computed: {
    async a() {
      await this.b()
      return Promise.all([new Promise(() => {})])
    },
  },
  methods: {
    b() {
      return Promise.all([new Promise(() => {})])
    },
  },
  asyncData() {
    this.b()
  },
}
</script>
