<!-- NavBar.vue: This component seems to handle the navigation bar at the top of your application. -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#">Billing App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="#" @click="NavClick('Billing')" :class="[{ active: isActive('Billing') }, 'nav-link']">Billing</a>
        </li>
        <li class="nav-item">
          <a href="#" @click="NavClick('AddProduct')" :class="[{ active: isActive('AddProduct') }, 'nav-link']">Add Product</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['a'],
  methods: {
    NavClick(name) {
      this.$emit('evnt', name);
    },
    isActive(page) {
      return this.a === page
    },
  },
};
</script>

<style>
.navbar {
  padding: 10px 50px;
}

.navbar-brand {
  color: #333;
  font-weight: bold;
}

.nav-link {
  color: #333;
  font-weight: bold;
}

.nav-link:hover {
  color: #000;
}
</style>
