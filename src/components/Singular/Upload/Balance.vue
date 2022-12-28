<script setup lang="ts">
import WithdrawPopup from '@/components/Reusable/WithdrawPopup.vue';
import { ref } from 'vue';

// POPUP STATUS
const isPopupOpen = ref(false);

// OPEN POPUP HANDLER
const handleOpenPopup = () => {
     isPopupOpen.value = !isPopupOpen.value;
}
</script>

<template>
     <div class="upload-balance">
          <span class="balance">Your current balance</span>
          <h2 class="sum">12, 145 458 894 USDT</h2>
          <div class="buttons">
               <router-link to="/deposit" class="button btn-purple">Deposit</router-link>
               <button @click="handleOpenPopup" class="button button--secondary">Withdraw</button>
          </div>
          <div class="popup" :class="{ closed: !isPopupOpen }">
               <WithdrawPopup :handler="{ handleOpenPopup }" />
          </div>
     </div>
</template>

<style lang="scss" scoped>
.upload-balance {
     padding: 3.42rem 7.27rem 3.85rem 2.56rem;
     background: rgba(217, 217, 217, 0.1);
     border-radius: 10px;
     width: fit-content;

     .popup {
          transition: all .2s;
     }

     .balance {
          font-weight: 400;
          font-size: 1.71rem;
          line-height: 2rem;
     }

     .sum {
          display: block;
          margin-top: 0.43rem;
          font-weight: 700;
          font-size: 4.11rem;
          line-height: 5.05rem;
     }

     .buttons {
          margin-top: 2.14rem;
          display: flex;
          flex-flow: row;
          gap: 1.58rem;
     }

     .button {
          border-radius: 5px;
          padding: 1.07rem 4.02rem;
          font-weight: 600;
          font-size: 2rem;
          line-height: 85%
     }

     .button--secondary {
          border: 2px solid #9037D6;
          color: var(--color-purple-dark);
          transition: all 0.3s;
     }

     .button--secondary:hover {
          background-color: var(--color-purple-dark);
          color: white;
     }
}
</style>