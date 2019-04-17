const compute = {
    /*相加运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	andNumber(...values) {
		if(values instanceof Array){
			let sum = 0; // 和
			let valuesLength = values.length;
			for( let i = 0, len = valuesLength; i < len; i++ ){
	            sum += values[i] * 1000;
	        }
			return sum / 1000; //防止丢失精度
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}

	},
	/* 减运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	subtractNumber(...values) {
		let difference = 0; // 差
		let valuesLength = values.length;
		for( let i = 0, len = valuesLength; i < len; i++ ){
            difference -= (values[i] * 1000);
        }
		return difference / 1000; //防止丢失精度
	},
	/* 乘运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	subNumber(...values) {
		let product = 0; // 积
		let valuesLength = values.length;
		for( let i = 0, len = valuesLength; i < len; i++ ){
            product *= (values[i] * 1000);
        }
		return product / (1000*valuesLength); //防止丢失精度
	},
	/* 除运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	divideNumber(...values) {
		let quotient = 0; // 商
		let valuesLength = values.length;
		for( let i = 0, len = valuesLength; i < len; i++ ){
            quotient /= (values[i] * 1000);
        }
		return quotient; //防止丢失精度
	},
	// 把值转换成整数
	parseInt(value) {
		return parseInt(value)
	},
	// 把值转换成浮点数
	parseFloat(value) {
		return parseInt(value)
	},
	// 强制类型转换-把给定的值转换成Boolean型
	Boolean(value) {
		return Boolean(value)
	},
	// 强制类型转换-把给定的值转换成数字（可以是整数或浮点数）
	Number(value) {
		return Number(value)
	},
	// 强制类型转换-把给定的值转换成字符串
	String(value) {
		return String(value)
	},
	// 向上取整
	ceil(value) {
		return Math.ceil(value);
	},
	// 向下取整
	floor(value) {
		return Math.floor(value);
	},
	// 四舍五入
	round(value) {
		return Math.round(value);
	},
	// 返回给定的数组中的较大的数
	max(array) {
		return Math.max.apply(null,array);
	},
	// 返回给定的数组中的较小的数
	min(array) {
		return Math.min.apply(null,array);
	},
	// 四舍五入,保留几位小数
	toFixed(value) {
		return Math.toFixed(value);
	},
	// 不四舍五入,保留几位小数
	decimal(value, n) {
		return Math.floor(value * 10 * n) / (100 * n)
	}
}

export default compute;



