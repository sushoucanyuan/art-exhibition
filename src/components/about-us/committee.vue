<template>
  <div>
    <h3>艺术委员会：（排名不分先后，按姓氏拼音排序）</h3>
    <div v-for="(item, index) in names" :key="index" class="name">
      <p>{{item.name}}</p>
      <p>{{item.job}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        names: [
          {
            name: 'ALE RIVA（意）',
            job: '著名国际策展人、批评家'
          },
          {
            name: 'CHRISTOPH MANCKE（德）',
            job: '视觉艺术家专业协会成员'
          },
          {
            name: '傅 中 望 ',
            job: '中国雕塑学会副会长、湖北美术馆艺术总监'
          },
          {
            name: '冀 少 峰',
            job: '湖北美术馆馆长'
          },
          {
            name: '焦 兴 涛 ',
            job: '四川美术学院副院长、中国雕塑学会副秘书长'
          },
          {
            name: '鲁 虹',
            job: '合美术馆执行馆长'
          },
          {
            name: '尚 云 华',
            job: '东湖雕塑艺术馆馆长'
          },
          {
            name: '隋 建 国',
            job: '中央美术学院雕塑系教授、中国雕塑学会副会长'
          },
          {
            name: '孙 振 华',
            job: '中国美术学院教授、中国雕塑学会副会长、《中国雕塑》主编'
          },
          {
            name: 'TOM MORAN（美）',
            job: '新泽西大地艺术公园首席艺术总监'
          }
        ]
      }
    }
  }
</script>