<template>
    <div class="name">
        <div>
            <h2>取名推荐工具</h2>
            <p> Codelf：一个帮你搜索 Github、GitLab 等网站中，你想查找的内容的不同命名。</p>
        </div>
        <h2>JavaScript</h2>
        <div>
            <h3>变量：常用小驼峰命名</h3>
             <p>反面：</p>
            <ul>
                <li>无意义：const data;</li>
                <li>单词简称或缩写：const comp;</li>
                <li>数字或者字母结尾：const button1;</li>
                <li>全局使用前置或后置下划线：const _firstName;</li>
            </ul>
            <p>正面：</p>
            <ul>
                <li>可见、状态等，可用 is+动词/形容词的方式：const isVisible;const isLoading;</li>
                <li>配置，选项等类型，可以用 withXxx、hasXxx 来标识是否有某个属性等,enableXxx 来表示是否开启配置：const withTab;const hasPlan;const enableFilter;</li>
            </ul>
        </div>
        <div>
            <h3>函数</h3>
            <p>反面:</p>
            <ul>
                <li>无意义 function getInfo(){};</li>
            </ul>
            <p>正面:</p>
            <ul>
                <li>操作类方法 fetchXxx，getXxx，getXxxByYxx</li>
                <li>删除类方法 deleteXxx</li>
                <li>格式化数据 formatXxx</li>
                <li>数据获取方法：function getUserInfo(){};function fetchSearchList(){};</li>
                <li>需要根据一些属性去获取数据：function getGoodsById(){};function queryUserByName(){};</li>
                <li>删除数据：function deleteUser(){};function removeGoodsItem(){};</li>
                <li>格式化数据：function formatDate(){}；function sortByDesc(){}</li>
                <li>添加一些操作类的辅助命名：function handleUserInfoChange(){};function handleTitleClick(){};function fetchPageData(){};</li>
            </ul>
        </div>
        <h2>css</h2>
        <div>
            <ul>
                <li>包裹类： container, wrapper, outer, inner, box, header, footer, main, content, aside, page, section, block</li>
                <li>状态类： primary, secondary, success, danger, warning, info, error, Link, light, dark, disabled, active, checked, loading</li>
                <li>尺寸类： large, middle, small, bigger, smaller</li>
                <li>组件类： card, list, picture, carousel, swiper, menu, navs, badge, hint, modal, dialog</li>
                <li>位置类： first, last, current, prev, next, forward, back</li>
                <li>文本类： title, desc, content, date, author, category,label,tag</li>
                <li>人物类： avatar, name, age, post, intro</li>
            </ul>
        </div>
    </div>
</template>
