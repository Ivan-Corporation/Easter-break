<template>
   <div class="button" @click="destroy" >
     Break me
   </div>
</template>

<script >
import easterBreaker from 'easter-break'


export default {
  name: 'easter-breaker',
   methods: {
    destroy(){
      easterBreaker();
    }
}
}

</script>