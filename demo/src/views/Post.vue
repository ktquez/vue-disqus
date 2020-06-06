<template>
  <article class="container">
    <h1>
      {{ post.title }}
    </h1>

    <section>
      <p>
        {{ post.body }}
      </p>
    </section>

    <section v-show="$route.params.id === '3'">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis neque et tellus efficitur sagittis. Praesent volutpat dui sed vehicula tristique. Donec magna augue, scelerisque varius arcu et, ullamcorper faucibus arcu. Nam ut nisi tortor. Pellentesque vestibulum varius nisl, non ullamcorper leo laoreet id. Donec quis molestie purus. Nullam dignissim dignissim ex, id sollicitudin justo venenatis porttitor.
    </p>
    <p>
      Pellentesque eget nisl scelerisque, ullamcorper eros iaculis, maximus risus. Suspendisse potenti. Maecenas id augue lacus. Integer eget imperdiet enim, vitae vehicula mi. Fusce sit amet facilisis neque. Maecenas condimentum at lectus eget rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
    </p>
    <p>
      Ut hendrerit blandit justo, placerat suscipit odio porta id. Nulla blandit placerat elit, ac accumsan tortor interdum eu. Aenean id est non arcu aliquet ultrices ut sit amet nisi. Sed nibh augue, ultricies aliquam augue et, tempus finibus lacus. Integer quis risus sed enim malesuada sollicitudin eu ut metus. In vel consectetur nunc. Curabitur fermentum feugiat gravida. In hac habitasse platea dictumst. Fusce quis vulputate sem, sit amet euismod metus. Integer sit amet pretium leo. Nunc at pellentesque sapien, at gravida lorem. Pellentesque gravida leo lectus, et facilisis nulla finibus in. Donec nec bibendum justo. Nulla ac aliquet nibh, a volutpat sapien.
    </p>
    <p>
      Ut elementum, metus id viverra malesuada, augue arcu ullamcorper urna, et varius neque mi sed lorem. Nam at mauris eu nibh suscipit cursus sit amet sed ipsum. Proin massa ligula, placerat vitae felis nec, finibus eleifend dui. Sed sodales velit aliquam nisi vehicula vehicula. Quisque id efficitur nibh, eu tempus felis. Donec aliquam imperdiet nisl. Pellentesque vel nulla a arcu elementum semper. Cras ut luctus diam. Nam interdum risus tempus massa ultrices, eu tincidunt metus pharetra. Ut blandit massa metus, ut fringilla tellus ultrices vel. Pellentesque non viverra est. Phasellus gravida ipsum eu tempus viverra. Duis sagittis volutpat auctor. Duis vehicula ipsum at enim ultrices semper. Donec consequat convallis quam, nec finibus leo dictum ac. Sed feugiat aliquam ornare.
    </p>
    <p>
      Donec lacus enim, dictum at tempus eu, tristique nec est. Nullam porta leo et vestibulum rhoncus. In hac habitasse platea dictumst. In sodales ex nec turpis ultrices pretium. Suspendisse dapibus sem id laoreet pulvinar. Etiam elementum tellus eget lacus consectetur dignissim. Cras convallis quam nec pretium porta. Nam pretium aliquam eros. Donec dui orci, eleifend vitae dictum eget, finibus ut nunc. Maecenas quis lectus at neque luctus pretium. Curabitur tempus lacinia dictum. Quisque accumsan ex quis arcu sagittis sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla justo dui, malesuada eget felis ut, consectetur facilisis leo. Donec eget dictum purus.
    </p>
    <p>
      Etiam non tortor at neque fermentum iaculis. Aenean eget volutpat augue. Suspendisse eu ligula id tortor facilisis venenatis at vitae nisi. Aenean porta porta enim eget auctor. Nam pretium sed sapien at aliquam. Aenean eleifend libero nec hendrerit blandit. Donec ac lectus aliquet, volutpat velit bibendum, ultricies lacus. Mauris ut nunc ut purus mattis porta. Donec feugiat libero ac tellus fermentum, eget sagittis sapien vehicula.
    </p>
    <p>
      Vestibulum eget pulvinar nulla, cursus ullamcorper ex. Quisque et odio et enim dignissim ornare eu vitae nibh. Nam sed tincidunt dui, in dictum enim. Nam sodales enim id vestibulum sagittis. Nulla facilisi. Vestibulum commodo est et nisi cursus, et tincidunt massa iaculis. Pellentesque finibus mattis nibh, nec eleifend lacus viverra sit amet. Donec ligula leo, sagittis nec odio quis, ultrices scelerisque ante. Duis at iaculis mauris. Maecenas feugiat imperdiet faucibus. Donec a mi metus. Nam non turpis elementum, ornare nisi vitae, pulvinar velit.
    </p>
    <p>
      Sed faucibus nunc arcu, eget volutpat lorem fermentum in. Nulla feugiat massa nisl, quis venenatis magna vulputate non. Donec a porta orci. Duis eleifend at diam vitae consequat. Proin volutpat vehicula justo, et pretium felis lacinia quis. Mauris nec tristique arcu, eu sagittis ante. Mauris vulputate massa sit amet nunc egestas mollis. Mauris volutpat vel risus id volutpat. Donec libero ante, laoreet vitae ornare vel, viverra non justo.
    </p>
    <p>
      Phasellus ullamcorper arcu ac risus mollis consequat. Sed eu malesuada eros, vitae sodales odio. Curabitur tincidunt sapien sed tellus aliquam, porta dapibus ligula elementum. Sed turpis eros, ultrices sit amet metus cursus, tempor tincidunt metus. Proin eget justo non nisi accumsan volutpat. Phasellus ligula nibh, gravida vitae neque et, rhoncus laoreet turpis. Phasellus luctus volutpat nisi, non placerat dolor lobortis eu. Donec euismod ipsum sed interdum rhoncus. Pellentesque rhoncus nibh sit amet placerat commodo. Quisque ac rutrum turpis. Donec tincidunt diam ut porta feugiat.
    </p>
    <p>
      Suspendisse justo turpis, rutrum vel velit eu, porta finibus augue. Morbi maximus sodales purus. Nulla sed laoreet sapien. Proin placerat ex sit amet neque aliquam gravida. Aenean finibus cursus turpis ut luctus. Suspendisse vitae gravida odio. Vestibulum elementum ex nec velit commodo tempor. Nulla a arcu mauris.
    </p>
    </section>

    <hr>

    <section>
      <button @click="lang = (lang === 'en') ? 'it' : 'en'">Change disqus to {{ lang === 'en' ? 'ITALIAN' : 'ENGLISH' }} language</button>
    </section>

    <hr>

    <section>
      <VueDisqus shortname="ktquez" :lang="lang" />
    </section>
  </article>
</template>

<script>
import VueDisqus from '../../vue-disqus'

export default {
  name: 'Post',

  props: ['post'],

  components: {
    VueDisqus
  },

  data: () => ({
    lang: 'en'
  })
}
</script>
