<template>
  <App>
    <Error></Error>
  </App>
</template>

<script lang="ts">
import App from '@/components/App';
import Error from '../components/Error';

// member-delimiter-style
interface Foo {
  name: string,
  greet(): void,
}

// no-empty-interface
interface Empty {}

// no-inferrable-types
const a: boolean = true;

// no-misused-new
class C {
  new(): C;
}

export default {
  components: {
    App,
    Error,
  },
  methods: {
    greet(): Interface {
      return {
        menubar: 123,
        other: 123,
      };
    },
  },
};
</script>
