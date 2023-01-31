module.exports = [
  // 鼠标点击粒子特效
  [
    "cursor-effects",
    // {
    //    size: 2, // size of the particle, default: 2
    //    shape: ['star' | 'circle'], // shape of the particle, default: 'star'
    //    zIndex: 999999999, // z-index property of the canvas, default: 999999999
    // },
  ],
  [
    "sakura",
    {
      num: 15, // 默认数量
      show: true, //  是否显示
      zIndex: -1, // 层级
      img: {
        replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: "...", // 绝对路径
      },
    },
  ],
];
