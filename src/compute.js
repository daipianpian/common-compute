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
	/* 相减运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	subtractNumber(...values) {
		if(values instanceof Array){
			let difference = 0; // 差
			let valuesLength = values.length;
			for( let i = 0, len = valuesLength; i < len; i++ ){
	            difference -= (values[i] * 1000);
	        }
			return difference / 1000; //防止丢失精度
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}
	},
	/* 相乘运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	subNumber(...values) {
		if(values instanceof Array){
			let product = 0; // 积
			let valuesLength = values.length;
			for( let i = 0, len = valuesLength; i < len; i++ ){
	            product *= (values[i] * 1000);
	        }
			return product / (1000*valuesLength); //防止丢失精度
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}
	},
	/* 相除运算，避免数据相除小数点后产生多位数和计算精度损失。*/
	divideNumber(...values) {
		if(values instanceof Array){
			let quotient = 0; // 商
			let valuesLength = values.length;
			for( let i = 0, len = valuesLength; i < len; i++ ){
	            quotient /= (values[i] * 1000);
	        }
			return quotient; //防止丢失精度
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}
	},
	// 把值转换成整数
	parseInt(value) {
		return parseInt(value);
	},
	// 把值转换成浮点数
	parseFloat(value) {
		return parseFloat(value)
	},
	// 强制类型转换-把给定的值转换成Boolean型
	boolean(value) {
		return Boolean(value)
	},
	// 强制类型转换-把给定的值转换成数字（可以是整数或浮点数）
	number(value) {
		return Number(value)
	},
	// 强制类型转换-把给定的值转换成字符串
	string(value) {
		return String(value)
	},
	// 向上取整
	ceil(value) {
		let resultType = typeof value;
		if(resultType == 'number'){
			return Math.ceil(value);
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}
	},
	// 向下取整
	floor(value) {
		let resultType = typeof value;
		if(resultType == 'number'){
			return Math.floor(value);
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}
	},
	// 四舍五入
	round(value) {
		let resultType = typeof value;
		if(resultType == 'number'){
			return Math.round(value);
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}
	},
	// 返回给定的数组中的较大的数
	max(array) {
		if(array instanceof Array){
			return Math.max.apply(null,array);
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}
	},
	// 返回给定的数组中的较小的数
	min(array) {
		if(array instanceof Array){
			return Math.min.apply(null,array);
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}
	},
	// 四舍五入,保留n位小数
	toFixed(n) {
		let resultType = typeof n;
		if(resultType == 'number'){
			return Math.toFixed(n);
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}
	},
	// 不四舍五入,保留n位小数
	decimal(value, n) {
		let resultTypeValue = typeof value;
		let resultTypeNum = typeof n;
		if(resultType=='number' && resultTypeNum=='number'){
			return Math.floor(value * 10 * n) / (100 * n)
		}else{
			return {
				message: '传入的数据类型错误'
			};
		}
	}
}

export default compute;


