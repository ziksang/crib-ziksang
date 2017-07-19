<template>
    <div id="calendar" v-show='calendarShow'>
        <div class="month">
            <ul>
                <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
                <li class="year-month">
                    <span class="choose-year">{{ currentYear }}</span>
                    <span class="choose-month" @click='monthCalendar = true'>{{ currentMonth }}月</span>
                </li>
                <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
            </ul>
        </div>
        <ul class="weekdays">
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li style="color:red">六</li>
            <li style="color:red">日</li>
        </ul>
        <ul class="days">
            <li v-for="(day,index) in days" @click='calendarClick(day)'>
                <span :class='countDay(day)'>{{day.getDate()}}</span>
            </li>
        </ul>
        <ul class="monthList" v-show='monthCalendar'>
            <li v-for='month in months' :style='monthColor(month)' @click='chooseMonth($event,month)'>{{month}}月</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {

            currentDay: 1,
            currentMonth: 1,
            currentYear: 1970,
            monthCalendar: false,
            days: [],
            months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            startTimeCopy: this.startTime,
        }
    },
    props: {
        calendarShow: {
            deafult: false,
            type: Boolean
        },
        chooseTime: {
            default: '',
            type: String
        },
        startTime: {
            default: '',
            type: String
        },
        minTime: {
            default: '',
            type: String
        },
        maxTime: {
            default: '',
            type: String
        },
    },
    created: function () {
        if (this.startTime != '') {
            this.initData(this.startTime);
        } else {
            this.initData(null);
        }
    },
    methods: {
        chooseMonth(e,month) {
            this.monthCalendar = false
            if (this.minTime && this.formatDate2(this.currentYear, month) < this.minTime.substring(0, 7)) {
                 return false
            }
            if (this.maxTime && this.formatDate2(this.currentYear, month) > this.maxTime.substring(0, 7)) {
                return false
            }
            
            let date = this.formatDate(this.currentYear, month, 1)
            this.initData(date)

        },
        monthColor(month) {
            if (this.minTime && this.formatDate2(this.currentYear, month) < this.minTime.substring(0, 7)) {
                return { background: "green" }
            }
            if (this.maxTime && this.formatDate2(this.currentYear, month) > this.maxTime.substring(0, 7)) {
                return { background: "green" }
            }
        },
        countDay(day) {
            let Day = day.getDate();
            let Year = day.getFullYear();
            let Month = day.getMonth() + 1;
            let formatDate = this.formatDate(Year, Month, Day)
            if (Month != this.currentMonth) {
                return 'other-month'
            }
            if (formatDate == this.startTimeCopy) {
                return 'active'
            }
            if (this.minTime != '') {
                if (formatDate < this.minTime) {
                    return 'other-month'
                }
            }
            if (this.maxTime != '') {
                if (formatDate > this.maxTime) {
                    return 'other-month'
                }
            }
        },
        calendarClick(day) {
            let Day = day.getDate();
            let Year = day.getFullYear();
            let Month = day.getMonth() + 1;
            let formatDate = this.formatDate(Year, Month, Day)

            //如果有最小时间，如果小于最小时间我们则不进行转日期
            if (this.minTime && formatDate < this.minTime) {
                return
            }
            //如果有最大时间，如果大于最大时间我们则不进行转日期
            if (this.maxTime && formatDate > this.maxTime) {
                return
            }
            //把当击的当前时间替换掉
            this.startTimeCopy = formatDate
            if (Month < this.currentMonth) {
                let firstDate = this.formatDate(Year, Month, 1)
                this.initData(firstDate)
            } else if (Month > this.currentMonth) {
                let firstDate = this.formatDate(Year, Month, 1)
                this.initData(firstDate)
            }
            this.$emit('update:chooseTime', formatDate)
            this.$emit('update:calendarShow', false)
        },
        //点击向前,向前跳一页
        pickPre: function (year, month) {
            //如果有小时间，如果最小年月 = 当时年月就退出
            if (this.minTime && this.minTime.substring(0, 7) == this.formatDate2(year, month)) {
                return
            }
            if (month == 1) {
                month = 13
                year -= 1
            }
            let firstDate = this.formatDate(year, month - 1, 1)
            this.initData(firstDate)
            //点击向后，向后跳一页
        },
        pickNext(year, month) {
            //如果有最大时间，如果最大年月 = 当时年月就退出
            if (this.maxTime && this.maxTime.substring(0, 7) == this.formatDate2(year, month)) {
                return
            }
            if (month == 12) {
                month = 0
                year += 1
            }
            let firstDate = this.formatDate(year, month + 1, 1)
            this.initData(firstDate)

        },

        initData: function (cur) {
            var date;
            if (cur) {
                date = new Date(cur);
            } else {
                date = new Date();
            }
            //当天
            this.currentDay = date.getDate();
            //当年
            this.currentYear = date.getFullYear();
            //当月
            this.currentMonth = date.getMonth() + 1;
            //本月的第一天 如果是2017年7月  则获得的是2017-07-01
            var firstDate = this.formatDate(this.currentYear, this.currentMonth, 1)
            //初始化本月的第一天  Sat Jul 01 2017 08:00:00 GMT+0800 (中国标准时间)
            let initFirstData = new Date(firstDate)
            //算出本每个月的一号对应的是里拜几
            let initFirstDataWeek = initFirstData.getDay()
            if (initFirstDataWeek == 0) {
                initFirstDataWeek = 7
            }
            //本月的当天  2017-07-01
            //this.nowDate = this.formatDate(this.currentYear, this.currentMonth, this.currentDay);
            //清空月份
            this.days = []
            for (var i = initFirstDataWeek - 1; i > 0; i--) {
                console.log(i)
                var d = new Date(firstDate);
                console.log(d)
                d.setDate(i - (initFirstDataWeek - 1));
                console.log("y:" + d.getDate());
                this.days.unshift(d);
            }
            for (var i = 0; i <= 42 - initFirstDataWeek; i++) {
                var d = new Date(firstDate);
                d.setDate(d.getDate() + i);
                this.days.push(d);
            }
        },
        // 返回 类似 2016-01-02 格式的字符串
        formatDate: function (year, month, day) {
            var y = year;
            var m = month;
            if (m < 10) m = "0" + m;
            var d = day;
            if (d < 10) d = "0" + d;
            return y + "-" + m + "-" + d
        },
        formatDate2: function (year, month) {
            var y = year;
            var m = month;
            if (m < 10) m = "0" + m;
            console.log(m)
            return y + "-" + m
        },

    },

}
</script>

<style lang='less'>
@import './calendar.less';
</style>