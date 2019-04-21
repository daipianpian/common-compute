# common-compute  
npm插件包-常用的JS计算  

#### vue中的安装教程
1.  cnpm install --save common-compute  
2.  在main.js里引入：import commonCompute from 'common-compute'  
	而后 Vue.prototype.commonCompute = commonCompute  
3.  项目中使用，例如  
	// 相加运算  
	let result = this.commonCompute.andNumber(1,2,3)  
	console.log('result==='+result)  


#### 可调用的计算方法有
1.相加运算  
  方法名：andNumber  
  使用：andNumber(1,2,3)  // 入参个数无限制  
2.相减运算  
  方法名：subtractNumber  
  使用：subtractNumber(6,2,1)  // 入参个数无限制  
3.相乘运算  
  方法名：subNumber  
  使用：subNumber(6,2,1)  // 入参个数无限制  
4.相除运算  
  方法名：divideNumber  
  使用：divideNumber(6,2,1)  // 入参个数无限制  
5.把值转换成整数  
  方法名：parseInt  
  使用：parseInt(string)  // string是要被解析的值。如果参数不是一个字符串，则将其转换为字符串  
6.把值转换成浮点数  
  方法名：parseFloat  
  使用：parseFloat(string)  // 可以将字符串转换成浮点数  
7.把给定的值转换成Boolean型  
  方法名：boolean  
  使用：boolean(value) // 使用Boolean(value)方法可以强制转换任意值为boolean类型  
8.把给定的值转换成数字  
  方法名：number  
  使用：number(object) // 可选。一个 JavaScript 对象。如果没有提供参数，则返回0  
9.把给定的值转换成字符串  
  方法名：string  
  使用：string(s) // 参数 s 是要存储在 String 对象中或转换成原始字符串的值  
10.向上取整  
  方法名：ceil  
  使用：ceil(num) // 可对一个数进行上舍入  
11.向下取整  
  方法名：floor  
  使用：floor(num) // 可对一个数进行下舍入  
12.四舍五入  
  方法名：round  
  使用：round(num) // 可把一个数字舍入为最接近的整数  
13.返回给定的数组中的较大的数  
  方法名：max  
  使用：max(array)  // 入参array可0或多个值，在 ECMASCript v3 之前，该入参array只能传两个值  
14.返回给定的数组中的较小的数  
  方法名：min  
  使用：min(array)  // 入参array可0或多个值，在 ECMASCript v3 之前，该入参array只能传两个值  
15.四舍五入,保留n位小数  
  方法名：toFixed  
  使用：toFixed(n) // 入参n，必传；规定小数的位数，是 0 ~ 20 之间的值，包括 0 和 20，有些实现可以支持更大的数值范围；如果省略了该参数，将用 0 代替  
16.不四舍五入,保留n位小数  
方法名：decimal  
使用：decimal(value, n) // 必传，value是需要保留小数的值，n是规定小数的位数  






