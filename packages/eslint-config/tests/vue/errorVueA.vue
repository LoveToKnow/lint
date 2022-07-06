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
  data() {
    return {
      b: 'hello',
    }
  },
  name: 'Test-Component',
}
</script>
