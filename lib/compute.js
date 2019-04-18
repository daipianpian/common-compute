'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var compute = {
	/*相加运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	andNumber: function andNumber() {
		for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
			values[_key] = arguments[_key];
		}

		if (values instanceof Array) {
			var sum = 0; // 和
			var valuesLength = values.length;
			for (var i = 0, len = valuesLength; i < len; i++) {
				sum += values[i] * 1000;
			}
			return sum / 1000; //防止丢失精度
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	/* 减运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	subtractNumber: function subtractNumber() {
		for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			values[_key2] = arguments[_key2];
		}

		if (values instanceof Array) {
			var difference = 0; // 差
			var valuesLength = values.length;
			for (var i = 0, len = valuesLength; i < len; i++) {
				difference -= values[i] * 1000;
			}
			return difference / 1000; //防止丢失精度
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	/* 乘运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	subNumber: function subNumber() {
		for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			values[_key3] = arguments[_key3];
		}

		if (values instanceof Array) {
			var product = 0; // 积
			var valuesLength = values.length;
			for (var i = 0, len = valuesLength; i < len; i++) {
				product *= values[i] * 1000;
			}
			return product / (1000 * valuesLength); //防止丢失精度
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	/* 除运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	divideNumber: function divideNumber() {
		for (var _len4 = arguments.length, values = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
			values[_key4] = arguments[_key4];
		}

		if (values instanceof Array) {
			var quotient = 0; // 商
			var valuesLength = values.length;
			for (var i = 0, len = valuesLength; i < len; i++) {
				quotient /= values[i] * 1000;
			}
			return quotient; //防止丢失精度
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	// 把值转换成整数
	parseInt: function (_parseInt) {
		function parseInt(_x) {
			return _parseInt.apply(this, arguments);
		}

		parseInt.toString = function () {
			return _parseInt.toString();
		};

		return parseInt;
	}(function (value) {
		var resultType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
		if (resultType == 'number') {
			return parseInt(value);
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	}),

	// 把值转换成浮点数
	parseFloat: function parseFloat(value) {
		var resultType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
		if (resultType == 'number') {
			return parseInt(value);
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	// 强制类型转换-把给定的值转换成Boolean型
	Boolean: function (_Boolean) {
		function Boolean(_x2) {
			return _Boolean.apply(this, arguments);
		}

		Boolean.toString = function () {
			return _Boolean.toString();
		};

		return Boolean;
	}(function (value) {
		return Boolean(value);
	}),

	// 强制类型转换-把给定的值转换成数字（可以是整数或浮点数）
	Number: function (_Number) {
		function Number(_x3) {
			return _Number.apply(this, arguments);
		}

		Number.toString = function () {
			return _Number.toString();
		};

		return Number;
	}(function (value) {
		return Number(value);
	}),

	// 强制类型转换-把给定的值转换成字符串
	String: function (_String) {
		function String(_x4) {
			return _String.apply(this, arguments);
		}

		String.toString = function () {
			return _String.toString();
		};

		return String;
	}(function (value) {
		return String(value);
	}),

	// 向上取整
	ceil: function ceil(value) {
		var resultType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
		if (resultType == 'number') {
			return Math.ceil(value);
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	// 向下取整
	floor: function floor(value) {
		var resultType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
		if (resultType == 'number') {
			return Math.floor(value);
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	// 四舍五入
	round: function round(value) {
		var resultType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
		if (resultType == 'number') {
			return Math.round(value);
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	// 返回给定的数组中的较大的数
	max: function max(array) {
		if (array instanceof Array) {
			return Math.max.apply(null, array);
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	// 返回给定的数组中的较小的数
	min: function min(array) {
		if (array instanceof Array) {
			return Math.min.apply(null, array);
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	// 四舍五入,保留几位小数
	toFixed: function toFixed(value) {
		var resultType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
		if (resultType == 'number') {
			return Math.toFixed(value);
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	},

	// 不四舍五入,保留几位小数
	decimal: function decimal(value, n) {
		var resultTypeValue = typeof value === 'undefined' ? 'undefined' : _typeof(value);
		var resultTypeNum = typeof n === 'undefined' ? 'undefined' : _typeof(n);
		if (resultType == 'number' && resultTypeNum == 'number') {
			return Math.floor(value * 10 * n) / (100 * n);
		} else {
			return {
				message: '传入的数据类型错误'
			};
		}
	}
};

exports.default = compute;