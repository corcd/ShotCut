<template>
  <div class="about-page">
    <div class="header">
      <navbar :scroll="false" :style_shade="false" :menu_v="false" :extend="false" :activeitem="activeitem"></navbar>
    </div>
    <div class="container">
      <div class="about-title">
        <p>关于天择</p>
      </div>
      <div class="about-content">
        <div class="about-left"></div>
        <div class="about-right"></div>
        <div class="about-main">
          <p>{{content[0]}}</p>
          <p>{{content[1]}}</p>
          <p>{{content[2]}}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="line"></div>
      <footbar></footbar>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      content: [
        "天择介绍中广天择传媒股份有限公司（简称“中广天择”），成立于2007年4月，注册资金1亿元，是长沙广播电视集团绝对控股的国有文化企业。2017年8月11日，中广天择在上海证券交易所主板上市，成为首家登陆上海主板国有控股的视频节目制作公司。",
        "中广天择主营业务是电视、互联网和移动互联网视频等内容的制作、发行和营销，以及电视剧播映权运营。作为国有视频内容制作机构的重要力量，中广天择始终以传播社会正能量、弘扬社会正气为使命，制作了一大批弘扬社会主流价值观的优秀作品。公司联合制作的《朗读者》第一季于2018年4月荣获中国广播影视大奖—广播电视节目奖第25届电视文艺“星光奖”，这也是电视文艺作品中的最高荣誉。2018年，公司联合东方卫视制作的《我们在行动》是全国首档精准扶贫公益纪实节目，该节目作为电视传媒物质脱贫和精神脱贫的先行者，荣获国家广电总局2018年第一季度“广播电视创新创优节目”、国务院扶贫开发小组颁发的“2018全国脱贫攻坚奖组织创新奖”、“TV地标”2018年度上星频道“最具品牌影响力节目”以及“指尖综艺榜”2018年度“最具引领力节目”。此外，中广天择还为全国600多家地面频道提供电视内容和融媒体产品，内容涵盖文化、故事、生活、娱乐等多个领域，在广大观众中，形成了较强的影响力和品牌号召力。",
        "截至2017年底，公司年收入近4亿元，已跻身国内一流视频内容提供商之列。随着中广天择节目覆盖面的不断拓展，公司在深耕传统媒体的同时，在新媒体方面也作了重要布局。公司现已设立二级机构新媒体中心，创新研发微综艺、轻综艺、小视频、短视频节目模式，开设了10多个正能量优质短视频账号，制作发布6000多条视频。"
      ],
      activeitem: ["","","","","","",""]
    };
  },
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
