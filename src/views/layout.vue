<template>
    <div class="layout v-layout">
        <Layout>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                数据导入
                            </template>
                            <MenuItem name="1-1">
                                <router-link to="normalization">专项阶段</router-link>
                            </MenuItem>
                            <MenuItem name="1-2">
                                <router-link to="special">常态化阶段</router-link>
                            </MenuItem>
                            <MenuItem name="1-3">
                                <router-link to="tradingpath">交易路径模板</router-link>
                            </MenuItem>
                            <MenuItem name="1-4">
                                <router-link to="templateaudit">模板审核</router-link>
                            </MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.v-layout .ivu-menu{
    text-align: left
}
.v-layout a{
    color: rgb(81, 90, 110);
}
</style>
