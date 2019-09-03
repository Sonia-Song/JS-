/**
 * Created by jiangcheng on 2017/10/2.
 */

/**
 * text
 */
(function (vue, $, name) {
    //注册text组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
               <div class="wp-input-cell-header" v-show="hasLabel">\
                  <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div>\
                  <div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                  <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
               </div>\
               <div class="wp-input-cell-content wp-input-cell-content-text" v-bind:style="style">\
                 <div class="fox-input-row">\
                    <input ref="input" type="text" v-bind:class="{\'fox-input-clear\':!(mReadonly||mDisabled)}" v-bind:maxlength="maxlength"\
                     v-bind:value="value" v-bind:placeholder="placeholder"  v-bind:readonly="mReadonly" v-bind:disabled="mDisabled" \
                     v-on:input="onChange($event,$event.target.value)" v-on:focus="onFocus($event)" v-on:blur="onBlur($event)">\
                    <span ref="unit" class="wp-input-unit">{{unit}}</span>\
                 </div>\
               </div>\
              </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //placeholder
            placeholder: {
                type: String,
                required: false
            },
            //最大长度
            maxlength:{
                type:Number,
                required:false
            },
            //是否只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //单位
            unit: {
                type: String,
                required: false
            },
            //value
            value: {
                type: String,
                required: false
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //数据
        data: function () {
            return {
                //内部提示
                innerTip: '',
                //是否处于编辑状态
                mEditing: false,
                //内部只读状态
                innerReadonly: false,
                //内部禁用状态
                innerDisabled: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        //计算
        computed: {
            //是否有label
            hasLabel: function () {
                return (this.$slots.default || this.label && this.label.length > 0)
            },
            //计算style
            style: function () {
                if (this.hasLabel) {
                    return ""
                }
                return "margin-top:0"
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否可读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },

        //监控
        watch: {
            mEditing: function (newVal, oldVal) {
                //如果没改变，不执行
                if (newVal == oldVal) {
                    return;
                }
                //改变样式
                this.changeInputStyle();
            }
        },

        //方法
        methods: {
            //change
            onChange: function (evt, value) {
                //改变编辑状态
                this.mEditing = true;
                //发送change事件
                this.$emit('change', value);
            },
            //focus
            onFocus: function (evt) {
                //设置全选状态
                this.$refs.input.select();
                var val = this.$refs.input.value;
                if (val && val.length > 0) {
                    this.mEditing = true;
                } else {
                    this.mEditing = false;
                }
                //发送focus事件
                this.$emit('focus', evt);
            },
            //blur
            onBlur: function (evt) {
                //改变编辑状态
                this.mEditing = false;
                //发送blur事件
                this.$emit('blur', evt);
            },
            //改变 input style
            changeInputStyle: function () {
                var n = 0.2, m = 0.5;
                if (!!this.unit) {
                    if (this.mEditing) {
                        n = 2, m = 2;
                    }
                    n += (this.unit.length + 0.5);
                } else if (this.mEditing) {
                    n += 2;
                }

                this.$refs.input.style = "padding-right: " + n + "rem";
                this.$refs.unit.style = "right: " + m + "rem";
            }
        },

        //加载后执行
        mounted: function () {
            $(this.$refs.input).input();
            //改变样式
            this.changeInputStyle();
        }
    });
})(Vue, fox.$, "fox-text");

/**
 * money
 */
(function (vue, $, name) {
    //注册text组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
               <div class="wp-input-cell-header" v-show="hasLabel">\
                  <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div>\
                  <div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                  <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
               </div>\
               <div class="wp-input-cell-content wp-input-cell-content-text" v-bind:style="style">\
                 <div class="fox-input-row" ref="inputDiv">\
                    <input ref="input" type="number" v-bind:class="inputCls"\
                     v-bind:value="mValue" v-bind:placeholder="mPlaceholder"  v-bind:readonly="mReadonly" v-bind:disabled="mDisabled" \
                     v-on:input="onChange($event,$event.target.value)" v-on:focus="onFocus($event)" v-on:blur="onBlur($event)">\
                    <span ref="unit" class="wp-input-unit">{{unit}}</span>\
                 </div>\
               </div>\
              </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //placeholder
            placeholder: {
                type: String,
                required: false
            },
            //是否只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //单位
            unit: {
                type: String,
                required: false
            },
            //换算汇率
            rates: {
                type: Number,
                required: false,
                default: function () {
                    return 1;
                }
            },
            //小数点数量
            decimalLength: {
                type: Number,
                required: false,
                default: function () {
                    return 0;
                }
            },
            //value
            value: {
                type: String,
                required: false
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //数据
        data: function () {
            var s = "";
            if (this.value && this.value.length > 0) {
                n = this.changeRates(this.value, true);
                s = fox.$.moneyFormat(n, this.decimalLength);
            }
            return {
                //内部提示
                innerTip: '',
                //内部value
                innerValue: s,
                //是否处于编辑状态
                mEditing: false,
                //是否获取焦点状态
                mFocused: false,
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {},
                //input control
                inputCtrl: void(0)
            }
        },
        //计算
        computed: {
            //是否有label
            hasLabel: function () {
                return (this.$slots.default || this.label && this.label.length > 0)
            },
            //计算style
            style: function () {
                if (this.hasLabel) {
                    return ""
                }
                return "margin-top:0"
            },
            //input class
            inputCls: function () {
                var cls = {
                    'fox-input-clear': !(this.mReadonly || this.mDisabled),
                    'wp-input-money': true,
                    'wp-input-money-placeholder': this.innerValue && this.innerValue.length > 0
                };
                return cls;
            },
            //计算value
            mValue: function () {
                if (!this.mFocused) {
                    return "";
                }
                return this.innerValue;
            },
            //place holder
            mPlaceholder: function () {
                if (!this.mFocused) {
                    return this.innerValue;
                }
                return this.placeholder;
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },

        //监控
        watch: {
            value: function (newVal, oldVal) {
                //value未定义或空字符处理
                if (newVal == void(0) || newVal.length == 0) {
                    this.innerValue = "";
                    return;
                }

                newVal = this.changeRates(newVal, true);
                if (newVal == this.innerValue) {
                    return;
                }
                var formatVal = fox.$.moneyFormat(newVal, this.decimalLength);
                if (formatVal == this.innerValue) {
                    return;
                }
                this.innerValue = formatVal;
            },

            mEditing: function (newVal, oldVal) {
                //如果没改变，不执行
                if (newVal == oldVal) {
                    return;
                }
                //改变样式
                this.changeInputStyle();
            }
        },

        //方法
        methods: {
            //change
            onChange: function (evt, value) {
                //改变编辑状态
                this.mEditing = true;
                //显示提示框
                var inputDiv = this.$refs.inputDiv;
                if (inputDiv) {
                    if (value && value.length > 0) {
                        var len=$.decimalLength(value);
                        if(len>this.decimalLength){
                            value=$.numberFormat(value,this.decimalLength);
                            this.$refs.input.value=value;
                        }
                        var newVal = fox.$.moneyFormat(value, this.decimalLength);
                        //加上单位
                        if (this.unit) {
                            newVal += this.unit;
                        }
                        fox.$.hint.show(inputDiv, newVal);
                    } else {
                        fox.$.hint.hide();
                    }
                }
                this.innerValue = value;
                //发送change事件
                this.$emit('change', this.changeRates(value));
            },
            //focus
            onFocus: function (evt) {
                //获取value
                var val = this.innerValue;
                if (val && String(val).length > 0) {
                    this.mEditing = true;
                    //获取焦点，反格式化value
                    var newVal = fox.$.unMoneyFormat(val);
                    this.innerValue = newVal;
                    var _this = this;
                    setTimeout(function () {
                        //设置全选状态
                        _this.$refs.input.select();
                        _this.inputCtrl.show();
                    }, 10)
                } else {
                    this.mEditing = false;
                }
                //标志获取焦点
                this.mFocused = true;
                //发送focus事件
                this.$emit('focus', evt);
            },
            //blur
            onBlur: function (evt) {
                //失去焦点，格式化value
                if (this.$refs.input) {
                    var val = this.innerValue;
                    if (val && String(val).length > 0) {
                        var newVal = fox.$.moneyFormat(val, this.decimalLength);
                        this.innerValue = newVal;
                    }
                }
                //标志失去焦点
                this.mFocused = false;
                //改变编辑状态
                this.mEditing = false;
                //显示提示框
                var inputDiv = this.$refs.inputDiv;
                if (inputDiv) {
                    fox.$.hint.hide();
                }

                //发送blur事件
                this.$emit('blur', evt);
            },
            //改变 input style
            changeInputStyle: function () {
                var n = 0.2, m = 0.5;
                if (!!this.unit) {
                    if (this.mEditing) {
                        n = 2, m = 2;
                    }
                    n += (this.unit.length + 0.5);
                } else if (this.mEditing) {
                    n += 2;
                }
                this.$refs.input.style = "padding-right: " + n + "rem";
                this.$refs.unit.style = "right: " + m + "rem";
            },
            //转换利率
            changeRates: function (value, reverse) {
                if (fox.type(value) != "number") {
                    if (value == "") {
                        return "";
                    }
                    value = Number(value);
                }
                if (reverse) {
                    value /= this.rates;
                } else {
                    value *= this.rates;
                }
                return String(value);
            }
        },

        //加载后执行
        mounted: function () {
            this.inputCtrl = $(this.$refs.input).input();
            //改变样式
            this.changeInputStyle();
        }
    });
})(Vue, fox.$, "fox-money");

/**
 * number
 */
(function (vue, $, name) {
    //注册text组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
               <div class="wp-input-cell-header" v-show="hasLabel">\
                  <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div>\
                  <div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                  <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
               </div>\
               <div class="wp-input-cell-content wp-input-cell-content-text" v-bind:style="style">\
                 <div class="fox-input-row">\
                    <input ref="input" type="number" v-bind:class="{\'fox-input-clear\':!(mReadonly||mDisabled)}"\
                     v-bind:value="innerValue" v-bind:placeholder="placeholder"  v-bind:readonly="mReadonly" v-bind:disabled="mDisabled" \
                     v-on:input="onChange($event,$event.target.value)" v-on:focus="onFocus($event)" v-on:blur="onBlur($event)">\
                    <span ref="unit" class="wp-input-unit">{{unit}}</span>\
                 </div>\
               </div>\
              </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //placeholder
            placeholder: {
                type: String,
                required: false
            },
            //是否只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //小数长度
            decimalLength:{
                type:Number,
                required:false,
                default: function () {
                    return 0;
                }
            },
            //单位
            unit: {
                type: String,
                required: false
            },
            //value
            value: {
                type: [String, Number],
                required: false
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //数据
        data: function () {
            var s = "";
            if (this.value && this.value.length > 0) {
                s = fox.$.numberFormat(this.value, this.decimalLength);
            }
            return {
                //内部提示
                innerTip: '',
                //是否处于编辑状态
                mEditing: false,
                //内部value
                innerValue:s,
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        //计算
        computed: {
            //是否有label
            hasLabel: function () {
                return (this.$slots.default || this.label && this.label.length > 0)
            },
            //计算style
            style: function () {
                if (this.hasLabel) {
                    return ""
                }
                return "margin-top:0"
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },

        //监控
        watch: {
            value: function (newVal, oldVal) {
                //value未定义或空字符处理
                if (newVal == void(0) || newVal.length == 0) {
                    this.innerValue = "";
                    return;
                }

                var formatVal = fox.$.numberFormat(newVal, this.decimalLength);
                if (formatVal == this.innerValue) {
                    return;
                }
                this.innerValue = formatVal;
            },
            mEditing: function (newVal, oldVal) {
                //如果没改变，不执行
                if (newVal == oldVal) {
                    return;
                }
                //改变样式
                this.changeInputStyle();
            }
        },

        //方法
        methods: {
            //change
            onChange: function (evt, value) {
                //改变编辑状态
                this.mEditing = true;
                if (value && value.length > 0) {
                    var len=$.decimalLength(value);
                    if(len>this.decimalLength){
                        value=$.numberFormat(value,this.decimalLength);
                        this.$refs.input.value=value;
                    }
                }
                this.innerValue=value;
                //发送change事件
                this.$emit('change', value);
            },
            //focus
            onFocus: function (evt) {
                //设置全选状态
                this.$refs.input.select();
                var val = this.$refs.input.value;
                if (val && val.length > 0) {
                    this.mEditing = true;
                } else {
                    this.mEditing = false;
                }
                //发送focus事件
                this.$emit('focus', evt);
            },
            //blur
            onBlur: function (evt) {
                //改变编辑状态
                this.mEditing = false;
                //发送blur事件
                this.$emit('blur', evt);
            },
            //改变 input style
            changeInputStyle: function () {
                var n = 0.2, m = 0.5;
                if (!!this.unit) {
                    if (this.mEditing) {
                        n = 2, m = 2;
                    }
                    n += (this.unit.length + 0.5);
                } else if (this.mEditing) {
                    n += 2;
                }
                this.$refs.input.style = "padding-right: " + n + "rem";
                this.$refs.unit.style = "right: " + m + "rem";
            }
        },

        //加载后执行
        mounted: function () {
            $(this.$refs.input).input();
            //改变样式
            this.changeInputStyle();
        }
    });
})(Vue, fox.$, "fox-number");

/**
 * password
 */
(function (vue, $, name) {
    //注册text组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
               <div class="wp-input-cell-header" v-show="hasLabel">\
                 <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div>\
                 <div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                 <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
               </div>\
               <div class="wp-input-cell-content wp-input-cell-content-text" v-bind:style="style">\
                  <div class="fox-input-row">\
                      <input ref="input" type="password" class="fox-input-password"  v-bind:value="value" v-bind:placeholder="placeholder" \
                       v-bind:maxlength="maxlength" v-bind:readonly="mReadonly" v-bind:disabled="mDisabled"  v-on:input="onChange($event,$event.target.value)"\
                       v-on:focus="onFocus($event)" v-on:blur="onBlur($event)">\
                  </div>\
               </div>\
              </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //placeholder
            placeholder: {
                type: String,
                required: false
            },
            //最大长度
            maxlength:{
                type:Number,
                required:false
            },
            //是否只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否禁用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //value
            value: {
                type: String,
                required: false
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //数据
        data: function () {
            return {
                //提示
                innerTip: '',
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        //计算
        computed: {
            //是否有label
            hasLabel: function () {
                return (this.$slots.default || this.label && this.label.length > 0)
            },
            //计算style
            style: function () {
                if (this.hasLabel) {
                    return ""
                }
                return "margin-top:0"
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },

        //方法
        methods: {
            //change
            onChange: function (evt, value) {
                this.$emit('change', value);
            },
            //focus
            onFocus: function (evt) {
                //设置全选状态
                this.$refs.input.select();
                this.$emit('focus', evt);
            },
            //blur
            onBlur: function (evt) {
                this.$emit('blur', evt);
            }
        },

        //加载后执行
        mounted: function () {
            $(this.$refs.input).input();
        }

    });
})(Vue, fox.$, "fox-password");

/**
 * text area
 */
(function (vue, $, name) {
    //注册text组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
               <div class="wp-input-cell-header" v-show="hasLabel">\
                 <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div>\
                 <div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                 <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
               </div>\
               <div class="wp-input-cell-content" v-bind:style="style">\
                  <textarea ref="input" v-bind:value="value" v-bind:placeholder="placeholder" v-bind:rows="rows" v-bind:cols="cols" \
                   v-bind:maxlength="maxlength" style="height:100%;width:100%" v-bind:readonly="mReadonly" v-bind:disabled="mDisabled"\
                   v-on:input="onChange($event,$event.target.value)" v-on:focus="onFocus($event)" v-on:blur="onBlur($event)">\
                  </textarea>\
               </div>\
              </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //行
            rows: {
                type: Number,
                required: false
            },
            //列
            cols: {
                type: Number,
                required: false
            },
            //最大长度
            maxlength:{
                type:Number,
                required:false
            },
            //placeholder
            placeholder: {
                type: String,
                required: false
            },
            //是否只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否禁用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //value
            value: {
                type: String,
                required: false
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //数据
        data: function () {
            return {
                //提示
                innerTip: '',
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        //计算
        computed: {
            //是否有label
            hasLabel: function () {
                return (this.$slots.default || this.label && this.label.length > 0)
            },
            //计算style
            style: function () {
                if (this.hasLabel) {
                    return ""
                }
                return "margin-top:0"
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },

        //方法
        methods: {
            //change
            onChange: function (evt, value) {
                this.$emit('change', value);
            },
            //focus
            onFocus: function (evt) {
                this.$emit('focus', evt);
            },
            //blur
            onBlur: function (evt) {
                this.$emit('blur', evt);
            }
        },

        //加载后执行
        mounted: function () {
            $(this.$refs.input).input();
        }

    });
})(Vue, fox.$, "fox-textarea");

/**
 * select text
 */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
               <div class="wp-input-cell-header" v-if="hasLabel">\
                 <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div>\
                 <div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                 <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
               </div>\
               <div class="wp-input-cell-content wp-input-cell-content-text" v-bind:style="style">\
                  <div class="fox-input-row">\
                      <input ref="input" type="text" class="fox-input-custom" v-bind:placeholder="placeholder"\
                      v-bind:value="mValue" v-bind:readonly="(!mEdit || mReadonly)" v-bind:disabled="mDisabled" v-on:tap="selectAction(1)" \
                      v-on:customInput="selectAction()" v-on:focus="onFocus($event)" v-on:blur="onBlur($event)" >\
                      <span ref="unit" class="wp-input-unit">{{unit}}</span>\
                  </div>\
               </div>\
              </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //placeholder
            placeholder: {
                type: String,
                required: false
            },
            //是否只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否禁用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可编辑
            edit: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //value
            value: {
                required: false
            },
            //options
            options: {
                type: [Object, String],
                required: false
            },
            //单位
            unit: {
                type: String,
                required: false
            },
            //data source
            datasource: {
                type: [Array, String],
                required: false
            },
            //data source(已经淘汰)
            datasoruce: {
                type: [Array, String],
                required: false
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //数据
        data: function () {
            return {
                //提示
                innerTip: '',
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        //计算
        computed: {
            //获取value
            mValue: function () {
                if (this.value == void(0)) {
                    return "";
                }
                var valueType = "value";
                if (this.options && this.options.valueType) {
                    valueType = this.options.valueType;
                }
                //如果value为text则直接返回
                if (valueType === "text") {
                    return this.value;
                }
                //如果value为json，如果有value key则查找，如果只有text key则直接返回
                var s = this.value;
                if (valueType === "json") {
                    if (this.value["value"]) {
                        s = this.value["value"];
                    } else {
                        return this.value["text"];
                    }
                }
                //获取数据源
                var src = this.getDataSource();
                var values;
                if (fox.type(s) === "string") {
                    values = s.split(",");
                } else {
                    values = [s];
                }

                var layer = this.options && this.options.layer ? this.options.layer : 1;
                if (layer > 1 && values.length == 1) {
                    var node = {
                        datasource: src,
                        text: "",
                        value: values[0],
                        index: 0,
                        layer: layer,
                        flag: true
                    };
                    //获取选中的值
                    this.seekSelectText(node);
                    if (node.flag == true) {
                        return node.text;
                    } else {
                        return "";
                    }
                } else {
                    var node = {
                        datasource: src,
                        text: "",
                        values: values,
                        index: 0
                    };
                    //获取选中的值
                    this.getSelectText(node);
                    return node.text;
                }

            },
            //是否有label
            hasLabel: function () {
                return (this.$slots.default || this.label && this.label.length > 0)
            },
            //计算style
            style: function () {
                if (this.hasLabel) {
                    return ""
                }
                return "margin-top:0"
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            },
            //是否可编辑
            mEdit: function () {
                return this.edit;
            }

        },

        //方法
        methods: {
            //获取选中的text
            getSelectText: function (node) {
                if (node.datasource == void(0)) {
                    return "";
                }
                //判断string或object
                var item = node.datasource[0];
                //获取value
                var value = node.values[node.index];
                if (fox.type(item) === "string") {
                    //循环查找
                    for (var i = 0; i < node.datasource.length; i++) {
                        if (value === node.datasource[i]) {
                            //增加分割符
                            if (node.text.length > 0) {
                                node.text += " ";
                            }
                            node.text += value;
                            break;
                        }
                    }
                } else {
                    //循环查找
                    var i = 0;
                    for (; i < node.datasource.length; i++) {
                        if (value === node.datasource[i].value) {
                            //增加分割符
                            if (node.text.length > 0) {
                                node.text += " ";
                            }
                            node.text += node.datasource[i].text;
                            break;
                        }

                        if (this.value === node.datasource[i].text) {
                            //增加分割符
                            if (node.text.length > 0) {
                                node.text += " ";
                            }
                            node.text += node.datasource[i].text;
                            break;
                        }
                    }

                    if (i < node.datasource.length && node.index < node.values.length && node.datasource[i].children) {
                        node.index++;
                        node.datasource = node.datasource[i].children;
                        this.getSelectText(node);
                    }
                }
            },
            //遍历查找并获取选择的text
            seekSelectText: function (node) {
                if (node.datasource == void(0)) {
                    return "";
                }
                //判断string或object
                var item = node.datasource[0];
                //获取value
                var value = node.value;
                if (fox.type(item) === "string") {
                    //循环查找
                    for (var i = 0; i < node.datasource.length; i++) {
                        if (value === node.datasource[i]) {
                            node.text = value;
                            //标志已经查找成功
                            node.flag = true;
                            return;
                        }
                    }
                } else {
                    //循环查找
                    var i = 0;
                    for (; i < node.datasource.length; i++) {
                        //如果没到达叶子节点，进行遍历查找，否则会进行值得比较
                        if (node.index < node.layer - 1) {
                            //创建子node
                            var subNode = {};
                            fox.extend(subNode, node);
                            //增加分割符
                            if (subNode.text.length > 0) {
                                subNode.text += " ";
                            }
                            subNode.text += node.datasource[i].text;
                            subNode.index++;
                            subNode.datasource = subNode.datasource[i].children;
                            this.seekSelectText(subNode);

                            if (subNode.flag) {
                                node.text = subNode.text;
                                node.flag = true;
                                return;
                            }
                        } else {
                            if (value === node.datasource[i].value) {
                                //增加分割符
                                if (node.text.length > 0) {
                                    node.text += " ";
                                }
                                node.text += node.datasource[i].text;
                                node.flag = true;
                                return;
                            }

                            if (this.value === node.datasource[i].text) {
                                //增加分割符
                                if (node.text.length > 0) {
                                    node.text += " ";
                                }
                                node.text += node.datasource[i].text;
                                node.flag = true;
                                return;
                            }
                        }
                        node.flag = false;
                    }
                }
            },
            //选中事件
            selectAction: function (flag) {
                //可编辑的情况下，点击文本框(flag==1)不弹出layer
                if (flag && this.mEdit) {
                    return;
                }
                //只读的情况下，不弹出layer
                if (this.mReadonly) {
                    return;
                }
                //禁用情况下，不弹出layer
                if (this.mDisabled) {
                    return;
                }

                //触发focus
                this.$emit('focus');
                //引用this
                var _this = this;
                var layer = 1;
                if (this.options) {
                    var args = this.options;
                    //如果为字符出爱车
                    if (typeof this.options === "string") {
                        args = JSON.parse(this.options);
                    }
                    layer = args.layer ? args.layer : 1;
                }
                // 创建popup picker
                var picker = new $.PopPicker({
                    layer: layer
                });
                //获取data source
                var src = this.getDataSource();
                //设置源数据
                picker.setData(src);
                //show popup picker
                picker.show(function (items) {
                    var text = "", value = "";
                    for (var i = 0; i < items.length; i++) {
                        if (i == 0) {
                            text = items[i].text != void(0) ? items[i].text : items[i];
                            value = items[i].value != void(0) ? items[i].value : items[i];
                        } else {
                            text += " ";
                            text += items[i].text != void(0) ? items[i].text : items[i];
                            value += ",";
                            value += items[i].value != void(0) ? items[i].value : items[i];
                        }
                    }
                    //设置text
                    _this.$refs.input.value = text;

                    var valueType = "value";
                    if (_this.options && _this.options.valueType) {
                        valueType = _this.options.valueType;
                    }
                    if (valueType === "json") {
                        //通知change
                        _this.$emit('change', {
                            text: text,
                            value: value,
                            items: items
                        });
                    } else if (valueType === "text") {
                        //通知change
                        _this.$emit('change', text);
                    } else {
                        //通知change
                        _this.$emit('change', value);
                    }
                    //销毁
                    picker.dispose();
                });
            },
            //获取数据源
            getDataSource: function () {
                var src = this.datasource || this.datasoruce;
                if (typeof src === "string") {
                    src = JSON.parse(src);
                }
                return src;
            },
            //focus
            onFocus: function (evt) {
                this.$emit('focus', evt);
            },
            //blur
            onBlur: function (evt) {
                this.$emit('blur', evt);
            },
            //改变 input style
            changeInputStyle: function () {
                var n = 0.2, m = 0.5;
                if (!!this.unit) {
                    n = 2, m = 2;
                    n += (this.unit.length + 0.5);
                }
                this.$refs.input.style = "padding-right: " + n + "rem";
                this.$refs.unit.style = "right: " + m + "rem";
            }
        },
        //加载后执行
        mounted: function () {
            var options = {
                customActionClass: "iconfont icon-my-custom icon-hricon43",
                customActionSelector: ".icon-hricon43"
            };
            $(this.$refs.input).input(options);
            //改变样式
            this.changeInputStyle();
        }
    })
})(Vue, fox.$, "fox-select");

/**
 * data time text
 */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
               <div class="wp-input-cell-header" v-show="hasLabel">\
                 <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div>\
                 <div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                 <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
               </div>\
               <div class="wp-input-cell-content wp-input-cell-content-text" v-bind:style="style">\
                  <div class="fox-input-row">\
                      <input ref="input" type="text" class="fox-input-custom"  v-bind:value="value" \
                      v-bind:placeholder="placeholder" v-bind:readonly="(!mEdit || mReadonly)" v-bind:disabled="mDisabled"\
                      v-on:customInput="selectAction()" v-on:tap="selectAction(1)" v-on:focus="onFocus($event)" \
                      v-on:blur="onBlur($event)" v-on:input="onChange($event,$event.target.value)">\
                  </div>\
               </div>\
              </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //placeholder
            placeholder: {
                type: String,
                required: false
            },
            //value
            value: {
                type: String,
                required: false
            },
            //只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可编辑
            edit: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //options
            options: {
                type: [Object, String],
                required: false
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //数据
        data: function () {
            return {
                //提示
                innerTip: '',
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        //计算
        computed: {
            //是否有label
            hasLabel: function () {
                return (this.$slots.default || this.label && this.label.length > 0)
            },
            //计算style
            style: function () {
                if (this.hasLabel) {
                    return ""
                }
                return "margin-top:0"
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            },
            //是否可编辑
            mEdit: function () {
                return this.edit;
            }
        },

        //方法
        methods: {
           //change
           onChange: function (evt, value) {
             if(this.mEdit){
              this.$emit('change', value);
            }
           },
            //选中事件
            selectAction: function (flag) {
                //可编辑的情况下，点击文本框(flag==1)不弹出layer
                if (flag && this.mEdit) {
                    return;
                }
                //只读的情况下，不弹出layer
                if (this.mReadonly) {
                    return;
                }
                //禁用情况下，不弹出layer
                if (this.mDisabled) {
                    return;
                }

                //触发focus
                this.$emit('focus');
                //引用this
                var _this = this;
                var args = {
                    beginYear: 1900,
                    endYear: 2200
                };

                if (this.options != void(0)) {
                    var opt = this.options;
                    if (fox.type(opt) == "string") {
                        opt = JSON.parse(opt);
                    }
                    fox.extend(args, opt);
                }
                var textValue = this.$refs.input.value;
                if (textValue != void(0)) {
                    args.value = textValue;
                }

                var picker = new $.DtPicker(args);
                picker.show(function (rs) {
                    /*
                     * rs.value 拼合后的 value
                     * rs.text 拼合后的 text
                     * rs.y 年，可以通过 rs.y.value 和 rs.y.text 获取值和文本
                     * rs.m 月，用法同年
                     * rs.d 日，用法同年
                     * rs.h 时，用法同年
                     * rs.i 分（minutes 的第二个字母），用法同年
                     */
                    _this.$emit('change', rs.text);
                    _this.$refs.input.value = rs.text;
                    /*
                     * 返回 false 可以阻止选择框的关闭
                     * return false;
                     */
                    /*
                     * 释放组件资源，释放后将将不能再操作组件
                     * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
                     * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
                     * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
                     */
                    picker.dispose();
                });
            },
            //focus
            onFocus: function (evt) {
                this.$emit('focus', evt);
            },
            //blur
            onBlur: function (evt) {
                this.$emit('blur', evt);
            }
        },

        //加载后执行
        mounted: function () {
            var options = {
                customActionClass: "iconfont icon-my-custom icon-rili",
                customActionSelector: ".icon-rili"
            };
            $(this.$refs.input).input(options);
        }

    })
})(Vue, fox.$, "fox-datetime");

/**
 * icon text
 */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
               <div class="wp-input-cell-header" v-show="hasLabel">\
                 <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div>\
                 <div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                 <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
               </div>\
               <div class="wp-input-cell-content wp-input-cell-content-text" v-bind:style="style">\
                  <div class="fox-input-row">\
                      <input ref="input" type="text" class="fox-input-custom"  v-bind:value="value" \
                      v-bind:placeholder="placeholder" v-bind:readonly="(!mEdit || mReadonly)" v-bind:disabled="mDisabled"\
                      v-on:customInput="selectAction()" v-on:tap="selectAction(1)" v-on:input="onChange($event,$event.target.value)" \
                      v-on:focus="onFocus($event)" v-on:blur="onBlur($event)">\
                      <span ref="unit" class="wp-input-unit">{{unit}}</span>\
                  </div>\
               </div>\
              </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //placeholder
            placeholder: {
                type: String,
                required: false
            },
            //是否只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false
                }
            },
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false
                }
            },
            //是否可编辑
            edit: {
                type: Boolean,
                required: false,
                default: function () {
                    return true
                }
            },
            //单位
            unit: {
                type: String,
                required: false
            },
            //value
            value: {
                type: String,
                required: false
            },
            //icon
            icon: {
                type: String,
                required: true
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //数据
        data: function () {
            return {
                //提示
                innerTip: '',
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        //计算
        computed: {
            //是否有label
            hasLabel: function () {
                return (this.$slots.default || this.label && this.label.length > 0)
            },
            //计算style
            style: function () {
                if (this.hasLabel) {
                    return ""
                }
                return "margin-top:0"
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            },
            //是否可编辑
            mEdit: function () {
                return this.edit;
            }
        },

        //方法
        methods: {
            //select action
            selectAction: function (flag) {
                // //可编辑的情况下，点击文本框(flag==1)不触发事件
                if (flag && this.mEdit) {
                    return;
                }
                //只读不处理事件
                if (this.mReadonly) {
                    return;
                }
                //禁用不处理事件
                if (this.mDisabled) {
                    return;
                }
                //发送事件
                this.$emit("action");
            },
            //change
            onChange: function (evt, value) {
                this.$emit('change', value);
            },
            //focus
            onFocus: function (evt) {
                //发送focus事件
                this.$emit('focus', evt);
                //设置全选状态
                this.$refs.input.select();
            },
            //blur
            onBlur: function (evt) {
                this.$emit('blur', evt);
            },
            //改变 input style
            changeInputStyle: function () {
                var n = 0.2, m = 0.5;
                if (!!this.unit) {
                    n = 2, m = 2;
                    n += (this.unit.length + 0.5);
                }
                this.$refs.input.style = "padding-right: " + n + "rem";
                this.$refs.unit.style = "right: " + m + "rem";
            }
        },

        //加载后执行
        mounted: function () {
            var options = {};
            var items = this.icon.split(/\s/g);

            options.customActionSelector = "." + items[items.length - 1];
            options.customActionClass = "icon-my-custom";
            for (var i = 0; i < items.length; i++) {
                options.customActionClass += " ";
                options.customActionClass += items[i];
            }
            $(this.$refs.input).input(options);
            //改变样式
            this.changeInputStyle();
        }
    })
})(Vue, fox.$, "fox-text-icon");

/**
 * ID card text
 */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
               <div class="wp-input-cell-header" v-show="hasLabel">\
                 <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div>\
                 <div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                 <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
               </div>\
               <div class="wp-input-cell-content wp-input-cell-content-text" v-bind:style="style">\
                  <div class="fox-input-row">\
                     <input ref="input" type="text" class="fox-input-custom" v-bind:readonly="(!mEdit || mReadonly)" v-bind:disabled="mDisabled"\
                     v-bind:value="value"  v-bind:placeholder="placeholder" v-on:customInput="showAction()"  v-on:tap="showAction(1)" \
                     v-on:input="onChange($event,$event.target.value)" v-on:focus="onFocus($event)" v-on:blur="onBlur($event)">\
                  </div>\
               </div>\
              </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //placeholder
            placeholder: {
                type: String,
                required: false
            },
            //只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可编辑
            edit: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //value
            value: {
                type: String,
                required: false
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //数据
        data: function () {
            return {
                //提示
                innerTip: '',
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        //计算
        computed: {
            //是否有label
            hasLabel: function () {
                return (this.$slots.default || this.label && this.label.length > 0)
            },
            //计算style
            style: function () {
                if (this.hasLabel) {
                    return ""
                }
                return "margin-top:0"
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            },
            //是否可编辑
            mEdit: function () {
                return this.edit;
            }
        },

        //方法
        methods: {
            //显示
            showAction: function (flag) {
                // //可编辑的情况下，点击文本框(flag==1)不触发事件
                if (flag && this.mEdit) {
                    return;
                }
                //只读不处理事件
                if (this.mReadonly) {
                    return;
                }
                //禁用不处理事件
                if (this.mDisabled) {
                    return;
                }
                this.$emit("action");
                //不再建议使用，show事件后面会抛弃
                this.$emit("show");
            },
            //change
            onChange: function (evt, value) {
                this.$emit('change', value);
            },
            //focus
            onFocus: function (evt) {
                this.$emit('focus', evt);
            },
            //blur
            onBlur: function (evt) {
                this.$emit('blur', evt);
            }
        },

        //加载后执行
        mounted: function () {
            var options = {
                customActionClass: "iconfont icon-my-custom icon-my-custom-full icon-tupian",
                customActionSelector: ".icon-tupian"
            };
            $(this.$refs.input).input(options);
        }
    })
})(Vue, fox.$, "fox-idcard");

/**
 * photo集合
 */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
                <div class="wp-input-cell-header">\
                    <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div><div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                    <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
                </div>\
                <div class="wp-input-cell-content wp-input-cell-content-img-set">\
                    <img v-if="!hasPhoto" v-bind:src="defaultImage" v-on:tap="onTouch()"/>\
                    <div v-else class="wp-input-cell-content-img-items" v-on:tap="onTouch()">\
                       <div>\
                           <img v-for="(item,index) in mImages" v-bind:src="item"/>\
                       </div>\
                    </div>\
                    <div v-bind:class="btnClass">\
                        <button v-bind:disabled="mDisabled||mReadonly||takeDisabled" type="button" class="fox-btn" v-on:tap="takePhoto()" v-show="hasTake">重拍</button>\
                        <button v-bind:disabled="mDisabled||mReadonly||textDisabled" type="button" class="fox-btn" v-on:tap="takeText()" v-bind:style="textBtnStyle" v-show="hasText">备注</button>\
                        <button v-bind:disabled="mDisabled||mReadonly||deleteDisabled" type="button" class="fox-btn" v-on:tap="deletePhoto()" v-show="hasDelete">删除</button>\
                    </div>\
                </div>\
             </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //是否有备注
            hasText: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否有拍照按钮
            hasTake: {
                type: Boolean,
                required: false,
                default: function () {
                    return true;
                }
            },
            //是否有删除
            hasDelete: {
                type: Boolean,
                required: false,
                default: function () {
                    return true;
                }
            },
            //只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //重拍按钮是否可用
            takeDisabled:{
              type: Boolean,
              required: false,
              default: function () {
                  return false;
              }
            },
            //备注是否可用
            textDisabled:{
              type: Boolean,
              required: false,
              default: function () {
                  return false;
              }
            },
            //删除否可用
            deleteDisabled:{
              type: Boolean,
              required: false,
              default: function () {
                  return false;
              }
            },
            //value
            value: {
                type: [Object],
                required: false,
                default: function () {
                    return {
                        images: [],
                        text: ""
                    }
                }
            },
            //拍照前事件
            beforeTake: {
                type: [Function],
                required: false
            },
            //策略
            policy: {
                type: String,
                required: false,
                default: function () {
                    return "replace"
                }
            },
            //options
            options: {
                type: [Object, String],
                required: false,
                default: function () {
                    return {
                        type: "back",
                        mode: "burstShot",//连拍模式
                     	// minWidth: 900, //图片最小宽度
                        // minHeight: 900,//图片最小高度
                        level:"normal",
                        quality: 100    //图片质量 30~100
                    }
                }
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        // 监控
        watch: {
            //value
            value: {
                handler: function (newValue, oldValue) {
                    this.images = newValue.images;
                    this.text = newValue.text;
                },
                deep: true
            }
        },

        //数据
        data: function () {
            var img = "custom/templates/white-puffy/images/photos.png";
            return {
                //inner tip
                innerTip: '',
                //默认图片
                defaultImage: img,
                //text
                text: this.value.text,
                //image
                images: this.value.images,
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        //计算
        computed: {
            //判断是否有图片
            btnClass: function () {
                if (this.hasPhoto) {
                    return "wp-input-cell-content-img-show";
                } else {
                    return "wp-input-cell-content-img-hide";
                }
            },
            //备注button样式
            textBtnStyle: function () {
                var style = {};
                if (this.text && this.text.length > 0) {
                    style.background = "#eb8497"
                }
                return style;
            },
            //获取image 列表
            mImages: function () {
                if (!this.images) {
                    return [];
                }
                var list = [];
                for (var i = 0; i < 9 && i < this.images.length; i++) {
                    list.push(this.images[i]);
                }
                return list;
            },
            //是否有photo
            hasPhoto: function () {
                return this.images && this.images.length > 0;
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },

        //方法
        methods: {
            //监听touch事件
            onTouch: function () {
                if (this.hasPhoto) {
                    this.showPhoto(this.images);
                } else {
                    this.takePhoto();
                }
            },

            //拍照
            takePhoto: function () {
                //只读和禁用都不能拍照
                if (this.mReadonly || this.mDisabled) {
                    return;
                }
                //是否有before take函数
                if (fox.type(this.beforeTake) == "function") {
                    var _this = this;
                    //定义事件调用链路
                    var eventChain = new fox.EventChain();
                    eventChain.post(function () {
                        _this.beforeTake.call(this, eventChain);
                    }).post(function(){
                        setTimeout(_this.takeFn,0);
                    })
                } else {
                    this.takeFn();
                }
            },

            //拍照动作
            takeFn: function () {
                //通知focus事件
                this.$emit("focus");
                var args = {
                    type: "back",
                    location:true,
                    watermark:true,
                    mode: "burstShot",//连拍模式
                    minWidth: 900, //图片最小宽度
                    minHeight: 900,//图片最小高度
                    quality: 100    //图片质量 30~100
                };
                //克隆配置
                fox.extend(args, this.options);
                //获取相机类型
                var type = args.type;
                if (!type) {
                    type = "back";
                }
                if (args.path) {
                    args.path = $.getAbsolutePath(args.path);
                }

                var _this = this;
                //拍照
                fox.device.callCamera(type, function (code, message, data) {
                    var paths = [];
                    if (code == 0) {
                        var images = [];
                        var array = JSON.parse(data);
                        for (var i = 0; i < array.length; i++) {
                            paths.push(array[i].path || "data:image/png;base64," + array[i].base64Data);
                            images.push(array[i].base64Data ? ("data:image/png;base64," + array[i].base64Data) : array[i].path);
                        }
                        if (_this.policy === "replace") {
                            _this.images = images;
                        } else {
                            paths = _this.value.images.concat(paths);
                            _this.images = _this.images.concat(images);
                        }
                        _this.innerTip = "";
                    } else if(code == 1){
                      //取消什么都不执行
                      return;
                    } else {
                        _this.innerTip = "拍照失败";
                        if (_this.policy === "replace") {
                            paths = _this.images = [];
                        } else {
                            paths = this.value.images;
                        }
                    }

                    //更新数据
                    var updateData = {
                        images: paths,
                        text: _this.value.text
                    };
                    _this.$emit("change", updateData);
                    //发送拍照action
                    _this.$emit("action",{
                        type:"takePhoto",
                        code:code
                    });

                }, args);
            },

            //获取备注
            takeText: function () {
                //引用
                var _this = this;
                //打开备注对话框
                fox.$.openRemarkDialog(function (code, message, data) {
                    //code不为0，不进行处理
                    if (code == 0) {
                        //更新text
                        _this.text = data;
                        //更新数据
                        var updateData = {
                            images: _this.images,
                            text: data
                        };
                        _this.$emit("change", updateData);
                    }
                    //发送获取备注action
                    _this.$emit("action",{
                        type:"takeText",
                        code:code
                    });
                }, _this.text)
            },

            //删除照片
            deletePhoto: function () {
                //this引用
                var _this = this;
                //底部对话框
                var layerIndex = fox.layer.open({
                    content: '确定删除所有图片？'
                    , btn: ['确定', '取消']
                    , yes: function (index) {
                        fox.layer.close(layerIndex);
                        var old_images = _this.images;
                        //设置默认照片
                        _this.images = [];
                        _this.text="";
                        //更新数据
                        var updateData = {
                            images: [],
                            text: ""
                        };
                        _this.$emit("change", updateData);
                        //发送删除action
                        _this.$emit("action",{
                            type:"delete",
                            code:0,
                            data:old_images
                        });
                    }
                    , no: function (index) {
                        fox.layer.close(layerIndex);
                    }
                });

            },

            //显示图片
            showPhoto: function (path) {
                //禁用都不能查看照片
                if (this.mDisabled) {
                    return;
                }
                //image图片展示
                fox.ext.openImageViewer(this.images);
            }
        },

        //加载后执行
        mounted: function () {
        }

    })
})(Vue, fox.$, "fox-photo-set");

/**
 * photo
 */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div class="wp-input-cell">\
                <div class="wp-input-cell-header">\
                    <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div><div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                    <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
                </div>\
                <div class="wp-input-cell-content wp-input-cell-content-img">\
                    <img v-bind:src="image|formatImage" v-on:tap="onTouch()"/>\
                    <div v-bind:class="btnClass">\
                        <button v-bind:disabled="mDisabled||mReadonly||takeDisabled" type="button" class="fox-btn" v-on:tap="takePhoto()" v-show="hasTake">重拍</button>\
                        <button v-bind:disabled="mDisabled||mReadonly||textDisabled" type="button" class="fox-btn" v-on:tap="takeText()" v-bind:style="textBtnStyle" v-show="hasText">备注</button>\
                        <button v-bind:disabled="mDisabled||mReadonly||deleteDisabled" type="button" class="fox-btn" v-on:tap="deletePhoto()" v-show="hasDelete">删除</button>\
                    </div>\
                </div>\
             </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },
            //提示
            tip: {
                type: String,
                required: false
            },
            //是否有备注
            hasText: {
                type: Boolean,
                required: false,
                default: function () {
                    return true;
                }
            },
            //是否有拍照按钮
            hasTake: {
                type: Boolean,
                required: false,
                default: function () {
                    return true;
                }
            },
            //是否有删除
            hasDelete: {
                type: Boolean,
                required: false,
                default: function () {
                    return true;
                }
            },
            //只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //重拍按钮是否可用
            takeDisabled:{
              type: Boolean,
              required: false,
              default: function () {
                  return false;
              }
            },
            //备注是否可用
            textDisabled:{
              type: Boolean,
              required: false,
              default: function () {
                  return false;
              }
            },
            //删除否可用
            deleteDisabled:{
              type: Boolean,
              required: false,
              default: function () {
                  return false;
              }
            },
            //value
            value: {
                type: [Object],
                required: false,
                default: function () {
                    return {
                        image: "",
                        text: ""
                    }
                }
            },
            //拍照前事件
            beforeTake: {
                type: [Function],
                required: false
            },
            //options
            options: {
                type: [Object, String],
                required: false,
                default: function () {
                    return {
                        type: "back",
                        minWidth: 900, //图片最大宽度
                        minHeight: 900,//图片最小宽度
                        quality: 100    //图片质量 30~100
                    }
                }
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        // 监控
        watch: {
            //value
            value: {
                handler: function (newValue, oldValue) {
                    if (newValue == void(0)) {
                        this.image = this.defaultImage;
                        this.text = "";
                    }

                    if (newValue.image == void(0) || newValue.image == "") {
                        this.image = this.defaultImage;
                    } else {
                        this.image = newValue.image;
                    }
                    this.text = newValue.text;
                },
                deep: true
            }
        },

        //数据
        data: function () {
            var img = "custom/templates/white-puffy/images/photo.png";
            return {
                //inner tip
                innerTip: '',
                //默认图片
                defaultImage: img,
                //text
                text: this.value.text,
                //image
                image: this.value.image || img,
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        //计算
        computed: {
            //判断是否有图片
            btnClass: function () {
                if (this.hasPhoto) {
                    return "wp-input-cell-content-img-show";
                } else {
                    return "wp-input-cell-content-img-hide";
                }
            },
            //备注button样式
            textBtnStyle: function () {
                var style = {};
                if (this.text && this.text.length > 0) {
                    style.background = "#eb8497"
                }
                return style;
            },
            //是否有photo
            hasPhoto: function () {
                return !(this.image == this.defaultImage);
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },

        //方法
        methods: {
            //监听touch事件
            onTouch: function () {
                if (this.hasPhoto) {
                    this.showPhoto(this.image);
                } else {
                    this.takePhoto();
                }
            },

            //拍照
            takePhoto: function () {
                //只读和禁用都不能拍照
                if (this.mReadonly || this.mDisabled) {
                    return;
                }
                //是否有before take函数
                if (fox.type(this.beforeTake) == "function") {
                    var _this = this;
                    //定义事件调用链路
                    var eventChain = new fox.EventChain();
                    eventChain.post(function () {
                        _this.beforeTake.call(this, eventChain);
                    }).post(this.takeFn)
                } else {
                    this.takeFn();
                }
            },

            //拍照动作
            takeFn: function () {
                //通知focus事件
                this.$emit("focus");
                var args = {
                    type: "back",
                    location:true,
                    watermark:true,
                    // minWidth: 900, //图片最大宽度
                    // minHeight: 900,//图片最小宽度
                    level:"normal",
                    quality: 100    //图片质量 30~100
                };
                //克隆配置
                fox.extend(args, this.options);
                //获取相机类型
                var type = args.type;
                if (!type) {
                    type = "back";
                }
                if (args.path) {
                    args.path = $.getAbsolutePath(args.path);
                }

                var _this = this;
                //拍照
                fox.device.callCamera(type, function (code, message, data) {
                    var image = "";
                    if (code == 0) {
                        var data = JSON.parse(data);
                        image = data.path || "data:image/png;base64," + data.base64Data;
                        _this.image = data.base64Data ? ("data:image/png;base64," + data.base64Data) : data.path;
                        //清空备注
                        _this.text="";
                        _this.innerTip = "";
                    } else if(code == 1){
                      //取消什么都不执行
                      return;
                    } else {
                        //设置默认图片
                        _this.image = this.defaultImage;
                        image = "";
                        _this.innerTip = "拍照失败";
                    }

                    //更新图片，并更新备注
                    var updateData = {
                        image: image,
                        text: ""
                    };
                    _this.$emit("change", updateData);
                    //发送拍照action
                    _this.$emit("action",{
                        type:"takePhoto",
                        code:code
                    });

                }, args);
            },

            //获取备注
            takeText: function () {
                //引用
                var _this = this;
                var options={
                    "readonly":this.text!==void(0) && this.text.length>0
                };
                //打开备注对话框
                fox.$.openRemarkDialog(function (code, message, data) {
                    //code不为0，不进行处理
                    if (code != 0) {
                        return;
                    }

                    //更新数据
                    var updateData = {
                        image: _this.image,
                        text: data
                    };
                    var ss=data.split("\n");
                    var opts={
                        path:_this.image,
                        watermarks:ss,
                        x:10,
                        y:10
                    };
                    fox.native.addWatermark(opts,function(code,message,resData){
                       if(code!=0){
                           fox.layer.open("添加备注失败");
                       }else{
                           //更新text
                           _this.text = data;
                           _this.$emit("change", updateData);
                       }
                        //发送获取备注action
                        _this.$emit("action",{
                            type:"takeText",
                            code:code
                        });
                    });
                }, _this.text,options)
            },

            //删除照片
            deletePhoto: function () {
                //只读和禁用都不能拍照
                if (this.mReadonly || this.mDisabled) {
                    return;
                }
                //this引用
                var _this = this;
                var layerIndex = fox.layer.open({
                    content: '确定删除此图片？'
                    , btn: ['确定', '取消']
                    , yes: function (index) {
                        fox.layer.close(layerIndex);
                        var old_image = _this.image;
                        //设置默认照片
                        _this.image = this.defaultImage;
                        _this.text="";
                        //更新数据
                        var updateData = {
                            image: "",
                            text: ""
                        };
                        _this.$emit("change", updateData);
                        //发送删除action
                        _this.$emit("action",{
                            type:"delete",
                            code:0,
                            data:old_image
                        });
                    }
                    , no: function (index) {
                        fox.layer.close(layerIndex);
                    }
                })
            },
            //显示图片
            showPhoto: function (path) {
                //禁用都不能查看照片
                if (this.mDisabled) {
                    return;
                }
                //image图片展示
                fox.ext.openImageViewer([path]);
            }
        },
        //过滤器
        filters: {
            formatImage: function (value) {
                if (!value) {
                    return '';
                }
                return value + "?time=" + (new Date().getTime());
            }
        },

        //加载后执行
        mounted: function () {}

    })
})(Vue, fox.$, "fox-photo");

/**
 * frame
 */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div v-bind:class="cls">\
                <div class="wp-input-cell-header">\
                    <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div><div class="wp-input-cell-h-text"><slot>{{label}}</slot></div>\
                    <div class="wp-input-cell-h-tip">{{tip}}{{innerTip}}</div>\
                </div>\
                <div class="wp-input-cell-content wp-input-cell-content-img">\
                    <img v-bind:src="value.image" v-on:tap="onTouch()" v-show="hasPhoto">\
                    <a v-bind:class="iconCls" v-on:tap="onTouch()" v-show="!hasPhoto"></a>\
                </div>\
             </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },

            //提示
            tip: {
                type: String,
                required: false
            },
            //只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //value
            value: {
                type: [Object, String],
                required: true,
                default: function () {
                    return {
                        icon: "",
                        image: "",
                        text: ""
                    }
                }
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //数据
        data: function () {
            return {
                //class
                cls: {"wp-input-cell": true},
                //inner tip
                innerTip: '',
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //mark style
                innerMarkStyle: {}
            }
        },

        computed: {
            //是否有photo
            hasPhoto: function () {
                if (this.value.image && this.value.image.length > 0) {
                    return true;
                } else {
                    return false;
                }
            },
            //icon class
            iconCls: function () {
                return "icon iconfont " + this.value.icon;
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },

        //方法
        methods: {
            //动作触发
            onTouch: function () {
                //只读和禁用都不触发事件
                if (this.mReadonly || this.mDisabled) {
                    return;
                }
                //发送focus
                this.$emit("focus");
                //发送action
                this.$emit("action");
            }
        },

        //加载后执行
        mounted: function () {
        }

    })
})(Vue, fox.$, "fox-frame");

/**
 * fox html
 */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div v-bind:class="cls">\
                <div class="wp-input-cell-header">\
                    <div class="wp-input-cell-h-mark" v-bind:style="innerMarkStyle"></div><div class="wp-input-cell-h-text"><slot name="label">{{label}}</slot></div>\
                    <div class="wp-input-cell-h-tip">{{tip}}</div>\
                </div>\
                <div class="wp-input-cell-content">\
                   <slot name="html"></slot>\
                </div>\
             </div>\
            ',

        //属性
        props: {
            //标签名
            label: {
                type: String,
                required: false
            },

            //提示
            tip: {
                type: String,
                required: false
            }
        },

        //数据
        data: function () {
            return {
                //input class
                cls: {"wp-input-cell": true},
                //mark style
                innerMarkStyle: {}
            }
        }
    })
})(Vue, fox.$, "fox-html");

/**
 *  table
 */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div v-bind:class="tableCls">\
                <div class="wp-table-tools">\
                    <slot></slot>\
                </div>\
                <table>\
                  <thead>\
                    <tr>\
                       <template v-for="item in mHeader">\
                           <th v-bind:style="item.style">{{item.text}}</th>\
                       </template>\
                    </tr>\
                  </thead>\
                  <tbody ref="bodyRef" v-bind:style="bodyStyle">\
                    <tr v-for="(row,i) in mData" v-on:tap="rowSelect(i)" v-bind:style="mRowStyle(i)">\
                       <template v-for="(column,j) in row">\
                           <td v-if="column.type == 1" class="td-center" v-bind:style="column.style">\
                               <button v-bind:disabled="mDisabled || mReadonly" type="button" class="fox-btn" v-on:tap="cellClick($event,i,j)">{{column.text}}</button>\
                           </td>\
                           <td v-else-if="column.type == 2" class="td-center" v-bind:style="column.style" v-html="column.text">\
                           </td>\
                           <td v-else-if="column.type == 3" class="td-center" v-bind:style="column.style" v-text="cellFormat(column)">\
                           </td>\
                           <td v-else class="td-center" v-bind:style="column.style">{{column.text}}</td>\
                       </template>\
                     </tr>\
                  </tbody>\
                </table>\
             </div>\
            ',

        //属性
        props: {
            //header
            header: {
                type: [Array],
                required: true
            },
            //content
            content: {
                type: [Array],
                required: false
            },
            //内容高度
            contentHeight: {
                type: [String, Number],
                required: false
            },
            //内容滚动接近头部偏差
            offsetTop: {
                type: [Number],
                required: false,
                default: function () {
                    return 10;
                }
            },
            //内容滚动接近底部偏差
            offsetBottom: {
                type: [Number],
                required: false,
                default: function () {
                    return 10;
                }
            },
            //滚动位置（top,bottom）
            scrollPosition: {
                type: [String],
                required: false
            },
            //是否滚动到最底端
            scrollBottom: {
                type: [Boolean],
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可以选择
            selectPolicy: {
                type: [String],
                required: false,
                default: function () {
                    return "none";
                }
            },
            //value
            selectedRows: {
                type: [Array],
                required: false,
                default: function () {
                    return [];
                }
            },
            //只读
            readonly: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            }
        },
        //model
        model: {
            prop: 'selectedRows',
            event: 'select'
        },
        //观察
        watch: {
            //滚动到顶部
            scrollPosition: function (newVal, oldVal) {
                //没设置内容高度，处理
                if (this.contentHeight == void(0)) {
                    return;
                }
                this.adjustScrollPosition(newVal);
            }
        },
        //数据
        data: function () {
            return {
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false,
                //记录最近的scroll top
                lastScrollTop: 1
            }
        },
        //计算
        computed: {
            //table class
            tableCls: function () {
                return {"wp-table-cell": true};
            },
            //table body style
            bodyStyle: function () {
                if (this.contentHeight != void(0)) {
                    var s = this.contentHeight;
                    if (fox.type(this.contentHeight) == "number") {
                        s = this.contentHeight + "px";
                    }
                    return {height: s}
                }
                return {};
            },
            //获取header数据
            mHeader: function () {
                var list = [];
                for (var i = 0; i < this.header.length; i++) {
                    //获取元素
                    var s = this.header[i];
                    //创建item
                    var item = {};
                    if (typeof s === "string") {
                        item.text = s;
                    } else {
                        item = s;
                    }
                    item.style = item.style ? item.style : "{}";

                    list.push(item);
                }
                return list;
            },
            //获取data数据
            mData: function () {
                var list = [];
                for (var i = 0; i < this.content.length; i++) {
                    var row = this.content[i];
                    var rowList = [];
                    for (var j = 0; j < row.length; j++) {
                        //获取元素
                        var s = row[j];
                        if (s === undefined) {
                            s = "";
                        }
                        //创建item
                        var item = {};
                        if (fox.type(s) === "string") {
                            item.text = s;
                            item.style = this.mHeader[j].columnStyle;
                            item.type = this.mHeader[j].columnType;
                        } else if (fox.type(s) === "object") {
                            item = s;
                            item.style = item.style ? item.style : this.mHeader[j].columnStyle;
                            item.type = item.type ? item.type : this.mHeader[j].columnType;
                        }
                        item.style = item.style ? item.style : "{}";
                        rowList.push(item);
                    }
                    list.push(rowList);
                }
                return list;
            },
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },
        //方法
        methods: {
            //判断元素是否包含在数组中
            _contains: function (list, val) {
                var flag = false;
                for (var i = 0; i < this.selectedRows.length; i++) {
                    if (this.selectedRows[i] == val) {
                        flag = true;
                        break;
                    }
                }
                return flag;
            },
            //cell click
            cellClick: function (evt, i, j) {
                //禁用状态下，不能cell click
                if (this.mDisabled) {
                    return;
                }
                var arg = {
                    row: i,
                    column: j
                };
                this.$emit("cellclick", arg);
                evt.stopPropagation();
            },
            //row select
            rowSelect: function (row) {
                //禁用状态下，不能选择
                if (this.mDisabled) {
                    return;
                }
                if (this.selectPolicy === "none") {
                    return;
                }
                //拷贝选中rows
                var list = this.selectedRows.slice(0);
                //加入选中
                if (list.length === 0) {
                    list.push(row);
                    this.$emit("select", list);
                    return;
                }
                var flag = this._contains(list, row);
                if (flag) {
                    var i = 0;
                    for (; i < list.length; i++) {
                        if (list[i] == row) {
                            list.splice(i, 1);
                            break;
                        }
                    }
                } else {
                    if (this.selectPolicy === "single") {
                        list = [];
                    }
                    var i = 0;
                    for (; i < list.length; i++) {
                        if (list[i] >= row) {
                            list.splice(i, 0, row);
                            break;
                        }
                    }
                    if (i == list.length) {
                        list.push(row);
                    }
                }
                this.$emit("select", list);
            },
            //获取row style
            mRowStyle: function (row) {
                var flag = this._contains(this.selectedRows, row);
                if (flag) {
                    return "background:#d5f5f9";
                } else {
                    return ""
                }
            },
            //调整滚动位置
            adjustScrollPosition: function (pos) {
                if (this.$refs.bodyRef == void(0) || pos == void(0)) {
                    return;
                }
                if (pos == "top") {
                    fox.$(this.$refs.bodyRef).scroll2Top();
                } else if (pos == "bottom") {
                    fox.$(this.$refs.bodyRef).scroll2Bottom();
                } else {
                    var n = Number(pos);
                    fox.$(this.$refs.bodyRef).scroll2Pos(pos);
                }
            },
            //cell格式化
            cellFormat:function(cell){
                if(cell.type == "3"){
                    var n=Number(cell.text);
                    var rates=cell.rates||1;
                    n*=rates;
                    var t=$.moneyFormat(String(n),cell.decimalLength||2);
                    if(cell.unit){
                        t=t+cell.unit;
                    }
                    return t;
                }else{
                    return cell.text;
                }

            }

        },
        //加载后执行
        mounted: function () {
            //没设置内容高度，不监听滚动
            if (this.contentHeight == void(0)) {
                return;
            }
            //调整滚动条位置
            this.adjustScrollPosition(this.scrollPosition);
            //获取body引用
            var body = this.$refs.bodyRef;
            //记录scroll top
            this.lastScrollTop = body.scrollTop;
            //this引用
            var _this = this;
            //监听scroll事件
            body.onscroll = function () {
                var n = body.scrollTop - _this.lastScrollTop;
                //判断是否滑动底部
                if (n < 0 && fox.$.isScrollTop(body, _this.offsetTop)) {
                    _this.$emit("scrolltop");
                }
                //判断是否滑动底部
                else if (n > 0 && fox.$.isScrollBottom(body, _this.offsetBottom)) {
                    _this.$emit("scrollbottom");
                }
                //更新last scroll top
                _this.lastScrollTop = body.scrollTop;
            }
        }

    })
})(Vue, fox.$, "fox-table");

/**
 * input row
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
              <div v-bind:class="cls">\
                <slot></slot>\
              </div>\
            ',
        //data
        data: function () {
            return {
                cls: {"wp-input-row": true}
            }
        }

    })
})(Vue, fox.$, "fox-input-row");

/**
 * group
 */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
              <div v-bind:class="cellClass">\
                 <div class="wp-group-header">\
                    <div class="wp-group-h-title" v-bind:style="[titleStyle]">\
                      <div class="wp-group-h-index" v-bind:style="[indexStyle]">{{no}}</div>\
                         <span class="wp-group-h-text">{{label}}</span>\
                      </div>\
                      <slot name="tip"></slot>\
                    </div>\
                   <div class="wp-group-content" >\
                     <slot></slot>\
                   </div>\
              </div>\
            ',

        //属性
        props: {
            //序号
            no: {
                type: [String, Number],
                required: true
            },
            //标签名
            label: {
                type: String,
                required: true
            },
            //颜色
            color: {
                type: String,
                required: false
            }
        },

        data: function () {
            return {
                titleStyle: {
                    backgroundColor: this.color ? this.color : "#ed6d1f"
                },
                indexStyle: {
                    borderColor: this.color ? this.color : "#ed6d1f",
                    color: this.color ? this.color : "#ed6d1f"
                },
                cellClass: {
                    "wp-group": true
                }
            }
        }
    })

})(Vue, fox.$, "fox-group");

/**
 * page
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
              <div v-bind:class="cls">\
                <slot></slot>\
              </div>\
            ',
        //属性
        props: {
            //options
            options: {
                type: [Object],
                require: false
            }
        },
        //data
        data: function () {
            return {
                cls: {"wp-page": true}
            }
        },

        //方法
        methods: {
            /**
             * 调整page size
             */
            adjustPageSize: function adjustPageSize() {
                var height;
                if (this.options && this.options.contentHeight) {
                    height = this.options.contentHeight;
                }
                //如果没设置内容高度，那么直接设置为屏幕当前的高度
                if (height == void(0) || height == -1) {
                    height = fox.$.getAvailableHeight();
                }
                //设置page 高度
                fox.$(".wp-content").css("height", height);

            }
        },

        //加载后执行
        mounted: function () {
            //调整page size
            this.adjustPageSize();
        }

    })


})(Vue, fox.$, "fox-page");

/**
 * header
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
             <header v-bind:class="cls">\
                <div class="wp-h-back" v-on:tap="back()"><a class="icon iconfont icon-fanhui"></a></div>\
                <div v-bind:class="mTitleClass">{{mOptions.title}}</div>\
                <template v-if="mOptions.steps">\
                     <div class="wp-step-group" v-bind:style="mStepGroupStyle">\
                         <div class="wp-step-line"></div>\
                         <div class="wp-step-cell" v-for="(item,index) in mOptions.steps" v-on:tap="select(index)">\
                             <div class="wp-step-mark">\
                                 <a v-bind:class="item._tipClass"></a>\
                                 <a v-bind:class="item._iconClass"></a>\
                             </div>\
                             <div v-bind:class="item._textClass">\
                               {{item.text}}\
                             </div>\
                         </div>\
                      </div>\
                      <button type="button" v-bind:disabled="!mCanSubmit" class="fox-btn" v-on:tap="submit()">{{mOptions.submitText}}</button>\
                </template>\
             </header>\
            ',

        //属性
        props: {
            //options
            options: {
                type: [Object],
                require: true
            }
        },

        //数据
        data: function () {
            return {
                //记录最近一个step
                lastSelectStep: 0,
                //header class
                cls: {"wp-bar": true, "wp-header": true},

            }
        },

        //计算数据
        computed: {
            //初始化options
            mOptions: function () {
                //克隆options
                var opts = fox.extend(true, {}, this.options);
                //默认options title
                opts.title = this.options.title || "";
                //是否有步骤
                var hasStep = opts.steps && opts.steps.length > 0;
                //有步骤模式
                if (hasStep) {
                    //默认options submit text
                    opts.submitText = this.options.submitText || "全部提交";
                    //是否允许提交
                    opts.submitEnabled = this.options.submitEnabled;
                    //默认选择步骤
                    opts.selectStep = this.options.selectStep || 1;
                    //判断是否需要通知
                    if (opts.selectStep != this.lastSelectStep) {
                        var evt = {
                            oldStep: this.lastSelectStep,
                            newStep: opts.selectStep
                        };
                        //更新last select index
                        this.lastSelectStep = opts.selectStep;
                        //通知更新
                        this.$emit("select", evt);
                    }
                    //设置完成步骤
                    opts.finishSteps = this.options.finishSteps || [];
                    //设置处理中状态
                    opts.processSteps = this.options.processSteps || [];
                    //加入class数据
                    fox.each(opts.steps, function (index, item) {
                        var i = index + 1;
                        var finish = false;
                        if (opts.finishSteps && opts.finishSteps.indexOf(i) >= 0) {
                            finish = true;
                        }
                        //设置icon class
                        item._tipClass = {
                            "icon": true,
                            "iconfont": true,
                            "icon-zhengque": true,
                            "wp-step-icon-tip": opts.finishSteps.indexOf(i) >= 0,
                            "wp-step-icon-tip-hide": opts.finishSteps.indexOf(i) == -1
                        };
                        if (!item.icon) {
                            item.icon = "icon-shenqing";
                        }
                        //设置icon class
                        item._iconClass = [{
                            "icon": true,
                            "iconfont": true,
                            "wp-step-icon": true,
                            "wp-step-icon-none": opts.selectStep != i && opts.processSteps.indexOf(i) == -1 && opts.finishSteps.indexOf(i) == -1,
                            "wp-step-icon-done": opts.selectStep != i && (opts.processSteps.indexOf(i) >= 0 || opts.finishSteps.indexOf(i) >= 0),
                            "wp-step-icon-select": opts.selectStep == i
                        }, item.icon];
                        //设置text class
                        item._textClass = {
                            "wp-step-text": true,
                            "wp-step-text-none": opts.selectStep != i && opts.processSteps.indexOf(i) == -1 && opts.finishSteps.indexOf(i) == -1,
                            "wp-step-text-done": opts.selectStep != i && (opts.processSteps.indexOf(i) >= 0 || opts.finishSteps.indexOf(i) >= 0),
                            "wp-step-text-select": opts.selectStep == i
                        };
                    });
                }
                return opts;
            },
            //header title class
            mTitleClass: function () {
                if (this.mOptions && this.mOptions.steps) {
                    return "wp-h-title-left";
                } else {
                    return "wp-h-title-center";
                }
            },
            //step group style
            mStepGroupStyle: function () {
                var s = this.mOptions.stepMargin || "auto";
                var style = {"margin": "auto " + s + " auto " + s};
                return style;
            },
            //是否能提交
            mCanSubmit: function () {
                if (this.mOptions.submitEnabled !== void(0)) {
                    return this.mOptions.submitEnabled;
                }
                if (this.mOptions.finishSteps == void(0)) {
                    return false;
                }
                if (this.mOptions.finishSteps.length < this.mOptions.steps.length) {
                    return false;
                }
                for (var i = 1; i <= this.mOptions.steps.length; i++) {
                    var index = this.mOptions.finishSteps.indexOf(i);
                    if (index == -1) {
                        return false;
                    }
                }
                return true;
            }
        },

        //方法
        methods: {
            //回退
            back: function () {
                this.$emit("back");
            },
            //选择
            select: function (index) {
                var i = index + 1;
                this.options.selectStep = i;
            },
            //提交
            submit: function () {
                this.$emit("submit");
            }

        }
    })

})(Vue, fox.$, "fox-header");

/**
 * content
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
              <div v-bind:class="cls">\
                <slot></slot>\
              </div>\
            ',
        //属性
        props: {
            //是否只读
            readonly: {
                type: Boolean,
                required: false
            },
            //是否禁用
            disabled: {
                type: Boolean,
                required: false
            },
        },
        //数据
        data: function () {
            return {
                //class
                cls: {"wp-content": true},
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false
            }
        },
        //计算
        computed: {
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },
        //watch
        watch: {
            //监控readonly属性
            mReadonly: function (newVal, oldVal) {
                if (newVal === void(0)) {
                    return;
                }
                //递归设置
                this.setReadOnly(this, newVal);
            },
            //监控disable属性
            mDisabled: function (newVal, oldVal) {
                if (newVal === void(0)) {
                    return;
                }
                //递归设置
                this.setDisabled(this, newVal);
            }
        },
        //方法
        methods: {
            //设置read only
            setReadOnly: function (node, readonly) {
                //设置元素disiabled
                if (this != node && node.innerReadonly != void(0)) {
                    node.innerReadonly = readonly;
                    return;
                }
                //递归设置
                if (node.$children && node.$children.length > 0) {
                    for (var i = 0; i < node.$children.length; i++) {
                        this.setReadOnly(node.$children[i], readonly);
                    }
                }
            },
            //设置disabled
            setDisabled: function (node, disabled) {
                //设置元素disiabled
                if (this != node && node.innerDisabled != void(0)) {
                    node.innerDisabled = disabled;
                    return;
                }
                //递归设置
                if (node.$children && node.$children.length > 0) {
                    for (var i = 0; i < node.$children.length; i++) {
                        this.setDisabled(node.$children[i], disabled);
                    }
                }
            }
        },

        //加载后处理
        mounted:function(){
            //设置只读
            if(this.mReadonly){
                this.setReadOnly(this,this.mReadonly);
            }

            //设置禁用
            if(this.mDisabled){
                this.setDisabled(this,this.mDisabled);
            }

        }
    })


})(Vue, fox.$, "fox-content");

/**
 * content padded
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
              <div v-bind:class="cls">\
                <slot></slot>\
              </div>\
            ',

        //属性
        props: {
            //是否只读
            readonly: {
                type: Boolean,
                required: false
            },
            //是否禁用
            disabled: {
                type: Boolean,
                required: false
            },
        },
        //数据
        data: function () {
            return {
                //class
                cls: {"wp-content-padded": true},
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false
            }
        },
        //计算
        computed: {
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },
        //watch
        watch: {
            //监控readonly属性
            mReadonly: function (newVal, oldVal) {
                if (newVal === void(0)) {
                    return;
                }
                //递归设置
                this.setReadOnly(this, newVal);
            },
            //监控disable属性
            mDisabled: function (newVal, oldVal) {
                if (newVal === void(0)) {
                    return;
                }
                //递归设置
                this.setDisabled(this, newVal);
            }
        },
        //方法
        methods: {
            //设置read only
            setReadOnly: function (node, readonly) {
                //设置元素disiabled
                if (this != node && node.innerReadonly != void(0)) {
                    node.innerReadonly = readonly;
                    return;
                }
                //递归设置
                if (node.$children && node.$children.length > 0) {
                    for (var i = 0; i < node.$children.length; i++) {
                        this.setReadOnly(node.$children[i], readonly);
                    }
                }
            },
            //设置disabled
            setDisabled: function (node, disabled) {
                //设置元素disiabled
                if (this != node && node.innerDisabled != void(0)) {
                    node.innerDisabled = disabled;
                    return;
                }
                //递归设置
                if (node.$children && node.$children.length > 0) {
                    for (var i = 0; i < node.$children.length; i++) {
                        this.setDisabled(node.$children[i], disabled);
                    }
                }
            }
        },

        //加载后处理
        mounted:function(){
            //设置只读
            if(this.mReadonly){
                this.setReadOnly(this,this.mReadonly);
            }

            //设置禁用
            if(this.mDisabled){
                this.setDisabled(this,this.mDisabled);
            }

        }
    })


})(Vue, fox.$, "fox-content-padded");

/**
 * footer
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
              <div v-bind:class="cls">\
                <slot></slot>\
              </div>\
            ',

        //data
        data: function () {
            return {
                cls: {"wp-bar": true, "wp-footer": true}
            }
        }
    })


})(Vue, fox.$, "fox-footer");

/**
 * sub page
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
               <div v-bind:class="cls">\
                   <!--header-->\
                   <slot name="header"></slot>\
                   <slot></slot>\
                   <!--footer-->\
                   <slot name="footer"></slot>\
               </div>\
            ',

        //属性
        props: {
            //是否只读
            readonly: {
                type: Boolean,
                required: false
            },
            //是否禁用
            disabled: {
                type: Boolean,
                required: false
            },
        },
        //数据
        data: function () {
            return {
                //class
                cls: {"wp-sub-page": true},
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false
            }
        },
        //计算
        computed: {
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },
        //watch
        watch: {
            //监控readonly属性
            mReadonly: function (newVal, oldVal) {
                if (newVal === void(0)) {
                    return;
                }
                //递归设置
                this.setReadOnly(this, newVal);
            },
            //监控disable属性
            mDisabled: function (newVal, oldVal) {
                if (newVal === void(0)) {
                    return;
                }
                //递归设置
                this.setDisabled(this, newVal);
            }
        },
        //方法
        methods: {
            //设置read only
            setReadOnly: function (node, readonly) {
                //设置元素disiabled
                if (this != node && node.innerReadonly != void(0)) {
                    node.innerReadonly = readonly;
                    return;
                }
                //递归设置
                if (node.$children && node.$children.length > 0) {
                    for (var i = 0; i < node.$children.length; i++) {
                        this.setReadOnly(node.$children[i], readonly);
                    }
                }
            },
            //设置disabled
            setDisabled: function (node, disabled) {
                //设置元素disiabled
                if (this != node && node.innerDisabled != void(0)) {
                    node.innerDisabled = disabled;
                    return;
                }
                //递归设置
                if (node.$children && node.$children.length > 0) {
                    for (var i = 0; i < node.$children.length; i++) {
                        this.setDisabled(node.$children[i], disabled);
                    }
                }
            }
        },
        //加载后处理
        mounted:function(){
            //设置只读
            if(this.mReadonly){
                this.setReadOnly(this,this.mReadonly);
            }

            //设置禁用
            if(this.mDisabled){
                this.setDisabled(this,this.mDisabled);
            }

        }
    })
})(Vue, fox.$, "fox-sub-page");

/**
 * dialog
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
              <!--自定义对话框-->\
              <div class="fox-m-layer-wrap" ref="dialog">\
                  <!--fox-m-layer-content部分为对话框显示的内容-->\
                  <div class="fox-m-layer-content wp-dialog" v-bind:style="mAllStyle" v-bind:id="mId">\
                      <div v-show="!headerHide" class="wp-dialog-header">\
                         <span class="wp-dialog-header-title"><slot name="title">{{title}}</slot></span>\
                         <div class="wp-dialog-header-close" v-on:tap="onClose()"><a class="iconfont icon-cuowu"></a></div>\
                      </div>\
                     <div class="wp-dialog-content" v-bind:style="mContentStyle">\
                        <slot></slot>\
                     </div>\
                     <div class="wp-dialog-footer-div" v-show="!footerHide">\
                         <slot name="footer"></slot>\
                     </div>\
                   </div>\
               </div>\
            ',

        //属性
        props: {
            //标题
            title: {
                type: String,
                required: false
            },

            //是否隐藏header
            headerHide: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },

            //options
            options: {
                type: Object,
                required: true
            }
        },

        //data
        data: function () {
            var id = this.$attrs["id"];
            if (!id) {
                id = "";
            } else {
                id = id + "_layer"
            }
            return {
                mId: id
            }
        },
        //计算
        computed: {
            //获取options宽度
            mWidth: function () {
                var width = "40rem";
                if (this.options && !!this.options.width) {
                    width = this.options.width;
                }
                return width;

            },
            //获取options高度
            mHeight: function () {
                var height = "30rem";
                if (this.options && !!this.options.height) {
                    height = this.options.height;
                }
                return height;
            },
            //获取options style
            mStyle: function () {
                var style = {};
                if (this.options && !!this.options.style) {
                    fox.extend(style, this.options.style);
                }
                return style;
            },
            //dialog整体style
            mAllStyle: function () {
                var style = this.mStyle;
                if (style.width == void(0)) {
                    style.width = this.mWidth;
                }
                if (style.height == void(0)) {
                    style.height = this.mHeight;
                }
                return style;
            },

            //dialog内容style
            mContentStyle: function () {
                var height = fox.$.toPx(this.mAllStyle["height"]);
                var width = fox.$.toPx(this.mAllStyle["width"]);

                if (!this.headerHide) {
                    height -= fox.$.toPx("2.1rem");
                }
                if (!this.footerHide) {
                    height -= fox.$.toPx("3rem");
                }
                var style = {
                    height: height + "px",
                    width: width + "px"
                };
                return style;
            },

            //footer是否隐藏
            footerHide: function () {
                return !this.$slots['footer'];
            }
        },
        //方法
        methods: {
            //on close
            onClose: function () {
                //关闭最上层layer
                fox.layer.popClose();
                //通知close
                this.$emit("close");
                //通知close事件
                $.trigger(this.$refs.dialog, "close", "");
            }
        },
    })
})(Vue, fox.$, "fox-dialog");

/**
 * dialog content padded
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
              <!--自定义对话框content padded-->\
              <div v-bind:class="cls">\
                   <slot></slot>\
              </div>\
            ',

        //属性
        props: {
            //是否只读
            readonly: {
                type: Boolean,
                required: false
            },
            //是否禁用
            disabled: {
                type: Boolean,
                required: false
            },
        },
        //数据
        data: function () {
            return {
                //class
                cls: {"wp-dialog-content-padded": true},
                //内部禁用状态
                innerDisabled: false,
                //内部只读状态
                innerReadonly: false
            }
        },
        //计算
        computed: {
            //是否禁用
            mDisabled: function () {
                return this.disabled || this.innerDisabled;
            },
            //是否只读
            mReadonly: function () {
                return this.readonly || this.innerReadonly;
            }
        },
        //watch
        watch: {
            //监控readonly属性
            mReadonly: function (newVal, oldVal) {
                if (newVal === void(0)) {
                    return;
                }
                //递归设置
                this.setReadOnly(this, newVal);
            },
            //监控disable属性
            mDisabled: function (newVal, oldVal) {
                if (newVal === void(0)) {
                    return;
                }
                //递归设置
                this.setDisabled(this, newVal);
            }
        },
        //方法
        methods: {
            //设置read only
            setReadOnly: function (node, readonly) {
                //设置元素disiabled
                if (this != node && node.innerReadonly != void(0)) {
                    node.innerReadonly = readonly;
                    return;
                }
                //递归设置
                if (node.$children && node.$children.length > 0) {
                    for (var i = 0; i < node.$children.length; i++) {
                        this.setReadOnly(node.$children[i], readonly);
                    }
                }
            },
            //设置disabled
            setDisabled: function (node, disabled) {
                //设置元素disiabled
                if (this != node && node.innerDisabled != void(0)) {
                    node.innerDisabled = disabled;
                    return;
                }
                //递归设置
                if (node.$children && node.$children.length > 0) {
                    for (var i = 0; i < node.$children.length; i++) {
                        this.setDisabled(node.$children[i], disabled);
                    }
                }
            }
        }
    })
})(Vue, fox.$, "fox-dg-padded");

/**
 * dialog footer
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
              <!--自定义对话框footer-->\
              <div v-bind:class="cls">\
                   <slot></slot>\
              </div>\
            ',

        //data
        data: function () {
            return {
                cls: {"wp-dialog-footer": true}
            }
        }
    })
})(Vue, fox.$, "fox-dg-footer");

/**
 * checkbox
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
              <!--自定义CheckBox-->\
               <div v-bind:class="cls" v-on:tap="select()">\
                 <a v-bind:class="checkboxCls" v-bind:disabled="disabled"></a>\
                 <span><slot></slot></span>\
               </div>\
            ',

        //属性
        props: {
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            },
            //value
            value: {
                type: Boolean,
                required: false
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'select'
        },

        //data
        data: function () {
            return {
                m_selected: this.value
            }
        },

        //watch
        watch:{
            value:function(newVal,oldVal){
               this.m_selected=newVal;
            }
        },
        //方法
        methods: {
            //选中
            select: function () {
                if(this.disabled == true){
                    return;
                }
                //改变状态
                this.m_selected = !this.m_selected;
                //触发事件
                this.$emit('select', this.m_selected);
            }

        },

        //计算
        computed: {
            //div class
            cls: function () {
                return {
                    "wp-checkbox": true,
                    "wp-checkbox-none": !this.m_selected,
                    "wp-checkbox-select": this.m_selected
                }

            },
            // a class
            checkboxCls: function () {
                return {
                    "icon": true,
                    "iconfont": true,
                    "icon-weixuanzhong": !this.m_selected,
                    "icon-right": this.m_selected,
                }
            }
        }
    })
})(Vue, fox.$, "fox-checkbox");

/**
 * button
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
               <!--自定义Button-->\
                <button type="button" v-bind:class="cls" v-bind:disabled="disabled" v-on:tap="onTap($event)"><slot></slot></button>\
            ',

        //属性
        props: {
            //是否可用
            disabled: {
                type: Boolean,
                required: false,
                default: function () {
                    return false;
                }
            }
        },

        //data
        data: function () {
            return {
                //button class
                cls: {
                    "fox-btn": true,
                    "wp-button": true
                }
            }
        },

        //方法
        methods: {
            //选中
            onTap: function (evt) {
                //触发事件
                this.$emit('tap', evt);
            }

        }
    })
})(Vue, fox.$, "fox-button");

/**
 * fox-step-group
 */
(function (vue, $, name) {
    //注册组件
    Vue.component(name, {
        //模板
        template: '\
              <div v-bind:class="cls" v-bind:style="style">\
                    <div class="wp-single-step-line"></div>\
                    <template  v-for="(item,index) in mOptions.steps">\
                        <div v-bind:class="item.cls" v-on:tap="select(index)">\
                            <div class="wp-single-step-cell-mark">{{item.index}}</div>\
                            <div class="wp-single-step-cell-text">{{item.text}}</div>\
                        </div>\
                    </template>\
               </div>\
            ',

        //属性
        props: {
            options: {
                type: [Object],
                require: true
            }
        },

        //数据
        data: function () {
            return {
                //step class
                cls: {"wp-single-step-group": true},

                //step class
                style: {margin: this.options.margin}

            }
        },

        //计算数据
        computed: {
            //初始化options
            mOptions: function () {
                if (!this.options.selectStep) {
                    this.options.selectStep = 1;
                }

                //判断是否需要通知
                if (this.options.selectStep != this.lastSelectStep) {
                    var evt = {
                        oldStep: this.lastSelectStep,
                        newStep: this.options.selectStep
                    };
                    //更新last select index
                    this.lastSelectStep = this.options.selectStep;
                    //通知更新
                    this.$emit("select", evt);
                }


                if (!this.options.finishSteps) {
                    this.options.finishSteps = [];
                }

                var _this = this;
                //加入class数据
                fox.each(this.options.steps, function (index, item) {
                    var i = index + 1;

                    var finish = false;
                    if (_this.options.finishSteps && _this.options.finishSteps.indexOf(i) >= 0) {
                        finish = true;
                    }

                    item.cls = [{
                        "wp-single-step-cell": true,
                        "wp-single-step-cell-none": _this.options.selectStep != i && (!_this.options.finishSteps || _this.options.finishSteps.indexOf(i) == -1),
                        "wp-single-step-cell-done": _this.options.selectStep != i && _this.options.finishSteps && _this.options.finishSteps.indexOf(i) >= 0,
                        "wp-single-step-cell-select": _this.options.selectStep === i
                    }]
                });
                return this.options;
            }
        },

        //方法
        methods: {
            //选择
            select: function (index) {
                var i = index + 1;
                this.options.selectStep = i;
                // if(this.options.finishSteps && this.options.finishSteps.indexOf(i)>=0){
                //     this.options.selectStep=i;
                // }
            }
        }

    })
})(Vue, fox.$, "fox-step-group");

/**
 * 跑马灯
 */
(function (vue, $, name) {
    /**
     * 跑马灯图片列表
     * */
    function Marquee(options) {
        //单位转换
        options.shortcutWidth = this._toPx(options.shortcutWidth);
        options.margin = this._toPx(options.margin);

        if (options.shortcutSelected == undefined) {
            options.shortcutSelected = "wp-icon-marquee-img-selected";
        }
        if (options.imageHide == undefined) {
            options.imageHide = "wp-marquee-image-hide";
        }
        if (options.scrollbarMove == undefined) {
            options.scrollbarMove = "wp-icon-marquee-move";
        }
        if (options.interval == undefined) {
            options.interval = 3000;
        }

        //绑定touch事件
        this._attachTouch(options);
        //绑定自动移动事件
        this._attachAutoScroll(options);
        //保存引用
        this.options = options;
    }

    /**
     * 初始化
     */
    Marquee.prototype.init = function init(items) {
        var options = this.options;
        options.data = items.slice(0);
        //创建image html
        var html = this._createImageHtml(options.data);
        options.scrollbar.innerHTML = html;

        //记录image node的数量
        options.count = options.data.length * 3;
        //单元width
        options.unitSize = options.shortcutWidth + options.margin * 2;
        //单页面size
        options.pageSize = options.unitSize * options.data.length;

        //获取width
        var width = options.pageSize * 3;
        //获取left
        var left = options.pageSize + (options.pageSize - options.bar.scrollWidth) / 2;
        //记录初始起点
        options.origin = -left;

        //设置left and width
        options.scrollbar.style.width = width + "px";
        options.scrollbar.style.left = options.origin + "px";
        //设置选中index
        var selectIndex = Math.floor(options.count / 2);
        //设置选中单元
        this._select(selectIndex, options);
    };

    /**
     * 获取选中index
     */
    Marquee.prototype.getSelectedIndex = function getSelectIndex() {
        return this.options.selectIndex % this.options.data.length;
    };

    /**
     * 创建html
     */
    Marquee.prototype._createImageHtml = function _createImageHtml(data) {
        var html = "";
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < data.length; j++) {
                html += ("<img index='" + j + "' src=" + data[j].shortcut + ">")
            }
        }
        return html;
    };

    /**
     * 转换为px
     * */
    Marquee.prototype._toPx = function _toPx(value, params) {
        if (value === undefined) {
            return 0;
        }
        value = value.trim();
        if (value.length === 0) {
            return 0;
        }
        if (typeof value === "number") {
            return value;
        }

        var index = value.indexOf("px");
        if (index != -1) {
            var s = value.substring(0, index);
            var n = Number(s);
            return n;
        }

        index = value.indexOf("rem");
        if (index != -1) {
            var s = value.substring(0, index);
            var n = Number(s);
            //获取font size
            var fontSize = window.getComputedStyle(document.documentElement, null)['fontSize'];
            var i = fontSize.indexOf("px");
            fontSize = fontSize.substring(0, i);
            fontSize = Number(fontSize);
            n *= fontSize;
            return n;
        }
        return n;
    };

    /**
     * 设置选中状态
     **/
    Marquee.prototype._select = function _select(index, options) {
        var lastIndex = options.selectIndex;
        if (lastIndex != undefined) {
            var lastNode = options.scrollbar.children[lastIndex];
            fox.$(lastNode).removeClass(options.shortcutSelected);
        }
        //记录选中的index
        options.selectIndex = index;
        //获取新的node
        var $newNode = fox.$(options.scrollbar.children[index]);
        $newNode.addClass(options.shortcutSelected);
        //获取index
        var i = $newNode.attr("index");

        var item = options.data[i];
        //获取新路径
        var newPath = item.icon;

        var $imgNode = fox.$(options.imageEl);
        $imgNode.addClass(options.imageHide);
        var timeout = options.switchDuration / 2;
        setTimeout(function () {
            $imgNode.attr("src", newPath);
            $imgNode.removeClass(options.imageHide);

            //调用回调函数
            if (options.callback) {
                options.callback(i);
            }
        }, timeout);
    };

    /**
     * scroll to 指定位置
     * @param options
     * @private
     */
    Marquee.prototype._scrollTo = function _scrollTo(pos, options) {
        //设置left坐标
        options.scrollbar.style.left = pos + "px";
    };

    /**
     * scroll
     * */
    Marquee.prototype._scroll = function _scroll(n, options) {
        //获取px数值
        var left = options.scrollbar.style.left;
        left = this._toPx(left) + n;

        if (left < (options.origin - options.pageSize)) {
            //设置left坐标
            options.scrollbar.style.left = options.origin + "px";
            var m = left - (options.origin - options.pageSize);
            left = options.origin - m;
        } else if (left > (options.origin + options.pageSize)) {
            //设置left坐标
            options.scrollbar.style.left = options.origin + "px";
            var m = left - (options.origin + options.pageSize);
            left = options.origin + m;
        }
        //设置left坐标
        options.scrollbar.style.left = left + "px";
    };

    /**
     * 安装touch事件支持
     **/
    Marquee.prototype._attachTouch = function _attachTouch(options) {
        //this引用
        var _this = this;

        /**
         * touch事件处理
         */
        function touch(event) {
            var event = event || window.event;
            switch (event.type) {
                //touch start事件
                case "touchstart":
                    if (options.dragEnabled && options.dragEnabled === true) {
                        return;
                    }
                    var tou = event.touches[0];
                    options.dragEnabled = true;
                    options.x = options.startX = tou.pageX;
                    options.y = options.startY = tou.pageY;
                    break;
                case "touchend":
                    if (options.dragEnabled && options.dragEnabled == true) {
                        //获取移动距离
                        var n = options.x - options.startX;
                        //获取绝对值
                        var absN = Math.abs(n);
                        //获取小于一个unit size的距离
                        var overplus = absN % options.unitSize;
                        //对数进行上舍入
                        var moveNum = Math.ceil(absN / options.unitSize);

                        //获取源 Select index
                        var originSelectIndex = Math.floor(options.count / 2);

                        var selectIndex = options.selectIndex;
                        var distance;
                        //左移动处理
                        if (n <= 0) {
                            //最后一个移动小于3分1的size，进行回退
                            if (overplus < options.unitSize / 3) {
                                moveNum--;
                                //移动距离
                                distance = overplus;
                            } else {
                                distance = -(options.unitSize - overplus);
                            }
                            //获取新的select index
                            selectIndex += moveNum;

                            var m = selectIndex - (originSelectIndex + options.data.length);
                            if (m >= 0) {
                                selectIndex = originSelectIndex + m;
                                //重置bar
                                _this._scrollTo(options.origin - distance, options);
                            }
                        }
                        //右移动处理
                        else {
                            //最后一个移动小于3分1的size，进行回退
                            if (overplus < options.unitSize / 3) {
                                moveNum--;
                                distance = -overplus;
                            } else {
                                distance = (options.unitSize - overplus);
                            }
                            //获取新的select index
                            selectIndex -= moveNum;

                            var m = selectIndex - (originSelectIndex - options.data.length);
                            if (m <= 0) {
                                selectIndex = originSelectIndex + m;
                                //重置bar
                                _this._scrollTo(options.origin - distance, options);
                            }
                        }

                        window.setTimeout(function () {
                            //增加移动class
                            var $node = fox.$(options.scrollbar);
                            if ($node.hasClass(options.scrollbarMove) === false) {
                                $node.addClass(options.scrollbarMove);
                            }
                            //移动位置
                            _this._scroll(distance, options);

                            window.setTimeout(function () {
                                //移除class
                                $node.removeClass(options.scrollbarMove);
                                //设置选中
                                _this._select(selectIndex, options);
                                //设置drag enabled为false
                                options.dragEnabled = false;
                            }, 300)
                        }, 50)

                    }
                    break;
                case "touchmove":
                    var tou = event.touches[0];
                    if (options.dragEnabled && options.dragEnabled == true) {
                        var n = tou.pageX - options.x;
                        options.x = tou.pageX;
                        options.y = tou.pageY;
                        _this._scroll(n, options);
                    }
                    break;
            }
        }

        var bar = options.bar;
        bar.addEventListener('touchstart', touch, false);
        bar.addEventListener('touchmove', touch, false);
        bar.addEventListener('touchend', touch, false);
    };

    /**
     * 安装auto scroll事件
     * @param options
     * @private
     */
    Marquee.prototype._attachAutoScroll = function _attachAutoScroll(options) {
        var _this = this;
        window.setInterval(function () {
            if (options.dragEnabled === true) {
                return;
            }

            //获取源 Select index
            var originSelectIndex = Math.floor(options.count / 2);

            var selectIndex = options.selectIndex + 1;
            var m = selectIndex - (originSelectIndex + options.data.length);
            if (m >= 0) {
                selectIndex = originSelectIndex + m;
                //重置bar
                _this._scrollTo(options.origin + options.unitSize, options);
            }

            window.setTimeout(function () {
                //增加移动class
                var $node = fox.$(options.scrollbar);
                if ($node.hasClass(options.scrollbarMove) === false) {
                    $node.addClass(options.scrollbarMove);
                }
                //移动位置
                _this._scroll(-options.unitSize, options);

                window.setTimeout(function () {
                    //移除class
                    $node.removeClass(options.scrollbarMove);
                    //设置选中
                    _this._select(selectIndex, options);
                }, 300)
            }, 50)

        }, options.interval)

    };

    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div v-bind:class="cls">\
                <div class="wp-image-marquee">\
                    <img v-on:tap="click" ref="imageEl" src="">\
                </div>\
               <div ref="bar" class="wp-icon-marquee" v-bind:style="barStyle">\
                   <div ref="scrollbar" class="wp-icon-marquee-container" >\
                   </div>\
               </div>\
             </div>\
            ',

        //属性
        props: {
            //options
            options: {
                type: Object,
                required: true
            },
            //items
            items: {
                type: Array,
                required: true
            }
        },

        //数据
        data: function () {
            return {
                cls: {"wp-marquee": true},
                //bar style
                barStyle: {height: this.options.shortcutHeight},
                //marquee引用
                marquee: undefined
            }
        },
        //方法
        methods: {
            //定义
            click: function () {
                if (this.marquee == undefined) {
                    return;
                }
                var i = this.marquee.getSelectedIndex();
                this.$emit("image_click", i);
            }
        },
        //观察
        watch: {
            items: function (newItems) {
                if (this.marquee == undefined) {
                    return;
                }
                this.marquee.init(newItems);
            }
        },
        //加载后执行
        mounted: function () {
            this.options.imageEl = this.$refs.imageEl;
            this.options.bar = this.$refs.bar;
            this.options.scrollbar = this.$refs.scrollbar;
            var _this = this;
            this.options.callback = function (index) {
                _this.$emit("item_select", index);
            };
            var marquee = new Marquee(this.options);
            marquee.init(this.items);
            this.marquee = marquee;
        }

    })

}(Vue, fox.$, "fox-marquee"));

/*
 * tab page
 * */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div v-bind:class="cls" v-bind:data-role="role">\
                  <slot></slot>\
             </div>\
            ',

        //属性
        props: {
            //role
            role: {
                type: String,
                required: false,
                default: function () {
                    return "";
                }
            }
        },

        //data
        data: function () {
            return {
                cls: "wp-tab-page"
            }
        }
    });
})(Vue, fox.$, "fox-tab-page");

/*
 * tab group
 * */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
             <div v-bind:class="cls">\
                <div class="wp-tab-header">\
                    <div v-for="(item,index) in items" v-bind:class="getItemCls(index)" v-on:tap="tabTap(index)">\
                        {{item.text}}<a v-bind:class="getItemIconCls(index)"></a>\
                        <span v-if="item.html" v-html="item.html"></span>\
                    </div>\
                    <div class="wp-tab-linear"></div>\
                </div>\
                <div class="wp-tab-content" ref="content">\
                  <slot></slot>\
                </div>\
             </div>\
            ',

        //属性
        props: {
            //tab items
            items: {
                type: Array,
                required: true
            },

            finishItemIndexs: {
                type: Array,
                required: false,
                default: function () {
                    return [];
                }
            },

            //value
            value: {
                type: [Number, String],
                required: false,
                default: function () {
                    return 0;
                }
            }
        },

        //数据
        model: {
            prop: 'value',
            event: 'select'
        },

        //data
        data: function () {
            return {
                selectedIndex: this.value,
                cls: {"wp-tab-group": true}
            };
        },

        //监控数据
        watch: {
            value: function (curVal, oldVal) {
                if (this.selectedIndex == curVal) {
                    return;
                }
                this.select(curVal);
            }
        },

        //方法
        methods: {
            //tab tap事件
            tabTap: function (index) {
                if (this.selectedIndex == index) {
                    return;
                }
                this.select(index);
                this.$emit('select', index);
            },

            //选中事件
            select: function (index) {
                var lastIndex = this.selectedIndex;
                var newIndex = index;
                //更新select index
                this.selectedIndex = newIndex;

                var lastToggle = this.items[lastIndex].toggle;
                var newToggle = this.items[newIndex].toggle;
                //获取孩子列表
                var children = this.$refs.content.children;
                for (var i = 0; i < children.length; i++) {
                    //获取node
                    var $node = fox.$(children[i]);
                    //获取role
                    var role = $node.attr("data-role");
                    //移除选中状态
                    if (role && role === lastToggle) {
                        $node.removeClass("wp-tab-page-show")
                    }
                    if (role && role === newToggle) {
                        $node.addClass("wp-tab-page-show")
                    }
                }
            },

            //获取item的class
            getItemCls: function (index) {
                return {
                    "wp-tab-item": true,
                    "wp-tab-item-selected": (this.selectedIndex == index)
                }
            },

            //获取item tip class
            getItemIconCls: function (index) {
                return {
                    "icon": true,
                    "iconfont": true,
                    "icon-zhengque": true,
                    "wp-tab-icon-tip": this.finished(index),
                    "wp-tab-icon-tip-hide": !this.finished(index)
                }
            },

            //是否完成
            finished: function (index) {
                return this.finishItemIndexs.indexOf(index) != -1;
            }
        },

        //加载后执行
        mounted: function () {
            this.select(this.selectedIndex);
        }

    });
})(Vue, fox.$, "fox-tab-group");

/*
 * Image board
 * */
(function (vue, $, name) {
    //注册组件
    vue.component(name, {
        //模板
        template: '\
            <div v-bind:class="cls" ref="boardRef">\
                <div class="wp-image-board-header">\
                    <span class="wp-image-board-header-title">图片浏览区</span>\
                    <div class="wp-image-board-header-div" v-on:tap="hide()">\
                        <a class="iconfont icon-suoxiao"></a>\
                    </div>\
                    <div class="wp-image-board-header-div" v-on:tap="changingOver()">\
                       <a v-bind:class="mIconCls()"></a>\
                    </div>\
                </div>\
                <div class="wp-image-board-content">\
                    <div class="wp-image-board-wrap">\
                       <div class="wp-image-board-content-item" v-for="(item,index) in items">\
                          <div>{{item.text}}</div>\
                          <img v-bind:src=item.image v-on:tap="showPhoto(index)">\
                        </div>\
                    </div>\
                 </div>\
            </div>\
            ',

        //属性
        props: {
            //标题
            title: {
                type: String,
                required: false
            },

            //image items
            items: {
                type: Array,
                required: true
            },

            //image board image参数
            options: {
                type: Object,
                required: false
            },

            //value
            value: {
                type: Boolean,
                required: false
            }
        },

        //model
        model: {
            prop: 'value',
            event: 'change'
        },

        //data
        data: function () {
            return {
                //组件外层引用
                cls: {"wp-image-board": true, "wp-image-board-move": true},
                //image board引用
                imageBoard: undefined
            };
        },

        //监控
        watch: {
            value: function (newVal, oldVal) {
                if (newVal == true) {
                    this.show();
                } else {
                    this.hide();
                }
            }
        },

        //方法
        methods: {
            //显示
            show: function () {
                if (this.imageBoard == undefined) {
                    return;
                }
                this.imageBoard.show();
            },
            //隐藏
            hide: function () {
                if (this.imageBoard == undefined) {
                    return;
                }
                this.imageBoard.hide();
                //发送消息
                this.$emit("change", false);
            },
            //缺切换
            changingOver: function () {
                if (this.imageBoard == undefined) {
                    return;
                }
                this.imageBoard.changingOver();
            },
            //获取icon class
            mIconCls: function () {
                if (this.imageBoard == undefined) {
                    return "iconfont icon-xiangzuo";
                }
                var origin = this.imageBoard.getOrigin();
                if (origin === "right") {
                    return "iconfont icon-xiangzuo";
                } else {
                    return "iconfont icon-xiangyou"
                }
            },
            //显示图片
            showPhoto: function (index) {
                fox.ext.openImageViewer(this.items, index);
            }
        },

        //加载后执行
        mounted: function () {
            //默认参数
            var opts = {
                width: "18.5rem",
                top: "3.5rem",
                bottom: "3rem",
                right: "0rem"
            };
            var args = this.options ? this.options : {};
            fox.extend(opts, args);
            this.imageBoard = fox.$(this.$refs.boardRef).imageBoard(opts);
            //显示image board
            if (this.value && this.value == true) {
                this.imageBoard.show();
            }
        }
    });
})(Vue, fox.$, "fox-image-board");
/**
 * 二维码
 */
(function (vue, $, name) {
    //注册text组件
    vue.component(name, {
        //模板
        template: '\
             <div class="cls">\
              </div>\
            ',

        //属性
        props: {
            //标签名
            url: {
                type: String,
                required: false
            },
            //提示
            width: {
                type: Number,
                required: false,
                default: function () {
                    return 200;
                }
            },

            //placeholder
            height: {
                type: Number,
                required: false,
                default: function () {
                    return 200;
                }
            }
        },
        data: function () {
            return {
                cls: {"wp-input-cell": true}
            };
        },
        methods: {
            init: function () {
                console.log(this.width);
                this.qrcode = new QRCode(this.$el, {
                    width: this.width,
                    height: this.height
                });
                this.qrcode.makeCode(this.url);
            }
        },
        //观察
        watch: {
            url: function (newItems) {
                this.qrcode.makeCode(newItems);
            }
        },
        //加载后执行
        mounted: function () {
            this.init()
        }

    });
})(Vue, fox.$, "fox-qrcode");
