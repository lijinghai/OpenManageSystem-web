<!--
 * @Description: 首页界面
 * @Author: lijinghailjh@163.com
 * @Date: 2021/2/7
 -->
<template>
  <div>
    <el-card shadow="always" body-style="padding: 5px 20px;">
      <el-tag type="success" style="width: 100%;">Dorian</el-tag>
      <p>月光还是少年的月光，九州一色还是李白的霜</p>
      <el-tag type="success" style="width: 100%;">项目简介</el-tag>
      <p>这是我的大二(2021.6.3)全栈班的后端业务领域课的实训===>东软开放大学平台的后台管理界面</p>
      <p>东软开放大学平台的后台管理，完成于本人大二期间（2021年 6月 3日），采用vue与springboot架构开发，前后端完全分离，json格式数据交互，全部由本人独立开发完成。将来将部署在本人的学生版阿里云centos7服务器上。</p>
      <p>管理范围包括：PC端 </p>
      <p>该后台界面主要功能有：对数据进行管理；对信息的管理</p>
      <el-tag type="success" style="width: 100%;">技术栈</el-tag>
      <p>前端后台管理系统由vue与elementUI搭建，路由使用vue-router，ajax请求均使用axios。</p>
      <p>mysql数据库，mybatis(通用Mapper)、实现了分页功能</p>
      <p>springBoot(spring、springMVC)</p>
<!--      <p>springCloud(eureka、zuul、feign)搭建微服务工程</p>-->
      <p>集成Swagger2实现简化调试</p>
      <p>使用redis实现登陆共享与登陆拦截</p>
      <p>使用AspectJ实现日志的自动添加</p>
      <p>nginx反向代理域名</p>
      <p>采用JWT+MD5加密生成token，写入cookie的方式做无状态登录</p>
      <p>开发工具：webstorm、maven、idea、postman、swagger、git、navicat等</p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style >
.el-card {
  padding-top: 15px;
}

p {
  color: #555;
  font-size: 13px;
  text-indent: 28px;
}
</style>

<!----------------------------------------------------------------------------------------->
<!--<template>-->
<!--  <div class="dashboard-container">-->
<!--    <component :is="currentRole" />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { mapGetters } from 'vuex'-->
<!--import adminDashboard from './admin'-->
<!--import editorDashboard from './editor'-->

<!--export default {-->
<!--  name: 'Dashboard',-->
<!--  components: { adminDashboard, editorDashboard },-->
<!--  data() {-->
<!--    return {-->
<!--      currentRole: 'adminDashboard'-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    ...mapGetters([-->
<!--      'roles'-->
<!--    ])-->
<!--  },-->
<!--  created() {-->
<!--    if (!this.roles.includes('admin')) {-->
<!--      this.currentRole = 'editorDashboard'-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<!------------------------------------------------------------------>
<!--<template>-->
<!--  <div>-->
<!--    <el-card shadow="always" body-style="padding: 5px 20px;">-->
<!--      <el-tag type="success" style="width: 100%;">项目简介</el-tag>-->
<!--      <p>在线考试系统，大四毕设，采用vue与springcloud微服务架构开发，前后端完全分离，json格式数据交互，全部由本人独立开发完成。目前项目已部署在本人的学生版阿里云centos7服务器上。</p>-->
<!--      <p>主要功能有：对班级和科目的管理；对试题和试卷的管理（包含excel文件模板大批量一次性上传试题到题库，自动从题库中抽题出试卷）；用户、角色、权限三级设计实现方法级别的细粒度权限控制；aop后置通知实现整个系统重要操作日志的记录。</p>-->
<!--      <el-tag type="success" style="width: 100%;">技术栈</el-tag>-->
<!--      <p>前端后台管理系统由vue与elementUI搭建，路由使用vue-router，前端在线考试系统由nuxt搭建，ajax请求均使用axios。</p>-->
<!--      <p>mysql数据库，mybatis(通用Mapper、PageHelper分页助手)</p>-->
<!--      <p>springBoot(spring、springMVC)</p>-->
<!--      <p>springCloud(eureka、zuul、feign)搭建微服务工程</p>-->
<!--      <p>nginx反向代理域名</p>-->
<!--      <p>采用jwt+rsa加密生成token，写入cookie的方式做无状态登录</p>-->
<!--      <p>开发工具：vsCode、maven、idea、postman、git等</p>-->
<!--    </el-card>-->
<!--  </div>-->
<!--</template>-->
