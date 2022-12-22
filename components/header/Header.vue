<template>
    <div>
      <header>
          <div class="header__inner">
            To do list!     
            {{ timestamp }}    
          </div>        
      </header> 
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        timestamp: '',
      }
    },
    created() {
      const now = new Date();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      const weekList = new Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.");
      const week = weekList[now.getDay()];
      this.timestamp = `${month}/${date} ${week}`;
    }
  }
  </script>
  
  <style scoped>
    header {width:380px; margin:0 auto; border-bottom:5px solid #eee;background: #fff;padding:10px; box-sizing: border-box; font-size:12px; color:#999;}
  </style>